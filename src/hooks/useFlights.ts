import { useEffect, useState } from "react";
import { APIResponse, Flight } from "types";

export default function useFlightData(url: string = "./flights.json") {
  const [data, setData] = useState<Flight[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result: APIResponse = await response.json();
        if (isMounted) {
          setData(result.flights);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(true);
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, isLoading, isError };
}
