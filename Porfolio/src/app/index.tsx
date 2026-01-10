import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (<h1 className='text-4xl'> Welcome to the Home Page</h1>);
}