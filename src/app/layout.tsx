
import Navbar from "@/components/shared/Navbar";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { PlanProvider } from "@/context/PlanContext";
import { ToastContainer } from "react-toastify";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme='dark'
      className="h-full"
    >
      <body className="min-h-screen flex flex-col">
        <PlanProvider>
          <Navbar></Navbar>
          <div className="flex-1">{children}</div>
          <Footer></Footer>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar
            theme="dark"
          />
        </PlanProvider>
      </body>
    </html>
  );
}
