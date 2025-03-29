import React from "react";
import ClientsAreaChart from "../ClientsAreaChart";
import ClientRating from "../ClientRating";
import ClientRetention from "../ClientRetention";

const Clients = () => {
  return (
    <div>
      <div className="bg-soft-secondary m-8 rounded-xl font-roboto drop-shadow-lg">
        <ClientRetention />
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-[55%_45%] gap-2">
        <div className="">
          <ClientsAreaChart />
        </div>
        <div className="">
          <ClientRating />
        </div>
      </div>
    </div>
  );
};

export default Clients;
