import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    number: '01',
    title: 'Create an Account',
    description: 'Sign up with your email to get started organizing your Secret Santa event.',
  },
  {
    number: '02',
    title: 'Create a Group',
    description: 'Set up your Secret Santa group and add participants with their email addresses.',
  },
  {
    number: '03',
    title: 'Automatic Assignment',
    description: 'Our system randomly assigns gift recipients to each participant.',
  },
  {
    number: '04',
    title: 'Email Notifications',
    description: 'Participants receive emails with their assigned gift recipient.',
  },
];

export function HowItWorks() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">How It Works</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple steps to organize your Secret Santa
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Follow these easy steps to set up and manage your Secret Santa gift exchange.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {steps.map((step) => (
              <Card key={step.number}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-primary">{step.number}</span>
                    <span>{step.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}