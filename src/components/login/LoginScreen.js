import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {

    const { dispatch } = useContext(AuthContext);

    const lastPath = JSON.parse(localStorage.getItem('lastPath')) || '/marvel';

    const navigate = useNavigate()

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Sebastian',
            }
        }
        dispatch(action)
        console.log('Login');
        navigate(lastPath, { replace: true })
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
