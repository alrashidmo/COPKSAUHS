/**
 * Mock Data Store
 * Simulates a database with local storage persistence
 */

const INITIAL_DATA = {
    students: [
        { id: 'S2025001', name: 'Raghad Saleh Abdullah Alajmi', gpa: 3.8, risk: 'low', completedRotations: 4, attendance: 98 },
        { id: 'S2025002', name: 'Hussh Naif Albahlal', gpa: 3.5, risk: 'low', completedRotations: 3, attendance: 95 },
        { id: 'S2025003', name: 'Khuzama Hamoud J Alamri', gpa: 3.9, risk: 'low', completedRotations: 5, attendance: 100 },
        { id: 'S2025004', name: 'Lina Moshrif Alamri', gpa: 3.2, risk: 'medium', completedRotations: 2, attendance: 88 },
        { id: 'S2025005', name: 'Ghala Mohammad B Alomari', gpa: 3.7, risk: 'low', completedRotations: 4, attendance: 96 },
        { id: 'S2025006', name: 'Mashael Abdullah Almutairi', gpa: 2.8, risk: 'high', completedRotations: 1, attendance: 75 },
        { id: 'S2025007', name: 'Raneem Muharib Alanazi', gpa: 3.6, risk: 'low', completedRotations: 4, attendance: 94 },
        { id: 'S2025008', name: 'Ruyuf Abdullah Alshuqayr', gpa: 3.4, risk: 'low', completedRotations: 3, attendance: 92 },
        { id: 'S2025009', name: 'Sadeem Abdulaziz Alamri', gpa: 3.95, risk: 'low', completedRotations: 5, attendance: 99 },
        { id: 'S2025010', name: 'Khawla Ahmed Alrubeyan', gpa: 3.1, risk: 'medium', completedRotations: 2, attendance: 85 },
        { id: 'S2025011', name: 'Sham Abdullah Al Enazi', gpa: 3.3, risk: 'low', completedRotations: 3, attendance: 90 },
        { id: 'S2025012', name: 'Monirah Saleh N Alotaibi', gpa: 3.8, risk: 'low', completedRotations: 4, attendance: 97 },
        { id: 'S2025013', name: 'Shaden Abdullah Alharbi', gpa: 2.9, risk: 'medium', completedRotations: 2, attendance: 82 },
        { id: 'S2025014', name: 'Jinan Abdulrahman Alhuwayshil', gpa: 3.7, risk: 'low', completedRotations: 4, attendance: 95 },
        { id: 'S2025015', name: 'Muneerah Faisal Al Boushal', gpa: 3.5, risk: 'low', completedRotations: 3, attendance: 93 },
        { id: 'S2025016', name: 'Sarah Abdulaziz Bin Saqyah', gpa: 3.9, risk: 'low', completedRotations: 5, attendance: 98 },
        { id: 'S2025017', name: 'Raghad Khlaf Alenazi', gpa: 3.0, risk: 'medium', completedRotations: 2, attendance: 80 },
        { id: 'S2025018', name: 'Abdulrahman Sulaiman Alossimi', gpa: 3.6, risk: 'low', completedRotations: 4, attendance: 94 },
        { id: 'S2025019', name: 'Raghad Sulaiman K Almutairi', gpa: 3.4, risk: 'low', completedRotations: 3, attendance: 91 },
        { id: 'S2025020', name: 'Ruwayda Saeed Mohammed Alshahrani', gpa: 3.8, risk: 'low', completedRotations: 4, attendance: 96 },
        { id: 'S2025021', name: 'Jod Amer Mohammed Aljuaidi', gpa: 3.2, risk: 'medium', completedRotations: 2, attendance: 87 },
        { id: 'S2025022', name: 'Shoug Khalid Almousa', gpa: 3.7, risk: 'low', completedRotations: 4, attendance: 95 },
        { id: 'S2025023', name: 'Amal Mohammed Aleanzi', gpa: 3.5, risk: 'low', completedRotations: 3, attendance: 93 },
        { id: 'S2025024', name: 'Ghadah Meteb Alsanoni', gpa: 3.9, risk: 'low', completedRotations: 5, attendance: 99 },
        { id: 'S2025025', name: 'Nouf Abdulaziz Alnajim', gpa: 3.1, risk: 'medium', completedRotations: 2, attendance: 84 },
        { id: 'S2025026', name: 'Shoroog Saad Faleh Al Otaibi', gpa: 3.3, risk: 'low', completedRotations: 3, attendance: 89 },
        { id: 'S2025027', name: 'Manar Mohammed Al Arifi', gpa: 3.8, risk: 'low', completedRotations: 4, attendance: 97 },
        { id: 'S2025028', name: 'Albatoul Omran Alomran', gpa: 2.7, risk: 'high', completedRotations: 1, attendance: 72 },
        { id: 'S2025029', name: 'Alhanouf Khaled Almister', gpa: 3.6, risk: 'low', completedRotations: 4, attendance: 94 },
        { id: 'S2025030', name: 'Ghala Salem Obeidallah Alharbi', gpa: 3.4, risk: 'low', completedRotations: 3, attendance: 92 },
        { id: 'S2025031', name: 'Ohoud Mansour M Almutairi', gpa: 3.9, risk: 'low', completedRotations: 5, attendance: 98 },
        { id: 'S2025032', name: 'Mohammed Abdulrahman Almahanna', gpa: 3.0, risk: 'medium', completedRotations: 2, attendance: 81 },
        { id: 'S2025033', name: 'Sultan Ali Aljardan', gpa: 3.5, risk: 'low', completedRotations: 3, attendance: 93 },
        { id: 'S2025034', name: 'Lama Ibrahim Alfehaid', gpa: 3.8, risk: 'low', completedRotations: 4, attendance: 96 },
        { id: 'S2025035', name: 'Abdulaziz Abdulrahman Alarifi', gpa: 3.2, risk: 'medium', completedRotations: 2, attendance: 86 },
        { id: 'S2025036', name: 'Hissah Mohammed Alkyssir', gpa: 3.7, risk: 'low', completedRotations: 4, attendance: 95 },
        { id: 'S2025037', name: 'Faris Salem Althobiti', gpa: 3.4, risk: 'low', completedRotations: 3, attendance: 91 },
        { id: 'S2025038', name: 'Mohammad Abdulwahab Alfafi', gpa: 3.9, risk: 'low', completedRotations: 5, attendance: 99 },
        { id: 'S2025039', name: 'Raghad Faisal Alwail', gpa: 3.1, risk: 'medium', completedRotations: 2, attendance: 83 },
        { id: 'S2025040', name: 'Dana Emad Aloumi', gpa: 3.6, risk: 'low', completedRotations: 4, attendance: 94 },
        { id: 'S2025041', name: 'Fahad Faisal Almutiri', gpa: 3.3, risk: 'low', completedRotations: 3, attendance: 88 },
        { id: 'S2025042', name: 'Abdulmajeed Mohammed Alsuwaylihi', gpa: 3.8, risk: 'low', completedRotations: 4, attendance: 97 },
        { id: 'S2025043', name: 'Riadh Mansor Arrais', gpa: 2.9, risk: 'medium', completedRotations: 2, attendance: 79 },
        { id: 'S2025044', name: 'Ahmed Murdhi Alharbi', gpa: 3.7, risk: 'low', completedRotations: 4, attendance: 95 },
        { id: 'S2025045', name: 'Abdulsalam Zarea Alanazi', gpa: 3.5, risk: 'low', completedRotations: 3, attendance: 92 },
        { id: 'S2025046', name: 'Mohammed Farhan Alotebe', gpa: 3.9, risk: 'low', completedRotations: 5, attendance: 98 },
        { id: 'S2025047', name: 'Abdullah Ibrahim Alkhulaifi', gpa: 3.0, risk: 'medium', completedRotations: 2, attendance: 80 },
        { id: 'S2025048', name: 'Abdulrahman Majid Almadi', gpa: 3.6, risk: 'low', completedRotations: 4, attendance: 94 },
        { id: 'S2025049', name: 'Yara Munif Alshammari', gpa: 3.4, risk: 'low', completedRotations: 3, attendance: 91 },
        { id: 'S2025050', name: 'Mohammed Ibrahim Al Rudhyyan', gpa: 3.8, risk: 'low', completedRotations: 4, attendance: 96 },
        { id: 'S2025051', name: 'Faisal Mohammed Alshehri', gpa: 3.2, risk: 'medium', completedRotations: 2, attendance: 85 },
        { id: 'S2025052', name: 'Hamad Mohammed Alkhalaf', gpa: 3.7, risk: 'low', completedRotations: 4, attendance: 95 },
        { id: 'S2025053', name: 'Saud Enad Alanazi', gpa: 3.5, risk: 'low', completedRotations: 3, attendance: 93 },
        { id: 'S2025054', name: 'Sarah Saud Abdulaziz Bindulaym', gpa: 3.9, risk: 'low', completedRotations: 5, attendance: 99 },
        { id: 'S2025055', name: 'Mohammad Fares Almoteb', gpa: 3.1, risk: 'medium', completedRotations: 2, attendance: 84 },
        { id: 'S2025056', name: 'Bandar Sultan Aldawish', gpa: 3.6, risk: 'low', completedRotations: 4, attendance: 94 },
        { id: 'S2025057', name: 'Fahad Ali Alomair', gpa: 3.3, risk: 'low', completedRotations: 3, attendance: 89 },
        { id: 'S2025058', name: 'Batal Muhayya Aldosari', gpa: 3.8, risk: 'low', completedRotations: 4, attendance: 97 },
        { id: 'S2025059', name: 'Nasser Trad Aldosari', gpa: 3.4, risk: 'low', completedRotations: 3, attendance: 92 }
    ],
    sites: [
        { id: 'H001', name: 'King Abdulaziz Medical City', type: 'Hospital' },
        { id: 'H002', name: 'King Faisal Specialist Hospital', type: 'Hospital' },
        { id: 'H003', name: 'Prince Sultan Cardiac Center', type: 'Specialized Center' },
        { id: 'C001', name: 'Al-Nahda PHC', type: 'Primary Care' }
    ],
    preceptors: [
        // Internal Medicine
        { name: 'Dr. Majed Alyami', title: 'Associate Professor', email: 'yamim@ksau-hs.edu.sa', specialty: 'Internal Medicine', availability: [true, true, true, false, false, true, true, false, true, true] },
        { name: 'Dr. Omar Alshaya', title: 'Associate Professor', email: 'shayo@ksau-hs.edu.sa', specialty: 'Internal Medicine', availability: [false, false, true, true, true, false, false, true, false, false] },
        { name: 'Dr. Fahad Aldhahri', title: 'Assistant Professor', email: 'aldhahrifa@MNGHA.MED.SA', specialty: 'Internal Medicine', availability: [true, true, false, false, true, true, true, true, false, true] },
        { name: 'Dr. Dalal Alabdulkareem', title: 'Lecturer', email: 'abdulkareemda@MNGHA.MED.SA', specialty: 'Internal Medicine', availability: [true, false, true, true, false, true, false, true, true, true] },
        { name: 'Dr. Abdulrahman Alturaiki', title: 'Clinical Pharmacist', email: 'alturaikiab@MNGHA.MED.SA', specialty: 'Internal Medicine', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Dr. Maha Almolaiki', title: 'Clinical Pharmacist', email: 'almolaikima@MNGHA.MED.SA', specialty: 'Internal Medicine', available: true, availability: [false, true, false, true, false, true, false, true, false, true] },
        { name: 'Dr. Sumaya Al Mohareb', title: 'Assistant Dean', email: 'moharebsu@ksau-hs.edu.sa', specialty: 'Internal Medicine', availability: [true, true, false, false, false, false, true, true, true, true] },
        { name: 'Dr. Kholoud Aljoudi', title: 'Assistant Professor', email: 'aljoudikh@MNGHA.MED.SA', specialty: 'Internal Medicine', availability: [true, false, true, false, true, false, true, false, true, false] },
        { name: 'Dr. Metab Alwethairi', title: 'Clinical Pharmacy Specialist', email: 'WethairiM@MNGHA.MED.SA', specialty: 'Internal Medicine', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Dr. Abdulrahman Alamri', title: 'Assistant Professor', email: 'amriabdu@ksau-hs.edu.sa', specialty: 'Internal Medicine', availability: [false, false, false, true, true, true, false, false, false, true] },
        { name: 'Dr. Atheer Aldairem', title: 'Assistant Professor', email: 'dairema@ksau-hs.edu.sa', specialty: 'Internal Medicine', availability: [true, true, true, false, false, false, true, true, true, false] },

        // ICU
        { name: 'Prof. Shmeylan Al Harbi', title: 'Associate Dean', email: 'harbish@ksau-hs.edu.sa', specialty: 'ICU', availability: [true, false, true, false, true, false, true, false, true, false] },
        { name: 'Dr. Abdulrahman Alshaya', title: 'Assistant Professor', email: 'shayaab@ksau-hs.edu.sa', specialty: 'ICU', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Dr. Jawaher Algramish', title: 'Associate Professor', email: 'GramishJ@MNGHA.MED.SA', specialty: 'ICU', availability: [false, true, false, true, false, true, false, true, false, true] },
        { name: 'Dr. Rahaf Alqahtani', title: 'Clinical Pharmacist', email: 'alqahtanira@MNGHA.MED.SA', specialty: 'ICU', availability: [true, true, false, false, true, true, false, false, true, true] },
        { name: 'Dr. Lolowa Alswaidan', title: 'Assistant Professor', email: 'swaidanl@MNGHA.MED.SA', specialty: 'ICU', availability: [true, false, true, false, true, false, true, false, true, false] },
        { name: 'Dr. Khalid Alsulaiman', title: 'Assistant Professor', email: 'alsulaimankh@MNGHA.MED.SA', specialty: 'ICU', availability: [true, true, true, true, false, false, false, false, true, true] },
        { name: 'Dr. Nouf Alharthi', title: 'Clinical Pharmacist', email: 'alharthino@MNGHA.MED.SA', specialty: 'ICU', availability: [false, false, true, true, true, true, false, false, true, true] },
        { name: 'Dr. Maram Aldossari', title: 'Clinical Pharmacist', email: 'Aldossarima6@MNGHA.MED.SA', specialty: 'ICU', availability: [true, true, true, false, false, false, true, true, true, false] },
        { name: 'Dr. Maha Assadoon', title: 'Clinical Pharmacist', email: 'ASSADOONMA@MNGHA.MED.SA', specialty: 'ICU', availability: [true, false, true, false, true, false, true, false, true, false] },
        { name: 'Dr. Abdulmajeed Alshehri', title: 'Assistant Professor', email: 'shehriabdul@ksau-hs.edu.sa', specialty: 'ICU', availability: [true, true, true, true, true, true, true, true, true, true] },

        // Advanced Institutional
        { name: 'Mr. Mohammed Alotaibi', title: 'Assistant Director', email: 'otaibim7@MNGHA.MED.SA', specialty: 'Institutional Practice', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Mr. Sultan Meashi', title: 'Supervisor', email: 'meashisu@MNGHA.MED.SA', specialty: 'Institutional Practice', availability: [false, false, false, true, true, true, true, true, false, false] },
        { name: 'Dr. Hamoud Al Samhan', title: 'Supervisor', email: 'samhanh@ngha.med.sa', specialty: 'Institutional Practice', availability: [true, true, true, false, false, false, true, true, true, false] },

        // Advanced Outpatient
        { name: 'Mr. Thamer Alotaibi', title: 'Manager', email: 'otaibitk@MNGHA.MED.SA', specialty: 'Outpatient Practice', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Mr. Mohammed Alkathiri', title: 'Assistant Director', email: 'kathirim@ksau-hs.edu.sa', specialty: 'Outpatient Practice', availability: [true, false, true, false, true, false, true, false, true, false] },
        { name: 'Col/ Rph. Mohammed Alrufaiq', title: 'Pharmacy Supervisor', email: 'alrufaiqmo@MNGHA.MED.SA', specialty: 'Outpatient Practice', availability: [true, true, false, false, true, true, false, false, true, true] },
        { name: 'Mr. Abdullah Alroumi', title: 'Supervisor', email: 'alroumia@MNGHA.MED.SA', specialty: 'Outpatient Practice', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Mr. Saad Al Dhafian', title: 'Supervisor', email: 'aldafiansa@MNGHA.MED.SA', specialty: 'Outpatient Practice', availability: [false, true, false, true, false, true, false, true, false, true] },
        { name: 'Dr. Emad Basalasel', title: 'Pharmacy Supervisor', email: 'BasalaselE@MNGHA.MED.SA', specialty: 'Outpatient Practice', availability: [true, true, true, false, false, false, true, true, true, false] },
        { name: 'Dr. Laila Al Zahrani', title: 'Pharmacist', email: 'Zahranil@MNGHA.MED.SA', specialty: 'Outpatient Practice', availability: [true, true, true, true, true, true, true, true, true, true] },

        // Solid Organ Transplant
        { name: 'Dr. Khalifah Al Thiab', title: 'SOT Clinical Pharmacist', email: 'ThiabKh@MNGHA.MED.SA', specialty: 'Transplant', availability: [true, false, true, false, true, false, true, false, true, false] },
        { name: 'Dr. Sara Albilal', title: 'SOT Clinical Pharmacist', email: 'albilalsa@MNGHA.MED.SA', specialty: 'Transplant', availability: [false, true, false, true, false, true, false, true, false, true] },

        // Drug Information
        { name: 'Dr. Laila Abu Esba', title: 'Lecturer', email: 'abuesbala@MNGHA.MED.SA', specialty: 'Drug Information', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Dr. Hind Almodaimegh', title: 'Clinical Pharmacy Specialist', email: 'modaimeghh@ksau-hs.edu.sa', specialty: 'Drug Information', availability: [true, false, true, false, true, false, true, false, true, false] },

        // Nephrology
        { name: 'Prof. Abdulmalik Alkatheri', title: 'Professor', email: 'katheria@MNGHA.MED.SA', specialty: 'Nephrology', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Dr. Numan Alabdan', title: 'Assistant Director', email: 'abdann@MNGHA.MED.SA', specialty: 'Nephrology', availability: [false, false, true, true, true, true, false, false, true, true] },
        { name: 'Dr. Yousef Alrajhi', title: 'Assistant Professor', email: 'rajhiy@MNGHA.MED.SA', specialty: 'Nephrology', availability: [true, true, false, false, true, true, false, false, true, true] },

        // Administration
        { name: 'Dr. Yousef Al Aqeel', title: 'Clinical Pharmacy Specialist', email: 'alaqeely@ksau-hs.edu.sa', specialty: 'Administration', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Mr. Badr Alnasser', title: 'Manager', email: 'NasserB@MNGHA.MED.SA', specialty: 'Administration', availability: [true, false, true, false, true, false, true, false, true, false] },

        // Oncology/Hematology
        { name: 'Dr. Nada Alsuhebany', title: 'Assistant Professor', email: 'suhebanyn@ksau-hs.edu.sa', specialty: 'Oncology', availability: [false, false, false, false, false, false, false, false, false, false] },
        { name: 'Dr. Ghada Alyousif', title: 'Associate Clinical Pharmacist', email: 'alyousifgh@MNGHA.MED.SA', specialty: 'Oncology', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Dr. Dema Almolaiki', title: 'Associate Clinical Pharmacist', email: 'almolaikide@MNGHA.MED.SA', specialty: 'Oncology', availability: [true, false, true, false, true, false, true, false, true, false] },
        { name: 'Dr. Maha AlDoughaim', title: 'Assistant Professor', email: 'doughaimm@ksau-hs.edu.sa', specialty: 'Oncology', availability: [true, true, false, false, true, true, false, false, true, true] },
        { name: 'Dr. Mohammed Al Zahrani', title: 'Assistant Professor', email: 'alzahranimoham@ksau-hs.edu.sa', specialty: 'Oncology', availability: [false, true, false, true, false, true, false, true, false, true] },

        // Pediatrics
        { name: 'Dr. Diana Almutairi', title: 'Clinical Pharmacist', email: 'almutairidi@MNGHA.MED.SA', specialty: 'Pediatrics', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Dr. Meshary Almeshary', title: 'Clinical Pharmacist', email: 'almesharyme@MNGHA.MED.SA', specialty: 'Pediatrics', availability: [true, false, true, false, true, false, true, false, true, false] },
        { name: 'Dr. Reham Alhoraibi', title: 'Clinical Pharmacist', email: 'alhoraibire@MNGHA.MED.SA', specialty: 'Pediatrics', availability: [true, true, false, false, true, true, false, false, true, true] },
        { name: 'Dr. Kholoud Alaamer', title: 'Clinical Pharmacist', email: 'alaamerkh@MNGHA.MED.SA', specialty: 'Pediatrics', availability: [false, false, true, true, true, true, false, false, true, true] },
        { name: 'Dr. Hessa Almuqati', title: 'Clinical Pharmacist', email: 'almuqatihe@MNGHA.MED.SA', specialty: 'Pediatrics', availability: [true, true, true, false, false, false, true, true, true, false] },
        { name: 'Dr. Shaima Alshareef', title: 'Clinical Pharmacist', email: 'alshareefsh@MNGHA.MED.SA', specialty: 'Pediatrics', availability: [true, false, true, false, true, false, true, false, true, false] },

        // Cardiology
        { name: 'Dr. Lama Alfehaid', title: 'Assistant Professor', email: 'fehaidl@ksau-hs.edu.sa', specialty: 'Cardiology', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Dr. Hisham Badreldin', title: 'Associate Professor', email: 'aldeenh@ksau-hs.edu.sa', specialty: 'Cardiology', availability: [true, false, true, false, true, false, true, false, true, false] },
        { name: 'Dr. Sarah Alyousif', title: 'Assistant Professor', email: 'yousifs@MNGHA.MED.SA', specialty: 'Cardiology', availability: [true, true, false, false, true, true, false, false, true, true] },
        { name: 'Dr. Majed Almutairi', title: 'Clinical Pharmacist', email: 'Almutairima27@MNGHA.MED.SA', specialty: 'Cardiology', availability: [false, false, true, true, true, true, false, false, true, true] },
        { name: 'Dr. Sultan Al Raddadi', title: 'Clinical Pharmacist', email: 'raddadis@ngha.med.sa', specialty: 'Cardiology', availability: [true, true, true, false, false, false, true, true, true, false] },
        { name: 'Dr. Alaa Al Anazi', title: 'Clinical Pharmacist', email: 'Alenazi-alenazial3@MNGHA.MED.SA', specialty: 'Cardiology', availability: [true, false, true, false, true, false, true, false, true, false] },

        // Infectious Diseases
        { name: 'Dr. Khalid bin Saleh', title: 'Assistant Professor', email: 'salehk@ksau-hs.edu.sa', specialty: 'Infectious Diseases', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Dr. Hajar Alqahtani', title: 'Clinical Pharmacist', email: 'Alqahtaniha2@MNGHA.MED.SA', specialty: 'Infectious Diseases', availability: [true, false, true, false, true, false, true, false, true, false] },
        { name: 'D. Shuroug Alowais', title: 'Assistant Professor', email: 'owaiss@ksau-hs.edu.sa', specialty: 'Infectious Diseases', availability: [true, true, false, false, true, true, false, false, true, true] },

        // Neonatal
        { name: 'Dr. Faisal Alsehli', title: 'Assistant Professor', email: 'sehlief@MNGHA.MED.SA', specialty: 'Neonatal', availability: [true, true, true, true, true, true, true, true, true, true] },

        // Pharmacoeconomic
        { name: 'Dr. Hana Alabdulkarim', title: 'Director', email: 'alabdulkarimha@MNGHA.MED.SA', specialty: 'Pharmacoeconomic', availability: [false, false, false, false, false, false, false, false, false, false] },

        // Quality Assurance
        { name: 'Dr. Saleh Alanizi', title: 'Assistant Professor', email: 'anazis@MNGHA.MED.SA', specialty: 'Quality Assurance', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Dr. Haya Almufrij', title: 'Q.I Pharmacist', email: 'MufrijH@MNGHA.MED.SA', specialty: 'Quality Assurance', availability: [true, false, true, false, true, false, true, false, true, false] },
        { name: 'Ms. Fawzyah Almutairi', title: 'Q.I Pharmacist', email: 'MutairiF@MNGHA.MED.SA', specialty: 'Quality Assurance', availability: [true, true, false, false, true, true, false, false, true, true] },

        // Medication Safety
        { name: 'Dr. Hani Alhamdan', title: 'Chairman', email: 'hamdanhs@MNGHA.MED.SA', specialty: 'Medication Safety', availability: [true, true, true, true, true, true, true, true, true, true] },
        { name: 'Dr. Ghada Almardawi', title: 'Specialist', email: 'MardawiG@MNGHA.MED.SA', specialty: 'Medication Safety', availability: [true, false, true, false, true, false, true, false, true, false] },
        { name: 'Ms. Arwa Balharth', title: 'Specialist', email: 'balhartha@MNGHA.MED.SA', specialty: 'Medication Safety', availability: [true, true, false, false, true, true, false, false, true, true] },
        { name: 'Ms. Norah bin Sabbar', title: 'Specialist', email: 'binsabbarno@MNGHA.MED.SA', specialty: 'Medication Safety', availability: [false, false, true, true, true, true, false, false, true, true] },

        // Emergency Medicine
        { name: 'Dr. Mohammed Alrashed', title: 'Assistant Professor', email: 'alrashidm@ksau-hs.edu.sa', specialty: 'Emergency Medicine', availability: [true, true, true, true, true, true, true, true, true, true] },

        // Academia
        { name: 'Prof. Abdulkareem Albekairy', title: 'Dean', email: 'bekairya@MNGHA.MED.SA', specialty: 'Academia', availability: [false, false, false, false, false, false, false, false, false, false] }
    ],
    outcomes: {
        glo: [
            { id: '1.0', desc: 'Knowledge and Understanding' },
            { id: '2.0', desc: 'Skills' },
            { id: '3.0', desc: 'Values' }
        ],
        plo: [
            { id: '1.3', desc: 'Describe pathophysiology...' },
            { id: '2.3', desc: 'Identify drug related problems...' },
            { id: '3.1', desc: 'Advocate patients rights...' }
        ],
        clo: [
            { id: 'CLO-IM-1', desc: 'Manage internal medicine cases', ploIds: ['1.3', '2.3'] },
            { id: 'CLO-ICU-1', desc: 'Handle critical care patients', ploIds: ['2.3', '3.1'] }
        ],
        rlo: [
            { id: 'RLO-IM-01', desc: 'Daily rounds participation', cloIds: ['CLO-IM-1'] },
            { id: 'RLO-ICU-01', desc: 'Ventilator settings review', cloIds: ['CLO-ICU-1'] }
        ]
    },
    stats: {
        evaluations: {
            studentAvg: 4.5,
            preceptorAvg: 4.2,
            siteAvg: 4.0
        },
        domains: {
            knowledge: 85,
            skills: 78,
            values: 92
        }
    },
    rotations: [
        { id: 'R001', block: 1, studentId: 'S001', siteId: 'H001', site: 'KAMC - Riyadh', preceptor: 'Dr. Majed Alyami', type: 'Internal Medicine', status: 'Completed' },
        { id: 'R002', block: 1, studentId: 'S002', siteId: 'H002', site: 'KFSH&RC', preceptor: 'Dr. Omar Alshaya', type: 'Ambulatory Care', status: 'Completed' },
        { id: 'R003', block: 2, studentId: 'S001', siteId: 'H003', site: 'PSCC', preceptor: 'Dr. Lama Alfehaid', type: 'Cardiology', status: 'In Progress' },
        { id: 'R004', block: 2, studentId: 'S004', siteId: 'C001', site: 'Al-Nahda PHC', preceptor: 'Dr. Khalid bin Saleh', type: 'Community', status: 'In Progress' },
    ],
    ippe_meta: {
        clos: [
            { id: '1.1', domain: 'Knowledge', desc: 'Foundational Knowledge' },
            { id: '1.2', domain: 'Knowledge', desc: 'Essentials for Practice' },
            { id: '2.1', domain: 'Skills', desc: 'Patient Care' },
            { id: '2.2', domain: 'Skills', desc: 'Problem Solving' },
            { id: '3.1', domain: 'Values', desc: 'Professionalism' },
            { id: '3.2', domain: 'Values', desc: 'Communication' }
        ],
        epas: [
            'Collect & Assess Information', 'Identify DRPs', 'Recommend Therapy',
            'Safety Tasks', 'Communication', 'Documentation', 'QA Standards',
            'Controlled Substances', 'Ethics'
        ],
        domains: [
            'Professionalism', 'Service Learning', 'Shadow Learning',
            'Patient Care', 'Practice Skills', 'Professional Development'
        ],
        sessions: [
            'QA I', 'QA II', 'IV Room', 'Outpatient', 'Inpatient',
            'Compounding', 'Packaging', 'KAIMRC', 'Informatics', 'Amb Care'
        ]
    }
};

class Store {
    constructor() {
        this.init();
    }

    init() {
        const saved = localStorage.getItem('appe_data_v8');
        if (saved) {
            this.data = JSON.parse(saved);
        } else {
            this.data = INITIAL_DATA;
            this.seedIPPEData(); // Hydrate with new IPPE fields
            this.save();
        }
    }

    save() {
        localStorage.setItem('appe_data_v8', JSON.stringify(this.data));
    }

    seedIPPEData() {
        this.data.students.forEach(student => {
            // Attendance
            if (!student.attendanceRecords) {
                student.attendanceRecords = [];
                for (let i = 0; i < 5; i++) {
                    if (Math.random() > 0.9) {
                        student.attendanceRecords.push({
                            date: `2024-09-${10 + i}`,
                            status: Math.random() > 0.5 ? 'Excused' : 'Unexcused',
                            reason: 'Medical appointment'
                        });
                    }
                }
            }

            // Professionalism
            if (!student.professionalism) {
                student.professionalism = {
                    score: Math.floor(Math.random() * 3) + 7, // 7-10
                    violations: []
                };
                if (student.professionalism.score < 9) {
                    student.professionalism.violations.push({
                        date: '2024-09-15',
                        category: 'Punctuality',
                        note: 'Late arrival to morning huddle'
                    });
                }
            }

            // Grades
            if (!student.grades) {
                student.grades = {
                    professionalism: 30,
                    midYear: 0,
                    final: 0,
                    portfolio: 0,
                    epa: 0,
                    simulation: 0
                };
            }

            // Competencies (New)
            if (!student.competencies) {
                student.competencies = {
                    clos: {},
                    epas: {},
                    domains: {},
                    sessions: []
                };

                // Seed CLOs (0-100%)
                this.data.ippe_meta.clos.forEach(clo => {
                    student.competencies.clos[clo.id] = Math.floor(Math.random() * 30) + 70; // 70-100
                });

                // Seed EPAs (1-5)
                this.data.ippe_meta.epas.forEach(epa => {
                    student.competencies.epas[epa] = Math.floor(Math.random() * 2) + 3; // 3-5
                });

                // Seed Domains (0-100%)
                this.data.ippe_meta.domains.forEach(dom => {
                    student.competencies.domains[dom] = Math.floor(Math.random() * 20) + 80; // 80-100
                });

                // Seed Sessions
                this.data.ippe_meta.sessions.forEach((sess, idx) => {
                    student.competencies.sessions.push({
                        id: idx + 1,
                        name: sess,
                        status: Math.random() > 0.2 ? 'Completed' : 'Pending',
                        score: Math.floor(Math.random() * 2) + 3, // 3-5
                        preceptor: 'Dr. Preceptor'
                    });
                });
            }
        }

        // Grading Assessments (New)
        if (!student.assessments) {
            student.assessments = {
                // Mid-Year Evaluation (Session-based ratings)
                midYear: {
                    sessions: this.data.ippe_meta.sessions.map((sess, idx) => ({
                        name: sess,
                        rating: Math.random() > 0.15 ? 'Satisfactory' : 'Unsatisfactory',
                        corrected: Math.random() > 0.3
                    })),
                    penalty: 0 // Will be calculated
                },
                // End-Year Evaluation (Session-based ratings)
                endYear: {
                    sessions: this.data.ippe_meta.sessions.map((sess, idx) => ({
                        name: sess,
                        rating: Math.random() > 0.1 ? 'Satisfactory' : 'Unsatisfactory',
                        corrected: Math.random() > 0.2
                    })),
                    penalty: 0 // Will be calculated
                },
                // Portfolio Assessment
                portfolio: {
                    status: Math.random() > 0.8 ? (Math.random() > 0.5 ? 'Late' : 'Incomplete') : 'Complete',
                    penalty: 0, // 0-8% based on status
                    submittedDate: '2024-12-15',
                    completeness: Math.floor(Math.random() * 20) + 80 // 80-100%
                },
                // EPA Assessment
                epa: {
                    score: Math.floor(Math.random() * 20) + 80, // 80-100%
                    level: Math.floor(Math.random() * 2) + 3 // 3-5
                },
                // Simulation Assessment
                simulation: {
                    score: Math.floor(Math.random() * 25) + 75, // 75-100%
                    completed: Math.random() > 0.1
                }
            };

            // Calculate portfolio penalty
            if (student.assessments.portfolio.status === 'Late') {
                student.assessments.portfolio.penalty = Math.floor(Math.random() * 3) + 2; // 2-4%
            } else if (student.assessments.portfolio.status === 'Incomplete') {
                student.assessments.portfolio.penalty = Math.floor(Math.random() * 3) + 5; // 5-8%
            }

            // Calculate mid-year penalty (5% per uncorrected unsatisfactory)
            student.assessments.midYear.penalty = student.assessments.midYear.sessions.filter(
                s => s.rating === 'Unsatisfactory' && !s.corrected
            ).length * 5;

            // Calculate end-year penalty (5% per uncorrected unsatisfactory)
            student.assessments.endYear.penalty = student.assessments.endYear.sessions.filter(
                s => s.rating === 'Unsatisfactory' && !s.corrected
            ).length * 5;
        }

        // Update professionalism violations tracking
        if (student.professionalism && !student.professionalism.corrected) {
            student.professionalism.corrected = student.professionalism.violations.length === 0 || Math.random() > 0.4;
            student.professionalism.penalty = 0;

            // Check if unprofessional in reviews and not corrected
            if (student.professionalism.violations.length > 0 && !student.professionalism.corrected) {
                student.professionalism.penalty = 20; // 20% penalty
            }
        }
    });
}

    addStudent(student) {
    this.data.students.push(student);
    this.save();
}

    getStudents() {
    return this.data.students || [];
}

    getHighRiskStudents() {
    return this.data.students.filter(s => s.risk === 'high' || s.risk === 'medium');
}

    getStudentAttendance(studentId) {
    const student = this.data.students.find(s => s.id === studentId);
    return student ? student.attendanceRecords : [];
}

    getStudentProfessionalism(studentId) {
    const student = this.data.students.find(s => s.id === studentId);
    return student ? student.professionalism : null;
}

    getStudentGrades(studentId) {
    const student = this.data.students.find(s => s.id === studentId);
    return student ? student.grades : null;
}

    getIPPEMeta() {
    return this.data.ippe_meta;
}

    getStudentCompetencies(studentId) {
    const student = this.data.students.find(s => s.id === studentId);
    return student ? student.competencies : null;
}

// Sites
    getSites() {
    return this.data.sites;
}

// Rotations
    getRotations() {
    return this.data.rotations || [];
}

// Preceptors
    getPreceptors() {
    return this.data.preceptors || [];
}

    isPreceptorAvailable(preceptorName, blockNumber) {
    const preceptor = this.data.preceptors.find(p => p.name === preceptorName);
    if (!preceptor || !preceptor.availability) return false;
    // Block number is 1-indexed, array is 0-indexed
    return preceptor.availability[blockNumber - 1];
}

// Outcomes
getOutcomes() {
    return this.data.outcomes || {};
}

// Stats
getStats() {
    return this.data.stats || {};
}

// Student Assessments
getStudentAssessments(studentId) {
    const student = this.data.students.find(s => s.id === studentId);
    return student ? student.assessments : null;
}

// Calculate Student Grade
calculateStudentGrade(studentId) {
    const student = this.data.students.find(s => s.id === studentId);
    if (!student || !student.assessments) return null;

    const assessments = student.assessments;
    const prof = student.professionalism || {};

    // Base weights
    const weights = {
        professionalism: 30,
        midYear: 10,
        endYear: 20,
        portfolio: 15,
        epa: 10,
        simulation: 15
    };

    // Calculate component scores (start at 100% for each)
    const scores = {
        professionalism: 100 - (prof.penalty || 0),
        midYear: 100 - (assessments.midYear.penalty || 0),
        endYear: 100 - (assessments.endYear.penalty || 0),
        portfolio: 100 - (assessments.portfolio.penalty || 0),
        epa: assessments.epa.score || 0,
        simulation: assessments.simulation.score || 0
    };

    // Calculate weighted grade
    let finalGrade = 0;
    for (const component in weights) {
        finalGrade += (scores[component] / 100) * weights[component];
    }

    return {
        finalGrade: Math.round(finalGrade * 10) / 10,
        components: {
            professionalism: { score: scores.professionalism, weight: weights.professionalism, penalty: prof.penalty || 0 },
            midYear: { score: scores.midYear, weight: weights.midYear, penalty: assessments.midYear.penalty || 0 },
            endYear: { score: scores.endYear, weight: weights.endYear, penalty: assessments.endYear.penalty || 0 },
            portfolio: { score: scores.portfolio, weight: weights.portfolio, penalty: assessments.portfolio.penalty || 0 },
            epa: { score: scores.epa, weight: weights.epa },
            simulation: { score: scores.simulation, weight: weights.simulation }
        }
    };
}

// Dashboard KPIs
getKPIs() {
    return {
        totalStudents: this.data.students.length,
        activeRotations: this.data.rotations.filter(r => r.status === 'In Progress').length,
        avgGPA: (this.data.students.reduce((acc, s) => acc + s.gpa, 0) / this.data.students.length).toFixed(2),
        highRiskCount: this.data.students.filter(s => s.risk === 'high').length
    };
}
}

const store = new Store();
window.appStore = store; // Expose to window for easy access

