import React, { useState, useEffect } from "react";
import "./CSS/SCSS/styles.scss";
import Logo from "./Images/logo.svg";
import Data from "./data.json";

import Column from "./components/Column/Column";

const App = () => {
  const [weeklySpending, setWeeklySpending] = useState();

  // Take each column and add up the amount to get the weekly spending amount
  const getWeeklySpending = () => {
    let total = 0;
    Data.forEach((column) => {
      total += column.amount;
    }
    );
    setWeeklySpending(Math.round(total * 100) / 100);
  }

  // Get the weekly spending amount on page load
  useEffect(() => {
    getWeeklySpending();
  }
  , []);


  return (
    <div className="container-centered">
      <div className="balance">
        <span>
          <h2>My balance</h2>
          <p>$921.48</p>
        </span>
        <span>
          <img src={Logo} alt="logo" />
        </span>
      </div>
      <div className="spending">
        <h2>Spending - Last 7 days</h2>
        <span className="spending__chart">
          {Data.map((column, index) => {
            return <Column key={index} column={column} />;
          })}
        </span>
        <span className="spending__border"></span>

        <span className="total">
          <span>
            <h2>Total this month</h2>
            <h3>${weeklySpending}</h3>
          </span>

          <span>
            <p>+2.4%</p>
            <p>from last month</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default App;
