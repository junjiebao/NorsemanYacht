
import { motion } from 'framer-motion';
import { Globe, Phone, Mail } from 'react-feather';

const regions = [
  {
    name: 'Europe',
    locations: [
      { city: 'Bergen', country: 'Norway', role: 'Design & Build Headquarters' },
      { city: 'Hamburg', country: 'Germany', role: 'Technical Development Center' },
      { city: 'Barcelona', country: 'Spain', role: 'Mediterranean Service Hub' },
    ],
  },
  {
    name: 'Americas',
    locations: [
      { city: 'Miami', country: 'USA', role: 'Americas Headquarters' },
      { city: 'Vancouver', country: 'Canada', role: 'Pacific Northwest Office' },
      { city: 'Buenos Aires', country: 'Argentina', role: 'South America Representation' },
    ],
  },
  {
    name: 'Asia Pacific',
    locations: [
      { city: 'Sydney', country: 'Australia', role: 'APAC Headquarters' },
      { city: 'Singapore', country: 'Singapore', role: 'Southeast Asia Hub' },
      { city: 'Tokyo', country: 'Japan', role: 'Japan Representation' },
    ],
  },
];

const Network = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero with Map Background */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          }}
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-6xl font-bold text-slate-900 mb-6"
          >
            Global Support Network
          </motion.h1>
          <p className="font-inter text-xl text-slate-600 max-w-2xl mx-auto">
            Wherever you choose to cruise, Norseman owners are supported by specialists who understand the
            demands of true expedition and long‑range yachting.
          </p>
        </div>
      </section>

      {/* Regional Network */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-slate-900 mb-12 text-center">
              Selected Partners & Service Locations
            </h2>

            {regions.map((region, regionIndex) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: regionIndex * 0.2 }}
                className="mb-16 last:mb-0"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Globe className="text-slate-900" size={24} />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-slate-900">{region.name}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {region.locations.map((location, locIndex) => (
                    <div
                      key={locIndex}
                      className="border border-slate-200 p-6 hover:border-amber-100 transition-colors group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-playfair text-xl font-bold text-slate-900 group-hover:text-amber-100 transition-colors">
                            {location.city}
                          </h4>
                          <p className="font-inter text-slate-600">{location.country}</p>
                        </div>
                        <Globe
                          className="text-slate-400 group-hover:text-amber-100 transition-colors"
                          size={20}
                        />
                      </div>
                      <p className="font-inter text-slate-700 mb-4">{location.role}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-slate-600 text-sm">
                          <Phone size={14} className="mr-2" />
                          <span>+47 55 30 00 00</span>
                        </div>
                        <div className="flex items-center text-slate-600 text-sm">
                          <Mail size={14} className="mr-2" />
                          <span>contact.{location.city.toLowerCase()}@norsemanyachts.com</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold mb-8">
              What We Expect from Our Partners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Technical Expertise',
                  desc: 'Minimum 15 years of marine industry experience and a deep understanding of expedition cruising needs.',
                },
                {
                  title: 'Service Commitment',
                  desc: '24/7 support whenever possible, ensuring assistance in key cruising regions around the world.',
                },
                {
                  title: 'Shared Values',
                  desc: 'A commitment to safety, seamanship and responsible, sustainable yachting.',
                },
              ].map((item, index) => (
                <div key={index} className="p-6">
                  <div className="text-3xl font-bold text-amber-100 mb-4">0{index + 1}</div>
                  <h3 className="font-playfair text-xl font-bold mb-3">{item.title}</h3>
                  <p className="font-inter text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold text-slate-900 mb-6">
              Become a Norseman Partner
            </h2>
            <p className="font-inter text-slate-600 mb-8">
              If you operate a high‑quality service facility or brokerage and share our vision for
              reliable, long‑range cruising, we would be pleased to explore partnership opportunities.
            </p>
            <a
              href="mailto:partnership@norsemanyachts.com"
              className="inline-block bg-slate-900 text-white px-8 py-3 font-inter font-medium hover:bg-slate-800 transition-colors"
            >
              Submit Partnership Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Network;
