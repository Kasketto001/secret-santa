import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Gift, Users, Mail, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: 'Create Your Group',
    description: 'Start by creating a Secret Santa group and inviting your friends, family, or colleagues. Add participants with their names and email addresses.',
  },
  {
    icon: Gift,
    title: 'Random Assignment',
    description: 'Our system automatically assigns each participant a gift recipient, ensuring no one gets themselves and maintaining the element of surprise.',
  },
  {
    icon: Mail,
    title: 'Automatic Notifications',
    description: 'Everyone receives an email with their assigned gift recipient, along with any specific details like budget limits or gift preferences.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="container max-w-6xl py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          How Secret Santa Works
        </h1>
        <p className="text-xl text-muted-foreground">
          Organizing a Secret Santa gift exchange has never been easier
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        {steps.map((step, index) => (
          <Card key={index} className="relative">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <step.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link href="/signup">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}