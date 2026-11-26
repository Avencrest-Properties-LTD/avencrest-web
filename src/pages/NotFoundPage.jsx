import PageShell from './PageShell';

export default function NotFoundPage() {
  return (
    <PageShell
      title="Page Not Found"
      eyebrow="404"
      heading="Page not found."
      description="The page you are looking for does not exist or may have moved."
      ctaLabel="Return home"
      ctaTo="/"
    />
  );
}
