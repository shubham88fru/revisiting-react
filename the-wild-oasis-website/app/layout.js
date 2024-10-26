import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";

export const metadata = {
  // title: "The Wild Oasis", //page title.
  title: {
    //page title.
    template: "%s The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  //description of the page (for SEO, traditionally put in the meta tag.)
  description:
    "Luxurious cabin hotel, located in the heart of the italian Dolomites, surrounded by beautiful mountains and dark forests.",
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
