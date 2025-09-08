import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

function SocialLink() {
  return (
    <section className="flex flex-col lg:flex-row justify-center lg:justify-normal items-center bg-primary p-8">
      <ul className="flex gap-4 justify-between lg:justify-normal lg:w-1/3 w-full">
        <li className="btn btn-circle text-2xl bg-secondary rounded-full hover:bg-white">
          <a href="https://www.instagram.com/genieclimfrance/" target="_blank">
            <FaInstagram className="text-primary" />
          </a>
        </li>
        <li className="btn btn-circle text-2xl bg-secondary rounded-full hover:bg-white">
          <a
            href="https://www.facebook.com/p/GenieClim-France-61551065537391/"
            target="_blank"
          >
            <FaFacebook className="text-primary" />
          </a>
        </li>
        <li className="btn btn-circle text-2xl bg-secondary rounded-full hover:bg-white">
          <a
            href="https://www.linkedin.com/company/genie-clim-france"
            target="_blank"
          >
            <FaLinkedin className="text-primary" />
          </a>
        </li>
        <li className="btn btn-circle text-2xl bg-secondary rounded-full hover:bg-white">
          <a href="https://www.youtube.com/@genieclimfrance" target="_blank">
            <FaYoutube className="text-primary" />
          </a>
        </li>
      </ul>
      <p className="text-secondary text-center lg:mt-0 text-sm mt-4 lg:mr-2">
        Copyright © {new Date().getFullYear()} GÉNIE ISOL FRANCE
      </p>
      <p className="text-secondary text-center text-sm">Tous droits réservés</p>
    </section>
  );
}

export default SocialLink;
