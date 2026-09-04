import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <main className="px-8 py-6">
      <h1 className="text-3xl font-bold">Hello, World!</h1>
    </main>
  );
}
