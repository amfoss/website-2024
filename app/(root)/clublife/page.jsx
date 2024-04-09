"use client";
import React from "react";
import data from "@/content/clublife.json";
import TaskForcesComponent from "@/components/clublife/taskForcesComponent";
import ActivitiesComponent from "@/components/clublife/activitiesComponent";
import { motion } from 'framer-motion';

const page = () => {
  const baseText = "LIFE IN THE CLUB";
  const clubLife1Varients={
    initial:{ opacity: 0, y: 50 },
    animate:{ opacity: 1, y: 0 }
  }
  const clubLife2Varients={
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }

  return (
    <>
      <div className="flex-col flex-center justify-center items-center">
        <div className="max-sm:py-8 md:text-left text-center py-72 md:min-h-[95vh] mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px]">
            {baseText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: {
                    opacity: 0,
                    y: 20, 
                  },
                  animate: {
                    opacity: 1,
                    y: 0, 
                  },
                }}
                initial="initial"
                whileInView="animate"
                viewport={{once:true,}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                {word+" "}
              </motion.span>
            ))}
          </h1>
        </div>
      </div>
      {/* foss lab */}
      <div className="grid md:grid-cols-3 grid-cols-1 min-h-fit">
        <motion.div className="col-span-1 flex md:justify-center items-center"
          variants={clubLife1Varients} 
          transition={{ duration: 0.5, delay: 0.1 }}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
        >
          <h1 className="md:text-4xl text-lg tracking-[0.3em] px-5 md:text-center text-left">
            {data.fosslab.title}
          </h1>
        </motion.div>
        <motion.div className="md:col-span-2 col-span-1 lg:px-32 md:px-5"
        variants={clubLife2Varients} 
        transition={{ duration: 0.5, delay: 0.1 }}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}>
          <p className="h-full flex justify-center items-center text-white lg:text-3xl md:text-2xl p-5">
            {data.fosslab.description}
          </p>
        </motion.div>
      </div>
      {/* taskforces */}
      <TaskForcesComponent />
      {/* activities */}
      <ActivitiesComponent />
    </>
  );
};

export default page;
