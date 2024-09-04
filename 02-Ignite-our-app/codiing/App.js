const heading1 = React.createElement("h1",{class:"heading"},"I m good");
const child = React.createElement("div",{class:"child"},heading1)
const parent = React.createElement("div",{id:"parent"},[child,child])

console.log(parent);


const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);