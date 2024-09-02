import NavBar from "@/components/navBar";
import "../global.css";
export const metadata = {
  title: "Shop",
  description: "meow meow meow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-700">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
