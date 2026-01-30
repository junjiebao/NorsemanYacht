
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, Send } from 'react-feather';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Thank you for your enquiry. Our team will respond within 24 hours.');
  };

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
            Start Your Voyage
          </motion.h1>
          <p className="font-inter text-slate-600 max-w-2xl mx-auto">
            Whether you are exploring a specific model, planning a new build or arranging a sea trial, the
            Norseman team is ready to support your next step.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-8">
                Global Headquarters
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <MapPin className="text-amber-100" size={20} />,
                    title: 'Address',
                    content: 'Nordnesveien 50, 5008 Bergen, Norway',
                    link: 'https://goo.gl/maps/your-location',
                  },
                  {
                    icon: <Phone className="text-amber-100" size={20} />,
                    title: 'Telephone',
                    content: '+47 55 30 00 00',
                    link: 'tel:+4755300000',
                  },
                  {
                    icon: <Mail className="text-amber-100" size={20} />,
                    title: 'Email',
                    content: 'explore@norsemanyachts.com',
                    link: 'mailto:explore@norsemanyachts.com',
                  },
                  {
                    icon: <Clock className="text-amber-100" size={20} />,
                    title: 'Office Hours',
                    content: 'Monday–Friday 08:00–18:00 (CET)',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-inter font-medium text-slate-900 mb-1">{item.title}</h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="font-inter text-slate-600 hover:text-amber-100 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="font-inter text-slate-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Regional Offices */}
              <div className="mt-12">
                <h3 className="font-playfair text-xl font-bold text-slate-900 mb-4">
                  Regional Offices
                </h3>
                <div className="space-y-3">
                  {[
                    { city: 'Miami', phone: '+1 305 123 4567' },
                    { city: 'Sydney', phone: '+61 2 9876 5432' },
                    { city: 'Singapore', phone: '+65 6789 0123' },
                  ].map((office, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-slate-100 pb-3"
                    >
                      <span className="font-inter font-medium text-slate-900">{office.city}</span>
                      <a
                        href={`tel:${office.phone}`}
                        className="font-inter text-slate-600 text-sm hover:text-amber-100"
                      >
                        {office.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="font-playfair text-2xl font-bold text-slate-900 mb-8">
                Send an Enquiry
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      {...register('lastName', { required: 'Please enter your last name.' })}
                      className={`w-full px-4 py-3 border ${
                        errors.lastName ? 'border-red-500' : 'border-slate-300'
                      } rounded-none font-inter focus:outline-none focus:border-amber-100`}
                      placeholder="e.g. Thorvaldsson"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-inter font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      {...register('firstName', { required: 'Please enter your first name.' })}
                      className={`w-full px-4 py-3 border ${
                        errors.firstName ? 'border-red-500' : 'border-slate-300'
                      } rounded-none font-inter focus:outline-none focus:border-amber-100`}
                      placeholder="e.g. Erik"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-inter font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Please enter your email address.',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address.',
                      },
                    })}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? 'border-red-500' : 'border-slate-300'
                    } rounded-none font-inter focus:outline-none focus:border-amber-100`}
                    placeholder="explorer@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-inter font-medium text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-slate-300 rounded-none font-inter focus:outline-none focus:border-amber-100"
                    placeholder="+47 123 45 678"
                  />
                </div>

                <div>
                  <label className="block font-inter font-medium text-slate-700 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    {...register('interest', { required: 'Please select an area of interest.' })}
                    className={`w-full px-4 py-3 border ${
                      errors.interest ? 'border-red-500' : 'border-slate-300'
                    } rounded-none font-inter focus:outline-none focus:border-amber-100 bg-white`}
                  >
                    <option value="">Please select</option>
                    <option value="a520">A520 Alaska Series</option>
                    <option value="sl950">SL950 Long‑range Series</option>
                    <option value="custom">Full Custom Project</option>
                    <option value="service">After‑sales & Support</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.interest && (
                    <p className="text-red-500 text-sm mt-1">{errors.interest.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-inter font-medium text-slate-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    {...register('message', {
                      required: 'Please tell us more about your plans.',
                      minLength: {
                        value: 20,
                        message:
                          'Please provide a bit more detail so we can connect you with the right specialist.',
                      },
                    })}
                    rows={6}
                    className={`w-full px-4 py-3 border ${
                      errors.message ? 'border-red-500' : 'border-slate-300'
                    } rounded-none font-inter focus:outline-none focus:border-amber-100`}
                    placeholder="Share your cruising experience, preferred regions, timeframe and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    {...register('newsletter')}
                    className="w-4 h-4 text-amber-100 border-slate-300 rounded focus:ring-amber-100"
                  />
                  <label htmlFor="newsletter" className="ml-2 font-inter text-slate-600 text-sm">
                    Subscribe to Norseman Yachts updates, including new models and expedition stories.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 font-inter font-medium tracking-wide hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  Send Enquiry <Send size={20} />
                </button>
              </form>

              <p className="font-inter text-slate-500 text-sm mt-6 text-center">
                We aim to respond to all enquiries within 24 hours. For urgent matters, please call our
                headquarters directly.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Response Time Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto text-center"
        >
          <div className="bg-slate-900 text-white p-8 rounded-lg">
            <h3 className="font-playfair text-2xl font-bold mb-4">Our Service Promise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { time: 'Within 24 hours', desc: 'Initial response to your enquiry.' },
                { time: 'Within 48 hours', desc: 'Follow‑up with detailed technical information.' },
                { time: 'Within one week', desc: 'Introduction to your dedicated Norseman advisor.' },
              ].map((item, index) => (
                <div key={index}>
                  <div className="font-playfair text-3xl font-bold text-amber-100 mb-2">
                    {item.time}
                  </div>
                  <p className="font-inter text-white/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
