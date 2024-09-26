"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useRef } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useSelectedLayoutSegment } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen as typeof context}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

const classList = ["overflow-hidden"];

function Transition({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        key={segment}
        initial={{
          opacity: 1,
          x: "100%",
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 1,
          x: -0.1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
        onAnimationStart={() => document.body.classList.add(...classList)}
        onAnimationComplete={() => document.body.classList.remove(...classList)}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
