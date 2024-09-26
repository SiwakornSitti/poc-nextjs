"use client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import throttle from "lodash/throttle";

export default function Todos() {
  const { data, isFetching, isError, error } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");

      return response.json();
    },
    staleTime: 10000,
  });
  const router = useRouter();

  const handleClick = async () => {
    console.log("clicked");
    // router.push("/");
  };

  if (isFetching) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-indigo-300">
      <h1>Todos</h1>
      <br />
      {data.results.map((result: { name: string }) => {
        return <h1 key={result.name}>{result.name}</h1>;
      })}
      <br />
      <button onClick={throttle(handleClick, 3000, { trailing: false })}>
        Back! Back! Back!
      </button>
    </main>
  );
}
