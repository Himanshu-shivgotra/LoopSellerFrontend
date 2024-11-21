import React from 'react'
import StartSellingSection from './StartSellingSection'
import WhySellWithUs from './WhySellWithUs'
import HowToRegister from './HowToRegister'
import SellerFooter from './SellerFooter'
import SellerTestimonials from './SellerTestimonials'
import SellerNavbar from '../SellerNavbar/SellerNavbar'

const Seller = () => {
    return (<>
        <div><SellerNavbar /></div>
        <div>
            <StartSellingSection />
        </div>
        <div>
            <WhySellWithUs />
        </div>
        <div>
            <HowToRegister />
        </div>
        <div>
            <SellerTestimonials />
        </div>
        <div>
            <SellerFooter />
        </div>
    </>

    )
}

export default Seller