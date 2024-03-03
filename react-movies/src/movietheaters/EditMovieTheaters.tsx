import { Link } from "react-router-dom"
import MovieTheaterForm from "./MovieTheaterForm"

export default function EditMovieTheaters() {

    return (
        <>
            <h3>Edit MovieTheaters</h3>
            <MovieTheaterForm 
            model={{name: 'Sambil', latitude: 18.907390306220666, longitude: -69.46007251739503}}
            onSubmit={values => console.log(values)}/>
        </>
    )
}