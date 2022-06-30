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
    });
    setWeeklySpending(Math.round(total * 100) / 100);
  };

  // Get the weekly spending amount on page load
  useEffect(() => {
    getWeeklySpending();
  }, []);

  return (
    <div className="container-centered" role="main">
      <div className="balance">
        <div>
          <h1>My balance</h1>
          <p>$921.48</p>
        </div>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className="spending">
        <h2>Spending - Last 7 days</h2>
        <div className="spending__chart">
          {Data.map((column, index) => {
            return <Column key={index} column={column} />;
          })}
        </div>
        <span className="spending__border"></span>

        <div className="total">
          <div>
            <h2>Total this month</h2>
            <h3>${weeklySpending}</h3>
          </div>

          <div>
            <p>+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
