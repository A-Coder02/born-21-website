import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
        <div className="mb-20">
            <Swiper
                className="md:!pl-64 h-[35rem] md:h-[30rem]"
                modules={[Pagination]}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} custom-bullet"></span>`;
                    },
                }}
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {list.map((card, index) => (
                    <SwiperSlide key={index}>
                        <CarouselCard theme={theme} card={card} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
