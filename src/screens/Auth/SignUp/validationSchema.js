import { object as yupObject, string as yupString, ref } from 'yup'

const validationSchema = yupObject().shape({
    name: yupString().required('Name cannot empty'),
    email: yupString().required('Email cannot empty').email(),
    password: yupString().required('Password cannot empty').min(6),
    confirm_password: yupString().oneOf(
        [ref('password'), null],
        'Password does not match'
    ),
})

export default validationSchema