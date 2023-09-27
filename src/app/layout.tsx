'use client'
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { store , persistor} from "../../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
      </PersistGate>
    </Provider>
  );
}
