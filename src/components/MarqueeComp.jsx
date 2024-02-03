import BrandLogo from './BrandLogo'
import kompas from '../assets/kompas.png'
import detik from '../assets/detik.png'
import tirto from '../assets/tirto.png'
import star from '../assets/star.png'
import cnn from '../assets/cnn.png'
import tempo from '../assets/tempo.png'
import kumparan from '../assets/kumparan.png'
import star4 from '../assets/star4.png'
import beritagar from '../assets/beritagar.png'
import okezone from '../assets/okezone.png'
import viva from '../assets/viva.png'
import star2 from '../assets/star2.png'
import liputan6 from '../assets/liputan6.png'
import hipwee from '../assets/hipwee.png'
import star3 from '../assets/star3.png'
import cewekbanget from '../assets/cewekbanget.png'
import popbela from '../assets/popbela.png'
import keponih from '../assets/keponih.png'
import grid from '../assets/grid.png'
import Marquee from 'react-fast-marquee'

const brandLogoList = [
  kompas, detik, tirto, star, cnn, tempo, kumparan, star4, beritagar, okezone, viva, star2, liputan6, hipwee, star3, cewekbanget, popbela, keponih, grid
]

const MarqueeComp = () => {
  return (
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
              {brandLogoList.map((logo, index) => <BrandLogo key={index} img={logo} />)}
          </Marquee>
        </div>
  )
}

export default MarqueeComp