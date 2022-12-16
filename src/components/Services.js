import design from '../assets/design.png';
import paint from '../assets/brush.png';
import computer from '../assets/computer.png';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className=" mt-10 " id="services">
      <div>
        <h3 className="text-2xl  py-1 text-center uppercase ">Services</h3>
        <p className=" py-2  leading-6 text-xs text-center">
          I can propose the solution that best satisfies your requirements.
          <br />
          The list below includes a few of the services I offer.
        </p>
      </div>
      <div className="lg:flex lg:flex-row md:flex sm:flex-col justify-around  ">
        <motion.div
          className=" text-center shadow-lg p-10 rounded-xl my-10 text-xs "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <img
            src={computer}
            alt="mree"
            width={80}
            height={80}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Website Development
          </h3>
          <p>
            Not only build a website , build a digital recognition of yourself/
            your business. For any brand or business, a website is a crucial
            important part. Grow your business now by targeting the audience who
            spends time on the web.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className="  text-center shadow-lg p-10 rounded-xl my-10  text-xs"
        >
          <img
            src={design}
            alt="mree"
            width={80}
            height={80}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Responsive Designs</h3>
          <p>
            Almost every new client these days wants a mobile version of their
            website. It’s practically essential after all: one design for the
            smartPhones, another for the iPad/Tablets, the noteBook and all
            screen resolutions must be compatible, too.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className=" text-center shadow-lg p-10 rounded-xl my-10  text-xs"
        >
          <img
            src={paint}
            alt="mree"
            width={80}
            height={80}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">Graphic Design</h3>
          <p>
            A visual communication and problem-solving through the use of
            typography, photography and illustration. I can help create better
            looking logos and UI/UX design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
