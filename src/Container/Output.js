import Header from './Header'
import Form from './Form'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { includeHTML, value } from '../redux/paragraphSlice'

function Container() {
    const count = useSelector(value);
    const include = useSelector(includeHTML);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let format;

    function changeData(count) {
        const fetchData = async () => {
            if(include === 'no') 
                format = 'text';
            else 
                format = 'html';
                
            const response = await axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${count}&format=${format}`)
            setData(response.data);
            setIsLoading(false)
        }
        fetchData();
    }

    useEffect(() => {
        changeData(count);
    }, [count, include])
    
    return (
        <>
            <Header/>
            <Form/>
            <div className="container">
            {isLoading && <span>Loading..</span>}
            {data}
            </div>
        </>
    )
}

export default Container
