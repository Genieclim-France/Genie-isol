import SocialLink from "./SocialLink";
import { IoMail } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import Link from "next/link";

function Footer() {
  return (
    <>
      <SocialLink />
      <footer className="bg-secondary lg:flex lg:flex-row lg:justify-evenly lg:gap-10 text-gray-400 p-8 2xl:px-20">
        <div className="lg:w-[30%]">
          <h3 className="text-lg font-bold text-tertiary mb-4">
            GÉNIE ISOL FRANCE
          </h3>
          <p>
            une équipe solide d&apos;experts techniques qui oeuvrent pour rendre
            la rénovation énergétique plus sûre, plus accessible et à moindre
            coût.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mt-8 text-tertiary mb-2">
            Coordonnées
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <IoMail className="text-primary" />
              <a href="mailto:contact@geniesolairefrance.fr">
                contact@genieisolfrance.fr
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <IoMdPhonePortrait className="text-primary" />
              <a href="tel:0972121401">09 72 12 14 01</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-tertiary mt-8 mb-2">
            Liens utiles
          </h3>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/">Accueil</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="#nos-solutions">Nos solutions isolations</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="#contact-form">Contactez-nous</Link>
            </li>
            <li className="hover:text-tertiary transition-colors duration-300 cursor-pointer">
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
