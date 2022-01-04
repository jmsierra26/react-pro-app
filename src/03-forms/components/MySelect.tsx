import { ErrorMessage, useField } from "formik"

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const MySelect = ({ label, ...rest }: Props) => {
  const [field] = useField(rest)

  return (
    <>
      <label htmlFor={rest.id || rest.name}>{label}</label>
      <select { ...field } { ...rest } />
      <ErrorMessage name={rest.name} component="span" />
    </>
  )
}
