import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from "framer-motion"; 
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className=" mt-8 flex items-center text-center lg:h-[60vh] xl:h-[70vh]">
      <div className=" container mx-auto flex flex-col justify-center  lg:h-1/2">
        <motion.h2 
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className="h2 mb-8 xl:mb-0 ">
          What clients <span className=" text-accent">say.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className=" lg:mt-10"
        >
          <TestimonialSlider/>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
