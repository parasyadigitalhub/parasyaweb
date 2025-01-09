
import NavBar from "@/components/Nav";
import "./globals.css";
import Footer from "@/components/Footer";
import MouseSpotlight from "@/components/MouseSpotlight";


export const metadata = {
  title: "Parasya",
  description: "Elevating Your Identity",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      >
        <MouseSpotlight/>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
