
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "@/public/booticon/font/bootstrap-icons.css";
import Navbar from "@/app/component/Navbar";
import Footer from "./component/Footer";
import Line from "./component/Line";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Joy's ProtPolio</title>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"
          integrity="sha384-ho+j7jyWK8fNQe+A12TFt4KTK3HltlWQ0gDZ1jbNkwHjzXbrHD6RtL8t6+c0Yo6N"
          crossorigin="anonymous"
          defer
        ></script>
        <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
          defer
        ></script>
      </Head>
      <body>
        <Navbar />
        <Line />
        {children}
        <Footer />
      </body>
    </html>
  );
}
