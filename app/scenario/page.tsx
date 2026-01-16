'use client';

import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function ScenarioPage() {
  const [user] = useState({ name: 'John Doe', email: 'john@example.com' });
  const [currentStep] = useState(3);

  const steps = [
    { number: 1, label: 'Data Input' },
    { number: 2, label: 'Prediction' },
    { number: 3, label: 'Results' },
    { number: 4, label: 'Export' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Stepper */}
        <div className="relative bg-linear-to-br from-[#003d82] via-[#0052a8] to-[#0066cc] rounded-lg shadow-sm p-6 mb-8 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          <div className="flex items-center justify-between max-w-4xl mx-auto relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                      currentStep >= step.number
                        ? 'bg-white text-[#003d82]'
                        : 'bg-white/30 text-white'
                    }`}
                  >
                    {currentStep > step.number ? '✓' : step.number}
                  </div>
                  <span className={`text-xs mt-2 whitespace-nowrap font-medium ${
                    currentStep >= step.number ? 'text-white' : 'text-white/70'
                  }`}>
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-white' : 'bg-white/30'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Info Message */}
        <div className="bg-blue-50 border-l-4 border-[#1e4d99] p-4 mb-6 rounded-md">
          <div className="flex items-start">
             <svg className="w-5 h-5 text-[#1e4d99] mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-[#1e4d99] font-bold text-sm">Test Different Scenarios</h3>
              <p className="text-gray-700 text-sm mt-1">Modify parameters below to see how changes affect your project schedule.</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Left Column - Modify Parameters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-[#1e4d99] mb-6 pb-3 border-b border-gray-200">Modify Parameters</h2>

            {/* Adjust Resources */}
            <div className="mb-6">
              <h3 className="text-gray-900 font-semibold mb-4 flex items-center text-sm">
                <svg className="w-5 h-5 text-[#1e4d99] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Adjust Resources
              </h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Add More Workers</label>
                  <input
                    type="number"
                    defaultValue="65"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Equipment</label>
                  <input
                    type="number"
                    defaultValue="7"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Hours/Day</label>
                  <input
                    type="number"
                    defaultValue="10"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Adjust Timeline */}
            <div className="mb-6">
              <h3 className="text-gray-900 font-semibold mb-4 flex items-center text-sm">
                <svg className="w-5 h-5 text-[#1e4d99] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Adjust Timeline
              </h3>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Working Days/Week</label>
                  <input
                    type="number"
                    defaultValue="6"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cycle Time Reduction (%)</label>
                  <input
                    type="number"
                    defaultValue="10"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Run Again Button */}
            <button className="w-full px-6 py-2.5 bg-[#1e4d99] text-white font-semibold text-sm rounded-md hover:bg-[#16407a] transition-all duration-200 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Run Again
            </button>
          </div>

          {/* Right Column - Scenario Comparison */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-[#1e4d99] mb-6 pb-3 border-b border-gray-200">Scenario Comparison</h2>

              {/* Current vs New Scenario */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center text-sm">
                  <svg className="w-5 h-5 text-[#1e4d99] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Current vs New Scenario
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-700">Duration Change</span>
                    <span className="font-bold text-[#1e4d99] text-sm">-28 days ↓</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-700">Cost Impact</span>
                    <span className="font-bold text-[#1e4d99] text-sm">+$45,000 ↑</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-700">Risk Level</span>
                    <span className="px-2.5 py-1 bg-[#1e4d99] text-white rounded-full text-xs font-semibold">Low (18%)</span>
                  </div>
                </div>
              </div>

              {/* Timeline Comparison */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 text-sm">Timeline Comparison</h3>
                <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-gray-500 text-sm">Side-by-side comparison chart</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div className="bg-blue-50 border-l-4 border-[#1e4d99] p-4 rounded-md">
              <div className="flex items-start">
                 <svg className="w-5 h-5 text-[#1e4d99] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-[#1e4d99] font-bold text-sm">Recommended:</h3>
                  <p className="text-gray-700 text-sm mt-1">This scenario reduces project duration significantly with manageable cost increase.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/results"
            className="px-6 py-2.5 bg-white text-[#1e4d99] font-semibold text-sm rounded-md border-2 border-[#1e4d99] hover:bg-gray-50 transition-all duration-200"
          >
            ← Back to Original
          </Link>
          <button className="px-6 py-2.5 bg-white text-[#1e4d99] font-semibold text-sm rounded-md border-2 border-[#1e4d99] hover:bg-gray-50 transition-all duration-200">
            Save This Scenario
          </button>
          <Link
            href="/export"
            className="px-6 py-2.5 bg-[#1e4d99] text-white font-semibold text-sm rounded-md hover:bg-[#16407a] transition-all duration-200"
          >
            Continue to Export →
          </Link>
        </div>
      </div>
    </div>
  );
}