import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { FaWhatsapp } from 'react-icons/fa'
import ScrollIntoView from 'react-scroll-into-view'
const Navbar = () => {
  const [scrollPx, setScrollPx] = useState(0);
  const [isShowNav, setIsShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currScrollPx = (window.scrollY / 30).toFixed() * 10;
      setScrollPx(currScrollPx > 100 ? 100 : currScrollPx);

      setIsShowNav(window.scrollY <= lastScroll);
      lastScroll = window.scrollY;
    };

    let lastScroll = window.scrollY;

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = scrollPx === 100 && !isShowNav
  
  return (
    <nav className={`sticky lg:fixed top-0 left-0 right-0 flex justify-between items-center transition-all ease-in-out duration-700 py-[10px] px-[20px] lg:px-[120px] text-[#121212] z-10 backdrop-blur-3xl bg-opacity-45`}
      style={{
        backgroundColor: `rgba(255,255,255,${scrollPx}%)`,
        top: `${navClass ? '-150px' : '0'}`,
      }}
    >
      <ScrollIntoView smooth selector='#home' ><img src={logo} alt="Logo" className='w-[135px] h-[30px] lg:w-[204px] lg:h-[40px] cursor-pointer'/></ScrollIntoView>
      <ul className='hidden lg:flex lg:flex-row items-center gap-[40px] text-[22px] list-none'>
        <ScrollIntoView smooth selector='#home' className='cursor-pointer text-[14px] lg:text-[19px]'>Beranda</ScrollIntoView>
        <ScrollIntoView smooth selector='#about' className='cursor-pointer text-[14px] lg:text-[19px]'>Cerita Kami</ScrollIntoView>
        <ScrollIntoView smooth selector='#catalog' className='cursor-pointer text-[14px] lg:text-[19px]'>Katalog</ScrollIntoView>
        <li className='flex items-center gap-3 bg-[#FDD039] px-[24px] py-[9px] rounded-[12px] text-[16px] lg:text-[24px] font-bold cursor-pointer'>Hubungi Kami <FaWhatsapp className='w-[24px] h-[24px]'/></li>
      </ul>
    </nav>
  )
}

export default Navbar