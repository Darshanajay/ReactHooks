import { useEffect ,  useState } from "react";

const useCurrencyInfo = (currency) => { 
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
        .then((res) =>{
            return res.json()
        })
        .then((res) => setData(res[currency]))
    } , [currency])
    return data
 }

 export default useCurrencyInfo;