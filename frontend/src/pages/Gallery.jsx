import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
      title: "Under-Sink RO System Installation",
      category: "Residential",
      description:
        "Premium under-sink reverse osmosis system installed in modern kitchen",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg",
      title: "Commercial Water Treatment Plant",
      category: "Commercial",
      description: "Large-scale water treatment facility for office complex",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg",
      title: "Whole House Water System",
      category: "Residential",
      description:
        "Complete home water treatment solution with multiple filtration stages",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/2078471/pexels-photo-2078471.jpeg",
      title: "Water Quality Testing Lab",
      category: "Testing",
      description: "Professional water analysis and testing equipment",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg",
      title: "Industrial RO Plant",
      category: "Industrial",
      description:
        "High-capacity reverse osmosis plant for manufacturing facility",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg",
      title: "Kitchen Counter RO System",
      category: "Residential",
      description:
        "Compact countertop RO system for apartments and small spaces",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
      title: "Restaurant Water Treatment",
      category: "Commercial",
      description: "Custom water treatment solution for restaurant chain",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg",
      title: "Filter Maintenance Service",
      category: "Maintenance",
      description: "Professional maintenance and filter replacement service",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/2078471/pexels-photo-2078471.jpeg",
      title: "Hospital Water System",
      category: "Healthcare",
      description:
        "Medical-grade water purification system for healthcare facility",
    },
  ];

  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Industrial",
    "Testing",
    "Maintenance",
    "Healthcare",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-bounce"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-cyan-300">Gallery</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our portfolio of successful water treatment installations.
            From residential homes to large commercial facilities, see the KARS
            difference.
          </p>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">2,500+</div>
              <div className="text-gray-600">Residential Installations</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Commercial Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">50+</div>
              <div className="text-gray-600">Industrial Installations</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">100+</div>
              <div className="text-gray-600">Healthcare Facilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedImage(item.src)}
                      className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                    >
                      <ZoomIn className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcase of our most impressive and challenging water treatment
              installations.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg"
                  alt="Hospital Water Treatment"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Healthcare
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  City General Hospital
                </h3>
                <p className="text-gray-600">
                  Complete water treatment solution for a 500-bed hospital
                  including medical-grade purification systems, dialysis water
                  treatment, and emergency backup systems. The project ensures
                  99.99% pure water for critical medical procedures.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">
                      Capacity:
                    </span>
                    <span className="text-gray-600"> 10,000L/day</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Timeline:
                    </span>
                    <span className="text-gray-600"> 3 months</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Commercial
                </span>
                <h3 className="text-2xl font-bold text-gray-900">
                  Tech Corporate Campus
                </h3>
                <p className="text-gray-600">
                  Multi-building water treatment system for a technology campus
                  housing 5,000 employees. Features include centralized
                  treatment, distributed storage, and smart monitoring systems
                  with mobile app integration.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">
                      Buildings:
                    </span>
                    <span className="text-gray-600"> 8 towers</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Users:</span>
                    <span className="text-gray-600"> 5,000+ daily</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg"
                  alt="Corporate Campus"
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence in water
              treatment solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                10,000+
              </div>
              <div className="text-gray-600">Installations Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Commercial Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Let us create a customized water treatment solution for your home
              or business. Experience the KARS quality that thousands trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Your Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
