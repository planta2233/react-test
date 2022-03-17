import { useState, useEffect } from "react"
import { getGifts } from "../helpers/getGifts"

export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifts(category)
        .then( imgs => {
            setTimeout( ()=>{
                setState({
                    data: imgs,
                    loading: false
                })
            }, 2000);
        });
    }, [category]);

    return state;
}