import React from 'react'
import { useState, useEffect } from 'react';

export default function useFetchApi(url) {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data);
            setError(null);
        }).catch(error => {
            setError(error);
            setData(null);
        }).finally(()=>{
            setLoading(false);
        });
    }, [url]);
  return (
    {
        data,
        error,
        loading,
    }
  )
}
