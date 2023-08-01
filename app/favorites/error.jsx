"use client";

import ErrorFallback from "@/components/ErrorFallback";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorFallback onClick={reset} />;
}
