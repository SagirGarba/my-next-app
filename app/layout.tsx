import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";
import GoogleAnalyticsSript from "./GoogleAnalyticsSript";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"]

})

export const metadata: Metadata = {
  title: "Sagirs App",
  description: "Build to add strngth to my Nextjs Skill",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="coffee">
      <GoogleAnalyticsSript />
      <body className={roboto.className}>
        <AuthProvider>
          <NavBar />
          <main className="p-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
