import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
