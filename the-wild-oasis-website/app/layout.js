import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "The Wild Oasis", //page title.
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-blue-800">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
