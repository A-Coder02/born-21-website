import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

function AnimatedList({ from, to }) {
    const nodeRef = useRef();

    useEffect(() => {
        const node = nodeRef.current;

        // Step 1: Fast random numbers for slot machine effect
        let interval;
        interval = setInterval(() => {
            node.textContent = (Math.random() * (to * 2)).toFixed(0) ?? '0';
        }, 50); // Rapid updates

        // Step 2: Smooth transition to final value
        setTimeout(() => {
            clearInterval(interval); // Stop random numbers

            const controls = animate(from, to, {
                duration: 3,
                ease: "easeOut", // Smooth slow down
                onUpdate(value) {
                    node.textContent = value.toFixed(0) ?? '0';
                },
            });

            return () => controls.stop();
        }, 1000); // Delay before animation starts

        return () => clearInterval(interval);
    }, [from, to]);

    return <span ref={nodeRef} />;
}

export default AnimatedList;
