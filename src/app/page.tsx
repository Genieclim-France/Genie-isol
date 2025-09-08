import Article from "./components/home/Article";
import BannerMid from "./components/home/BannerMid";
import Hero from "./components/home/Hero";
import FormDevis from "./components/home/FormDevis";
import Products from "./components/home/Products";
import BannerDown from "./components/home/BannerDown";
import Slider from "./components/home/Slider";

export default function Home() {
  return (
    <>
      <Hero />
      <Article />
      <BannerMid />
      <Products />
      <BannerDown />
      <Slider />
      <FormDevis />
      <section className="flex flex-col p-8 lg:px-32 py-20 2xl:px-80">
        <h3 className="text-2xl font-bold after:content-[''] after:block after:w-10 after:h-[0.35rem] after:bg-primary after:mt-4">
          Un accompagnement 100% personnalisée à chaque projet
        </h3>
        <p className="py-4 text-base font-kollektif">
          Grâce à des équipes qualifiées et expérimentées, nous répondons aux
          besoins des constructeurs, promoteurs, maîtres d’œuvre, entreprises
          générales et artisans qui recherchent un partenaire fiable et réactif
          pour leurs chantiers. Nous sommes certifiés Qualibat RGE, gage de
          qualité et de conformité aux normes en vigueur. Cela garantit à nos
          partenaires des prestations soignées, respectant les standards du
          secteur et répondant aux attentes les plus exigeantes en termes de
          performance énergétique et de durabilité.
        </p>
        <p className="text-base font-kollektif">
          Notre organisation, pensée pour la sous-traitance, nous permet
          d’intervenir efficacement sur des chantiers de toute taille, partout
          en France. Nous mettons un point d’honneur à respecter les délais, les
          contraintes techniques et les exigences de sécurité propres à chaque
          projet.
        </p>
      </section>
    </>
  );
}
