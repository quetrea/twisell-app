import { Footer } from "./footer";
import { Navbar } from "./navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>

      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer/>
    </div>
  );
};

export default HomeLayout;
