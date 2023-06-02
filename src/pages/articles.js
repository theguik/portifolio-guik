import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import article1 from "../../public/images/articles/a1.jpg";
import Image from 'next/image'
import article2 from "../../public/images/articles/a2.jpg";
import { motion, useMotionValue } from 'framer-motion'
import article3 from "../../public/images/articles/a1.jpg";
import article4 from "../../public/images/articles/a2.jpg";
import article5 from "../../public/images/articles/a1.jpg";
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedArticle = ({img, title, time, summary, link}) =>{

    return(
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative
        dark:border-light dark:bg-dark dark:text-light 
        '>
             <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light
            
            '/>    
              <Link href={link} target='_blank'
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-full snap-center' whileHover={{scale:1.05}}
                transition={{duration:0.2}} priority         
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibol dark:text-primaryDark'>{time}</span>
        </li>
    )

}

const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){

        imgRef.current.style.display ="inline-block";
        x.set(event.pageX);
        y.set(-10);

    }

    function handleMouseLeave(event){

        imgRef.current.style.display ="none";
        x.set(0);
        y.set(0);

    }

    return(

        <Link href={link} target='_blank' 
        
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}

        >
        <h2 className='capitalize text-xl font-semibold hover:underline'>
            {title}
        </h2>
        <FramerImage 

        style={{ x:x , y:y}}
        initial={{opacity: 0}}
        whileInView={{opacity:2, transition:{duration: 0.2}}}

        ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
        </Link>

    )
}

const Articles = ({img, title, date, link}) => {
    return(
    <motion.li 
    
    initial={{y:200}}
    whileInView={{y:0, transition:{duration: 0.5, ease:"easeInOut"}}}
    className='relative w-full p-4 py-6 my-4 rounded-2xl flex items-center
    justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
    sm:flex-col
    '>

        <MovingImg title={title} img={img} link={link} />

        <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
    </motion.li>
    )
}

const articles = () => {
  return (
    <>
    <Head>
        <title>Guik | Artigos</title>
        <meta name="description" content="any description" />
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="Artigos" className='mb-16 lg:!text-7l sm:mb-8 sm:!text-6xl xs:!text4xl'/>
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                <FeaturedArticle 
                title="Como ser feio e conseguir namorar ? - Dicas do Guiga"
                
                summary="Você olha pra mim e pensa: como esse cara conseguiu namorar? A resposta: Uma galinha, 2 garrafas de 51 e uma vela preta. Saiba mais..."
                time="9 min de leitura"
                link="/"
                img={article1} />

                <FeaturedArticle 
                title="10 dicks de como superar o Manoel Gomes"
                
                summary="Aqui te dou dicas de como superar o maior conquistador do século 2023, é difícil, porém possível."
                time="9 min de leitura"
                link="/"
                img={article2}
                
                />
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>Todos os Artigos</h2>
            <ul>
            <Articles
            
                title="Quer ser bom no valorant? Use Drogas!"
                date="May 30, 2023"
                link="/"
                img={article3}

            />
            <Articles
            
            title="Cansado de pegar dragões? Caiote pode te ajudar!"
            date="May 30, 2023"
            link="/"
            img={article4}

        />
        <Articles
            
            title="Porque o Hiro é o melhor streamer da atualidade?"
            date="May 30, 2023"
            link="/"
            img={article5}

        />
        <Articles
            
            title="Dicas de como sobreviver na festa fantasia do gui"
            date="May 30, 2023"
            link="/"
            img={article4}

        />
        <Articles
            
            title="Como ter seu visto americano de estudante negado: saiba mais"
            date="May 30, 2023"
            link="/"
            img={article5}

        />
            </ul>
        </Layout>
    </main>
    </>
  )
}

export default articles