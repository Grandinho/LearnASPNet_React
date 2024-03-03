import { Link } from "react-router-dom"
import { actorMovieDTO } from "../actors/actos.model"
import { genreDTO } from "../genres/genres.model"
import { movieTheaterDTO } from "../movietheaters/movieTheater.model"
import MovieForm from "./MovieForm"

export default function EditMovie() {
    
    const nonSelectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'} ]
    const selectedGenres: genreDTO[] = [ {id: 2, name: 'Drama'}]

    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id: 1, name: 'Sambil', latitude: 18.907390306220666, longitude: -69.46007251739503} ]
    const selectedMovieTheaters: movieTheaterDTO[] = [ {id: 2, name: 'Kaka', latitude: 1.907390306220666, longitude: -2.46007251739503}]

    const selectedActors: actorMovieDTO[] = [ {id: 1, name: 'Felipe', character: 'dsadsa', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/170px-Tom_Holland_by_Gage_Skidmore.jpg'},
    {id: 2, name: 'Gonzalez', character: '', picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/170px-Tom_Holland_by_Gage_Skidmore.jpg'}]
    
    return (
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{title: 'Spider man', inTheaters: true, trailer: 'url', releaseDate: new Date('2019-01-01T00:00:00')}}
            onSubmit={values => console.log(values)}
            nonSelectedGenres={nonSelectedGenres}
            selectedGenres={selectedGenres}
            nonSelectedMovieTheaters={nonSelectedMovieTheaters}
            selectedMovieTheaters={selectedMovieTheaters}
            selectedActors={selectedActors}
            />
        </>
    )
}