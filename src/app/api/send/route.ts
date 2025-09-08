import { NextResponse } from "next/server";

const apiKey = process.env.BREVO_API_KEY;
if (!apiKey) {
  console.warn("Clé API Brevo manquante");
}

interface BrevoErrorResponse {
  message: string;
  code: number;
  response?: {
    body: unknown;
  };
}

export async function POST(request: Request) {
  if (!apiKey) {
    console.error("Clé API Brevo manquante");
    return NextResponse.json(
      { message: "Configuration du serveur d'emails manquante" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { nom, email, telephone, message, adresse, codePostal } = body;

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!nom || !email || !message || !emailRegex.test(email)) {
      return NextResponse.json(
        {
          message: "Champs obligatoires manquants ou email invalide",
          details: !emailRegex.test(email)
            ? "Format d'email invalide"
            : "Champs manquants",
        },
        { status: 400 }
      );
    }

    const emailData = {
      sender: {
        email: process.env.SENDER_EMAIL || "a.janiak@genieclimfrance.fr",
        name: "GENIE ISOL FRANCE",
      },
      to: [
        {
          email: process.env.RECIPIENT_EMAIL || "a.janiak@genieclimfrance.fr",
        },
      ],
      subject: `Nouveau message de ${nom} depuis le formulaire de contact`,
      textContent: `
        Nouveau message de: ${nom}
        Email: ${email}
        Téléphone: ${telephone || "Non renseigné"}
        Adresse: ${adresse || "Non renseignée"}
        Code Postal: ${codePostal || "Non renseigné"}
        Message: ${message}
      `,
      htmlContent: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone || "Non renseigné"}</p>
        <p><strong>Code Postal:</strong> ${codePostal || "Non renseigné"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    try {
      console.log("Tentative d'envoi avec configuration:", {
        to: emailData.to[0].email,
        from: emailData.sender.email,
        subject: emailData.subject,
        apiKeyPresent: !!apiKey,
      });

      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Erreur Brevo: ${errorData.message || response.statusText}`
        );
      }

      return NextResponse.json({ message: "Email envoyé avec succès" });
    } catch (sendError: unknown) {
      console.error("Erreur Brevo détaillée:", {
        error: sendError,
        stack: (sendError as Error).stack,
      });

      return NextResponse.json(
        {
          message: "Erreur lors de l'envoi de l'email",
          details: (sendError as Error).message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Erreur générale:", error);
    return NextResponse.json(
      { message: "Erreur lors du traitement de la requête" },
      { status: 500 }
    );
  }
}
