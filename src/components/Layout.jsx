import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
import FetchItems from './FetchItems'
import { useSelector } from 'react-redux'
import LoadingSpinner from './LoadingSpinner'

const Layout = () => {

  const fetchStatus = useSelector((store) => store.fetchStatus)
  return (
    <>

        <Header />
        <FetchItems />

        {fetchStatus.currentlyFetching ? <LoadingSpinner/> :<Outlet />}
        <Footer />

    </>
  )
}

export default Layout
