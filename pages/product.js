import Link from "next/link";
import React from "react";
import Styles from '../styles/products.module.css'

export const getStaticProps = async () => {
  //..api call
  const response = await fetch("https://fakestoreapi.com/products?sort=desc");
  const data = await response.json();
  return {
    props: { productData: data },
  };
};

const Products = (props) => {
  console.log(props, "propssssss");
  const { productData } = props;
  return (
    <>
      <center>
        <h2>BIGGEST DEALS ON TOP BRANDS</h2>
      </center>
      <div className="container">
        <div className="row">
          {productData.map((item) => (
            <div className="col-md-3">
              <div className="mb-4 p-3 ">
                <Link href={`/products/${item.id}`}>
                <img
                  src={item.image}
                  alt=".."
                  className={Styles.img_responsive}
                />
                </Link>
                <h4 className="fs-6">{item.title}</h4>
                <p className={Styles.elipsis}>{item.description}</p>
                <h6>Rs. {item.price}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Products;
