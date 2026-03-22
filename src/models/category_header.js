import axios from "axios";

const BASE_URL = "http://localhost:2000/api/categories";

export const getCategories = async () => {
  try {
    const response = await axios.get(BASE_URL);
    if (response.data.ok === 1) {
      console.log("Fetched Pack Data:");
      return response.data.data;
    } else {
      throw new Error(response.data.error || "Failed to fetch categories");
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
