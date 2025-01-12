import React, { useState } from 'react';
import { PlayCircle, Layout } from 'lucide-react';
import { Challenge } from '../types';

interface CodingInterfaceProps {
  challenge: Challenge;
  onSelectChallenge: (challenge: Challenge) => void;
  challenges: Challenge[];
}

function CodingInterface({ challenge, onSelectChallenge, challenges }: CodingInterfaceProps) {
  const [code, setCode] = useState(challenge.starterCode);

  return (
    <div className="container mx-auto py-6 px-4">
      {/* Challenge Selection */}
      <div className="mb-6">
        <div className="flex items-center space-x-4 overflow-x-auto pb-4">
          {challenges.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelectChallenge(c)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                ${challenge.id === c.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Problem Description */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">{challenge.title}</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-medium
              ${challenge.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                challenge.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'}`}>
              {challenge.difficulty}
            </span>
          </div>
          <p className="text-gray-600 mb-6">{challenge.description}</p>
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-700 mb-2">Example:</h3>
            <pre className="bg-gray-50 p-3 rounded-md text-sm">{challenge.example}</pre>
          </div>
        </div>

        {/* Code Editor */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="border-b px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Layout className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Editor</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setCode(challenge.starterCode)}
                className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition"
              >
                Reset
              </button>
              <button
                onClick={() => {/* Add run functionality */}}
                className="px-4 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition flex items-center space-x-1"
              >
                <PlayCircle className="h-4 w-4" />
                <span>Run</span>
              </button>
            </div>
          </div>
          <div className="p-4">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-[400px] font-mono text-sm p-4 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodingInterface;