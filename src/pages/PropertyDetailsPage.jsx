import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';

export default function PropertyDetailsPage() {
  const { slug } = useParams();

  return (
    <Container className="py-16">
      <h1 className="text-3xl font-semibold text-primary">Property Details</h1>
      <p className="mt-4 text-text-muted">Slug: {slug}</p>
    </Container>
  );
}
