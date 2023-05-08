import React from 'react'
import ContactForm from '../Components/ContactForm'

const Contact = () => {
  return (
    <div className='contact'
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        width: '100vw',
        background: 'linear-gradient(to top, #09203f 0%, #537895 100%)',
        color: 'white',
    }}>
        <ContactForm />
      
    </div>
  )
}

export default Contact
