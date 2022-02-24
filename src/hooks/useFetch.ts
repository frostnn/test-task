import React from 'react';

export interface iDataBlog {
  title: string;
  url: string;
  date: string;
  img: string;
}

export interface iDataFeedback {
  name: string;
  instagram_username: string;
  text: string;
}
type Date = iDataBlog | iDataFeedback;
interface iFetch {
  response: iDataFeedback[];
  error?: boolean;
  isLoading: boolean;
}
export const useFetch = (url: string): iFetch => {
  const [response, setResponse] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async function () {
      setIsLoading(true);
      try {
        const data = await fetch(url);
        const resp = await data.json();
        setIsLoading(false);
        setResponse(resp);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { response, error, isLoading };
};
