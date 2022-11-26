import React from 'react'

export const getStaticPaths = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const arr = await response.json();
    const paths = arr.map((item) => {
      return {
        params: { id: item.id.toString() },
      };
    });
    return {
      paths,
      fallback: false,
    };
  };

  export const getStaticProps = async (context) => {
    console.log(context.params);
    const temp = context.params.id;
    const response = await fetch("https://fakestoreapi.com/products/" + temp);
    const data = await response.json();
    return {
      props: {
        res: data,
        noFound: true,
      },
    };
  };

const ProductByID = ({res}) => {
  return (
    <div>
      <h2>Batches : {res.title}</h2>
      <h2>Batches : {res.price}</h2>
      <h2>Batches : {res.category}</h2>
      <h2>
        <img src={res.image} />
      </h2>
    </div>
  )
}

export default ProductByID
