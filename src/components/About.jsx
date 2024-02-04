import Card from './Card'
import hero2 from '../assets/hero2.png'
import facebook from '../assets/facebook.png'
import about from '../assets/about.png'
import instagram from '../assets/instagram.png'
import idphotobook from '../assets/idphotobook.png'
import google from '../assets/google.png'
const About = () => {
  return (
    <section className="flex h-screen bg-cover bg-no-repeat bg-center lg:h-[950px]"
        style={{backgroundImage: `url(${hero2})`,}}
      >
        <div className="w-full flex flex-col justify-center px-[20px] lg:px-[180px] bg-[#5ABCC5]/60 backdrop-brightness-75">
          <div id="about" className="relative w-full lg:w-fit lg:flex">
          <Card className="px-[10px] lg:pt-[94px] lg:pl-[57px] lg:pr-[340px] items-center w-full md:w-[880px] h-[43vh] lg:h-[700px] bg-[#FFF]/60 backdrop:blur-md rounded-[24px] lg:rounded-[72px] box-border">
              <span className="text-[19px] lg:text-[32px] font-bold">Berdiri Sejak Tahun 2017</span>
              <p className="text-[14px] lg:text-[18px] lg:leading-6">ID Photobook merupakan salah satu perusahaan jasa photobook terbesar di Indonesia. Berdiri sejak tahun 2017, kini ID Photobook sudah merajai pasarnya. Kami hanya memberikan bahan dan pelayanan terbaik untuk customer yang dibuktikan dengan garansi kami “Tidak puas, Anda akan mendapat yang baru”. Photobook kami dibuat dengan cermat oleh orang-orang yang berdedikasi dan ahli di bidangnya. ID photobook menawarkan cara termudah untuk menikmati momen melalui media cetak. Bahkan memberikan pengalaman yang menyenangkan melalui sentuhan dan membalik halaman demi halaman. ID Photobook adalah solusi sempurna untuk membuat kenangan indah menjadi lebih baik!</p>
          </Card>
          <Card className="hidden lg:block absolute -right-[250px] overflow-hidden mt-[30px] pt-[38px] pr-[38px] rounded-tl-[142px] w-[503px] h-[606px] bg-[#FDD039]/60">
            <img src={about} alt="" className="w-full h-full object-cover rounded-tl-[142px]" />
          </Card>
          <Card className="lg:absolute bottom-0 -left-[30px] p-[10px] rounded-[32px] flex flex-wrap gap-3 lg:gap-0 lg:flex-nowrap justify-around w-full lg:w-[1188px] h-fit lg:h-[142px] bg-[#FDD039] box-border">
            <div className="w-[100px] lg:w-full flex flex-col items-center justify-center text-[18px]">
              <span className="font-bold">Lebih</span>
              <span className="font-bold text-[24px] lg:text-[58px]">+50</span>
              <span className='text-[14px] lg:text-[18px] text-center'>Rekomendasi <strong>Artis</strong></span>
            </div>
            <div className="w-[100px] lg:w-full flex flex-col items-center justify-center text-[18px]">
              <img src={facebook} alt="" className='w-[70px] lg:w-fit'/>
              <a href="https://www.facebook.com/idphotobook/reviews/" rel="noreferrer" target="_blank" className='no-underline text-[#121212]'><span className="font-bold text-[24px] lg:text-[58px]">5.0</span></a>
              <span className='text-[14px] lg:text-[18px] text-center'>Opinion of <strong>13.978</strong> People</span>
            </div>
            <div className="w-[100px] lg:w-full flex flex-col items-center justify-center text-[18px]">
              <img src={google} alt=""className='w-[70px] lg:w-fit'/>
              <a href="https://www.google.com/search?client=avast-a-1&q=ID+Photobook+Production+Facility&oq=ID+Photobook+Production+Facility&aqs=avast..69i64.11833j0j1&ie=UTF-8#" rel="noreferrer" target="_blank" className='no-underline text-[#121212]'><span className="font-bold text-[24px] lg:text-[58px]">4.8</span></a>
              <span className='text-[14px] lg:text-[18px]'><strong>1.044</strong> Ulasan</span>
            </div>
            <div className="w-[100px] lg:w-full flex flex-col gap-[16px] items-center justify-center text-[18px]">
              <img src={instagram} alt="" />
              <img src={idphotobook} alt="" className='w-[70px] lg:w-fit'/>
              <span className='text-[14px]'><strong>Verified</strong> badge</span>
            </div>
            <div className="w-[100px] lg:w-full flex flex-col items-center justify-center text-[18px]">
              <span className="font-bold">Diliput</span>
              <span className="font-bold text-[24px] lg:text-[58px]">+37</span>
              <span className='text-[14px] lg:text-[18px]'><strong>Media</strong> Nasional</span>
            </div>
          </Card>
          </div>
        </div>

      </section>
  )
}

export default About