import { useState, useEffect } from "react";

export function useFetch(url) {
    let [data, setData] = useState(null)
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null)
    
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                let response = await fetch(url)
                let processedData = await response.json()
                setData(processedData)  //  Just set the data directly
            } catch (err) {
                setError(err.message)
            } finally {
                //even if it fails or fetches data, stop the loading state
                setLoading(false)
            }
        }
        
        fetchData();
    }, [url])  //  Re-fetch when URL changes

    return { data, loading, error }  //  Return object for clearer usage
}