import React from "react";
import MainSlider from "./MainSlider";
import NextMatch from "./NextMatch";
import LatestNews from "./LatestNews";
import FixturesAndResults from "./FixturesAndResults";
import OurGallery from "./OurGallery";
import LeagueTableAndSchedule from "./LeagueTableAndSchedule";
import Subscribe from "./Subscribe";
import Players from "./Players";
import OurSponsors from "./OurSponsors";
import TopScorersAndFeaturedVideo from "./TopScorersAndFeaturedVideo";
import OurShop from "./OurShop";

const Home = () => {
  return (
    <div id="home">
      <MainSlider />
      <NextMatch />
      <LatestNews />
      <FixturesAndResults />
      <OurGallery />
      <LeagueTableAndSchedule />
      <Subscribe />
      <Players />
      <OurSponsors />
      <TopScorersAndFeaturedVideo />
      <OurShop />
    </div>
  );
};

export default Home;
