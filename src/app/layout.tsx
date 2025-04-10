import type { Metadata } from "next";
// import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import styles from "@/styles/global.module.scss";
import "@/styles/global.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Background from "../components/Background";

const font = localFont({
  src: "MonaspaceNeonVarVF.ttf",
  display: "swap",
});

// const font = JetBrains_Mono({
//   subsets: ["latin"],
//   weight: "variable",
// });

export const metadata: Metadata = {
  title: "jellyware",
  description: "Jay's website!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={styles.html} lang="en" suppressHydrationWarning>
      <body className={`${font.className} ${styles.body}`}>
        <Header />
        {children}
        <Footer />
        <Background />
      </body>
    </html>
  );
}
