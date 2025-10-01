import React from "react";

function BannerDown() {
  return (
    <section className="flex flex-col lg:flex-row lg:bg-[url('/bg-bannerdown-dsktp.webp')] bg-[url('/bg-bannerdown-mobile.webp')] bg-cover bg-center bg-no-repeat px-8 lg:px-40 xl:px-40 2xl:px-72">
      {/* Colonne 1/3 - Texte de gauche */}
      <div className="lg:w-1/3 flex items-center justify-center p-8 lg:px-10 xl:px-16 lg:py-12 xl:py-20 2xl:p-28">
        <h2 className="text-white text-2xl lg:text-3xl xl:text-4xl lg:leading-tight xl:leading-tight uppercase font-bold text-center lg:text-left">
          <span className="text-primary bg-tertiary rounded-full px-2 lg:px-5 text-nowrap [box-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
            Genie Isol France
          </span>{" "}
          <br />
          <span className="[text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
            la garantie d'un <span className="text-nowrap">sous-traitant</span>{" "}
            qualifié et réactif
          </span>
        </h2>
      </div>

      {/* Colonne 1/3 - 48H au centre */}
      <div className="lg:w-1/3 flex flex-col items-center justify-center [text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)] pb-16 lg:pb-0">
        <p className="text-white text-7xl lg:text-5xl xl:text-8xl lg:leading-tight xl:leading-tight uppercase font-bold">
          48H
        </p>
        <p className="text-white text-center font-emOne text-lg lg:text-xl px-4 lg:px-3 2xl:px-14">
          délai d'intervention
        </p>
        <p className="text-white text-center font-emOne text-lg lg:text-xl px-4 lg:px-3 2xl:px-14">
          partout en France
        </p>
      </div>

      {/* Colonne 1/3 - +2000 à droite */}
      <div className="lg:w-1/3 flex flex-col items-center justify-center [text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)] pb-16 lg:pb-0">
        <p className="text-white text-6xl lg:text-5xl xl:text-6xl lg:leading-tight xl:leading-tight uppercase font-bold">
          +2000
        </p>
        <p className="text-white text-center font-emOne text-lg lg:text-sm px-4 lg:px-3 2xl:px-14">
          logements rénovés
        </p>
      </div>
    </section>
  );
}

export default BannerDown;
