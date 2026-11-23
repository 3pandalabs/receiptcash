import type { Metadata } from "next";
import { CONTACT_PHONE, H3, LegalPage, Mail, Section, UL } from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What ReceiptCash collects from the receipts you scan, how it's read and protected, who processes it, and how to have it deleted.",
  alternates: { canonical: "/privacy" },
};

const TOC = [
  { id: "summary", title: "The short version" },
  { id: "collect", title: "What we collect" },
  { id: "not-collect", title: "What we don't collect" },
  { id: "use", title: "How we use it" },
  { id: "processors", title: "Who processes it for us" },
  { id: "cookies", title: "Cookies" },
  { id: "security", title: "How it's protected" },
  { id: "retention", title: "How long we keep it" },
  { id: "rights", title: "Your choices and rights" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes" },
  { id: "contact", title: "Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      toc={TOC}
      intro={
        <p>
          ReceiptCash is a service of 3PandaLabs LLC, a New Jersey limited liability company (&ldquo;3PandaLabs&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;). You photograph receipts in the ReceiptCash app, we read them automatically, and eligible receipts earn reward
          points. Receipts show where you shop and what you buy, so this policy is specific about exactly what we touch.
        </p>
      }
    >
      <Section id="summary" title="1. The short version">
        <UL>
          <li>We only see what you give us: your sign-up details and the receipt photos you take in the app.</li>
          <li>We never ask for your bank or card login, and we can&apos;t see or move your money.</li>
          <li>Receipt photos are read by an automated text-recognition service (Amazon Textract) to pull out the shop, date, totals and items.</li>
          <li>We don&apos;t use advertising or analytics trackers, and we don&apos;t sell your data.</li>
          <li>You can ask us to delete your account and all its data at any time.</li>
        </UL>
      </Section>

      <Section id="collect" title="2. What we collect">
        <H3>Account details</H3>
        <p>
          Your email address, a hashed password (we can&apos;t read it) and, if you set one, a display name. We also keep a record of your
          signed-in sessions (stored only as a hashed token) so you can stay signed in.
        </p>
        <H3>Receipt photos</H3>
        <p>
          Each receipt photo you take in the app is uploaded and stored, together with a fingerprint of the file so the same photo can&apos;t
          be submitted twice.
        </p>
        <H3>Details read from your receipts</H3>
        <p>
          From each photo we extract the shop name, purchase date, total, tax, tip and the line items (description, price and quantity), and we
          keep the raw text-recognition output. We also store a fingerprint made from the shop, total and date, used to spot receipts that were
          already submitted, and each receipt&apos;s review status (for example processed, rejected or flagged for review) with the reason.
        </p>
        <H3>Points and redemptions</H3>
        <p>
          A history of points credited to and debited from your account, your current balance, and any reward redemptions you place (the
          rewards chosen, quantities, points spent, status and any tracking reference).
        </p>
        <H3>Technical data</H3>
        <p>
          Standard server logs (such as IP address, timestamps and the requests made) used for security and debugging.
        </p>
      </Section>

      <Section id="not-collect" title="3. What we don't collect">
        <UL>
          <li>Bank, card or payment-app login credentials, OTPs or PINs.</li>
          <li>Card numbers or bank account details. We don&apos;t pay money out to bank accounts or cards.</li>
          <li>Your contacts, location, or any photo other than the receipts you take with the in-app camera.</li>
          <li>Advertising identifiers, or data from third-party analytics or ad trackers.</li>
        </UL>
      </Section>

      <Section id="use" title="4. How we use it">
        <UL>
          <li>To read your receipts, check them, and credit any points they earn to your balance.</li>
          <li>
            To prevent fraud and abuse: we compare receipts against earlier submissions (yours and other users&apos;) to catch duplicates,
            edited or misread receipts. Matching receipts may be rejected or held for manual review by our team.
          </li>
          <li>To show your receipts, balance, reward catalog and redemption history, and to process redemptions.</li>
          <li>To keep the service secure and to fix problems.</li>
        </UL>
        <p>We don&apos;t sell or rent your data, and we don&apos;t use it for advertising or to build profiles for anyone else.</p>
      </Section>

      <Section id="processors" title="5. Who processes it for us">
        <p>We use a small number of service providers, each only for the job listed:</p>
        <UL>
          <li>
            <strong>Hetzner Online GmbH</strong> (Germany): hosts our application servers and database, where your account, receipt details
            and points history are stored.
          </li>
          <li>
            <strong>Cloudflare, Inc.</strong> (USA): serves this website and stores your receipt photos (Cloudflare R2 storage).
          </li>
          <li>
            <strong>Amazon Web Services, Inc.</strong> (USA): Amazon Textract reads the text on your receipt photos so we can extract the
            receipt details.
          </li>
        </UL>
        <p>
          These providers may process data in countries other than the one you live in, including the United States and Germany.
        </p>
        <p>We may also disclose data if the law requires it, or to protect the rights and safety of our users or of 3PandaLabs.</p>
      </Section>

      <Section id="cookies" title="6. Cookies">
        <p>
          The website sets only the cookies needed to keep you signed in: a short-lived access cookie (15 minutes) and a refresh cookie (up to
          30 days). Both are HTTP-only and sent over HTTPS only. We don&apos;t use advertising or analytics cookies. The mobile app keeps your
          sign-in in your phone&apos;s secure storage.
        </p>
      </Section>

      <Section id="security" title="7. How it's protected">
        <UL>
          <li>All traffic uses HTTPS.</li>
          <li>Passwords and sign-in tokens are stored only as one-way hashes.</li>
          <li>Every request is checked against your account. Receipt photos can only be fetched through short-lived links issued to their owner.</li>
          <li>Access to production systems is limited to the 3PandaLabs team.</li>
        </UL>
        <p>No system is perfectly secure. If a breach affects your data, we&apos;ll notify you and the authorities as the law requires.</p>
      </Section>

      <Section id="retention" title="8. How long we keep it">
        <UL>
          <li>
            <strong>Account, receipts, receipt photos and points history:</strong> kept while your account is open, so your balance and
            history stay accurate and duplicate receipts can be detected.
          </li>
          <li>
            <strong>After you ask us to delete your account:</strong> we delete your account and its data within 30 days, except anything we
            must keep to meet legal obligations or resolve disputes.
          </li>
          <li>
            <strong>If we shut ReceiptCash down:</strong> we&apos;ll tell you in advance, and then delete the service&apos;s data.
          </li>
        </UL>
      </Section>

      <Section id="rights" title="9. Your choices and rights">
        <p>Wherever you live, you can ask us to:</p>
        <UL>
          <li>
            <strong>Access</strong> the personal data we hold about you, or get a copy of it.
          </li>
          <li>
            <strong>Correct</strong> your account details.
          </li>
          <li>
            <strong>Delete</strong> your account and all its data, by emailing <Mail /> from the address you signed up with.
          </li>
        </UL>
        <p>
          You may have further rights under the laws of the place where you live. We answer requests within 30 days. If you&apos;re not
          satisfied, you can complain to your local data protection authority.
        </p>
      </Section>

      <Section id="children" title="10. Children">
        <p>
          ReceiptCash is for people 18 and older. We don&apos;t knowingly collect data from children; if you believe a child has signed up,
          email us and we&apos;ll delete the account.
        </p>
      </Section>

      <Section id="changes" title="11. Changes">
        <p>
          If we change this policy in a way that matters, we&apos;ll tell you before it takes effect. The date at the top shows the latest
          version.
        </p>
      </Section>

      <Section id="contact" title="12. Contact">
        <p>
          3PandaLabs LLC, New Jersey, USA. Email <Mail /> or call {CONTACT_PHONE} for privacy questions and data requests. This policy is
          governed by the laws of the State of New Jersey, USA, without affecting any rights you have under the laws of the place where you
          live.
        </p>
      </Section>
    </LegalPage>
  );
}
