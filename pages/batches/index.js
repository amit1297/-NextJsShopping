import React from 'react'
import Link from 'next/link';


export const getStaticProps = async () => {
    //api call
    const response = await fetch(process.env.API_URL);
    // console.log(response);
    const data = await response.json(); //to convert stringified json to parsed json
    // console.log(data);
    return {
        props: {productData: data}
    }
}


//products
const Batches = (props) => {
    console.log('props', props);
    const {productData} = props;
    return (
        <div>
                <h2 className='text_nextjs'>This is courses file.</h2>
                {productData.map(item => (
                    <div><Link href={`/batches/${item.id}`}>{item.title}</Link></div>
                ))}
            </div>
    )
}

export default Batches