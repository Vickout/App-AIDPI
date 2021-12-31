import React, {createContext, useCallback, useContext, useState} from 'react';

interface DiseaseProps {
  id: number;
  signal: string;
  classify: string;
  type: string;
  screen: string;
  treatments: Array<{
    id: number;
    treat: string;
  }>;
}

interface ClassifyContextData {
  addDisease: (item: DiseaseProps) => void;
  resetClassification: () => void;
  yesDisease: DiseaseProps[];
}

const ClassifyContext = createContext<ClassifyContextData>(
  {} as ClassifyContextData,
);

export const ClassifyProvider: React.FC = ({children}) => {
  const [yesDisease, setYesDisease] = useState<DiseaseProps[]>([]);

  const addDisease = useCallback(
    (item: DiseaseProps) => {
      let objectExists = yesDisease.find(element => element.id === item.id);
      if (objectExists) {
        let copiedArray = [...yesDisease];
        copiedArray.splice(
          copiedArray.findIndex(element => element.id === item.id),
          1,
        );
        setYesDisease(copiedArray);
      } else {
        setYesDisease([...yesDisease, item]);
      }
    },
    [yesDisease],
  );

  const resetClassification = useCallback(() => {
    setYesDisease([]);
  }, []);

  return (
    <ClassifyContext.Provider
      value={{addDisease, resetClassification, yesDisease}}>
      {children}
    </ClassifyContext.Provider>
  );
};

export function useClassify(): ClassifyContextData {
  const context = useContext(ClassifyContext);

  if (!context) {
    throw new Error('useCart must be used within an AuthProvider');
  }

  return context;
}
