'use client';

import { useEffect, useState } from 'react';
import { studentApi } from '@/lib/api';
import type { StudentDashboardDto } from '@appe/shared';

export default function DashboardPage() {
  const [data, setData] = useState<StudentDashboardDto | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const response = await studentApi.getDashboard();
      setData(response.data);
    } catch (error) {
      console.error('Failed to load dashboard', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>;
  }

  return (
    <div>
      <div className="bg-gradient-to-br from-primary to-primary-light text-white p-6 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-white/90">Ahmed Al-Mansour</p>
        
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">{data?.stats.gpa.toFixed(2)}</div>
            <div className="text-xs opacity-90">GPA</div>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">{data?.stats.attendance}%</div>
            <div className="text-xs opacity-90">Attendance</div>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">{data?.stats.completedRotations}</div>
            <div className="text-xs opacity-90">Rotations</div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {data?.currentRotation && (
          <div className="bg-white rounded-xl p-4 shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="text-xs font-semibold text-primary-light mb-1">CURRENT ROTATION</div>
                <h2 className="text-lg font-bold">{data.currentRotation.name}</h2>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Active
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{data.currentRotation.siteName}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-4 h-4 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{data.currentRotation.preceptorName}</span>
              </div>
            </div>
            {data.currentRotation.matchScore && (
              <div className="mt-3 pt-3 border-t flex justify-between items-center">
                <span className="text-sm text-gray-600">Match Score</span>
                <span className="text-lg font-bold text-primary-light">{data.currentRotation.matchScore}%</span>
              </div>
            )}
          </div>
        )}

        {data?.upcomingRotations && data.upcomingRotations.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 px-1">Upcoming Rotations</h3>
            {data.upcomingRotations.map((rotation) => (
              <div key={rotation.id} className="bg-white rounded-xl p-4 shadow mb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{rotation.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {new Date(rotation.startDate).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Upcoming
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
