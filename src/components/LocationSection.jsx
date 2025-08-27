// src/components/LocationSection.jsx
import { MapPin, Clock } from "lucide-react";

export default function LocationSection() {
  const mapSrc =
    "https://www.google.com/maps?q=5560+W+Broad+St,+Columbus,+Ohio+43228&output=embed";

  return (
    <section className="mt-12 rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Address + Hours */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Visit Our Columbus Location
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Our Address</p>
                <p className="text-gray-600">
                  5560 W Broad St
                  <br />
                  Columbus, Ohio 43228
                </p>
                <a
                  href="https://www.google.com/maps?q=5560+W+Broad+St,+Columbus,+Ohio+43228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sky-700 hover:text-sky-800 text-sm font-medium"
                >
                  Get directions →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Business Hours</p>
                <p className="text-gray-600">
                  Mon–Sat: 8:00 AM – 6:00 PM
                  <br />
                  Sun: 9:00 AM – 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Embedded Google Map */}
        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
          <div className="relative h-64 sm:h-80 lg:h-[22rem]">
            <iframe
              title="Mr-Sudz - 5560 W Broad St, Columbus, Ohio 43228"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
