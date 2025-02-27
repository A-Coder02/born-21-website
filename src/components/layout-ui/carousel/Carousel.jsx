import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules"
import CarouselCard from "./CarouselCard"; // Import sub-component

const testimonials = [
    {
        text: "We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!",
        description: "Our channel had been stuck for months, barely gaining traction despite regular uploads...",
        client: "Client Name Here",
        company: "Company Name",
    },
    {
        text: "Amazing team! They helped us grow beyond expectations.",
        description: "With their strategies, we saw a 200% increase in engagement...",
        client: "John Doe",
        company: "Tech Solutions Inc.",
    }, {
        text: "We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!",
        description: "Our channel had been stuck for months, barely gaining traction despite regular uploads...",
        client: "Client Name Here",
        company: "Company Name",
    },
    {
        text: "Amazing team! They helped us grow beyond expectations.",
        description: "With their strategies, we saw a 200% increase in engagement...",
        client: "John Doe",
        company: "Tech Solutions Inc.",
    }, {
        text: "We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!",
        description: "Our channel had been stuck for months, barely gaining traction despite regular uploads...",
        client: "Client Name Here",
        company: "Company Name",
    },
    {
        text: "Amazing team! They helped us grow beyond expectations.",
        description: "With their strategies, we saw a 200% increase in engagement...",
        client: "John Doe",
        company: "Tech Solutions Inc.",
    }, {
        text: "We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!",
        description: "Our channel had been stuck for months, barely gaining traction despite regular uploads...",
        client: "Client Name Here",
        company: "Company Name",
    },
    {
        text: "Amazing team! They helped us grow beyond expectations.",
        description: "With their strategies, we saw a 200% increase in engagement...",
        client: "John Doe",
        company: "Tech Solutions Inc.",
    }, {
        text: "We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!",
        description: "Our channel had been stuck for months, barely gaining traction despite regular uploads...",
        client: "Client Name Here",
        company: "Company Name",
    },
    {
        text: "Amazing team! They helped us grow beyond expectations.",
        description: "With their strategies, we saw a 200% increase in engagement...",
        client: "John Doe",
        company: "Tech Solutions Inc.",
    }, {
        text: "We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!",
        description: "Our channel had been stuck for months, barely gaining traction despite regular uploads...",
        client: "Client Name Here",
        company: "Company Name",
    },
    {
        text: "Amazing team! They helped us grow beyond expectations.",
        description: "With their strategies, we saw a 200% increase in engagement...",
        client: "John Doe",
        company: "Tech Solutions Inc.",
    }, {
        text: "We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!",
        description: "Our channel had been stuck for months, barely gaining traction despite regular uploads...",
        client: "Client Name Here",
        company: "Company Name",
    },
    {
        text: "Amazing team! They helped us grow beyond expectations.",
        description: "With their strategies, we saw a 200% increase in engagement...",
        client: "John Doe",
        company: "Tech Solutions Inc.",
    }, {
        text: "We went from struggling to hit 10K views to consistently crossing 100K. These guys know their stuff!",
        description: "Our channel had been stuck for months, barely gaining traction despite regular uploads...",
        client: "Client Name Here",
        company: "Company Name",
    },
    {
        text: "Amazing team! They helped us grow beyond expectations.",
        description: "With their strategies, we saw a 200% increase in engagement...",
        client: "John Doe",
        company: "Tech Solutions Inc.",
    },
];

const Carousel = ({ theme, list = [] }) => {
    return (
        <div className="md:mb-20">
            <Swiper
                // slidesPerView="auto"
                freeMode={true}
                loop={true} // Enables infinite looping
                className="md:!pl-g64 h-[30rem] !px-8 md:px-0 md:h-[35rem]"
                modules={[FreeMode, Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} custom-bullet"></span>`;
                    },
                }}
                autoplay={{
                    delay: 2000, // No delay, continuous scroll
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                speed={2000}
                spaceBetween={32}
                slidesPerView={5}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 5 },
                    1024: { slidesPerView: 5 },
                }}
            >
                {list.map((card, index) => (
                    <SwiperSlide key={index} className="md:!w-96  hover:cursor-grab active:!cursor-grab" >
                        <CarouselCard theme={theme} card={card} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};

export default Carousel;
