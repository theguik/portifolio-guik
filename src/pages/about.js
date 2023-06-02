import React, { use, useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/developer-pic-4.jpg';
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import { motion } from 'framer-motion';
import Experience from '@/components/Experience'
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

    const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);


    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
     springValue.on("change", (latest) => {

        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }

     })
    }, [springValue, value])
    
    

    return<span ref={ref}></span>

}

const about = () => {
  return (
    <>
    
    <Head>
        <title>Guik | Sobre</title>
        <meta name="description" content="any description" />
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center dark:text-light' >
        <Layout className='pt-24'>
        <AnimatedText text="QUEM SOU EU?" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col item-start justify-start xl:col-span-4 md:order-2 md:col-span-8 '>
       <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biografia</h2>

       <p className='font-medium'>Olá! Bem-vindo ao meu portfolio. Meu nome é Guilherme Munhos e tenho 22 anos.Desde 
       a minha adolescência, desenvolvi um grande interesse pela programação, e agora estou retomando meus estudos
    nessa área empolgante e em constante evolução.</p>

    <p className=' my-4 font-medium'>Durante minha jornada como programador, adquiri conhecimentos sólidos em várias linguagens
     e tecnologias.Tenho experiência prática em Python, JavaScript, ReactJS, Node.js, HTML e CSS.
    Cada uma dessas ferramentas desempenha um papel importante no desenvolvimento de soluções web modernas e eficientes.</p>

<p className='font-medium'>Ao longo do tempo, trabalhei em projetos pessoais e colaborativos, nos quais pude aplicar meus conhecimentos e aprimorar minhas habilidades técnicas.
Além disso, estou sempre disposto a aprender novas tecnologias e acompanhar as tendências do mercado.</p> 

<p className=' my-4 font-medium'>Este portfolio é uma coleção dos meus projetos e trabalhos, que demonstram minha capacidade de desenvolvimento de software, 
resolução de problemas e criatividade. Cada projeto é uma oportunidade para aprender, crescer e melhorar minhas habilidades.

Estou entusiasmado com as possibilidades que a programação oferece e motivado a contribuir para o avanço da tecnologia.</p> 

<p className='font-medium'> Espero que você aproveite a exploração do meu portfolio e veja o potencial que posso trazer para futuras colaborações.

Agradeço por dedicar seu tempo para conhecer meu trabalho. Se você tiver alguma dúvida ou oportunidade de trabalho interessante, fique à vontade para entrar em contato. 
Estou ansioso para novos desafios e oportunidades de aprendizado.   </p> 
            </div>    

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
             bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8
             '>
                <div className='absolute top-0 -right-4 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                <Image src={profilePic} alt="Guik" className='w-full h-auto rounded-2xl'priority         
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div> 
                <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className=' flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={10} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:items-center md:text-lg 
                    sm:text-base xs:text-sm sm:text-center'>Clientes Satisfeitos</h2>
                    </div>
                <div className=' flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        
                        <AnimatedNumbers value={15} /> +
                        </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 md:text-lg 
                    sm:text-base xs:text-sm sm:text-center'>Projetos Completos</h2>
                </div>
                <div className=' flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={1} /> +
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 sm:text-center md:text-lg 
                    sm:text-base xs:text-sm'>Anos de Experiência</h2>
                </div>
            </div>
        </div>
        <Skills />
        <Experience />
        <Education />
        </Layout>
    </main>
    </>
   
  )
}

export default about