"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import React from "react";

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config);

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default function Home() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const { data, isFetching, isSuccess, isError, error, isLoading } = useQuery({
    queryKey: ["pokemons"],
    queryFn: async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      return response.data;
    },
    refetchOnReconnect: true,
    staleTime: 10000,
    enabled: isEnabled,
    networkMode: "always",
  });

  const router = useRouter();
  if (isFetching || isLoading) {
    return <div className="text-8xl text-red-700">loading</div>;
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-300">
      <h1>Home</h1>

      <br />
      {data?.results?.map((result: { name: string }) => {
        return <h1 key={result.name}>{result.name}</h1>;
      })}
      <br />
      <button onClick={() => router.push("/todos")}>Go! Go! Go!</button>
      <button onClick={() => setIsEnabled(true)}>Fetch!!</button>
    </main>
  );
}
