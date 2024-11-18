import React from 'react'
import Banner from '../components/Banner'
import SearchBox from '../components/SearchBox'
import ContentCard from '../components/ContentCard'
import FeaturedCard from '../components/FeaturedCard'
import JourneyCard from '../components/JourneyCard'
import JourneyBanner from '../components/JourneyBanner'
import BlogContainer from '../components/BlogContainer'
import ReasonList from '../components/ReasonList'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Banner />
            <SearchBox />
            <ContentCard />
            <FeaturedCard />
            <JourneyCard section={"CardOne"} />
            <JourneyCard section={"CardTwo"} />
            <JourneyBanner />
            <JourneyCard section={"CardThree"} />
            <BlogContainer />
            <ReasonList />
            <Footer />
        </div>
    )
}

export default Home