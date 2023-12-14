import { fetchNowPlayingMovies } from "@/app/lib/data";
import { MoviePoster } from "./MoviePoster";
import { useSearchParams } from "next/navigation";

export async function MoviesNow() {

    //const searchParams = useSearchParams()
    //console.log(searchParams.get('page'))
    //const params = new URLSearchParams(searchParams)
    //params.set('page', '1');

    const data = await fetchNowPlayingMovies("es");

    if (data) {
        const moviesPosters = data[0];
        const moviesData = data[1];

        return (
            <MoviePoster moviesPosters={moviesPosters} moviesData={moviesData}></MoviePoster>
        );
    }
}
