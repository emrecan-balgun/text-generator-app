import { useState, useEffect } from 'react'
import Header from './Header'
import Form from './Form'
import { useSelector } from 'react-redux'
import { value } from '../redux/paragraphSlice'
import axios from 'axios';

function Container() {
    const count = useSelector(value);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function changeData(count) {
        const fetchData = async () => {
            const response = await axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${count}&format=text`)
            setData(response.data);
            setIsLoading(false)
        }
        fetchData();
    }

    useEffect(() => {
        changeData(count);
    }, [count])
    
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
