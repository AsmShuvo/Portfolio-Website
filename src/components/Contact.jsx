import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="bg-black text-white py-20 text-center" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development jobs, projectgs or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
              <a href="mailto:asm.cse.sust@gmail.com" className='hover:underline'>
                asm.cse.sust@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2'>

              </FaPhone>
              <span>+88 01952 385867 </span> <br/>
              <FaWhatsapp  className='inline-block text-lg text-green-400 mr-2'/>
              <span>+88 01750 110778</span>
              
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
              <span>Akhalia, Sylhet, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact