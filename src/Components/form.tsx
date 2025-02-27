"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Input, TextArea } from "./input";
import { Button } from "./button";
import { FC } from "react";
import { sendMessage } from "@/utils/mail";
import { toast } from "sonner";
import { persons } from "@/lib/data";

interface IParson {
  id: number;
  name: string;
  email: string;
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

const defaultValue: ContactForm = {
  firstName: "",
  lastName: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

type ContactFormProps = { activePerson: IParson[] };

const ContactForm: FC<ContactFormProps> = ({
  activePerson,
}: ContactFormProps) => {
  const [data, setData] = useState<ContactForm>(defaultValue);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('data :', data);
  // };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsons = activePerson.map((parson) => parson.email);

    if (data.firstName && data.email && data.phone && data.message) {
      await sendMessage(parsons, data);
      setData(defaultValue);
      console.log('data :', data);
    } else {
      console.error("Please fill all the fields!");
    }
    };
 
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 py-2">
      <div className="flex flex-row gap-3.5">
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
      </div>
      <Input
        type="text"
        placeholder="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Phone Number"
        name="phone"
        value={data.phone}
        onChange={handleChange}
      />
      <TextArea
        placeholder="Message"
        name="message"
        value={data.message}
        onChange={handleChange}
      />
      <div className="mt-5">
        <Button type="submit">
          Send{" "}
          <span className="rotate-45 block text-2xl leading-none tracking-normal">
            🚀
          </span>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
