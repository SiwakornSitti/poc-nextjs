"use client";

import { useEffect } from "react";

export default function Page1() {
  useEffect(() => {
    (window as any).abc.dkkk();
  }, []);

  return (
    <main className="min-h-screen p-24 bg-indigo-500">
      <button
        className="font-semibold"
        onClick={() => (window as any).abc.dkkk()}
      >
        Go to Page 1
      </button>
      <button
        className="font-semibold mt-4"
        onClick={() => (window.location.href = "/page2")}
      >
        Go to Page 2
      </button>
    </main>
  );
}
