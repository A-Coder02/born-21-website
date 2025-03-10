import React, { useState, useEffect } from "react";
import { AnimatePresence, delay, motion, transform } from "framer-motion";
import Headline from "./common/Headline";

const variants = {
    enter: (direction) => ({
        y: -20,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        zIndex: 0,
        opacity: 0,
    }),
};

const TextLoop = ({ texts = [], interval = 3000 }) => {
    const [index, setIndex] = useState(0);
    const length = texts[index].length

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, interval);
        return () => clearTimeout(timer);
    }, [index, texts, interval]);

    return (
        <div className="">

            <AnimatePresence>
                <div className="relative">
                    <Headline variant="h1" className="text-center invisible" >{texts[index]}</Headline>
                    {/* <div className="h-2 w-full absolute bg-amber-700 left-0 top-0"></div> */}
                    <Headline variant="h1" className="absolute left-[50%] top-0 w-full !block" style={{
                        transform: 'translateX(-50%)'
                    }}
                        key={index}
                    >
                        {texts[index].split("").map((word, index) =>
                            <motion.span
                                className="relative top-0 left-0 w-full"
                                variants={variants}
                                key={index}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    y: { type: "spring", stiffness: 300, damping: 200 },
                                    opacity: { duration: 0.5, delay: index / 10 },
                                    delay: 0.4 * index
                                }}
                            >
                                {/* {texts[index]} */}
                                {word}
                            </motion.span>
                        )}

                    </Headline>
                </div>


            </AnimatePresence>
        </div>
    );
};

export default TextLoop;
