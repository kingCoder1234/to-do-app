// Save a value to localStorage
export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

// Get a value from localStorage
export const getFromLocalStorage = (key, defaultValue) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : defaultValue;
  } catch (error) {
    console.error("Error retrieving from localStorage:", error);
    return defaultValue;
  }
};
