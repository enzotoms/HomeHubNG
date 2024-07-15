import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";
import SearchModal from "./components/modals/SearchModal";

export type Metadata = {
  title: "HomeHubNG";
  description: "homehomeng";
};

export const metadata: Metadata = {
  title: "HomeHubNG",
  // @ts-ignore
  description: "HomeHubNG for Home Apartments Bookings in Nigeria",
};

const font = Nunito({
  subsets: ["latin"],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  
  return (
    <html lang="en">
      <body className={font.className}>

        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
        <Navbar currentUser = {currentUser} />  
        </ClientOnly>
        <div className="pb-20 pt-28">
        {children}
        </div>
        
         </body>
    </html>
  );
}
