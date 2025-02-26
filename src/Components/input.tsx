import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type IProps = InputHTMLAttributes<HTMLInputElement>
type ITextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const inputclass = "w-full rounded-[5px]  border border-[#FFFFFF33] py-3  md:px-3.5 px-4 text-[15px] tracking-[-1%] leading-[18.5px]  focus:outline-none focus:border-secondary text-white bg-transparent"

export const Input:FC<IProps> = (props) => {
    const {type,placeholder, ...others} = props;
  return (
   <input type={type || "text"}
    placeholder={placeholder || "Name"}
    {...others}
    className={inputclass}
    />
  )
}

export const TextArea:FC<ITextAreaProps> = (props) => {
    const {placeholder, ...others} = props;
  return (
   <textarea name="" id="" 
   placeholder={placeholder || "Message"} 
   className={`${inputclass} h-[120px]`}
   {...others}
   ></textarea>
  )
}



