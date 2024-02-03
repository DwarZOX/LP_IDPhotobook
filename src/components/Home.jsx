import hero from "../assets/hero.png"
import hero1 from "../assets/hero1-1.png"
import { GoArrowUpRight } from "react-icons/go"

const Home = () => {
  return (
    <section id="home" className="flex h-[750px]"
        style={{backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
      >
        <div className="flex m-auto gap-[42px] items-center px-[120px]">
          <div className="flex flex-col gap-[16px]">
            <span className="font-semibold">Percetakan album foto gaya majalah</span>
            <span className="text-[56px] leading-12 font-bold">Buat momen bersama, abadikan ceritanya</span>
            <p className="tracking-[1.9px]">Jadikan setiap cerita menjadi unik dan menarik, jadikan momen kumpul keluarga sebagai hal indah, mengenang, tertawa bersama</p>
            <button className="bg-[#FDD039] h-[58px] w-[300px] border-none rounded-[12px] text-[24px] font-bold flex items-center justify-center gap-2 cursor-pointer">Lihat Katalog kami <GoArrowUpRight className="w-[26px] h-[26px]"/></button>
          </div>
          <img src={hero1} alt="" className="w-[566px] h-[408px]"/>
        </div>
      </section>
  )
}

export default Home