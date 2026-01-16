'use client';

import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function ResultsPage() {
  const [user] = useState({ name: 'John Doe', email: 'john@example.com' });
  const [currentStep] = useState(3);
  const [activeTab, setActiveTab] = useState('overview');

  const steps = [
    { number: 1, label: 'Data Input' },
    { number: 2, label: 'Prediction' },
    { number: 3, label: 'Results' },
    { number: 4, label: 'Export' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'gantt', label: 'Gantt Chart' },
    { id: 'risk', label: 'Risk Analysis' },
    { id: 'comparisons', label: 'Comparisons' },
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

        {/* Success Message */}
        <div className="bg-blue-50 border-l-4 border-[#1e4d99] p-4 mb-6 rounded-md">
          <div className="flex items-start">
             <svg className="w-5 h-5 text-[#1e4d99] mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-[#1e4d99] font-bold text-sm">Prediction Complete!</h3>
              <p className="text-gray-700 text-sm mt-1">Your optimized project schedule has been generated using ANN model analysis.</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-semibold text-sm transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'border-[#1e4d99] text-[#1e4d99]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            <h2 className="text-lg font-bold text-[#1e4d99] mb-6">Prediction Results</h2>

            {/* Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              {/* Optimized Schedule */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center text-sm">
                  <svg className="w-5 h-5 text-[#1e4d99] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Optimized Schedule
                </h3>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Duration</span>
                    <span className="font-bold text-gray-900 text-sm">243 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Start Date</span>
                    <span className="font-medium text-gray-900 text-sm">Jan 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">End Date</span>
                    <span className="font-medium text-gray-900 text-sm">Sep 16, 2025</span>
                  </div>
                </div>
              </div>

              {/* Delay Risk Assessment */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center text-sm">
                  <svg className="w-5 h-5 text-[#1e4d99] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Delay Risk Assessment
                </h3>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Risk Level</span>
                    <span className="px-2.5 py-1 bg-[#1e4d99] text-white rounded-full text-xs font-semibold">Medium 15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Critical Activities</span>
                    <span className="font-bold text-gray-900 text-sm">5 activities</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Buffer Required</span>
                    <span className="font-medium text-gray-900 text-sm">15 days</span>
                  </div>
                </div>
              </div>

              {/* Proposed Adjustments */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center text-sm">
                  <svg className="w-5 h-5 text-[#1e4d99] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Proposed Adjustments
                </h3>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cycle Optimization</span>
                    <span className="font-bold text-[#1e4d99] text-sm">-12 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Resource Reallocation</span>
                    <span className="font-medium text-[#1e4d99] text-sm">Recommended</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Efficiency Gain</span>
                    <span className="font-bold text-[#1e4d99] text-sm">+18%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gantt Chart */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center text-sm">
                <svg className="w-5 h-5 text-[#1e4d99] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Auto-Generated Gantt Chart
              </h3>
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-gray-500 text-sm">Interactive Gantt Chart Display</p>
                </div>
              </div>
            </div>

            {/* Comparison Chart */}
            <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center text-sm">
                <svg className="w-5 h-5 text-[#1e4d99] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                Historical vs Optimized Comparison
              </h3>
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-gray-500 text-sm">Comparison Chart</p>
                </div>
              </div>
            </div>

            {/* Critical Activities */}
            <div className="bg-blue-50 border-l-4 border-[#1e4d99] p-4 rounded-md">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center text-sm">
                <svg className="w-5 h-5 text-[#1e4d99] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Critical Activities Highlighted
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#1e4d99] mr-2">•</span>
                  <span><strong>Structural Work</strong> - Floor 3-5 (High Priority)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e4d99] mr-2">•</span>
                  <span><strong>Concrete Pouring</strong> - Floor 7 (Resource Conflicted)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e4d99] mr-2">•</span>
                  <span><strong>Plumbing Installation</strong> - Floor 9-12 (3 Days warning)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link
            href="/schedule"
            className="px-6 py-2.5 bg-white text-[#1e4d99] font-semibold text-sm rounded-md border-2 border-[#1e4d99] hover:bg-gray-50 transition-all duration-200"
          >
            ← Modify Data
          </Link>
          <Link
            href="/scenario"
            className="px-6 py-2.5 bg-white text-[#1e4d99] font-semibold text-sm rounded-md border-2 border-[#1e4d99] hover:bg-gray-50 transition-all duration-200"
          >
            Run What-If Scenario
          </Link>
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