import React ,{useState,useEffect} from 'react'
import ProviderCard from '../providerCard/ProviderCard'
import axios from 'axios';
import "./providers.css"

const Providers = () => {
    
    const[pagenum,setPageNum] = useState(1);
    const [totalpages , setTotalPages] = useState(1);
    const [providers, setProviders] = useState([]);

    const getproviders = () => {
        const url = "https://forall.sa/services/api/ads/companies?page="
            axios.get(`${url}${pagenum}`).then((res) =>{
            setTotalPages(res.data.pagination.meta.pages)
            setProviders(res.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    console.log(totalpages);





    const incrementPage = () => {
        if(pagenum < totalpages)
        setPageNum(pagenum+1)
    }

    const decrementPage = () => {
        if(pagenum >1){
            setPageNum(pagenum-1)
        }
    }

    useEffect(()=>{
        getproviders()
    },[])

    useEffect(()=>{
        getproviders()
    },[pagenum])

    




  return (
    <div className='providers'>
        <div className='container'>
            <div className='providers-section'>
                <div className='left-arrow' onClick={decrementPage}>
                    <img src='/images/arrow-left-before.png'/>
                    <img src='/images/arrow-left.png'/>
                </div>
                <div className='providers-cads'>
                    {
                       providers.map((provd)=> <ProviderCard provd={provd} /> )
                    }
                </div>
                <div className='left-arrow' onClick={incrementPage}>
                     <img src='/images/arrow-right.png'/>
                     <img src='/images/arrow-right-after.png'/>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Providers