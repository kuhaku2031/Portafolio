import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';


export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}