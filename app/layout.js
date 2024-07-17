
import "./globals.css";
import "@/public/booticon/font/bootstrap-icons.css";
import Navbar from "@/app/component/Navbar";
import Footer from "./component/Footer";
import Line from "./component/Line";
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
    
      </Head>
      <body>
        <Navbar />
        <Line />
        {children}
        <Footer />
      </body>
      <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"
          integrity="..."
          crossorigin="anonymous"
         defer 
        ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    </html>
  );
}
