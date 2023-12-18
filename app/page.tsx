"use client";

import { useRouter } from "next/navigation";



export default function Landing() {

  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/dashboard")
        }}
      >
        Navigate to dashboard
      </button>
    </div>
  );
}
