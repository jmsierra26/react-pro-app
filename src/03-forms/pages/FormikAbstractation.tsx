import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from '../components'
import '../styles/styles.css'

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik abstractation</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
                        .max(15, 'Debe tener 15 caracteres o menos')
                        .required('Requerido'),
          lastName: Yup.string()
                      .max(10, 'Debe tener 10 caracteres o menos')
                      .required('Requerido'),
          email: Yup.string()
                    .email('Correo electrónico inválido')
                    .required('Requerido'),
          terms: Yup.boolean()
                    .oneOf([true], 'Debe aceptar las condiciones'),
          jobType: Yup.string()
                      .notOneOf(['it-jr'], 'Esta opción no es permitida')
                      .required('Requerido'),
        })}
      >
        {() => (
          <Form noValidate>
            <MyTextInput
              label="First name"
              name="firstName"
              placeholder="Jesús"
            />
            <MyTextInput
              label="Last name"
              name="lastName"
              placeholder="Sierra"
            />
            <MyTextInput
              label="Email address"
              name="email"
              type="email"
              placeholder="jesus.sierra@google.com"
            />
            <MySelect label="Job type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Jr</option>
            </MySelect>
            <MyCheckbox label="Terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
