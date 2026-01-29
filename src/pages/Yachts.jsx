import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Maximize2, Navigation } from 'react-feather';
import { FaUsers } from 'react-icons/fa';

const yachts = [
  {
    id: 1,
    code: 'M12',
    name: 'NORSEMAN M12',
    series: 'Near‑shore Family Cruiser',
    length: '12 m / 39 ft',
    description:
      'A 12‑metre coastal leisure yacht created for family life and relaxed weekend escapes. Currently under development, M12 explores a hybrid concept: silent electric drive for slow, quiet cruising, with an auxiliary outboard petrol engine available whenever higher speed is desired.',
    image: `${process.env.PUBLIC_URL}/Assets/Yachts/M12/M12 Profile-2A 20260120.png`,
    specs: {
      length: '12 m / 39 ft',
      guests: 'Family‑focused cockpit and saloon for long weekends',
      range: 'Near‑shore and coastal cruising',
      displacement: 'TBD',
      engine:
        'In development: hybrid concept with electric drive for quiet cruising and auxiliary outboard petrol engine for higher speed.',
    },
    features: [
      'Compact 12‑metre near‑shore family cruiser',
      'Weekender layout focused on family life and social spaces',
      'Planned hybrid concept with silent electric cruising mode',
      'Outboard petrol engine for spirited runs when extra speed is needed',
    ],
  },
  {
    id: 2,
    code: 'A520',
    name: 'NORSEMAN A520',
    series: 'Alaska Series Coastal Cruiser',
    length: '16.20 m / 53’1”',
    description:
      'A classic semi‑planing Alaska series motor yacht that blends the comfort of a luxury cruiser with the capability to run above 20 knots.',
    image: `${process.env.PUBLIC_URL}/Assets/Yachts/A520/curising.PNG`,
    specs: {
      beam: '4.90 m / 16’1”',
      draft: '1.42 m / 4’8”',
      displacement: '22.60 tons / 49,720 lbs',
      fuel: '4,000 L / 1,056 gals',
      water: '680 L / 179 gals',
      holding: '322 L / 85 gals',
      engine:
        'Twin CUMMINS® QSB 6.7 marine diesels – 480 HP (standard) or 550 HP (optional)',
      thrusters: 'LEWMAR® 185TT bow & stern thrusters (12V DC electric)',
      generator: 'ONAN® Marine 13.5 kW / 60 Hz with sound shield',
      aircon: 'Three 16k BTU reverse‑cycle marine A/C units',
    },
    features: [
      'Semi‑planing hull · 20+ knots capability',
      'Classic Alaska series profile with covered side decks',
      'Warm timber interior with panoramic saloon',
      'Well‑proven hull with hundreds of Norseman yachts worldwide',
    ],
  },
  {
    id: 3,
    code: 'SL950',
    name: 'NORSEMAN SL950',
    series: 'Super Long‑range Line',
    length: '29m / 95ft',
    description:
      'A blue‑water super long‑range yacht focused on quiet comfort and highly customisable deck spaces for extended voyages.',
    image: `${process.env.PUBLIC_URL}/Assets/Yachts/SL950/SL 950.png`,
    specs: {
      length: "95' 0\"",
      beam: "21' 0\"",
      draft: "4'10\" (with propeller tunnels)",
      displacement: '180,000 lbs',
      fuel: '2,000 gals',
      water: '400 gals',
      holding: '200 gals',
      engine:
        'Standard: Twin 1900 HP CATERPILLAR® marine diesel engines with ZF® gear box. Optional: Twin 1920 HP MTU® 12V2000M marine diesel engines with ZF® gear box.',
      thrusters: 'TRAC® hydraulic bow and stern thrusters',
      stabilizers: 'TRAC® hydraulic stabilizer fins',
      generator: 'Two ONAN® Quiet Diesel™ 32 kW / 60 Hz marine diesel generators',
      guests: 'Up to 10 guests',
      crew: '4–5 crew',
      range: 'Long‑range ocean passage capable',
    },
    features: [
      'Tri‑deck layout with panoramic owner’s suite',
      'Fin stabilisers plus gyro for exceptional comfort at sea and at anchor',
      'Sea‑level beach club and open‑air cinema options',
      'Energy‑conscious systems for extended time off‑grid',
    ],
  },
];

