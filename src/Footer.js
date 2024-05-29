import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer text-center'>
        <div className='flex flex-wrap footer-contact-social'>
            <div className='footer-contact '>
                <h5 className='mb-4'>Contact informations</h5>
                <div className='flex gap-3'>
                    <MdOutlineMail />
                    marianuta112@gmail.com
                </div>
                <div className='flex gap-3'>
                    <FaPhone /> 
                    +407946785
                </div>
            </div>
            <div className='footer-social'>
            <h5 className='mb-4'>Get connected with us on social networks</h5>
                <div className='flex gap-3'>
                    <FaInstagram />
                     marian.uta_
                </div>
                <div className='flex gap-3'>
                    <FaLinkedin />
                    Marian Uta
                </div>
               
            </div>
        </div>
        <div className='footer-copyrights mt-4'>
        © FLASH UMI - 2024. Developed by Marian Uta
        </div>
    </div>
  )
}

export default Footer