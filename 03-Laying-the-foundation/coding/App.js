import React from "react";
import ReactDOM from "react-dom/client"



const JsxHeadingCompo = ()=>{
    return <h2>i m jsx component</h2>
}

const jsxHeading = (
    <>
    <JsxHeadingCompo />
<div></div>
<h1 id="heading">this is jsx-heading</h1>
</>
);

const Header = ()=> {
    return (
        <>
        {jsxHeading}
        <JsxHeadingCompo />
    <div></div>
    <div>
    <h1>this is come from functional component</h1>
    </div>
    </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Header());