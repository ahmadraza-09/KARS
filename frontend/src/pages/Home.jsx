import React from "react";
import { Link } from "react-router-dom";
import {
  Droplets,
  Shield,
  Wrench,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Droplets className="w-8 h-8 text-blue-600" />,
      title: "Pure Water Technology",
      description:
        "Advanced reverse osmosis systems that remove 99.9% of contaminants for crystal clear water.",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Quality Assurance",
      description:
        "Certified systems with rigorous testing standards to ensure water safety and purity.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-600" />,
      title: "Expert Installation",
      description:
        "Professional installation and maintenance services by certified water treatment specialists.",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Customer Support",
      description:
        "24/7 customer support with rapid response for all your water treatment needs.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "KARS transformed our water quality completely. The installation was professional and the water tastes amazing!",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Excellent service and top-quality RO system. Our family now enjoys pure, clean water every day.",
    },
    {
      name: "Anjali Patel",
      rating: 5,
      text: "Best investment for our home. The team was knowledgeable and the system works perfectly.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Pure Water
                  <span className="text-cyan-300"> Solutions</span>
                  <br />
                  for Your Home
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Experience the difference of premium reverse osmosis water
                  treatment systems. Get crystal clear, healthy water with KARS
                  advanced filtration technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 text-center shadow-lg"
                >
                  Get Free Water Test
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  View Services
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-blue-200">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-blue-200">Purity Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8">
                <img
                  src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg"
                  alt="RO Water System"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">
              Trusted by Leading Organizations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-700">ISO 9001</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-700">NSF Certified</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-700">WQA Member</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-700">EPA Approved</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-700">BIS Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose KARS Water Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with expert service to deliver
              the purest water for your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Premium RO Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our range of advanced reverse osmosis systems designed
              for different needs and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <div className="text-center space-y-4">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Droplets className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  KARS Essential
                </h3>
                <p className="text-gray-600">
                  Perfect for small families and apartments
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>5-Stage Filtration</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>8L Storage Tank</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>TDS Controller</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-600">₹12,999</div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  KARS Premium
                </h3>
                <p className="text-gray-600">
                  Advanced system for medium to large families
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>7-Stage Filtration</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>12L Storage Tank</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>UV + UF Technology</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Smart Display</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-green-600">₹18,999</div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
              <div className="text-center space-y-4">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  KARS Commercial
                </h3>
                <p className="text-gray-600">
                  High-capacity system for offices and businesses
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>9-Stage Filtration</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>25L Storage Tank</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Auto-Flush System</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Remote Monitoring</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-purple-600">
                  ₹35,999
                </div>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to installation, we make getting pure water
              easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold">Free Water Analysis</h3>
              <p className="text-gray-600">
                Our experts test your water quality and recommend the perfect RO
                system for your needs.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold">
                Professional Installation
              </h3>
              <p className="text-gray-600">
                Certified technicians install your system with precision and
                care, ensuring optimal performance.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold">Ongoing Support</h3>
              <p className="text-gray-600">
                Regular maintenance and 24/7 support to keep your water pure and
                your system running perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Health Benefits of Pure RO Water
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Removes Harmful Contaminants
                    </h3>
                    <p className="text-gray-600">
                      Eliminates bacteria, viruses, heavy metals, and chemical
                      pollutants for safer drinking water.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Improves Taste & Odor
                    </h3>
                    <p className="text-gray-600">
                      Removes chlorine and other chemicals that cause unpleasant
                      taste and smell in water.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Better Hydration
                    </h3>
                    <p className="text-gray-600">
                      Pure water is more easily absorbed by the body, leading to
                      better hydration and health.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Protects Appliances
                    </h3>
                    <p className="text-gray-600">
                      Reduces mineral buildup in appliances, extending their
                      lifespan and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg"
                alt="Health Benefits"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers who trust KARS for pure
              water.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about RO water systems and our
              services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How often should I replace RO filters?
              </h3>
              <p className="text-gray-600">
                Pre-filters should be replaced every 6-12 months, while the RO
                membrane typically lasts 2-3 years. We provide regular
                maintenance reminders and professional replacement services.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What is the ideal TDS level for drinking water?
              </h3>
              <p className="text-gray-600">
                The WHO recommends TDS levels between 150-300 ppm for drinking
                water. Our RO systems include TDS controllers to maintain
                optimal mineral content for taste and health.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much water does an RO system waste?
              </h3>
              <p className="text-gray-600">
                Modern RO systems have a recovery rate of 50-75%, meaning they
                produce 2-3 liters of pure water for every liter of wastewater.
                The reject water can be used for cleaning and gardening.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do I need a water test before installation?
              </h3>
              <p className="text-gray-600">
                Yes, we provide free water testing to analyze your water quality
                and recommend the most suitable RO system for your specific
                needs and local water conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready for Pure Water in Your Home?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Don't compromise on your family's health. Get a free water
              analysis and discover the KARS difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center"
              >
                Schedule Free Test
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/gallery"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
