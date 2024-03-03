import { Link } from "react-router-dom"
import MovieTheaterForm from "./MovieTheaterForm"

export default function CreateMovieTheaters() {

    return (
        <>
            <h3>Create MovieTheaters</h3>
            <MovieTheaterForm 
            model={{name: ''}}
            onSubmit={values => console.log(values)}/>
        </>
    )
}