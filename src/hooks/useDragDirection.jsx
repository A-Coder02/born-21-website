import { useEffect, useRef, useState } from "react";

const useDragDirection = (id, onLeftToRight, onRightToLeft) => {
    const startX = useRef(null);
    const [element, setElement] = useState(null);

    useEffect(() => {
        const element = document.getElementById(id);
        console.log({ element, id })
        setElement(element)

        if (element) {

            element.addEventListener("mousedown", function (event) {
                event.target.style.cursor = 'grabbing';
                console.log('red')
            });
            // element.addEventListener("cl")
            element.addEventListener("mouseenter", handleMouseDown);
            element.addEventListener("mouseup", handleMouseUp);
        }
    }, [id]);
    console.log({ element, id })

    const handleMouseDown = (event) => {
        console.log('red')
        // event.style.cursor = 'grabbing';
        startX.current = event.clientX;
    };

    const handleMouseUp = (event) => {
        if (startX.current === null) return;

        const endX = event.clientX;
        const diff = endX - startX.current;

        if (diff > 50) {
            onLeftToRight && onLeftToRight();
        } else if (diff < -50) {
            onRightToLeft && onRightToLeft();
        }

        startX.current = null;
    };



    return () => {
        if (element) {
            element.removeEventListener("mousedown", handleMouseDown);
            element.removeEventListener("mouseup", handleMouseUp);
        }
    };
};

export default useDragDirection;
