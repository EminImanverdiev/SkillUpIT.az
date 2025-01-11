import React, { useState } from "react";
import faqBg from '../../assets/images/bgg.png';
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const FAQComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Student" | "Instructor">("Student");
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);

  const relatedTopics = [
    { title: "Account/Profile", count: 1 },
    { title: "Course Taking", count: 2 },
    { title: "Getting Started", count: 1 },
    { title: "Mobile", count: 1 },
    { title: "Purchase/Refunds", count: 3 },
    { title: "Troubleshooting", count: 2 },
  ];

  const studentFAQs: FAQItem[] = [
    {
      question: "What is Emeritus Education System?",
      answer:
        "Emeritus provides high-quality education programs through online and in-person platforms to enhance career and professional growth.",
    },
    {
      question: "Can I get a refund for my Premium Membership payment?",
      answer:
        "Refunds depend on the policy and can be requested if within the eligible timeframe. Ensure no materials are accessed.",
    },
    {
      question: "How does the Affiliate Program work?",
      answer:
        "Earn rewards by promoting courses with a referral link. Commissions are based on enrollment through your link.",
    },
    {
      question: "What is included in Standard membership plan?",
      answer:
        "Standard membership provides access to essential courses, learning tools, and community engagement resources.",
    },
    {
      question: "How to choose the right class for me?",
      answer:
        "Choose a class that aligns with your career goals, skill level, and availability. Advisors are available for assistance.",
    },
  ];
  
  const instructorFAQs: FAQItem[] = [
    {
      question: "How can I become an instructor?",
      answer:
        "Submit an application showcasing your expertise and teaching experience. Our team will review and assist with the process.",
    },
    {
      question: "What is the payment structure for instructors?",
      answer:
        "Payments are based on enrollment and revenue sharing, with incentives for high-performing courses.",
    },
  ];
  

  const faqs = activeTab === "Student" ? studentFAQs : instructorFAQs;

  // Filter FAQs based on search term
  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen">
    {/* Header */}
    <div className="">
        <div className="forBg p-8 lg:px-28 py-10" style={{ backgroundImage: `url(${faqBg})`, backgroundSize: "cover" }}>
        <nav className="text-gray-600 text-sm mb-4 flex  " >
        <Link
        to="/"
        className="flex items-center  text-blue-500 hover:text-blue-600"
        aria-label="Go to Home"
      >
        <FaHome size={16} className="mr-1" />
     
      </Link> <span> / Pages / Faq Page</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-800 mb-8">Faq Page</h1>
        </div>
    <div className="faqm min-h-screen max-w-[1240px] mx-auto bg-white p-6">
      {/* Tabs */}
      <div className="flex justify-center border-b  mb-6">
        <button
          className={`px-6 py-3 items-center text-sm font-medium ${
            activeTab === "Student" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Student")}
        >
          Student
        </button>
        <button
          className={`px-6 py-3 text-sm font-medium ${
            activeTab === "Instructor" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Instructor")}
        >
          Instructor
        </button>
      </div>

      {/* Layout */}
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4  bg-gray-50 rounded-lg shadow p-6 mb-8 lg:mb-0">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm pr-10"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Related Topics</h3>
          <ul className="space-y-2 text-gray-600">
            {relatedTopics.map((topic, index) => (
              <li key={index} className="flex justify-between">
                <span>{topic.title}</span>
                <span className="text-gray-400">({topic.count})</span>
              </li>
            ))}
          </ul>
          <Link  to="/contact" >
            <button className="w-full bg-blue-500 text-white text-sm font-medium py-2 mt-6 rounded-md hover:bg-blue-600">Contact Us</button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 lg:pl-8">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div key={index} className="mb-4 border rounded-lg shadow">
                <button
                  className="w-full text-left p-4 flex justify-between items-center font-bold text-gray-800"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span
                    className="w-6 h-6 flex items-center justify-center rounded-full border  text-gray-500"
                  >
                    {expanded === index ? "-" : "+"}
                  </span>
                </button>
                {expanded === index && (
                  <div className="p-4 text-sm text-gray-600 ">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No FAQs found.</p>
          )}
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQComponent;
