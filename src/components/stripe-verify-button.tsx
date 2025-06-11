"use client";
import Link from "next/link";
import { Button } from "./ui/button";

export const StripeVerifyButton = () => {
  return (
    <Link href="/stripe-verify" className="py-2">
      <Button>Verify account</Button>
    </Link>
  );
};
