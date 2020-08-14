import React from "react"
import { HashRouter, Route } from "react-router-dom"; /*{라우팅을 위한 컴포넌트, npm install react-router-dom }*/ 
import Home from "./routes/Home"
import About from "./routes/About"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation";
import "./App.css"

function App(){
  return ( 
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home} />  {/*exact : 주어진 경로와 정확히 맞아 떨어져야만 라우팅 */}
    <Route path="/about" component={About} />        
    <Route path="/movie/:id" component={Detail} />
  </HashRouter>
  );
}

export default App; 