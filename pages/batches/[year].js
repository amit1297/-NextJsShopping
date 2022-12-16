import React from 'react'

//SSG
export const getStaticPaths = async() => {
    // const arr = ['2022', '2021', '2020', '2019', '2018'];
    const response = await fetch(process.env.API_URL);
    const arr = await response.json();
    const paths = arr.map((item) => {
        return {
            params: {year: item.id.toString()}
        }
    })
    return {
        paths,
        fallback: false // if page fails - go for 404.js
    }
}

export const getStaticProps = async (context) => {
    console.log(context.params);
    const temp = context.params.year;
    const response = await fetch(process.env.API_URL+temp);
    const data = await response.json();
    return {
        props: {
            res: data,
            notFound: true // if page fails - go for 404.js
        }
    }
}

const Year = ({res}) => {
    console.log('res' - res);
  return (
    <div>
        <h2>Batch Page - {res.title}</h2>
        <div>{res.price}</div>
        <div>{res.category}</div>
        <div><img src={res.image}/></div>
    </div>
  )
}

export default Year;