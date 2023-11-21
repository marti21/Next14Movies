import { fetchUpcomingMovies } from "@/app/lib/data"
import dynamic from 'next/dynamic';

const DynamicImage = dynamic(() => import('next/image'), { ssr: false });

export default async function IncomingMovies() {
    
    const movies = await fetchUpcomingMovies();
    console.log(movies)
    
    return(
        <div className="flex flex-row gap-12 bg-red-200 w-full flex-wrap justify-center items-center overflow-y-auto h-[calc(100vh-180px)] py-24 pl-12">
            
            { movies && movies.map((movie, index) => (
                    <>
                        <DynamicImage key={index} src={`https://image.tmdb.org/t/p/original/${movie}`} alt="movie Image" className="w-fit h-fit rounded-md" width="200" height="200"></DynamicImage> 
                        <DynamicImage key={index} src={`https://image.tmdb.org/t/p/original/${movie}`} alt="movie Image" className="w-fit h-fit rounded-md" width="200" height="200"></DynamicImage> 
                        <DynamicImage key={index} src={`https://image.tmdb.org/t/p/original/${movie}`} alt="movie Image" className="w-fit h-fit rounded-md" width="200" height="200"></DynamicImage> 
                        <DynamicImage key={index} src={`https://image.tmdb.org/t/p/original/${movie}`} alt="movie Image" className="w-fit h-fit rounded-md" width="200" height="200"></DynamicImage> 
                        <DynamicImage key={index} src={`https://image.tmdb.org/t/p/original/${movie}`} alt="movie Image" className="w-fit h-fit rounded-md" width="200" height="200"></DynamicImage> 
                    </>
                ))
            }
        </div>
    )
}   