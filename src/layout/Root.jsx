import { Outlet, useNavigation } from "react-router-dom";

import NavBar from "../components/navbar/NavBar";
import  Footer from "../components/footer/Footer"
const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <NavBar />
      <main>{navigation.state === "loading" ? "loading" : <Outlet />}</main>
      <Footer/>
    </>
  );
};

export default Root;
