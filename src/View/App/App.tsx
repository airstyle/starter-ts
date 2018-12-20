import { FunctionComponent } from "react";
import * as React from "react";
import "./App.css";

const App: FunctionComponent = props => {
  const handleClick = (params: string) => (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    console.log(params, event);
  };

  return (<div onClick={handleClick("Bonjour")}>Click Me</div>);
};



export default App;
