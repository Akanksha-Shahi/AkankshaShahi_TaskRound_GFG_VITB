import React from 'react';
import { Brain, Zap, Trophy, ArrowRight, Sparkles } from 'lucide-react';

interface WelcomePageProps {
  onStartCoding: () => void;
}

function WelcomePage({ onStartCoding }: WelcomePageProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Master Your Coding Skills with <span className="text-indigo-600">CodePro</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Practice coding challenges, improve your problem-solving abilities, and prepare for technical interviews with our interactive platform.
        </p>
        <button
          onClick={onStartCoding}
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition flex items-center space-x-2 mx-auto"
        >
          <span>Start Coding Now</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Brain className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Learn by Doing</h3>
          <p className="text-gray-600">Practice with real coding challenges and improve your problem-solving skills.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Zap className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Interactive Platform</h3>
          <p className="text-gray-600">Write, test, and run your code in our feature-rich online editor.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Trophy className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
          <p className="text-gray-600">Monitor your improvement and earn achievements as you solve challenges.</p>
        </div>
      </div>

      {/* Challenge Preview */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Featured Challenges</h2>
          <Sparkles className="h-6 w-6 text-indigo-600" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['Easy', 'Medium', 'Hard'].map((difficulty) => (
            <div key={difficulty} className="border rounded-lg p-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium inline-block mb-2
                ${difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}`}>
                {difficulty}
              </span>
              <h3 className="font-semibold mb-1">
                {difficulty === 'Easy' ? 'Two Sum' :
                 difficulty === 'Medium' ? 'Valid Parentheses' :
                 'Merge K Sorted Lists'}
              </h3>
              <p className="text-sm text-gray-600">
                {difficulty === 'Easy' ? 'Find two numbers that add up to a target' :
                 difficulty === 'Medium' ? 'Check if parentheses are valid' :
                 'Merge K sorted linked lists efficiently'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;