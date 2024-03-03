import { Field } from "formik";
import { StringLocale } from "yup/lib/locale";

export default function CheckboxField(props: checkboxField) {

    return (
        <div className="mb-3 form-check">
            <Field className="form-check-input" id={props.field} name={props.field} type="checkbox" />
            <label htmlFor={props.field}>{props.displayname}</label>
        </div>
    )
}

interface checkboxField {
    displayname: string;
    field: string;
}