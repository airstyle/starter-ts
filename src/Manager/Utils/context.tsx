import { createContext } from "react";

export interface IContext {
  counter?: {
    get: number;
    set: React.Dispatch<React.SetStateAction<number>>;
  };
}

export const Context = createContext<IContext>({});
