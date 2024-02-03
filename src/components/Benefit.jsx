import squoshbg from "../assets/squoshbg.png"
import iconlike from "../assets/iconlike.png"
import iconceklist from "../assets/iconceklist.png"
import iconguaranty from "../assets/iconguaranty.png"
import iconwallet from "../assets/iconwallet.png"
import icongrid from "../assets/icongrid.png"

const Benefit = () => {
  return (
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
  )
}

export default Benefit