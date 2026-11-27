import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/sections/LegalPageLayout';

const SECTIONS = [
  { id: 'information-we-collect', label: 'Information we collect' },
  { id: 'how-we-use-data', label: 'How we use your data' },
  { id: 'sharing-and-retention', label: 'Sharing & retention' },
  { id: 'cookies-and-maps', label: 'Cookies & third parties' },
  { id: 'your-rights', label: 'Your rights' },
  { id: 'contact-privacy', label: 'Contact us' },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      metaTitle="Privacy Notice"
      metaDescription="How Avencrest Integrated Limited collects, uses, stores, and protects your personal and project enquiry information."
      eyebrow="LEGAL"
      title="Privacy notice"
      description="How Avencrest Integrated Limited collects, protects, and handles the personal information you share when making an enquiry."
      lastUpdated="27 Nov 2026"
      lastUpdatedIso="2026-11-27"
      sections={SECTIONS}
    >
      <aside className="flex gap-3 border border-primary/10 bg-[#FAF9F5] p-4 text-sm">
        <ShieldCheck
          className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-1">
          <p className="font-medium text-ink">Respecting your privacy</p>
          <p>
            We only collect the details needed to respond to your project or investment
            enquiry, and we never sell your personal information to third parties.
          </p>
        </div>
      </aside>

      <h2 id="information-we-collect">Information we collect</h2>
      <p>
        When you interact with the Avencrest Integrated Limited website or submit an
        enquiry through our <Link to="/contact">Contact</Link> or{' '}
        <Link to="/invest">Invest</Link> forms, we may collect:
      </p>
      <ul>
        <li>
          <strong>Contact details:</strong> your full name, email address, and phone
          number.
        </li>
        <li>
          <strong>Project &amp; enquiry details:</strong> areas of interest, project
          stage, city or state, estimated budget, investment focus, and any message or
          brief you share with us.
        </li>
        <li>
          <strong>Technical metadata:</strong> basic browser, device, and request logs
          used to keep the website secure and prevent spam submissions.
        </li>
      </ul>

      <h2 id="how-we-use-data">How we use your data</h2>
      <p>We use the information you provide solely for legitimate business purposes:</p>
      <ul>
        <li>To respond to your enquiries and schedule consultations or site briefings.</li>
        <li>
          To evaluate project scope, architectural requirements, or potential
          development partnerships.
        </li>
        <li>
          To maintain internal records of active client conversations and improve our
          services.
        </li>
      </ul>

      <h2 id="sharing-and-retention">Sharing &amp; retention</h2>
      <p>
        Your enquiry details are accessed only by authorised members of the Avencrest
        team and trusted service providers (such as email or hosting infrastructure)
        under strict confidentiality obligations. We do not sell, rent, or trade your
        personal data.
      </p>
      <p>
        We retain enquiry records only for as long as necessary to follow up on your
        request, manage an active engagement, or satisfy legal and regulatory
        obligations under the Nigeria Data Protection Act (NDPA).
      </p>

      <h2 id="cookies-and-maps">Cookies &amp; third parties</h2>
      <p>
        Our website uses minimal technical storage required for page navigation and
        embedded interactive maps (powered by OpenStreetMap / Leaflet). External map
        tile requests may transmit your IP address to map tile servers in accordance
        with their respective privacy policies.
      </p>

      <h2 id="your-rights">Your rights</h2>
      <p>Subject to applicable data protection law, you have the right to:</p>
      <ul>
        <li>Request access to the personal information we hold about you.</li>
        <li>Ask us to correct inaccurate or incomplete details.</li>
        <li>Request deletion of your enquiry data when it is no longer needed.</li>
        <li>Withdraw consent for follow-up communications at any time.</li>
      </ul>

      <h2 id="contact-privacy">Contact us</h2>
      <p>
        To exercise any of these rights or ask a question about how Avencrest Integrated
        Limited handles your information, please write to{' '}
        <a href="mailto:hello@avencrest.com">hello@avencrest.com</a>.
      </p>
    </LegalPageLayout>
  );
}
