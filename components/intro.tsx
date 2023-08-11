"use client";

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BsArrowRight, BsLinkedin} from "react-icons/bs"
import { FaGithubSquare } from 'react-icons/fa';
import {HiDownload} from "react-icons/hi"
import yangPic from '@/public/sample.jpg';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';


export default function Intro() {
   
    const {ref} = useSectionInView("Home", 0.5);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
   
  return (
    <section ref={ref} id="home" className='scroll-mt-[50rem] mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial ={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{
                        type:"tween",
                        duration:0.2,
                    }}>
                <Image 
                src={yangPic}
                alt="Yang" 
                width="192"
                height="192"
                quality="95"
                priority={true}
                className='h-24 w-24 rounded-full object-cover shadow-x1 border-[0.35rem] border-white'
                />
                </motion.div>
                
                <motion.span className='absolute bottom-0 right-0 text-4x1'
                    initial={{opacity:0, scale:0 }}
                    animate={{opacity:1, scale:1 }}
                    transition={{
                        type:'spring',
                        stiffness:150,
                        delay:0.2,
                        duration:0.7,
                    }}>
                    ⛷️
                </motion.span>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            >
            <span className='font-bold'>Hello, I&apos;m Yang.</span> I&apos;m a {" "}
            <span className='font-bold'>Computer Engineering COOP student</span> at{" "}
            <span className='font-bold'>Concordia University.</span> I have learnt to build sites & Applications.{" "} This website uses{" "}
            <span className='italic'>Next.js, TypeScipt, Tailwind CSS.</span>
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition ={{
                delay:0.1,
            }}
            >
            <Link href="#contact" 
            onClick={()=>{
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now())
            }}
            className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                 Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
            </Link>
            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60' 
            href="/CV.pdf" download>
                Download CV{" "}<HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
            </a>

            <a className='bg-white p-4 text-gray-600 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                href="http://www.linkedin.com" target="_blank">
                <BsLinkedin />
            </a>

            <a className='bg-white p-4 text-gray-600 flex items-center gap-2 rounded-full text-[1.3rem] focus:scale-110 hover:scale-110  hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                href="https://github.com" target="_blank">
                <FaGithubSquare/>
            </a>
        </motion.div>
    </section>
  )
}
