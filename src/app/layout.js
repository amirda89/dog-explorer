import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="m-0 min-h-screen bg-zinc-950 font-sans text-base text-stone-200">
        {children}
      </body>
    </html>
  );
}
