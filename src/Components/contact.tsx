'use client';

import React, { useState } from 'react'
import { PersonButton } from './button'
import { persons } from '@/lib/data'
import ContactForm from './form'

interface IParson {
    id: number;
    name: string;
    email: string;
}

const Contact = () => {

    const [activePerson, setActivePerson] = useState<IParson[]>([]);
    const isActive = (parson: IParson) => activePerson.some((p) => p.id === parson.id);
    const handleSelect = (parson: IParson) => {
        console.log("Selected person:", parson);
        if (isActive(parson)) {
            setActivePerson((prv) => {
                const updated = prv.filter((item) => item.id !== parson.id);
                console.log("Updated active persons (removed):", updated);
                return updated;
            });
        } else {
            setActivePerson((prv) => {
                const updated = [...prv, parson];
                console.log("Updated active persons (added):", updated);
                return updated;
            });
        }
    };

    return (
        <div className="w-full max-w-[516px] relative flex flex-col justify-center items-center">
            <h2 className="font-semibold md:text-[29px] text-[25px] md:leading-[39.06px] leading-[28px] tracking-[-2%] bg-gradient-to-r from-blue-500  to-pink-700 text-transparent bg-clip-text py-3 ">✨Let's connect, collaborate, and create something extraordinary!✨</h2>
            <div className="flex flex-row gap-5 md:mt-5 mt-2 mb-2 md:mb-5">
                {persons.map((person) => (
                    <PersonButton onClick={() => handleSelect(person)} key={person.id}>
                        {person.name}
                    </PersonButton>
                ))}
            </div>
            <ContactForm activePerson={activePerson} />
        </div>
    )
}

export default Contact
