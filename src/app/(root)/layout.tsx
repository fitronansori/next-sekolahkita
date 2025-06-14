import Footer from '@/components/layouts/root/Footer';
import Header from '@/components/layouts/root/Header';

type HomeLayoutProps = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default HomeLayout;
