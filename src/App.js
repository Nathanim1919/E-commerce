import "./App.css";
import { Route, Routes } from "react-router-dom";
import Phone from "./pages/shopPage/phonePage/phone";
import Home from "./pages/homePage/home";
import DATA from "./components/datas";
import Header from "./components/header-component/header";
import Collection from "./pages/collectionPage/collection";
import { useState } from "react";
import SignInSignUpPage from "./pages/signinPage/signInSignUp";
import DatailedPage from "./pages/detailPage/detailPage";
import Loading from "./components/loading.component/loading";

function App() {
  const [itemInfo, setItemInfo] = useState({
    book: {
      img: `${DATA[0].items[0].imageUrl}`,
      quote: "A room without books is like a body without a soul.",
      speaker: "-Cicero",
    },
    phone: {
      img: `${DATA[1].items[1].imageUrl}`,
      quote:
        "The human race is already social, and the smartphone has everything needed to enable them to act on their social needs.",
      speaker: "— Keith Teare",
    },
    watch: {
      img: `${DATA[2].items[2].imageUrl}`,
      quote:
        "Jewelry isn’t really my thing, but I’ve always got my eye on people’s watches.",
      speaker: "Clive Owen",
    },
    tv: {
      img: `${DATA[6].items[5].imageUrl}`,
      quote: "A room without TV is like a body without a soul.",
      speaker: "-Cicero",
    },
    pc: {
      img: `${DATA[4].items[4].imageUrl}`,
      quote:
        "I do indeed write on the road. My laptop goes with me everywhere.",
      speaker: "Nora Roberts",
    },
    tablet: {
      img: `${DATA[5].items[5].imageUrl}`,
      quote: "The laptop brings back a more seamless kind of learning.",
      speaker: "-goores",
    },
    earphone: {
      img: `${DATA[3].items[3].imageUrl}`,
      quote:
        "Take noise-cancelling headphones, a good book, and wear comfy clothes.",
      speaker: "Greg Rutherford",
    },
  });



  return (
    <>
       <Header />
      <Routes>
     
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Home />}>
          <Route path="/signin" element={<SignInSignUpPage />} />
        </Route>
        

        <Route path="/collections" >
            <Route path="" element={<Collection />} />
            <Route path="phone">
              <Route path="" element={<Phone data={DATA[1]} itemInfo={itemInfo.phone} />}/>
              <Route path=":id" element={<DatailedPage data = {DATA[1].items}/>} />
            </Route>
            <Route path="watch">
              <Route path="" element={<Phone data={DATA[2]} itemInfo={itemInfo.watch} />}/> 
              <Route path=":id" element={<DatailedPage data = {DATA[2].items}/>} /> 
            </Route> 
            <Route path="earphone">
                <Route path="" element={<Phone data={DATA[3]} itemInfo={itemInfo.earphone} />}/>
                <Route path=":id" element={<DatailedPage data = {DATA[3].items}/>} />
            </Route>
            <Route path="books">
                <Route path="" element={<Phone data={DATA[0]} itemInfo={itemInfo.book} />}/>
                <Route path=":id" element={<DatailedPage data = {DATA[0].items}/>} />
            </Route>
            <Route path="labtops">
                <Route path="" element={<Phone data={DATA[4]} itemInfo={itemInfo.pc} />}/>
                <Route path=":id" element={<DatailedPage data = {DATA[4].items}/>} />
            </Route>
            <Route path="tablet">
                <Route path="" element={<Phone data={DATA[5]} itemInfo={itemInfo.tablet} />}/>
                <Route path=":id" element={<DatailedPage data = {DATA[5].items}/>} />
            </Route>
            <Route path="tv">
                <Route path="" element={<Phone data={DATA[6]} itemInfo={itemInfo.tv} />}/>
                <Route path=":id" element={<DatailedPage data = {DATA[6].items}/>} />
            </Route>
        </Route>
        
      </Routes>
      
    </>
  );
}
export default App;
