import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/ScrollToTop";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:"Splitr",
  description: "The smartest way to split expenses with friends",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        
        <ClerkProvider>
          
          <ConvexClientProvider>
            
            <ThemeProvider>
              
              <Header />
              
              <main className="min-h-screen p-0 m-0">
                <Toaster richColors />
                {children}
              </main>

              <ScrollToTop />

            </ThemeProvider>

          </ConvexClientProvider>

        </ClerkProvider>

      </body>
    </html>
  );
}