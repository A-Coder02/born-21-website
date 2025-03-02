import { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import Button from "./common/Button";

const Modal = ({ title, children, buttonComp }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return (
        <>
            {/* Custom Trigger Button */}
            {buttonComp ? (
                <span onClick={handleOpen}>{buttonComp}</span>
            ) : (
                <button
                    onClick={handleOpen}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                >
                    Open Modal
                </button>
            )}

            {isOpen &&
                createPortal(
                    <div
                        // onClick={handleClose}
                        className="fixed inset-0 flex items-center justify-center"
                        style={{
                            zIndex: 99999
                        }}
                    >
                        <div onClick={handleClose} className="fixed inset-0 bg-black/40 backdrop-blur-md"></div>
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}

                            className=" bg-white rounded-2xl p-6 shadow-lg w-[95%] max-w-3xl md:w-full relative z-10"
                        >
                            <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
                            <div className="text-gray-600 mt-2 mb-6 max-h-[70vh] overflow-auto">
                                {children}
                            </div>
                            <Button
                                onClick={handleClose}
                                variant="secondary" size="md" className="mx-auto md:mr-0 md:ml-auto block"  >
                                Okay
                            </Button>

                        </motion.div>
                    </div>,
                    document.getElementById("modal-root") // Render in modal-root
                )}
        </>
    );
};

export default Modal;
