'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2">
          <Gift className="h-6 w-6" />
          <Link href="/" className="font-bold">Secret Santa</Link>
        </div>
        
        <nav className="flex items-center space-x-6 ml-6">
          <Link 
            href="/how-it-works"
            className={`text-sm transition-colors hover:text-foreground/80 ${
              pathname === '/how-it-works' ? 'text-foreground' : 'text-foreground/60'
            }`}
          >
            How It Works
          </Link>
        </nav>

        <div className="flex items-center ml-auto space-x-4">
          <Link href="/login">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}