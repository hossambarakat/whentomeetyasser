import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TimePicker from './TimePicker'
import dayjs from 'dayjs';
import { useState } from 'react';


export default function Home() {
  const [consideration, setConsideration] = useState()
  const [yasserTime, setYasserTime] = useState('');
  const [selectedTime, setSelectedTime] = useState(dayjs().hour(1).minute(0));
  const [outcomeMessage, setOutcomeMessage] = useState('');

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  }
  const handlerConsiderationChange = (event) => {
    setConsideration(event.target.value);
  }
  const handleCalculate = () => {
    const yasserExpectedTime = selectedTime.subtract(2, 'hour');
    if(consideration == "beach") {
      setOutcomeMessage('mmm no BBQ and sand hassle 🏖 and tell Yasser: ')
      setYasserTime(yasserExpectedTime.subtract(30, 'minute').format('hh:mm A'));
    }
    else if (consideration == "bbq") {
      setOutcomeMessage('Malek elmashawy is always ready 🍗 💪, just give him the people count and tell Yasser: ')
      setYasserTime(yasserExpectedTime.add(30, 'minute').format('hh:mm A'));
    }
    else if (consideration == "picnic") {
      setOutcomeMessage('bring your ping pong racket 🏓 and tell Yasser: ')
      setYasserTime(yasserExpectedTime.format('hh:mm A'));
    }
    else {
      setOutcomeMessage('Probably you should tell Yasser: ')
      setYasserTime(yasserExpectedTime.format('hh:mm A'));
    }
    
    
  }
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">When to meet </span>
            <span className="block text-indigo-600 xl:inline">Yasser?</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Are you a friend of Yasser? Need reliable time to meet Yasser? wait no more... here is your solution
          </p>
        </div>


        <div className="shadow sm:rounded-md sm:overflow-hidden py-3 my-6">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  When do you want to see Yasser?
                </label>
                <div className="mt-1 flex">
                  <TimePicker onChange={handleTimeChange} />
                </div>
              </div>
            </div>
            <fieldset>
              <legend className="text-base font-medium text-gray-900">Considerations</legend>
              <div className="mt-4 space-y-4" >
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="considerations" name="considerations" 
                    type="radio" 
                    value="bbq"
                    checked={consideration === "bbq"}
                    onChange={handlerConsiderationChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="comments" className="font-medium text-gray-700">BBQ</label>
                    <p className="text-gray-500">Planning a BBQ with King elmashawy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input name="considerations" 
                    type="radio" 
                    value="beach"
                    checked={consideration === "beach"}
                    onChange={handlerConsiderationChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="candidates" className="font-medium text-gray-700">Beach</label>
                    <p className="text-gray-500">Going to the beach with Yasser.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="park" 
                    name="considerations" type="radio" 
                    value="park"
                    checked={consideration === "park"}
                    onChange={handlerConsiderationChange}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="offers" className="font-medium text-gray-700">Park</label>
                    <p className="text-gray-500">Planning a picnic (snacks & drinks) with Yasser.</p>
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="px-4 py-3 text-center sm:px-6">
              <button type="submit"
               className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               onClick={handleCalculate}
               >
                Calculate
              </button>
            </div>


            {yasserTime && 
              <div>
                
                <div className="mt-1">
                  {outcomeMessage}{yasserTime}
                </div>

              </div>
            }
          </div>
        </div>

      </main>



      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by friends struggling to meet Yasser
          
        </a>
      </footer>
    </div>
  )
}
