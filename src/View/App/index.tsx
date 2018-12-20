import * as React from "react";
import TestComponent from "src/Components/TestComponent";
import { Provider } from "src/Manager/Utils/context";
import "./.scss";
import { MonObjet } from "./types"; // Comment avoir l'objet pour plusieurs components ? Mettre le types.ts dans quel dossier ?

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      user: new MonObjet("kelvin", "dupont")
    };
  }
  public render() {
    return (
      <Provider value={this.getContext()}>
        <div onClick={this.handleClick("Kelvin")}>Click Me</div>
        <TestComponent />
      </Provider>
    );
  }
  private handleClick = (params: any) => (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    console.log("Bonjour " + params);
  };

  private getContext = () => {
    return {
      ...this.state
    };
  };
}
export default App;
