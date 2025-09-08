import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

function ButtonSolution({
  icon,
  title,
  link,
}: {
  icon: string;
  title: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="bg-[#f9F9F9] text-secondary px-4 h-16 w-full lg:h-24 lg:max-w-[28.5rem] xl:max-w-[30rem] 2xl:max-w-[37rem] 3xl:max-w-[47rem] 2xl:text-xl 2xl:h-36 rounded-xl shadow-md flex items-center justify-between gap-2 uppercase font-bold hover:bg-primary hover:text-white group transition-all duration-300 cursor-pointer"
    >
      <Image
        src={icon}
        alt="pac"
        className="group-hover:brightness-0 group-hover:invert transition-all duration-300 lg:w-10 lg:h-10"
      />
      {title}
      <IoIosArrowForward className="text-primary group-hover:text-white font-bold text-xl transition-all duration-300" />
    </Link>
  );
}

export default ButtonSolution;
