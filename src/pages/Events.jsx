
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'react-feather';

const events = [
  // {
  //   id: 1,
  //   title: 'Monaco Yacht Show',
  //   date: '2024-09-25',
  //   location: 'Monaco',
  //   description: 'World premiere of the Norseman M12 with expedition captains sharing high‑latitude stories.',
  //   type: 'Exhibition',
  //   status: 'Upcoming',
  // },
  {
    id: 2,
    title: 'Arctic Exploration Forum',
    date: '2024-11-15',
    location: 'Tromsø, Norway',
    description: 'Technical forum on polar cruising, ice navigation and expedition yacht design.',
    type: 'Forum',
    status: 'Open for Registration',
  },
  {
    id: 3,
    title: 'Cannes Yachting Festival',
    date: '2024-09-12',
    location: 'Cannes, France',
    description: 'Mediterranean sea trials of the Norseman A520 along the Côte d’Azur.',
    type: 'Exhibition',
    status: 'Past Event',
  },
];

const Events = () => {
  const upcomingEvents = events.filter((e) => e.status !== 'Past Event');

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair text-5xl font-bold text-slate-900 mb-4"
          >
            Global Events
          </motion.h1>
          <p className="font-inter text-slate-600 max-w-2xl mx-auto">
            Meet Norseman Yachts at key maritime hubs around the world. From major yacht shows to
            technical forums, our team will be on hand to share insights into expedition and long‑range
            cruising.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Event Header */}
              <div className="bg-slate-900 text-white p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block bg-amber-100 text-slate-900 px-3 py-1 rounded-full text-sm font-inter font-bold mb-2">
                      {event.type}
                    </span>
                    <h3 className="font-playfair text-2xl font-bold">{event.title}</h3>
                  </div>
                  <span className="font-inter text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {event.status}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-slate-600">
                    <Calendar size={18} className="mr-3 text-amber-100" />
                    <span className="font-inter">{event.date}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <MapPin size={18} className="mr-3 text-amber-100" />
                    <span className="font-inter">{event.location}</span>
                  </div>
                </div>

                <p className="font-inter text-slate-700 mb-6">{event.description}</p>

                {/* CTA */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-slate-900 text-white py-3 text-center hover:bg-slate-800 transition-colors font-inter font-medium">
                    Request a Meeting
                  </button>
                  <button className="px-6 py-3 border border-slate-300 hover:border-amber-100 hover:text-amber-100 transition-colors font-inter">
                    Add to Calendar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Past Events */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h2 className="font-playfair text-3xl font-bold text-slate-900 mb-8 text-center">
            Highlights from Recent Events
          </h2>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 font-inter font-medium text-slate-700">Event</th>
                    <th className="text-left py-3 font-inter font-medium text-slate-700">Date</th>
                    <th className="text-left py-3 font-inter font-medium text-slate-700">Location</th>
                    <th className="text-left py-3 font-inter font-medium text-slate-700">Summary</th>
                  </tr>
                </thead>
                <tbody>
                  {events
                    .filter((e) => e.status === 'Past Event')
                    .map((event) => (
                      <tr key={event.id} className="border-b border-slate-100">
                        <td className="py-4 font-inter font-medium">{event.title}</td>
                        <td className="py-4 font-inter text-slate-600">{event.date}</td>
                        <td className="py-4 font-inter text-slate-600">{event.location}</td>
                        <td className="py-4 font-inter text-slate-600">{event.description}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-900 text-white p-8 md:p-12 rounded-lg"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-playfair text-3xl font-bold mb-4">Stay Informed</h3>
            <p className="font-inter text-white/80 mb-8">
              Subscribe to receive invitations to upcoming shows, private sea trials and expedition
              briefings from the Norseman team.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-none bg-white/10 border border-white/20 text-white placeholder-white/50 font-inter focus:outline-none focus:border-amber-100"
              />
              <button
                type="submit"
                className="bg-amber-100 text-slate-900 px-6 py-3 font-inter font-medium hover:bg-amber-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
