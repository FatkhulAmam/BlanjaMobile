import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  home: yup.string().required('home is required'),
  recipients_phone: yup
    .number()
    .integer('Please provide integer')
    .required('postal code is required'),
  address: yup.string().required('address is required'),
  city: yup.string().required('city is required'),
  postal_code: yup
    .number()
    .integer('Please provide integer')
    .required('postal code is required'),
  recipients_name: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Name is required'),
});

export default loginValidationSchema;
