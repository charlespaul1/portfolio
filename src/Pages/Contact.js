import React from 'react'
import { Box, Heading, Flex, Input, Textarea, Button, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
const Contact = () => {
  const toast = useToast()

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
    try {
      await axios.post('/api/contact', values);
      toast({
        title: 'Message sent',
        description: 'Your message has been sent successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      resetForm();
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error sending message',
        description: 'There was an error sending your message. Please try again later.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
    setSubmitting(false);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box maxW='md' mx='auto'>
      <Heading as="h2" textAlign='center' mb={8}>
        Contact Me
      </Heading>
      <Box as='form' onSubmit={formik.handleSubmit}>
        <Flex justifyContent='space-between' mb={4} gap={2}>

        <Input
          id='name'
          name='name'
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
          
          h='200px'
          variant={'filled'}
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

export default Contact
