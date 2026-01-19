import React, { useEffect, useState } from 'react';
import { useStore } from '../store';
import { api, Assignment, Rotation, Attendance } from '../../../../shared/api';
import { Calendar, Clock, MapPin, Award, CheckCircle, Bell } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { currentUser } = useStore();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [rotations, setRotations] = useState<Rotation[]>([]);
  const [attendanceStats, setAttendanceStats] = useState({ total: 0, present: 0, percentage: 0 });

  useEffect(() => {
    if (currentUser) {
      // Load student's assignments
      const studentAssignments = api.getStudentAssignments(currentUser.id);
      setAssignments(studentAssignments);

      // Load rotations
      const allRotations = api.getRotations();
      setRotations(allRotations);

      // Calculate attendance stats
      const attendance = api.getStudentAttendance(currentUser.id);
      const present = attendance.filter(a => a.status === 'present').length;
      setAttendanceStats({
        total: attendance.length || 1,
        present,
        percentage: attendance.length > 0 ? Math.round((present / attendance.length) * 100) : 0
      });
    }
  }, [currentUser]);

  if (!currentUser) return null;

  // Get current/active rotation
  const currentAssignment = assignments.find(a => a.status === 'assigned');
  const currentRotation = currentAssignment ? rotations.find(r => r.id === currentAssignment.rotationId) : null;
  const currentPreceptor = currentAssignment ? api.getPreceptor(currentAssignment.preceptorId) : null;
  const currentSite = currentAssignment ? api.getSite(currentAssignment.siteId) : null;
  const rotationType = currentRotation ? api.getRotationType(currentRotation.rotationTypeId) : null;

  // Get upcoming rotations
  const upcomingRotations = rotations.filter(r => r.status === 'upcoming').slice(0, 2);

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-primary-600 text-white p-6 rounded-b-3xl shadow-lg safe-area-top">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="text-primary-100">{currentUser.firstName} {currentUser.lastName}</p>
          </div>
          <div className="relative">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              1
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">{currentUser.gpa}</div>
            <div className="text-xs text-primary-100">GPA</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">{attendanceStats.percentage}%</div>
            <div className="text-xs text-primary-100">Attendance</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-2xl font-bold">{assignments.length}</div>
            <div className="text-xs text-primary-100">Rotations</div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Current Rotation Card */}
        {currentRotation && currentPreceptor && currentSite && rotationType ? (
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-primary-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm text-primary-600 font-semibold mb-1">CURRENT ROTATION</div>
                <h2 className="text-xl font-bold text-gray-800">{rotationType.name}</h2>
              </div>
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Active
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="w-5 h-5 text-primary-500" />
                <div className="text-sm">
                  <span className="font-medium">
                    {new Date(currentRotation.startDate).toLocaleDateString()} - {new Date(currentRotation.endDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-primary-500" />
                <div className="text-sm">
                  <span className="font-medium">{currentSite.name}</span>
                  <div className="text-gray-500">{currentSite.city}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Award className="w-5 h-5 text-primary-500" />
                <div className="text-sm">
                  <span className="font-medium">
                    {currentPreceptor.firstName} {currentPreceptor.lastName}
                  </span>
                  <div className="text-gray-500">{currentPreceptor.specialty}</div>
                </div>
              </div>
            </div>

            {currentAssignment.matchScore && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Match Score</span>
                  <span className="text-lg font-bold text-primary-600">{currentAssignment.matchScore}%</span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center">
            <Calendar className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-1">No Active Rotation</h3>
            <p className="text-sm text-gray-600">Check upcoming rotations below</p>
          </div>
        )}

        {/* Upcoming Rotations */}
        {upcomingRotations.length > 0 && (
          <div>
            <h3 className="font-bold text-gray-800 mb-3 px-2">Upcoming Rotations</h3>
            <div className="space-y-3">
              {upcomingRotations.map(rotation => {
                const type = api.getRotationType(rotation.rotationTypeId);
                return (
                  <div key={rotation.id} className="bg-white rounded-xl shadow p-4 border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{type?.name}</h4>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{new Date(rotation.startDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Upcoming
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div>
          <h3 className="font-bold text-gray-800 mb-3 px-2">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white rounded-xl shadow p-4 text-left hover:shadow-md transition-shadow">
              <CheckCircle className="w-8 h-8 text-primary-600 mb-2" />
              <div className="font-semibold text-gray-800">Check In</div>
              <div className="text-xs text-gray-500">Mark attendance</div>
            </button>

            <button className="bg-white rounded-xl shadow p-4 text-left hover:shadow-md transition-shadow">
              <Calendar className="w-8 h-8 text-primary-600 mb-2" />
              <div className="font-semibold text-gray-800">My Schedule</div>
              <div className="text-xs text-gray-500">View rotations</div>
            </button>
          </div>
        </div>

        {/* Compliance Status */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-500 p-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Compliance Status</h3>
              <p className="text-sm text-gray-600">All requirements up to date</p>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="flex-1 bg-white rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-green-600">✓</div>
              <div className="text-xs text-gray-600">Documents</div>
            </div>
            <div className="flex-1 bg-white rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-green-600">{attendanceStats.percentage}%</div>
              <div className="text-xs text-gray-600">Attendance</div>
            </div>
            <div className="flex-1 bg-white rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-green-600">✓</div>
              <div className="text-xs text-gray-600">Evaluations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
