import React from "react";

const Tours = ({ tours }) => {
  const Print = ({ id, image, info, name, price }) => {
    return (
      <article>
        <img src={image} alt={name} className="single-tour img" />
        <footer>
          <div>
            <h4 className="title">{name}</h4>
            <h4 className="tour-price">${price}</h4>
            <h5 className="tour-info ">{info}</h5>
          </div>
        </footer>
      </article>
    );
  };
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Print key={tour.id} {...tour}></Print>;
        })}
      </div>
    </section>
  );
};

export default Tours;
