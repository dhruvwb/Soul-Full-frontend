import axios from "axios";

const BASE_URL = "http://localhost:2000/api/packs/";

export const fetchPackData = async (subcategoryId) => {
  try {
    // Construct the dynamic URL using the subcategory ID
    const API_URL = `${BASE_URL}/subcategory/${subcategoryId}`;

    // Perform GET request
    const response = await axios.get(API_URL);

    // Check if the response is OK
    if (response.data.ok === 1) {
      // Extract the data
      const packData = response.data.data;
      console.log("Fetched Pack Data:2");
      return packData; // Return the data for further use
    } else {
      // Handle error scenario returned from API
      console.error("Error from API:", response.data.error);
      return null;
    }
  } catch (error) {
    // Handle request failure
    console.error("Error fetching data from API:", error.message);
    return null;
  }
};

export const fetchPackDataWithId = async (packId) => {
  try {
    const API_URL = `${BASE_URL}/${packId}`;
    const response = await axios.get(API_URL);

    if (response.data.ok === 1) {
      const packData = response.data.data;
      console.log("Fetched Pack Data with ID:", packData);
      return packData;
    } else {
      console.error("Error from API:", response.data.error);
      return null;
    }
  } catch (error) {
    console.error("Error fetching data from API:", error.message);
    return null;
  }
};

export const fetchItineraryData = async (packageId) => {
  try {
    const API_URL = `http://localhost:2000/api/itineraries/package/${packageId}`; // Construct the URL for fetching itinerary
    const response = await axios.get(API_URL);

    if (response.data.ok === 1) {
      const itineraryData = response.data.data;
      console.log("Fetched Itinerary Data:", itineraryData);
      return itineraryData; // Return the itinerary data for further use
    } else {
      console.error("Error from API:", response.data.error);
      return null;
    }
  } catch (error) {
    console.error("Error fetching itinerary data:", error.message);
    return null;
  }
};
