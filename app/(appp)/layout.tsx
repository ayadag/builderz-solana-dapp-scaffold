import { Toaster } from 'sonner';
import "../../styles/globals.css";
// import "/styles/globals.css";
import AppBar2 from '../../components/layout/AppBar2';
// import Footer from '../components/layout/Footer';
import LayoutWrapper from './LayoutWrapper';
// import { WalletConnectProvider } from '../../components/WalletConnectProvider'


require("@solana/wallet-adapter-react-ui/styles.css");

export const metadata = {
  title: 'BUILDERZ Solana dApp Scaffold',
  description: 'Generated by Next.js',
};

export default async function RootLayout({ children }: any) {

  return (
    <LayoutWrapper >
    {/* <WalletConnectProvider> */}
      <html lang="en">
         <body>
          <AppBar2 />
          <main className={`min-h-screen`}>
            {children}
          </main>
          {/* <Footer /> */}
          <Toaster position="bottom-right" />
        </body>
      </html>
      {/* </WalletConnectProvider> */}
    </LayoutWrapper>
  );
}



// import { Inter } from "next/font/google";
// import "/styles/meeting.globals.css";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
