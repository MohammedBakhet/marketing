import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function OmOssPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}
