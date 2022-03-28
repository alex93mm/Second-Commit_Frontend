import { ErrorMessage } from 'formik'

export default function ErrorSection() {
    return (
        <div className='space-y-2 text-sm text-center text-red-500'>
            <ErrorMessage
                name='username'
                component='div'
            />
            <ErrorMessage
                name='email'
                component='div'
            />
            <ErrorMessage
                name='password'
                component='div'
            />
            <ErrorMessage
                name='confirmPassword'
                component='div'
            />
        </div>
    )
}
