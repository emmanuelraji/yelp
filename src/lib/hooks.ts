import { useEffect, useRef, useState } from "react";
import { BusinessType } from "./types";

const API_KEY = import.meta.env.VITE_YELP_API_KEY;

const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function useBusiness(term: string, location: string, sortBy: string) {
  const [businesses, setBusinesses] = useState<BusinessType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      if (location && term) {
        searchYelp();
      }
    }
  }, [sortBy]);

  async function searchYelp() {
    setBusinesses([]);
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        `${BASE_URL}?location=${location}&term=${term}&sort_by=${sortBy}&limit=20`,
        options
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      setIsLoading(false);
      setBusinesses(data.businesses);
      setError("");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError("Could not fetch the data");
    }
  }

  return { businesses, isLoading, error, searchYelp };
}

export default useBusiness;
