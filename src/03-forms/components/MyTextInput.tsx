import { ErrorMessage, useField } from "formik"

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...rest }: Props) => {
  const [field] = useField(rest)

  return (
    <>
      <label htmlFor={rest.id || rest.name}>{label}</label>
      <input { ...field } { ...rest } />
      <ErrorMessage name={rest.name} component="span" />
    </>
  )
}
