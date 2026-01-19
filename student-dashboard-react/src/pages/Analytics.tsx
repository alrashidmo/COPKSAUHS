import { WeeklyHoursTrend, IPPECompletion, ActivityCompletion, AttendanceRate, ProgramDistribution } from '../components/Charts'

export default function Analytics() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Analytics & Insights</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">📊 Weekly Hours Trend</h3>
          <WeeklyHoursTrend data={null} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">📈 IPPE Completion Progress</h3>
          <IPPECompletion data={null} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">✅ Task Completion Rate</h3>
          <ActivityCompletion data={null} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-4">📅 Attendance Statistics</h3>
          <AttendanceRate data={null} />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
          <h3 className="text-lg font-bold mb-4">🎓 Program Distribution</h3>
          <ProgramDistribution />
        </div>
      </div>
    </div>
  )
}
