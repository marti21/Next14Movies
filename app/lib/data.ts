const Getoptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmMyZWMwZWM4MTQ1YTY5ZTVkOTU5NDkyZWI2MTYxMCIsInN1YiI6IjY0YTNjZGU2OGUyMGM1MDBjYmVjOWJjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1_SVjNBswnLNyJABcJsRz_oJsSQvL5-NEbwWLZR9xQ4'
  }
};

export async function fetchUpcomingMovies(){

  await new Promise((resolve) => setTimeout(resolve, 3000))

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1', Getoptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    const posters = getPosterImagesFromMovies(data);
    return posters;
  } 
  catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchNowPlayingMovies() {
    //await new Promise((resolve) => setTimeout(resolve, 3000))

    try{
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1&language=es-ES', Getoptions)

        if(!response.ok){
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        const posters = getPosterImagesFromMovies(data)
        console.log("holaaaaaaa")
        return [posters, data];
    }
    catch{

    }
}

export function getPosterImagesFromMovies(data:any){
    const listUrls = [];
    for (let i = 0; i < 7; i++) {
      listUrls.push(data.results[i].poster_path);
    }

    return listUrls;
}