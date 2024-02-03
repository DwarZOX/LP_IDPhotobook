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
    <nav className={`fixed top-0 left-0 right-0 flex justify-between items-center transition-all ease-in-out duration-700 py-[10px] px-[120px] text-[#121212] z-10`}
      style={{
        backgroundColor: `rgba(255,255,255,${scrollPx}%)`,
        top: `${navClass ? '-150px' : '0'}`,
      }}
    >
      <img src={logo} alt="Logo" />
      <ul className='flex items-center gap-[40px] text-[22px] list-none'>
        <ScrollIntoView smooth selector='#home' className='cursor-pointer text-[19px]'>Beranda</ScrollIntoView>
        <ScrollIntoView smooth selector='#about' className='cursor-pointer text-[19px]'>Cerita Kami</ScrollIntoView>
        <ScrollIntoView smooth selector='#catalog' className='cursor-pointer text-[19px]'>Katalog</ScrollIntoView>
        <li className='flex items-center gap-3 bg-[#FDD039] px-[24px] py-[9px] rounded-[12px] text-[24px] font-bold cursor-pointer'>Hubungi Kami <FaWhatsapp className='w-[24px] h-[24px]'/></li>
      </ul>
    </nav>
  )
}

export default Navbar