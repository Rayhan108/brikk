import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

export default function Graph({ ownerOverview, setOwnerYear, setEarningYear, ownerYear, earningYear, earningsOverview }) {
  
  const currentYear = new Date().getFullYear();
  
  const years = Array.from({ length: currentYear - 2000 + 1 }, (_, index) => 2000 + index).reverse();

  const ownerData = ownerOverview?.monthlyOverview?.map((monthData) => ({
    month: monthData.month.slice(0, 3),
    value: monthData.growthPercentage,
  })) || [];

  const earningData = earningsOverview?.monthlyOverview?.map((monthData) => ({
    month: monthData.month.slice(0, 3),
    value: monthData.growthPercentage,
  })) || [];

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Total Owner Overview */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="pb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Total Owner Overview</h2>
                <select
                  value={currentYear} 
                  onChange={(e) => setOwnerYear(e.target.value)}
                  className="w-24 text-[#0F0B18] h-8 text-sm border border-gray-300 rounded-md px-1"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Chart UI... */}
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ownerData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="ownerGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#4F46E5" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                  <Area type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} fill="url(#ownerGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Earning Overview */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="pb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Earning Overview</h2>
                <select
                  value={earningYear || currentYear}
                  onChange={(e) => setEarningYear(e.target.value)}
                  className="w-24 h-8 text-[#0F0B18] text-sm border border-gray-300 rounded-md px-1"
                >
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={earningData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                  <Bar dataKey="value" fill="#1E3A8A" radius={[2, 2, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}