import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model"
import * as Yup from 'yup'
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import ImageField from "../forms/ImageField";
import CheckboxField from "../forms/CheckBoxFields";
import DateField from "../forms/DateFields";
import MultipleSelector, { multipleSelectorModel } from "../forms/MultipleSelector";
import { useState } from "react";
import {genreDTO} from "../genres/genres.model"
import { movieTheaterCreationDTO, movieTheaterDTO } from "../movietheaters/movieTheater.model";
import TypeAheadActors from "../forms/TypeAheadActors";
import { actorMovieDTO } from "../actors/actos.model";
import IndexActors from "../actors/indexActors";

export default function MovieForm(props: movieFormProps) {
    
    const [selectedGenres, setSelectedGenre] = useState(mapToModel(props.selectedGenres));
    const [nonSelectedGenres, setNonSelectedGenre] = useState(mapToModel(props.nonSelectedGenres));

    const [selectedMovieTheaters, setSelectedMovieTheaters] = useState(mapToModel(props.selectedMovieTheaters));
    const [nonSelectedMovieTheaters, setNonSelectedMovieTheaters] = useState(mapToModel(props.nonSelectedMovieTheaters));

    const [selectedActors, setSelectedActors] = useState(props.selectedActors)

    function mapToModel(items: {id: number, name: string}[]): multipleSelectorModel[] {
        return items.map(item => {
            return {key: item.id, value: item.name}
        })
    }
    
    return (
        <Formik
        initialValues={props.model}
        onSubmit={(values,actions) => {
            values.genresIds = selectedGenres.map(item => item.key)
            values.movieTheatersIds = selectedMovieTheaters.map(item => item.key)
            values.actors = selectedActors
            props.onSubmit(values, actions)}}
        validationSchema={Yup.object({
            title: Yup.string().required('This field is required').firstLetterUppercase()
        })}
        >
            {(formikProps) => (
                <Form>
                    
                    <TextField displayName="Title" field="title" />
                    <CheckboxField displayname="In Theaters" field="inTheaters" />
                    <TextField displayName="Trailer" field="trailer" />
                    <DateField displayName="Release Date" field="releaseDate" />
                    <ImageField displayName="Poster" field="poster" imageURL={props.model.posterURL} />
                    
                    <MultipleSelector 
                    displayName="Genres" 
                    nonSelected={nonSelectedGenres} 
                    selected={selectedGenres} 
                    onChange ={(selected, nonselected) => {
                        setSelectedGenre(selected)
                        setNonSelectedGenre(nonselected)
                    }} />

                    <MultipleSelector 
                    displayName="MovieTheater" 
                    nonSelected={nonSelectedMovieTheaters} 
                    selected={selectedMovieTheaters } 
                    onChange ={(selected, nonselected) => {
                        setSelectedMovieTheaters(selected)
                        setNonSelectedMovieTheaters(nonselected)
                    }} />

                    <TypeAheadActors displayName="Actors" actors={selectedActors}
                    onAdd={actors => {
                        setSelectedActors(actors)
                    }}
                    onRemove={actor => {
                        const actors = selectedActors.filter(x => x !== actor)
                        setSelectedActors(actors)
                    }}
                    listUI={(actor: actorMovieDTO) => 
                    <>
                    {actor.name} / <input placeholder="Character" type="text"
                        value={actor.character}
                        onChange={e => {
                            const index = selectedActors.findIndex(x => x.id === actor.id)
                            const actors = [...selectedActors]
                            actors[index].character = e.currentTarget.value
                            setSelectedActors(actors);
                        }} />
                    </>
                    }
                    />

                    <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieFormProps {
    model: movieCreationDTO;
    onSubmit(values: movieCreationDTO, actions: FormikHelpers<movieCreationDTO>): void;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheaterDTO[];
    nonSelectedMovieTheaters: movieTheaterDTO[];
    selectedActors: actorMovieDTO[];
}