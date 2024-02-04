import hero from "../assets/hero.png";
import hero1 from "../assets/hero1-1.png";
import { GoArrowUpRight } from "react-icons/go";
import ScrollIntoView from "react-scroll-into-view";

const Home = () => {
  return (
    <section id="home" className="flex bg-contain bg-no-repeat lg:bg-center lg:bg-cover h-[80vh] lg:h-[750px]" style={{ backgroundImage: `url(${hero})` }}>
      <div className="flex m-auto gap-[42px] self-end items-center md:pt-0 px-[20px] lg:px-[120px]">
        <div className="flex flex-col gap-[16px]">
          <span className="font-semibold hidden lg:inline">Percetakan album foto gaya majalah</span>
          <span className="text-[24px] lg:text-[52px] leading-12 font-bold">Buat momen bersama, abadikan ceritanya</span>
          <p className="leading-6 tracking-[1.9px] text-[16px]">Jadikan setiap cerita menjadi unik dan menarik, jadikan momen kumpul keluarga sebagai hal indah, mengenang, tertawa bersama</p>
          <ScrollIntoView selector="#catalog" smooth className="bg-[#FDD039] h-[48px] lg:h-[58px] w-full lg:w-[300px] border-none rounded-[12px] text-[16px] lg:text-[24px] font-bold flex items-center justify-center gap-2 cursor-pointer">
            Lihat Katalog kami <GoArrowUpRight className="w-[20px] lg:w-[26px] h-[20px] lg:h-[26px]" />
          </ScrollIntoView>
        </div>
        <img src={hero1} alt="" className="w-[566px] h-[408px] hidden lg:inline" />
      </div>
    </section>
  );
};

export default Home;
