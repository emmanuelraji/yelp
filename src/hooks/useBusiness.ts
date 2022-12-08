import { ChangeEvent, useState } from "react";
import { businessType } from "../types";

function useBusiness() {
  const [businesses, setBusinesses] = useState<businessType[]>([]);
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  function onButtonClick(e: HTMLButtonElement) {
    setSortBy(e.value);
  }

  function handleLocationChange(e: ChangeEvent<HTMLInputElement>) {
    setLocation(e.target.value);
  }
  function handleBusinessChange(e: ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value);
  }

  function onSubmit() {
    searchYelp(term, location, sortBy);
    setTerm("");
    setLocation("");
    setSortBy("best_match");
  }

  async function searchYelp(term: string, location: string, sortBy: string) {
    const API_KEY: string = "";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
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

  return {
    businesses,
    term,
    location,
    onButtonClick,
    onSubmit,
    handleBusinessChange,
    handleLocationChange,
  };
}

export default useBusiness;
