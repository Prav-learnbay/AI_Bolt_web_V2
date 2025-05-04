import React, { useState, useEffect } from 'react';
import { Heart, Brain, Users, Shield, Award, ChevronDown, Sparkles, Clock, MessageCircle, Target, Zap, Fingerprint, Lock, Star, CheckCircle2, LogIn, UserPlus, User, TestTube2, Bot } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

interface MBTIQuestion {
  id: number;
  question: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  optionA: string;
  optionB: string;
  scoreA: number;
  scoreB: number;
}

const mbtiQuestions: MBTIQuestion[] = [
  // Extraversion (E) vs Introversion (I)
  {
    id: 1,
    question: "At a party, you tend to:",
    dimension: 'EI',
    optionA: "Interact with many people, including strangers",
    optionB: "Interact with a few people you know well",
    scoreA: 1,
    scoreB: -1
  },
  {
    id: 2,
    question: "When you need to recharge, you prefer to:",
    dimension: 'EI',
    optionA: "Spend time with friends or in social settings",
    optionB: "Spend time alone or with one close person",
    scoreA: 1,
    scoreB: -1
  },
  {
    id: 3,
    question: "In a group discussion, you usually:",
    dimension: 'EI',
    optionA: "Speak up and share your thoughts immediately",
    optionB: "Listen first and share your thoughts later",
    scoreA: 1,
    scoreB: -1
  },

  // Sensing (S) vs Intuition (N)
  {
    id: 4,
    question: "You are more interested in:",
    dimension: 'SN',
    optionA: "What is actual and concrete",
    optionB: "What is possible and theoretical",
    scoreA: 1,
    scoreB: -1
  },
  {
    id: 5,
    question: "When learning something new, you prefer:",
    dimension: 'SN',
    optionA: "Step-by-step instructions and practical examples",
    optionB: "Understanding the big picture and underlying principles",
    scoreA: 1,
    scoreB: -1
  },
  {
    id: 6,
    question: "You tend to focus more on:",
    dimension: 'SN',
    optionA: "Present realities and facts",
    optionB: "Future possibilities and patterns",
    scoreA: 1,
    scoreB: -1
  },

  // Thinking (T) vs Feeling (F)
  {
    id: 7,
    question: "When making decisions, you usually:",
    dimension: 'TF',
    optionA: "Consider logic and objective analysis",
    optionB: "Consider people's feelings and values",
    scoreA: 1,
    scoreB: -1
  },
  {
    id: 8,
    question: "In a conflict, you tend to:",
    dimension: 'TF',
    optionA: "Focus on finding the most logical solution",
    optionB: "Focus on maintaining harmony and relationships",
    scoreA: 1,
    scoreB: -1
  },
  {
    id: 9,
    question: "You are more likely to:",
    dimension: 'TF',
    optionA: "Be direct and straightforward",
    optionB: "Be diplomatic and tactful",
    scoreA: 1,
    scoreB: -1
  },

  // Judging (J) vs Perceiving (P)
  {
    id: 10,
    question: "You prefer to:",
    dimension: 'JP',
    optionA: "Plan and organize your activities",
    optionB: "Be spontaneous and flexible",
    scoreA: 1,
    scoreB: -1
  },
  {
    id: 11,
    question: "When working on a project, you tend to:",
    dimension: 'JP',
    optionA: "Set deadlines and stick to them",
    optionB: "Keep your options open and adapt as needed",
    scoreA: 1,
    scoreB: -1
  },
  {
    id: 12,
    question: "You feel more comfortable when:",
    dimension: 'JP',
    optionA: "Things are decided and settled",
    optionB: "Things are open and flexible",
    scoreA: 1,
    scoreB: -1
  }
];

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function AIChatPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">AI Chat Assistant</h1>
          <div className="border rounded-lg p-4 h-96 overflow-y-auto mb-4 bg-gray-50">
            {/* Chat messages will go here */}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileCreationPage() {
  const [currentSection, setCurrentSection] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mbtiAnswers, setMbtiAnswers] = useState<number[]>(Array(mbtiQuestions.length).fill(0));
  const [mbtiResult, setMbtiResult] = useState<string | null>(null);
  const [profileData, setProfileData] = useState({
    // Basic Details
    age: '',
    gender: '',
    profession: '',
    location: '',
    salary: '',
    hobbies: '',
    interests: '',
    
    // Partner Preferences
    partnerAge: '',
    partnerLocation: '',
    partnerHobbies: '',
    partnerInterests: '',
    
    // Personality Test Status
    personalityTestCompleted: false,
    mbtiType: '',
    
    // AI Agent Status
    aiAgentCreated: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateMBTI = () => {
    const scores = {
      EI: 0,
      SN: 0,
      TF: 0,
      JP: 0
    };

    mbtiAnswers.forEach((answer, index) => {
      const question = mbtiQuestions[index];
      scores[question.dimension] += answer;
    });

    const type = [
      scores.EI > 0 ? 'E' : 'I',
      scores.SN > 0 ? 'S' : 'N',
      scores.TF > 0 ? 'T' : 'F',
      scores.JP > 0 ? 'J' : 'P'
    ].join('');

    return type;
  };

  const handleMBTIAnswer = (score: number) => {
    const newAnswers = [...mbtiAnswers];
    newAnswers[currentQuestion] = score;
    setMbtiAnswers(newAnswers);

    if (currentQuestion < mbtiQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = calculateMBTI();
      setMbtiResult(result);
      setProfileData(prev => ({ ...prev, mbtiType: result }));
    }
  };

  const handleNextSection = () => {
    setProfileData(prev => ({ ...prev, personalityTestCompleted: true }));
    setCurrentSection(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentSection < 3) {
      setCurrentSection(currentSection + 1);
    } else {
      // Handle final submission
      console.log('Profile completed:', profileData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-blue-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-8">
          <div className={`flex items-center ${currentSection >= 1 ? 'text-rose-500' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentSection >= 1 ? 'bg-rose-500 text-white' : 'bg-gray-200'}`}>
              1
            </div>
            <span className="ml-2">Basic Details</span>
          </div>
          <div className={`flex items-center ${currentSection >= 2 ? 'text-rose-500' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentSection >= 2 ? 'bg-rose-500 text-white' : 'bg-gray-200'}`}>
              2
            </div>
            <span className="ml-2">Personality Test</span>
          </div>
          <div className={`flex items-center ${currentSection >= 3 ? 'text-rose-500' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentSection >= 3 ? 'bg-rose-500 text-white' : 'bg-gray-200'}`}>
              3
            </div>
            <span className="ml-2">AI Agent</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          {currentSection === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Basic Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={profileData.age}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={profileData.gender}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Profession</label>
                  <input
                    type="text"
                    name="profession"
                    value={profileData.profession}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={profileData.location}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Salary Range</label>
                  <select
                    name="salary"
                    value={profileData.salary}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    required
                  >
                    <option value="">Select Range</option>
                    <option value="0-5L">0-5 Lakhs</option>
                    <option value="5-10L">5-10 Lakhs</option>
                    <option value="10-20L">10-20 Lakhs</option>
                    <option value="20L+">20 Lakhs+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Hobbies</label>
                <textarea
                  name="hobbies"
                  value={profileData.hobbies}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Interests</label>
                <textarea
                  name="interests"
                  value={profileData.interests}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  rows={3}
                  required
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Partner Preferences</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred Age Range</label>
                  <input
                    type="text"
                    name="partnerAge"
                    value={profileData.partnerAge}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred Location</label>
                  <input
                    type="text"
                    name="partnerLocation"
                    value={profileData.partnerLocation}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Hobbies</label>
                <textarea
                  name="partnerHobbies"
                  value={profileData.partnerHobbies}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Interests</label>
                <textarea
                  name="partnerInterests"
                  value={profileData.partnerInterests}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                  rows={3}
                  required
                />
              </div>
            </div>
          )}

          {currentSection === 2 && (
            <div className="text-center">
              <TestTube2 className="w-16 h-16 mx-auto text-rose-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Personality Test</h2>
              {!mbtiResult ? (
                <>
                  <div className="mb-8">
                    <p className="text-gray-600 mb-4">
                      Question {currentQuestion + 1} of {mbtiQuestions.length}
                    </p>
                    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
                      <p className="text-lg font-medium text-gray-800 mb-6">
                        {mbtiQuestions[currentQuestion].question}
                      </p>
                      <div className="space-y-4">
                        <button
                          type="button"
                          onClick={() => handleMBTIAnswer(mbtiQuestions[currentQuestion].scoreA)}
                          className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {mbtiQuestions[currentQuestion].optionA}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleMBTIAnswer(mbtiQuestions[currentQuestion].scoreB)}
                          className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {mbtiQuestions[currentQuestion].optionB}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-rose-500 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / mbtiQuestions.length) * 100}%` }}
                    ></div>
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-rose-500 mb-4">Your MBTI Type: {mbtiResult}</h3>
                  <p className="text-gray-600 mb-6">
                    Based on your answers, your personality type is {mbtiResult}. This type represents your natural preferences in how you perceive the world and make decisions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div>
                      <h4 className="font-semibold text-gray-800">Your Strengths:</h4>
                      <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Analytical thinking</li>
                        <li>Strategic planning</li>
                        <li>Independent decision-making</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Ideal Partner Traits:</h4>
                      <ul className="list-disc list-inside text-gray-600 mt-2">
                        <li>Complementary personality</li>
                        <li>Shared core values</li>
                        <li>Supportive communication style</li>
                      </ul>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleNextSection}
                    className="mt-8 bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors"
                  >
                    Continue to AI Agent Creation
                  </button>
                </div>
              )}
            </div>
          )}

          {currentSection === 3 && (
            <div className="text-center">
              <Bot className="w-16 h-16 mx-auto text-rose-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Your AI Agent</h2>
              <p className="text-gray-600 mb-8">
                Your AI agent will help you find your perfect match by learning from your preferences and personality.
              </p>
              <button
                type="button"
                onClick={() => setProfileData(prev => ({ ...prev, aiAgentCreated: true }))}
                className="bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors"
              >
                Create AI Agent
              </button>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {currentSection > 1 && (
              <button
                type="button"
                onClick={() => setCurrentSection(currentSection - 1)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              className="ml-auto bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition-colors"
            >
              {currentSection === 3 ? 'Complete Profile' : 'Next'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

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
    <Router>
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-rose-500">
                AI Matrimony
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="flex items-center text-gray-700 hover:text-rose-500 transition-colors">
                <LogIn className="w-5 h-5 mr-1" />
                <span>Login</span>
              </Link>
              <Link to="/signup" className="flex items-center text-gray-700 hover:text-rose-500 transition-colors">
                <UserPlus className="w-5 h-5 mr-1" />
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-rose-50 to-blue-50 pt-16">
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
                    <Link to="/create-profile" className="bg-gradient-to-r from-rose-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      Create Your AI Profile
                    </Link>
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
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<LoginPage />} />
        <Route path="/create-profile" element={<ProfileCreationPage />} />
        <Route path="/ai-chat" element={<AIChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;
