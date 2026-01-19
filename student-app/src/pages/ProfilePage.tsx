import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { api } from '../../../../shared/api';
import { User, Mail, Phone, Award, Calendar, LogOut, Settings, Bell, FileText } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { currentUser, setCurrentUser } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    api.logout();
    setCurrentUser(null);
    navigate('/');
  };

  if (!currentUser) return null;

  return (
    <div className="pb-20">
      {/* Header with gradient */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-6 pb-20 rounded-b-3xl shadow-lg safe-area-top">
        <h1 className="text-2xl font-bold mb-1">My Profile</h1>
        <p className="text-primary-100">Manage your account settings</p>
      </div>

      <div className="px-4 -mt-12 space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {currentUser.firstName.charAt(0)}{currentUser.lastName.charAt(0)}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">
                {currentUser.firstName} {currentUser.lastName}
              </h2>
              <p className="text-gray-600">{currentUser.studentNumber}</p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-primary-600" />
              <div className="flex-1">
                <div className="text-xs text-gray-500">Email</div>
                <div className="text-sm font-medium text-gray-800">{currentUser.email}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="w-5 h-5 text-primary-600" />
              <div className="flex-1">
                <div className="text-xs text-gray-500">Phone</div>
                <div className="text-sm font-medium text-gray-800">{currentUser.phone}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Award className="w-5 h-5 text-primary-600" />
              <div className="flex-1">
                <div className="text-xs text-gray-500">GPA</div>
                <div className="text-sm font-medium text-gray-800">{currentUser.gpa.toFixed(2)}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5 text-primary-600" />
              <div className="flex-1">
                <div className="text-xs text-gray-500">Enrollment Year</div>
                <div className="text-sm font-medium text-gray-800">{currentUser.enrollmentYear}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <h3 className="font-bold text-gray-800 p-4 border-b border-gray-200">Settings</h3>
          
          <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <Bell className="w-5 h-5 text-gray-600" />
            <div className="flex-1 text-left">
              <div className="font-medium text-gray-800">Notifications</div>
              <div className="text-xs text-gray-500">Manage notification preferences</div>
            </div>
          </button>

          <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <FileText className="w-5 h-5 text-gray-600" />
            <div className="flex-1 text-left">
              <div className="font-medium text-gray-800">Documents</div>
              <div className="text-xs text-gray-500">View and upload documents</div>
            </div>
          </button>

          <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
            <div className="flex-1 text-left">
              <div className="font-medium text-gray-800">App Settings</div>
              <div className="text-xs text-gray-500">Theme, language, and more</div>
            </div>
          </button>
        </div>

        {/* About */}
        <div className="bg-white rounded-2xl shadow-lg p-5">
          <h3 className="font-bold text-gray-800 mb-3">About</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>App Version</span>
              <span className="font-medium">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span>Last Updated</span>
              <span className="font-medium">Jan 2026</span>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm py-4">
          © 2026 APPE Experience Hub
        </p>
      </div>
    </div>
  );
};
