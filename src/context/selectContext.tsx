"use client"
import { FC, ReactNode, createContext, useState } from "react";

interface OptionContextType {
  selectedOption: string;
  changeOption: (option: string) => void;
}

const OptionContext = createContext<OptionContextType | undefined>(undefined);

const OptionProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState<string>('Procurement');

  const changeOption = (option:string) => {
    setSelectedOption(option);
  };

  return (
    <OptionContext.Provider value={{ selectedOption, changeOption }}>
      {children}
    </OptionContext.Provider>
  );
};

export { OptionContext, OptionProvider };
