import { useNavigate } from "react-router-dom"

function Login(){

    const navigate = useNavigate()

    const handelLogin = () => {
        navigate('/')
    }

    return (
        <div>
            <h2>Страница входа</h2>
            <button onClick={handelLogin}>Войти</button>
        </div>
        
    )
}

export default Login