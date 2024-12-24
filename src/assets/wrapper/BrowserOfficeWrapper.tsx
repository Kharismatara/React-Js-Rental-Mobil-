import { useEffect, useState } from "react";
import OfficeCard from "../component/OfficeCard";
import { Office } from "../types/type";
import axios from "axios";
function BrowserOfficeWrapper() {
  const [offices, setOffices] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/offices", {
        headers: {
          "X-API-KEY": "sdfghjk345678",
        },
      })
      .then((response) => {
        console.log(response.data); // Log the response to check if the data exists
        setOffices(response.data.data); // Ensure 'data' is an array
        setLoading(false);
      })
      .catch((error) => {
        console.error(error); // Log the error
        setError("An error occurred while loading cities.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error loading data: {error}</p>;
  }

  // Handle empty data scenario
  if (offices.length === 0) {
    return <p>No cities available.</p>;
  }

  return (
    <>
      <section id="Fresh-Space" className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]">
        <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
          Browse Our Fresh Space.
          <br />
          For Your Better Productivity.
        </h2>
        <div className="grid grid-cols-3 gap-[30px]">
          {offices.map((office) => (
            <OfficeCard key={office.id} office={office}></OfficeCard>
          ))}
        </div>
      </section>
    </>
  );
}

export default BrowserOfficeWrapper;
