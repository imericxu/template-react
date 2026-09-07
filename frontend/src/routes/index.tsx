import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { api } from "@/lib/api/api";
import { m } from "@/paraglide/messages";

const weatherForecastQuery = api.queryOptions("get", "/api/weatherforecast");

export const Route = createFileRoute("/")({
  component: Index,
  loader: ({ context }) =>
    context.queryClient.query({ ...weatherForecastQuery, staleTime: "static" }),
});

function Index() {
  const { data } = useSuspenseQuery(weatherForecastQuery);

  return (
    <main className="px-8 py-6">
      {/* Title */}
      <h1 className="text-3xl font-bold">{m.rare_regions_argue()}</h1>

      {/* Weather forecast */}
      <p>{m.tame_dancers_speak()}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
