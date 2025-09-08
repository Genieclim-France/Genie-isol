export default function MentionsLegales() {
  return (
    <>
      <header className="bg-[url('/hero-mobile.webp')] bg-cover bg-center flex flex-col justify-center items-center lg:items-start lg:font-kollektif lg:pl-20 text-tertiary py-8 h-[300px]">
        <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>
      </header>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Éditeur</h2>
          <p className="mb-4">
            Conformément à l&apos;article n°6 de la Loi n°2004-575 du 21 Juin
            2004 pour la confiance dans l&apos;économie numérique, les
            responsables du présent site internet sont :
          </p>
          <p className="mb-4">
            Le Site est administré par la société GÉNIE ISOL FRANCE, société par
            actions simplifiée au capital de 30 000 €, immatriculée au Registre
            du Commerce et des Sociétés de Bordeaux sous le numéro
            82748287800044, dont le siège social est situé 20 avenue Jean Mermoz
            33185 LE HAILLAN.
          </p>
          <ul className="mb-4 space-y-2">
            <li>N° TVA Intracommunautaire : FR08827482878</li>
            <li>Directeur de la Publication : Camille PERNOT</li>
            <li>Contact : contact@genieisolfrance.fr</li>
            <li>Tél : 09 72 12 14 01 (prix d&apos;un appel local)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Droits d&apos;auteur</h2>
          <p className="mb-4">
            Les marques et logos figurant sur ce site sont des marques déposées
            par GÉNIE ISOL FRANCE. Leur mention n&apos;accorde en aucune manière
            une licence ou un droit d&apos;utilisation quelconque desdites
            marques, qui ne peuvent donc être utilisées sans le consentement
            préalable et écrit du propriétaire de la marque sous peine de
            contrefaçon.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Collecte des données</h2>
          <p className="mb-4">
            Lors de vos visites sur le Site, nous pouvons être amenés à vous
            demander certaines informations vous concernant afin d&apos;être en
            mesure de vous identifier, de vous proposer des services
            personnalisés ou encore afin d&apos;améliorer le Site et d&apos;être
            à votre écoute.
          </p>
          <p className="mb-4">
            Des données nominatives (noms, prénoms, coordonnées postales,
            e-mail…) ou non nominatives pourront vous être demandées. Certaines
            informations vous concernant devront être obligatoirement
            communiquées pour que vous puissiez accéder au service concerné. Les
            informations revêtant un caractère obligatoire sont signalées.
          </p>
          <p className="mb-4">
            Afin d&apos;assurer le suivi de nos services et aux fins de
            formation de nos conseillers, nous pouvons être amenés à enregistrer
            le contenu des échanges téléphoniques et par emails que vous avez
            avec notre service client.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Informatique et libertés
          </h2>
          <p className="mb-4">
            Les données personnelles que l&apos;utilisateur peut être amené à
            fournir le sont sur une base volontaire. GÉNIE ISOL FRANCE collecte
            et traite vos données [nom, prénom, adresse de messagerie
            électronique, téléphone] aux fins de mise en œuvre de l&apos;offre
            de service de travaux de rénovation énergétique, dans le cadre du
            dispositif des Certificats d&apos;Économie d&apos;Énergie, issu de
            la loi POPE de 2005, et toutes autres offres que peut proposer la
            société GÉNIE ISOL FRANCE.
          </p>
          <p className="mb-4">
            Nous conservons vos données dans notre base uniquement le temps
            nécessaire à la réalisation des finalités visées ci-dessus et
            conformément à la réglementation en vigueur et notamment la
            réglementation spécifique en matière de CEE. Vos données sont
            ensuite archivées avec un accès restreint pour une durée
            supplémentaire pour des raisons limitées et autorisées par la loi
            (paiement, litiges, Pôle national des CEE…). Passé ce délai, elles
            sont supprimées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Responsabilité</h2>
          <p className="mb-4">
            GÉNIE ISOL FRANCE met tout en œuvre pour présenter aux utilisateurs
            des informations disponibles et vérifiées, mais ne saurait être
            tenue pour responsable des erreurs ou omissions, d&apos;une absence
            de disponibilité de ces informations. En conséquence,
            l&apos;utilisateur reconnaît utiliser des informations sous sa
            responsabilité exclusive. GÉNIE ISOL FRANCE est susceptible de
            modifier à tout moment le contenu de son site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="mb-4">
            GÉNIE ISOL FRANCE procède, sur le Site, à l&apos;enregistrement de
            données techniques, à savoir des cookies. Le cookie est un
            enregistrement d&apos;informations par le serveur dans un fichier
            texte situé sur votre ordinateur. Ces informations peuvent être
            relues et modifiées ultérieurement par ce même serveur.
          </p>
          <p className="mb-4">
            La durée de conservation de ces informations dans votre ordinateur,
            sans suppression manuelle de votre part, est de 365 jours.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Droit applicable</h2>
          <p className="mb-4">
            Le droit applicable est le droit français. En conséquence tout
            litige relèvera de la compétence des tribunaux français.
          </p>
        </section>
      </div>
    </>
  );
}
