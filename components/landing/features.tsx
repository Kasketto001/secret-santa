import { Gift, Users, Mail, Lock } from 'lucide-react';

const features = [
  {
    name: 'Easy Group Creation',
    description: 'Create and manage multiple Secret Santa groups with just a few clicks.',
    icon: Users,
  },
  {
    name: 'Automatic Assignments',
    description: 'Let our system randomly assign gift recipients while ensuring fairness.',
    icon: Gift,
  },
  {
    name: 'Email Notifications',
    description: 'Participants receive automatic emails with their gift recipient details.',
    icon: Mail,
  },
  {
    name: 'Secure & Private',
    description: 'Your data is encrypted and protected. Only you see your assignments.',
    icon: Lock,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to organize your Secret Santa
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our platform makes it easy to organize and manage your Secret Santa gift exchange,
            from group creation to final assignments.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}