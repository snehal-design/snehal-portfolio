import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Theme } from "@radix-ui/themes";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cx(sfPro.variable, inter.variable)} bg-[#f9faff]`}>
        <Theme>
          <Suspense fallback="...">
            <Nav />
          </Suspense>
          <main className="py-28 px-16 max-w-screen-2xl mx-auto bg-[#f9faff]">
            {children}
          </main>
          {/* <Footer />
          <Analytics /> */}
        </Theme>
      </body>
    </html>
  );
}
