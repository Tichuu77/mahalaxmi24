'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--primary)',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <CheckCircle size={80} color="var(--secondary)" style={{ marginBottom: '2rem' }} />
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '3rem',
          marginBottom: '1.5rem',
          color: '#fff',
        }}
      >
        Thank You!
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.3rem',
          opacity: 0.9,
          marginBottom: '3rem',
          maxWidth: '600px',
        }}
      >
        Your inquiry has been submitted successfully. We'll contact you soon.
      </p>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          opacity: 0.7,
        }}
      >
        Redirecting to home page in 3 seconds...
      </p>
    </div>
  );
}