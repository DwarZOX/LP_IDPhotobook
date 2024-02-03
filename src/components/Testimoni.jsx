import quote from '../assets/quote.png'
import avatar from '../assets/avatar.png'
import Card from './Card'
import { dataTesti } from '../constant'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules"; 
import 'swiper/css';
import 'swiper/css/autoplay'

const Testimoni = () => {
  return (
    <section className="flex justify-center items-center pt-[50px] overflow-hidden">
        <Card className="w-[1312px] h-[600px] flex items-center bg-[#5ABCC5] rounded-[58px] pl-[80px]">
            <div className="text-[#FFF] pb-[100px]">
              <h1 className="text-[48px] w-[400px] leading-3 font-bold">Testimoni klien</h1>
              <p className="text-[20px] w-[300px] pb-[40px]">Dipercaya klien untuk hasil yang bagus dan terjangkau</p>
              <button className="w-[233px] h-[42px] rounded-[8px] bg-[#FFF] border-none text-[20px]">Lihat selengkapnya</button>
            </div>
            <div className="w-full flex-[1.1]">
              <Swiper 
                    modules={[Autoplay]}
                    spaceBetween={-180}
                    slidesPerView={3}
                    grabCursor
                    loop={true}
                    autoplay={{delay: 1500}}
                    speed={1500} 
                    className="swiper-container"
              >
                {dataTesti.map((testi, index) => (
                  <SwiperSlide key={index}>
                    <Card className="w-[336px] h-[432px] rounded-b-[24px] overflow-hidden"
                      style={{
                        backgroundImage: `url(${testi.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                 >
                  <div className="h-full bg-[#FDD039]/80 backdrop-brightness-75">
                      <div className="flex flex-col items-center gap-5 px-[10px] py-[20px]">
                         <img src={quote} className="w-[46px] h-[33px]"/>
                         <div className="text-[18px] text-center h-[250px] truncate text-wrap">
                            {testi.teks}
                          </div>
                        <div className="flex items-center gap-3 text-[#121212]">
                          <img src={avatar} alt="avatar" className="w-[64px] h-[64px] object-cover rounded-full bg-white"/>
                        <span className="text-[14px]">
                          <p className="font-bold text-[16px]">{testi.nama}</p>
                          {testi.jenis}
                        </span>
                        </div>
                      </div>
                  </div>
                 </Card>
                 </SwiperSlide>
                ))}
              </Swiper>
            </div>
        </Card>
      </section>
  )
}

export default Testimoni