import Navbar from "./components/Navbar"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules"; 
import 'swiper/css';
import 'swiper/css/autoplay'
import { catalog, dataTesti } from "./constant"
import { GoArrowUpRight } from 'react-icons/go'
import hero from "./assets/hero.png"
import hero1 from "./assets/hero1-1.png"
import hero2 from "./assets/hero2.png"
import about from "./assets/about.png"
import facebook from "./assets/facebook.png"
import instagram from "./assets/instagram.png"
import idphotobook from "./assets/idphotobook.png"
import google from "./assets/google.png"
import Marquee from "react-fast-marquee"
import BrandLogo from "./components/BrandLogo"
import kompas from "./assets/kompas.png"
import detik from "./assets/detik.png"
import tirto from "./assets/tirto.png"
import cnn from "./assets/cnn.png"
import star from "./assets/star.png"
import star4 from "./assets/star4.png"
import star2 from "./assets/star2.png"
import star3 from "./assets/star3.png"
import tempo from "./assets/tempo.png"
import kumparan from "./assets/kumparan.png"
import beritagar from "./assets/beritagar.png"
import okezone from "./assets/okezone.png"
import viva from "./assets/viva.png"
import liputan6 from "./assets/liputan6.png"
import hipwee from "./assets/hipwee.png"
import popbela from "./assets/popbela.png"
import cewekbanget from "./assets/cewekbanget.png"
import grid from "./assets/grid.png"
import keponih from "./assets/keponih.png"
import Card from "./components/Card"
import Footer from "./components/Footer"
import quote from "./assets/quote.png"
import squoshbg from "./assets/squoshbg.png"
import iconlike from "./assets/iconlike.png"
import iconceklist from "./assets/iconceklist.png"
import iconguaranty from "./assets/iconguaranty.png"
import iconwallet from "./assets/iconwallet.png"
import icongrid from "./assets/icongrid.png"
import squosh2bg from "./assets/squosh2bg.png"
import kirimfoto from "./assets/kirimfoto.png"
import variantukuran from "./assets/variantukuran.png"
import prosesproduksi from "./assets/prosesproduksi.png"
import cover_desain from "./assets/cover&desain.png"
import Accordion from "./components/Accordion"
import shopee from "./assets/shopee.png"
import tokopedia from "./assets/tokopedia.png"
import avatar from "./assets/avatar.png"

