import { Container } from '@mui/material'
import React from 'react'

const SellerTestimonials = () => {
    return (
        <div className='my-10'><Container className="bg-gray-900 text-white py-16 px-8">
            <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">What Our Sellers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { name: "John Doe", feedback: "This platform helped me triple my sales!" },
                    { name: "Jane Smith", feedback: "User-friendly and great support." },
                    { name: "Mike Lee", feedback: "A game-changer for small businesses." },
                ].map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-black p-6 rounded-lg shadow-lg text-center"
                    >
                        <p className="text-gray-300 mb-4">{testimonial.feedback}</p>
                        <h4 className="text-white font-semibold">- {testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </Container>
        </div>
    )
}

export default SellerTestimonials