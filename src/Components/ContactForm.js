import React from 'react'
import { Box, Heading, Flex, Input, Textarea, Button, } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {

  const initialValues = {
    name: '',
    email: '',
    message: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required'),
    email: Yup.string().email('Invalid email format').required('Email is Required'),
    message: Yup.string().required('Message is required'),
  })
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setSubmitting(false);
  };
  
  
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box maxW='md' mx='auto'>

      <Heading as="h2" textAlign='center' mb={8}
      marginTop='10px'
      >
        Contact Me
      </Heading>
      <Box as='form' onSubmit={formik.handleSubmit}>
        <Flex 
        direction={{ base: 'column', md: 'row' }}
        w={{ base: '100%', md: '100%'}}
        about='center'
        justifyContent='space-between' mb={4} gap={2}>

        <Input
          id='name'
          name='name'
          variant={'filled'}
          type='text'
          placeholder='Enter Your name'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.name && formik.errors.name}
          mb={4}
        />
        
        <Input
          id='email'
          name='email'
          type='email'
          variant={'filled'}
          placeholder='Enter Your email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.email && formik.errors.email}
          mb={4}
        />
        </Flex>
        {formik.touched.name && formik.errors.name ? (
          <Box color='red' fontSize='sm'>
            {formik.errors.name}
          </Box>
        ) : null}

        {formik.touched.email && formik.errors.email ? (
          <Box color='red' mb={4} fontSize='sm'>
            {formik.errors.email}
          </Box>
        ) : null}
        <Textarea
          id='message'
          name='message'
          placeholder='Enter Your message'
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.message && formik.errors.message}
          mb={4}
          w={{ base: '100%', md: '100%'}}
          h={{ base: '100px', md: '200px' }}
          variant={'outline'}
        />
        {formik.touched.message && formik.errors.message ? (
          <Box color='red' mb={4} fontSize='sm'>
            {formik.errors.message}
          </Box>
        ) : null}
        <Button
          type='submit'
          colorScheme='teal'
          variant={formik.isSubmitting ? 'outline' : 'solid'}
          isLoading={formik.isSubmitting}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  )
}

export default ContactForm
