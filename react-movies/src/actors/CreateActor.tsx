import { Link } from "react-router-dom"
import ActorForm from "./ActorForm"

export default function CreateActor() {

    return (
        <>
            <h3>Create actor</h3>
            <ActorForm model={{name: "", dateOfBirth: undefined}}
             onSubmit={values => console.log(values)}/>




        </>
    )
}