import { useRef } from "react"

function UncontrolledForm(){
    
    const nameRef = useRef(null)
    const emailRef = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Name: ${nameRef.current.value}, Email:${emailRef.current.value}`)
    }
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Имя:
                    <input type="text" ref={nameRef} />
                </label>
            </div>

            <div>
                <label>
                    Email:
                    <input type="text" ref={emailRef} />
                </label>
            </div>

                <button type="submit">Отправить</button>

        </form>
        </>
    )
}


export default UncontrolledForm