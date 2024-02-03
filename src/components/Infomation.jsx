import squosh2bg from '../assets/squosh2bg.png'
import kirimfoto from '../assets/kirimfoto.png'
import variantukuran from '../assets/variantukuran.png'
import prosesproduksi from '../assets/prosesproduksi.png'
import cover_desain from '../assets/cover&desain.png'
import Card from './Card'

const Infomation = () => {
  return (
    <section className="flex flex-col flex-wrap gap-[170px] w-full h-[900px] pt-[30px] items-center justify-center"
        style={{
          backgroundImage: `url(${squosh2bg})`,
          backgroundSize: '524px 485px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <span className="text-[32px] font-bold ">Informasi IDPhotobook</span>
        <div className="relative w-1/2 flex justify-center items-center gap-x-[100px] gap-y-[50px] flex-wrap text-[18px]">
        <Card className="w-[200px] h-[238px] flex flex-col items-center justify-evenly rounded-[12px] bg-[#FDD039]">
            <img src={kirimfoto} alt="" className="w-[158px] h-[158px] rounded-[12px]"/>
            <span>Kirim Foto</span>
        </Card>
        <Card className="w-[200px] h-[238px] flex flex-col items-center justify-evenly rounded-[12px] bg-[#FDD039]">
            <img src={prosesproduksi} alt="" className="w-[158px] h-[158px] rounded-[12px]"/>
            <span>Proses Produksi</span>
        </Card>
        <Card className="w-[200px] h-[238px] flex flex-col items-center justify-evenly rounded-[12px] bg-[#FDD039]">
            <img src={variantukuran} alt="" className="w-[158px] h-[158px] rounded-[12px]"/>
            <span>Variant Ukuran</span>
        </Card>
        <Card className="w-[200px] h-[238px] flex flex-col items-center justify-evenly rounded-[12px] bg-[#FDD039]">
            <img src={cover_desain} alt="" className="w-[158px] h-[158px] rounded-[12px]"/>
            <span>Cover & Desain</span>
        </Card>
        </div>
      </section>
  )
}

export default Infomation