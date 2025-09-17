"use client"

import { useState } from "react"
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

// Sample data for Total Owner Overview (Area Chart)
const ownerData = [
  { month: "Jan", value: 85 },
  { month: "Feb", value: 75 },
  { month: "Mar", value: 82 },
  { month: "Apr", value: 40 },
  { month: "May", value: 78 },
  { month: "Jun", value: 80 },
  { month: "Jul", value: 70 },
  { month: "Aug", value: 95 },
  { month: "Sep", value: 75 },
  { month: "Oct", value: 100 },
  { month: "Nov", value: 85 },
  { month: "Dec", value: 100 },
]

// Sample data for Earning Overview (Bar Chart)
const earningData = [
  { month: "Jan", value: 50 },
  { month: "Feb", value: 45 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 30 },
  { month: "May", value: 35 },
  { month: "Jun", value: 40 },
  { month: "Jul", value: 45 },
  { month: "Aug", value: 50 },
  { month: "Sep", value: 60 },
  { month: "Oct", value: 65 },
  { month: "Nov", value: 78 },
  { month: "Dec", value: 85 },
]

export default function Graph() {
  const [ownerYear, setOwnerYear] = useState("2024")
  const [earningYear, setEarningYear] = useState("2024")

  return (
    <div className="  p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Total Owner Overview - Area Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Total Owner Overview</h2>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-gray-600">Monthly Growth</span>
                    <span className="text-lg font-semibold text-gray-900">35.80%</span>
                  </div>
                </div>
                <select
                  value={ownerYear}
                  onChange={(e) => setOwnerYear(e.target.value)}
                  className="w-20 text-[#0F0B18]  h-8 text-sm border border-gray-300 rounded-md"
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
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
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    domain={[0, 100]}
                  />
                  <Area type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} fill="url(#ownerGradient)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Earning Overview - Bar Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Earning Overview</h2>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm text-gray-600">Monthly Growth</span>
                    <span className="text-lg font-semibold text-gray-900">35.80%</span>
                  </div>
                </div>
                <select
                  value={earningYear}
                  onChange={(e) => setEarningYear(e.target.value)}
                  className="w-20 h-8 text-[#0F0B18] text-sm border border-gray-300 rounded-md"
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={earningData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    domain={[0, 100]}
                  />
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
