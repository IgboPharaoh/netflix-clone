const APIKEY = '75ec31c619a104164d8639f1235a8b94'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213/`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
    fetcHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
}

export default requests