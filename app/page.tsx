"use client";

export default function Home() {
  return (
    <div>
      <button
        onClick={() => {
          window.location.replace("/dashboard");
        }}
      >
        Navigate to dashboard
      </button>
    </div>
  );
}
