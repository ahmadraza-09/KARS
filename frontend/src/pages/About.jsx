import React from "react";
import {
  Award,
  Users,
  Wrench,
  Heart,
  CheckCircle,
  Target,
  Eye,
  Zap,
  Shield,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Customer First",
      description:
        "Your satisfaction and health are our top priorities in everything we do.",
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Quality Excellence",
      description:
        "We never compromise on quality and only use the best RO technology available.",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Innovation",
      description:
        "Constantly evolving our solutions to provide the most advanced water treatment.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Expert Team",
      description:
        "Certified professionals with years of experience in water treatment solutions.",
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description:
        "KARS was established with a vision to provide pure water solutions.",
    },
    {
      year: "2012",
      title: "1000+ Installations",
      description:
        "Reached our first major milestone of successful installations.",
    },
    {
      year: "2018",
      title: "Regional Expansion",
      description:
        "Expanded services across multiple states with new service centers.",
    },
    {
      year: "2023",
      title: "10,000+ Happy Customers",
      description:
        "Achieved the milestone of serving over 10,000 satisfied customers.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                About <span className="text-cyan-400">KARS</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                For over 15 years, KARS has been the trusted name in water
                treatment solutions, bringing pure, clean water to thousands of
                homes and businesses across the region.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">15+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">10K+</div>
                  <div className="text-gray-300">Happy Customers</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg"
                alt="KARS Team"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Commercial Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Expert Technicians</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide every family and business with access to pure, clean
                water through innovative reverse osmosis technology and
                exceptional service. We believe clean water is not a luxury, but
                a fundamental right.
              </p>
            </div>
            <div className="bg-cyan-50 rounded-2xl p-8">
              <Eye className="w-12 h-12 text-cyan-600 mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the leading water treatment company in the region,
                known for our commitment to quality, innovation, and customer
                satisfaction. We envision a world where everyone has access to
                the purest water possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a
              company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our certified professionals bring years of experience in water
              treatment technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-blue-600 text-white p-2 rounded-full">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Rajesh Kumar
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                Chief Technology Officer
              </p>
              <p className="text-gray-600 text-sm">
                15+ years in water treatment technology with expertise in RO
                system design and optimization.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-green-600 text-white p-2 rounded-full">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Priya Sharma
              </h3>
              <p className="text-green-600 font-medium mb-2">
                Customer Relations Manager
              </p>
              <p className="text-gray-600 text-sm">
                Dedicated to ensuring exceptional customer service and
                satisfaction across all touchpoints.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/2078471/pexels-photo-2078471.jpeg"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-orange-600 text-white p-2 rounded-full">
                  <Wrench className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Vikram Singh
              </h3>
              <p className="text-orange-600 font-medium mb-2">
                Lead Installation Engineer
              </p>
              <p className="text-gray-600 text-sm">
                Expert in professional installation and maintenance of
                residential and commercial RO systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to a regional leader in water treatment
              solutions.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                  {milestone.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Awards & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition for our commitment to quality and excellence in water
              treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                ISO 9001:2015
              </h3>
              <p className="text-sm text-gray-600">
                Quality Management System Certification
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                NSF Certified
              </h3>
              <p className="text-sm text-gray-600">
                National Sanitation Foundation Approval
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">WQA Member</h3>
              <p className="text-sm text-gray-600">
                Water Quality Association Membership
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Target className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Best Service 2024
              </h3>
              <p className="text-sm text-gray-600">Regional Excellence Award</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose KARS?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're more than just a water treatment company - we're your
              partners in health and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "15+ years of industry experience",
              "Certified and trained technicians",
              "Premium quality RO systems",
              "24/7 customer support",
              "Comprehensive warranty coverage",
              "Regular maintenance programs",
              "Custom solutions for every need",
              "Transparent pricing",
              "Quick installation process",
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-blue-100">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
