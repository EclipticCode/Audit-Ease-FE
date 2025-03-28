import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from './constants'
import ArticlesPieChart from '../ArticlesPieChart'


const Articles = () => {

const [contacts, setContacts] = useState([])
const [articles , setArticles] = useState([])

useEffect(() => {
  const fetchArticles = async () => {
    try {
      const response = await axios.get(`${apiUrl}/getArticles`);
      setArticles(response.data);
    } catch (error) {
      console.error("Error while fetching the data", error);
    }
  };
  fetchArticles();
}, []);  

useEffect(() => {
  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/getContacts`);
      // console.log("response from DB:", response.data);
      setContacts(response.data); 
    } catch (error) {
      console.error("Error while fetching the data", error);
    }
  };
  fetchContacts();
}, []); 


  return (
  
    <div>
    <div className='bg-soft-secondary m-8 rounded-xl text-sm drop-shadow-lg'>
    <div className='sm:bock  md:flex flex-row justify-evenly'>
          <div className='border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-sm p-2 text-light-secondary rounded-sm my-8'>Client type: All <i className="fa-solid fa-angle-down text-xs px-4"></i></div>
          <div className='border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-sm p-2 text-light-secondary rounded-sm my-8'>Region: All <i className="fa-solid fa-angle-down text-xs px-4"></i></div>
          <div className='border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-sm p-2 text-light-secondary rounded-sm my-8'>Company name: All <i className="fa-solid fa-angle-down text-xs px-4"></i></div>
          <div className='border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-md p-2 text-dark-primary rounded-sm my-8'><i className="bi bi-filter"></i></div>
          <div className='my-8 p-2 text-sm text-light-secondary text-bold'>2 items selected</div>
          <div className='border-0.5 drop-shadow-md bg-dark-primary text-sm p-2 text-soft-secondary rounded-md my-8'>+ ADD CLIENT</div>
        </div>
        <div className='w-full mt-10 mb-16 pb-8 text-sm'>
          <table className='table-fixed'>
            <thead>
              <tr className='bg-soft-primary text-dark-secondary'>
              <th  className='px-8'>
                  No.
                </th>
                <th  className='px-8 py-4'>
                  Name
                </th>
                <th  className='px-8'>
                  Task Assigned
                </th>
                <th  className='px-8'>
                  Deadline
                </th>
                <th  className='px-36'>
                  Past Tasks
                </th>
                </tr>
            </thead>
            <tbody className='pt-10 text-semibold'>
              {
                articles.map(eachArticle => (
                  <tr key={eachArticle._id} className='border-b-3 border-bg-primary'>
                    <td  className='px-8 py-4'>{eachArticle.sNo}</td>
                    <td  className='px-8 py-4'>{eachArticle.name}</td>
                    <td  className='px-8 py-4'>{eachArticle.tasksAssigned}</td>
                    <td  className='px-8 py-4'>{eachArticle.deadline}</td>
                    <td  className='px-8 py-4'>{eachArticle.pastTask}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    </div>
    <div className='flex flex-row justify-evenly drop-shadow-lg'>
      <div className='bg-soft-secondary m-8 rounded-xl p-4 '>
        <div className='flex flex-row space-x-12'>
          <div className='font-semibold text-sm text-dark-primary w-full'>Available Articles</div>
          <div>
            <div className='text-sm text-light-secondary space-x-3'>
              <span>Date </span>
              <span className='border-1 border-light-secondary px-16 text-light-secondary rounded-sm'></span></div>
          </div>
        </div>
        <div className='w-full mt-4 mb-16 text-sm'>
          <table className='table-fixed'>
            <thead>
              <tr className='bg-soft-primary text-dark-secondary'>
              <th  className='px-8'>
                  No.
                </th>
                <th  className='px-8 py-4'>
                
                </th>
                <th  className='px-8 py-4'>
                  Name
                </th>
                <th  className='px-8 py-4 flex justify-start'>
                  E-mail
                </th>
                </tr>
            </thead>
            <tbody className='pt-10 text-semibold w-full'>
            {
                contacts.map(eachContact => (
                  <tr key={eachContact._id} className='border-b-3 border-bg-primary'>
                    <td  className='px-8 py-4'>{eachContact.sNo}</td>
                    <td  className='px-8 py-4'></td>
                    <td  className='px-8 py-4'>{eachContact.clientName}</td>
                    <td  className='px-8 py-4 flex justify-start'>{eachContact.email}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className='bg-soft-secondary m-8 rounded-xl drop-shadow-lg'><ArticlesPieChart/></div>
    </div>
       </div>
   
 
  )
}

export default Articles