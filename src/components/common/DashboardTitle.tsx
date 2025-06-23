"use client";

import Link from "next/link";
import { ReactNode } from "react";

import { Button } from "@/components/ui/button";

type DashboardTitleProps = {
  title: string;
  description?: string;
  action?: {
    label: string;
    href: string;
    icon?: ReactNode;
  };
  children?: ReactNode;
};

const DashboardTitle = ({
  title,
  description,
  action,
  children,
}: DashboardTitleProps) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-2xl font-bold sm:text-3xl">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-1 text-sm sm:text-base">
            {description}
          </p>
        )}
      </div>

      {action && !children && (
        <div className="flex-shrink-0">
          <Button asChild className="w-full sm:w-auto">
            <Link href={action.href}>
              {action.icon}
              <span className="truncate">{action.label}</span>
            </Link>
          </Button>
        </div>
      )}

      {children && !action && <div className="flex-shrink-0">{children}</div>}

      {/* If both action and children are provided, prioritize children */}
      {children && action && <div className="flex-shrink-0">{children}</div>}
    </div>
  );
};

export default DashboardTitle;
