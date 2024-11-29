import React from "react";
import { useFetchPopularAnimeQuery, useFetchTopAnimeQuery } from "../api/jikanAPI";
import { useFetchPopularAnimeKitsuQuery } from '../api/kitsuAPI'; // Pastikan path-nya benar
import Jumbotron from "../components/Jumbotron";
import loadingSaitama from "../assets/saitama.gif";
import Sidebar from "../components/layouts/Sidebar";
const Home: React.FC = () => {
  const { data: popularAnime, isLoading: isLoadingPopular } = useFetchPopularAnimeQuery();
  const { data: topAnime, isLoading: isLoadingTop } = useFetchTopAnimeQuery();
  
  // Menjalankan query dengan parameter "Naruto"
  // const { data: imageKitsu, isLoading: imageKitsuLoading } = useFetchPopularAnimeKitsuQuery("Naruto");
 if (isLoadingPopular || isLoadingTop) return <div className="flex justify-center items-center h-screen"><img src={loadingSaitama} alt="loading" /></div>;

  return (
    <div className="flex gap-10">
      <Jumbotron />
      <Sidebar />
      {/* Menampilkan data yang diterima dari API Kitsu */}
     
    </div>
  );
};

export default Home;
