import { useEffect, useState } from "react";
import { Entry } from "../models/types";
import axios from "axios";

export const useFetchEntries = (filter: 'all' | 'longTitle' | 'shortTitle') => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [entries, setEntries] = useState<Entry[]>([]);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      setError("");
      let endpoint = "/api/entries";

      if (filter === "longTitle") {
        endpoint = "/api/entries/moreThanFiveWords";
      } else if (filter === "shortTitle") {
        endpoint = "/api/entries/lessThanFiveWords";
      }

      const response = await axios.get<Entry[]>(endpoint);
      setEntries(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching entries");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, [filter]);

  return { loading, error, entries};
};
