import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAnimeList, fetchAnimeTop } from "../../api/jikanAPI";
import { fetchKitsuAnime } from "../../api/kitsuAPI";
}

// Define a type for the slice state
interface AnimeState {
  list: any[]; // Daftar anime populer
  images: Record<string, string>;
  topList: any[]; // Daftar anime terbaik
  status: "idle" | "loading" | "failed"; // Status untuk fetching data utama
  topStatus: "idle" | "loading" | "failed"; // Status untuk fetching data anime terbaik
}

// Define the initial state using that type
const initialState: AnimeState = {
  list: [],
  images: {},
  topList: [],
  status: "idle",
  topStatus: "idle",
};

// Thunk untuk mendapatkan daftar anime populer
export const getAnimeList = createAsyncThunk("anime/fetchList", async () => {
  const data = await fetchAnimeList();
  return data.data; // API Jikan membungkus data di dalam `data`
});

// Thunk untuk mendapatkan daftar anime terbaik
export const getAnimeTop = createAsyncThunk("anime/fetchTop", async () => {
  const data = await fetchAnimeTop();
  return data.data;
});

// Thunk untuk mengambil gambar berdasarkan title anime
export const getAnimeImages = createAsyncThunk(
  "anime/fetchImages",
  async (titles: string[]) => {
    const results = await Promise.all(
      titles.map(async (title) => {
        const kitsuData = await fetchKitsuAnime(title);
        const imageUrl = kitsuData.data[0]?.attributes?.posterImage?.original || ""; // Ambil URL gambar
        return { title, imageUrl };
      })
    );
    return results;
  }
);

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling getAnimeList
      .addCase(getAnimeList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAnimeList.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = action.payload;
      })
      .addCase(getAnimeList.rejected, (state) => {
        state.status = "failed";
      })
      // Handling getAnimeTop
      .addCase(getAnimeTop.pending, (state) => {
        state.topStatus = "loading";
      })
      .addCase(getAnimeTop.fulfilled, (state, action) => {
        state.topStatus = "idle";
        state.topList = action.payload;
      })
      .addCase(getAnimeTop.rejected, (state) => {
        state.topStatus = "failed";
      })
      .addCase(getAnimeImages.fulfilled, (state, action) => {
        action.payload.forEach(({ title, imageUrl }) => {
          state.images[title] = imageUrl;
        });
      });
  },
});

export default animeSlice.reducer;