// Shared data store using localStorage for demo
// In production, this would be replaced with actual API calls

export interface Student {
  id: string;
  studentNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gpa: number;
  enrollmentYear: number;
  status: 'active' | 'inactive';
}

export interface Rotation {
  id: string;
  rotationTypeId: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'active' | 'completed';
}

export interface Assignment {
  id: string;
  studentId: string;
  rotationId: string;
  preceptorId: string;
  siteId: string;
  status: 'assigned' | 'completed';
  matchScore?: number;
}

export interface Preceptor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialty: string;
  siteId: string;
}

export interface Site {
  id: string;
  name: string;
  address: string;
  city: string;
  contactPerson: string;
  contactEmail: string;
  contactPhone: string;
}

export interface RotationType {
  id: string;
  name: string;
  code: string;
  description: string;
  durationWeeks: number;
}

export interface Attendance {
  id: string;
  studentId: string;
  rotationId: string;
  date: string;
  checkInTime?: string;
  checkOutTime?: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  notes?: string;
}

export interface Preference {
  id: string;
  studentId: string;
  rotationId: string;
  specialtyRank1: string;
  specialtyRank2: string;
  specialtyRank3: string;
  siteRank1: string;
  siteRank2: string;
  siteRank3: string;
  submittedAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  read: boolean;
  createdAt: string;
}

// Demo data - Replace with API calls in production
export const DEMO_STUDENTS: Student[] = [
  {
    id: 'S001',
    studentNumber: '442202001',
    firstName: 'Ahmed',
    lastName: 'Al-Mansour',
    email: 'ahmed.almansour@student.edu',
    phone: '+966501234567',
    gpa: 4.75,
    enrollmentYear: 2024,
    status: 'active'
  },
  {
    id: 'S002',
    studentNumber: '442202002',
    firstName: 'Fatima',
    lastName: 'Khan',
    email: 'fatima.khan@student.edu',
    phone: '+966507654321',
    gpa: 4.82,
    enrollmentYear: 2024,
    status: 'active'
  }
];

export const DEMO_ROTATION_TYPES: RotationType[] = [
  { id: 'RT1', name: 'Ambulatory Care', code: 'R1', description: 'Outpatient clinic rotation', durationWeeks: 6 },
  { id: 'RT2', name: 'Hospital Pharmacy', code: 'R2', description: 'Inpatient hospital rotation', durationWeeks: 6 },
  { id: 'RT3', name: 'Community Pharmacy', code: 'R3', description: 'Retail pharmacy rotation', durationWeeks: 6 },
  { id: 'RT4', name: 'Clinical Specialty', code: 'R4', description: 'Specialized clinical rotation', durationWeeks: 6 }
];

export const DEMO_SITES: Site[] = [
  {
    id: 'SITE1',
    name: 'King Abdulaziz Medical City',
    address: 'National Guard Health Affairs',
    city: 'Riyadh',
    contactPerson: 'Dr. Mohammed Al-Harbi',
    contactEmail: 'contact@kamc.med.sa',
    contactPhone: '+966112520088'
  },
  {
    id: 'SITE2',
    name: 'Al-Nahdi Pharmacy',
    address: 'Olaya Street',
    city: 'Riyadh',
    contactPerson: 'Pharmacist Sara Ahmed',
    contactEmail: 'sara@nahdi.sa',
    contactPhone: '+966112345678'
  },
  {
    id: 'SITE3',
    name: 'King Fahad Medical City',
    address: 'Al-Asha\'ir Street',
    city: 'Riyadh',
    contactPerson: 'Dr. Khalid Abdullah',
    contactEmail: 'contact@kfmc.med.sa',
    contactPhone: '+966114427777'
  }
];

export const DEMO_PRECEPTORS: Preceptor[] = [
  {
    id: 'P001',
    firstName: 'Dr. Mohammed',
    lastName: 'Al-Harbi',
    email: 'm.alharbi@kamc.med.sa',
    phone: '+966501111111',
    specialty: 'Ambulatory Care',
    siteId: 'SITE1'
  },
  {
    id: 'P002',
    firstName: 'Dr. Sara',
    lastName: 'Ahmed',
    email: 's.ahmed@kamc.med.sa',
    phone: '+966502222222',
    specialty: 'Hospital Pharmacy',
    siteId: 'SITE1'
  },
  {
    id: 'P003',
    firstName: 'Pharm. Khalid',
    lastName: 'Abdullah',
    email: 'k.abdullah@nahdi.sa',
    phone: '+966503333333',
    specialty: 'Community Pharmacy',
    siteId: 'SITE2'
  }
];

export const DEMO_ROTATIONS: Rotation[] = [
  {
    id: 'ROT1',
    rotationTypeId: 'RT1',
    name: 'Ambulatory Care - Feb 2026',
    startDate: '2026-02-01',
    endDate: '2026-03-14',
    status: 'upcoming'
  },
  {
    id: 'ROT2',
    rotationTypeId: 'RT2',
    name: 'Hospital Pharmacy - Mar 2026',
    startDate: '2026-03-15',
    endDate: '2026-04-25',
    status: 'upcoming'
  },
  {
    id: 'ROT3',
    rotationTypeId: 'RT3',
    name: 'Community Pharmacy - Jan 2026',
    startDate: '2026-01-05',
    endDate: '2026-02-14',
    status: 'active'
  }
];

// Storage keys
const STORAGE_KEYS = {
  CURRENT_USER: 'appe_current_user',
  STUDENTS: 'appe_students',
  ROTATIONS: 'appe_rotations',
  ASSIGNMENTS: 'appe_assignments',
  ATTENDANCE: 'appe_attendance',
  PREFERENCES: 'appe_preferences',
  NOTIFICATIONS: 'appe_notifications'
};

