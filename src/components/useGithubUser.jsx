import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const useGithubUser = (username) => {
  const shouldFetch = username !== null;
  const { data, error, mutate } = useSWR(shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher);

  const refetch = () => {
    if (shouldFetch) {
      mutate();
    }
  };

  return {
    userData: data,
    loading: shouldFetch && !error && !data,
    error,
    refetch
  };
};

export default useGithubUser;
