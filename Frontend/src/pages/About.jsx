import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div><div className='text-2xl text-center pt-8 border-t border-gray-200'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-6 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Our company is committed to delivering exceptional products and services that reflect our dedication to quality and innovation. We place customer satisfaction at the heart of everything we do, striving to exceed expectations through modern solutions, thoughtful design, and a customer-first approach. By combining expertise with creativity, we aim to build lasting trust and set new standards in our industry.</p>
          <p>With years of experience in the industry, we have built a reputation for excellence and reliability. Our team is passionate about delivering value to every customer.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To deliver exceptional products and services that exceed customer expectations and contribute to their success.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>Every product undergoes rigorous testing and quality checks to ensure it meets our high standards.</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>Our streamlined processes and user-friendly interface make it easy for customers to find and purchase products quickly.</p>
        </div>
        <div className='border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>Our dedicated support team is available to assist you with any questions or concerns, ensuring a seamless shopping experience.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About