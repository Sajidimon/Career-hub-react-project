import { Link, useRouteError } from "react-router-dom";


const Error = () => {

    const error = useRouteError();
    return (
        <div>
            <p>Opps!!</p>
            <p>{error.statusText || error.Message}</p>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default Error;