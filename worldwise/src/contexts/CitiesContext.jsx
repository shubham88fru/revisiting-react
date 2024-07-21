import { useState, useEffect, useContext } from "react";
import { createContext } from "react";

const BASE_URL = `http://localhost:9000`;

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert("There was an error loading data...");
      } finally {
        setLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      alert("There was an error loading data...");
    } finally {
      setLoading(false);
    }
  }

  async function createCity(city) {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(city),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch (err) {
      alert("There was an error creating city..");
    } finally {
      setLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (err) {
      alert("There was an error deleting city..");
    } finally {
      setLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        currentCity,
        getCity,
        createCity,
        deleteCity,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context == undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider.");
  return context;
}

export { CitiesProvider, useCities };
