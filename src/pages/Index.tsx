import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import BrandBanner from '@/components/BrandBanner';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ClientLogos />
        <Services />
        <Testimonials />
        <BrandBanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
