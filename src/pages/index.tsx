import { useState } from "react";
import PhoneInput from "react-phone-input-2";


export default function Home() {

  const [phone,setPhone] = useState('')

  const redirectToWhatsapp = () => {

    console.log({phone})
    window.open(`https://wa.me/${phone}`, '_blank');
  }
  return (
    <main
    >
      <div className="relative">
        <PhoneInput
          inputClass="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          country={'br'}
          masks={{ br: '(..) .....-....' }}
          placeholder={'(11)11111-1111'}
          value={phone}
          onChange={phoneInput => setPhone( phoneInput )}
        />
      </div>
      <button type="button" onClick={redirectToWhatsapp} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send</button>
    </main>
  )
}
