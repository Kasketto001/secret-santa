'use client';

import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';
import Link from 'next/link';

export function LandingHero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <Gift className="h-12 w-12 text-primary animate-bounce" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Make Gift-Giving Magical with Secret Santa
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Organize your Secret Santa gift exchange effortlessly. Create groups, invite friends,
            and let the magic happen with automatic gift assignments and email notifications.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/signup">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}