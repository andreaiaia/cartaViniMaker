import { useQuery } from 'react-query';

const fetcher = (url) => () => fetch(url).then(r => r.json());

function useFetch(url) {
    const { data, loading, error } = useQuery(url, fetcher(url));

    return [data, loading, error];
}

export default useFetch;