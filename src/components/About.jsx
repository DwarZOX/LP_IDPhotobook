import Card from './Card'
import hero2 from '../assets/hero2.png'
import facebook from '../assets/facebook.png'
import about from '../assets/about.png'
import instagram from '../assets/instagram.png'
import idphotobook from '../assets/idphotobook.png'
import google from '../assets/google.png'
const About = () => {
  return (
    <section className="flex h-[950px] bg-blue-600/80 backdrop-brightness-75"
        style={{backgroundImage: `url(${hero2})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
      >
        <div className="w-full flex flex-col justify-center px-[180px] items-baseline bg-[#5ABCC5]/60 backdrop-brightness-75">
          <div id="about" className="relative flex">
          <Card className="pt-[94px] pl-[57px] pr-[340px] items-center w-[880px] h-[700px] bg-[#FFF]/60 rounded-[72px] box-border">
              <span className="text-[32px] font-bold">Berdiri Sejak Tahun 2017</span>
              <p className="text-[18px] leading-6">ID Photobook merupakan salah satu perusahaan jasa photobook terbesar di Indonesia. Berdiri sejak tahun 2017, kini ID Photobook sudah merajai pasarnya. Kami hanya memberikan bahan dan pelayanan terbaik untuk customer yang dibuktikan dengan garansi kami “Tidak puas, Anda akan mendapat yang baru”. Photobook kami dibuat dengan cermat oleh orang-orang yang berdedikasi dan ahli di bidangnya. ID photobook menawarkan cara termudah untuk menikmati momen melalui media cetak. Bahkan memberikan pengalaman yang menyenangkan melalui sentuhan dan membalik halaman demi halaman. ID Photobook adalah solusi sempurna untuk membuat kenangan indah menjadi lebih baik!</p>
          </Card>
          <Card className="absolute -right-[250px] overflow-hidden mt-[30px] pt-[38px] pr-[38px] rounded-tl-[142px] w-[503px] h-[606px] bg-[#FDD039]/60">
            <img src={about} alt="" className="w-full h-full object-cover rounded-tl-[142px]" />
          </Card>
          <Card className="absolute bottom-0 -left-[30px] rounded-[32px] flex justify-around w-[1188px] h-[142px] bg-[#FDD039]">
            <div className="flex flex-col items-center justify-center text-[18px]">
              <span className="font-bold">Lebih</span>
              <span className="font-bold text-[58px]">+50</span>
              <span>Rekomendasi <strong>Artis</strong></span>
            </div>
            <div className="flex flex-col items-center justify-center text-[18px]">
              <img src={facebook} alt="" />
              <span className="font-bold text-[58px]">5.0</span>
              <span>Opinion of <strong>13.978</strong> People</span>
            </div>
            <div className="flex flex-col items-center justify-center text-[18px]">
              <img src={google} alt=""/>
              <span className="font-bold text-[58px]">4.8</span>
              <span><strong>1.044</strong> Ulasan</span>
            </div>
            <div className="flex flex-col gap-[16px] items-center justify-center text-[18px]">
              <img src={instagram} alt="" />
              <img src={idphotobook} alt="" />
              <span><strong>Verified</strong> badge</span>
            </div>
            <div className="flex flex-col items-center justify-center text-[18px]">
              <span className="font-bold">Diliput</span>
              <span className="font-bold text-[58px]">+37</span>
              <span><strong>Media</strong> Nasional</span>
            </div>
          </Card>
          </div>
        </div>

      </section>
  )
}

export default About