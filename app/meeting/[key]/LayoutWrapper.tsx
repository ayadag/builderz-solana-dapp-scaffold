

import React from 'react';

// import '../styles/globals.css';
import "/styles/meeting.globals.css";


// TODO: Change to other toast provider
import ContextProvider from "../../contexts/MeetingContextProvider";
import { ThemeProvider } from "../../contexts/MeetingThemeProvider";

// Providers

/**
 *
 * @param Children --> This will be the rendered component in the current page
 * @returns --> A wrapper of providers such as Session, WalletContext around the Children param
 */
type LayoutWrapperProps = {
  children: React.ReactNode;
};

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <ContextProvider>
      <ThemeProvider >
        {children}
      </ThemeProvider>
    </ContextProvider>

  );
};

export default LayoutWrapper;
