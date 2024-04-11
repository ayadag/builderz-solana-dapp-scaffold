import { Toaster } from 'sonner';
import "/styles/meeting.globals.css";
// import "/styles/globals.css";
// import AppBar from '../components/layout/AppBar';
// import Footer from '../components/layout/Footer';
import MeetingLayoutWrapper from '../MeetingLayoutWrapper';


require("@solana/wallet-adapter-react-ui/styles.css");

export const metadata = {
  title: 'BUILDERZ Solana dApp Scaffold',
  description: 'Generated by Next.js',
};

export default async function RootLayout({ children }) {

  return (
    <MeetingLayoutWrapper >
      <html lang="en">
        <body>
          {/* <AppBar /> */}
          <main className={`min-h-screen`}>
            {children}
          </main>
          {/* <Footer /> */}
          <Toaster position="bottom-right" />
        </body>
      </html>
    </MeetingLayoutWrapper>
  );
}
