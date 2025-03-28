import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Contacts = () => {

const [contacts, setContacts] = useState([])

useEffect(()=> {
    axios.get('http://localhost:4000/getContacts')
    .then(contacts => setContacts(contacts.data))
    console.log(contacts)
    .catch(err => console.log(err))
}, [])

  return (
      <div>
        <div className='bg-soft-secondary m-8 rounded-xl'>
        <div className='sm:bock  md:flex flex-row justify-evenly'>
          <div className='border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-sm p-2 text-light-secondary rounded-sm my-8'>Client type: All <i className="fa-solid fa-angle-down text-xs px-4"></i></div>
          <div className='border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-sm p-2 text-light-secondary rounded-sm my-8'>Region: All <i className="fa-solid fa-angle-down text-xs px-4"></i></div>
          <div className='border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-sm p-2 text-light-secondary rounded-sm my-8'>Company name: All <i className="fa-solid fa-angle-down text-xs px-4"></i></div>
          <div className='border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-md p-2 text-dark-primary rounded-sm my-8'><i className="bi bi-filter"></i></div>
          <div className='my-8 p-2 text-sm text-light-secondary text-bold'>2 items selected</div>
          <div className='border-0.5 drop-shadow-md bg-dark-primary text-sm p-2 text-soft-secondary rounded-md my-8'>+ ADD CLIENT</div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  Client Name
                </th>
                <th>
                  Company Name
                </th>
                <th>
                  Region/Address
                </th>
                <th>
                  E-mail
                </th>
                <th>
                  Phone Number
                </th>
                </tr>
            </thead>
            <tbody>
              {
                contacts.map(eachContact => {
                  <tr>
                    <td>{eachContact.clientName}</td>
                    <td>{eachContact.companyName}</td>
                    <td>{eachContact.address}</td>
                    <td>{eachContact.email}</td>
                    <td>{eachContact.phoneNumber}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
        </div>
      </div>
   
  )
}

export default Contacts