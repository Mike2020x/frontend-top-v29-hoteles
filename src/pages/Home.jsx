import Titles from "../components/Titles/Titles";
import ListOffers from "../components/ListOffers/ListOffers";
import ListLocations from "../components/ListLocations/ListLocations";
import Blog from "../components/Blog/Blog";
export default function Home() {
  return (
    <div>
      <Titles />
      <ListOffers />
      <ListLocations />
      <Blog />
    </div>
  )
}
