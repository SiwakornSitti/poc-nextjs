"use client";
import { useRouter } from "next/navigation";

export default function Page3() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-indigo-300">
      <h1>Page 3</h1>
      <br />
      <br />
      <button onClick={() => router.push('/page1')}>
        Page1
      </button>
      <button onClick={() => router.push('/page2')}>
        Page2
      </button>
      <button onClick={() => router.push('/page3')}>
        Page3
      </button>
      <button onClick={() => router.back()}>
        Back
      </button>
    </main>
  );
}
