import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone",
      details: ["+91 9310089130", "+91 9310089130"],
      action: "tel:+919310089130",
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      details: ["info@karswater.com", "support@karswater.com"],
      action: "mailto:info@karswater.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Address",
      details: [
        "Noida near by sector 51 metro station",
        "Hoshiyarpur Uttar Pradesh 201303",
      ],
      action: "https://maps.app.goo.gl/KgnNYYNz7EQvtupL8",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Business Hours",
      details: ["Mon-Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      action: "#",
    },
  ];

  const services = [
    "RO System Installation",
    "Water Quality Testing",
    "System Maintenance",
    "Filter Replacement",
    "Emergency Repair",
    "Commercial Solutions",
    "Other",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-300 opacity-10 rounded-full animate-pulse"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-cyan-300">KARS</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our water treatment experts. We're here to help
            you find the perfect solution for clean, pure water.
          </p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6" />
              <div>
                <div className="font-semibold">Call Now</div>
                <div className="text-blue-200">+91 9876543210</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6" />
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-blue-200">info@karswater.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6" />
              <div>
                <div className="font-semibold">Working Hours</div>
                <div className="text-blue-200">Mon-Sat: 9AM-7PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700">
                    Thank you! We'll get back to you soon.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your water treatment needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Ready to experience pure water? Our team of experts is
                  standing by to help you choose the perfect water treatment
                  solution for your home or business.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{info.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="text-lg font-semibold">Visit Our Office</h3>
                  <p className="text-blue-100">
                    Schedule an appointment for consultation
                  </p>
                </div>
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive Map</p>
                    <p className="text-sm text-gray-400">Visit our location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Need Immediate Assistance?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our water treatment experts are available to help you with urgent
              water quality issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 9876543210
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Schedule Free Water Test
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
