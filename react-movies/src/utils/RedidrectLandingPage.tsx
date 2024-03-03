import { Redirect } from "react-router-dom";

export default function RedirectLandingPage() {

    return (
        <Redirect to={{pathname: '/'}}></Redirect>
    )
}