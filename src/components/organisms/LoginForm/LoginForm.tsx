import { Formik, Form, FormikHelpers } from 'formik'
import EmailField from "../../molecules/Form/EmailField";
import PasswordField from "../../molecules/Form/PasswordField";
import RememberField from "../../molecules/Form/RememberField";
import ButtonSubmit from "../../atoms/Form/ButtonSubmit";
import PasswordLink from "../../atoms/Form/PasswordLink";
import LoadIcon from "../../atoms/Icons/LoadIcon";

export default function LoginForm() {

    const loginMethod = async (email: string, password: string) => {

        alert(`Email: ${email}, Password: ${password}`)

        setTimeout(() => {  }, 3000)
        // await loginFetch(email, password)
    }

    interface Values {
        email: string,
        password: string,
        remember: boolean
    }

    const initialValues = {
        email: '',
        password: '',
        remember: false,
    }

    return (
        <Formik initialValues={initialValues}
            onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                setTimeout(() => {
                    loginMethod(values.email, values.password)
                    setSubmitting(false);
                }, 800);
            }
            }>
            { props => (
                <Form className='space-y-8'> 
                    <EmailField />
                    <PasswordField />
                    <div className="flex items-center justify-between">
                        <RememberField />
                        <PasswordLink />
                    </div>
                    <ButtonSubmit>
                        {props.isSubmitting
                            ? <LoadIcon />
                            : "Iniciar Sesion"}
                    </ButtonSubmit>
                </Form>)}
        </Formik>
    )
}
