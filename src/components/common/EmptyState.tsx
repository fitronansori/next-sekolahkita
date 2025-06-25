import { LucideIcon } from "lucide-react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  action_button?: {
    text: string;
    href: string;
    variant?:
      | "default"
      | "outline"
      | "secondary"
      | "ghost"
      | "link"
      | "destructive";
  };
};

const EmptyState = ({
  icon: Icon,
  title,
  description,
  action_button,
}: EmptyStateProps) => {
  return (
    <div className="py-12 text-center">
      <div className="mx-auto max-w-sm">
        <Icon className="text-muted-foreground/50 mx-auto mb-4 h-16 w-16" />

        <h3 className="mb-2 text-lg font-semibold">{title}</h3>

        <p className="text-muted-foreground mb-6">{description}</p>

        {action_button && (
          <Button asChild variant={action_button.variant || "outline"}>
            <Link href={action_button.href}>{action_button.text}</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
