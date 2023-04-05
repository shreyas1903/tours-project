import React from "react";
import Tour from "./tour";

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((holiday) => {
          return <Tour key={holiday.id} {...holiday} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
