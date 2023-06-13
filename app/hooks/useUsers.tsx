import useSWR from "swr";
import axios from "axios";

type results = number;
type page = number;
type url = string;

export default function useUsers(page: page, results: results) {
  const fetcher = (url: url) =>
    axios.get(url).then((response) => response.data.results);
  const { data, mutate, error, isLoading, isValidating } = useSWR(
    `https://randomuser.me/api/?page=${page}&results=${results}&seed=abc`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    users: data,
    mutate,
    isLoading,
    isValidating,
    isError: error,
  };
}
