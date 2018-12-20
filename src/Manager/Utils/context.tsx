import React, { createContext} from "react";

export const { Provider, Consumer} = createContext({});

export const withContext = (Component: any) => (props: any) => (
  <Consumer>{value => <Component {...value} {...props} />}</Consumer>
);