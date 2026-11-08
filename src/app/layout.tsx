
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { PlanProvider } from "@/context/PlanContext";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme='dark'
    >
      <body className="min-h-full flex flex-col">
        <PlanProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </PlanProvider>
      </body>
    </html>
  );
}
