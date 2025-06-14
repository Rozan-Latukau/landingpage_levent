import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/main.scss";
import "../styles/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BootstrapScript from "./script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Levent",
  description: "Levent app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BootstrapScript />
        {children}
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
