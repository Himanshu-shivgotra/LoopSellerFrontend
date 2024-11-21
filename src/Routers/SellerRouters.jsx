import React from 'react'
import { Route, Routes } from 'react-router-dom'

import SellerRegistration from '../Components/SellerAuth/SellerRegistration'

const SellerRouters = () => {
    return (
        <div>
            <Routes>
                <Route path="/sellerRegistration/*" element={<SellerRegistration />} />
            </Routes>
        </div>
    )
}

export default SellerRouters