// Initialize demo data
export const initializeData = () => {
  if (!localStorage.getItem(STORAGE_KEYS.STUDENTS)) {
    localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(DEMO_STUDENTS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.ROTATIONS)) {
    localStorage.setItem(STORAGE_KEYS.ROTATIONS, JSON.stringify(DEMO_ROTATIONS));
  }
  if (!localStorage.getItem(STORAGE_KEYS.ASSIGNMENTS)) {
    const demoAssignments: Assignment[] = [
      {
        id: 'ASN1',
        studentId: 'S001',
        rotationId: 'ROT3',
        preceptorId: 'P003',
        siteId: 'SITE2',
        status: 'assigned',
        matchScore: 95
      }
    ];
    localStorage.setItem(STORAGE_KEYS.ASSIGNMENTS, JSON.stringify(demoAssignments));
  }
  if (!localStorage.getItem(STORAGE_KEYS.ATTENDANCE)) {
    localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify([]));
  }
  if (!localStorage.getItem(STORAGE_KEYS.PREFERENCES)) {
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify([]));
  }
  if (!localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) {
    const demoNotifications: Notification[] = [
      {
        id: 'N1',
        userId: 'S001',
        title: 'Welcome to APPE',
        message: 'Welcome to your APPE Student Portal! Check your schedule for upcoming rotations.',
        type: 'info',
        read: false,
        createdAt: new Date().toISOString()
      }
    ];
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(demoNotifications));
  }
};

// API functions
export const api = {
  // Authentication
  login: async (email: string, password: string): Promise<Student | null> => {
    const students = JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDENTS) || '[]');
    const student = students.find((s: Student) => s.email === email);
    if (student) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(student));
      return student;
    }
    return null;
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  },

  getCurrentUser: (): Student | null => {
    const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return user ? JSON.parse(user) : null;
  },

  // Students
  getStudents: (): Student[] => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.STUDENTS) || '[]');
  },

  getStudent: (id: string): Student | undefined => {
    const students = api.getStudents();
    return students.find(s => s.id === id);
  },

  // Rotations
  getRotations: (): Rotation[] => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ROTATIONS) || '[]');
  },

  getRotation: (id: string): Rotation | undefined => {
    const rotations = api.getRotations();
    return rotations.find(r => r.id === id);
  },

  // Assignments
  getAssignments: (): Assignment[] => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ASSIGNMENTS) || '[]');
  },

  getStudentAssignments: (studentId: string): Assignment[] => {
    const assignments = api.getAssignments();
    return assignments.filter(a => a.studentId === studentId);
  },

  // Attendance
  getAttendance: (): Attendance[] => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ATTENDANCE) || '[]');
  },

  getStudentAttendance: (studentId: string, rotationId?: string): Attendance[] => {
    const attendance = api.getAttendance();
    return attendance.filter(a => 
      a.studentId === studentId && (!rotationId || a.rotationId === rotationId)
    );
  },

  checkIn: (studentId: string, rotationId: string): void => {
    const attendance = api.getAttendance();
    const today = new Date().toISOString().split('T')[0];
    const existing = attendance.find(a => 
      a.studentId === studentId && a.rotationId === rotationId && a.date === today
    );

    if (!existing) {
      const newRecord: Attendance = {
        id: `ATT${Date.now()}`,
        studentId,
        rotationId,
        date: today,
        checkInTime: new Date().toLocaleTimeString(),
        status: 'present'
      };
      attendance.push(newRecord);
      localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(attendance));
    }
  },

  checkOut: (studentId: string, rotationId: string): void => {
    const attendance = api.getAttendance();
    const today = new Date().toISOString().split('T')[0];
    const record = attendance.find(a => 
      a.studentId === studentId && a.rotationId === rotationId && a.date === today
    );

    if (record) {
      record.checkOutTime = new Date().toLocaleTimeString();
      localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(attendance));
    }
  },

  // Preferences
  getPreferences: (): Preference[] => {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PREFERENCES) || '[]');
  },

  submitPreferences: (pref: Omit<Preference, 'id' | 'submittedAt'>): void => {
    const preferences = api.getPreferences();
    const existing = preferences.findIndex(p => 
      p.studentId === pref.studentId && p.rotationId === pref.rotationId
    );

    const newPref: Preference = {
      ...pref,
      id: existing >= 0 ? preferences[existing].id : `PREF${Date.now()}`,
      submittedAt: new Date().toISOString()
    };

    if (existing >= 0) {
      preferences[existing] = newPref;
    } else {
      preferences.push(newPref);
    }

    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(preferences));
  },

  // Notifications
  getNotifications: (userId: string): Notification[] => {
    const notifications = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS) || '[]');
    return notifications.filter((n: Notification) => n.userId === userId);
  },

  markNotificationRead: (id: string): void => {
    const notifications = JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS) || '[]');
    const notification = notifications.find((n: Notification) => n.id === id);
    if (notification) {
      notification.read = true;
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
    }
  },

  // Reference data
  getRotationTypes: () => DEMO_ROTATION_TYPES,
  getSites: () => DEMO_SITES,
  getPreceptors: () => DEMO_PRECEPTORS,
  
  getPreceptor: (id: string): Preceptor | undefined => {
    return DEMO_PRECEPTORS.find(p => p.id === id);
  },
  
  getSite: (id: string): Site | undefined => {
    return DEMO_SITES.find(s => s.id === id);
  },
  
  getRotationType: (id: string): RotationType | undefined => {
    return DEMO_ROTATION_TYPES.find(rt => rt.id === id);
  }
};
