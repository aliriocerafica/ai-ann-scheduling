'use client';

import Navbar from '../components/Navbar';
import Link from 'next/link';
import { useState } from 'react';

export default function ProjectsPage() {
  const [user] = useState({ name: 'John Doe', email: 'john@example.com' });
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: 1,
      name: 'Building Construction - Phase 1',
      location: 'Manila, Philippines',
      startDate: 'Jan 15, 2026',
      duration: '243 days',
      status: 'in-progress',
      completion: 45,
      type: 'Vertical',
      floors: 12,
    },
    {
      id: 2,
      name: 'Road Infrastructure Project',
      location: 'Angeles City, Pampanga',
      startDate: 'Jan 10, 2026',
      duration: '180 days',
      status: 'pending',
      completion: 0,
      type: 'Horizontal',
      floors: null,
    },
    {
      id: 3,
      name: 'Residential Complex - Tower A',
      location: 'Quezon City, Philippines',
      startDate: 'Dec 1, 2025',
      duration: '320 days',
      status: 'completed',
      completion: 100,
      type: 'Vertical',
      floors: 15,
    },
    {
      id: 4,
      name: 'Commercial Plaza Development',
      location: 'Makati City, Philippines',
      startDate: 'Jan 20, 2026',
      duration: '280 days',
      status: 'in-progress',
      completion: 30,
      type: 'Vertical',
      floors: 8,
    },
    {
      id: 5,
      name: 'Bridge Construction Project',
      location: 'Bulacan, Philippines',
      startDate: 'Dec 15, 2025',
      duration: '365 days',
      status: 'in-progress',
      completion: 55,
      type: 'Horizontal',
      floors: null,
    },
    {
      id: 6,
      name: 'Hospital Expansion - Wing B',
      location: 'San Fernando, Pampanga',
      startDate: 'Nov 1, 2025',
      duration: '410 days',
      status: 'completed',
      completion: 100,
      type: 'Vertical',
      floors: 6,
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesTab = activeTab === 'all' || project.status === activeTab;
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'px-3 py-1 bg-blue-50 text-[#1e4d99] text-xs font-semibold rounded-full border border-blue-100';
      case 'pending':
        return 'px-3 py-1 bg-blue-50 text-[#1e4d99] text-xs font-semibold rounded-full border border-blue-100';
      case 'completed':
        return 'px-3 py-1 bg-blue-50 text-[#1e4d99] text-xs font-semibold rounded-full border border-blue-100';
      default:
        return 'px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'In Progress';
      case 'pending':
        return 'Pending Review';
      case 'completed':
        return 'Completed';
      default:
        return status;
    }
  };

  const stats = {
    total: projects.length,
    inProgress: projects.filter(p => p.status === 'in-progress').length,
    completed: projects.filter(p => p.status === 'completed').length,
    pending: projects.filter(p => p.status === 'pending').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} />

      {/* Header Section */}
      <section className="relative bg-linear-to-br from-[#003d82] via-[#0052a8] to-[#0066cc] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 max-w-7xl">
          <h1 className="text-2xl font-bold mb-2">Projects</h1>
          <p className="text-blue-100 text-sm">Manage and track all your construction projects</p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600 mb-1">Total Projects</p>
                <p className="text-2xl font-bold text-[#1e4d99]">{stats.total}</p>
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1e4d99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600 mb-1">In Progress</p>
                <p className="text-2xl font-bold text-[#1e4d99]">{stats.inProgress}</p>
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1e4d99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600 mb-1">Completed</p>
                <p className="text-2xl font-bold text-[#1e4d99]">{stats.completed}</p>
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1e4d99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-600 mb-1">Pending</p>
                <p className="text-2xl font-bold text-[#1e4d99]">{stats.pending}</p>
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1e4d99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4d99] focus:border-transparent outline-none text-sm text-gray-900 placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                  activeTab === 'all'
                    ? 'bg-[#1e4d99] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('in-progress')}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                  activeTab === 'in-progress'
                    ? 'bg-[#1e4d99] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                  activeTab === 'completed'
                    ? 'bg-[#1e4d99] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Completed
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:border-[#1e4d99] hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{project.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                  </div>
                  <span className={getStatusBadge(project.status)}>
                    {getStatusText(project.status)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Start Date</p>
                    <p className="text-sm font-semibold text-gray-900">{project.startDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Duration</p>
                    <p className="text-sm font-semibold text-gray-900">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Project Type</p>
                    <p className="text-sm font-semibold text-gray-900">{project.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">{project.type === 'Vertical' ? 'Floors' : 'Units'}</p>
                    <p className="text-sm font-semibold text-gray-900">{project.floors || 'N/A'}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-700">Progress</span>
                    <span className="text-xs font-bold text-[#1e4d99]">{project.completion}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#1e4d99] h-2 rounded-full transition-all duration-300"
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={`/results`}
                    className="flex-1 px-4 py-2 bg-[#1e4d99] text-white text-sm font-semibold rounded-md hover:bg-[#16407a] transition-colors text-center"
                  >
                    View Details
                  </Link>
                  <button className="px-4 py-2 bg-white text-[#1e4d99] text-sm font-semibold rounded-md border-2 border-[#1e4d99] hover:bg-gray-50 transition-colors">
                    Export
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-base font-semibold text-gray-900 mb-2">No Projects Found</h3>
            <p className="text-gray-600 text-sm mb-4">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* New Project Button */}
        <div className="mt-8 text-center">
          <Link
            href="/schedule"
            className="inline-flex items-center px-6 py-2.5 bg-[#1e4d99] text-white font-semibold text-sm rounded-md hover:bg-[#16407a] transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Start New Project
          </Link>
        </div>
      </div>
    </div>
  );
}