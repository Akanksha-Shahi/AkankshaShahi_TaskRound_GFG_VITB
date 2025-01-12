import React, { useState } from 'react';
import { Code2, PlayCircle, BookOpen, Trophy, Layout, Sparkles, Brain, Zap, ArrowRight } from 'lucide-react';
import WelcomePage from './components/WelcomePage';
import CodingInterface from './components/CodingInterface';
import { challenges } from './data/challenges';

function App() {
  const [isWelcomePage, setIsWelcomePage] = useState(true);
  const [selectedChallenge, setSelectedChallenge] = useState(challenges[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsWelcomePage(true)}>
            <Code2 className="h-8 w-8" />
            <h1 className="text-2xl font-bold font-mono">CodePro</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-1 hover:text-indigo-200 transition">
              <BookOpen className="h-5 w-5" />
              <span>Learn</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-indigo-200 transition">
              <Trophy className="h-5 w-5" />
              <span>Challenges</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {isWelcomePage ? (
          <WelcomePage onStartCoding={() => setIsWelcomePage(false)} />
        ) : (
          <CodingInterface 
            challenge={selectedChallenge} 
            onSelectChallenge={setSelectedChallenge}
            challenges={challenges}
          />
        )}
      </main>
    </div>
  );
}

export default App;