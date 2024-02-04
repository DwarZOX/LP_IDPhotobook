import { catalog } from '../constant'
import Card from './Card'

const Catalog = () => {
    const toRupiah = (angka) => {
      const rupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(angka || 0);
      return `${rupiah} ,-`;
    };
  return (
    <section id="catalog" className="w-full flex flex-wrap lg:flex-nowrap py-[50px] px-[20px] box-border lg:py-0 h-full lg:h-[1600px] items-center justify-center">
    <div className="flex flex-col gap-5">
        <span className="font-bold text-[24px] pl-[35px]">Terbaru</span>
        <div className="flex justify-center flex-wrap gap-5 h-[50vh] lg:h-full overflow-y-auto">
      {catalog.map((item, index) => (
        item.new &&
          <Card key={index} className={"w-[216px] h-[326px] rounded-[10px] bg-white overflow-x-hidden"}>
              <img src={item.img} alt=""  className="w-[216px] h-[216px] object-cover"/>
              <div className="text-[14px] px-[15px]">
                <p>{item.title}</p>
                <span className="font-bold">{toRupiah(item.price)}</span>
                <span></span>
              </div>
          </Card>
      ))}
        </div>
      
        <span className="font-bold text-[24px] lg:pt-[50px] pl-[35px]">Semua Produk</span>
        <div className="flex justify-center flex-wrap-reverse lg:flex-wrap gap-5 h-[50vh] lg:h-full overflow-y-auto">
      {catalog.map((item, index) => (
          <Card key={index} className={"w-[216px] h-[326px] rounded-[10px] bg-white overflow-x-hidden"}>
              <img src={item.img} alt=""  className="w-[216px] h-[216px] object-cover"/>
              <div className="text-[14px] px-[15px]">
                <p>{item.title}</p>
                <span className="font-bold">{toRupiah(item.price)}</span>
                <span></span>
              </div>
          </Card>
      ))}
        </div>
        <div className="flex justify-center flex-col items-center gap-5 text-[18px] lg:text-[22px] lg:pt-[50px]">
            <span>Jelajahi lebih lanjut</span>
            <button className="text-[16px] lg:text-[18px] bg-[#FDD039] w-full lg:w-[136px] h-[51px] rounded-[8px] border-none cursor-pointer">Inspirasi lain</button>
        </div>
    </div>
  </section>
  )
}

export default Catalog