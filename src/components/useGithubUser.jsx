import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const useGithubUser = (username) => {
  const shouldFetch = username !== null;
  const { data, error } = useSWR(shouldFetch ? `https://api.github.com/users/${username}` : null, fetcher);

  return {
    userData: data,
    loading: shouldFetch && !error && !data,
    error
  };
};

export default useGithubUser;
