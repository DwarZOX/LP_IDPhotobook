import logo2 from "../assets/logo2.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import yt from "../assets/yt.png";
import tiktok from "../assets/tiktok.png";
const Footer = () => (
  <footer id="footer" className="flex bg-[#5ABBC4] items-center justify-between h-[112px] px-[32px]">
    <div className="flex gap-[35px] items-center text-[#FFF]">
      <img src={logo2} alt="" className="h-[40px] w-[205px]" />
        <div className="flex-col flex gap-[4px] text-[14px]">
          <span>Kebijakan Privasi</span>
          <span>Kebijakan Cookie</span>
          <span>Peta Lokasi</span>
        </div>
        <div className="flex-col flex gap-[4px] text-[14px] self-start">
            <span>Syarat & Ketentuan</span>
            <span>Keamanan</span>
        </div>
    </div>
    <div className="flex items-center gap-[44px]">
        <span className="flex gap-[8px]">
            <img src={fb} alt="fb" className="w-[32px] h-[32px] cursor-pointer"/>
            <img src={ig} alt="ig" className="w-[32px] h-[32px] cursor-pointer"/>
            <img src={yt} alt="yt" className="w-[32px] h-[32px] cursor-pointer"/>
            <img src={tiktok} alt="tiktok" className="w-[32px] h-[32px] cursor-pointer"/>
        </span>
        <span className="text-[#FFF] text-[14px] ">Copyright &copy; 2024 PT IDPhotobook Kreasi Indonesia.</span>
    </div>
  </footer>
);

export default Footer;
