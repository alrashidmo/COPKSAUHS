import React, { useEffect, useState } from 'react';
import { useStore } from '../store';
import { api, Assignment, Rotation } from '../../../../shared/api';
import { Calendar, MapPin, User, Phone, Mail, Navigation } from 'lucide-react';

export const SchedulePage: React.FC = () => {
  const { currentUser } = useStore();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [rotations, setRotations] = useState<Rotation[]>([]);

  useEffect(() => {
    if (currentUser) {
      const studentAssignments = api.getStudentAssignments(currentUser.id);
      setAssignments(studentAssignments);

      const assignmentRotationIds = studentAssignments.map(a => a.rotationId);
      const allRotations = api.getRotations();
      setRotations(allRotations.filter(r => assignmentRotationIds.includes(r.id)));
    }
  }, [currentUser]);

  if (!currentUser) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'completed':
        return 'bg-gray-100 text-gray-700 border-gray-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-primary-600 text-white p-6 rounded-b-3xl shadow-lg safe-area-top">
        <h1 className="text-2xl font-bold mb-1">My Schedule</h1>
        <p className="text-primary-100">View all your rotation assignments</p>
      </div>

      <div className="p-4 space-y-4">
        {rotations.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">No Rotations Yet</h3>
            <p className="text-gray-600 text-sm">
              Your rotation assignments will appear here once they are scheduled.
            </p>
          </div>
        ) : (
          <>
            {/* Timeline */}
            <div className="relative">
              {rotations.map((rotation, index) => {
                const assignment = assignments.find(a => a.rotationId === rotation.id);
                const rotationType = api.getRotationType(rotation.rotationTypeId);
                const preceptor = assignment ? api.getPreceptor(assignment.preceptorId) : null;
                const site = assignment ? api.getSite(assignment.siteId) : null;

                return (
                  <div key={rotation.id} className="relative pb-8">
                    {/* Timeline line */}
                    {index < rotations.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200" />
                    )}

                    {/* Rotation Card */}
                    <div className="relative flex gap-4">
                      {/* Timeline dot */}
                      <div className="flex-shrink-0 mt-2">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          rotation.status === 'active' ? 'bg-green-500' :
                          rotation.status === 'upcoming' ? 'bg-blue-500' :
                          'bg-gray-400'
                        }`}>
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Card content */}
                      <div className="flex-1">
                        <div className="bg-white rounded-2xl shadow-lg p-5 border-l-4 border-primary-500">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-bold text-gray-800">
                                {rotationType?.name}
                              </h3>
                              <p className="text-sm text-gray-500">{rotation.name}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(rotation.status)}`}>
                              {rotation.status.charAt(0).toUpperCase() + rotation.status.slice(1)}
                            </span>
                          </div>

                          {/* Duration */}
                          <div className="bg-gray-50 rounded-lg p-3 mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                              <Calendar className="w-4 h-4 text-primary-500" />
                              <span className="font-medium">
                                {new Date(rotation.startDate).toLocaleDateString('en-US', { 
                                  month: 'short', day: 'numeric', year: 'numeric' 
                                })}
                                {' - '}
                                {new Date(rotation.endDate).toLocaleDateString('en-US', { 
                                  month: 'short', day: 'numeric', year: 'numeric' 
                                })}
                              </span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1 ml-6">
                              {Math.ceil((new Date(rotation.endDate).getTime() - new Date(rotation.startDate).getTime()) / (1000 * 60 * 60 * 24 * 7))} weeks
                            </div>
                          </div>

                          {/* Site & Preceptor */}
                          {site && preceptor && (
                            <div className="space-y-3">
                              {/* Site */}
                              <div>
                                <div className="flex items-start gap-2">
                                  <MapPin className="w-4 h-4 text-primary-500 mt-0.5" />
                                  <div className="flex-1">
                                    <div className="font-semibold text-gray-800 text-sm">
                                      {site.name}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                      {site.address}, {site.city}
                                    </div>
                                    <button className="text-xs text-primary-600 hover:text-primary-700 font-medium mt-1 flex items-center gap-1">
                                      <Navigation className="w-3 h-3" />
                                      Get directions
                                    </button>
                                  </div>
                                </div>
                              </div>

                              {/* Preceptor */}
                              <div className="bg-blue-50 rounded-lg p-3">
                                <div className="flex items-start gap-2 mb-2">
                                  <User className="w-4 h-4 text-blue-600 mt-0.5" />
                                  <div className="flex-1">
                                    <div className="font-semibold text-gray-800 text-sm">
                                      {preceptor.firstName} {preceptor.lastName}
                                    </div>
                                    <div className="text-xs text-gray-600">{preceptor.specialty}</div>
                                  </div>
                                </div>
                                <div className="space-y-1 ml-6">
                                  <a href={`tel:${preceptor.phone}`} className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-700">
                                    <Phone className="w-3 h-3" />
                                    {preceptor.phone}
                                  </a>
                                  <a href={`mailto:${preceptor.email}`} className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-700">
                                    <Mail className="w-3 h-3" />
                                    {preceptor.email}
                                  </a>
                                </div>
                              </div>

                              {/* Match Score */}
                              {assignment.matchScore && (
                                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                  <span className="text-sm text-gray-700">Preference Match</span>
                                  <span className="text-lg font-bold text-green-600">
                                    {assignment.matchScore}%
                                  </span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
