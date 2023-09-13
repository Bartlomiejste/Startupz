import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import Header from '../../components/Header/Header';
import Layout from '../../components/layout/Layout';
import AboutUs from '../../components/AboutUs/AboutUs';
import SolvingProblems from '../../components/SolvingProblems/SolvingProblems';
import { Values } from '../../components/Values/Values';
import OurWorks from '../../components/OurWorks/OurWorks';
import Hiring from '../../components/Hiring/Hiring';


const Main = () => {
  return (
  <Layout>
    <Navigation/>
    <Header/>
    <AboutUs/>
    <SolvingProblems/>
    <Values/>
    <OurWorks/>
    <Hiring/>
  </Layout>
  )
}

export default Main;