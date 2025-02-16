import { useEffect, useState } from "react";

const useHeroVisibility = () => {
    const [isHeroVisible, setIsHeroVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero-section");
            if (heroSection) {
                const rect = heroSection.getBoundingClientRect();
                setIsHeroVisible(rect.bottom > 0 && rect.top < window.innerHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return isHeroVisible;
};

export default useHeroVisibility;
