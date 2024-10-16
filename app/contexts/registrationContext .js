import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create a context to manage state (regions, cities)
const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const { data } = await axios.get("/api/regions");
        setRegions(data);
      } catch (error) {
        console.error("Error fetching regions:", error.message);
      }
    };
    fetchRegions();
  }, []);

  const fetchCitiesByRegion = async (regionId, setFieldValue) => {
    try {
      const { data } = await axios.get(`/api/cities/${regionId}`);
      setCities(data);
      setFieldValue("regionId", regionId);
    } catch (error) {
      console.error("Error fetching cities:", error.message);
    }
  };

  return (
    <RegistrationContext.Provider
      value={{ regions, cities, fetchCitiesByRegion }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistrationContext = () => useContext(RegistrationContext);
