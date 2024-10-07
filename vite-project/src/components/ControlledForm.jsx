import { useState } from "react"

function ControlledForm(){

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[errors, setErrors] = useState({})

    const validate = () => {
        const newErrors = {}
        if (!name) newErrors.name = 'Имя обязательно'
        if (!email) newErrors.email = 'Почта обязательна'
        setErrors(newErrors)
        return Object.keys(newErrors).length ===  0
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(validate()){
            alert(`Name: ${name}, Email: ${email}`)
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Имя:
                        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}>
                        </input>
                        
                            {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                        
                        
                    </label>
                </div>


                <div>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}>
                        </input>
                            {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                        
                        
                    </label>
                </div>

                <button type="submit">Отправить</button>

            </form>
        </>
    )
}

export default ControlledForm