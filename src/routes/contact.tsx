import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  CalendarClock,
  ClipboardList,
  Clock3,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { toast } from "sonner";
import heroContact from "@/assets/hero-contact.jpg";
import { Heading, IconCard, Reveal, Section } from "@/components/site";
import { contact } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Brother's Global Sourcing, Dhaka" },
      {
        name: "description",
        content:
          "Contact BGS in Uttara, Dhaka. Email info@bdbgs.com or WhatsApp +8801760698817 to start your next apparel programme.",
      },
      { property: "og:title", content: "Contact — Brother's Global Sourcing" },
      {
        property: "og:description",
        content:
          "Based in Dhaka. Serving global buyers. Let's build something together.",
      },
    ],
  }),
  component: Contact,
});

const share = [
  {
    icon: FileText,
    title: "Product / Tech Packs",
    text: "Sketches, spec sheets or reference samples for the styles you need.",
  },
  {
    icon: Tag,
    title: "Target Price",
    text: "Your landed or FOB target so we can match the right factory tier.",
  },
  {
    icon: ClipboardList,
    title: "Order Quantity",
    text: "Per style and per colour — our MOQ is 500 pcs per colour.",
  },
  {
    icon: CalendarClock,
    title: "Delivery Timeline",
    text: "Required ex-factory or in-store date so we can plan capacity.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Requirements",
    text: "Audit standards, testing protocols and packaging rules.",
  },
];

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
        {required && <span className="text-rust"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-rust focus:bg-white"
      />
    </label>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      e.currentTarget?.reset?.();
      toast.success("Thanks — your enquiry has been noted.", {
        description: contact.responseNote,
      });
    }, 600);
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroContact}
          alt="Stacked cream fabric rolls in soft daylight"
          width={1600}
          height={912}
          className="h-[46vh] min-h-80 w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-cream via-cream/85 to-cream/10" />
        <div className="absolute inset-0 flex items-center px-5 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <span className="eyebrow">Get in Touch</span>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-[1.06] text-navy sm:text-5xl">
              Let&apos;s Build{" "}
              <span className="text-rust">Something Together.</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy/70">
              {contact.tagline}
            </p>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-white p-8 shadow-card"
            >
              <h2 className="font-display text-2xl font-extrabold text-navy">
                Send us a message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the form and our merchandising team will get back to
                you.
              </p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                />
                <Field label="Company" name="company" />
                <Field label="Phone" name="phone" />
                <div className="sm:col-span-2">
                  <Field label="Subject" name="subject" required />
                </div>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Message <span className="text-rust">*</span>
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-rust focus:bg-white"
                  />
                </label>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 rounded-full bg-rust px-7 py-3 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift disabled:opacity-60"
                >
                  {sending ? "Sending…" : "Send Message"}
                </button>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock3 className="h-4 w-4 text-rust" />{" "}
                  {contact.responseNote}
                </span>
              </div>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid h-full gap-5">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: contact.email,
                  href: `mailto:${contact.email}`,
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: contact.phone,
                  href: contact.whatsapp,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: contact.phone,
                  href: `tel:${contact.phone}`,
                },
                { icon: MapPin, label: "Head Office", value: contact.address },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 rounded-3xl border border-border bg-cream p-6 transition-colors hover:border-rust/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-rust-soft text-rust">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="mt-1 block font-display font-semibold text-navy hover:text-rust"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-relaxed text-navy/80">
                        {c.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="deep">
        <Heading
          eyebrow="Before You Write"
          title="What to Share"
          accent="With Us."
          intro="The more of this you can send up front, the faster we can revert with factory options and costing."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {share.map((s, i) => (
            <IconCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our Office</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
              Uttara, <span className="text-rust">Dhaka.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {contact.address}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Visits are welcome by appointment — we can arrange factory tours
              alongside your office meeting.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex aspect-video w-full flex-col items-center justify-center rounded-[2rem] border border-border bg-cream text-center">
              <MapPin className="h-8 w-8 text-rust" />
              <p className="mt-4 font-display text-lg font-bold text-navy">
                Head Office · Dhaka
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Sector 14, Uttara — Dhaka 1230
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
