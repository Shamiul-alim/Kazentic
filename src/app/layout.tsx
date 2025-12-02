import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Layout from "@/components/Layout/Layout";


export const metadata: Metadata = {
  title: "Kazentic App",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        />
      </head>
      <body  style={{ fontFamily: 'Inter' }}>
        <Layout>
          <div>{children}</div>
        </Layout>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "font-medium capitalize",
          }}
        />
      </body>
    </html>
  );
}
