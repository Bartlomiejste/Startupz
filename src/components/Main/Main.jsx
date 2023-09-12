import React from 'react'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header';
import Layout from '../layout/Layout';
import AboutUs from '../AboutUs/AboutUs';
import SolvingProblems from '../SolvingProblems/SolvingProblems';
import { Values } from '../Values/Values';

const Main = () => {
  return (
  <Layout>
    <Navigation/>
    <Header/>
    <AboutUs/>
    <SolvingProblems/>
    <Values/>
  </Layout>
  )
}

export default Main;