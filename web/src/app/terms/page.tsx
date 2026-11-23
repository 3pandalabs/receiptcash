import type { Metadata } from "next";
import { A, CONTACT_PHONE, LegalPage, Mail, Section, UL } from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using ReceiptCash, which turns the receipts you scan into reward points.",
  alternates: { canonical: "/terms" },
};

const TOC = [
  { id: "service", title: "The service" },
  { id: "account", title: "Your account" },
  { id: "receipts", title: "Receipts you submit" },
  { id: "points", title: "Points and rewards" },
  { id: "use", title: "Acceptable use and fraud" },
  { id: "accuracy", title: "Accuracy" },
  { id: "price", title: "Price" },
  { id: "liability", title: "Disclaimers and liability" },
  { id: "ending", title: "Ending the service" },
  { id: "law", title: "Governing law" },
  { id: "contact", title: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      toc={TOC}
      intro={
        <p>
          These terms are an agreement between you and 3PandaLabs LLC, a New Jersey limited liability company (&ldquo;3PandaLabs&rdquo;,
          &ldquo;we&rdquo;), for using ReceiptCash. By creating an account you agree to them and to our <A href="/privacy">Privacy Policy</A>.
        </p>
      }
    >
      <Section id="service" title="1. The service">
        <p>
          ReceiptCash lets you photograph shopping receipts in its mobile app. We read each receipt automatically, check it, and may credit
          reward points to your account, which you may be able to redeem for rewards from our catalog. ReceiptCash doesn&apos;t connect to your
          bank, can&apos;t move money, and isn&apos;t a bank, payment service or financial adviser.
        </p>
      </Section>

      <Section id="account" title="2. Your account">
        <UL>
          <li>You must be 18 or older and give accurate account details.</li>
          <li>One account per person. Keep your password secret; you&apos;re responsible for activity on your account.</li>
        </UL>
      </Section>

      <Section id="receipts" title="3. Receipts you submit">
        <UL>
          <li>Submit only genuine, unaltered receipts for purchases you made yourself.</li>
          <li>
            You keep ownership of your receipts. You give us permission to store, process and display them only to provide ReceiptCash to you,
            including sending them to the processors listed in the Privacy Policy and comparing them with other submissions to prevent fraud.
          </li>
          <li>
            We decide whether a receipt is eligible. Receipts may be rejected or held for manual review, for example if they can&apos;t be read,
            the totals don&apos;t add up, or they match a receipt already submitted.
          </li>
        </UL>
      </Section>

      <Section id="points" title="4. Points and rewards">
        <UL>
          <li>
            Points are a promotional loyalty feature offered at our discretion. They have no cash value, aren&apos;t money, a deposit or
            property, can&apos;t be sold or transferred, and can&apos;t be exchanged for cash.
          </li>
          <li>
            How many points a receipt earns, which rewards are offered, what they cost in points, and whether they&apos;re in stock can change
            at any time. Rewards are subject to availability, and we don&apos;t guarantee any particular reward will be offered or delivered.
          </li>
          <li>
            We may correct or remove points credited by mistake or through receipts that break these terms, and cancel redemptions connected
            with them.
          </li>
          <li>
            We may change, pause or end the points program, including unredeemed points, at any time. If we end it, we&apos;ll try to give
            reasonable notice first.
          </li>
        </UL>
      </Section>

      <Section id="use" title="5. Acceptable use and fraud">
        <UL>
          <li>Don&apos;t submit edited, fake, duplicate or someone else&apos;s receipts, or open multiple accounts to earn more points.</li>
          <li>Don&apos;t upload malware, try to break or overload the service, or reach data that isn&apos;t yours.</li>
          <li>Don&apos;t resell, automate or scrape the service.</li>
        </UL>
        <p>If we believe an account is abusing the service, we may remove its points, cancel its redemptions and close it.</p>
      </Section>

      <Section id="accuracy" title="6. Accuracy">
        <p>
          Reading receipts is automated. Details may be misread or missed, and a valid receipt may occasionally be rejected or flagged. If you
          think we got one wrong, email us.
        </p>
      </Section>

      <Section id="price" title="7. Price">
        <p>
          ReceiptCash is free. If we ever introduce paid features, we&apos;ll tell you in advance, and you won&apos;t be charged without agreeing.
        </p>
      </Section>

      <Section id="liability" title="8. Disclaimers and liability">
        <p>
          ReceiptCash is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties of any kind, to the fullest extent the
          law allows. To the fullest extent the law allows, 3PandaLabs isn&apos;t liable for indirect, incidental or consequential losses, or
          for lost points or rewards, and our total liability for any claim is limited to US$100. Nothing in these terms limits liability that
          can&apos;t be limited by law.
        </p>
      </Section>

      <Section id="ending" title="9. Ending the service">
        <p>
          You can stop using ReceiptCash at any time and ask us to delete your account by emailing <Mail />. Unredeemed points are forfeited
          when an account is closed. We may suspend or close accounts that break these terms. If we shut ReceiptCash down, we&apos;ll give at
          least 30 days&apos; notice.
        </p>
      </Section>

      <Section id="law" title="10. Governing law">
        <p>
          These terms are governed by the laws of the State of New Jersey, USA, without regard to conflict-of-law rules. Courts located in New
          Jersey have jurisdiction, except where the law of the place you live gives you the right to bring a claim locally. We may update
          these terms; if a change matters, we&apos;ll tell you first.
        </p>
      </Section>

      <Section id="contact" title="11. Contact">
        <p>
          3PandaLabs LLC, New Jersey, USA. Questions: <Mail /> or {CONTACT_PHONE}.
        </p>
      </Section>
    </LegalPage>
  );
}
