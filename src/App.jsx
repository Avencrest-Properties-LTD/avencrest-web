import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalLoader, MainLayout } from './components/Layout';
import { BuildingLoader } from './components/ui';
import HomePage from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const WorksPage = lazy(() => import('./pages/WorksPage'));
const DevelopmentsPage = lazy(() => import('./pages/DevelopmentsPage'));
const InvestPage = lazy(() => import('./pages/InvestPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <>
      <GlobalLoader />
      <Suspense fallback={<BuildingLoader fullScreen />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/developments" element={<DevelopmentsPage />} />
            <Route path="/invest" element={<InvestPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
