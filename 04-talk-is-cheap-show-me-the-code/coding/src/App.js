import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import RestaurentCard from "./components/RestaurentCard";




const AppLayout = ()=>{
    return(
        <>
        <Header />
        <h1>heading1</h1>
        <RestaurentCard />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);