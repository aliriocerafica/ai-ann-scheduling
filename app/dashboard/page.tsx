'use client';

import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function Dashboard() {
  const [user] = useState({ name: 'John Doe', email: 'john@example.com' });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} />
      
      {/* Welcome Section */}
      <section className="relative bg-gradient-to-br from-[#003d82] via-[#0052a8] to-[#0066cc] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 max-w-7xl">
          <h1 className="text-2xl font-bold mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-blue-100 text-sm">
            Manage your construction projects and schedules
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Active Projects Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Active Projects</h3>
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1e4d99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-[#1e4d99]">5</p>
            <p className="text-xs text-gray-500 mt-1">Projects in progress</p>
          </div>

          {/* Completed Schedules Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Completed</h3>
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1e4d99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-[#1e4d99]">12</p>
            <p className="text-xs text-gray-500 mt-1">Schedules completed</p>
          </div>

          {/* Pending Reviews Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-900">Pending</h3>
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1e4d99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-[#1e4d99]">3</p>
            <p className="text-xs text-gray-500 mt-1">Awaiting review</p>
          </div>
        </div>

        {/* Recent Projects Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-[#1e4d99]">Recent Projects</h2>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {/* Project Item 1 */}
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#1e4d99] hover:bg-blue-50 transition-all">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">Building Construction - Phase 1</h3>
                  <p className="text-xs text-gray-500 mt-1">Started: Jan 15, 2026</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-blue-50 text-[#1e4d99] text-xs font-medium rounded-full border border-blue-100">
                    In Progress
                  </span>
                  <button className="text-[#1e4d99] hover:text-[#16407a] font-medium text-sm">
                    View →
                  </button>
                </div>
              </div>

              {/* Project Item 2 */}
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#1e4d99] hover:bg-blue-50 transition-all">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">Road Infrastructure Project</h3>
                  <p className="text-xs text-gray-500 mt-1">Started: Jan 10, 2026</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-blue-50 text-[#1e4d99] text-xs font-medium rounded-full border border-blue-100">
                    Pending Review
                  </span>
                  <button className="text-[#1e4d99] hover:text-[#16407a] font-medium text-sm">
                    View →
                  </button>
                </div>
              </div>

              {/* Project Item 3 */}
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#1e4d99] hover:bg-blue-50 transition-all">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">Residential Complex - Tower A</h3>
                  <p className="text-xs text-gray-500 mt-1">Completed: Jan 8, 2026</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-blue-50 text-[#1e4d99] text-xs font-medium rounded-full border border-blue-100">
                    Completed
                  </span>
                  <button className="text-[#1e4d99] hover:text-[#16407a] font-medium text-sm">
                    View →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-sm border-2 border-[#1e4d99] p-6">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-[#1e4d99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1e4d99] mb-2">Start New Project</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Create a new construction scheduling project with AI-powered predictions
                </p>
                <button className="bg-[#1e4d99] text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#16407a] transition-colors">
                  Create Project
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border-2 border-[#1e4d99] p-6">
            <div className="flex items-start mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-[#1e4d99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-bold text-[#1e4d99] mb-2">Run Schedule Calculation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Generate optimized schedules for your existing projects
                </p>
                <Link
                  href="/schedule"
                  className="inline-block bg-[#1e4d99] text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#16407a] transition-colors"
                >
                  Run Calculation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}