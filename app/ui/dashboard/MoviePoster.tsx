'use client'

import { useState, useEffect } from 'react'
import { montserrat } from '../fonts';
import Image from 'next/image';
import { easeIn, motion } from 'framer-motion';

export const MoviePoster= ({moviesPosters, moviesData}) => {

    interface MovieData {
        adult: boolean;
        backdrop_path: string;
        genre_ids: Array<number>;
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    }

    const [movieInfo, setDataInfo] = useState<MovieData[]>([]);
    const [movieTitle ,setMovieTitle] = useState('');
    const [adult, setAdult] = useState(false)
    const [description, setDescription] = useState('')
    const [popularity, setPopularity] = useState(0)
    const [releaseDate, setReleaseDate] = useState('') 
    const [voteAverage, setVoteAverage] = useState(0)
    const [posterPath, setPosterPath] = useState('')

    const [activated, SetActivated] = useState(true);
    const [canAppear, setCanAppear] = useState(false);

    const [imageMovieInfoCanAppear, SetImageMovieInfoCanAppear] = useState(false);

    const position = {
        closed: {
            height: 'auto',
        },
        open: {
            height: '100%',
        }
    }

    const containerTransition = {
        duration: 0.4,
        ease: 'easeInOut',
    }

    const panelInfo = {
        open: {
          transform: 'translateX(0)'
        },
        closed: {
          transform: 'translateX(140%)'
        }
    }
      
    const containerTransition2 = {
        duration: 0.4,
        ease: 'easeOut',
    }

    const imageMovieInfo = {
        open: {
          transform: 'scale(1.0)'
        },
        closed: {
          transform: 'scale(0.0)'
        }
    }
      
    const containerTransition3 = {
        duration: 0.3,
        ease: 'easeInOut',
    }
    
    function checkMovie(index:any){
        console.log(index)

        const data = moviesData.results[index]
        const dataArray: MovieData[] = [data];
        
        setDataInfo(dataArray)
        console.log(dataArray);
    }

    useEffect(() => {
        console.log(movieInfo);
    
        if (movieInfo.length > 0) {
            setMovieTitle(movieInfo[0].title);
            setAdult(movieInfo[0].adult);
            setDescription(movieInfo[0].overview);
            setPopularity(movieInfo[0].popularity);
            setReleaseDate(movieInfo[0].release_date);
            setVoteAverage(movieInfo[0].vote_average);
            setPosterPath(movieInfo[0].poster_path);
            SetActivated(false);
        } 

        console.log(typeof movieInfo);
      }, [movieInfo]);

    return(
        <div className="w-full overflow-y-auto overflow-x-hidden h-[calc(100vh-180px)] flex flex-col pt-32">
            <motion.div className='flex flex-row gap-12 flex-wrap justify-center items-end'
                variants={position}
                initial={'open'}
                animate={activated ? 'open' : 'closed'}
                transition={{ ...containerTransition, onComplete: () => activated === false && setCanAppear(true) }}
            >
                {moviesPosters && moviesPosters.map((movie:any, index:any) => (
                    <Image key={index} src={`https://image.tmdb.org/t/p/original/${movie}`} onClick={() => checkMovie(index)} alt="movie Image" className="rounded-md cursor-pointer hover:scale-[103%] ease-out duration-300" width={220} height={200} />
                ))}
            </motion.div>
            
            <div className='flex justify-center items-center w-full h-[500px]'>
                { !activated && <div className='h-full flex flex-row w-4/5'>
                    <motion.div
                        variants={imageMovieInfo}
                        initial={'closed'}
                        animate={imageMovieInfoCanAppear ? 'open' : 'closed'}
                        transition={containerTransition3}
                        className='w-3/12 h-full flex justify-center items-center'
                    >
                        <Image src={`https://image.tmdb.org/t/p/original/${posterPath}`} alt="movie Image" className="rounded-md" width={250} height={250}/>
                    
                    </motion.div>

                    <motion.div className={`w-9/12 flex h-full flex-col gap-2 justify-center items-start ${montserrat.className}`}
                        variants={panelInfo}
                        initial={'closed'}
                        animate={canAppear ? 'open' : 'closed'}
                        transition={{...containerTransition2, onComplete: () => canAppear && SetImageMovieInfoCanAppear(true)}}
                    >
                        <p>hola: {movieTitle}</p>
                        <p>hola: {adult}</p>
                        <p>hola: {description}</p>
                        <p>hola: {popularity}</p>
                        <p>Realase Date: {releaseDate}</p>
                        <p>hola: {voteAverage}</p>
                    </motion.div>   
                </div>
                }
            </div>
            
        </div>
    )
}