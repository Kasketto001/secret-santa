import { LandingHero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <LandingHero />
      <Features />
      <HowItWorks />
    </main>
  );
}