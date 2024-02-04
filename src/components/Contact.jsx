import shopee from "../assets/shopee.png"
import tokopedia from "../assets/tokopedia.png"

const Contact = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full h-screen lg:h-[500px] gap-20 justify-center px-[20px] box-border"
      >
        <div className="flex flex-col w-full lg:w-[450px]">
          <span className="text-[18px]">Hubungi kami</span>
          <span className="font-bold text-[24px] lg:text-[36px] py-[11px]">Siap cetak impianmu</span>
          <span className="text-[18px]">Melayani 24 Jam</span>
        </div>
        <div className="w-full lg:w-[700px] flex flex-col gap-[15px]">
          <input type="text" placeholder="Nama Konsumen" className="h-[50px] border-none rounded-[8px] px-[16px] outline-none placeholder:text-[#121212]"/>
          <input type="text" placeholder="Nomor Whatsapp/Telpon" className="h-[50px] border-none rounded-[8px] px-[16px] outline-none placeholder:text-[#121212]"/>
          <button className="h-[50px] bg-[#FDD039] rounded-[8px] border-none text-[14px] font-semibold cursor-pointer">Kirim</button>
        <div className="flex flex-col text-center lg:self-end pt-[60px] text-[18px]">
          <p>Kamu juga dapat memesan lewat:</p>
          <span className="self-center lg:self-end flex gap-5 hover:drop-shadow-lg">
            <a href="https://shopee.co.id/id_photobook" rel="noreferrer" target="_blank"><img src={shopee} alt="" className="w-[44px] h-[62px] cursor-pointer"/></a>
            <a href="https://www.tokopedia.com/idphotobook" rel="noreferrer" target="_blank"><img src={tokopedia} alt="" className="w-[100px] h-[67px] cursor-pointer"/></a>
          </span>
        </div>
        </div>
      </section>
  )
}

export default Contact