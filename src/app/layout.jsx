
import NavBar from "@/components/Nav";
import "./globals.css";
import Footer from "@/components/Footer";
import MouseSpotlight from "@/components/MouseSpotlight";
import LoadingScreen from "@/components/LoadingScreen";


export const metadata = {
  title: "Parasya",
  description: "Elevating Your Identity",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      > <LoadingScreen>
        <MouseSpotlight/>
        <NavBar/>
        {children}
        <Footer/>
        </LoadingScreen>
      </body>
    </html>
  );
}
