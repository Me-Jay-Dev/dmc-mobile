export const authSchema = yup.object().shape({
  username: yup
    .string()
    .required('First name is required')
    .max(50, 'Your first name is over the limit of 50 characters')
    .matches(/^[a-zA-Z\u00f1\u00d1 ,.'-]*$/i, 'Input valid first name'),
  password: yup
    .string()
    .required('Pasword is required')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Password must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character',
    )
    .min(8, 'Password must be at least 8 characters'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Confirm password is required'),
});
