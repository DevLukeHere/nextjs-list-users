import useSWR from "swr";
import axios from "axios";

export default function useUsers(page: number, results: number) {
  const fetcher = (url: string) =>
    axios.get(url).then((response) => response.data.results);
  const { data, mutate, error, isLoading, isValidating } = useSWR(
    `https://randomuser.me/api/?page=${page}&results=${results}&seed=foobar`,
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
