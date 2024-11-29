import React from "react";
import { useFetchPopularAnimeQuery } from "../../api/jikanAPI";

const Layout: React.FC<LayoutProps> = () => {
  const { data: popularAnime, isLoading: isLoadingPopular } =
    useFetchPopularAnimeQuery();
  console.log("😺 -> popularAnime:", popularAnime.data);

  const animeDataTop = popularAnime?.data;

  return (
    <div className="flex flex-col gap-4 max-w-[300px]">
      {animeDataTop?.slice(0, 11).map((anime: any) => (
        <div key={anime.mal_id} className="flex gap-4">
          <img
            src={anime.images.jpg.image_url}
            alt=""
            className="w-20 h-20 object-cover rounded-md"
          />
          <div className="flex flex-col gap-2">
            <h4 className="font-bold leading-relaxed break-words line-clamp-1">
              {anime.title}
            </h4>
            <p>Rating: {anime.score}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Layout;
