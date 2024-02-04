import Accordion from './Accordion'

const FaQ = () => {
  return (
    <section className="flex flex-col lg:flex-row relative w-full h-[750px] gap-20 justify-center items-center px-[20px] box-border"
      >
        <div className="flex flex-col w-full text-center lg:text-start lg:w-[350px] self-start lg:pt-[160px]">
          <span className="text-[18px]">Mengenal IDPhotobook</span>
          <span className="font-bold text-[24px] lg:text-[36px] py-[11px]">Pertanyaan yang sering Diajukan</span>
        </div>
        <div className="w-full lg:w-[793px]">
        <Accordion/></div>
      </section>
  )
}

export default FaQ