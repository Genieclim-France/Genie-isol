import Link from "next/link";

function Hero() {
  return (
    <header className="relative min-h-[50vh] lg:h-[90vh] 2xl:h-[85vh] bg-cover bg-center bg-no-repeat lg:bg-[url('/hero-desktop.webp')] bg-[url('/hero-mobile.webp')]">
      <div className="container xl:mx-0 p-8 lg:px-20 xl:px-28 lg:py-12 xl:py-20 2xl:p-28 2xl:px-80">
        <div className="max-w-[50rem] flex flex-col items-center lg:items-start">
          <h1 className="text-white text-2xl lg:text-5xl xl:text-6xl lg:leading-tight xl:leading-tight uppercase font-bold mb-8">
            <span className="[text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
              Réalisez
            </span>{" "}
            <span className="text-primary bg-tertiary rounded-full px-2 lg:px-5 text-nowrap [box-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
              jusqu'à 70%
            </span>{" "}
            <span className="[text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
              d'économies sur vos factures de chauffage
            </span>
          </h1>
          <p className="[text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)] text-white text-2xl font-bold uppercase lg:pr-28 xl:mt-8">
            Bénéficiez de toute votre installation pour{" "}
            <span className="[box-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)] text-primary bg-tertiary rounded-lg px-3 py-1 lg:pt-3 text-4xl lg:text-8xl font-emOne inline-block align-middle ml-2 mt-1">
              1€*
            </span>
          </p>
          <div className="flex flex-col pt-8 lg:flex-row lg:items-center lg:mt-10 xl:mt-16 font-emOne lg:gap-8 xl:gap-10">
            <Link
              href="/#contact-form"
              className="btn xl:btn-lg bg-secondary border-2 border-transparent text-white text-md xl:text-lg font-bold uppercase mt-4 lg:mt-0 px-4 rounded-full hover:bg-hover hover:border-white shadow-lg"
            >
              DEMANDEZ VOTRE DEVIS
            </Link>
          </div>
          <p className="text-white text-xs mt-8 font-kollektif pt-10">
            * Eligibilité et restant dû à charge défini selon les revenus du
            foyer et les caractéristiques du bien concerné.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
