import { useEffect, useState } from "react";

const maskPhone = (value: string) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
}

const cleanMask = (value:string) => value.replace(/\D/g, "")

const green = 'from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80'
const red = 'from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80'

export default function Home() {

  const [phone, setPhone] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (phone.length < 15 && phone.length > 0) {
       setError(true)
    } else {
      setError(false)
    }
  }, [phone])


  const cleanError = () => {
    if (phone.length === 0) {
      setError(false)
    }
  }

  const redirectToWhatsapp = () => {
    if (phone.length === 0) {
      setError(true)
    }
    if (!error){
      window.open(`https://wa.me/55${cleanMask(phone)}`, '_blank');
    }
  }
  return (
    <main className="container m-auto h-40">
      <div className="h-full flex flex-col justify-evenly">
        <p>Whatsapp Number</p>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          type="tel"
          maxLength={15}
          value={phone}
          placeholder="(11) 11111-1111"
          onChange={e => setPhone(maskPhone(e.target.value))}
          onFocus={cleanError}
        />
        {error && <small className="text-red-500">
          Invalid Number
        </small>}
        <button type="button" onClick={redirectToWhatsapp} disabled={error} className={` ${error ? red : green} text-white bg-gradient-to-r font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>Send</button>
      </div>
    </main>
  )
}
