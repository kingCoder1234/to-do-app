import axios from "axios";

// Fetch data function
export const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const { tickets, users } = response.data;
    console.log(response.data)
    return { tickets, users };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
