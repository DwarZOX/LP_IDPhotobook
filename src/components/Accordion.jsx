import { useRef, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import { dataFAQ } from "../constant";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="w-[793px] overflow-hidden border-b-2">
      <button
        className={`w-full h-[80px] rounded-[26px] bg-[#FBFFF4] px-[40px] flex items-center justify-between border-none cursor-pointer transition-all ease-in-out duration-700 ${isOpen ? "rounded-b-none" : ""}`}
        onClick={onClick}
      >
        <p className="text-[20px] font-bold">{question}</p>
        <IoIosArrowRoundDown className={`arrow text-[2rem] transition-all ease-in-out duration-500 ${isOpen ? "active" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="px-[40px] pt-[10px] pb-[15px] transition-all ease-in-out duration-500 rounded-b-[26px]"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight, backgroundColor: "#FBFFF4" }
            : { height: "0px", backgroundColor: "transparent" }
        }
      >
        <p className="text-[18px] text-[#717694] italic">{answer}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-[650px]">
      {dataFAQ.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;