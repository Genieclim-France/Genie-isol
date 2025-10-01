import React from "react";

function BannerDown() {
  return (
    <section className="flex flex-col lg:flex-row lg:bg-[url('/bg-bannerdown-dsktp.webp')] bg-[url('/bg-bannerdown-mobile.webp')] bg-cover bg-center bg-no-repeat">
      <div className="lg:w-1/2 container text-center lg:text-left xl:mx-0 p-8 lg:px-20 xl:px-28 lg:py-12 xl:py-20 2xl:p-28 2xl:px-80">
        <h2 className="text-white text-2xl lg:text-4xl xl:text-4xl lg:leading-tight xl:leading-tight uppercase font-bold mb-8 lg:mb-0">
          <span className="text-primary bg-tertiary rounded-full px-2 lg:px-5 text-nowrap [box-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
            Genie Isol France
          </span>{" "}
          <br />
          <span className="[text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
            la garantie d’un <span className="text-nowrap">sous-traitant</span>{" "}
            qualifié et réactif
          </span>
        </h2>
      </div>
      <ul className="lg:w-1/2 flex flex-col lg:flex-row gap-4 justify-center items-center pb-16 lg:pb-0">
        <li className="flex flex-col items-center [text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
          <p className="text-white text-6xl lg:text-5xl xl:text-6xl lg:leading-tight xl:leading-tight uppercase font-bold">
            48H
          </p>
          <p className="text-white text-center font-emOne text-lg lg:text-sm px-4 lg:px-3 2xl:px-14">
            délai d'intervention
          </p>
          <p className="text-white text-center font-emOne text-lg lg:text-sm px-4 lg:px-3 2xl:px-14">
            partout en France
          </p>
        </li>
        <li className="flex flex-col items-center [text-shadow:_2px_2px_4px_rgb(0_0_0_/_20%)]">
          <p className="text-white text-6xl lg:text-5xl xl:text-6xl lg:leading-tight xl:leading-tight uppercase font-bold">
            +2000
          </p>
          <p className="text-white text-center font-emOne text-lg lg:text-sm px-4 lg:px-3 2xl:px-14">
            logements rénovés
          </p>
        </li>
      </ul>
    </section>
  );
}

export default BannerDown;
