import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

function AboutPage() {
  return (<div className="p-4">About NexoAI</div>);
}