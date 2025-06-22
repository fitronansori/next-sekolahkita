"use client";

import { UserButton } from "@clerk/nextjs";

import { useEffect, useState } from "react";

const ClientOnlyUserButton = () => {
  const [is_mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!is_mounted) {
    // Return a placeholder that matches the UserButton's approximate size
    return <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />;
  }

  return <UserButton />;
};

export default ClientOnlyUserButton;
