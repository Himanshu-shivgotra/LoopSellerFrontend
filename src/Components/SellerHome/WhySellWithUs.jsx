import React from "react";
import { Button, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const WhySellWithUs = () => {
    const features = [
        {
            title: "Powerful Analytics",
            description:
                "Explore the tools and resources available to sellers, helping you grow and manage your business with ease.",
            image: "https://loopin.netlify.app/static/media/analytics.cf1e7bfda3dc0ab31e483742b8f1223b.svg",
        },
        {
            title: "Easy Product Management",
            description:
                "Manage your products efficiently with our user-friendly tools, making your selling experience seamless.",
            image: "https://loopin.netlify.app/static/media/product.db6acf9bf3e27bf0d14f80c2d4e8bbcf.svg",
        },
        {
            title: "Seamless Order Tracking",
            description:
                "Track your orders in real-time to provide the best experience for your customers.",
            image: "https://loopin.netlify.app/static/media/business.e4473522fb29ad8ef6e00de2c5db5d1b.svg",
        },
    ];

    return (
        <Container className="bg-[#141414] text-white py-12 px-6 my-10 rounded-[5rem] shadow">
            <h2 className="text-5xl font-bold text-center mb-4">Why Sell With Us?</h2>
            <p className="text-center text-lg mb-10 tracking-widest">
                Explore the tools and resources available to sellers, helping you grow
                and manage your business with ease.
            </p>

            <div className="max-w-4xl mx-auto">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    loop={true}
                    className="mySwiper"
                >
                    {features.map((feature, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-50 h-40"
                                />
                                <h3 className="text-2xl font-bold">{feature.title}</h3>
                                <p className="text-sm text-gray-300 tracking-wide">{feature.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </Container>
    );
};

export default WhySellWithUs;
