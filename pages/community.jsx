import React from 'react';
import Navbar from '../components/Navbar';                            //  Navbar added
import TestimonialCarousel from '../components/TestimonialCarousel';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; //  i18n enabled
import { useTranslation } from 'next-i18next';

export default function CommunityPage() {
  const { t } = useTranslation('common');                           //  use translation hook

  return (
    <>
      <Navbar />                                                    //  Renders navigation bar
      <main style={{ padding: '40px 20px', minHeight: '100vh', backgroundColor: '#fff' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '20px', color: '#333' }}>
          {t('communityVoices')}                                     //  Translatable title
        </h1>
        <TestimonialCarousel />                                     //  Carousel remains
      </main>
    </>
  );
}

// Enables multi-language support
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

