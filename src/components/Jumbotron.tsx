import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFetchPopularAnimeQuery } from "../api/jikanAPI";
import { useFetchPopularAnimeKitsuQuery } from "../api/kitsuAPI";


const Jumbotron: React.FC = () => {
  const {
    data: popularAnime,
    isLoading: isLoadingPopular
  } = useFetchPopularAnimeQuery();


  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);


  // Variasi animasi untuk seluruh card
  const cardVariants = {
    initial: (direction: number) => ({
      opacity: 0,
      scale: 0.8,
      x: direction > 0 ? 100 : -100
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 0.8,
      x: direction > 0 ? -100 : 100,
      transition: {
        duration: 0.3
      }
    })
  };


  // Fungsi slide
  useEffect(() => {
    if (isLoadingPopular) return;
    if (!popularAnime?.data || popularAnime.data.length === 0) return;


    const interval = setInterval(() => {
      nextSlide();
    }, 5000);


    return () => clearInterval(interval);
  }, [isLoadingPopular, popularAnime]);


  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (popularAnime?.data.length || 1)
    );
  };


  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? (popularAnime?.data.length || 1) - 1 
        : prevIndex - 1
    );
  };


  // Ambil data slide saat ini
  const currentSlide = popularAnime?.data?.[currentIndex];


  // Fetch gambar cover
  const { 
    data: imageKitsu, 
    isLoading: isLoadingImageKitsu 
  } = useFetchPopularAnimeKitsuQuery(
    currentSlide?.title || ""
  );


  // Dapatkan URL gambar cover
  const coverImage = 
    imageKitsu?.data?.[0]?.attributes?.coverImage?.original ||
    imageKitsu?.data?.[0]?.attributes?.posterImage?.original ||
    imageKitsu?.data?.[0]?.attributes?.posterImage?.large;


  // Render loading
  if (isLoadingPopular || isLoadingImageKitsu) {
    return <div>Loading...</div>;
  }


  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div 
        key={currentIndex}
        custom={direction}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative h-[500px] w-full overflow-hidden rounded-3xl"
        style={{
          backgroundImage: `
            linear-gradient(to right, 
              rgba(0,0,0,1) 30%, 
              rgba(0,0,0,0) 80%, 
              rgba(0,0,0,0)
            ), 
            url(${coverImage})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="px-4 grid grid-cols-2 h-full">
          {/* Konten Kiri */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-white justify-center items-start"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl font-extrabold text-white"
            >
              {currentSlide?.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-white leading-relaxed line-clamp-3"
            >
              {currentSlide?.synopsis}
            </motion.p>
            
            {/* Tombol Aksi */}
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="px-6 py-3 bg-white text-black rounded-lg"
              >
                Watch Now
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="px-6 py-3 border bg-black border-white text-white rounded-lg"
              >
                More Info
              </motion.button>
            </div>
          </motion.div>


          {/* Kontrol Navigasi */}
          <div className="flex justify-end items-end space-x-4 p-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="bg-white/50 text-black p-2 rounded-full"
            >
              ← 
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="bg-white/50 text-black p-2 rounded-full"
            >
              →
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};


export default Jumbotron;