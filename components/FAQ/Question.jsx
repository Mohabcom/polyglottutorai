import React, { useState } from 'react'
import { HiPlus, HiOutlineX } from 'react-icons/hi';

export default function Question({ question, answer }) {
    const [open, setOpen] = useState(false)
  return (
      <div
          onClick={() => setOpen((open) => !open)}
          className="select-none p-4 md:p-8 bg-secondary rounded-lg"
      >
          <div className="flex justify-between items-center">
              <h2 className={`text-md md:text-xl lg:text-2xl font-bold`}>
                  {question}
              </h2>
              {!open && <HiPlus className="w-8 h-8 text-primary" />}
              {open && <HiOutlineX className="w-8 h-8 text-primary" />}
          </div>
          {open && (
              <p className="mt-8 text-sm md:text-lg xl:text-xl">{answer}</p>
          )}
      </div>
  );
}
