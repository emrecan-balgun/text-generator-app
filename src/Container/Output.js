import React from 'react'
import Header from './Header'
import Form from './Form'
import { useSelector } from 'react-redux'
import { value } from '../redux/paragraphSlice'

function Container() {
    const count = useSelector(value);
    return (
        <>
            <Header/>
            <Form/>
            <div className="container">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis libero, tenetur, recusandae ipsum assumenda, sunt rerum adipisci et facere hic soluta iure earum id ullam nam debitis consequuntur. Porro optio eveniet provident sequi quasi eos voluptatibus, vero hic ducimus possimus, ut, ex quas perferendis officiis mollitia nulla dignissimos dolore voluptatem.
            </div>
        </>
    )
}

export default Container
