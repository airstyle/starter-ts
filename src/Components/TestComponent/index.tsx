import { FunctionComponent } from "react";
import * as React from "react";
import { withContext } from "src/Manager/Utils/context";

const TestComponent: FunctionComponent = (props: any) => {
  return (
      <div>Bonjour {props.user.Nom} {props.user.Prenom} </div>
  );
};

export default withContext(TestComponent);
