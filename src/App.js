import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./loading";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setloading] = useState(true);
  const [tours, settours] = useState([]);

  const fetchTours = async () => {
    setloading(true);
    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours);
    setloading(false);
    settours(tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <h2 className="loading">
          <Loading />
        </h2>
      </main>
    );
  }
  return (
    <main>
      <Tours />
    </main>
    // <div className="underline"></div>
  );
}

export default App;
