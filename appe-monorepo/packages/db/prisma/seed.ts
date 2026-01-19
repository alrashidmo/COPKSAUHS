import { PrismaClient, UserRole, Campus, Program, Status, SurveyType, QuestionType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Create Admin User
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@ksau-hs.edu.sa',
      password: '$2a$10$YourHashedPasswordHere', // Use bcrypt in production
      role: UserRole.ADMIN,
      isActive: true,
    },
  });
  console.log('✅ Created admin user');

  // Create Student User
  const studentUser = await prisma.user.create({
    data: {
      email: 'ahmed.almansour@student.ksau-hs.edu.sa',
      password: '$2a$10$YourHashedPasswordHere',
      role: UserRole.STUDENT,
      isActive: true,
      studentProfile: {
        create: {
          studentId: '442202001',
          firstName: 'Ahmed',
          lastName: 'Al-Mansour',
          arabicName: 'أحمد المنصور',
          phoneNumber: '+966501234567',
          campus: Campus.RIYADH,
          program: Program.APPE,
          enrollmentYear: 2024,
          gpa: 4.75,
          cumulativeGPA: 4.75,
          emergencyContact: 'Abdullah Al-Mansour',
          emergencyPhone: '+966509876543',
        },
      },
    },
  });
  console.log('✅ Created student user and profile');

  // Create Courses
  const course1 = await prisma.course.create({
    data: {
      code: 'PHRD-401',
      name: 'Advanced Pharmacy Practice Experience',
      arabicName: 'التدريب الصيدلي المتقدم',
      credits: 6,
      program: Program.APPE,
      description: 'Advanced clinical pharmacy practice rotations',
      isActive: true,
    },
  });
  console.log('✅ Created courses');

  // Create Sites
  const site1 = await prisma.site.create({
    data: {
      name: 'King Abdulaziz Medical City',
      arabicName: 'مدينة الملك عبدالعزيز الطبية',
      type: 'Hospital',
      campus: Campus.RIYADH,
      address: 'King Abdulaziz Medical City, National Guard Health Affairs',
      city: 'Riyadh',
      contactPerson: 'Dr. Fahad Al-Otaibi',
      contactEmail: 'f.otaibi@ngha.med.sa',
      contactPhone: '+966112520088',
      capacity: 20,
      isActive: true,
    },
  });

  const site2 = await prisma.site.create({
    data: {
      name: 'Al-Nahdi Pharmacy',
      arabicName: 'صيدلية النهدي',
      type: 'Community Pharmacy',
      campus: Campus.RIYADH,
      address: 'Olaya Street',
      city: 'Riyadh',
      contactPerson: 'Pharm. Khalid Abdullah',
      contactEmail: 'k.abdullah@nahdi.sa',
      contactPhone: '+966503333333',
      capacity: 5,
      isActive: true,
    },
  });
  console.log('✅ Created sites');

  // Create Rotations
  const rotation1 = await prisma.rotation.create({
    data: {
      courseId: course1.id,
      name: 'Community Pharmacy Rotation',
      rotationType: 'COMMUNITY_PHARMACY',
      blockNumber: 3,
      startDate: new Date('2026-01-05'),
      endDate: new Date('2026-02-14'),
      requiredHours: 240,
      maxStudents: 5,
      description: 'Community pharmacy practice experience',
      isActive: true,
      siteRotations: {
        create: {
          siteId: site2.id,
          availableSlots: 3,
        },
      },
    },
  });
  console.log('✅ Created rotations');

  // Create Preceptor
  const preceptor1 = await prisma.preceptor.create({
    data: {
      siteId: site2.id,
      firstName: 'Khalid',
      lastName: 'Abdullah',
      arabicName: 'خالد عبدالله',
      title: 'Pharm.D',
      specialty: 'Community Pharmacy',
      email: 'k.abdullah@nahdi.sa',
      phone: '+966503333333',
      maxStudents: 3,
      isActive: true,
    },
  });
  console.log('✅ Created preceptors');

  // Create Survey Template
  const surveyTemplate = await prisma.surveyTemplate.create({
    data: {
      title: 'PHRD 4.2: Student Satisfaction with Clinical Rotation',
      description: 'Evaluate student satisfaction with clinical rotation experience',
      surveyType: SurveyType.SATISFACTION_CLINICAL,
      isAnonymous: false,
      isActive: true,
      createdBy: adminUser.id,
      questions: {
        create: [
          {
            questionText: 'How satisfied are you with the overall rotation experience?',
            arabicText: 'ما مدى رضاك عن تجربة التدريب بشكل عام؟',
            questionType: QuestionType.LIKERT_SCALE,
            isRequired: true,
            order: 1,
            options: JSON.parse('["Strongly Disagree","Disagree","Neutral","Agree","Strongly Agree"]'),
          },
          {
            questionText: 'The preceptor provided adequate guidance and mentorship.',
            arabicText: 'قدم المشرف التوجيه والإرشاد الكافي.',
            questionType: QuestionType.LIKERT_SCALE,
            isRequired: true,
            order: 2,
            options: JSON.parse('["Strongly Disagree","Disagree","Neutral","Agree","Strongly Agree"]'),
          },
          {
            questionText: 'What aspects of the rotation were most valuable?',
            arabicText: 'ما هي الجوانب الأكثر قيمة في التدريب؟',
            questionType: QuestionType.LONG_TEXT,
            isRequired: false,
            order: 3,
          },
        ],
      },
    },
  });
  console.log('✅ Created survey template');

  // Create Participation Record
  const participation = await prisma.participationRecord.create({
    data: {
      studentProfileId: (await prisma.studentProfile.findFirst())!.id,
      title: 'Saudi Pharmaceutical Society Annual Conference 2025',
      type: 'CONFERENCE',
      level: 'NATIONAL',
      organizer: 'Saudi Pharmaceutical Society',
      eventDate: new Date('2025-12-15'),
      role: 'Attendee',
      hours: 8,
      description: 'Attended the annual pharmaceutical conference focusing on clinical innovations',
      status: Status.APPROVED,
      submittedAt: new Date('2025-12-20'),
      approvedAt: new Date('2025-12-22'),
      approvedBy: adminUser.id,
    },
  });
  console.log('✅ Created participation record');

  // Create Award Record
  const award = await prisma.awardRecord.create({
    data: {
      studentProfileId: (await prisma.studentProfile.findFirst())!.id,
      title: 'Dean\'s List - Fall 2025',
      awardingBody: 'College of Pharmacy, KSAU-HS',
      level: 'COLLEGE',
      category: 'ACADEMIC',
      dateReceived: new Date('2025-12-10'),
      description: 'Achieved GPA above 4.5 for Fall 2025 semester',
      status: Status.APPROVED,
      submittedAt: new Date('2025-12-11'),
      approvedAt: new Date('2025-12-12'),
      approvedBy: adminUser.id,
    },
  });
  console.log('✅ Created award record');

  // Create Clearance Catalog Items
  const clearanceItems = await prisma.clearanceCatalogItem.createMany({
    data: [
      {
        name: 'Hepatitis B Vaccine',
        type: 'VACCINE',
        description: '3-dose series required',
        isRequired: true,
        program: Program.APPE,
      },
      {
        name: 'BLS Certification',
        type: 'BLS_CERTIFICATION',
        description: 'Basic Life Support certification from AHA or equivalent',
        isRequired: true,
        validityDays: 730, // 2 years
        program: Program.APPE,
      },
      {
        name: 'OSHA Training',
        type: 'OSHA_TRAINING',
        description: 'Occupational Safety and Health Administration training',
        isRequired: true,
        program: Program.APPE,
      },
      {
        name: 'TB Test',
        type: 'TB_TEST',
        description: 'Tuberculosis screening test',
        isRequired: true,
        validityDays: 365, // 1 year
        program: Program.APPE,
      },
    ],
  });
  console.log('✅ Created clearance catalog items');

  console.log('🎉 Database seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
