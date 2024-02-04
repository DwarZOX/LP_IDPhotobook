import squosh2bg from "../assets/squosh2bg.png";
import kirimfoto from "../assets/kirimfoto.png";
import variantukuran from "../assets/variantukuran.png";
import prosesproduksi from "../assets/prosesproduksi.png";
import cover_desain from "../assets/cover&desain.png";
import Card from "./Card";

const Infomation = () => {
  return (
    <section className="flex lg:flex-col flex-wrap lg:gap-[170px] w-full bg-center bg-no-repeat h-screen lg:h-[900px] lg:pt-[30px] items-center justify-center" style={{ backgroundImage: `url(${squosh2bg})`, backgroundSize: "524px 485px" }}>
      <span className="text-[24px] lg:text-[32px] font-bold">Informasi IDPhotobook</span>
      <div className="relative w-full lg:w-1/2 flex justify-center items-center gap-[20px] lg:gap-x-[100px] lg:gap-y-[50px] flex-wrap text-[18px]">
        <Card className="lg:w-[200px] max-w-[200px] h-[238px] flex flex-col items-center justify-evenly rounded-[12px] bg-[#FDD039]">
          <img src={kirimfoto} alt="" className="w-[158px] h-[158px] rounded-[12px]" />
          <span>Kirim Foto</span>
        </Card>
        <Card className="lg:w-[200px] max-w-[200px] h-[238px] flex flex-col items-center justify-evenly rounded-[12px] bg-[#FDD039]">
          <img src={prosesproduksi} alt="" className="w-[158px] h-[158px] rounded-[12px]" />
          <span>Proses Produksi</span>
        </Card>
        <Card className="lg:w-[200px] max-w-[200px] h-[238px] flex flex-col items-center justify-evenly rounded-[12px] bg-[#FDD039]">
          <img src={variantukuran} alt="" className="w-[158px] h-[158px] rounded-[12px]" />
          <span>Variant Ukuran</span>
        </Card>
        <Card className="lg:w-[200px] max-w-[200px] h-[238px] flex flex-col items-center justify-evenly rounded-[12px] bg-[#FDD039]">
          <img src={cover_desain} alt="" className="w-[158px] h-[158px] rounded-[12px]" />
          <span>Cover & Desain</span>
        </Card>
      </div>
    </section>
  );
};

export default Infomation;
