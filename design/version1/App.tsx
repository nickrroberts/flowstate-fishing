import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Booking } from "./components/Booking";
import { Blog } from "./components/Blog";
import { BlogPage } from "./components/BlogPage";
import { Footer } from "./components/Footer";
import { BookingModal } from "./components/BookingModal";

type Page = 'home' | 'blog' | 'blog-post';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>();

  const openBookingModal = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setPreselectedService(undefined);
  };

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'blog':
        return <Blog onPostClick={() => navigateToPage('blog-post')} onBackClick={() => navigateToPage('home')} />;
      case 'blog-post':
        return <BlogPage onBackClick={() => navigateToPage('blog')} />;
      default:
        return (
          <>
            <Hero onBookingClick={() => openBookingModal()} />
            <Services onBookingClick={openBookingModal} />
            <About />
            <Gallery />
            <Booking />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onBookingClick={() => openBookingModal()} 
        onNavigate={navigateToPage}
        currentPage={currentPage}
      />
      {renderCurrentPage()}
      <Footer onNavigate={navigateToPage} />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={closeBookingModal}
        preselectedService={preselectedService}
      />
    </div>
  );
}