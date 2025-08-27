import { useState } from "react";
import { Instagram, Facebook, MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactForm({
  title = "Get in touch",
  subtitle = "Questions or bookings? Say hi — we’ll reply fast.",
  className = "",
  onSubmit,
  instagramUrl = "https://instagram.com/mrsudzcarwash",
  facebookUrl  = "https://facebook.com/mrsudzcarwash",
}) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    try {
      setLoading(true);
      if (typeof onSubmit === "function") await onSubmit(data);
      setSent(true);
      e.currentTarget.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container-responsive section-spacing py-4 sm:py-8 lg:py-12 ${className}`}>
      <section className="animate-fade-up">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-3 max-w-prose text-gray-600">{subtitle}</p>

        {/* NOTE: items-stretch + h-full on both cards gives equal heights */}
        <div className="mt-6 grid gap-8 lg:grid-cols-2 items-stretch">
          {/* LEFT: form, now inside a card and full-height */}
          <div className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 h-full flex flex-col">
            {sent ? (
              <div className="rounded-xl bg-green-50 p-4 text-green-800">
                Thanks! We’ll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="grid gap-4 flex-1">
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="rounded-xl border p-3"
                    aria-label="Your name"
                  />
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email"
                    className="rounded-xl border p-3"
                    aria-label="Email"
                  />
                  <input
                    name="phone"
                    placeholder="Phone (optional)"
                    className="rounded-xl border p-3"
                    aria-label="Phone (optional)"
                  />
                  <textarea
                    name="message"
                    required
                    placeholder="Message"
                    rows="4"
                    className="rounded-xl border p-3"
                    aria-label="Message"
                  />
                </div>
                <button
                  className="mt-4 rounded-xl bg-sky-600 px-5 py-3 text-white hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? "Sending…" : "Send"}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: details card, force full-height to match */}
          <aside className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 h-full">
            <h3 className="text-xl font-semibold text-gray-900">Contact Details</h3>

            <ul className="mt-4 space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p>5560 W Broad St, Columbus, Ohio, 43228</p>
                  <a
                    href="https://maps.google.com/?q=5560+W+Broad+St,+Columbus,+Ohio+43228"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 text-sm hover:underline"
                  >
                    Open in Maps
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:Office@mrsudzcarwash.com" className="hover:underline">
                    Office@mrsudzcarwash.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+16147073202" className="hover:underline">
                    +1 (614) 707-3202
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p>Mon - Sat: 8AM - 6PM</p>
                  <p>Sunday: 9AM - 4PM</p>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-sm font-medium text-gray-900 mb-3">Follow us</p>
              <div className="flex items-center gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 hover:bg-gray-50 transition-colors"
                >
                  <Instagram className="h-5 w-5 text-sky-700" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 hover:bg-gray-50 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-sky-700" />
                  <span className="text-sm">Facebook</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
