import React from "react";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to Reverse Osmosis Water Treatment",
      excerpt:
        "Learn everything about RO systems, how they work, benefits, and why they're essential for pure water at home.",
      content:
        "Reverse osmosis is one of the most effective water treatment methods available today. This comprehensive guide covers all aspects of RO technology, from basic principles to advanced applications. Discover how RO systems remove contaminants, improve water taste, and protect your family's health.",
      author: "Dr. Rajesh Kumar",
      date: "2025-01-10",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
      tags: ["RO Systems", "Water Purification", "Health"],
    },
    {
      id: 2,
      title: "Signs Your Home Water Quality Needs Immediate Attention",
      excerpt:
        "Identify the warning signs that indicate poor water quality and understand when you need professional water treatment solutions.",
      content:
        "Water quality issues can seriously impact your health and home. From strange tastes and odors to visible contamination, learn to recognize the key indicators that signal the need for water treatment. This article helps you identify problems early and take action to protect your family.",
      author: "Priya Sharma",
      date: "2025-01-08",
      readTime: "6 min read",
      category: "Health",
      image:
        "https://images.pexels.com/photos/2078471/pexels-photo-2078471.jpeg",
      tags: ["Water Quality", "Health", "Home Safety"],
    },
    {
      id: 3,
      title: "Commercial Water Treatment: Solutions for Businesses",
      excerpt:
        "Explore commercial water treatment options and understand how businesses can ensure clean, safe water for employees and customers.",
      content:
        "Commercial establishments face unique water quality challenges. From restaurants requiring pure water for food preparation to hospitals needing sterile water, each business has specific requirements. Learn about scalable solutions that meet commercial needs while ensuring cost-effectiveness.",
      author: "Anjali Patel",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Business",
      image:
        "https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg",
      tags: ["Commercial", "Business Solutions", "Water Treatment"],
    },
    {
      id: 4,
      title: "Maintenance Tips to Keep Your RO System Running Perfectly",
      excerpt:
        "Essential maintenance practices to ensure your reverse osmosis system continues to provide clean, pure water for years to come.",
      content:
        "Regular maintenance is key to optimal RO system performance. This comprehensive guide covers filter replacement schedules, system cleaning procedures, and troubleshooting common issues. Follow these expert tips to maximize your system's lifespan and maintain water quality standards.",
      author: "Vikram Singh",
      date: "2025-01-03",
      readTime: "7 min read",
      category: "Maintenance",
      image:
        "https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg",
      tags: ["Maintenance", "RO Systems", "DIY Tips"],
    },
    {
      id: 5,
      title: "Understanding TDS Levels: What Your Water Test Results Mean",
      excerpt:
        "Decode your water quality test results and understand what different TDS levels mean for your health and water treatment needs.",
      content:
        "Total Dissolved Solids (TDS) levels are a crucial indicator of water quality. This detailed explanation helps you understand TDS measurements, acceptable levels for drinking water, and how different TDS ranges affect taste, health, and the need for water treatment systems.",
      author: "Dr. Meera Joshi",
      date: "2025-01-01",
      readTime: "5 min read",
      category: "Education",
      image:
        "https://images.pexels.com/photos/2078471/pexels-photo-2078471.jpeg",
      tags: ["TDS", "Water Testing", "Education"],
    },
    {
      id: 6,
      title: "Environmental Benefits of Home Water Treatment Systems",
      excerpt:
        "Discover how installing a home water treatment system contributes to environmental sustainability and reduces plastic waste.",
      content:
        "Home water treatment systems offer significant environmental benefits beyond health advantages. Reduce plastic bottle waste, lower your carbon footprint, and contribute to sustainable living while enjoying pure, clean water at home. Learn about the environmental impact of different treatment options.",
      author: "Arjun Reddy",
      date: "2024-12-28",
      readTime: "6 min read",
      category: "Environment",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
      tags: ["Environment", "Sustainability", "Green Living"],
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Health",
    "Business",
    "Maintenance",
    "Education",
    "Environment",
  ];
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [selectedPost, setSelectedPost] = React.useState(null);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-20 h-20 border border-white opacity-20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 border border-cyan-300 opacity-30 rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            KARS <span className="text-cyan-300">Blog</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expert insights on water treatment, industry news, and tips to help
            you make informed decisions about your water quality needs.
          </p>
        </div>
      </section>

      {/* Blog Stats */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Articles Published</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Monthly Readers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-200">Expert Contributors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-200">Years of Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
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

      {/* Featured Article */}
      {!selectedPost && (
        <section className="py-16 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Featured Article
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    The Ultimate Guide to Choosing the Right RO System for Your
                    Home
                  </h2>
                  <p className="text-gray-600 mb-6">
                    A comprehensive guide covering everything you need to know
                    about selecting, installing, and maintaining the perfect
                    reverse osmosis system for your family's needs.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>Dr. Rajesh Kumar</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>12 min read</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPost(blogPosts[0])}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <img
                    src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg"
                    alt="Featured Article"
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedPost ? (
            // Full Blog Post View
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedPost(null)}
                className="mb-6 text-blue-600 hover:text-blue-800 flex items-center space-x-2"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                <span>Back to Blog</span>
              </button>

              <article className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {selectedPost.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(selectedPost.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {selectedPost.title}
                  </h1>

                  <div className="flex items-center space-x-2 text-gray-600 mb-6">
                    <User className="w-4 h-4" />
                    <span>By {selectedPost.author}</span>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 mb-6">
                    <p className="text-xl text-gray-800 font-medium mb-6">
                      {selectedPost.excerpt}
                    </p>
                    <p>{selectedPost.content}</p>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Tag className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700 font-medium">Tags:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ) : (
            // Blog Posts Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t">
                      <span className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && !selectedPost && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No blog posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {!selectedPost && (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Stay Updated with KARS
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Get the latest insights on water treatment, industry news, and
                expert tips delivered directly to your inbox.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Blogs;
