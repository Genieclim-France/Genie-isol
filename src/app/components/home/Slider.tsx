"use client";

import VideoSlider from "./Slider-video";

function Slider() {
  return (
    <section className="flex flex-col p-6 pt-16 xl:px-20 2xl:px-52">
      <h4 className="text-xl mb-10 font-emOne uppercase text-nowrap after:content-[''] after:mt-2 after:block after:w-10 after:h-[0.35rem] after:bg-primary lg:text-2xl lg:px-[8.5rem]">
        Ils nous ont fait confiance !
      </h4>
      <div className="md:px-32">
        <VideoSlider />
      </div>
    </section>
  );
}
export default Slider;
