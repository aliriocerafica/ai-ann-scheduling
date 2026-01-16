'use client';

import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function SchedulePage() {
  const [user] = useState({ name: 'John Doe', email: 'john@example.com' });
  const [currentStep] = useState(1);
  const [projectType, setProjectType] = useState('vertical');

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
                    {step.number}
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

        {/* Project Information Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-bold text-[#1e4d99] mb-6 pb-3 border-b border-gray-200">
            Project Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Name
              </label>
              <input
                type="text"
                placeholder="Enter Project Name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-sm text-gray-900 placeholder:text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Engineer Name
              </label>
              <input
                type="text"
                placeholder="Enter Engineer Name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-sm text-gray-900 placeholder:text-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter Project Location"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-sm text-gray-900 placeholder:text-gray-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Project Type
            </label>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="projectType"
                  value="vertical"
                  checked={projectType === 'vertical'}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-4 h-4 text-[#1e4d99] focus:ring-[#1e4d99]"
                />
                <span className="ml-2 text-sm text-gray-700">Vertical (Repetitive floors)</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="projectType"
                  value="horizontal"
                  checked={projectType === 'horizontal'}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-4 h-4 text-[#1e4d99] focus:ring-[#1e4d99]"
                />
                <span className="ml-2 text-sm text-gray-700">Horizontal/Linear (Subdivision cycles)</span>
              </label>
            </div>
          </div>

          <div className="max-w-xs">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of {projectType === 'vertical' ? 'Floors' : 'Units'}
            </label>
            <input
              type="number"
              placeholder={`Enter Number of ${projectType === 'vertical' ? 'Floors' : 'Units'}`}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-sm text-gray-900 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Detailed Project Data Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-bold text-[#1e4d99] mb-6 pb-3 border-b border-gray-200">
            Detailed Project Data
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Column 1: Detailed Project Data */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">Activity Durations</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Foundation Work (days)</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Structural Work (days)</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Roofing (days)</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Testing & Turnover (days)</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* Column 2: Average Cycle Time */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">Average Cycle Time</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Beam & Slab (days)</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Concrete & Curing (days)</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Wall & Floor (days)</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Painting (days)</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Plumbing & Electrical (days)</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* Column 3: Labor Count */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">Labor Count</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">General Worker</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Foreman</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Steel Bar Worker</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Concrete Worker</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Painting Worker</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Plumbing Worker</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Electrical Worker</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* Column 4: Equipment */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">Equipment</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Crane</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Excavator</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Concrete Mixer</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Compactor</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Dump Truck</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>

            {/* Column 5: Working Days */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">Working Schedule</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Days Per Week</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">Hours Per Day</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-2.5 bg-white text-[#1e4d99] font-semibold text-sm rounded-md border-2 border-[#1e4d99] hover:bg-gray-50 transition-all duration-200">
            Save as Draft
          </button>
          <Link
            href="/results"
            className="inline-block px-6 py-2.5 bg-[#1e4d99] text-white font-semibold text-sm rounded-md hover:bg-[#16407a] transition-all duration-200"
          >
            Run Prediction →
          </Link>
        </div>
      </div>
    </div>
  );
}