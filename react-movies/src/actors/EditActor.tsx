import { Link } from "react-router-dom"
import ActorForm from "./ActorForm"

export default function EditActor() {

    return (
        <>
            <h3>Edit actor</h3>
            <ActorForm model={{
                name: "Tom Holland", 
                dateOfBirth: new Date('1996-06-01T00:00:00'),
                biography: `# Something
                This person was born in **PL**`,
                pictureURL: 'https://upload.wikimedia.org/wikipedia/de/thumb/9/90/Naruto_Logo_Deutsch.svg/280px-Naruto_Logo_Deutsch.svg.png' 
            }}
             onSubmit={values => console.log(values)}/>
        </>
    )
}