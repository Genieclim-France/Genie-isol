"use client";

import InfoContact from "./InfoContact";
import { useState } from "react";
function FormDevis() {
  const [Name, setName] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Message, setMessage] = useState("");
  const [Zipcode, setZipcode] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: `${FirstName} ${Name}`,
          email: Email,
          telephone: Phone,
          message: Message,
          adresse: "",
          codePostal: Zipcode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.message || "Erreur inconnue");
      }

      // Réinitialiser le formulaire
      setName("");
      setFirstName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setZipcode("");

      // Afficher un message de succès
      alert("Votre message a été envoyé avec succès !");
    } catch (error) {
      console.error("Erreur détaillée:", error);
      alert(
        `Une erreur est survenue : ${
          error instanceof Error ? error.message : "Erreur inconnue"
        }`
      );
    }
  };

  return (
    <section
      id="contact-form"
      className="flex flex-col lg:flex-row gap-4 p-6 bg-secondary lg:px-32 2xl:px-72 lg:bg-[url('/bg-contact.webp')] lg:bg-cover lg:bg-center lg:bg-no-repeat"
    >
      <div className="lg:bg-secondary lg:rounded-3xl lg:w-2/3 lg:p-12">
        <h3 className="text-2xl font-emOne text-tertiary text-start lg:pl-12">
          Demander un devis / Demande de sous-traitance
        </h3>
        <form
          className="flex flex-col gap-4 p-6 items-center lg:px-12"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:gap-8">
            <label className="form-control w-full lg:w-1/3 max-w-xs lg:max-w-none">
              <div className="label">
                <span className="label-text text-lg font-kollektif text-tertiary">
                  Nom*
                </span>
              </div>
              <input
                type="text"
                placeholder="Votre nom"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs focus:outline-primary focus:ring-primary"
                required
              />
            </label>
            <label className="form-control w-full lg:w-1/3 max-w-xs lg:max-w-none">
              <div className="label">
                <span className="label-text text-lg font-kollektif text-tertiary">
                  Prénom*
                </span>
              </div>
              <input
                type="text"
                placeholder="Votre prénom"
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs focus:outline-primary focus:ring-primary"
                required
              />
            </label>
            <label className="form-control w-full lg:w-1/3 max-w-xs lg:max-w-none">
              <div className="label">
                <span className="label-text text-lg font-kollektif text-tertiary">
                  Code postal*
                </span>
              </div>
              <input
                type="text"
                placeholder="Votre code postal"
                value={Zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs focus:outline-primary focus:ring-primary"
                required
              />
            </label>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:gap-8">
            <label className="form-control w-full lg:w-1/2 max-w-xs lg:max-w-none">
              <div className="label">
                <span className="label-text text-lg font-kollektif text-tertiary">
                  Email*
                </span>
              </div>
              <input
                type="text"
                placeholder="Votre email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered input-md w-full max-w-xs focus:outline-primary focus:ring-primary"
                required
              />
            </label>
            <label className="form-control w-full lg:w-1/2 max-w-xs lg:max-w-none">
              <div className="label">
                <span className="label-text text-lg font-kollektif text-tertiary">
                  Téléphone
                </span>
              </div>
              <input
                type="text"
                placeholder="Votre téléphone"
                className="input input-bordered input-md w-full max-w-xs focus:outline-primary focus:ring-primary"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>
          <label className="form-control w-full max-w-xs lg:max-w-none">
            <div className="label">
              <span className="label-text text-lg font-kollektif text-tertiary">
                Message*
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24 focus:outline-primary focus:ring-primary"
              placeholder="Votre message"
              required
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="form-control mt-4 lg:max-w-[26.5rem]">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox bg-tertiary [--chkbg:theme(colors.tertiary)] [--chkfg:theme(colors.primary)] mr-2 focus:outline-primary focus:ring-primary"
                />
                <p className="label-text text-tertiary ml-2">
                  J&apos;ai lu et accepte les{" "}
                  <span className="font-bold underline">CGU</span> ainsi que les{" "}
                  <span className="font-bold underline">mentions légales</span>
                </p>
              </label>
            </div>
            <div className="form-control lg:max-w-[30.5rem]">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox bg-tertiary [--chkbg:theme(colors.tertiary)] [--chkfg:theme(colors.primary)] mr-2 focus:outline-primary focus:ring-primary"
                />
                <p className="label-text text-tertiary ml-2">
                  J&apos;accepte de recevoir les offres et promos de{" "}
                  <span className="font-bold">GENIE ISOL FRANCE</span>
                </p>
              </label>
            </div>
            <button className="btn border-none text-secondary bg-primary hover:bg-primary/80 uppercase mt-6 font-emOne focus:outline-tertiary focus:ring-tertiary">
              Soumettre ma demande
            </button>
          </label>
        </form>
      </div>
      <InfoContact />
    </section>
  );
}

export default FormDevis;
