import React, { useState, useEffect } from 'react';
import { Heart, Brain, Users, Shield, Award, ChevronDown, Sparkles, Clock, MessageCircle, Target, Zap, Fingerprint, Lock, Star, CheckCircle2 } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Personality Analysis",
      description: "Our AI analyzes 16 personality dimensions, communication styles, and core values",
      icon: <Brain className="w-16 h-16" />,
      stats: ["98% Match Accuracy", "16 Personality Dimensions", "5M+ Successful Matches"]
    },
    {
      title: "Emotional Intelligence",
      description: "Advanced algorithms understand emotional compatibility and relationship dynamics",
      icon: <Heart className="w-16 h-16" />,
      stats: ["24/7 AI Processing", "Emotional Pattern Recognition", "Deep Learning Models"]
    },
    {
      title: "Cultural Integration",
      description: "Seamlessly blends modern AI with traditional values and cultural preferences",
      icon: <Users className="w-16 h-16" />,
      stats: ["Cultural Compatibility", "Value Alignment", "Family Harmony"]
    }
  ];

  const faqs = [
    {
      question: "How does your AI differ from traditional matchmaking?",
      answer: "Our AI goes beyond basic criteria like age and profession. It analyzes personality traits, emotional patterns, communication styles, and cultural values using advanced machine learning. The system learns from successful matches and continuously improves its matching accuracy. Unlike traditional matchmaking, our AI can process millions of potential matches in seconds while considering hundreds of compatibility factors."
    },
    {
      question: "What makes your personality analysis special?",
      answer: "We use a combination of scientifically validated personality assessments, natural language processing of your communications, and behavioral analysis. Our AI creates a comprehensive digital twin of your personality, understanding not just who you are, but how you interact, your emotional needs, and your relationship patterns. This deep understanding leads to more meaningful and lasting matches."
    },
    {
      question: "How do you ensure privacy and security?",
      answer: "We employ military-grade encryption for all personal data. Our AI system anonymizes data used for learning, and your detailed profile is only shared with highly compatible matches. We're compliant with global privacy standards and never share your data with third parties. You have complete control over your privacy settings and what information is visible to others."
    },
    {
      question: "Can AI really understand cultural nuances?",
      answer: "Yes! Our AI is specifically trained on diverse cultural datasets and understands the nuances of different communities, traditions, and family values. It considers factors like cultural background, religious preferences, and family traditions while making matches. The system also learns from successful matches within specific cultural contexts to improve its understanding."
    },
    {
      question: "How long does it take to find a match?",
      answer: "While initial matches are available within 24 hours, our AI continuously learns and refines your matches. The quality of matches improves as the system better understands your preferences and patterns through your interactions. Most users find highly compatible matches within the first month, with 87% reporting successful relationships."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg')`,
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/30 to-blue-500/30 mix-blend-overlay" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Where AI Meets
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-blue-300">
                Destiny
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the future of matchmaking where advanced AI understands your true essence and finds your perfect life partner
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-rose-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Watch How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Feature Showcase */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Science of Perfect Matches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI doesn't just match profiles – it understands personalities, predicts compatibility, and learns from successful relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 ${
                  activeFeature === index
                    ? 'scale-105 shadow-2xl'
                    : 'scale-100 shadow-xl'
                } bg-white rounded-2xl p-8 hover:shadow-2xl`}
              >
                <div className={`text-${index === 0 ? 'rose' : index === 1 ? 'blue' : 'purple'}-500 mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.stats.map((stat, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Interactive Timeline */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Your Journey to Love</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Fingerprint className="w-12 h-12" />,
                title: "Create Your Profile",
                description: "Complete our scientifically designed personality assessment"
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "AI Analysis",
                description: "Our AI creates your digital twin and understands your compatibility patterns"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Smart Matching",
                description: "Receive carefully curated matches based on deep compatibility"
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "Connect & Meet",
                description: "Start meaningful conversations with AI-powered insights"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-rose-500 mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ChevronDown className="w-8 h-8 text-rose-500 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Love Stories Created by AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/3651597/pexels-photo-3651597.jpeg",
                name: "Priya & Arjun",
                story: "The AI understood our personalities perfectly. We connected on a deeper level from day one.",
                match: "98% Compatibility Match"
              },
              {
                image: "https://images.pexels.com/photos/3585806/pexels-photo-3585806.jpeg",
                name: "Rahul & Meera",
                story: "Traditional values with modern matching. Our families were as happy as we were!",
                match: "96% Compatibility Match"
              },
              {
                image: "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg",
                name: "Amit & Neha",
                story: "Found love across cities. The AI knew we were perfect for each other before we did.",
                match: "97% Compatibility Match"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-rose-50 to-blue-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold mb-3">{story.name}</h3>
                <p className="text-gray-600 italic mb-4">"{story.story}"</p>
                <div className="flex items-center text-rose-500">
                  <Heart className="w-5 h-5 mr-2" />
                  {story.match}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Understanding AI Matchmaking</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-200 ${
                    openFaq === index ? 'max-h-96 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3585806/pexels-photo-3585806.jpeg')`,
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Begin Your Love Story Today</h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Join thousands of couples who found their perfect match through our AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-gradient-to-r from-rose-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Create Your AI Profile
            </button>
            <button className="bg-white text-rose-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Explore Success Stories
            </button>
          </div>
          <div className="flex justify-center gap-8">
            <div className="text-white text-center">
              <Lock className="w-8 h-8 mx-auto mb-2" />
              <p>Bank-Grade Security</p>
            </div>
            <div className="text-white text-center">
              <Shield className="w-8 h-8 mx-auto mb-2" />
              <p>Privacy Protected</p>
            </div>
            <div className="text-white text-center">
              <Award className="w-8 h-8 mx-auto mb-2" />
              <p>Award Winning AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Pioneering the future of matchmaking through innovative AI technology and deep understanding of human connections.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Technology</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">support@aimatrimony.com</li>
                <li className="text-gray-400">+91 800-LOVE-AI</li>
                <li className="text-gray-400">Mumbai, India</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400">Download Our App</p>
                <div className="flex gap-4 mt-2">
                  <button className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                    App Store
                  </button>
                  <button className="bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                    Play Store
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 AI Matrimony. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;