import React from 'react';
import { useAuth } from '../context/AuthContext';
import { UserCircle, Mail, Phone, Calendar } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        
        {/* Header Header */}
        <div className="bg-blue-600 dark:bg-blue-800 px-6 py-8 sm:p-10 text-center">
           <div className="inline-block bg-white/20 p-4 rounded-full text-white mb-4 backdrop-blur-sm">
             <UserCircle size={64} />
           </div>
           <h1 className="text-3xl font-bold text-white mb-1">{user.name}</h1>
           <p className="text-blue-100 font-medium">Patient Profile</p>
        </div>

        {/* Profile Info */}
        <div className="p-6 sm:p-10">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 border-b pb-2 dark:border-gray-700">Account Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Email Address</p>
                <p className="text-gray-900 dark:text-white font-semibold">{user.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-lg text-green-600 dark:text-green-400">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Phone Number</p>
                <p className="text-gray-900 dark:text-white font-semibold">{user.phone || 'Not provided'}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
              <div className="bg-purple-100 dark:bg-purple-900/40 p-3 rounded-lg text-purple-600 dark:text-purple-400">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Account ID</p>
                <p className="text-gray-900 dark:text-white font-mono text-sm break-all">{user.id}</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
