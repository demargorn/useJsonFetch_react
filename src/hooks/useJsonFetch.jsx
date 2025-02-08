import { useState, useEffect } from 'react';

const useJsonFetch = (url, options = {}) => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const fetchData = async () => {
      setLoading(true);
      try {
         const response = await fetch(url, options);

         if (!response.ok) {
            setError(error);
         }

         const data = await response.json();
         setData(data);
         setLoading(false);
      } catch (error) {
         setError(error);
      }
   };

   useEffect(() => {
      fetchData();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return [data, loading, error];
};

export default useJsonFetch;
