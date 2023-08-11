"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {

    const {ref} = useSectionInView("About",0.6);

  return (
    <motion.section 
        ref={ref}
        className='my-24 max-w-[40rem] text-center leading-10 sm:mb-5 scroll-mt-28'
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}
        id="about">

        <SectionHeading>About me</SectionHeading>

        <p className='mb-3'>
        In 2017, I graduated from {" "}
        <span className="font-medium">Concordia University</span> with a degree in {" "}
        <span className="font-medium">Computer Science</span>. After graduation, I started a company engaged in {" "}
        <span className="italic">Import and Export Trade</span>. Because I love {" "}
        <span className="underline"> skiing </span>, I took the exam and get my {" "}
        <span className="font-medium">Level 3 Ski Instructor certificate</span> from CSIA.  
        Currently, I am studying {" "}
        <span className="font-medium">Computer Engineering - COOP </span> at Concordia University.
        </p>

        
    </motion.section>
  )
}
