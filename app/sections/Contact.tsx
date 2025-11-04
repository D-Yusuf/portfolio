'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FiLinkedin } from "react-icons/fi";
import { TbBrandGithub } from "react-icons/tb";
import { PiInstagramLogoBold } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import SocialButton from '../components/SocialButton';
type FormData = {
  name: string;
  email: string;
  message: string;
};
emailjs.init({
    publicKey: '8uSkikDY2hUl-Vu5m',
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ['foo@emailjs.com', 'bar@emailjs.com'],
      // The variable contains the email address
      watchVariable: 'userEmail',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 5s
      throttle: 5000,
    },
  });
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      'service_i649vwr', // Replace with your service ID
      'template_kgd6g3y', // Replace with your template ID
      formData,

    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      setFormData(prevData => {
        const resetData = {} as FormData;
        Object.keys(prevData).forEach(key => {
          resetData[key as keyof FormData] = '';
        });
        return resetData;
      });
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message, please try again.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <section id='contact' className="w-full  flex flex-col items-start  relative  animate-fade-in">
      <h1 className="md:text-6xl text-4xl font-bold mb-4">Get In Touch</h1>
      <p className="md:text-4xl text-2xl mb-8">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl px-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message to Yusuf..."
              required
            />
          </div>
        </div>
        <div className="flex flex-col   gap-5">
          <button
            className="bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loader"></span>
            ) : (
              'Send'
            )}
          </button>
          
        </div>
      </form>
      <div className="absolute bottom-1/2 right-0 opacity-60  gap-2 p-4">
    <div className="w-32 h-32 absolute bg-secondary opacity-10 transform rotate-[25deg]"></div> 
    <div className="w-32 h-32 absolute bg-secondary opacity-20 transform rotate-[50deg]"></div> 
    <div className="w-32 h-32 absolute bg-secondary opacity-30 transform rotate-[75deg]"></div>
    <div className="w-32 h-32 absolute bg-secondary opacity-50 transform rotate-[100deg]"></div>
  </div>
    
    </section>
  );
}
