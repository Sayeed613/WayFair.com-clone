import video1 from "../assets/video-2.mp4";
import LaborDayCom from "../components/LaborDaycom";
import RecentlyViewed from "../components/RecentlyViewed";

import DealOfTherDay from '../components/DealOfTheDay';

export default function Home() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="w-full mt-1">
          <video
            muted
            autoPlay
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            className="w-full h-auto max-h-[500px] sm:max-h-[600px] md:max-h-[500px] lg:max-h-[600px]"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <RecentlyViewed />
      <LaborDayCom/>
      <DealOfTherDay/>
    </>
  );
}
