import "./App.css";
import TopNav from "./components/TopNav";
import SideNav from "./components/Sidenav";
import Sales from "./components/Sales";
import HotItem from "./components/HotItems";
import InfoButton from "./components/InfoButton";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemInfo from "./components/ItemInfo";
import Footer from "./components/Footer";
import Details from "./components/Details";
import AddToCard from "./components/Addtocard";
import CkEditor from "./components/Ckeditor";
import ScrollToTop from "react-scroll-to-top";
import ScrollRestoration from "./components/ScrollRestoration";
import NotFoundPage from "./components/PageNotFound";
import Svg from "./components/svg";
import ReactModel from "./components/REactModel";


function App() {
  return (
    <Router>
      <ScrollRestoration />
      <TopNav />
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <SideNav />
          <Sales />
          <HotItem />
          <InfoButton />
          <Footer />
        </Route>
        <Route exact path="/item/:id">
          <ItemInfo />
        </Route>
        <Route exact path="/editor">
          <CkEditor />
        </Route>
        <Route exact path="/info/:id">
          <Details />
        </Route>
        <Route exact path="/cart/:id/:number">
          <AddToCard />
        </Route>
        <Route exact path="/svg">
          <ReactModel />
          <Svg />
        </Route>
        <Route path="*" exact>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
