import React from 'react';
import { motion } from 'framer-motion';
import { Timeline, TimelineItem } from '../components/Timeline';
import { Target, Wind, Award } from 'react-feather';

const Story = () => {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-6xl font-bold text-white mb-6"
          >
            A HERITAGE OF OCEAN EXPLORATION
          </motion.h1>
          <p className="font-inter text-xl text-white/90 max-w-3xl mx-auto">
            Since 1980, Norseman Yachts has been crafting ocean-going vessels that combine blue-water
            capability with timeless design and meticulous engineering.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 font-inter text-slate-700 leading-relaxed">
            <p>
              Norseman Yachts commenced its operation in the United States in 1980. With a rich heritage in
              custom yacht building, the brand has developed some of the finest bespoke yachts in its class.
              Over the past few decades, with hundreds of satisfied Norseman owners cruising the world,
              Norseman Yachts continues its pursuit of excellence in the design, engineering and construction
              of true ocean-going vessels.
            </p>
            <p>
              The Alaska series are classic motor yachts with semi-planing hulls capable of travelling at
              speeds above 20 knots. These beautiful classics are built with fine materials and craftsmanship
              on par with top luxury yachts. Today, there are more than 200 Norseman yachts worldwide, each
              one semi-custom built according to the owner’s taste and individual requirements.
            </p>
            <p>
              From earlier sailing yachts to today’s new motor yachts, every Norseman is a testament to our
              build quality. Many of the older vessels remain in excellent condition, retain strong market
              value and serve as living proof of our commitment to long-lasting construction.
            </p>
          </div>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-4xl font-bold text-slate-900 mb-12 text-center">
              Design Philosophy: Functional Minimalism
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Target className="text-ocean-gold" size={32} strokeWidth={1.8} />,
                  title: 'Pure Function',
                  desc: 'Every line and surface must serve a purpose at sea.',
                },
                {
                  icon: <Wind className="text-ocean-gold" size={32} strokeWidth={1.8} />,
                  title: 'Harmony with Nature',
                  desc: 'Minimised environmental footprint with maximised efficiency.',
                },
                {
                  icon: <Award className="text-ocean-gold" size={32} strokeWidth={1.8} />,
                  title: 'Crafted Excellence',
                  desc: 'Details engineered and hand-finished to withstand decades offshore.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="font-inter text-slate-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 text-white p-8 md:p-12 my-16"
            >
              <p className="font-playfair text-2xl italic text-center">
                "We do not build objects of luxury for their own sake. We build tools that will carry you
                safely to any corner of the world. True luxury is the freedom to go anywhere."
              </p>
              <p className="font-inter text-amber-100 text-center mt-4">
                — Sihan Chen, Founder
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-slate-900 mb-12 text-center">
            Our Journey
          </h2>

          <Timeline>
            <TimelineItem year="1980" title="Foundations in the United States">
              Norseman Yachts begins operations in the USA, focusing on robust blue-water sailing yachts built
              to go far beyond the horizon.
            </TimelineItem>
            <TimelineItem year="1990s" title="Custom Yacht Heritage">
              The brand earns a reputation for finely crafted semi-custom yachts, tailored around each owner’s
              cruising aspirations.
            </TimelineItem>
            <TimelineItem year="2000s" title="The Alaska Motor Yacht Series">
              Introduction of the Alaska semi-planing motor yacht series, combining classic lines with 20-knot
              performance and refined interiors.
            </TimelineItem>
            <TimelineItem year="2010s" title="Global Fleet">
              More than 200 Norseman yachts cruise across the globe, many of them still in excellent condition
              and highly sought after on the pre-owned market.
            </TimelineItem>
            <TimelineItem year="Today" title="Future-ready Ocean Vessels">
              Norseman continues to evolve its Eco-firendly, high-performance, self‑sufficient and long-range platforms, uniting modern technology
              with proven ocean-going hulls.
            </TimelineItem>
          </Timeline>
        </div>
      </section>

      {/* Craftsmanship Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="Assets\Branding\Hull testing.PNG"
                alt="Craftsmanship"
                className="w-full h-auto shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-playfair text-4xl font-bold text-slate-900 mb-6">
                Craftsmanship That Endures
              </h2>
              <p className="font-inter text-slate-600 mb-6">
                Every Norseman yacht is the culmination of generations of craftsmanship and cutting-edge engineering. Our process unites time-honored techniques with scientific innovation—from computational fluid dynamics that perfect hull efficiency to advanced materials that enhance durability and sustainability. Each yacht undergoes meticulous lamination, engineering, and handcrafted joinery, resulting in vessels that are both technological marvels and works of art.
              </p>
              <ul className="space-y-3 font-inter text-slate-700">
                {[
                  'An average of 18,000 man-hours invested in each yacht',
                  'Timber sourced from responsibly managed forests',
                  'Hand-polished stainless steel hardware throughout',
                  'Systems integration tailored to each owner’s cruising profile',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-100 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
