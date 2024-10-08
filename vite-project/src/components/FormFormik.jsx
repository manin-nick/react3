import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik'

function FormikForm(){
    
    const validateShema = Yup.object({
        name: Yup.string()
        .required('Имя обязательно')
        .min(2, 'Имя должно содержать минимум 2 символа'),
        email: Yup.string()
        .email('Некорректный email')
        .required('Email обязателен'),
        password: Yup.string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .matches(/\d/, 'Пароль должен содержать минимум 1 цифру')
    })
    
    return(
        <>
            <Formik
            initialValues={{name: '', email: '', password: ''}}
            validationSchema={validateShema}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2))
            }}
            >
                <Form>
                    <div>
                        <label>Имя:</label>
                        <Field name ="name" type = "text" />
                        <ErrorMessage name = 'name' component = 'div' style = {{color: 'red'}} />
                    </div>

                    <div>
                        <label>Email:</label>
                        <Field name ="email" type = "email" />
                        <ErrorMessage name = 'email' component = 'div' style = {{color: 'red'}} />
                    </div>

                    <div>
                        <label>Password:</label>
                        <Field name ="password" type = "password" />
                        <ErrorMessage name = 'password' component = 'div' style = {{color: 'red'}} />
                    </div>

                    <button type='submit'>Отправить</button>

                </Form>

            </Formik>
        </>
    )
}

export default FormikForm