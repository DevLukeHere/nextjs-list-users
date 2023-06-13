import useSWR from "swr";
import axios from "axios";

// interface ApiProps {
//   results: number;
// }

type results = number;

export default function useUsers(results: results) {
  // TODO: Fix TypeScript error
  // @ts-ignore
  const fetcher = (url) =>
    axios.get(url).then((response) => response.data.results);
  const { data, error, isLoading } = useSWR(
    `https://randomuser.me/api/?results=${results}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    users: data,
    isLoading,
    isError: error,
  };
}
