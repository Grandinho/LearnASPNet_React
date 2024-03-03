import { Link, useHistory } from "react-router-dom"
import Button from "../utils/Button"
import { ErrorMessage, Field, Form, Formik, yupToFormErrors } from "formik";
import *  as Yup from 'yup'
import TextField from "../forms/TextField";
import GenreForm from "./GenreForm";

export default function CreateGenre() {

    const history = useHistory();

    return (
        <>
            <h3>Create Genre</h3>
            <GenreForm 
            model={{name: ''}} 
            onSubmit={async value => {
                await new Promise(r => setTimeout(r, 1))
                console.log(value) }}
            
            />
        </>
    )
}