import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ChartProps {
  data: any
  title?: string
  className?: string
}

const COLORS = ['#0f766e', '#14b8a6', '#2dd4bf', '#f59e0b', '#ef4444']

// Weekly hours trend
export function WeeklyHoursTrend({ data }: ChartProps) {
  const chartData = [
    { name: 'Mon', hours: 8.5 },
    { name: 'Tue', hours: 8.0 },
    { name: 'Wed', hours: 7.5 },
    { name: 'Thu', hours: 9.0 },
    { name: 'Fri', hours: 7.0 }
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="hours" stroke="#0f766e" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

// IPPE completion
export function IPPECompletion({ data }: ChartProps) {
  const chartData = data?.ippes?.map((ippe: any) => ({
    name: ippe.title,
    completed: ippe.hours.completed,
    remaining: ippe.hours.total - ippe.hours.completed
  })) || []

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="completed" fill="#10b981" />
        <Bar dataKey="remaining" fill="#f3f4f6" />
      </BarChart>
    </ResponsiveContainer>
  )
}

// Activity completion rate
export function ActivityCompletion({ data }: ChartProps) {
  const total = data?.activities?.length || 0
  const completed = data?.activities?.filter((a: any) => a.done).length || 0
  const pending = total - completed

  const chartData = [
    { name: 'Completed', value: completed, fill: '#10b981' },
    { name: 'Pending', value: pending, fill: '#f59e0b' }
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

// Attendance rate
export function AttendanceRate({ data }: ChartProps) {
  const present = data?.attendance?.present || 0
  const total = data?.attendance?.total || 1
  const percentage = Math.round((present / total) * 100)

  const chartData = [
    { name: 'Present', value: present },
    { name: 'Absent', value: total - present }
  ]

  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-teal-600 mb-2">{percentage}%</div>
      <div className="text-gray-600 mb-6">{present} / {total} days present</div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            <Cell fill="#10b981" />
            <Cell fill="#ef4444" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

// Program distribution
export function ProgramDistribution() {
  const chartData = [
    { name: 'PharmD', value: 120 },
    { name: 'MD', value: 95 },
    { name: 'Nursing', value: 80 },
    { name: 'MPH', value: 45 }
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, value }) => `${name}: ${value}`}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}
