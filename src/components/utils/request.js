const APIKEY = '75ec31c619a104164d8639f1235a8b94'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213/`,
    fetchTopRated: `/movies/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movies?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movies?api_key=${APIKEY}&with_genres=34`,
    fetcHorrorMovies: `/discover/movies?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movies?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movies?api_key=${APIKEY}&with_genres=99`,
}

export default requests