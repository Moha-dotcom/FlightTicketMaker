import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import axios from 'axios';

const plans = [
    {
     
     
    },
    {
    
    },
    // More plans...
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Table() {

    const [listofInfo, setListofInfo ] = useState([]);

   const url =  "http://localhost:8081/api/listofInfo"

   const requestAPI = async () => {
 
	try {
		const res = await fetch(url,{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
       
              },
        });
        const data = await res.json();
        setListofInfo(data)
	} catch (err) {
		console.log(err);
	}
};


useEffect(() => {
    requestAPI()
}, [])



console.log(listofInfo)
const DownloadFile = (id) => {
    

}



    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-36 ">
      <div className="px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">View All Tickets Here</h1>
            
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <Link to="/"  className="block rounded-md bg-indigo-600 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Back Home</Link>
          
          </div>
        </div>
        <div className="-mx-6 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
              
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  File Name
                </th>
              </tr>
            </thead>
            <tbody>
              {listofInfo.map((plan, planIdx) => (
                <tr key={plan.id}>
                  <td className={classNames( 'relative py-4 pl-6 pr-3 text-sm')}>
                    <div className="font-medium text-gray-900">{plan.fileName}</div>
                  </td>
                 
               
               {/* Button */}
             
                  <td
                    className={classNames(
                      planIdx === 0 ? '' : 'border-t border-transparent',
                      'relative py-3.5 pl-3 pr-6 text-right text-sm font-medium'
                    )}
                  >
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                      disabled={plan.isCurrent}
                      onClick={() => {DownloadFile(plan.id)}}
                    >
                      Download<span className="sr-only">, {plan.name}</span>
                    </button>
                    {planIdx !== 0 ? <div className="absolute right-6 left-0 -top-px h-px bg-gray-200" /> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
 
      </div>
      
    )
  }
  