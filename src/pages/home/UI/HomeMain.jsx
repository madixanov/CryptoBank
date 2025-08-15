import Advantages from "./Advantages";
import Partners from "./Partners";
import Ratings from "./Ratings";
import Welcome from "./Welcome";

export default function HomeMain() {
  return (
    <main className="home-main">
      <div className="container">
        <Welcome />
        {/* <Advantages />
        <Ratings /> */}
      </div>
    </main>
  );
}