const getM12Images = () => {
  const base = `${process.env.PUBLIC_URL}/Assets/Yachts/M12`;
  return [
    `${base}/M12 Profile-2A 20260120.png`,
    `${base}/M12 Galley 20260120.jpg`,
    `${base}/M12 Floor Plan 20251228.jpg`,
  ];
};

const getA520Images = () => {
  const base = `${process.env.PUBLIC_URL}/Assets/Yachts/A520`;
  return [
    `${base}/curising.PNG`,
    `${base}/aft deck.PNG`,
    `${base}/for deck.PNG`,
    `${base}/flybridge.PNG`,
    `${base}/Salon.PNG`,
    `${base}/Cabin.PNG`,
  ];
};

const getSL950Images = () => {
  const base = `${process.env.PUBLIC_URL}/Assets/Yachts/SL950`;
  return [
    `${base}/SL 950.png`, // SL 950
    `${base}/main salon.PNG`, // main salon
    `${base}/helm station.PNG`, // helm station
    `${base}/aft salon.PNG`, // aft salon
    `${base}/dock station.PNG`, // dock station
    `${base}/far dock view.PNG`, // far dock view
    `${base}/owner cabin.PNG`, // owner cabin
    `${base}/wheel house seating.PNG`, // wheel house seating
  ];
};

