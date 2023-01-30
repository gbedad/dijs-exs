export const selectMovie = (movie) => {
    return {
        type: "MOVIE_SELECTED",
        payload: movie
    }
}

export const movies = () => {
    return {
        type: "MOVIES",
    }
}
