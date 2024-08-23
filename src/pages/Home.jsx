import React from 'react'
import Main from './homeComponents/Main'
// import BrowseByCategory from './homeComponents/browseByCategory/BrowseByCategory'
import Banner from './homeComponents/Banner'
import HomeProducts from './homeComponents/HomeProducts'
import BrowseByCategory from './homeComponents/Categories/BrowseByCategory'

const Home = () => {
  return (
    <div>
      <Main/>
      <BrowseByCategory/>
      <HomeProducts/>
      <Banner/>
    </div>
  )
}

export default Home
