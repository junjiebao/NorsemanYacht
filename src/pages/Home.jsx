




import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-feather';

const Home = () => {
  return (
    <div className="min-h-screen bg-ocean-navy">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ocean-navy">
        {/* Background image */}
        <div className="absolute inset-0 ocean-hero-bg">
          <img
            src={`${process.env.PUBLIC_URL}/Assets/Yachts/SL950/side view.PNG`}
            alt="Norseman SL950 silhouette"
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-navy/70 via-[#1a2942]/60 to-[#0a1628]/70" />
          <div className="absolute inset-0 ocean-hero-sparkle" />
        </div>



        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <p className="font-inter text-[11px] md:text-xs tracking-[0.35em] uppercase text-ocean-gold/80 mb-6 animate-fade-in">
            redefining Yachting 
          </p>

          <h1 className="font-playfair text-5xl md:text-7xl lg:text-[80px] font-bold text-white leading-tight mb-6 animate-fade-in-up">
            BEYOND THE <span className="text-ocean-gold italic">HORIZON</span>
          </h1>

          <p className="font-inter text-base md:text-lg text-slate-100/80 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            Rooted in Alaska waters with contemporary design, NORSEMAN YACHTS creates yachts that turn every horizon into a livable frontier – from quiet inshore weekends with family to offshore passages and true long‑range exploration.
          </p>

          <div className="animate-fade-in animation-delay-300">
            <Link
              to="/yachts"
              className="inline-flex items-center gap-3 px-10 py-3 border border-white/40 bg-white/5 text-white font-inter text-[11px] md:text-xs tracking-[0.32em] uppercase hover:bg-white/10 hover:border-white/70 transition-colors"
            >
              DISCOVER FLEET <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="w-7 h-11 border border-white/40 rounded-full flex justify-center items-start pt-1">
            <div className="w-1 h-3 bg-white/80 rounded-full" />
          </div>
        </div>
      </section>

      {/* Intro Section - The Art of Ocean Living */}
      <section className="bg-white py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              THE ART OF <span className="text-ocean-gold">YACHTING</span>
            </h2>
            <p className="font-inter text-slate-600 mb-10">
              Each Norseman model is drawn around a different way of living on the water: inshore family time close to home, offshore cruising and island hopping, and long‑range voyages where the yacht becomes a self‑sufficient home at sea.
            </p>
            <Link
              to="/yachts"
              className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.25em] uppercase text-slate-900 border-b border-slate-900 hover:gap-3 hover:text-ocean-gold hover:border-ocean-gold transition-all"
            >
              EXPLORE THE FLEET
              <span className="text-[14px]">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Interior / Comfort Section */}
      <section className="relative bg-ocean-navy-soft py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            {/* Text panel */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="font-inter text-[11px] tracking-[0.3em] uppercase text-ocean-gold mb-4">
                INTERIOR DESIGN
              </p>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                CRAFTED FOR COMFORT
              </h3>
              <p className="font-inter text-sm md:text-base text-slate-100/80 mb-8 max-w-lg">
                Every inch of the interior is shaped around time spent on board – practical, light‑filled spaces for family weekends, protected lounges for offshore passages, and calm cabins that still feel like home after weeks of long‑range cruising.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {['SMART CONTROL', 'PANORAMA VIEW', 'CUSTOM FINISH'].map((label) => (
                  <button
                    key={label}
                    className="px-4 py-2 rounded-full border border-white/40 text-[11px] tracking-[0.2em] uppercase font-inter text-slate-100 hover:bg-white/10 transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Image panel */}
            <div className="lg:w-1/2">
              <div className="relative w-full h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden rounded-3xl shadow-2xl bg-ocean-navy-soft">
                <img
                  src={`${process.env.PUBLIC_URL}/Assets/Yachts/SL950/far dock view.PNG`}
                  alt="Yacht interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-navy-soft/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
