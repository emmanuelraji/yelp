import { useState } from "react";
import { businessType } from "../types";

function useBusiness() {
  const [businesses, setBusinesses] = useState<businessType[]>([]);

  async function searchYelp(term: string, location: string, sortBy: string) {
    const API_KEY: string = import.meta.env.VITE_YELP_API_KEY;
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}&sort_by=${sortBy}&limit=20`,
      options
    );
    const data = await response.json();
    console.log(data);
    setBusinesses(data.businesses);
  }

  return { businesses, searchYelp };
}

export default useBusiness;
