import { useState, useEffect } from 'react';
//custom hooks need to start with the name use in react
const useFetch = (url) =>{

        // get blogs from server
        const [data, setData] = useState(null);

        // const [name, setName] = useState('mario');
    
        // show message while waiting for data to load.
        const [isPending, setIsPending] = useState(true);
    
        // error message
        const [error, setError] = useState(null);

    useEffect(()=> {
        const abortCont = new AbortController();

        setTimeout(() =>{
            fetch(url, { signal: abortCont.signal })


                .then(res => {
                    console.log(res);
                    if (!res.ok){
                        throw Error('could not fetch the data for that resource');
                    }


                    return res.json();
                })
                .then((data) =>{
                   // console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError'){
                      console.log('fetch aborted')  
                    } else{
                        setIsPending(false);
                        setError(err.message);
                    }

                })
        }, 1000);

        return () => abortCont.abort();

    }, [url]);

    return { data, isPending, error }
}

export default useFetch;