import React from 'react'
import Image from 'next/image'
import styles from "../styles/Navigation.module.css";
import Link from 'next/link'

const Navigation = () => {
  return (
    <div>
      <nav className={`${styles.navbackgroud} navbar navbar-expand-lg navbar-light`}>
    <div className="container-fluid">
        <a href="#" className="navbar-brand">
        <Image src="/altudologo.png" className={`${styles.logo} img-thumbnail`} alt="Logo" width={150} height={70}></Image>

        </a>
        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
                <Link href="/about" className="nav-item nav-link active">About</Link>
                <Link href="/contact" className="nav-item nav-link active">Contact</Link>
                <Link href="/product" className="nav-item nav-link active">Product</Link>
            </div>
            <div className="navbar-nav ms-auto">
                <Link href="/login" className="nav-item nav-link">Login</Link>
                <Link href="/signup" className="nav-item nav-link">Sign Up</Link>

            </div>
        </div>
    </div>
</nav>
    </div>
  )
}

export default Navigation
