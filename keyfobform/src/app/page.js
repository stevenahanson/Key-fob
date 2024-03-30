"use client";
import { useState } from 'react';

export default function Home() {
  const [highlightClick, setHighlight] = useState(false);
  const [selectValue, setSelectValue] = useState('-Select-');

  function handleSelectChange(e) {
    setSelectValue(e.target.value);
  }

  return (
    <main>
    <div className="w-full">
      <header className="bg-blue-100">
        <h1 className="mr-auto ml-auto w-64 text-center h-full text-2xl text-blue-900 font-semibold p-4">Apply for a key fob</h1>
      </header>
      <section className="bg-blue-50 p-4">
        <p>Please complete the form below.</p>
        <form action="#">
          <h2 className="font-bold text-gray-700">About you</h2>
            <p>Title
              <select value={selectValue} className={`border-gray-500 p-2 block border-2 w-full rounded-sm bg-gray-200 ${highlightClick && 'border-2 border-yellow-500'}`} onClick={() => setHighlight(true)} onBlur={() => setHighlight(false)} onChange={handleSelectChange} >
                <option disabled>-Select-</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Dr">Dr</option>
                <option value="Mx">Mx</option>
              </select>
            </p>
            <p>First name
              <input className="p-2 block w-full rounded-sm bg-gray-200" type="text" maxLength={30}/>
            </p>
            <p>Last name
              <input className="p-2 block w-full rounded-sm bg-gray-200" type="text" maxLength={30}/>
            </p>
            <h2 className="font-bold text-gray-700">Address 1</h2>
            <h3 className="text-blue-900 font-bold text-xl">Address</h3>
            <p>Address
              <input className="p-2 block w-full rounded-sm bg-gray-200" type="text" maxLength={30}/>
            </p>
            <p>Address 2 
              <input className="p-2 block w-full rounded-sm bg-gray-200" type="text" maxLength={30}/>
            </p>
            <p>Postcode
              <input className="p-2 block w-full rounded-sm bg-gray-200" type="text" maxLength={8}/>
            </p>
        </form>
      </section>
    </div>
  </main>
  );
}
