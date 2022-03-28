import { Formik, Form, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import EmailField from "../../molecules/Form/EmailField";
import PasswordField from "../../molecules/Form/PasswordField";
import ButtonSubmit from "../../atoms/Form/ButtonSubmit";
import LoadIcon from "../../atoms/Icons/LoadIcon";
import ErrorSection from '../../molecules/Form/ErrorSection';
import { registerFetch } from '../../../auth/authController';
import { useAuth } from '../../../context/authContext';
import ConfirmPasswordField from '../../molecules/Form/ConfirmationPasswordField';
import UserNameField from '../../molecules/Form/UserNameField';
import ButtonLink from '../../atoms/Form/ButtonLink';
import { useLocation } from 'wouter';

export default function RegisterForm() {

    const { token, setToken } = useAuth()
    const [location, setLocation] = useLocation()

    const registerMethod = async (values: Values) => {
        const token = await registerFetch(values.email, values.password, values.username)

        setToken(token)

        setLocation('home')
    }

    interface Values {
        email: string,
        password: string,
        confirmPassword: string,
        username: string
    }

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .required('Debe introducir un nombre de usuario'),
            email: Yup.string()
                .email('Debe introducir un email válido ( example@domain.com )')
                .required('Debe introducir un email'),
            password: Yup.string()
                .required('Debe introducir una contraseña'),
            confirmPassword: Yup.string()
                .required('Debe confirmar su contraseña')
                .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
        }
    )

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                setTimeout(() => {
                    registerMethod(values);
                    setSubmitting(false);
                }, 800);
            }
            }>
            {props => (
                <Form className='space-y-8'>
                    <UserNameField />
                    <EmailField />
                    <PasswordField />
                    <ConfirmPasswordField />
                    <ButtonSubmit>
                        {props.isSubmitting
                            ? <LoadIcon />
                            : "Registrarse"}
                    </ButtonSubmit>
                    <ButtonLink href='login'>Login</ButtonLink>
                    <ErrorSection />
                </Form>)}
        </Formik>
    )
}
