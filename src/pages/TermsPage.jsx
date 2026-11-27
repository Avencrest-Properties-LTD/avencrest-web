import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/sections/LegalPageLayout';

const SECTIONS = [
  { id: 'using-avencrest', label: 'Using this website' },
  { id: 'services-and-projects', label: 'Services & project info' },
  { id: 'enquiries-and-consultations', label: 'Enquiries & consultations' },
  { id: 'intellectual-property', label: 'Intellectual property' },
  { id: 'liability', label: 'Limitation of liability' },
  { id: 'changes-and-contact', label: 'Changes & contact' },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      metaTitle="Terms of Service"
      metaDescription="Terms governing the use of the Avencrest Integrated Limited website, project portfolio, and enquiry services."
      eyebrow="LEGAL"
      title="Terms of service"
      description="The rules and conditions for using the Avencrest Integrated Limited website, portfolio previews, and consultation enquiry forms."
      lastUpdated="27 Nov 2026"
      lastUpdatedIso="2026-11-27"
      sections={SECTIONS}
    >
      <aside className="flex gap-3 border border-primary/10 bg-[#FAF9F5] p-4 text-sm">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
        <div className="flex flex-col gap-1">
          <p className="font-medium text-ink">Informational website</p>
          <p>
            Content on this website is provided for general information and does not
            constitute a binding architectural, construction, or investment contract.
          </p>
        </div>
      </aside>

      <h2 id="using-avencrest">Using this website</h2>
      <p>
        This website is operated by Avencrest Integrated Limited (&ldquo;Avencrest&rdquo;,
        &ldquo;we&rdquo;, &ldquo;our&rdquo;). By accessing or using this site, you agree to
        comply with these terms and all applicable Nigerian and international laws.
      </p>
      <ul>
        <li>
          You must use this website only for lawful purposes such as exploring our
          services, developments, and submitting genuine project or partnership enquiries.
        </li>
        <li>
          You must not attempt to disrupt, probe, scrape, or overload our servers or
          enquiry endpoints.
        </li>
        <li>
          You must provide accurate contact details when submitting a consultation or
          investment interest form.
        </li>
      </ul>

      <h2 id="services-and-projects">Services &amp; project info</h2>
      <p>
        Project specifications, architectural renders, floor plans, locations, and
        development timelines shown on this site are illustrative and subject to change
        during planning, statutory approval, and construction.
      </p>
      <p>
        Formal architectural, construction, project management, or real estate
        development engagements are governed exclusively by separate written agreements
        executed between you and Avencrest Integrated Limited.
      </p>

      <h2 id="enquiries-and-consultations">Enquiries &amp; consultations</h2>
      <p>
        Submitting an enquiry through our{' '}
        <Link to="/contact">Contact</Link> or{' '}
        <Link to="/invest">Investment Partnerships</Link> pages expresses interest and
        initiates a conversation. It does not create a client relationship, reserve a
        property, or constitute an offer or financial commitment.
      </p>

      <h2 id="intellectual-property">Intellectual property</h2>
      <p>
        All architectural drawings, visualisations, photographs, copy, brand marks, and
        site design elements on this website are owned by or licensed to Avencrest
        Integrated Limited. You may view and share links to our pages for personal or
        evaluation purposes, but you may not reproduce, modify, or commercially exploit
        our materials without prior written consent.
      </p>

      <h2 id="liability">Limitation of liability</h2>
      <p>
        While we take care to keep project and service information accurate and up to
        date, this website is provided &ldquo;as is&rdquo; without warranties of any kind.
        To the extent permitted by law, Avencrest Integrated Limited is not liable for
        indirect or consequential loss arising from reliance on general website content.
      </p>

      <h2 id="changes-and-contact">Changes &amp; contact</h2>
      <p>
        We may update these terms from time to time. The updated date at the top of this
        page reflects the latest revision. Continued use of the website after updates
        take effect constitutes acceptance of the revised terms.
      </p>
      <p>
        If you have questions about these terms, please email{' '}
        <a href="mailto:hello@avencrest.com">hello@avencrest.com</a>.
      </p>
    </LegalPageLayout>
  );
}
