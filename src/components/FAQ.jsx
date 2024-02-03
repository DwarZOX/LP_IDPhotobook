import Accordion from './Accordion'

const FaQ = () => {
  return (
    <section className="flex relative w-full h-[750px] gap-20 justify-center items-center "
      >
        <div className="flex flex-col w-[350px] self-start pt-[160px]">
          <span className="text-[18px]">Mengenal IDPhotobook</span>
          <span className="font-bold text-[36px] py-[11px]">Pertanyaan yang sering Diajukan</span>
        </div>
        <div className="w-[793px]">
        <Accordion/></div>
      </section>
  )
}

export default FaQ