import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) =>{
 return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    py-3 px-6 shadow-dark border border-solid border-dark cursor-pointer absolute hover:bg-light hover:text-dark
    dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
    lg:p-6 md:p-4 xs:text-xs xs:p-2 
    '
     whileHover={{scale:1.05}}
     initial={{x:0,y:0}}
     whileInView={{ x:x, y:y , transition:{duration: 1.5}}}
     viewport={{once: true}}
     >
        {name}
    </motion.div>

 )

}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:!text-6xl xs:!text-4xl md:mb-1'>Habilidades</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    '>

            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark border border-solid
             border-dark cursor-pointer absolute hover:bg-light hover:text-dark
             dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light 
            xs:p-2 sm:p-4 md:p-6 xl:p-8 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
             '
             whileHover={{scale:1.05}}>
                WEB
            </motion.div>

            <Skill name="HTML" x="-20vw" y="2vw" />

            <Skill name="CSS" x="-1vw" y="-11vw" />

            <Skill name="Javascript" x="18vw" y="4vw" />
            <Skill name="Python" x="-8vw" y="10vw" />
            <Skill name="ReactJS" x="-15vw" y="-8vw" />
            <Skill name="NextJS" x="8vw" y="10vw" />
            <Skill name="Tailwind CSS" x="15vw" y="-8vw" />
           
            
    </div>
    </>
  );
};

export default Skills