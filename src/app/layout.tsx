import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import styles from "@/styles/global.module.scss";
import "@/styles/global.css";
import Header from "@/components/Header/Header";

const font = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jellyware",
  description: "Jay's website !!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={styles.html} lang="en">
      <body className={`${font.className} ${styles.body}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
