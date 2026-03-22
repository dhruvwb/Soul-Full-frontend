import axios from "axios";

const BASE_URL = "http://localhost:2000/api/subcategories"; // Replace with your actual API endpoint

export const getDestinations = async () => {
  try {
    const response = await axios.get(BASE_URL);
    if (response.data.ok === 1) {
      return response.data.data;
    } else {
      throw new Error(response.data.error || "Failed to fetch destinations");
    }
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return [];
  }
};

export const getSubcategoryById = async (id) => {
  const BASE_URL = `http://localhost:2000/api/subcategories/${id}`;
  try {
    const response = await axios.get(BASE_URL);
    if (response.data.ok === 1) {
      return response.data.data;
    } else {
      throw new Error(
        response.data.error || "Failed to fetch subcategory data"
      );
    }
  } catch (error) {
    console.error("Error fetching subcategory data:", error);
    return null;
  }
};
