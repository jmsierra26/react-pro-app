import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'
import '../styles/styles.css'

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string()
                    .min(2, 'Debe tener mínimo 2 caracteres')
                    .max(15, 'Debe tener 15 caracteres o menos')
                    .required('Requerido'),
          email: Yup.string()
                    .email('Correo electrónico inválido')
                    .required('Requerido'),
          password1: Yup.string()
                        .min(6, 'Debe tener mínimo 6 caracteres')
                        .required('Requerido'),
          password2: Yup.string()
                        .test('passwords-match', 'Las contraseñas deben ser iguales', function(value){
                          return this.parent.password1 === value
                        }),
        })}
      >
        {({ resetForm }) => (
          <Form noValidate>
            <MyTextInput label="Name" name="name" placeholder="Name" />
            <MyTextInput label="Email" name="email" type="email" placeholder="Email" />
            <MyTextInput label="Password" name="password1" type="password" placeholder="Password" />
            <MyTextInput label="Repeat password" name="password2" type="password" placeholder="Repeat password" />

            <button type="submit">Create</button>
            <button type="button" onClick={() => resetForm()}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
