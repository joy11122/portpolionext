"use client"
import "@/public/css/bootstrap.min.css";
import "./globals.css";
import "@/public/booticon/font/bootstrap-icons.css"
import Navbar from "@/app/component/Navbar";

import Footer from "./component/Footer";
import Line from "./component/Line";
import { useEffect } from "react";
import Head from "next/head";



export default function RootLayout({ children }) {


  return (
    <html lang="en">
<Head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
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
