import React from 'react'
import {CiLinkedin} from "react-icons/ci"
import {MdOutlineMail} from "react-icons/md"

const ContactMe = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-white mb-4">Contact Me</h1>
        <p  className="text-base lg:text-lg text-slate-400">Feel free to reach out to me through Linkedin or Email</p>

        <ul>

            <a href="https://www.linkedin.com"><CiLinkedin/></a>
            <MdOutlineMail/>
            <li className="text-slate-400"> pathakpalak31@gmail.com</li>
        </ul>
    </div>
  )
}

export default ContactMe