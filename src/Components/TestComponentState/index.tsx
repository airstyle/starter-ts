import React, { FunctionComponent, useContext, useEffect } from "react";
import { ITestComponentProps } from "src/Components/TestComponentState/types";
import { Context, IContext } from "src/Manager/Utils/context";
const TestComponentState: FunctionComponent<ITestComponentProps> = props => {
  const monContext: IContext= useContext(Context);
  useEffect(() => {
    // ON 
    return(() => {
      // OFF
    })
  }, [monContext])
  // On rajoute le [] pour appeler useEffect seulement au componentDidMount, et unMount.
  // On rajoute des valeurs dans le tableau pour appeler useEffect seulement si celles-ci sont changées.
  // Sans le tableau, le useEffect est appeler à chaque fois que le component est render


  const click = () => {
    if (monContext.counter) {
      monContext.counter.set((monContext.counter.get + 1) * 1.5);
    }
  };
  return (
    <div>
      <div>Bonjour {props.nom}</div>
      <button onClick={click}>Click me</button>
      <div>valeur: {monContext.counter && monContext.counter.get}</div>
    </div>
  );
  
};

export default TestComponentState;
