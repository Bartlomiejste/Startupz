import React from 'react'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header';
import Layout from '../layout/Layout';
import AboutUs from '../AboutUs/AboutUs';

const Main = () => {
  return (
  <Layout>
    <Navigation/>
    <Header/>
    <AboutUs/>
  </Layout>
  )
}

export default Main;