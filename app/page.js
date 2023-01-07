import { Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';

const Page = () => (
  <div className="overflow-hidden bg-primary-black">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="z-0 gradient-03" />
      <Explore />
    </div>
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
