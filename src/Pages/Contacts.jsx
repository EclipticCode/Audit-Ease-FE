import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "./constants";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

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
      <div className="bg-soft-secondary m-8 rounded-xl drop-shadow-lg font-roboto">
        <div className="sm:bock sm:mx-2 lg:flex flex-row justify-evenly">
          <div className="border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-sm p-2 text-light-secondary rounded-sm my-8">
            Client type: All
            <i className="fa-solid fa-angle-down text-xs px-4"></i>
          </div>
          <div className="border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-sm p-2 text-light-secondary rounded-sm my-8">
            Region: All <i className="fa-solid fa-angle-down text-xs px-4"></i>
          </div>
          <div className="border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-sm p-2 text-light-secondary rounded-sm my-8">
            Company name: All
            <i className="fa-solid fa-angle-down text-xs px-4"></i>
          </div>
          <div className="border-0.5 drop-shadow-md border-light-secondary bg-soft-secondary text-md p-2 text-dark-primary rounded-sm my-8">
            <i className="bi bi-filter"></i>
          </div>
          <div className="my-8 p-2 text-sm text-light-secondary text-bold">
            2 items selected
          </div>
          <div className="border-0.5 drop-shadow-md bg-dark-primary text-sm p-2 text-soft-secondary rounded-md my-8">
            + ADD CLIENT
          </div>
        </div>
        <div className="w-full mt-6 mb-16 pb-8 text-sm overflow-x-auto font-roboto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-soft-primary text-dark-secondary">
                <th className="px-4 py-3 text-left w-1/12">No.</th>
                <th className="px-4 py-3 text-left w-1/6">Client Name</th>
                <th className="px-4 py-3 text-left w-1/6">Company Name</th>
                <th className="px-4 py-3 text-left w-1/6">Region/Address</th>
                <th className="px-4 py-3 text-left w-1/6">E-mail</th>
                <th className="px-4 py-3 text-left w-1/6">Phone Number</th>
              </tr>
            </thead>
            <tbody className="text-semibold">
              {contacts.map((eachContact) => (
                <tr key={eachContact._id} className="border-b border-gray-300">
                  <td className="px-4 py-3">{eachContact.sNo}</td>
                  <td className="px-4 py-3">{eachContact.clientName}</td>
                  <td className="px-4 py-3">{eachContact.companyName}</td>
                  <td className="px-4 py-3">{eachContact.address}</td>
                  <td className="px-4 py-3">{eachContact.email}</td>
                  <td className="px-4 py-3">{eachContact.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
