import Image from "next/image";
import ProgressBar from "./ProgressBar";
import Accordion from "./Accordion";
import isolationImage from "../../../../public/isolimg.webp";
import isolationImage2 from "../../../../public/thumb1.png";
import isolationImage3 from "../../../../public/thumb2.jpeg";
import isolationImage4 from "../../../../public/thumb3.jpeg";

export default function IsolationPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:px-40 2xl:px-96 lg:gap-8 lg:pt-24 lg:mb-16">
        <div id="nos-solutions" className="flex flex-col flex-1 lg:gap-8">
          <article className="px-8 lg:px-0 pt-32 lg:pt-0">
            <h2 className="text-xl 2xl:text-2xl font-emOne uppercase after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mt-4">
              Comment isoler mon habitation :<br />
              <span className="font-bold">Combles, plancher bas, ITE</span>
            </h2>
            <p className="text-lg 2xl:text-xl lg:text-base mt-4">
              Notre équipe de professionnels choisit des produits alliant
              confort et écologie pour une isolation saine et efficace.
            </p>
            <p className="text-lg 2xl:text-xl lg:text-base mt-4">
              Le toit est la 1ère source de déperdition de chaleur dans une
              maison. En isolant les combles, vous réduisez jusqu'à 30% vos
              factures de chauffage !
            </p>
          </article>
          <aside className="flex flex-col justify-center gap-4 bg-[#f5f5f5] m-8 rounded-xl p-8 shadow-xl lg:mx-0 lg:m-0">
            <ProgressBar percentage={85} title="Économie" />
            <ProgressBar percentage={100} title="Efficacité" />
            <ProgressBar percentage={100} title="Esthétique" />
          </aside>
        </div>
        <div className="flex justify-center m-8 lg:w-1/2 lg:h-[37rem] 2xl:h-[39rem] lg:m-0">
          <Image
            src={isolationImage}
            alt="Votre isolation"
            className="rounded-3xl shadow-xl lg:w-full 2xl:rounded-[2rem] object-cover"
          />
        </div>
      </div>
      <Accordion
        sections={[
          {
            title: "Isolation des combles",
            content: [
              "Aménagés, aménageables ou perdus, nous isolons tout vos espaces en contact avec des pièces chauffées.",
              "Également, l'isolation des combles vous permet de maintenir la chaleur en hiver, vous pouvez ainsi gagner jusqu'à 3 degrés !",
              "En été, vous conservez plus longtemps la fraîcheur dans votre maison.",
              "Enfin, ces travaux vous permettent d'améliorer le DPE (Diagnostic de Performance Énergétique) de votre logement.",
              "En moyenne, vous réalisez une plus-value de 5% pour chaque classe énergétique gagnée.",
              "Notre équipe s'attarde à choisir les meilleurs produits correspondant à vos besoins.",
              "La laine soufflée sera parfaite pour vos combles perdus, tandis que la laine en rouleaux servira vos combles aménageables ou aménagés.",
            ],
            image: isolationImage2,
          },
          {
            title: "Isolation des planchers bas",
            content: [
              "L'isolation des planchers bas est essentielle pour limiter les pertes de chaleur par le sol, représentant jusqu'à 10 % des déperditions énergétiques d'un logement.",
              "Une isolation efficace de vos planchers améliore votre confort thermique en toute saison et permet de réaliser des économies d'énergie importantes. Cette solution élimine la sensation désagréable de sol froid et prévient les remontées d'humidité.",
              "Chez Genie Isol France, nous vous proposons des techniques d'isolation performantes adaptées à votre habitation, garantissant un confort durable et une réduction de vos factures.",
            ],
            image: isolationImage3,
          },
          {
            title: "ITE (isolation thermique extérieure)",
            content: [
              "L'Isolation Thermique par l'Extérieur (ITE) consiste à envelopper votre habitation d'une couche isolante pour réduire significativement les pertes de chaleur.",
              "Cette solution présente plusieurs avantages majeurs : elle améliore la performance énergétique, élimine les ponts thermiques, assure un meilleur confort quelle que soit la saison et augmente la valeur de votre bien immobilier.",
              "L'ITE permet également de moderniser l'aspect de votre façade. Avec Genie Isol France, profitez d'une isolation personnalisée, mise en œuvre par des experts, pour un habitat plus économique et respectueux de l'environnement.",
            ],
            image: isolationImage4,
          },
        ]}
      />
    </>
  );
}
