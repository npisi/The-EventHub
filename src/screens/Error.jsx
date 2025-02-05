import { useRouteError, Link } from 'react-router-dom'

function Error() {
    const error = useRouteError();

    return (
        <div className="error-container">
            <div className="error-content">
                <h1>404</h1>
                <h2>Oops! Page Not Found</h2>
                <p>The page you are looking for doesn't exist or has been moved.</p>
                <Link to="/" className="error-button">Back to Home</Link>
            </div>
        </div>
    )
}

export default Error