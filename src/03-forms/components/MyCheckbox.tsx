import { ErrorMessage, useField } from "formik"

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheckbox = ({ label, ...rest }: Props) => {
  const [field] = useField({ ...rest, type: 'checkbox' })

  return (
    <>
      <label>
        <input type="checkbox" { ...field } { ...rest } />
        {label}
      </label>
      <ErrorMessage name={rest.name} component="span" />
    </>
  )
}
