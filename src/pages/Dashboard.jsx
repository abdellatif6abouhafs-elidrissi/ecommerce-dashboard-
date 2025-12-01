import { DollarSign, ShoppingCart, Users, TrendingUp } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231',
      change: '+20.1%',
      icon: DollarSign,
      bgColor: 'bg-blue-500',
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '+12.5%',
      icon: ShoppingCart,
      bgColor: 'bg-green-500',
    },
    {
      title: 'Customers',
      value: '892',
      change: '+8.2%',
      icon: Users,
      bgColor: 'bg-purple-500',
    },
    {
      title: 'Growth',
      value: '23.5%',
      change: '+4.3%',
      icon: TrendingUp,
      bgColor: 'bg-orange-500',
    },
  ];

  const salesData = [
    { name: 'Jan', sales: 4000, revenue: 2400 },
    { name: 'Feb', sales: 3000, revenue: 1398 },
    { name: 'Mar', sales: 2000, revenue: 9800 },
    { name: 'Apr', sales: 2780, revenue: 3908 },
    { name: 'May', sales: 1890, revenue: 4800 },
    { name: 'Jun', sales: 2390, revenue: 3800 },
    { name: 'Jul', sales: 3490, revenue: 4300 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                  <p className="text-green-600 text-sm mt-2 font-medium">{stat.change} from last month</p>
                </div>
                <div className={`${stat.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200/50 shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Sales Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', borderRadius: '12px', border: '1px solid rgba(229, 231, 235, 0.5)' }} />
              <Area type="monotone" dataKey="sales" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200/50 shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Revenue Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)', borderRadius: '12px', border: '1px solid rgba(229, 231, 235, 0.5)' }} />
              <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
