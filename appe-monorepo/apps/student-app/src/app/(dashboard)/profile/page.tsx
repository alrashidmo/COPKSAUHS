'use client';

import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div>
      <div className="bg-gradient-to-br from-primary to-primary-light text-white p-6 rounded-b-3xl pb-20">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <p className="text-white/90 mt-1">Manage your account</p>
      </div>

      <div className="p-4 -mt-12">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-light to-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
              AA
            </div>
            <div>
              <h2 className="text-xl font-bold">Ahmed Al-Mansour</h2>
              <p className="text-gray-600">442202001</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-600">Email</div>
              <div className="font-medium">{user?.email || 'N/A'}</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-600">Phone</div>
              <div className="font-medium">+966501234567</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-600">GPA</div>
              <div className="font-medium">4.75</div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-white rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-3">About</h3>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>App Version</span>
            <span className="font-medium text-gray-900">1.0.0</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Last Updated</span>
            <span className="font-medium text-gray-900">Jan 2026</span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-500 text-white py-3 rounded-xl font-semibold"
        >
          🚪 Sign Out
        </button>
      </div>
    </div>
  );
}
