import * as React from "react";
import TestComponentState from "src/Components/TestComponentState";
import { Context, IContext } from "src/Manager/Utils/context";
import "./.scss";

const App: React.FunctionComponent = props => {
  const [counter, setCounter] = React.useState(0);

  const getContext: IContext = {
    counter: {
      get: counter,
      set: setCounter
    }
  };

  return (
    <Context.Provider value={getContext}>
      <TestComponentState nom='Kelvin'/>
    </Context.Provider>
  );
};
/*private handleClick = (params: any) => (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    console.log("Bonjour " + params);
  };*/

export default App;
