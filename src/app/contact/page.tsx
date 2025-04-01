import React from 'react'
import NextStep from '../components/NextStep'
import ContactBanner from '../components/ContactBanner'

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20 lg:pt-28 bg-white text-black">
        <NextStep/>
        <ContactBanner/>
    </div>
  )
}

export default ContactPage