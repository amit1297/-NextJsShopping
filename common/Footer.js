import React from "react";
import styles from "../styles/Footer.module.css";

const Footer=() =>{
   
    return(
      <>
        <h4 class={`${styles.footer} text-center text-dark p-3`}>
        © 2023 Copyright:
          <a class="text-dark" href="https://myntra.com/">Mynta.com</a>
            
        </h4>

      </>
    )

}
export default Footer