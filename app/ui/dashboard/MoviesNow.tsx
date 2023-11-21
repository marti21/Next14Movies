import { fetchNowPlayingMovies } from "@/app/lib/data";
import { MoviePoster } from "./MoviePoster";

export async function MoviesNow() {

    const data = await fetchNowPlayingMovies();

    if (data) {
        const moviesPosters = data[0];
        const moviesData = data[1];

        return (      
            <MoviePoster moviesPosters={moviesPosters} moviesData={moviesData}></MoviePoster>
        );
    }
}
