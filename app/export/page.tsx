'use client';

import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function ExportPage() {
  const [user] = useState({ name: 'John Doe', email: 'john@example.com' });
  const [currentStep] = useState(4);

  const steps = [
    { number: 1, label: 'Data Input' },
    { number: 2, label: 'Prediction' },
    { number: 3, label: 'Results' },
    { number: 4, label: 'Export' },
  ];

  const exportContents = [
    { id: 1, label: 'Project Information' },
    { id: 2, label: 'Optimized Schedule' },
    { id: 3, label: 'Risk Assessment' },
    { id: 4, label: 'Proposed Adjustments' },
    { id: 5, label: 'Engineer Details' },
    { id: 6, label: 'Gantt Charts' },
    { id: 7, label: 'Comparison Analysis' },
    { id: 8, label: 'System Metadata' },
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
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-white text-[#003d82]">
                    {step.number < currentStep ? '✓' : step.number}
                  </div>
                  <span className="text-white text-xs mt-2 whitespace-nowrap font-medium">{step.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 bg-white mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Choose Your Action */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-lg font-bold text-[#1e4d99] text-center mb-2">Choose Your Action</h2>
            <p className="text-gray-600 text-center text-sm mb-6">Select how you want to handle your project results</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* View Only */}
              <div className="border-2 border-gray-200 rounded-lg p-5 text-center hover:border-[#1e4d99] hover:shadow-sm transition-all duration-200">
                <div className="w-14 h-14 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#1e4d99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">View Only</h3>
                <p className="text-xs text-gray-600 mb-4">Review results without saving to the system</p>
                <button className="w-full px-4 py-2 bg-white text-[#1e4d99] font-semibold text-sm rounded-md border-2 border-[#1e4d99] hover:bg-gray-50 transition-all duration-200">
                  View
                </button>
              </div>

              {/* Save Result */}
              <div className="border-2 border-gray-200 rounded-lg p-5 text-center hover:border-[#1e4d99] hover:shadow-sm transition-all duration-200">
                <div className="w-14 h-14 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#1e4d99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Save Result</h3>
                <p className="text-xs text-gray-600 mb-4">Save for internal use and future reference</p>
                <button className="w-full px-4 py-2 bg-white text-[#1e4d99] font-semibold text-sm rounded-md border-2 border-[#1e4d99] hover:bg-gray-50 transition-all duration-200">
                  Save
                </button>
              </div>

              {/* Generate Document */}
              <div className="border-2 border-[#1e4d99] rounded-lg p-5 text-center bg-blue-50">
                <div className="w-14 h-14 mx-auto mb-4 bg-[#1e4d99] rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">Generate Document</h3>
                <p className="text-xs text-gray-600 mb-4">Export full report in PDF format</p>
                <button className="w-full px-4 py-2 bg-[#1e4d99] text-white font-semibold text-sm rounded-md hover:bg-[#16407a] transition-all duration-200">
                  Generate PDF
                </button>
              </div>
            </div>
          </div>

          {/* Export Contents */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center text-sm">
              <svg className="w-5 h-5 text-[#1e4d99] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export Contents
            </h3>
            <p className="text-gray-600 text-sm mb-4">Your PDF document will include:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {exportContents.map((item) => (
                <div key={item.id} className="flex items-center p-3 bg-blue-50 rounded-md border border-blue-100">
                  <svg className="w-5 h-5 text-[#1e4d99] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/results"
              className="px-6 py-2.5 bg-white text-[#1e4d99] font-semibold text-sm rounded-md border-2 border-[#1e4d99] hover:bg-gray-50 transition-all duration-200"
            >
              ← Back to Results
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-2.5 bg-[#1e4d99] text-white font-semibold text-sm rounded-md hover:bg-[#16407a] transition-all duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Complete & New Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}