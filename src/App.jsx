import { Container, Button } from './components/ui';

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-sans text-ink">
      <Container className="py-16 text-center">
        <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">
          Avencrest Clean Slate
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm text-muted">
          All page code has been reset. Reusable UI components, assets, and Tailwind CSS configurations are ready.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="primary">Primary Action</Button>
          <Button variant="outline" className="!border-primary !text-primary hover:!bg-primary/5">
            Outline Action
          </Button>
        </div>
      </Container>
    </div>
  );
}
