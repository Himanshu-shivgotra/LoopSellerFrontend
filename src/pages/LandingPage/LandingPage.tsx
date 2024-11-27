import  SellerHeader  from './SellerHeader'
import  SellerFooter  from './SellerFooter'
import StartSellingSection from './StartSellingSection'
import WhySellWithUs from './WhySellWithUs'
import HowToRegister from './HowToRegister'
import SellerTestimonials from './SellerTestimonials'
type Props = {}

function LandingPage({ }: Props) {
    return (
        <>
         <div className="p-20 lg:p-40 md:p-10 sm:p-5 bg-gradient-to-r from-black via-gray-900 to-black min-h-screen text-white">
            <SellerHeader/>
            <StartSellingSection/>
            <WhySellWithUs/>
            <HowToRegister/>
            <SellerTestimonials/>
            <SellerFooter/>
         </div>
         
        </>
    )
}

export default LandingPage