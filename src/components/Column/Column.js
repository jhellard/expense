import React from "react";
import SingleColumn from '../../CSS/Styled-Components/SingleColumn';

const Column = ({ column }) => {
  const computedColumnHeight = Math.round(column.amount * 3.5);

  return (
    <div className="column-wrapper">
      <SingleColumn
        columnHeight={computedColumnHeight}
        amount={`$${column.amount}`}
      />
      <p>{column.day}</p>
    </div>
  );
};

export default Column;
