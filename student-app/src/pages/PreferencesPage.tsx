import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import { api, Rotation } from '../../../../shared/api';
import { Heart, MapPin, CheckCircle, AlertCircle, Send } from 'lucide-react';

export const PreferencesPage: React.FC = () => {
  const { currentUser } = useStore();
  const [upcomingRotations, setUpcomingRotations] = useState<Rotation[]>([]);
  const [selectedRotation, setSelectedRotation] = useState<string>('');
  const [preferences, setPreferences] = useState({
    specialtyRank1: '',
    specialtyRank2: '',
    specialtyRank3: '',
    siteRank1: '',
    siteRank2: '',
    siteRank3: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const rotationTypes = api.getRotationTypes();
  const sites = api.getSites();

  useEffect(() => {
    const rotations = api.getRotations().filter(r => r.status === 'upcoming');
    setUpcomingRotations(rotations);
    if (rotations.length > 0) {
      setSelectedRotation(rotations[0].id);
    }

    // Check if already submitted
    if (currentUser && rotations.length > 0) {
      const existing = api.getPreferences().find(
        p => p.studentId === currentUser.id && p.rotationId === rotations[0].id
      );
      if (existing) {
        setPreferences({
          specialtyRank1: existing.specialtyRank1,
          specialtyRank2: existing.specialtyRank2,
          specialtyRank3: existing.specialtyRank3,
          siteRank1: existing.siteRank1,
          siteRank2: existing.siteRank2,
          siteRank3: existing.siteRank3
        });
        setSubmitted(true);
      }
    }
  }, [currentUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentUser || !selectedRotation) return;

    // Validate no duplicates
    const specialties = [preferences.specialtyRank1, preferences.specialtyRank2, preferences.specialtyRank3];
    const sites = [preferences.siteRank1, preferences.siteRank2, preferences.siteRank3];
    
    if (new Set(specialties).size !== 3) {
      alert('Please select 3 different specialties');
      return;
    }
    if (new Set(sites).size !== 3) {
      alert('Please select 3 different sites');
      return;
    }

    api.submitPreferences({
      studentId: currentUser.id,
      rotationId: selectedRotation,
      ...preferences
    });

    setSubmitted(true);
    alert('✅ Preferences submitted successfully!');
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 2: return 'bg-blue-100 text-blue-700 border-blue-300';
      case 3: return 'bg-gray-100 text-gray-700 border-gray-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getRankEmoji = (rank: number) => {
    switch (rank) {
      case 1: return '🥇';
      case 2: return '🥈';
      case 3: return '🥉';
      default: return '';
    }
  };

  if (!currentUser) return null;

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-primary-600 text-white p-6 rounded-b-3xl shadow-lg safe-area-top">
        <h1 className="text-2xl font-bold mb-1">Site Preferences</h1>
        <p className="text-primary-100">Rank your preferred specialties and sites</p>
      </div>

      <div className="p-4 space-y-4">
        {upcomingRotations.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center">
            <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-800 mb-2">No Upcoming Rotations</h3>
            <p className="text-gray-600 text-sm">
              Preference submission will open when new rotations are scheduled.
            </p>
          </div>
        ) : (
          <>
            {/* Rotation Selector */}
            <div className="bg-white rounded-2xl shadow-lg p-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Rotation Period
              </label>
              <select
                value={selectedRotation}
                onChange={(e) => {
                  setSelectedRotation(e.target.value);
                  setSubmitted(false);
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                {upcomingRotations.map(rotation => (
                  <option key={rotation.id} value={rotation.id}>
                    {rotation.name} ({new Date(rotation.startDate).toLocaleDateString()})
                  </option>
                ))}
              </select>
            </div>

            {submitted ? (
              /* Submitted View */
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-500 p-2 rounded-full">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Preferences Submitted!</h3>
                    <p className="text-sm text-gray-600">You can update your preferences until the deadline</p>
                  </div>
                </div>

                {/* Show submitted preferences */}
                <div className="space-y-4 mt-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Your Specialty Preferences</h4>
                    <div className="space-y-2">
                      {[preferences.specialtyRank1, preferences.specialtyRank2, preferences.specialtyRank3].map((id, idx) => {
                        const type = rotationTypes.find(rt => rt.id === id);
                        return type ? (
                          <div key={id} className={`p-3 rounded-lg border flex items-center gap-3 ${getRankColor(idx + 1)}`}>
                            <span className="text-xl">{getRankEmoji(idx + 1)}</span>
                            <span className="font-medium">{type.name}</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Your Site Preferences</h4>
                    <div className="space-y-2">
                      {[preferences.siteRank1, preferences.siteRank2, preferences.siteRank3].map((id, idx) => {
                        const site = sites.find(s => s.id === id);
                        return site ? (
                          <div key={id} className={`p-3 rounded-lg border flex items-center gap-3 ${getRankColor(idx + 1)}`}>
                            <span className="text-xl">{getRankEmoji(idx + 1)}</span>
                            <div className="flex-1">
                              <div className="font-medium">{site.name}</div>
                              <div className="text-xs opacity-75">{site.city}</div>
                            </div>
                          </div>
                        ) : null;
                      })}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full mt-6 bg-white text-primary-600 border-2 border-primary-600 font-semibold py-3 px-4 rounded-lg hover:bg-primary-50 transition-colors"
                >
                  Update Preferences
                </button>
              </div>
            ) : (
              /* Submission Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Instructions */}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                  <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    How It Works
                  </h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Rank 3 specialties in order of preference</li>
                    <li>• Rank 3 training sites in order of preference</li>
                    <li>• Our algorithm will find the best match for you</li>
                    <li>• Higher GPA students get priority in matching</li>
                  </ul>
                </div>

                {/* Specialty Preferences */}
                <div className="bg-white rounded-2xl shadow-lg p-5">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary-600" />
                    Specialty Preferences
                  </h3>
                  
                  <div className="space-y-3">
                    {(['specialtyRank1', 'specialtyRank2', 'specialtyRank3'] as const).map((field, idx) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {getRankEmoji(idx + 1)} Choice {idx + 1}
                        </label>
                        <select
                          value={preferences[field]}
                          onChange={(e) => setPreferences({ ...preferences, [field]: e.target.value })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          required
                        >
                          <option value="">Select specialty...</option>
                          {rotationTypes.map(rt => (
                            <option key={rt.id} value={rt.id}>{rt.name}</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Site Preferences */}
                <div className="bg-white rounded-2xl shadow-lg p-5">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    Site Preferences
                  </h3>
                  
                  <div className="space-y-3">
                    {(['siteRank1', 'siteRank2', 'siteRank3'] as const).map((field, idx) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {getRankEmoji(idx + 1)} Choice {idx + 1}
                        </label>
                        <select
                          value={preferences[field]}
                          onChange={(e) => setPreferences({ ...preferences, [field]: e.target.value })}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                          required
                        >
                          <option value="">Select site...</option>
                          {sites.map(site => (
                            <option key={site.id} value={site.id}>
                              {site.name} - {site.city}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Submit Preferences
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
};
