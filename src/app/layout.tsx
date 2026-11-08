
import "./globals.css";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme='dark'
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
