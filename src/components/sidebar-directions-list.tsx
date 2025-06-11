"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { generatePublicUrl } from "@/lib/utils";
import { StripeVerifyButton } from "./stripe-verify-button";

export const SidebarDirectionsFragment = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "0px",
          marginBottom: "20px",
        }}
      >
        <StripeVerifyButton />
        <Link href={`${generatePublicUrl}`} className="storeFront">
          <Button
            style={{
              border: "white 1px",
              borderRadius: "12px",
              padding: "0.5rem 1rem",
              fontSize: "15px",
            }}
          >
            Go to Twisell
          </Button>
        </Link>
      </div>
    </>
  );
};
