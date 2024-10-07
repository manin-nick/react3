import { useNavigate } from "react-router-dom"

function Home (){

    const navigate = useNavigate() 

    const goToLogin = () => {
        navigate('/Login')
    }

    return (
        <div>
            <h1>Главная страница</h1>
            <button onClick={goToLogin}>Перейти на страницу входа</button>
        </div>
    )
}

export default Home