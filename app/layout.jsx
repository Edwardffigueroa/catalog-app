import Navbar from "@/components/Navbar";
import "../styles/globals.scss";
import { Inter } from "next/font/google";
import styles from "./layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Catalog App",
  description: "Platzi technical challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p>
            All rights reserved - <b>Edwar Figueroa</b>
          </p>
        </footer>
      </body>
    </html>
  );
}
