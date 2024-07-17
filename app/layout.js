"use client"
import "@/public/css/bootstrap.min.css";
import "./globals.css";
import "@/public/booticon/font/bootstrap-icons.css"
import Navbar from "@/app/component/Navbar";

import Footer from "./component/Footer";
import Line from "./component/Line";
import { useEffect } from "react";



export default function RootLayout({ children }) {
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.bundle")
  })


  return (
    <html lang="en">
      <body>
        <Navbar />
        <Line />
        {children}
        <Footer />
      </body>
    </html>
  );
}
