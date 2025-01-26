import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JSON Formatter and Prettifier",
  description: "Easily format and beautify your JSON data with this interactive, user-friendly tool. Paste your raw JSON on the left, and view the perfectly formatted output on the right. Featuring responsive design, smooth animations, and error handling, this tool makes working with JSON simple and efficient for developers and non-tech users alike. Created by Turtlecore.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
