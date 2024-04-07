import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Nav from "../components/navegation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Servicios MANPEG",
  description: "Empresa de servicio a sistemas contra incendio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <header>
          <Link href={"/"}>Home Page</Link>
          <Nav />
        </header>
        {children}
        <footer>
          <hr className="mt-5" />
          <div>
            <ul>
              <li>
                <a href={"https://wa.me/+573043179349"} target="_blank">
                  Whatsapp
                </a>
              </li>
              <li>
                <p>Instagram</p>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
