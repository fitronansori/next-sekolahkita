import { ArrowRightIcon, LucideIcon } from 'lucide-react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface FeatureCardProps {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  cta_text: string;
  cta_link: string;
  highlights: string[];
}

const FeatureCard = ({
  id,
  title,
  description,
  icon: IconComponent,
  cta_text,
  cta_link,
  highlights,
}: FeatureCardProps) => {
  return (
    <Card
      key={id}
      className="border-0 shadow-sm transition-all duration-300 hover:shadow-lg"
    >
      <CardHeader className="text-center">
        <div className="bg-primary/10 text-primary mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
          <IconComponent className="size-8" />
        </div>

        <CardTitle className="mb-2 text-start text-xl font-semibold">
          {title}
        </CardTitle>

        <CardDescription className="text-muted-foreground text-start text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Highlights */}
        <div className="mb-6 space-y-2">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-muted-foreground flex items-center text-sm"
            >
              <div className="bg-primary mr-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
              {highlight}
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <Button asChild className="w-full">
          <Link href={cta_link}>
            {cta_text} <ArrowRightIcon className="size-5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
