import "./globals.css";

import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Mairuwa App",
  description: "Fastest and most Reliable means to get your water supply",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