function App() {
  const toRupiah = (angka) => {
    const rupiah = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka || 0);
    return `${rupiah} ,-`;
  };

  return (
    <>
      <Navbar />

      {/* HOME START */}
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
        <div className="w-full h-[100px] flex items-center bg-[#FBFFF4]">
          <span className="pl-[32px] text-[14px]">Diliput berbagai media nasional:</span>
          <Marquee 
            className="w-full flex gap-10 flex-[1.9]"
            pauseOnHover
            speed={100}
            gradient
            gradientWidth={100}
            autoFill
          >
              <BrandLogo img={kompas} />
              <BrandLogo img={detik} />
              <BrandLogo img={tirto} />
              <BrandLogo img={star} />
              <BrandLogo img={cnn} />
              <BrandLogo img={tempo} />
              <BrandLogo img={kumparan} />
              <BrandLogo img={star4} />
              <BrandLogo img={beritagar} />
              <BrandLogo img={okezone} />
              <BrandLogo img={viva} />
              <BrandLogo img={star2} />
              <BrandLogo img={liputan6} />
              <BrandLogo img={hipwee} />
              <BrandLogo img={cewekbanget} />
              <BrandLogo img={star3} />
              <BrandLogo img={popbela} />
              <BrandLogo img={grid} />
              <BrandLogo img={keponih} />
              <BrandLogo img={star4} />
          </Marquee>
        </div>
      {/* HOME END */}

      {/* ABOUT START */}
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
      {/* ABOUT END */}

      {/* CATALOG START */}
        <section id="catalog" className="flex h-[1600px] items-center justify-center">
          <div className="flex flex-col gap-5">
              <span className="font-bold text-[24px] pl-[35px]">Terbaru</span>
              <div className="flex justify-center gap-5">
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
            
              <span className="font-bold text-[24px] pt-[50px] pl-[35px]">Semua Produk</span>
              <div className="flex justify-center flex-wrap gap-5">
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
              <div className="flex justify-center flex-col items-center gap-5 pt-[50px]">
                  <span>Jelajahi lebih lanjut</span>
                  <button className="text-[18px] bg-[#FDD039] w-[136px] h-[51px] rounded-[8px] border-none cursor-pointer">Inspirasi lain</button>
              </div>
          </div>
        </section>
      {/* CATALOG END */}

      {/* BENEFIT START */}
      <section className="flex flex-col gap-[70px] h-[900px] pt-[30px] w-full items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${squoshbg})`,
          backgroundSize: '524px 485px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <span className="text-[32px] font-bold">Keunggulan Cetak Foto Album di IDPhotobook</span>
        <div className="flex justify-center items-center gap-x-[400px] gap-y-[90px] flex-wrap text-[18px]">
          <div className="flex flex-col gap-[8px] text-center items-center w-[350px] h-[178px]">
              <img src={iconlike} alt="" className="w-[50px] h-[50px]"/>
              <span className="font-bold">Kualitas Premium</span>
              <p>Menggunakan kertas art paper 250 gram dilaminasi glossy. Sehingga tidak mudah luntur, pudar, dan tahan lama.</p>
          </div>
          <div className="flex flex-col gap-[8px] text-center items-center w-[350px] h-[178px]">
              <img src={iconceklist} alt="" className="w-[50px] h-[50px]"/>
              <span className="font-bold">Proses yang mudah</span>
              <p>Konsumen mengirimkan foto yang ingin dicetak disitus web, album proses dalam waktu 3-5 hari kerja.</p>
          </div>
          <div className="flex flex-col gap-[8px] text-center items-center w-[350px] h-[178px]">
              <img src={iconwallet} alt="" className="w-[50px] h-[50px]"/>
              <span className="font-bold">Harga yang terjangkau</span>
              <p>Harga mencetak foto album sangat terjangkau. Harga mulai dari Rp 99.000 untuk ukuran 20x20 cm</p>
          </div>
          <div className="flex flex-col gap-[8px] text-center items-center w-[350px] h-[178px]">
              <img src={iconguaranty} alt="" className="w-[50px] h-[50px]"/>
              <span className="font-bold">Garansi 100% puas</span>
              <p>Jika pengguna tidak puas dengan hasil cetak foto album, maka album dicetak ulang secara gratis.</p>
          </div>
          <div className="flex flex-col gap-[8px] text-center items-center w-[350px] h-[178px]">
              <img src={icongrid} alt="" className="w-[50px] h-[50px]"/>
              <span className="font-bold">Desain yang beragam</span>
              <p>Lebih dari 30 layout yang bisa dipilih, dari yang sederhana hingga yang lebih kompleks.</p>
          </div>
        </div>
      </section>
      {/* BENEFIT END */}

      {/* TESTIMONI START */}
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
      {/* TESTIMONI END */}

      {/* INFORMATION START */}
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
      {/* INFORMATION END */}

      {/* FAQ START */}
      <section className="flex relative w-full h-[750px] gap-20 justify-center items-center "
      >
        <div className="flex flex-col w-[350px] self-start pt-[160px]">
          <span className="text-[18px]">Mengenal IDPhotobook</span>
          <span className="font-bold text-[36px] py-[11px]">Pertanyaan yang sering Diajukan</span>
        </div>
        <div className="w-[793px]">
        <Accordion/></div>
      </section>
      {/* FAQ END */}

      {/* CONTACT START */}
      <section className="flex w-full h-[500px] gap-20 justify-center "
      >
        <div className="flex flex-col w-[450px]">
          <span className="text-[18px]">Hubungi kami</span>
          <span className="font-bold text-[36px] py-[11px]">Siap cetak impianmu</span>
          <span className="text-[18px]">Melayani 24 Jam</span>
        </div>
        <div className="w-[700px] flex flex-col gap-[15px]">
          <input type="text" placeholder="Nama Konsumen" className="h-[50px] border-[#DEDEDE] rounded-[8px] px-[16px] outline-none placeholder:text-[#121212]"/>
          <input type="text" placeholder="Nomor Whatsapp/Telpon" className="h-[50px] border-[#DEDEDE] rounded-[8px] px-[16px] outline-none placeholder:text-[#121212]"/>
          <button className="h-[50px] bg-[#FDD039] rounded-[8px] border-none text-[14px] font-semibold cursor-pointer">Kirim</button>
        <div className="flex flex-col self-end pt-[60px] text-[18px]">
          <p>Kamu juga dapat memesan lewat:</p>
          <span className="self-end flex gap-5 hover:drop-shadow-lg">
            <img src={shopee} alt="" className="w-[44px] h-[62px] cursor-pointer"/>
            <img src={tokopedia} alt="" className="w-[100px] h-[67px] cursor-pointer"/>
          </span>
        </div>
        </div>
      </section>
      {/* CONTACT END */}

      {/* FOOTER START */}
      <Footer />
      {/* FOOTER END */}
    </>
  )
}

export default App
