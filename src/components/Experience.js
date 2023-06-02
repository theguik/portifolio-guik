import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import Lilcon from './Lilcon'

const Details = ({position, company, companyLink, time, adress, work}) =>{
    const ref = useRef(null);
    return(
    <li ref={ref} className= 'my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <Lilcon reference={ref} />
        <motion.div
        initial ={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target="_blank"
            className=' text-orange-600 dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/60 xs:text-sm'>
                {time} | {adress}
                </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end ", "center start"]
        }

    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:!text-6xl xs:!text-4xl md:mb-16'>
        Experiência
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
            md:w-[2px] md:left-[30px] xs:left-[20px]
            ' />
            <ul className='w-full flex flex-col items-justify-between ml-4 xs:ml-2'>
                    <Details
                   position="Assistente de TI" company="Laticinios Prime"
                   time="2021-2022"  adress= "São Paulo, Brasil"
                   work = "Trabalhei em uma equipe responsável por administrar redes e computadores de toda a empresa."

                   />
                   <Details 
                   position="Costumer Service" company= "Scicom(MSC)Berhad"
                   time="2022-Atual" adress="Kuala Lumpur, Malásia"
                   work ="Trabalho remoto, onde sou responsável pelo gerenciamento de sistemas e atendimento ao cliente." />
            </ul>
        </div>
        </div>
  )
}

export default Experience