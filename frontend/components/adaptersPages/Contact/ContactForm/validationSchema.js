import * as yup from 'yup';

export const validationSchema = yup.object({
  order: yup
    .string()
    .length(6)
    .required('Order reference is required'),
  name: yup
    .string()
    .required('Name is required'),
  phone: yup
    .number(),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  message: yup
    .string()
    .min(100)
    .required('Message is required'),
});