import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import EmailField from "../../molecules/Form/EmailField";
import PasswordField from "../../molecules/Form/PasswordField";
import ButtonSubmit from "../../atoms/Form/ButtonSubmit";
import LoadIcon from "../../atoms/Icons/LoadIcon";
import RememberSection from '../../molecules/Form/RemeberSection';
import ErrorSection from '../../molecules/Form/ErrorSection';
import { loginFetch } from '../../../auth/authController';
import { useAuth } from '../../../context/authContext';
import ButtonLink from '../../atoms/Form/ButtonLink';
import { useLocation } from 'wouter';

export default function LoginForm() {

    const { token, setToken } = useAuth()
    const [location, setLocation] = useLocation()

    const loginMethod = async (values: Values) => {
        const token = await loginFetch(values.email, values.password)

        values.remember
            ?
            localStorage.setItem('token', token)
            :
            sessionStorage.setItem('token', token)

        setToken(token)
        
        setLocation('home')
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

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Debe introducir un email válido ( example@domain.com )')
                .required('Debe introducir un email'),
            password: Yup.string()
                .required('Debe introducir una contraseña')
        }
    )

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                setTimeout(() => {
                    loginMethod(values)
                    setSubmitting(false);
                }, 800);
            }
            }>
            {props => (
                <Form className='space-y-8'>
                    <EmailField />
                    <PasswordField />
                    <RememberSection />
                    <ButtonSubmit>
                        {props.isSubmitting
                            ? <LoadIcon />
                            : "Iniciar Sesion"}
                    </ButtonSubmit>
                    <ButtonLink href='register'>Registrarse</ButtonLink>
                    <ErrorSection />
                </Form>)}
        </Formik>
    )
}
