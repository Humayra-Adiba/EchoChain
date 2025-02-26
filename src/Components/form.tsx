import React from 'react'
import {Input, TextArea} from './input'
import {Button} from './button'
const ContactForm = () => {
  return (
    <form action="" className='flex flex-col gap-3.5  py-2'>
        <div className='flex flex-row gap-3.5 '>
        <Input type="text" placeholder="First Name"/>
        <Input type="text" placeholder="Last Name"/>
        </div>
        <Input type="text" placeholder="Email"/>
        <Input type="text" placeholder="Phone Number"/>
        <TextArea placeholder="Message"/>
      <div className='mt-5'>
      <Button type="submit" >
        Send{" "}
        <span className="rotate-45 block text-2xl leading-none tracking-normal">
          🚀
        </span>
      </Button>

      </div>
    </form>
  )
}

export default ContactForm