const Yachts = () => {
  const [selectedYacht, setSelectedYacht] = useState(null);
  const [activeM12Image, setActiveM12Image] = useState(0);
  const [activeA520Image, setActiveA520Image] = useState(0);
  const [activeSL950Image, setActiveSL950Image] = useState(0);
  const [isM12Hovered, setIsM12Hovered] = useState(false);
  const [isA520Hovered, setIsA520Hovered] = useState(false);
  const [isSL950Hovered, setIsSL950Hovered] = useState(false);


  const handleViewSpecs = (yacht) => {
    setSelectedYacht(yacht);
    if (yacht.code === 'M12') {
      setActiveM12Image(0);
    }
    if (yacht.code === 'A520') {
      setActiveA520Image(0);
    }
    if (yacht.code === 'SL950') {
      setActiveSL950Image(0);
    }
  };

  // Auto-play for M12 gallery
  useEffect(() => {
    if (selectedYacht?.code !== 'M12' || isM12Hovered) return;

    const images = getM12Images();
    const interval = setInterval(() => {
      setActiveM12Image((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedYacht, isM12Hovered]);

  // Auto-play for A520 gallery
  useEffect(() => {
    if (selectedYacht?.code !== 'A520' || isA520Hovered) return;

    const images = getA520Images();
    const interval = setInterval(() => {
      setActiveA520Image((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedYacht, isA520Hovered]);

  // Auto-play for SL950 gallery
  useEffect(() => {
    if (selectedYacht?.code !== 'SL950' || isSL950Hovered) return;

    const images = getSL950Images();
    const interval = setInterval(() => {
      setActiveSL950Image((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedYacht, isSL950Hovered]);

  const renderSpecs = (yacht) => {
    if (!yacht?.specs) return null;
    const { length, beam, draft, displacement, fuel, water, holding, guests, crew, range } =
      yacht.specs;

    return (
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 font-inter text-xs md:text-sm mb-8">
        {length && (
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] mb-1">Length Overall</p>
            <p className="text-slate-100">{length}</p>
          </div>
        )}
        {beam && (
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] mb-1">Beam</p>
            <p className="text-slate-100">{beam}</p>
          </div>
        )}
        {draft && (
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] mb-1">Draft</p>
            <p className="text-slate-100">{draft}</p>
          </div>
        )}
        {displacement && (
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] mb-1">Displacement</p>
            <p className="text-slate-100">{displacement}</p>
          </div>
        )}
        {fuel && (
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] mb-1">Fuel Capacity</p>
            <p className="text-slate-100">{fuel}</p>
          </div>
        )}
        {water && (
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] mb-1">Water Capacity</p>
            <p className="text-slate-100">{water}</p>
          </div>
        )}
        {holding && (
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] mb-1">Holding Tank</p>
            <p className="text-slate-100">{holding}</p>
          </div>
        )}
        {guests && (
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] mb-1">Guests</p>
            <p className="text-slate-100">{guests}</p>
          </div>
        )}
        {crew && (
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] mb-1">Crew</p>
            <p className="text-slate-100">{crew}</p>
          </div>
        )}
        {range && (
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] mb-1">Range</p>
            <p className="text-slate-100">{range}</p>
          </div>
        )}
      </div>
    );
  };

  const renderDetailImage = () => {
    if (!selectedYacht) return null;

    // M12: show image gallery
    if (selectedYacht.code === 'M12') {
      const images = getM12Images();

      return (
        <div
          className="lg:w-1/2 relative flex items-center justify-center bg-ocean-navy-soft/60 py-4"
          onMouseEnter={() => setIsM12Hovered(true)}
          onMouseLeave={() => setIsM12Hovered(false)}
        >
          <img
            src={images[activeM12Image]}
            alt={`${selectedYacht.name} view ${activeM12Image + 1}`}
            className="max-w-full max-h-[520px] object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-navy/60 via-transparent to-transparent" />

          {/* Dots navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveM12Image(index)}
                className={`w-2.5 h-2.5 rounded-full border border-white/50 transition-colors ${
                  index === activeM12Image ? 'bg-ocean-gold border-ocean-gold' : 'bg-white/30'
                }`}
                aria-label={`Show M12 image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      );
    }

    // A520: show image gallery
    if (selectedYacht.code === 'A520') {
      const images = getA520Images();

      return (
        <div
          className="lg:w-1/2 relative flex items-center justify-center bg-ocean-navy-soft/60 py-4"
          onMouseEnter={() => setIsA520Hovered(true)}
          onMouseLeave={() => setIsA520Hovered(false)}
        >
          <img
            src={images[activeA520Image]}
            alt={`${selectedYacht.name} view ${activeA520Image + 1}`}
            className="max-w-full max-h-[520px] object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-navy/60 via-transparent to-transparent" />

          {/* Dots navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveA520Image(index)}
                className={`w-2.5 h-2.5 rounded-full border border-white/50 transition-colors ${
                  index === activeA520Image ? 'bg-ocean-gold border-ocean-gold' : 'bg-white/30'
                }`}
                aria-label={`Show A520 image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      );
    }

    // SL950: show image gallery
    if (selectedYacht.code === 'SL950') {
      const images = getSL950Images();

      return (
        <div
          className="lg:w-1/2 relative flex items-center justify-center bg-ocean-navy-soft/60 py-4"
          onMouseEnter={() => setIsSL950Hovered(true)}
          onMouseLeave={() => setIsSL950Hovered(false)}
        >
          <img
            src={images[activeSL950Image]}
            alt={`${selectedYacht.name} view ${activeSL950Image + 1}`}
            className="max-w-full max-h-[520px] object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-navy/60 via-transparent to-transparent" />

          {/* Dots navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSL950Image(index)}
                className={`w-2.5 h-2.5 rounded-full border border-white/50 transition-colors ${
                  index === activeSL950Image ? 'bg-ocean-gold border-ocean-gold' : 'bg-white/30'
                }`}
                aria-label={`Show SL950 image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      );
    }

    // Default: single image
    return (
      <div className="lg:w-1/2 relative h-72 md:h-80 lg:h-auto">
        <img
          src={selectedYacht.image}
          alt={selectedYacht.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-navy/60 via-transparent to-transparent" />
      </div>
    );
  };

  return (
    <div className="pt-20 min-h-screen bg-ocean-navy-soft">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-5xl font-bold text-white mb-4">
            NORSEMAN FLEET
          </h1>
          <p className="font-inter text-slate-200/80 max-w-2xl mx-auto">
            M12, A520 and SL950 form the inaugural Norseman fleet – covering polar expeditions, coastal
            adventure cruising and super long‑range blue‑water passages.
          </p>
        </motion.div>

        {/* Yacht Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yachts.map((yacht, index) => (
            <motion.div
              key={yacht.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Yacht Image */}
              <div
                className={
                  yacht.code === 'A520' || yacht.code === 'SL950'
                    ? 'relative overflow-hidden bg-ocean-navy-soft'
                    : 'relative h-64 overflow-hidden'
                }
              >
                <img
                  src={yacht.image}
                  alt={yacht.name}
                  className={
                    yacht.code === 'A520' || yacht.code === 'SL950'
                      ? 'w-full h-auto object-contain transition-transform duration-500'
                      : 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  }
                />
                <div className="absolute top-4 left-4 bg-ocean-navy text-slate-100 px-3 py-1 font-inter text-[11px] tracking-[0.22em] uppercase">
                  {yacht.code}
                </div>
              </div>

              {/* Yacht Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-slate-900">
                      {yacht.name}
                    </h3>
                    <p className="font-inter text-xs tracking-[0.26em] uppercase text-ocean-muted">
                      {yacht.series}
                    </p>
                    <p className="font-inter text-slate-600 mt-1">{yacht.length}</p>
                  </div>
                  <button className="text-slate-400 hover:text-ocean-gold transition-colors">
                    <Maximize2 size={20} />
                  </button>
                </div>

                <p className="font-inter text-slate-600 text-sm mb-4">
                  {yacht.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-inter font-medium text-slate-900 mb-2 text-sm tracking-[0.16em] uppercase">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {yacht.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button
                    className="flex-1 bg-ocean-navy text-white py-3 text-center hover:bg-ocean-navy-soft transition-colors font-inter font-medium tracking-[0.18em] text-xs uppercase"
                    onClick={() => handleViewSpecs(yacht)}
                  >
                    VIEW DETAILS
                  </button>
                  <button className="px-4 py-3 border border-slate-300/60 text-slate-500 hover:border-ocean-gold hover:text-ocean-gold transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Yacht Detail */}
        {selectedYacht && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 bg-ocean-navy text-slate-100 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Text side */}
              <div className="lg:w-1/2 p-8 md:p-10 lg:p-12">
                <p className="font-inter text-[11px] tracking-[0.3em] uppercase text-ocean-gold mb-3">
                  {selectedYacht.code} · {selectedYacht.series}
                </p>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
                  {selectedYacht.name}
                </h2>
                <p className="font-inter text-sm md:text-base text-slate-100/80 mb-6">
                  {selectedYacht.description}
                </p>

                {renderSpecs(selectedYacht)}

                {selectedYacht.specs?.engine && (
                  <div className="font-inter text-xs md:text-sm text-slate-200/90 space-y-1 mb-6">
                    <p className="uppercase tracking-[0.22em] text-slate-400 mb-1">Propulsion</p>
                    <p>{selectedYacht.specs.engine}</p>
                    {selectedYacht.specs.thrusters && <p>{selectedYacht.specs.thrusters}</p>}
                    {selectedYacht.specs.stabilizers && <p>{selectedYacht.specs.stabilizers}</p>}
                    {selectedYacht.specs.generator && <p>{selectedYacht.specs.generator}</p>}
                    {selectedYacht.specs.aircon && <p>{selectedYacht.specs.aircon}</p>}
                  </div>
                )}

                {selectedYacht.code === 'A520' && (
                  <div className="mb-6">
                    <a
                      href={`${process.env.PUBLIC_URL}/Assets/Yachts/A520/Norseman A520 Catalog.pdf`}
                      className="font-inter text-xs md:text-sm underline decoration-ocean-gold decoration-2 underline-offset-4 text-ocean-gold hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download detailed A520 catalog (PDF)
                    </a>
                  </div>
                )}

                {selectedYacht.code === 'SL950' && (
                  <div className="mb-6">
                    <a
                      href={`${process.env.PUBLIC_URL}/Assets/Yachts/SL950/Norseman SL950  Catalog.pdf`}
                      className="font-inter text-xs md:text-sm underline decoration-ocean-gold decoration-2 underline-offset-4 text-ocean-gold hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download detailed SL950 catalog (PDF)
                    </a>
                  </div>
                )}


                <button
                  onClick={() => setSelectedYacht(null)}
                  className="font-inter text-xs tracking-[0.25em] uppercase text-slate-300 hover:text-ocean-gold transition-colors"
                >
                  Close Detail
                </button>
              </div>

              {/* Image side */}
              {renderDetailImage()}
            </div>
          </motion.div>
        )}

        {/* Series Overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-ocean-navy text-white p-8"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold mb-6">Three Lines. Every Ocean.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Navigation size={24} />,
                  title: 'Inshore Line',
                  desc: 'Designed for near‑shore cruising, sheltered waters and relaxed family day trips.',
                },
                {
                  icon: <Maximize2 size={24} />,
                  title: 'Offshore Line',
                  desc: 'Optimised for offshore cruising and activities – from island hopping to weekend and extended holiday escapes.',
                },
                {
                  icon: <FaUsers size={24} />,
                  title: 'Long‑range Line',
                  desc: 'Long‑range platforms engineered for high self‑sufficiency and truly comfortable life at sea for weeks at a time.',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-ocean-navy-soft rounded-full mb-4">
                    <div className="text-ocean-gold">{item.icon}</div>
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-2">{item.title}</h3>
                  <p className="font-inter text-slate-100/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Yachts;
