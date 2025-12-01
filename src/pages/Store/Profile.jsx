import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, MapPin, Edit2, Save } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345',
  });

  const handleSave = () => {
    setIsEditing(false);
    // In real app, update backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Profile</h1>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Sidebar */}
            <div className="space-y-4">
              <Link
                to="/profile"
                className="block bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold"
              >
                Profile
              </Link>
              <Link
                to="/orders"
                className="block bg-white hover:bg-gray-50 px-4 py-3 rounded-lg font-semibold transition"
              >
                Order History
              </Link>
              <button className="w-full text-left bg-white hover:bg-gray-50 px-4 py-3 rounded-lg font-semibold transition">
                Wishlist
              </button>
              <button className="w-full text-left bg-white hover:bg-gray-50 px-4 py-3 rounded-lg font-semibold transition">
                Settings
              </button>
              <button className="w-full text-left bg-red-50 text-red-600 hover:bg-red-100 px-4 py-3 rounded-lg font-semibold transition">
                Logout
              </button>
            </div>

            {/* Profile Info */}
            <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Personal Information</h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                ) : (
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </button>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2 text-gray-600">
                    <User className="w-4 h-4" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={userData.name}
                    onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg disabled:bg-gray-50"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    disabled={!isEditing}
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg disabled:bg-gray-50"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    disabled={!isEditing}
                    value={userData.phone}
                    onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg disabled:bg-gray-50"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium mb-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    Address
                  </label>
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={userData.address}
                    onChange={(e) => setUserData({ ...userData, address: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg disabled:bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
