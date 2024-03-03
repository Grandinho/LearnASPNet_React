import { Form, Formik, FormikHelpers } from "formik";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import { movieTheaterCreationDTO } from "./movieTheater.model";
import * as Yup from 'yup'
import { Link } from "react-router-dom";
import Map  from '../utils/Map'
import MapField from "../forms/MapField";
import coordianteDTO from "../utils/coordinate.model";

export default function MovieTheaterForm(props: movieTheaterFrom) {

    function transfromCoordinates(): coordianteDTO[] | undefined {
        if (props.model.latitude && props.model.longitude) {
            const response: coordianteDTO = {lat: props.model.latitude, lgn: props.model.longitude}
            return [response]
        }
        return undefined;
    }

    return (
        <Formik
        initialValues={props.model}
        onSubmit={props.onSubmit}
        validationSchema={Yup.object({
            name: Yup.string().required('This field is required').firstLetterUppercase()
        })}
        >
            {(formikProps) => (
                <Form>
                    <TextField field="name" displayName="Name" />

                    <div style={{marginBottom: '1rem'}}>
                        <MapField latField='latitude' lngField="longitude"
                        coordinates={transfromCoordinates()}/>
                    </div>

                    <Button disabled={formikProps.isSubmitting} type="submit">Save changes</Button>
                    <Link className="btn btn-secondary" to="/movietheaters">Cancel</Link>
                </Form>
            )}
        </Formik>
    )
}

interface movieTheaterFrom {
    model: movieTheaterCreationDTO;
    onSubmit(values: movieTheaterCreationDTO, actions: FormikHelpers<movieTheaterCreationDTO>): void    
}