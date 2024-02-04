import logo2 from "../assets/logo2.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import yt from "../assets/yt.png";
import tiktok from "../assets/tiktok.png";
import ScrollIntoView from "react-scroll-into-view";
const Footer = () => (
  <footer id="footer" className="flex bg-[#5ABBC4] items-center justify-between h-[172px] lg:h-[112px] px-[20px] lg:px-[32px]">
    <div className="flex-[1.3] flex flex-col lg:flex-row gap-[15px] lg:gap-[35px] items-start lg:items-center text-[#FFF]">
      <ScrollIntoView smooth selector="#home">
        <img src={logo2} alt="" className="h-[25px] lg:h-[40px] w-[135px] lg:w-[204px] cursor-pointer" />
      </ScrollIntoView>
      <div className="flex-col flex gap-[4px] text-[11px] lg:text-[14px]">
        <span>Kebijakan Privasi</span>
        <span>Kebijakan Cookie</span>
        <span>Peta Lokasi</span>
      </div>
      <div className="flex-col flex gap-[4px] text-[11px] lg:text-[14px] lg:self-start">
        <span>Syarat & Ketentuan</span>
        <span>Keamanan</span>
      </div>
    </div>
    <div className="flex-[1] lg:justify-end flex flex-wrap lg:flex-row items-center gap-[44px] h-full">
      <span className="flex flex-wrap gap-[8px] self-end lg:self-center">
        <a href="https://www.facebook.com/idphotobook" rel="noreferrer" target="_blank">
          <img src={fb} alt="fb" className="w-[32px] h-[32px] cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/id.photobook/?hl=en" rel="noreferrer" target="_blank">
          <img src={ig} alt="ig" className="w-[32px] h-[32px] cursor-pointer" />
        </a>
        <a href="https://www.youtube.com/c/idphotobook" rel="noreferrer" target="_blank">
          <img src={yt} alt="yt" className="w-[32px] h-[32px] cursor-pointer" />
        </a>
        <a href="https://www.tiktok.com/@idphotobook" rel="noreferrer" target="_blank">
          <img src={tiktok} alt="tiktok" className="w-[32px] h-[32px] cursor-pointer" />
        </a>
      </span>
      <span className="text-[#FFF] text-[11px] lg:text-[14px]">Copyright &copy; 2024 PT IDPhotobook Kreasi Indonesia.</span>
    </div>
  </footer>
);

export default Footer;
