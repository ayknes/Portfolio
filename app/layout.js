import Header from "@/components/ui/Header";
import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";

const PlusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ["200","300","400","500","600","700","800"],
});

export const metadata = {
  title: "Otmane Boushaba",
  description: "a Web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${PlusJakartaSans.className} antialiased bg-bgcolor text-white`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
