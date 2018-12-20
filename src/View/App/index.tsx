import { FunctionComponent } from "react";
import * as React from "react";
import "./.scss";
import {MonObjet} from './types';

const App: FunctionComponent = props => {

  const t = new MonObjet();
  t.Nom = 'Dupont';
  t.Prenom = 'Kelvin'; 
  
  const handleClick = (params: MonObjet) => (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    console.log('Bonjour ' + params.Nom + ' ' + params.Prenom);
  };

  return (<div onClick={handleClick(t)}>Click Me</div>);
};

export default App;
