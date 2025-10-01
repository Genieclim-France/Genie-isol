import Link from "next/link";

function Hero() {
  return (
    <header className="relative min-h-[50vh] lg:h-[90vh] 2xl:h-[85vh] bg-cover bg-center bg-no-repeat lg:bg-[url('/hero-desktop.webp')] bg-[url('/hero-mobile.webp')]">
      <div className="container xl:mx-0 p-8 lg:px-20 xl:px-28 lg:py-12 xl:py-20 2xl:p-28 2xl:px-80">
        <div className="max-w-[50rem] flex flex-col items-center lg:items-start">
          <h1 className="text-white text-2xl lg:text-5xl xl:text-6xl lg:leading-tight xl:leading-tight uppercase font-bold mb-14">
            <span className="[text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
              Votre partenaire
            </span>{" "}
            <span className="text-primary bg-tertiary rounded-full px-2 lg:px-5 text-nowrap [box-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
              sous-traitant isolation
            </span>
          </h1>
          <h2 className="text-white text-xl lg:text-4xl xl:text-5xl lg:leading-tight xl:leading-tight uppercase font-bold mb-8">
            <span className="[text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
              L'isolation soufflée à seulement
            </span>
            <span className="ml-4 lowercase [box-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)] text-primary bg-tertiary rounded-lg px-3 py-1 lg:pt-3 text-3xl lg:text-7xl font-emOne inline-block align-top mt-2">
              10,50€/m²
            </span>
          </h2>
          <div className="flex flex-col pt-8 lg:flex-row lg:items-center lg:mt-10 xl:mt-16 font-emOne lg:gap-8 xl:gap-10">
            <Link
              href="/#contact-form"
              className="btn xl:btn-lg bg-secondary border-2 border-transparent text-white text-md xl:text-lg font-bold uppercase mt-4 lg:mt-0 px-4 rounded-full hover:bg-hover hover:border-white shadow-lg"
            >
              DEVENIR PARTENAIRE
            </Link>
            <Link
              href="/#contact-form"
              className="btn xl:btn-lg bg-primary border-white border-2 text-white text-md xl:text-lg font-bold uppercase mt-4 lg:mt-0 px-4 rounded-full hover:bg-secondary hover:border-secondary shadow-lg"
            >
              RECEVOIR LA GRILLE DE TARIFICATON
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
