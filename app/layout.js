import 'bootstrap/dist/css/bootstrap.min.css';
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
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    
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
