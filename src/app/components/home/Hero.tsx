import Link from "next/link";

function Hero() {
  return (
    <header className="relative min-h-[50vh] lg:h-[90vh] 2xl:h-[85vh] bg-cover bg-center bg-no-repeat lg:bg-[url('/hero-desktop.webp')] bg-[url('/hero-mobile.webp')]">
      <div className="container xl:mx-0 p-8 lg:px-20 xl:px-28 lg:py-12 xl:py-20 2xl:p-28 2xl:px-80">
        <div className="max-w-[50rem] flex flex-col items-center lg:items-start">
          <h1 className="text-white text-2xl lg:text-5xl xl:text-6xl lg:leading-tight xl:leading-tight uppercase font-bold mb-8">
            <span className="[text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
              Réalisez
            </span>
            <span className="ml-4 text-primary bg-tertiary rounded-full px-2 lg:px-5 text-nowrap [box-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
              votre isolation
            </span>{" "}
            <span className="[text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
              des combles perdus pour
            </span>
            <br />
            <span className="[box-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)] text-primary bg-tertiary rounded-lg px-3 py-1 lg:pt-3 text-4xl lg:text-8xl font-emOne inline-block align-middle mt-2">
              1€*
            </span>
          </h1>
          <div className="flex flex-col pt-8 lg:flex-row lg:items-center lg:mt-10 xl:mt-16 font-emOne lg:gap-8 xl:gap-10">
            <Link
              href="/#contact-form"
              className="btn xl:btn-lg bg-secondary border-2 border-transparent text-white text-md xl:text-lg font-bold uppercase mt-4 lg:mt-0 px-4 rounded-full hover:bg-hover hover:border-white shadow-lg"
            >
              DEMANDEZ VOTRE DEVIS
            </Link>
          </div>
          <p className="text-white text-xs mt-8 font-kollektif pt-40">
            * Eligibilité et restant dû à charge défini selon les revenus du
            foyer et les caractéristiques du bien concerné.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
