import { createFileRoute } from "@tanstack/react-router";

import { m } from "@/paraglide/messages";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <main className="px-8 py-6">
      <h1 className="text-3xl font-bold">{m.rare_regions_argue({ name: "Eric" })}</h1>
    </main>
  );
}
