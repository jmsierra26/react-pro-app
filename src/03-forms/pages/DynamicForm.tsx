import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { MySelect, MyTextInput } from '../components'
import formJson from '../data/custom-form.json'

const initialValues: { [x: string]: any } = {}
const requiredFields: { [x: string]: any } = {}

for (const input of formJson) {
  initialValues[input.name] = input.value

  if (!input.validations) continue

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido')
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `Mínimo ${(rule as any).value || 2} caracteres`)
    }

    if (rule.type === 'email') {
      schema = schema.email('Formato de email inválido')
    }
  }

  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {() => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'input' || type === 'password' || type === 'email') {
                return <MyTextInput
                          key={name}
                          type={(type as any)}
                          name={name}
                          label={label}
                          placeholder={placeholder}
                        />
              } else if (type === 'select') {
                return (
                  <MySelect
                    key={name}
                    label={label}
                    name={name}
                  >
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>{label}</option>
                    ))}
                  </MySelect>
                )
              }

              return <span key={name}>Type '{type}' no es soportado</span>
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
