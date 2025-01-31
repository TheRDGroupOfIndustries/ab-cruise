import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
