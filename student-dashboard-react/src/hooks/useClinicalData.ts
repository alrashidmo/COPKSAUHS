import { useState, useEffect } from 'react'
import { clinical } from '../services/api'

export interface ClinicalData {
  hours: {
    today: number
    week: number
    month: number
    rotation: number
    rotationTotal: number
  }
  ippes: any[]
  activities: any[]
  attendance: any
}

export function useClinicalData() {
  const [data, setData] = useState<ClinicalData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await clinical.getData()
      setData(response.data.data)
      setError(null)
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to load clinical data')
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  const addHours = async (hours: number) => {
    try {
      await clinical.addHours(hours)
      await fetchData()
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to add hours')
      throw err
    }
  }

  const addActivity = async (title: string, detail: string) => {
    try {
      await clinical.addActivity(title, detail)
      await fetchData()
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to add activity')
      throw err
    }
  }

  const toggleActivity = async (id: string) => {
    try {
      await clinical.toggleActivity(id)
      await fetchData()
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to toggle activity')
      throw err
    }
  }

  const addAttendance = async (date: string, note: string, status: string) => {
    try {
      await clinical.addAttendance(date, note, status)
      await fetchData()
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to add attendance')
      throw err
    }
  }

  return {
    data,
    loading,
    error,
    fetchData,
    addHours,
    addActivity,
    toggleActivity,
    addAttendance
  }
}
