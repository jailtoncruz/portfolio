import { createContext, useState } from "react";
import { LanguageSupported } from "../../core/enum/language-supported";

interface GlobalContextDataProps {
  language: LanguageSupported;
  setLanguage: (language: LanguageSupported) => void;
}

export const GlobalContext = createContext<GlobalContextDataProps>({
  language: LanguageSupported.US,
  setLanguage: () => {},
});

export function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<LanguageSupported>(
    LanguageSupported.US
  );

  return (
    <GlobalContext.Provider value={{ language, setLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
}
