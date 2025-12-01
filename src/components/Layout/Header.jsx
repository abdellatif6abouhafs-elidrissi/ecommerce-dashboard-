import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/60 backdrop-blur-xl border-b border-gray-200/50 h-16 fixed top-0 right-0 left-64 z-10 shadow-sm">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-11 pr-4 py-2.5 bg-gray-100/80 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button className="relative p-2.5 text-gray-600 hover:bg-gray-100/80 rounded-xl transition-all">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
          </button>

          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200/50">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-700">Admin User</p>
              <p className="text-xs text-gray-500">admin@abodashboard.com</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center hover:shadow-lg transition-all">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
