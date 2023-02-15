
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { BsArrowReturnRight } from 'react-icons/bs';
import { useEffect, useState } from 'react'
import { InformationCircleIcon } from '@heroicons/react/20/solid'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import image from '../src/image1.png'
// import ClickableDiv from 'react-clickable-div'
import Error from './Error'


import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Success } from './Success';
import Page404 from './Page404';
import NavItem from './NavItem';
import Nav from './Nav';
export function Form() {

   
    const [downloaded, SetDowloaded] = useState(false);
    const [success, setSuccess] = useState(false);
    const [unSuccess, setUnSuccess] = useState(false);
    const navigate = useNavigate();
        
    setTimeout(() => {
        setSuccess(false)
        setUnSuccess(false)
    } ,2000)
    
   
    const [formFields, setFormFields] = useState({
        booking_id : "",
        customer_name : "",
        ticket_name: "",
        hotel_name: " ",
        valid_from : " ",
        valid_to: "",
        purchase_date: "",
        admission: "",
        expiry_date: null,
        agent_name : "",
       

    })

    const url = "http://localhost:8081/api/submit";




        const handleBookingSubmit = (e) => {
          
                let updateValue = {
                   [e.target.name] : e.target.value,
                }
                setFormFields(oldItems => ({
                    ...oldItems,
                    ...updateValue
                  }));
   
        }


        async function CreatePost() {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formFields)
            }
            try {
              const response = await fetch(url, requestOptions);
          
              if (!response.ok) {
              
                throw new Error(`Error! status: ${response.status}`);
              }

              if(response.status === 400){
                navigate('/error')
              }
          
              const result = await response.json();
              return result;
            } catch (error) {
                console.log(error)
                  
         
                
            }
          }
          
          const ClearFields = () => {
            formFields.admission = ""
            formFields.agent_name = ""
            formFields.booking_id = ""
            formFields.customer_name = ""
            formFields.expiry_date = ""
            formFields.hotel_name = ""
            formFields.purchase_date= ""
            formFields.ticket_name= ""
            formFields.valid_to= ""
            formFields.valid_from= ""

            
    
          }


          const CheckFields = () => {
            if(  formFields.admission === "" &&
            formFields.agent_name === "" &&
            formFields.booking_id === "" && 
            formFields.customer_name  === "" &&
            formFields.expiry_date  === ""  &&
            formFields.hotel_name  === "" &&
            formFields.purchase_date  === "" &&
            formFields.ticket_name  === "" &&
            formFields.valid_to  === "" &&
            formFields.valid_from  === ""){
                return true;
            }else{
            
                return false;
            }

          
          }
          
          
    

       const  submitForm = () => {
           if(CheckFields()){
            setSuccess(false)
            setUnSuccess(true);
           
               
              
              
           }else{
            CreatePost();
            setSuccess(true)
            ClearFields()
           }
            
       }    




  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8  ">
       
      
    

    <div className="mx-auto max-w-7xl px-4 sm:px-60 lg:px-8 pt-35 ">
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">

    <div className="mx-auto max-w-4xl px-4 sm:px-60 lg:px-8 pb-10 ">
    <div class="grid grid-cols-4 grid-rows-1 gap-4 ">
        
    <a href="#1" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-white dark:hover:bg-white">
    <img src={image} alt="" className="object-contain h-48 w-96 ..."/>
    </a>
    <a href="#1" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-white dark:hover:bg-white">
    <img src={image} alt="" className="object-contain h-48 w-96 ..."/>
    </a>
  
    <a href="#1" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-white dark:hover:bg-white">
    <img src={image}  alt="" className="object-contain h-48 w-96 ..."/>
    </a>
    <a href="#1" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-white dark:hover:bg-white">
    <img src={image}  alt="" className="object-contain h-48 w-96 ..."/>
    </a>
    </div>
    </div>
    </div>
        <div className="mx-auto max-w-3xl">
            {/* Success submit */}
       {success && <Success />}
        {/* Errror */}
        {unSuccess && <Error />}
    
      
        </div>

         <div className="mx-auto max-w-3xl">
         <form >
             <div class="grid grid-cols-3 grid-rows-4 gap-4 ">
             <div className=" col-start-3 ">
            <label htmlFor="account-number" className="block text-sm font-medium text-gray-700">
                 Booking ID
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                    type="number"
                    name="booking_id"
                    id="booking_id"
                    min={94901205}
                    max={194901205}
                    value={formFields.booking_id}
                    onChange={(e) => handleBookingSubmit(e)}
                    className="block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="000-00-0000"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                </div>
                </div>



            
              
                {/* Customer Name */}
                <div className='col-span-3'>
                <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                     <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                         Customer Name
                     </label>
                <input
                    type="text"
                    name="customer_name"
                    id="customer_name"
                    value={formFields.customer_name}
                    onChange={(e) => handleBookingSubmit(e)}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder=""
                />
                </div>
              
                </div>
                <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                     <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                        Ticket Name
                     </label>
                <input
                    type="text"
                    name="ticket_name"
                    id="ticket_name"
                    value={formFields.ticket_name}
                    onChange={(e) => handleBookingSubmit(e)}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                  
                />
                </div>
                
                  {/* Hotel name */}
                <div>
                <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                     <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                         Hotel Name
                     </label>
                <input
                    type="text"
                    name="hotel_name"
                    id="hotel_name"
                    value={formFields.hotel_name}
                    onChange={(e) => handleBookingSubmit(e)}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Jane Smith"
                />
                </div>
                </div>
                   {/* Valid Date From */}
                <div>
                <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                     <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                        Date From
                     </label>
                <input
                    type="date"
                    name="valid_from"
                    value={formFields.valid_from}
                    id="valid_from"
                    onChange={(e) => handleBookingSubmit(e)}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Jane Smith"
                />
                </div>
                </div>
                <div>
                <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                     <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                        Date To
                     </label>
                <input
                    type="date"
                    name="valid_to"
                    id="valid_to"
                    value={formFields.valid_to}
                    onChange={(e) => handleBookingSubmit(e)}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder=""
                />
                </div>
                </div>
                <div>
                <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                     <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                      Purchase Date
                     </label>
                <input
                    type="date"
                    name="purchase_date"
                    id="purchase_date"
                    value={formFields.purchase_date}
                    onChange={(e) => handleBookingSubmit(e)}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder=""
                />
                </div>
                </div>
                <div>
                <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                     <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                       Admission
                     </label>
                <input
                    type="text"
                    name="admission"
                    id="admission"
                    value={formFields.admission}
                    onChange={(e) => handleBookingSubmit(e)}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder=""
                />
                </div>
                
                </div>
                
                <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                     <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                    Expiry Date
                     </label>
                <input
                    type="date"
                    name="expiry_date"
                    id="expiry_date"
                    value={formFields.expiry_date}
                    onChange={(e) => handleBookingSubmit(e)}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder=""
                />
                </div>
                <div className='col-span-2'>
                <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                     <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                        Agent Name
                     </label>
                <input
                    type="text"
                    name="agent_name"
                    id="agent_name"
                    value={formFields.agent_name}
                    onChange={(e) => handleBookingSubmit(e)}
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="Jane Smith"
                />
                </div>
                </div>
               

                <div className='col-span-3'>
                    <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => submitForm()}
                >
                         Submit
                </button>
                </div>
            
            
              
        
            </div>
            </form>
            <div className="rounded-md bg-blue-50 p-4 mt-9 ">
                {downloaded && 
                <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">Successfully uploaded</p>
                  </div>
                  <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                      <button
                        type="button"
                        className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                      >
                        <span className="sr-only">Dismiss</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>}

      <div className="flex ">
        <div className="flex-shrink-0">
          <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm text-blue-700">Download Your File  <BsArrowReturnRight/></p>
          <p className="mt-3 text-sm md:mt-0 md:ml-6">
            <Link className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"   to="http://localhost:8081/api/download"  >Download Here </Link>
          </p>
        </div>
      </div>
         
         </div>
        
    </div>
</div>
     

    </div>
  
    


  )
}
