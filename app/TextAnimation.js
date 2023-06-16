// create framer animation for text reveal as though typing

import { motion, AnimatePresence } from "framer-motion";


// https://brad-carter.medium.com/how-to-animate-a-text-reveal-effect-in-react-with-framer-motion-ae8ddd296f0d
const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.10,
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export default function TypingEffect ({text}) {
    {/** take some text and render it character by character */}
    return (
        <motion.h3
            variants={sentence}
            initial="hidden"
            animate="visible"
        >
            {text.split("").map((char, index) => {
                return (
                    <motion.span key={char + "-" + index} variants={letter}>
                        {char}
                    </motion.span>
                )
            })}
        </motion.h3>
    )
};
