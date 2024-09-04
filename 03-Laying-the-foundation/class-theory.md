install
- npm i react react-dom
- npm i -D parcel

1. How can we start our project through npm
    a) go to package.json and write script for running project in developement and production phase.
    b) "start":"parcel index.html" and "build":"parcel build index.html"
    c) Now we can start our project through npm start || npm run start && npm run build.

2. react vs jsx - both are completely different
    a) jsx is a convention which try to merge html and js in one page
    b) jsx - html-like or xml-like syntax but it not html.
    c) there are two ways to make our react element i.e
        1. through core react syntax - const heading = React.createElement("h1",{id:"heading"},"this is my heading");
        2. through jsx syntax - const jsxHeading = <h1 id="heading">this is jsx-heading</h1>
        3. beacause through core react syntax it is very tough or clumsy writting react element so we write through jsx synatx which is more cleaner and developer friendly.

3. How jsx code execute in react?
    - if we write jsx code like - <h1>Hello, world!</h1>
    - it converted first by babel - React.createElement('h1', {}, 'Hello, world!')
    - it will return react element or plane javascript object
    - root.render() takes this object and translates it into actual DOM operations to display the h1 element with "Hello, world!" text in the browser
    - summary => jsx code -> react.createElement() -> reactElement(plane js object) -> html element

4. Babel -
    - Babel is a javascript compiler.
    - Babel (or TypeScript): These tools compile the JSX syntax into plain JavaScript (React.createElement calls).

5. JSX syntax - 
    a) if we write jsx code in multiple line so we have to put code inside small bracket(), so babel can understand otherwise not nessary to use it this.

6. Component - 
    a) Class-based component
    b) Functional-based component - 
        - Functional-based component is a javascript function which return some piece of jsx code or react element
        - Component composition means when we nest one compoent within another component