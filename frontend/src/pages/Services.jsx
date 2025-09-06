import React from "react";
import {
  Droplets,
  TestTube,
  Wrench,
  Shield,
  Home,
  Building,
  Phone,
  CheckCircle,
  Cone,
  Bubbles,
  Plus,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Droplets className="w-12 h-12 text-blue-600" />,
      title: "RO System Installation",
      description:
        "Professional installation of premium reverse osmosis systems for homes and businesses.",
      features: [
        "Expert site assessment",
        "Custom system design",
        "Professional installation",
        "System testing & commissioning",
      ],
      price: "Contact for quote",
    },
    {
      icon: <TestTube className="w-12 h-12 text-green-600" />,
      title: "Water Quality Testing",
      description:
        "Comprehensive water analysis to determine the best treatment solution for your needs.",
      features: [
        "TDS testing",
        "pH level analysis",
        "Bacteria & virus detection",
        "Heavy metal screening",
      ],
      price: "Contact for quote",
    },
    {
      icon: <Wrench className="w-12 h-12 text-orange-600" />,
      title: "Maintenance & Repair",
      description:
        "Regular maintenance and emergency repair services to keep your system running optimally.",
      features: [
        "Filter replacement",
        "System cleaning",
        "Performance optimization",
        "Emergency repairs",
      ],
      price: "Contact for quote",
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: "RO AMC Services",
      description:
        "If any part of your water purifier gets damaged and needs replacement then it will be done without any delay at your place.",
      features: [
        "Technology assessment",
        "System modernization",
        "Capacity enhancement",
        "Efficiency improvement",
      ],
      price: "Contact for quote",
    },
    {
      icon: <Cone className="w-12 h-12 text-purple-600" />,
      title: "RO Filter Change",
      description:
        "RO Water Purifier Filter Replacement makes your Water purifier durable and long lasting We have trained Service technician to replace your filter correctly.",
      features: [
        "Technology assessment",
        "System modernization",
        "Capacity enhancement",
        "Efficiency improvement",
      ],
      price: "Contact for quote",
    },
    {
      icon: <Bubbles className="w-12 h-12 text-purple-600" />,
      title: "RO Water Purifier Repair",
      description:
        "The fundamental and most crucial step in ensuring lifespan and good health is to service and maintain your water purifier. Not only will the water purifier function wonderfully",
      features: [
        "Technology assessment",
        "System modernization",
        "Capacity enhancement",
        "Efficiency improvement",
      ],
      price: "Contact for quote",
    },
    {
      icon: <Plus className="w-12 h-12 text-purple-600" />,
      title: "RO Installation",
      description:
        "Installation of RO Water Purifier needs expert service technician and we have trained Service Technician for RO Water Purifier Installation Services.",
      features: [
        "Technology assessment",
        "System modernization",
        "Capacity enhancement",
        "Efficiency improvement",
      ],
      price: "Contact for quote",
    },
    {
      icon: <Home className="w-12 h-12 text-red-600" />,
      title: "Residential Solutions",
      description:
        "Complete water treatment solutions designed specifically for homes and families.",
      features: [
        "Whole house systems",
        "Under-sink units",
        "Counter-top filters",
        "Multi-stage filtration",
      ],
      price: "Contact for quote",
    },
    {
      icon: <Building className="w-12 h-12 text-indigo-600" />,
      title: "Commercial Solutions",
      description:
        "Industrial-grade water treatment systems for businesses and large facilities.",
      features: [
        "High-capacity systems",
        "Industrial filtration",
        "Custom solutions",
        "Bulk water treatment",
      ],
      price: "Contact for quote",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Free consultation to assess your water quality needs.",
    },
    {
      step: 2,
      title: "Water Testing",
      description: "Comprehensive analysis of your water source.",
    },
    {
      step: 3,
      title: "System Design",
      description: "Custom solution design based on your requirements.",
    },
    {
      step: 4,
      title: "Installation",
      description: "Professional installation by certified technicians.",
    },
    {
      step: 5,
      title: "Testing & Training",
      description: "System testing and user training.",
    },
    {
      step: 6,
      title: "Ongoing Support",
      description: "Regular maintenance and 24/7 support.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-1/2 -left-20 w-60 h-60 bg-cyan-400 opacity-5 rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-cyan-300">Services</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive water treatment solutions from installation to
            maintenance, ensuring pure water for your home or business.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <Home className="w-16 h-16 text-blue-600 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900">
                Residential Services
              </h3>
              <p className="text-gray-600">
                Complete water treatment solutions for homes and families
              </p>
            </div>
            <div className="space-y-4">
              <Building className="w-16 h-16 text-green-600 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900">
                Commercial Services
              </h3>
              <p className="text-gray-600">
                Scalable solutions for offices, restaurants, and businesses
              </p>
            </div>
            <div className="space-y-4">
              <Wrench className="w-16 h-16 text-orange-600 mx-auto" />
              <h3 className="text-xl font-semibold text-gray-900">
                Maintenance Services
              </h3>
              <p className="text-gray-600">
                Regular upkeep and emergency repair services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Complete Water Purifying Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential to commercial applications, we have the expertise
              and technology to meet all your water purification needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-blue-600">
                        {service.price}
                      </span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Service Areas We Cover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive water treatment services across multiple
              cities and regions.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We serve the all Noida Areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Sector-62",
              "Sector-18",
              "Sector-15",
              "Sector-16",
              "Sector-50",
              "Sector-137",
              "Sector-150",
              "Sector-75",
              "Sector-76",
              "Sector-78",
              "Sector-100",
              "Sector-128",
              "Sector-132",
              "Sector-135",
              "Sector-140A",
              "Sector-142",
              "Sector-143",
              "Sector-93",
              "Sector-62A",
              "Noida-Greater Noida Expressway",
            ].map((city, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">{city}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see your city? We're expanding rapidly!
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Check Service Availability
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach ensuring the best water treatment solution
              for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              24/7 Emergency Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Water emergencies don't wait for business hours. Our emergency
              response team is available round the clock.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Immediate Response
              </h3>
              <p className="text-gray-600 mb-4">
                Call us anytime for urgent water quality issues or system
                failures.
              </p>
              <a
                href="tel:+919876543210"
                className="text-red-600 font-semibold hover:text-red-700"
              >
                Emergency: +91 9876543210
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Wrench className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                On-Site Repairs
              </h3>
              <p className="text-gray-600 mb-4">
                Our technicians carry common parts for immediate repairs and
                replacements.
              </p>
              <span className="text-orange-600 font-semibold">
                Same-day service available
              </span>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Temporary Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                We provide temporary water solutions while permanent repairs are
                completed.
              </p>
              <span className="text-green-600 font-semibold">
                No water shortage guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <div className="space-y-4">
                {[
                  "Certified and experienced technicians",
                  "Premium quality equipment and parts",
                  "Comprehensive warranty coverage",
                  "24/7 emergency support",
                  "Transparent pricing with no hidden costs",
                  "Regular maintenance programs",
                  "Custom solutions for unique requirements",
                  "Quick response time for service calls",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://www.apextechnology.co.in/wp-content/uploads/2017/03/WhatsApp-Image-2023-06-20-at-1.48.42-PM.jpeg"
                alt="Service Team"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Contact us today for a free consultation and water quality
              analysis. Our experts will help you choose the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 9876543210
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
