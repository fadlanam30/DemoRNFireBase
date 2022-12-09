import { object as yupObject, string as yupString } from 'yup'

const validationSchema = yupObject().shape({
    email: yupString().required('Email cannot empty').email(),
    password: yupString().required('Password cannot empty').min(6),
})

export default validationSchema