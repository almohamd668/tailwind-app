import StayProductive from "../components/StayProductive";
import Landing from "../components/landing";
import Features from "./../components/Features";
import Testimonials from "./../components/Testimonials";
import GetStarted from "./../components/GetStarted";

function Home() {
  return (
    <>
      <Landing />
      <Features />
      <StayProductive />
      <Testimonials />
      <GetStarted />
    </>
  );
}

export default Home;
