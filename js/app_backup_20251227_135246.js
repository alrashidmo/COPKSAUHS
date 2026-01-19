/**
 * Mock Data Store
 * Simulates a database with local storage persistence
 */

const INITIAL_DATA = {
    students: [
        // --- REAL DATA: IPPE I (Year 1) ---
        // Females
        { id: '441210019', name: 'Aljuri Tami Alzuabi', email: 'alzuabi10019@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.8, risk: 'low', attendance: 98 },
        { id: '441210252', name: 'Layan Ahmed Alomran', email: 'alomran10252@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.7, risk: 'low', attendance: 96 },
        { id: '451210021', name: 'Alanud Owayed Alotaibi', email: 'alotaibi10021@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.9, risk: 'low', attendance: 100 },
        { id: '451210023', name: 'Almas Saleh Alodaibi', email: 'alodaibi10023@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.5, risk: 'medium', attendance: 88 },
        { id: '451210030', name: 'Asmaa Hani Almanea', email: 'almanea10030@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.6, risk: 'low', attendance: 95 },
        { id: '451210045', name: 'Tala Ahmed Murshed', email: 'murshed10045@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.4, risk: 'low', attendance: 92 },
        { id: '451210140', name: 'Ruwayda Mazi Alanazi', email: 'alanazi10140@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.95, risk: 'low', attendance: 99 },
        { id: '451210143', name: 'Rayanh Saleem Alharbi', email: 'alharbi10143@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.1, risk: 'medium', attendance: 85 },
        { id: '451210149', name: 'Reem Mohammed Alharbi', email: 'alharbi10149@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.3, risk: 'low', attendance: 90 },
        { id: '451210154', name: 'Reema Atallah Alotaibi', email: 'alotaibi10154@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '451210180', name: 'Sarah Nahis Alharbi', email: 'alharbi10180@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 2.9, risk: 'high', attendance: 82 },
        { id: '451210181', name: 'Saja Muhiq Almutiri', email: 'almutiri10181@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '451210191', name: 'Shatha Mashhour Alharthi', email: 'alharthi10191@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.5, risk: 'low', attendance: 93 },
        { id: '451210192', name: 'Shumukh Abdullah Almutairi', email: 'almutairi10192@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '451210194', name: 'Shahad Ayedh Al Qahtani', email: 'alqahtani10194@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.0, risk: 'medium', attendance: 80 },
        { id: '451210204', name: 'Alya Abdullah Alkathiri', email: 'alkathiri10204@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.6, risk: 'low', attendance: 94 },
        { id: '451210209', name: 'Ghadah Fahad Bin Shayiq', email: 'binshayiq10209@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.4, risk: 'low', attendance: 91 },
        { id: '451210231', name: 'Farah Salem Helabi', email: 'helabi10231@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '451210296', name: 'Nada Mohammed Almutairi', email: 'almutairi10296@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.2, risk: 'medium', attendance: 87 },
        { id: '451210327', name: 'Waad Abdullah Alateeq', email: 'alateeq10327@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.7, risk: 'low', attendance: 95 },
        // Males
        { id: '441110162', name: 'Sulaiman Yasir Al Muzaini', email: 'almuzaini10162@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.5, risk: 'low', attendance: 93 },
        { id: '441110296', name: 'Awwadh Bander Alotaibi', email: 'alotaibi10296@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '451110010', name: 'Ahmed Mohammed Dahas', email: 'dahas10010@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.1, risk: 'medium', attendance: 84 },
        { id: '451110017', name: 'Anas Kamel Alshammari', email: 'alshammari10017@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.3, risk: 'low', attendance: 89 },
        { id: '451110021', name: 'Ahmed Fayez Alghamdi', email: 'alghamdia10021@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '451110097', name: 'Rayed Ali Alaklabi', email: 'alaklabi10097@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 2.7, risk: 'high', attendance: 72 },
        { id: '451110180', name: 'Dhafer Hmed Alkamsi', email: 'alkamsi10180@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.6, risk: 'low', attendance: 94 },
        { id: '451110210', name: 'Abdulaziz Ahmed Alshehri', email: 'alshehri10210@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.4, risk: 'low', attendance: 92 },
        { id: '451110242', name: 'Abdullah Saud Almouh', email: 'almouh10242@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '451110263', name: 'Abdulmajeed Faleh Almutairi', email: 'almutairi10263@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.0, risk: 'medium', attendance: 81 },
        { id: '451110315', name: 'Feras Abdulrahman Muslih', email: 'muslih10315@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.5, risk: 'low', attendance: 93 },
        { id: '451110322', name: 'Fahad Abdulrahman Aldarmi', email: 'aldarmi10322@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '451110324', name: 'Fahad Abdullah Alanazi', email: 'alanazif10324@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.2, risk: 'medium', attendance: 86 },
        { id: '451110353', name: 'Mazen Abdullah Modahi', email: 'modahi10353@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '451110434', name: 'Naif Abdulrahman Alruhaymi', email: 'alruhaymi10434@ksau-hs.edu.sa', cohort: 'IPPE I', gpa: 3.4, risk: 'low', attendance: 91 },

        // --- MOCK DATA: Other Cohorts (for Dashboard Completeness) ---
        // --- REAL DATA: IPPE II (Year 2) ---
        // Females
        { id: '421210105', name: 'Reham Eid Almutairi', email: '421210105@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.5, risk: 'low', attendance: 95 },
        { id: '431210053', name: 'Hessah Muhammad Abdulrahman Alsarhan', email: 'alsarhan10053@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.8, risk: 'low', attendance: 98 },
        { id: '431210208', name: 'Shouq Fawwaz Abdullah Alzahrani', email: 'alzahrani10208@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.6, risk: 'low', attendance: 92 },
        { id: '431210216', name: 'Dai Ali Abdulhadi Alqahtani', email: 'alqahtani10216@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.9, risk: 'low', attendance: 97 },
        { id: '431210240', name: 'Ghina Abdullah Omar Alomar', email: 'alomar10240@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.7, risk: 'low', attendance: 94 },
        { id: '431210252', name: 'Lara Hamad Mohammed Almanea', email: 'almanea10252@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.5, risk: 'low', attendance: 91 },
        { id: '431210369', name: 'Reema Ibrahim Mohammed Alageel', email: 'alageel10369@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '441210031', name: 'Alanoud Mohammed Alharbi', email: 'alharbi10031@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.4, risk: 'low', attendance: 89 },
        { id: '441210035', name: 'Amani Lafy Almutairi', email: 'almutairi10035@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.2, risk: 'medium', attendance: 85 },
        { id: '441210049', name: 'Bishier Salman Alfadhl', email: 'alfadhl10049@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '441210069', name: 'Haneen Khalil Al-Enazi', email: 'alenazi10069@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.6, risk: 'low', attendance: 93 },
        { id: '441210084', name: 'Thikra Abdullah Elqassem', email: 'elqassem10084@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '441210090', name: 'Razan Saleh Alolyani', email: 'alolyani10090@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.5, risk: 'low', attendance: 92 },
        { id: '441210091', name: 'Razan Funayyis Alqahtani', email: 'alqahtani10091@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '441210109', name: 'Rana Suliman Albudiry', email: 'albudiry10109@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.3, risk: 'low', attendance: 88 },
        { id: '441210111', name: 'Rana Ali Alharbi', email: 'alharbi10111@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '441210145', name: 'Ruof Adel Aldraibi', email: 'aldraibi10145@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.6, risk: 'low', attendance: 94 },
        { id: '441210146', name: 'Ruyuf Mohammed Alsulayim', email: 'alsulayim10146@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.7, risk: 'low', attendance: 96 },
        { id: '441210147', name: 'Sara Abdulhadi Alshehri', email: 'alshehri10147@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.5, risk: 'low', attendance: 91 },
        { id: '441210177', name: 'Shahad Sabr Almutairi', email: 'almutairi10177@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '441210181', name: 'Shahad Faraj Alqahtani', email: 'alqahtani10181@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.4, risk: 'low', attendance: 89 },
        { id: '441210188', name: 'Shooa Ahmed Bin Nafisah', email: 'binnafisah10188@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '441210208', name: 'Ghadi Abdulhadi Alomari', email: 'alomari10208@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.6, risk: 'low', attendance: 93 },
        { id: '441210209', name: 'Ghadeer Abdulrahman Alabdulkarim', email: 'alabdulkarim10209@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '441210212', name: 'Ghala Faisal Alkhayyal', email: 'alkhayyal10212@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.5, risk: 'low', attendance: 92 },
        { id: '441210236', name: 'Latifah Khalid Midaihish', email: 'midaihish10236@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.8, risk: 'low', attendance: 98 },
        { id: '441210248', name: 'Lojin Saeed Manea', email: 'manea10248@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.3, risk: 'low', attendance: 87 },
        { id: '441210280', name: 'Miran Makki Almuntashri', email: 'almuntashri10280@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.9, risk: 'low', attendance: 100 },
        { id: '441210304', name: 'Norah Ahmed Almasoud', email: 'almasoud10304@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.6, risk: 'low', attendance: 94 },
        { id: '441210337', name: 'Yara Ibrahim Alotibi', email: 'alotibi10337@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.7, risk: 'low', attendance: 96 },
        // Males
        { id: '421110092', name: 'Khalid Athal H Alanzi', email: '421110092@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.4, risk: 'low', attendance: 90 },
        { id: '431110051', name: 'Bassam Abdulrahman Abdullah Alfarraj', email: 'alfarraj10051@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '431110078', name: 'Jehad Ali Abdulrahman Aldayiel', email: 'aldayiel10078@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.5, risk: 'low', attendance: 92 },
        { id: '431110113', name: 'Riyadh Nasser Salem Alayyar', email: 'alayyar10113@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '431110115', name: 'Rayan Salem Falah Alqahtani', email: 'alqahtani10115@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.6, risk: 'low', attendance: 93 },
        { id: '431110209', name: 'Abdulrhman Abdullah Ali Bin Helayel', email: 'binhelayel10209@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '431110240', name: 'Abdulaziz Mohammed Ayed Alanazi', email: 'alanazi10240@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.3, risk: 'medium', attendance: 85 },
        { id: '431110474', name: 'Yazeed Khalid Ayed Almuzaini', email: 'almuzaini10474@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '431110476', name: 'Yazeed Rashed Saad Binkharfi', email: 'binkharfi10476@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.5, risk: 'low', attendance: 91 },
        { id: '431110509', name: 'Omar Eissa Abdullah Alghath', email: 'alghath10509@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '441110028', name: 'Alwaleed Abdullah Alzamel', email: 'alzamel10028@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.6, risk: 'low', attendance: 94 },
        { id: '441110056', name: 'Bassam Abdullah Alqahtani', email: 'alqahtani10056@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.7, risk: 'low', attendance: 96 },
        { id: '441110057', name: 'Bassam Emad Alomre', email: 'alomre10057@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.4, risk: 'low', attendance: 88 },
        { id: '441110077', name: 'Hamad Jaber Alanazi', email: 'alanazi10077@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '441110088', name: 'Khaled Abdulrehman Alwasel', email: 'alwasel10088@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.5, risk: 'low', attendance: 92 },
        { id: '441110102', name: 'Rakan Mnsor Almotairi', email: 'almotairi10102@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '441110104', name: 'Riyadh Abdulaziz Alshehri', email: 'alshehri10104@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.6, risk: 'low', attendance: 93 },
        { id: '441110185', name: 'Abdulrahman Khalid Alsulea', email: 'alsulea10185@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '441110212', name: 'Abdulaziz Fahad Alanazi', email: 'alanazia10212@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.3, risk: 'low', attendance: 89 },
        { id: '441110249', name: 'Abdullah Elyan Alenezi', email: 'alenezi10249@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '441110256', name: 'Abdullah Nasser Alkhuraif', email: 'alkhuraif10256@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.5, risk: 'low', attendance: 91 },
        { id: '441110293', name: 'Omar Majed Alobathani', email: 'alobathani10293@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '441110356', name: 'Mohammed Sami Al Shehry', email: 'alshehry10356@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.6, risk: 'low', attendance: 94 },
        { id: '441110364', name: 'Mohammed Abdulaziz Khoja', email: 'khoja10364@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.7, risk: 'low', attendance: 96 },
        { id: '441110421', name: 'Nasser Hamad Alhumaid', email: 'alhumaid10421@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.4, risk: 'low', attendance: 87 },
        { id: '441110454', name: 'Yazeed Hassan Alserehi', email: 'alserehi10454@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.8, risk: 'low', attendance: 98 },
        { id: '441110457', name: 'Yazeed Abdulkhaliq Alzahrani', email: 'alzahrani10457@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.5, risk: 'low', attendance: 92 },
        { id: '441110458', name: 'Yazeed Abdullah Alqarni', email: 'alqarni10458@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.9, risk: 'low', attendance: 97 },
        { id: '441110466', name: 'Youssef Abdulrahman Altawali', email: 'altawali10466@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.6, risk: 'low', attendance: 93 },
        { id: '441110485', name: 'Bader Saud Almutair', email: 'almutair10485@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '441110501', name: 'Abdulaziz Mohammed Almejaly', email: 'almejaly10501@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.3, risk: 'medium', attendance: 85 },
        { id: '441110939', name: 'Ali Mohammad Almunabhi', email: 'almunabhi10939@ksau-hs.edu.sa', cohort: 'IPPE II', gpa: 3.8, risk: 'low', attendance: 96 },

        // --- REAL DATA: IPPE III (Year 3) ---
        // Females
        { id: '411210227', name: 'Fatima Abdullah Balatif', email: 'balatif227@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.6, risk: 'low', attendance: 97 },
        { id: '421210015', name: 'Alhanouf Faris Alhaqbani', email: '421210015@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.8, risk: 'low', attendance: 99 },
        { id: '421210280', name: 'Monerah Suliman Aljalajel', email: '421210280@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '431210030', name: 'Amani Mohammed Farraj Alsubaie', email: 'alsubaie10030@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '431210040', name: 'Amani Abdullah Ali Alrubayan', email: 'alrubayan10040@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.5, risk: 'low', attendance: 92 },
        { id: '431210046', name: 'Joud Abdullah Abu Sallam', email: 'asiri10046@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '431210048', name: 'Joud Mohammed Khamees Al Otaibi', email: 'alotaibi10048@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '431210073', name: 'Dalal Fahad Ageel Alotaibi', email: 'alotaibi10073@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.6, risk: 'low', attendance: 94 },
        { id: '431210084', name: 'Razan Suliman Musa Alnajdi', email: 'alnajdi10084@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '431210093', name: 'Raghad Zaid Saad Alsabr', email: 'alsabr10093@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '431210099', name: 'Raghad Mohammed Rotimi Alanazi', email: 'alanazi10099@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.5, risk: 'low', attendance: 91 },
        { id: '431210105', name: 'Raneem Ibrahim Nasser Alessa', email: 'alessa10105@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '431210111', name: 'Rahaf Jobran Yahya Wadaeani', email: 'wadaeani10111@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.6, risk: 'low', attendance: 93 },
        { id: '431210121', name: 'Ruya Shnar Alshkrh', email: 'alshkrh10121@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.7, risk: 'low', attendance: 94 },
        { id: '431210129', name: 'Reem Moath Khalid Alali', email: 'alali10129@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '431210137', name: 'Remaz Khalid Mohammed Alturiki', email: 'alturiki10137@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '431210162', name: 'Sarah Abdullah Zaid Almandil', email: 'almandil10162@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.5, risk: 'low', attendance: 92 },
        { id: '431210165', name: 'Sarah Mubarak Nasser Alnasser', email: 'alnasser10165@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.6, risk: 'low', attendance: 94 },
        { id: '431210166', name: 'Sara Mohammed Saleh Alsarhan', email: 'alsarhan10166@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '431210188', name: 'Shumukh Majed Abdullah Alsubaie', email: 'alsubaie10188@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '431210193', name: 'Shahad Rashed Ibrahim Almugren', email: 'almugren10193@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '431210200', name: 'Shahad Abdulaziz Abdullah Bin Surayyi', email: 'binsurayyi10200@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.6, risk: 'low', attendance: 93 },
        { id: '431210220', name: 'Abeer Fahad Abdullah Albakran', email: 'albakran10220@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.5, risk: 'low', attendance: 92 },
        { id: '431210231', name: 'Ghadah Nasser Almutairi', email: 'almutairi10231@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '431210262', name: 'Lama Sari Mohammed Alsuwailem', email: 'alsuwailem10262@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '431210295', name: 'Mada Zaid Ali Hazazi', email: 'hazazi10295@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '431210332', name: 'Nourah Nasser Ali Alqhtani', email: 'alqhtani10332@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.6, risk: 'low', attendance: 94 },
        { id: '431210351', name: 'Wateen Sameer Zaid Almalki', email: 'almalki10351@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '431210354', name: 'Weam Ahmad Mohammed Abualghaith', email: 'abualghaith10354@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '431210364', name: 'Linah Sultan Hajad Alotaibi', email: 'alotaibi10364@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '431210376', name: 'Rahaf Bandar Saleh Alkhalifah', email: 'alkhalifah10376@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.5, risk: 'low', attendance: 92 },
        // Males
        { id: '361110232', name: 'Abdullah Abdulaziz Alturki', email: 'Alturki232@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.4, risk: 'low', attendance: 90 },
        { id: '381110151', name: 'Rayyan Munif Alshammari', email: 'alshammari151@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.5, risk: 'low', attendance: 91 },
        { id: '411110166', name: 'Abdulrahman Dhafer Alqarni', email: 'ALQARNI166@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.6, risk: 'low', attendance: 93 },
        { id: '421110081', name: 'Khaled Ibrahim Alkhreiigi', email: '421110081@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '421110270', name: 'Abdulmajeed Saleh Alshamrani', email: '421110270@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.7, risk: 'low', attendance: 94 },
        { id: '421110363', name: 'Mohammad Ahmed Alghamdi', email: '421110363@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '431110064', name: 'Turki Rashed Abdullah Almuaythir', email: 'almuaythir10064@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.5, risk: 'low', attendance: 90 },
        { id: '431110138', name: 'Saad Abdullah Saad Alhamdan', email: 'alhamdan10138@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.6, risk: 'low', attendance: 92 },
        { id: '431110180', name: 'Saleh Mansoor Ali Albarrak', email: 'albarrak10180@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.8, risk: 'low', attendance: 95 },
        { id: '431110222', name: 'Abdulaziz Hamad Mohammed Alrajhi', email: 'alrajhi10222@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.7, risk: 'low', attendance: 93 },
        { id: '431110261', name: 'Abdullah Abdulrahman Abdullah Alasmari', email: 'alasmari10261@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.9, risk: 'low', attendance: 97 },
        { id: '431110285', name: 'Abdulmajeed Ali Salman Ghazwani', email: 'ghazwani10285@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.5, risk: 'low', attendance: 89 },
        { id: '431110289', name: 'Abdulmalik Shalhoub Zaal Alanazi', email: 'alanazi10289@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.6, risk: 'low', attendance: 91 },
        { id: '431110339', name: 'Fahad Abdullah Muqbil Alqhtani', email: 'alqhtani10339@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.8, risk: 'low', attendance: 94 },
        { id: '431110350', name: 'Faisal Khalid Mousa Alzuraiqi', email: 'alzuraiqi10350@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.7, risk: 'low', attendance: 92 },
        { id: '431110458', name: 'Nawaf Mohammed S Albogami', email: 'albogami10458@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '431110470', name: 'Waleed Abdulrahman D Almutairi', email: 'almutairi10470@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.6, risk: 'low', attendance: 93 },
        { id: '431110481', name: 'Yazeed Abdullah Nasser Bin Thnayan', email: 'binthnayan10481@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.5, risk: 'low', attendance: 90 },
        { id: '431110507', name: 'Abdullah Mohammed A Aldakkan', email: 'aldakkan10507@ksau-hs.edu.sa', cohort: 'IPPE III', gpa: 3.8, risk: 'low', attendance: 96 },


        // --- REAL DATA: APPE (Year 4) ---
        // Females
        { id: '391210303', name: 'Sarah Saud Abdulaziz Bindulaym', email: 'bindulaym303@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.6, risk: 'low', attendance: 95 },
        { id: '411210040', name: 'Sham Abdullah Al Enazi', email: 'ALENAZI040@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.8, risk: 'low', attendance: 98 },
        { id: '411210102', name: 'Dana Emad Aloumi', email: 'ALOMAE102@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.7, risk: 'low', attendance: 94 },
        { id: '411210251', name: 'Yara Munif Alshammari', email: 'ALSHAMMARI0251@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '411210284', name: 'Raghad Faisal Alwail', email: 'alwail284@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.5, risk: 'low', attendance: 92 },
        { id: '421210009', name: 'Albatoul Omran Alomran', email: '421210009@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '421210014', name: 'Alhanouf Khaled Almisfer', email: '421210014@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.6, risk: 'low', attendance: 93 },
        { id: '421210019', name: 'Amal Mohammed Aleanzi', email: '421210019@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '421210031', name: 'Jinan Abdulrahman Alhuwayshil', email: '421210031@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '421210033', name: 'Jod Amer Mohammed Aljuaidi', email: '421210033@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.5, risk: 'low', attendance: 91 },
        { id: '421210038', name: 'Hissah Mohammed Alkyssir', email: '421210038@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '421210040', name: 'Hussh Naif Albahlal', email: '421210040@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.7, risk: 'low', attendance: 94 },
        { id: '421210047', name: 'Khuzama Hamoud J Alamri', email: '421210047@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '421210048', name: 'Khawla Ahmed Alrubayan', email: '421210048@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.6, risk: 'low', attendance: 92 },
        { id: '421210085', name: 'Ragad Khlaf Alenazi', email: '421210085@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '421210087', name: 'Raghad Saleh Abdullah Alajmi', email: '421210087@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.5, risk: 'low', attendance: 93 },
        { id: '421210091', name: 'Raghad Sulaiman K Almutairi', email: '421210091@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '421210103', name: 'Raneem Muharib Alanazi', email: '421210103@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.6, risk: 'low', attendance: 94 },
        { id: '421210112', name: 'Ruwayda Saeed Mohammed Alshahrani', email: '421210112@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '421210136', name: 'Ruyuf Abdullah Alshuqayr', email: '421210136@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '421210154', name: 'Sarah Abdulaziz Bin Saqyah', email: '421210154@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.5, risk: 'low', attendance: 91 },
        { id: '421210161', name: 'Sadeem Abdulaziz Alamri', email: '421210161@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '421210178', name: 'Shaden Abdullah Alharbi', email: '421210178@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.6, risk: 'low', attendance: 92 },
        { id: '421210183', name: 'Shoroog Saad Faleh Al Otaibi', email: '421210183@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '421210194', name: 'Shoug Khalid Almousa', email: '421210194@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.7, risk: 'low', attendance: 95 },
        // Males
        { id: '381110601', name: 'Mohammad Fares Almoteb', email: 'almoteb601@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.5, risk: 'low', attendance: 92 },
        { id: '391110116', name: 'Nasser Trad Aldosari', email: 'aldosari116@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '411110050', name: 'Abdullah Ibrahim Alkhulaifi', email: 'alkhulaifi050@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.7, risk: 'low', attendance: 94 },
        { id: '411110152', name: 'Saud Enad Alanazi', email: 'alanazi152@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '411110350', name: 'Batal Muhayya Aldosari', email: 'aldosari350@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.6, risk: 'low', attendance: 93 },
        { id: '411110523', name: 'Faisal Mohammed Alshehri', email: 'alshehri523@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.5, risk: 'low', attendance: 91 },
        { id: '421110017', name: 'Ahmed Murdhi Alharbi', email: '421110017@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '421110055', name: 'Bandar Sultan Aldawish', email: '421110055@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '421110076', name: 'Hamad Mohammed Alkhalaf', email: '421110076@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '421110114', name: 'Riadh Mansor Arrais', email: '421110114@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.6, risk: 'low', attendance: 92 },
        { id: '421110148', name: 'Sultan Ali Aljardan', email: '421110148@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '421110192', name: 'Abdulrahman Sulaiman Alossimi', email: '421110192@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.5, risk: 'low', attendance: 90 },
        { id: '421110208', name: 'Abdulrahman Majid Almadi', email: '421110208@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.7, risk: 'low', attendance: 94 },
        { id: '421110210', name: 'Abdulsalam Zarea Alanazi', email: '421110210@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '421110236', name: 'Abdulaziz Abdulrahman Alarifi', email: '421110236@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.6, risk: 'low', attendance: 93 },
        { id: '421110271', name: 'Abdulmajeed Mohammed Alsuwaylihi', email: '421110271@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.8, risk: 'low', attendance: 97 },
        { id: '421110296', name: 'Faris Salem Althobiti', email: '421110296@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.5, risk: 'low', attendance: 91 },
        { id: '421110313', name: 'Fahad Ali Alomair', email: '421110313@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.9, risk: 'low', attendance: 99 },
        { id: '421110315', name: 'Fahad Faisal Almutiri', email: '421110315@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.7, risk: 'low', attendance: 95 },
        { id: '421110358', name: 'Mohammed Ibrahim Al Rudhyyan', email: '421110358@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.8, risk: 'low', attendance: 96 },
        { id: '421110381', name: 'Mohammed Abdulrahman Almahanna', email: '421110381@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.6, risk: 'low', attendance: 94 },
        { id: '421110387', name: 'Mohammed Abdulwahab Alfafi', email: '421110387@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.9, risk: 'low', attendance: 98 },
        { id: '421110394', name: 'Mohammed Farhan Alotebe', email: '421110394@ksau-hs.edu.sa', cohort: 'APPE', gpa: 3.7, risk: 'low', attendance: 95 },
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


const RUBRICS = {
    midterm: {
        title: 'Midterm Evaluation',
        sections: [
            {
                title: 'Knowledge (Foundational)',
                domain: 'knowledge',
                questions: [
                    { id: 'q1', text: 'Demonstrates foundational knowledge (CLO 1.1)', clo: '1.1' },
                    { id: 'q2', text: 'Applies guidelines to practice (CLO 1.2)', clo: '1.2' }
                ]
            },
            {
                title: 'Skills (Clinical & Technical)',
                domain: 'skills',
                questions: [
                    { id: 'q3', text: 'Provides patient-centered care (CLO 2.1)', clo: '2.1' },
                    { id: 'q4', text: 'Demonstrates problem-solving skills (CLO 2.2)', clo: '2.2' },
                    { id: 'q5', text: 'Performs calculations accurately (CLO 2.3)', clo: '2.3' }
                ]
            },
            {
                title: 'Values (Professionalism)',
                domain: 'values',
                questions: [
                    { id: 'q6', text: 'Exhibits professionalism and ethics (CLO 3.1)', clo: '3.1' },
                    { id: 'q7', text: 'Communicates effectively (CLO 3.2)', clo: '3.2' },
                    { id: 'q8', text: 'Demonstrates self-awareness (CLO 3.3)', clo: '3.3' }
                ]
            }
        ]
    },
    final: {
        title: 'Final Evaluation',
        sections: [
            {
                title: 'Knowledge (Foundational)',
                domain: 'knowledge',
                questions: [
                    { id: 'q1', text: 'Demonstrates foundational knowledge (CLO 1.1)', clo: '1.1' },
                    { id: 'q2', text: 'Applies guidelines to practice (CLO 1.2)', clo: '1.2' }
                ]
            },
            {
                title: 'Skills (Clinical & Technical)',
                domain: 'skills',
                questions: [
                    { id: 'q3', text: 'Provides patient-centered care (CLO 2.1)', clo: '2.1' },
                    { id: 'q4', text: 'Demonstrates problem-solving skills (CLO 2.2)', clo: '2.2' },
                    { id: 'q5', text: 'Performs calculations accurately (CLO 2.3)', clo: '2.3' }
                ]
            },
            {
                title: 'Values (Professionalism)',
                domain: 'values',
                questions: [
                    { id: 'q6', text: 'Exhibits professionalism and ethics (CLO 3.1)', clo: '3.1' },
                    { id: 'q7', text: 'Communicates effectively (CLO 3.2)', clo: '3.2' },
                    { id: 'q8', text: 'Demonstrates self-awareness (CLO 3.3)', clo: '3.3' }
                ]
            }
        ]
    }
};

const IPPE_SCHEDULE = [
    { week: 1, date: '3 Sep 2025', topic: 'Orientation to IPPE I Course', preceptor: 'Dr. Lama Alfehaid / Dr. Faisal AlMuqbil' },
    { week: 2, date: '10 Sep 2025', topic: 'Introduction to Pharmacy Department', preceptor: 'Dr. Bader Alnasser/ Dr. Faisal AlMuqbil' },
    { week: 3, date: '17 Sep 2025', topic: 'General Hospital Tour', preceptor: 'Dr. Bader Alnasser/ Dr. Faisal AlMuqbil' },
    { week: 4, date: '22 Sep 2025', topic: 'Pharmacy Administration', preceptor: 'Dr. Yousef Al Aqeel/ Dr. Faisal AlMuqbil' },
    { week: 5, date: '30 Sep 2025', topic: 'Quality Assurance I', preceptor: 'Dr. Saleh Alanazi/ Dr. Faisal AlMuqbil' },
    { week: 6, date: '8 Oct 2025', topic: 'Quality Assurance II', preceptor: 'Dr. Saleh Alanazi/ Dr. Faisal AlMuqbil' },
    { week: 7, date: '22 Oct 2025', topic: 'Inpatient Pharmacy-I', preceptor: 'Dr. Mohammed Alotaibi/ Dr. Faisal AlMuqbil' },
    { week: 8, date: '29 Oct 2025', topic: 'Inpatient Pharmacy-II', preceptor: 'Dr. Mohammed Alotaibi/ Dr. Faisal AlMuqbil' },
    { week: 9, date: '5 Nov 2025', topic: 'Entrustable Professional Activities', preceptor: 'TBD/ Dr. Faisal AlMuqbil' },
    { week: 10, date: '12 Nov 2025', topic: 'IV Room I', preceptor: 'Dr. Hamza Samanoudi/ Dr. Faisal AlMuqbil' },
    { week: 11, date: '19 Nov 2025', topic: 'IV Room II', preceptor: 'Dr. Hamza Samanoudi/ Dr. Faisal AlMuqbil' },
    { week: 12, date: '26 Nov 2025', topic: 'Outpatient Pharmacy-I', preceptor: 'Dr. Sara Albilal / Dr. Abdulelah Alqhoson' },
    { week: 13, date: '3 Dec 2025', topic: 'Outpatient Pharmacy-II', preceptor: 'Dr. Mohammed Alkethairi/ Dr. Faisal AlMuqbil' },
    { week: 14, date: '10 Dec 2025', topic: 'Entrustable Professional Activities', preceptor: 'TBD/ Dr. Faisal AlMuqbil' },
    { week: 15, date: '17 Dec 2025', topic: 'Exchange Experience Discussion / Mid Evaluation', preceptor: 'Dr. Lama Alfehaid / Dr. Faisal AlMuqbil' }
];

class Store {
    constructor() {
        this.init();
    }

    init() {
        const STORAGE_KEY = 'appe_data_v13_force_reset';
        const saved = localStorage.getItem(STORAGE_KEY);
        let loadedData = null;

        if (saved) {
            try {
                loadedData = JSON.parse(saved);
                // Basic validation
                if (!loadedData || !Array.isArray(loadedData.students)) {
                    console.warn('Corrupted data found in local storage. Resetting to default.');
                    loadedData = null;
                }
            } catch (e) {
                console.error('Error parsing local storage data:', e);
                loadedData = null;
            }
        }

        this.data = loadedData || JSON.parse(JSON.stringify(INITIAL_DATA)); // Deep copy to avoid reference issues

        // Hydrate Data (Ensure imported students have necessary objects)
        if (this.data.students) {
            this.data.students.forEach(student => {
                if (!student.competencies) {
                    student.competencies = { sessions: [], clos: {} };
                }
                if (!student.professionalism) {
                    student.professionalism = { score: 9.5, violations: [] }; // Default high professionalism
                }
                if (!student.assessments) {
                    student.assessments = {
                        portfolio: { status: 'Pending', score: 0 },
                        epa: { level: 0 },
                        simulation: { completed: false }
                    };
                }
                // Ensure risk is set if missing
                if (!student.risk) student.risk = 'low';
            });
        }

        // Always run seed to hydrate missing new fields (like assessments)
        try {
            this.seedIPPEData();
        } catch (e) {
            console.error('Error seeding data:', e);
            // If seeding fails, try to reset to initial data again without seeding (or minimal seeding)
            this.data = JSON.parse(JSON.stringify(INITIAL_DATA));
        }

        this.save();
    }

    save() {
        localStorage.setItem('appe_data_v11_clean', JSON.stringify(this.data));
    }

    seedIPPEData() {
        const sessionsList = [
            'QA I', 'QA II', 'IV Room', 'Outpatient', 'Inpatient',
            'Compounding', 'Packaging', 'KAIMRC', 'Health Informatics', 'Ambulatory Care',
            'Inventory Management', 'Patient Counseling', 'Drug Information', 'Medication Safety', 'Narcotics Control',
            'Clinical Rounds', 'Journal Club', 'Case Presentation', 'Topic Discussion', 'Interprofessional Rounds',
            'Discharge Counseling', 'Medication Reconciliation', 'Anticoagulation Clinic', 'Diabetes Clinic', 'Hypertension Clinic',
            'Oncology Pharmacy', 'Pediatric Pharmacy', 'Emergency Medicine', 'Critical Care', 'Infectious Diseases'
        ];

        this.data.students.forEach((student, index) => {
            // 1. Demographics
            if (!student.demographics) {
                student.demographics = {
                    badgeNumber: `B${2025000 + index}`,
                    gender: Math.random() > 0.5 ? 'Female' : 'Male',
                    group: `Group ${String.fromCharCode(65 + (index % 5))}` // Groups A-E
                };
            }

            // 2. Attendance & Absence Tracking
            if (!student.attendanceRecords) {
                student.attendanceRecords = [];
                let excusedCount = 0;
                let unexcusedCount = 0;

                // Generate some random absences
                for (let i = 0; i < 20; i++) { // Simulate 20 weeks
                    if (Math.random() > 0.9) {
                        const isExcused = Math.random() > 0.4;
                        if (isExcused) excusedCount++;
                        else unexcusedCount++;

                        student.attendanceRecords.push({
                            date: `2024-09-${10 + i}`,
                            status: isExcused ? 'Excused' : 'Unexcused',
                            reason: isExcused ? 'Medical appointment' : 'Overslept',
                            documented: isExcused
                        });
                    }
                }
                student.attendanceStats = {
                    excused: excusedCount,
                    unexcused: unexcusedCount,
                    compliance: Math.max(0, 100 - ((excusedCount + unexcusedCount * 2) * 2)) // Mock calc
                };
            }

            // 3. Professionalism Dashboard
            if (!student.professionalism) {
                student.professionalism = {
                    score: Math.floor(Math.random() * 3) + 7, // 7-10
                    categories: {
                        punctuality: Math.floor(Math.random() * 2) + 8,
                        dressCode: 10,
                        responsibility: Math.floor(Math.random() * 3) + 7,
                        confidentiality: 10,
                        behavior: 10
                    },
                    violations: [],
                    trend: [8, 9, 9, 8, 9, 10] // Mock trend
                };

                if (student.professionalism.score < 9) {
                    student.professionalism.violations.push({
                        date: '2024-09-15',
                        category: 'Punctuality',
                        note: 'Late arrival to morning huddle',
                        corrected: Math.random() > 0.5
                    });
                }
            }

            // 16. Misconduct & 17. AI Policy
            if (!student.misconduct) {
                student.misconduct = [];
                if (Math.random() > 0.95) {
                    student.misconduct.push({
                        date: '2024-10-01',
                        type: Math.random() > 0.5 ? 'Plagiarism' : 'AI Misuse',
                        category: 'Reflection',
                        action: 'Warning Letter',
                        resolution: 'Counseling Session'
                    });
                }
            }

            // 5. Session-by-Session Tracking
            if (!student.competencies) {
                student.competencies = {
                    clos: {},
                    epas: {},
                    domains: {},
                    sessions: []
                };

                // Seed CLOs (0-100%)
                this.data.ippe_meta.clos.forEach(clo => {
                    student.competencies.clos[clo.id] = Math.floor(Math.random() * 30) + 70;
                });

                // Seed EPAs (1-5)
                this.data.ippe_meta.epas.forEach(epa => {
                    student.competencies.epas[epa] = Math.floor(Math.random() * 2) + 3;
                });

                // Seed Domains (0-100%)
                this.data.ippe_meta.domains.forEach(dom => {
                    student.competencies.domains[dom] = Math.floor(Math.random() * 20) + 80;
                });

                // Seed 30 Sessions
                sessionsList.forEach((sess, idx) => {
                    student.competencies.sessions.push({
                        id: idx + 1,
                        name: sess,
                        status: Math.random() > 0.1 ? 'Completed' : 'Pending',
                        score: Math.floor(Math.random() * 2) + 3, // 3-5
                        preceptor: 'Dr. Preceptor',
                        site: 'KAMC',
                        strengths: 'Good communication',
                        weaknesses: 'Needs more confidence'
                    });
                });
            }

            // 13. Site & 14. Preceptor Evaluations (Mock Data)
            if (!student.evaluations) {
                student.evaluations = {
                    site: { score: 4.5, comments: 'Great learning environment' },
                    preceptor: { score: 4.8, comments: 'Very supportive' }
                };
            }

            // 15. Assessments (Mid-Year, End-Year, Portfolio, EPA, Simulation)
            if (!student.assessments) {
                student.assessments = {
                    midYear: {
                        score: Math.floor(Math.random() * 20) + 80,
                        competencies: { '1.1': 3, '2.1': 3, '3.1': 3 } // Mock competency ratings
                    },
                    endYear: {
                        score: Math.floor(Math.random() * 20) + 80,
                        competencies: { '1.1': 4, '2.1': 4, '3.1': 4 }
                    },
                    portfolio: {
                        score: Math.floor(Math.random() * 20) + 80,
                        status: Math.random() > 0.9 ? 'Late' : 'Submitted'
                    },
                    epa: {
                        score: Math.floor(Math.random() * 20) + 80,
                        level: Math.floor(Math.random() * 3) + 2 // Levels 2-5
                    },
                    simulation: {
                        score: Math.floor(Math.random() * 20) + 80,
                        completed: true
                    }
                };
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
        const prof = student.professionalism || { score: 10, violations: [] };

        // New Weights
        const weights = {
            professionalism: 30,
            midYear: 10,
            endYear: 20,
            portfolio: 15,
            epa: 10,
            simulation: 15
        };

        // 1. Professionalism (30%)
        // Penalty: Lose 20% of TOTAL grade if uncorrected violation exists
        // For now, we assume any violation in the list triggers this if not explicitly marked 'corrected'
        const hasUncorrectedViolation = prof.violations.some(v => !v.corrected);
        let professionalismScore = 100; // Base score
        // If score < 6/10, it's a risk, but the 20% penalty is specific to the rule
        // The user said "loses 20% of the grade". This usually means 20 percentage points from the final grade.
        // However, standard grading usually calculates component score. 
        // Let's calculate component score first.
        // If score is 10/10 -> 100%. 
        professionalismScore = (prof.score / 10) * 100;

        let professionalismPenalty = 0;
        if (hasUncorrectedViolation) {
            professionalismPenalty = 20; // 20% of total grade means we might need to deduct from final, or set this component to 0?
            // "student loses 20% of the grade" -> Likely 20 points off the final grade.
            // I will track this as a specific deduction.
        }

        // 2. Mid-Year (10%) & 3. Final (20%)
        // Penalty: 5% of grade for each persisting 'unsatisfactory'
        const countUnsatisfactory = (evalObj) => {
            if (!evalObj || !evalObj.competencies) return 0;
            return Object.values(evalObj.competencies).filter(val => val === 1).length; // Assuming 1 is Unsatisfactory
        };

        const midYearUnsatisfactoryCount = countUnsatisfactory(assessments.midYear);
        const finalYearUnsatisfactoryCount = countUnsatisfactory(assessments.endYear);

        const midYearPenalty = midYearUnsatisfactoryCount * 5; // 5% per item
        const finalYearPenalty = finalYearUnsatisfactoryCount * 5;

        const midYearScore = assessments.midYear?.score || 100; // Default to 100 if not set, or calculate from items
        const finalYearScore = assessments.endYear?.score || 100;

        // 4. Portfolio (15%)
        // Penalty: 2-8% for late/incomplete
        let portfolioPenalty = 0;
        if (assessments.portfolio?.status === 'Late') portfolioPenalty = 5; // Average 5%
        if (assessments.portfolio?.status === 'Incomplete') portfolioPenalty = 8;
        const portfolioScore = assessments.portfolio?.score || 100;

        // 5. EPA (10%)
        const epaScore = assessments.epa?.score || 0;

        // 6. Simulation (15%)
        const simulationScore = assessments.simulation?.score || 0;

        // Calculate Weighted Total
        let weightedTotal =
            (professionalismScore * 0.30) +
            (midYearScore * 0.10) +
            (finalYearScore * 0.20) +
            (portfolioScore * 0.15) +
            (epaScore * 0.10) +
            (simulationScore * 0.15);

        // Apply Penalties (Deducted from the Final Grade directly based on "loses X% of the grade")
        const totalPenalty = professionalismPenalty + midYearPenalty + finalYearPenalty + portfolioPenalty;
        let finalGrade = weightedTotal - totalPenalty;
        if (finalGrade < 0) finalGrade = 0;

        return {
            finalGrade: Math.round(finalGrade * 10) / 10,
            weightedTotal: Math.round(weightedTotal * 10) / 10,
            totalPenalty: totalPenalty,
            components: {
                professionalism: {
                    weight: 30,
                    score: professionalismScore,
                    penalty: professionalismPenalty,
                    note: hasUncorrectedViolation ? 'Uncorrected Violation (-20%)' : ''
                },
                midYear: {
                    weight: 10,
                    score: midYearScore,
                    penalty: midYearPenalty,
                    note: midYearUnsatisfactoryCount > 0 ? `${midYearUnsatisfactoryCount} Unsatisfactory Items (-${midYearPenalty}%)` : ''
                },
                endYear: {
                    weight: 20,
                    score: finalYearScore,
                    penalty: finalYearPenalty,
                    note: finalYearUnsatisfactoryCount > 0 ? `${finalYearUnsatisfactoryCount} Unsatisfactory Items (-${finalYearPenalty}%)` : ''
                },
                portfolio: {
                    weight: 15,
                    score: portfolioScore,
                    penalty: portfolioPenalty,
                    note: portfolioPenalty > 0 ? `Status: ${assessments.portfolio?.status} (-${portfolioPenalty}%)` : ''
                },
                epa: { weight: 10, score: epaScore, penalty: 0 },
                simulation: { weight: 15, score: simulationScore, penalty: 0 }
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

// Initialize Store
const store = new Store();
window.appStore = store;

class App {
    constructor() {
        this.store = window.appStore;
        this.root = document.getElementById('app-root');
        this.title = document.getElementById('page-title');

        // Initialize Pharma Data State
        this.pharmaData = {
            facultyProfiles: {}, // Store individual faculty data here
            // Student Portal Data (New)
            studentRequests: [
                { id: 'REQ-001', type: 'Rotation Change', date: '2024-12-15', status: 'Approved', step: 3, admin: 'Dr. Sarah (IPPE)' },
                { id: 'REQ-002', type: 'Absence', date: '2024-12-18', status: 'Pending', step: 1, admin: 'Mr. Khalid' }
            ],
            compliance: {
                bls: { status: 'valid', date: '2025-05-20' },
                acls: { status: 'valid', date: '2025-06-15' },
                vaccination: { status: 'valid', date: '2024-09-01' },
                nda: { status: 'valid', date: '2023-08-01' },
                insurance: { status: 'expired', date: '2023-12-01' }, // Demo expired
                screening: { status: 'pending', date: null }
            },
            research: {
                years: ['2020', '2021', '2022', '2023', '2024'],
                q1: [5, 8, 12, 15, 22],
                q2: [4, 6, 8, 10, 12],
                q3: [3, 4, 5, 5, 8],
                citations: [45, 80, 150, 320, 510]
            },
            grants: {
                funnelValues: [24, 15, 6],
                fundingSources: [450000, 1200000]
            },
            supervision: {
                values: [45, 12, 3]
            },
            collaborations: [
                { country: 'USA', flag: '🇺🇸', institution: 'University of Arizona', type: 'Joint Research' },
                { country: 'UK', flag: '🇬🇧', institution: 'UCL School of Pharmacy', type: 'Faculty Exchange' },
                { country: 'Canada', flag: '🇨🇦', institution: 'University of Toronto', type: 'Grant Partnership' },
                { country: 'Australia', flag: '🇦🇺', institution: 'Monash University', type: 'PhD Supervision' }
            ],
            development: {
                labels: ['Conferences', 'Workshops', 'Awards', 'Leadership', 'Comm. Service'],
                values: [12, 18, 5, 4, 15]
            },
            faculty: [
                { name: 'Prof. Mahmoud Mansour', role: 'Professor', email: 'mansoura@ksau-hs.edu.sa' },
                { name: 'Prof. Aiman Obaidat', role: 'Professor', email: 'obaidata@ksau-hs.edu.sa' },
                { name: 'Prof. Alaa El-deen Yassin', role: 'Professor', email: 'yassina@ksau-hs.edu.sa' },
                { name: 'Dr. Osama AlWassil', role: 'Associate Professor', email: 'wassilo@ksau-hs.edu.sa' },
                { name: 'Dr. Wesam Abdel-razaq', role: 'Associate Professor', email: 'razaqw@ksau-hs.edu.sa' },
                { name: 'Dr. Mai Al Ajaji', role: 'Assistant Professor', email: 'ajajim@ksau-hs.edu.sa' },
                { name: 'Dr. Sahar AlGhamdi', role: 'Assistant Professor / Chairperson', email: 'ghamdisa@ksau-hs.edu.sa' },
                { name: 'Dr. Reem Alkhodier', role: 'Assistant Professor', email: 'khodierr@ksau-hs.edu.sa' },
                { name: 'Dr. Abeer Al Harbi', role: 'Assistant Professor', email: 'harbiabe@ksau-hs.edu.sa' },
                { name: 'Dr. Rawan Alnafisah', role: 'Assistant Professor', email: 'nafisahr@ksau-hs.edu.sa' },
                { name: 'Dr. Lama Alsheddi', role: 'Assistant Professor', email: 'sheddil@ksau-hs.edu.sa' },
                { name: 'Dr. Saqer Al Arifi', role: 'Assistant Professor', email: 'arifis@ksau-hs.edu.sa' },
                { name: 'Dr. Saleh Alanizi', role: 'Assistant Professor', email: 'anazis@mngha.med.sa' }
            ]
        };

        this.init();
    }

    init() {
        this.setupGlobalNavigation();
        this.setupNavigation();
        this.render('home');
    }

    setupGlobalNavigation() {
        const globalLinks = document.querySelectorAll('.global-nav-link');
        const unitNavs = document.querySelectorAll('.unit-nav');

        globalLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const unit = e.currentTarget.dataset.unit;

                // Update active state
                globalLinks.forEach(l => l.classList.remove('active'));
                e.currentTarget.classList.add('active');

                // Toggle Unit Navs
                unitNavs.forEach(nav => {
                    nav.classList.add('hidden');
                    if (nav.id === `nav-${unit}`) {
                        nav.classList.remove('hidden');
                    }
                });

                // Set default view for unit
                switch (unit) {
                    case 'qa': this.render('qa-strategic', { title: 'Quality Assurance Unit' }); break;
                    case 'research': this.render('research-projects', { title: 'Research Unit' }); break;
                    case 'academic': this.render('dept-practice', { title: 'Academic Affairs' }); break;
                    case 'alumni': this.render('alumni-events', { title: 'Alumni Unit' }); break;
                    case 'community': this.render('community-initiatives', { title: 'Community Service Unit' }); break;
                    case 'clinical': this.render('home'); break;
                }
            });
        });
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const view = e.currentTarget.dataset.view;

                // Update active state
                navLinks.forEach(l => l.classList.remove('active'));
                e.currentTarget.classList.add('active');

                this.render(view);
            });
        });
    }

    render(view, param) {
        this.currentView = view;
        this.root.innerHTML = ''; // Clear content

        switch (view) {
            case 'home':
                this.renderHomePage();
                break;
            case 'students':
                this.renderStudentList();
                break;
            case 'student-details':
                this.renderStudentDetails(param);
                break;
            case 'rotations':
                this.renderRotationSchedule();
                break;
            case 'evaluations':
                this.renderEvaluations();
                break;
            case 'stats':
                this.renderStatsDashboard();
                break;
            case 'preceptors':
                this.renderPreceptorDirectory();
                break;
            case 'outcome-mapping':
                this.renderOutcomeMapping();
                break;
            case 'settings':
                this.renderComingSoon('Settings');
                break;
            case 'help':
                this.renderComingSoon('Help');
                break;
            case 'ippe1':
                this.renderIPPE1();
                break;
            case 'ippe2':
                this.renderIPPE2();
                break;
            case 'ippe3':
                this.renderIPPE3();
                break;
            case 'ippe-community':
                this.renderIPPECommunity();
                break;
            case 'ippe-dashboard':
                this.renderIPPEDashboard();
                break;
            case 'ippe-tracker':
                this.renderStudentTracker();
                break;
            case 'ippe-attendance':
                this.renderComingSoon('Attendance Log');
                break;
            case 'ippe-professionalism':
                this.renderComingSoon('Professionalism');
                break;
            case 'ippe-grades':
                // this.renderComingSoon('Grading Center');
                this.renderIPPE_Admin_Bulk();
                break;
            case 'ippe-competency':
                this.renderCompetencyDashboard();
                break;
            case 'ippe-clo':
                this.renderCLODashboard();
                break;
            case 'ippe-epa':
                this.renderEPADashboard();
                break;
            case 'ippe-domains':
                this.renderDomainDashboard();
                break;
            case 'student-portal':
                this.renderStudentPortal();
                break;
            case 'appe':
            case 'dashboard':
                this.renderAPPE();
                break;
            case 'reports':
                // this.root.innerHTML = '<h2>Reports - Coming Soon</h2>';
                this.renderIPPE_Admin_Bulk();
                break;
            // QA Unit
            case 'qa-strategic':
                this.renderQualityUnit('strategic');
                break;
            case 'qa-kpi':
                this.renderComingSoon('PharmD Program KPI');
                break;
            case 'qa-surveys':
                this.renderQualityUnit('surveys');
                break;
            case 'qa-plo':
                this.renderOutcomeMapping(); // Or dedicated PLO view if exists
                break;
            case 'qa-faculty':
            case 'qa-distinctions':
                window.renderFacultyDashboard();
                break;
            case 'qa-reports':
                this.renderIPPE_Admin_Bulk();
                break;
            // Research Unit
            case 'research-projects':
                this.renderComingSoon('Research Projects', 'Ongoing Faculty & Student Research');
                break;
            case 'research-publications':
                this.renderComingSoon('Publications', 'Journal Articles & Conference Posters');
                break;
            // Academic Affairs
            case 'dept-practice':
                this.renderComingSoon('Department of Pharmacy Practice', 'Faculty, Courses, and Curriculum');
                break;
            case 'dept-science':
                this.renderPharmaScienceDashboardEnhanced_v2();
                break;
            // Alumni Unit
            case 'alumni-events':
                this.renderComingSoon('Alumni Events', 'Reunions & CPD Activities');
                break;
            case 'alumni-network':
                this.renderComingSoon('Alumni Network', 'Connect with Graduates');
                break;
            // Community Service Unit
            case 'community-initiatives':
                this.renderComingSoon('Community Initiatives', 'Outreach Programs & Campaigns');
                break;
            case 'community-volunteering':
                this.renderComingSoon('Volunteering', 'Student & Faculty Opportunities');
                break;
            default:
                this.root.innerHTML = '<h2>Page Under Construction</h2>';
        }
    }

    renderIPPE1() {
        this.renderHomePage('ippe1', 'overview', 'all');
    }

    renderHomePage(activeTab = 'overview', subTab = 'overview', filterId = 'all') {
        try {
            this.title.textContent = 'Clinical Affairs Hub';
            const allStudents = this.store.getStudents();
            const kpis = this.store.getKPIs();

            // 1. Cohort Partitioning & Metrics (Re-used for Overview)
            const cohorts = {
                'Y1': { label: 'IPPE I', color: '#4caf50', hours: 90 },
                'Y2': { label: 'IPPE II', color: '#ff9800', hours: 90 },
                'Y3': { label: 'IPPE III', color: '#2196f3', hours: 45 },
                'Comm': { label: 'Community', color: '#9c27b0', hours: 75 },
                'APPE': { label: 'APPE', color: '#e91e63', hours: 1800 }
            };

            // Partition Students for Overview Metrics
            const cohortData = { Y1: [], Y2: [], Y3: [], Comm: [], APPE: [] };
            allStudents.forEach(s => {
                const c = s.cohort;
                if (c === 'IPPE I' || c === 'IPPE 1') cohortData['Y1'].push(s);
                else if (c === 'IPPE II' || c === 'IPPE 2') cohortData['Y2'].push(s);
                else if (c === 'IPPE III' || c === 'IPPE 3') cohortData['Y3'].push(s);
                else if (c === 'Community') cohortData['Comm'].push(s);
                else if (c === 'APPE') cohortData['APPE'].push(s);
            });

            // Navigation Tabs
            const tabs = [
                { id: 'overview', label: '📊 Outcomes Overview' },
                { id: 'ippe1', label: 'IPPE I' },
                { id: 'ippe2', label: 'IPPE II' },
                { id: 'ippe3', label: 'IPPE III' },
                { id: 'community', label: 'Community' },
                { id: 'appe', label: 'APPE' }
            ];

            const tabNav = `
                <div class="card mb-4" style="padding: 0.5rem 1rem;">
                    <div style="display: flex; gap: 0.5rem; overflow-x: auto; padding-bottom: 2px;">
                        ${tabs.map(t => `
                            <button class="btn ${activeTab === t.id ? 'btn-primary' : 'btn-outline'}" 
                                onclick="app.renderHomePage('${t.id}', 'overview', 'all')"
                                style="flex-shrink: 0; border-radius: 20px; px-4;">
                                ${t.label}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;

            if (activeTab === 'overview') {
                // ... (Overview Logic) ...
                // --- OVERVIEW TAB CONTENT (Metrics & Charts) ---

                // Helper to Calculate Metrics
                const calcMetrics = (students, targetHours, key) => {
                    const avg = (accessor) => {
                        const vals = students.map(accessor).filter(v => v != null);
                        if (!vals.length) return 0;
                        return vals.reduce((a, b) => a + b, 0) / vals.length;
                    };
                    return {
                        enrolled: students.length,
                        attendance: avg(s => s.attendance),
                        hours: targetHours,
                        clo: avg(s => 80 + (Math.random() * 10)),
                        professionalism: avg(s => s.professionalism ? s.professionalism.score : 9.5),
                        midYear: avg(s => 82 + (Math.random() * 8)),
                        endYear: avg(s => 85 + (Math.random() * 8)),
                        portfolio: avg(s => 88 + (Math.random() * 5)),
                        epa: avg(s => key === 'Y1' ? 3.2 : (key === 'Y2' ? 3.8 : 4.4)),
                        simulation: avg(s => 84 + (Math.random() * 10))
                    };
                };

                const cohortMetrics = Object.keys(cohorts).map(key => ({
                    key, ...cohorts[key],
                    metrics: calcMetrics(cohortData[key], cohorts[key].hours, key)
                }));

                const labels = cohortMetrics.map(c => c.label);
                const bgColors = cohortMetrics.map(c => c.color);

                const content = `
                    <!-- Metrics Grid -->
                    <div class="dashboard-grid" style="grid-template-columns: repeat(4, 1fr); gap: 1rem;">
                        <div class="card"><h5 class="text-center mb-2">Total Enrolled</h5><div style="height:150px;"><canvas id="chartEnrolled"></canvas></div></div>
                        <div class="card"><h5 class="text-center mb-2">Attendance (%)</h5><div style="height:150px;"><canvas id="chartAttendance"></canvas></div></div>
                        <div class="card"><h5 class="text-center mb-2">Hours Completed</h5><div style="height:150px;"><canvas id="chartHours"></canvas></div></div>
                        <div class="card"><h5 class="text-center mb-2">Avg CLO %</h5><div style="height:150px;"><canvas id="chartCLO"></canvas></div></div>
                        <div class="card"><h5 class="text-center mb-2">Professionalism</h5><div style="height:150px;"><canvas id="chartProf"></canvas></div></div>
                        <div class="card"><h5 class="text-center mb-2">Mid-Year %</h5><div style="height:150px;"><canvas id="chartMid"></canvas></div></div>
                        <div class="card"><h5 class="text-center mb-2">End-Year %</h5><div style="height:150px;"><canvas id="chartEnd"></canvas></div></div>
                        <div class="card"><h5 class="text-center mb-2">Portfolio %</h5><div style="height:150px;"><canvas id="chartPort"></canvas></div></div>
                    </div>
                `;

                // Render Container
                this.root.innerHTML = tabNav + content;

                // Init Overview Charts
                const noScale = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } };
                const scale = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } };

                new Chart(document.getElementById('chartEnrolled'), { type: 'doughnut', data: { labels, datasets: [{ data: cohortMetrics.map(c => c.metrics.enrolled), backgroundColor: bgColors }] }, options: noScale });
                new Chart(document.getElementById('chartAttendance'), { type: 'bar', data: { labels, datasets: [{ data: cohortMetrics.map(c => c.metrics.attendance), backgroundColor: bgColors }] }, options: scale });
                new Chart(document.getElementById('chartHours'), { type: 'bar', data: { labels, datasets: [{ data: cohortMetrics.map(c => c.metrics.hours), backgroundColor: bgColors }] }, options: scale });
                new Chart(document.getElementById('chartCLO'), { type: 'line', data: { labels, datasets: [{ data: cohortMetrics.map(c => c.metrics.clo), borderColor: '#555', pointBackgroundColor: bgColors, tension: 0.3 }] }, options: scale });
                new Chart(document.getElementById('chartProf'), { type: 'polarArea', data: { labels, datasets: [{ data: cohortMetrics.map(c => c.metrics.professionalism), backgroundColor: bgColors }] }, options: { ...noScale, scales: { r: { display: false } } } });
                new Chart(document.getElementById('chartMid'), { type: 'line', data: { labels, datasets: [{ data: cohortMetrics.map(c => c.metrics.midYear), borderColor: '#555', pointBackgroundColor: bgColors }] }, options: scale });
                new Chart(document.getElementById('chartEnd'), { type: 'line', data: { labels, datasets: [{ data: cohortMetrics.map(c => c.metrics.endYear), borderColor: '#555', pointBackgroundColor: bgColors }] }, options: scale });
                new Chart(document.getElementById('chartPort'), { type: 'pie', data: { labels, datasets: [{ data: cohortMetrics.map(c => c.metrics.portfolio), backgroundColor: bgColors }] }, options: noScale });

            } else {
                // --- SPECIFIC COURSE DASHBOARDS ---
                // Get content from helper
                const dash = this.getIPPEDashboardContent(activeTab, subTab, filterId);

                // Render
                this.root.innerHTML = tabNav + `<div class="fade-in-up">${dash.html}</div>`;

                // Init Charts if init function exists
                if (dash.initCharts) {
                    setTimeout(() => dash.initCharts(), 50);
                }
            }

        } catch (e) {
            console.error('Render Home Error:', e);
            this.root.innerHTML = `
            <div class="card" style="color: red; padding: 2rem;">
                <h3>Error Loading Dashboard</h3>
                <p>${e.message}</p>
                <pre>${e.stack}</pre>
                <button onclick="localStorage.clear(); location.reload()" class="btn btn-primary">Reset Data & Reload</button>
            </div>`;
        }
    }

    renderStudentList() {
        this.title.textContent = 'Student Master Database';
        const students = this.store.getStudents();

        const rows = students.map(s => {
            const riskClass = s.risk === 'high' ? 'risk-high' : (s.risk === 'medium' ? 'risk-warning' : '');
            const riskBadge = s.risk === 'high'
                ? '<span class="risk-badge badge-danger">High Risk</span>'
                : (s.risk === 'medium' ? '<span class="risk-badge badge-warning">Watch</span>' : '<span class="risk-badge badge-success">On Track</span>');

            return `
                <tr class="${riskClass}" >
                    <td>${s.id}</td>
                    <td><strong>${s.name}</strong></td>
                    <td>${s.gpa}</td>
                    <td>${s.completedRotations} / 10</td>
                    <td>${s.attendance}%</td>
                    <td>${riskBadge}</td>
                    <td>
                        <button class="btn btn-outline" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;" onclick="app.render('student-details', '${s.id}')">View</button>
                    </td>
                </tr>
                `;
        }).join('');

        const html = `
                <div class="card mb-4" >
                    <div class="flex-between">
                        <div style="display:flex; gap:1rem;">
                            <input type="text" placeholder="Search students..." style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; width: 300px;">
                                <select style="padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc;">
                                    <option>All Cohorts</option>
                                    <option>Class of 2025</option>
                                </select>
                        </div>
                        <button id="btn-add-student" class="btn btn-primary">+ Add Student</button>
                    </div>
            </div>

            <!--Simple Add Student Modal(Hidden by default )-->
            <div id="add-student-modal" class="card mb-4 hidden" style="border: 2px solid var(--primary-gold);">
                <h3>Add New Student</h3>
                <form id="form-add-student" style="margin-top:1rem; display:grid; grid-template-columns: 1fr 1fr; gap:1rem;">
                    <div>
                        <label style="display:block; margin-bottom:0.5rem;">Student ID</label>
                        <input type="text" name="id" required style="width:100%; padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                    </div>
                    <div>
                        <label style="display:block; margin-bottom:0.5rem;">Full Name</label>
                        <input type="text" name="name" required style="width:100%; padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                    </div>
                    <div>
                        <label style="display:block; margin-bottom:0.5rem;">GPA</label>
                        <input type="number" step="0.01" name="gpa" required style="width:100%; padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                    </div>
                    <div>
                        <label style="display:block; margin-bottom:0.5rem;">Risk Status</label>
                        <select name="risk" style="width:100%; padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                            <option value="low">Low (On Track)</option>
                            <option value="medium">Medium (Watch)</option>
                            <option value="high">High (At Risk)</option>
                        </select>
                    </div>
                    <div style="grid-column: span 2; text-align: right; margin-top:1rem;">
                        <button type="button" id="btn-cancel-add" class="btn btn-outline" style="margin-right:0.5rem;">Cancel</button>
                        <button type="submit" class="btn btn-primary">Save Student</button>
                    </div>
                </form>
            </div>

            <div class="data-table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>GPA</th>
                            <th>Rotations</th>
                            <th>Attendance</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
            `;

        this.root.innerHTML = html;

        // Add Student Logic
        const btnAdd = document.getElementById('btn-add-student');
        const modal = document.getElementById('add-student-modal');
        const btnCancel = document.getElementById('btn-cancel-add');
        const form = document.getElementById('form-add-student');

        if (btnAdd) {
            btnAdd.addEventListener('click', () => {
                modal.classList.remove('hidden');
            });
        }

        if (btnCancel) {
            btnCancel.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const newStudent = {
                    id: formData.get('id'),
                    name: formData.get('name'),
                    gpa: parseFloat(formData.get('gpa')),
                    risk: formData.get('risk'),
                    completedRotations: 0,
                    attendance: 100
                };

                this.store.addStudent(newStudent);
                this.renderStudentList(); // Re-render to show new student
            });
        }
    }

    renderStudentDetails(studentId) {
        const student = this.store.getStudents().find(s => s.id === studentId);
        if (!student) {
            this.root.innerHTML = '<h3>Student not found</h3>';
            return;
        }

        this.title.textContent = `Student Details: ${student.name} `;
        const grades = this.store.calculateStudentGrade(studentId);
        const assessments = this.store.getStudentAssessments(studentId);

        // Helper to format rows
        const renderRow = (label, data) => `
                <tr>
                <td><strong>${label}</strong></td>
                <td>${data.weight}%</td>
                <td>${data.score.toFixed(1)}%</td>
                <td style="color: ${data.penalty > 0 ? 'var(--danger)' : 'inherit'};">
                    ${data.penalty > 0 ? `-${data.penalty}% (${data.note})` : '-'}
                </td>
            </tr>
                `;

        const html = `
                <div class="card mb-4" >
                <button class="btn btn-outline" onclick="app.render('students')">← Back to List</button>
                <button class="btn btn-primary" style="float: right;" onclick="app.generateStudentPDF('${student.id}')">📄 Download Official Report</button>
                <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h2>${student.name}</h2>
                        <p class="text-muted">ID: ${student.id} | GPA: ${student.gpa}</p>
                    </div>
                    <div style="text-align: right;">
                        <h3 style="font-size: 2rem; color: ${grades.finalGrade >= 75 ? 'var(--primary-green)' : 'var(--danger)'};">
                            ${grades.finalGrade}%
                        </h3>
                        <span class="risk-badge ${grades.finalGrade >= 75 ? 'badge-success' : 'badge-danger'}">
                            ${grades.finalGrade >= 75 ? 'PASSING' : 'FAILING RISK'}
                        </span>
                    </div>
                </div>
            </div>

            <div class="card">
                <h3>Standardized Grading Dashboard</h3>
                <div class="data-table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th style="width: 40%;">Instrument</th>
                                <th>Weight</th>
                                <th>Score (100%)</th>
                                <th>Penalty / Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${renderRow('Professionalism', grades.components.professionalism)}
                            ${renderRow('Mid-Year Written Evaluation', grades.components.midYear)}
                            ${renderRow('End-Year Written Evaluation', grades.components.endYear)}
                            ${renderRow('Portfolio Evaluation', grades.components.portfolio)}
                            ${renderRow('Entrustable Professional Activities (EPA)', grades.components.epa)}
                            ${renderRow('Simulation-Based Assessment', grades.components.simulation)}
                            <tr style="background-color: #f9f9f9; font-weight: bold;">
                                <td>FINAL GRADE</td>
                                <td>100%</td>
                                <td>${grades.weightedTotal}% (Gross)</td>
                                <td style="color: var(--danger);">${grades.totalPenalty > 0 ? `Total Penalty: -${grades.totalPenalty}%` : ''}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
                    <p><strong>* Passing Score:</strong> =75%</p>
                    <p><strong>* Automatic Failure Conditions:</strong> Uncorrected professionalism violations, excessive absences, or failing critical safety checks.</p>
                </div>
            </div>

            <div class="dashboard-grid" style="margin-top: 2rem;">
                <div class="card">
                    <h3>Professionalism Violations</h3>
                    ${student.professionalism?.violations?.length > 0 ? `
                        <ul style="list-style: none; padding: 0;">
                            ${student.professionalism.violations.map(v => `
                                <li style="padding: 0.5rem; border-bottom: 1px solid #eee; color: var(--danger);">
                                    <strong>${v.date}:</strong> ${v.category} - ${v.note} 
                                    ${v.corrected ? '<span class="badge-success">Corrected</span>' : '<span class="badge-danger">Uncorrected</span>'}
                                </li>
                            `).join('')}
                        </ul>
                    ` : '<p class="text-muted">No violations recorded.</p>'}
                </div>

                <div class="card">
                    <h3>Assessment Status</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="margin-bottom: 0.5rem;">
                            <strong>Portfolio Status:</strong> 
                            <span class="${assessments?.portfolio.status === 'Late' ? 'text-danger' : ''}">
                                ${assessments?.portfolio.status || 'Pending'}
                            </span>
                        </li>
                        <li style="margin-bottom: 0.5rem;">
                            <strong>EPA Level:</strong> 
                            ${assessments?.epa.level || 'N/A'}/5
                        </li>
                        <li style="margin-bottom: 0.5rem;">
                            <strong>Simulation:</strong> 
                            ${assessments?.simulation.completed ? 'Completed' : 'Pending'}
                        </li>
                    </ul>
                </div>
            </div>

            <!--Instrument Session Tracker(Refined)-->
                <div class="card" style="margin-top: 2rem;">
                    <h3>Instrument Session Tracker</h3>
                    <p class="text-muted" style="margin-bottom: 1rem;">Click to view/edit session details.</p>

                    <div style="margin-bottom: 2rem;">
                        <h4 style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                            Portfolio Evaluation (15 Sessions)
                            <span style="font-size: 0.9rem; font-weight: normal;">Weight: 20%</span>
                        </h4>
                        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                            ${Array(15).fill(0).map((_, i) => `
                        <button class="btn btn-outline btn-sm" style="width: 40px; height: 40px; ${i < 10 ? 'background: #e8f5e9; border-color: #2ecc71;' : ''}" title="Session ${i + 1}">
                            ${i + 1}
                        </button>
                    `).join('')}
                        </div>
                    </div>

                    <div style="margin-bottom: 2rem;">
                        <h4 style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                            Entrustable Professional Activities (EPA) (2 Sessions)
                            <span style="font-size: 0.9rem; font-weight: normal;">Weight: 10%</span>
                        </h4>
                        <div style="display: flex; gap: 0.5rem;">
                            <button class="btn btn-outline btn-sm" style="width: 100px; background: #fff3cd; border-color: #ffc107;">EPA 1</button>
                            <button class="btn btn-outline btn-sm" style="width: 100px;">EPA 2</button>
                        </div>
                    </div>

                    <div style="margin-bottom: 1rem;">
                        <h4 style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
                            Simulation-Based Assessment (1 Session)
                            <span style="font-size: 0.9rem; font-weight: normal;">Weight: 10%</span>
                        </h4>
                        <div style="display: flex; gap: 0.5rem;">
                            <button class="btn btn-outline btn-sm" style="width: 150px;">Simulation 1</button>
                        </div>
                    </div>
                </div>
            `;
        this.root.innerHTML = html;
    }

    renderIPPE1_Overview(allStudents, filteredStudents, filterId, level = 'ippe1') {
        // Calculate Metrics
        const totalEnrolled = filteredStudents.length;
        const avgAttendance = Math.round(filteredStudents.reduce((a, b) => a + b.attendance, 0) / totalEnrolled) || 0;
        const avgGpa = (filteredStudents.reduce((a, b) => a + b.gpa, 0) / totalEnrolled).toFixed(2);

        // Mock Risk Count
        const riskCount = filteredStudents.filter(s => s.attendance < 85 || s.gpa < 3.0).length;

        // Dynamic Title
        const title = level === 'appe' ? 'APPE: Advanced Pharmacy Practice' : 'IPPE I: Community & Health System';

        return `
            <div class="card mb-4">
                <div class="flex-between">
                    <h3>${title}</h3>
                     <div style="display:flex; align-items:center; gap:1rem;">
                        <label><strong>Filter Student:</strong></label>
                         <select onchange="app.renderHomePage('${level}', 'overview', this.value)" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc;">
                            <option value="all" ${filterId === 'all' ? 'selected' : ''}>All Students</option>
                            ${allStudents.map(s => `<option value="${s.id}" ${filterId === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                        </select>
                    </div>
                </div>
            </div>

            <!--Top Stats Row-->
            <div class="dashboard-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 2rem;">
                <div class="card stat-card">
                    <span class="stat-label">Total Students</span>
                    <span class="stat-value">${totalEnrolled}</span>
                    <small>Class of 2025</small>
                </div>
                <div class="card stat-card" style="border-left: 4px solid var(--primary-green);">
                    <span class="stat-label">Avg Attendance</span>
                    <span class="stat-value">${avgAttendance}%</span>
                    <small>Target: 95%</small>
                </div>
                <div class="card stat-card" style="border-left: 4px solid var(--primary-gold);">
                    <span class="stat-label">Avg GPA</span>
                    <span class="stat-value">${avgGpa}</span>
                    <small>Keep > 3.0</small>
                </div>
                <div class="card stat-card" style="border-left: 4px solid var(--danger);">
                    <span class="stat-label">At-Risk Students</span>
                    <span class="stat-value" style="color: var(--danger);">${riskCount}</span>
                    <small>Need Intervention</small>
                </div>
            </div>

            <!--Charts Grid-->
            <div class="dashboard-grid" style="grid-template-columns: 2fr 1fr; margin-bottom: 2rem;">
                <!-- Weighted Ranking (Modern Shape) -->
                <div class="card">
                    <div class="flex-between mb-4">
                        <h3 style="margin:0;">🏆 Student Performance Ranking (Weighted)</h3>
                        <div style="display:flex; gap:0.5rem;">
                            <span class="badge-secondary">Top 10</span>
                        </div>
                    </div>
                    <div style="height: 350px; position: relative;">
                        <canvas id="chartRanking"></canvas>
                    </div>
                    <div style="margin-top:1rem; display:flex; gap:1rem; justify-content:center; font-size:0.8rem; color:#666;">
                        <span><span style="color:#4facfe">●</span> Academic</span>
                        <span><span style="color:#00f2fe">●</span> Professionalism</span>
                        <span><span style="color:#43e97b">●</span> IPPE Perf</span>
                        <span><span style="color:#fa709a">●</span> Extra</span>
                    </div>
                </div>

                <!-- Missing Shapes Filled -->
                <div style="display:flex; flex-direction:column; gap:1.5rem;">
                    
                    <!-- Attendance Overview -->
                    <div class="card" style="flex:1;">
                        <h4 style="margin-bottom:1rem;">Attendance Overview</h4>
                        <div style="height: 150px; position: relative; display:flex; justify-content:center;">
                            <canvas id="chartAttendance"></canvas>
                        </div>
                    </div>

                     <!-- Grade Distribution -->
                    <div class="card" style="flex:1;">
                        <h4 style="margin-bottom:1rem;">Grade Distribution</h4>
                        <div style="height: 150px; position: relative;">
                            <canvas id="chartGrades"></canvas>
                        </div>
                    </div>

                </div>
            </div>

            <!--Performance Metrics Radar-->
                <div class="card mb-4">
                    <h4 style="margin-bottom:1rem;">Performance Metrics (Cohort Profile)</h4>
                    <div style="height: 300px; position: relative;">
                        <canvas id="chartPerformance"></canvas>
                    </div>
                </div>
            `;
    }

    renderQualityUnit(activeTab = 'strategic') {
        this.title.textContent = 'Quality Assurance Unit';

        // --- Shared Data ---
        const strategicGoals = [
            {
                id: 'g1', title: 'Goal 1: High-Quality Education', icon: '🎓', color: '#2196f3', progress: 88,
                branches: [
                    { name: '1.1 Environment', kpis: [{ name: 'Std Eval Learning', target: '80%', actual: '82%' }, { name: 'First Yr Completion', target: '90%', actual: '88%' }, { name: 'SPLE Pass Rate', target: '100%', actual: '98%' }, { name: 'Employability', target: '80%', actual: '75%' }] },
                    { name: '1.2 Experiential', kpis: [{ name: 'Counseling Util.', target: '80%', actual: '60%' }, { name: 'New Training Sites', target: '1', actual: '3' }] },
                    { name: '1.3 Leadership', kpis: [{ name: 'IPE Participation', target: '100%', actual: '100%' }, { name: 'Leadership roles', target: '20', actual: '25' }] },
                    { name: '1.4 Faculty Improv.', kpis: [{ name: 'Activity Attend.', target: '100%', actual: '95%' }] },
                    { name: '1.5 Modalities', kpis: [{ name: 'Student:Staff', target: '10:1', actual: '12:1' }, { name: 'Sim Pharmacy', target: '100%', actual: '100%' }] },
                    { name: '1.6 MNG-HA', kpis: [{ name: 'Update MOA', target: '100%', actual: 'In Prog' }] }
                ]
            },
            {
                id: 'g2', title: 'Goal 2: Premier Research', icon: '🧪', color: '#9c27b0', progress: 72,
                branches: [
                    { name: '2.1 Culture', kpis: [{ name: 'Evid-Based Courses', target: '30%', actual: '35%' }, { name: 'Student Abstracts', target: '30', actual: '28' }] },
                    { name: '2.2 Partnerships', kpis: [{ name: 'Multicenter Projs', target: '5', actual: '4' }] }
                ]
            },
            {
                id: 'g3', title: 'Goal 3: Community Partnership', icon: '🤝', color: '#4caf50', progress: 90,
                branches: [
                    { name: '3.1 Service', kpis: [{ name: 'Supported Activ.', target: '20', actual: '22' }] },
                    { name: '3.2 Involvement', kpis: [{ name: 'Fac Participation', target: '25%', actual: '30%' }, { name: 'Std Participation', target: '25%', actual: '20%' }] },
                    { name: '3.3 Conferences', kpis: [{ name: 'Regional Activ.', target: '1', actual: '3' }] }
                ]
            },
            {
                id: 'g4', title: 'Goal 4: Impactful Fingerprint', icon: '🌍', color: '#ff9800', progress: 85,
                branches: [
                    { name: '4.1 Brand', kpis: [{ name: 'Social Reactivity', target: '5', actual: '8' }, { name: 'Leader Roles', target: '10', actual: '12' }] },
                    { name: '4.2 Alumni', kpis: [{ name: 'Alumni Activities', target: '9', actual: '6' }] },
                    { name: '4.3 Prof Orgs', kpis: [{ name: 'New MOUs', target: '1', actual: '2' }] }
                ]
            },
            {
                id: 'g5', title: 'Goal 5: Grad Studies', icon: '📜', color: '#607d8b', progress: 60,
                branches: [
                    { name: '5.1 Programs', kpis: [{ name: 'PharmSci Program', target: '100%', actual: 'Done' }, { name: 'Fellowship', target: '100%', actual: 'Pending' }] },
                    { name: '5.2 Competency', kpis: [{ name: 'Joint Program', target: '1', actual: 'In Prog' }] }
                ]
            }
        ];

        const pharmdGoals = [
            {
                id: 'ph1', title: 'Std 1: Mission & Mgt', icon: '🎯', color: '#673ab7', progress: 0,
                branches: [
                    {
                        name: '1.1 Planning', kpis: [
                            { name: 'PHRD 1.1: Op Plan Indicators Achieved', target: '80%', actual: '78%' }
                        ]
                    }
                ]
            },
            {
                id: 'ph2', title: 'Std 2: Qual Assurance', icon: '🛡️', color: '#3f51b5', progress: 0,
                branches: [
                    {
                        name: '2.1 Governance', kpis: [
                            { name: 'PHRD 2.1: Advisory Comm Meetings', target: '1', actual: '1' }
                        ]
                    },
                    {
                        name: '2.2 Evaluation', kpis: [
                            { name: 'PHRD 2.2: Course Evals Conducted', target: '100%', actual: '95%' }
                        ]
                    }
                ]
            },
            {
                id: 'ph3', title: 'Std 3: Teaching', icon: '📚', color: '#2196f3', progress: 0,
                branches: [
                    {
                        name: '3.1 Qual Learning', kpis: [
                            { name: 'PHRD 3.1: Student Eval of Learning Exp', target: '4/5', actual: '3.9/5' },
                            { name: 'PHRD 3.2: Student Eval of Course Qual', target: '3.5/5', actual: '3.6/5' }
                        ]
                    },
                    {
                        name: '3.3 Outcomes', kpis: [
                            { name: 'PHRD 3.3: Completion Rate', target: '80%', actual: '82%' },
                            { name: 'PHRD 3.4: First Year Retention Rate', target: '80%', actual: '79%' },
                            { name: 'PHRD 3.5: National Exam Performance', target: '90%', actual: '92%' },
                            { name: 'PHRD 3.6: Employment / Postgrad', target: '80%', actual: '75%' },
                            { name: 'PHRD 3.7: Avg Class Size', target: '40', actual: '38' },
                            { name: 'PHRD 3.8: Employer Proficiency Eval', target: '4/5', actual: '4.1/5' }
                        ]
                    }
                ]
            },
            {
                id: 'ph4', title: 'Std 4: Students', icon: '👥', color: '#00bcd4', progress: 0,
                branches: [
                    {
                        name: '4.1 Services', kpis: [
                            { name: 'PHRD 4.1: Student Satis. with Services', target: '3.5/5', actual: '3.4/5' },
                            { name: 'PHRD 4.2: Student Satis. with Clinical Rot', target: '3.5/5', actual: '3.8/5' }
                        ]
                    },
                    {
                        name: '4.3 Support', kpis: [
                            { name: 'PHRD 4.3: At-Risk Improvement', target: '50%', actual: '55%' },
                            { name: 'PHRD 4.4: Conf. Projects Acceptance', target: '80%', actual: '70%' }
                        ]
                    }
                ]
            },
            {
                id: 'ph5', title: 'Std 5: Faculty', icon: '👨‍🏫', color: '#009688', progress: 0,
                branches: [
                    {
                        name: '5.1 Ratios', kpis: [
                            { name: 'PHRD 5.1: Student to Staff Ratio', target: '10:1', actual: '11:1' },
                            { name: 'PHRD 5.2: Student to Practitioner Ratio', target: '3:1', actual: '3:1' },
                            { name: 'PHRD 5.3: Clinical Preceptor Satis.', target: '4/5', actual: '4.2/5' }
                        ]
                    },
                    {
                        name: '5.4 Composition', kpis: [
                            { name: 'PHRD 5.4: Staff Gender Dist. (50:50)', target: '100%', actual: '100%' },
                            { name: 'PHRD 5.5: Staff Turnover Rate', target: '5%', actual: '4%' }
                        ]
                    },
                    {
                        name: '5.6 Research', kpis: [
                            { name: 'PHRD 5.6: Staff Publications %', target: '80%', actual: '65%' },
                            { name: 'PHRD 5.7: Pub Rate per Faculty', target: '3', actual: '2.5' },
                            { name: 'PHRD 5.8: Citations per Faculty', target: '30', actual: '35' },
                            { name: 'PHRD 5.9: Median H-Index', target: '5', actual: '6' }
                        ]
                    },
                    {
                        name: '5.10 Dev', kpis: [
                            { name: 'PHRD 5.10: Faculty Training Activities', target: '4', actual: '5' },
                            { name: 'PHRD 5.11: Community Service Activities', target: '4', actual: '8' }
                        ]
                    }
                ]
            },
            {
                id: 'ph6', title: 'Std 6: Resources', icon: '💻', color: '#4caf50', progress: 0,
                branches: [
                    {
                        name: '6.1 Resources', kpis: [
                            { name: 'PHRD 6.1: Beneficiary Satis. with Resources', target: '4/5', actual: '4.1/5' }
                        ]
                    }
                ]
            }
        ];

        const qualitySurveysData = [
            {
                id: 'qs1', title: 'Student Surveys', icon: '🎓', color: '#ff9800', progress: 0,
                kpis: [
                    { name: 'Course Evaluation Survey', y1: '3.8', y2: '4.0', y3: '4.1', target: '4.0' },
                    { name: 'Student Experience Survey', y1: '3.5', y2: '3.8', y3: '3.9', target: '4.0' },
                    { name: 'Program Evaluation Survey', y1: '3.6', y2: '3.9', y3: '4.2', target: '4.0' }
                ]
            },
            {
                id: 'qs2', title: 'Faculty & Staff', icon: '👨‍🏫', color: '#9c27b0', progress: 0,
                kpis: [
                    { name: 'Faculty Experience Survey', y1: '3.9', y2: '4.1', y3: '4.0', target: '4.0' },
                    { name: 'Employee Satisfaction Survey', y1: '3.7', y2: '3.8', y3: '4.2', target: '4.0' }
                ]
            },
            {
                id: 'qs3', title: 'External Stakeholders', icon: '🤝', color: '#00bcd4', progress: 0,
                kpis: [
                    { name: 'Employers Satisfaction Survey', y1: '3.5', y2: '3.8', y3: '3.7', target: '4.0' },
                    { name: 'Alumni Survey', y1: '3.8', y2: '4.0', y3: '4.3', target: '4.0' }
                ]
            }
        ];



        // --- PLO DATA & MAPPING LOGIC (Global State for Persistence) ---
        if (!window.ploData) {
            window.ploData = [
                {
                    id: 'K', title: 'Knowledge', color: '#e91e63', progress: 0,
                    outcomes: [
                        { id: 'K1', text: 'Identify structure, pharmacodynamics, pharmacokinetics, indications of meds.' },
                        { id: 'K2', text: 'Describe dosage forms, formulation and manufacturing principles.' },
                        { id: 'K3', text: 'Outline pathophysiology, diagnosis, and pharmacotherapeutic principles.' },
                        { id: 'K4', text: 'Distinguish pharmacist roles in various clinical and health settings.' },
                        { id: 'K5', text: 'Describe pharmacoeconomic, management, and regulatory principles.' }
                    ]
                },
                {
                    id: 'S', title: 'Skills', color: '#2196f3', progress: 0,
                    outcomes: [
                        { id: 'S1', text: 'Predict drug effects based on structure and formulation.' },
                        { id: 'S2', text: 'Perform pharmaceutical compounding and sterile product prep.' },
                        { id: 'S3', text: 'Use guidelines for staging diseases and initiating therapy.' },
                        { id: 'S4', text: 'Interpret medication response from patient charts/resources.' },
                        { id: 'S5', text: 'Evaluate patient info to identify drug therapy problems.' },
                        { id: 'S6', text: 'Evaluate PK/PG data for designing drug therapy plans.' },
                        { id: 'S7', text: 'Analyze medication safety issues and adverse events.' },
                        { id: 'S8', text: 'Perform accurate calculations in clinical settings.' },
                        { id: 'S9', text: 'Use research methodology and data software for proposals/projects.' },
                        { id: 'S10', text: 'Employ scientific literature and EBM in research/clinical settings.' },
                        { id: 'S11', text: 'Present effectively using appropriate terminology and tech.' }
                    ]
                },
                {
                    id: 'V', title: 'Values & Autonomy', color: '#ff5722', progress: 0,
                    outcomes: [
                        { id: 'V1', text: 'Demonstrate leadership and patient advocacy.' },
                        { id: 'V2', text: 'Report adverse events (pharmacovigilance) and errors.' },
                        { id: 'V3', text: 'Maintain competence through independent learning/reflection.' },
                        { id: 'V4', text: 'Provide patient care (plans, self-care, non-drug therapy).' },
                        { id: 'V5', text: 'Communicate clearly with patients and health professionals.' },
                        { id: 'V6', text: 'Provide professional counselling on meds and devices.' },
                        { id: 'V7', text: 'Contribute to clinical rounds decisions.' },
                        { id: 'V8', text: 'Employ automation and IT to optimize dispensing/care.' },
                        { id: 'V9', text: 'Respond accurately to drug info requests.' },
                        { id: 'V10', text: 'Employ physical assessment techniques.' },
                        { id: 'V11', text: 'Demonstrate empathy, ethics, and legal judgment.' },
                        { id: 'V12', text: 'Maintain objectivity during patient interviewing.' },
                        { id: 'V13', text: 'Demonstrate collaborative attitude with healthcare team.' }
                    ]
                }
            ];
        }

        if (!window.courseMap) {
            window.courseMap = [
                { code: 'PHARM101', name: 'Intro to Pharmacy', grade: 85, map: ['K1', 'K4', 'V1'] },
                { code: 'MEDCHEM1', name: 'Med Chem I', grade: 78, map: ['K1', 'S1', 'S8'] },
                { code: 'CEUTICS1', name: 'Pharmaceutics I', grade: 82, map: ['K2', 'S2', 'S8'] },
                { code: 'THERAP1', name: 'Therapeutics I', grade: 75, map: ['K3', 'S3', 'S4', 'S5'] },
                { code: 'CLIN1', name: 'Clinical Skills', grade: 88, map: ['S4', 'S5', 'V4', 'V5', 'V10'] },
                { code: 'LAWETH', name: 'Pharmacy Law', grade: 90, map: ['K5', 'V1', 'V11'] },
                { code: 'RESCH', name: 'Research Methods', grade: 70, map: ['S9', 'S10', 'V12'] }
            ];
        }



        // Helper to save faculty data
        window.saveFacultyData = () => {
            if (window.facultyData) localStorage.setItem('antigravity_facultyData', JSON.stringify(window.facultyData));
        };

        if (!window.facultyData) {
            const savedFac = localStorage.getItem('antigravity_facultyData');
            if (savedFac) {
                try {
                    window.facultyData = JSON.parse(savedFac);
                } catch (e) {
                    console.error('Failed to load faculty data', e);
                }
            }
        }

        if (!window.facultyData) {
            window.facultyData = [
                // --- ADMINISTRATORS ---
                { id: 101, name: 'Prof. Abdulkareem AlBekairy', dept: 'Administration', title: 'Professor/Dean', email: 'bekairya@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Abdulkareem+AlBekairy&background=0D8ABC&color=fff', teachingLoad: 4, scholar: { hIndex: 45, citations: 5200, url: 'https://scholar.google.com/citations?user=ExampleID1' }, research: { q1: 15, q2: 8, q3: 4, q4: 1, supervision: { undergrad: 5, master: 3, phd: 2 }, grants: { submitted: 5, awarded: 3, amount: '5M SAR', role: 'PI' } }, awards: [{ name: 'College Strategy Leader', type: 'Internal', year: 2024 }, { name: 'National Health Award', type: 'National', year: 2023 }] },
                { id: 102, name: 'Prof. Shmeylan Al Harbi', dept: 'Administration', title: 'Professor/Associate Dean', email: 'harbish@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Shmeylan+Al+Harbi&background=0D8ABC&color=fff', teachingLoad: 6, scholar: { hIndex: 38, citations: 4100, url: 'https://scholar.google.com/citations?user=ExampleID2' }, research: { q1: 10, q2: 6, q3: 3, q4: 0, supervision: { undergrad: 4, master: 2, phd: 1 }, grants: { submitted: 3, awarded: 2, amount: '2M SAR', role: 'PI' } }, awards: [{ name: 'Research Excellence', type: 'Internal', year: 2023 }] },
                { id: 103, name: 'Dr. Abdulrahman Al Shaya', dept: 'Administration', title: 'Associate Dean, Clinical', email: 'shayaab@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Abdulrahman+Al+Shaya&background=0D8ABC&color=fff', teachingLoad: 8, scholar: { hIndex: 25, citations: 1800, url: 'https://scholar.google.com' }, research: { q1: 5, q2: 5, q3: 2, q4: 0, supervision: { undergrad: 4, master: 1, phd: 0 }, grants: { submitted: 2, awarded: 1, amount: '800k SAR', role: 'Co-PI' } }, awards: [] },
                { id: 104, name: 'Dr. Sumaya AlMohareb', dept: 'Administration', title: 'Assistant Dean, Academics', email: 'moharebsu@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Sumaya+AlMohareb&background=0D8ABC&color=fff', teachingLoad: 8, scholar: { hIndex: 12, citations: 500, url: 'https://scholar.google.com' }, research: { q1: 2, q2: 3, q3: 1, q4: 0, supervision: { undergrad: 3, master: 1, phd: 0 }, grants: { submitted: 1, awarded: 1, amount: '100k SAR', role: 'PI' } }, awards: [] },
                { id: 105, name: 'Dr. Omar Al Shaya', dept: 'Administration', title: 'Assistant Dean, Academics', email: 'shayao@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Omar+Al+Shaya&background=0D8ABC&color=fff', teachingLoad: 8, scholar: { hIndex: 22, citations: 1200, url: 'https://scholar.google.com' }, research: { q1: 4, q2: 4, q3: 2, q4: 1, supervision: { undergrad: 4, master: 2, phd: 0 }, grants: { submitted: 2, awarded: 1, amount: '300k SAR', role: 'Co-PI' } }, awards: [] },

                // --- DEPT OF PHARMACY PRACTICE ---
                { id: 201, name: 'Dr. Khalid Bin Saleh', dept: 'Pharmacy Practice', title: 'Chairperson', email: 'salehk@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Khalid+Bin+Saleh&background=4CAF50&color=fff', teachingLoad: 6, scholar: { hIndex: 18, citations: 900, url: 'https://scholar.google.com' }, research: { q1: 3, q2: 4, q3: 1, q4: 1, supervision: { undergrad: 3, master: 1, phd: 0 }, grants: { submitted: 2, awarded: 1, amount: '400k SAR', role: 'PI' } }, awards: [] },
                { id: 202, name: 'Prof. Abdulmalik Alkatheri', dept: 'Pharmacy Practice', title: 'Professor', email: 'alkatheria@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Abdulmalik+Alkatheri&background=4CAF50&color=fff', teachingLoad: 10, scholar: { hIndex: 35, citations: 3500, url: 'https://scholar.google.com' }, research: { q1: 12, q2: 10, q3: 5, q4: 2, supervision: { undergrad: 5, master: 4, phd: 2 }, grants: { submitted: 4, awarded: 2, amount: '1.5M SAR', role: 'PI' } }, awards: [{ name: 'Best Professor', type: 'Internal', year: 2022 }] },
                { id: 203, name: 'Prof. Majed Al Jeraisy', dept: 'Pharmacy Practice', title: 'Professor', email: 'jeraisym@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Majed+Al+Jeraisy&background=4CAF50&color=fff', teachingLoad: 10, scholar: { hIndex: 30, citations: 2800, url: 'https://scholar.google.com' }, research: { q1: 8, q2: 8, q3: 4, q4: 1, supervision: { undergrad: 4, master: 3, phd: 1 }, grants: { submitted: 3, awarded: 2, amount: '1M SAR', role: 'PI' } }, awards: [] },
                { id: 204, name: 'Dr. Majed Al Yami', dept: 'Pharmacy Practice', title: 'Associate Professor', email: 'yamim@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Majed+Al+Yami&background=4CAF50&color=fff', teachingLoad: 10, scholar: { hIndex: 20, citations: 1500, url: 'https://scholar.google.com' }, research: { q1: 5, q2: 6, q3: 3, q4: 1, supervision: { undergrad: 4, master: 2, phd: 0 }, grants: { submitted: 2, awarded: 1, amount: '600k SAR', role: 'Co-PI' } }, awards: [] },
                { id: 205, name: 'Dr. Hisham Badreldin', dept: 'Pharmacy Practice', title: 'Associate Professor', email: 'aldeenh@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Hisham+Badreldin&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 24, citations: 2100, url: 'https://scholar.google.com' }, research: { q1: 6, q2: 6, q3: 2, q4: 2, supervision: { undergrad: 5, master: 2, phd: 0 }, grants: { submitted: 2, awarded: 1, amount: '750k SAR', role: 'Co-PI' } }, awards: [] },
                { id: 206, name: 'Dr. Mohammad Shawaqfeh', dept: 'Pharmacy Practice', title: 'Associate Professor', email: 'shawaqfehm@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Mohammad+Shawaqfeh&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 15, citations: 800, url: 'https://scholar.google.com' }, research: { q1: 3, q2: 4, q3: 2, q4: 1, supervision: { undergrad: 3, master: 1, phd: 0 }, grants: { submitted: 1, awarded: 1, amount: '200k SAR', role: 'Co-PI' } }, awards: [] },
                { id: 207, name: 'Dr. Shuroug AlOwais', dept: 'Pharmacy Practice', title: 'Associate Professor', email: 'owaiss@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Shuroug+AlOwais&background=4CAF50&color=fff', teachingLoad: 10, scholar: { hIndex: 16, citations: 950, url: 'https://scholar.google.com' }, research: { q1: 4, q2: 3, q3: 2, q4: 0, supervision: { undergrad: 3, master: 2, phd: 0 }, grants: { submitted: 2, awarded: 1, amount: '300k SAR', role: 'PI' } }, awards: [] },
                { id: 208, name: 'Dr. Yousef Al Aqeel', dept: 'Pharmacy Practice', title: 'Associate Professor', email: 'alaqeely@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Yousef+Al+Aqeel&background=4CAF50&color=fff', teachingLoad: 11, scholar: { hIndex: 14, citations: 700, url: 'https://scholar.google.com' }, research: { q1: 2, q2: 4, q3: 3, q4: 0, supervision: { undergrad: 3, master: 1, phd: 0 }, grants: { submitted: 1, awarded: 1, amount: '250k SAR', role: 'Co-PI' } }, awards: [] },
                { id: 209, name: 'Dr. Hind Al Modaimegh', dept: 'Pharmacy Practice', title: 'Associate Professor', email: 'modaimeghh@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Hind+Al+Modaimegh&background=4CAF50&color=fff', teachingLoad: 10, scholar: { hIndex: 19, citations: 1200, url: 'https://scholar.google.com' }, research: { q1: 5, q2: 4, q3: 2, q4: 1, supervision: { undergrad: 4, master: 1, phd: 0 }, grants: { submitted: 2, awarded: 1, amount: '400k SAR', role: 'PI' } }, awards: [] },
                { id: 210, name: 'Dr. Jawaher Gramish', dept: 'Pharmacy Practice', title: 'Associate Professor', email: 'gramishj@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Jawaher+Gramish&background=4CAF50&color=fff', teachingLoad: 10, scholar: { hIndex: 10, citations: 400, url: 'https://scholar.google.com' }, research: { q1: 2, q2: 2, q3: 1, q4: 1, supervision: { undergrad: 3, master: 0, phd: 0 }, grants: { submitted: 1, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 211, name: 'Dr. Mohammed Alrashed', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'alrashidm@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Mohammed+Alrashed&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 8, citations: 300, url: 'https://scholar.google.com' }, research: { q1: 2, q2: 2, q3: 1, q4: 0, supervision: { undergrad: 3, master: 0, phd: 0 }, grants: { submitted: 1, awarded: 0, amount: '50k SAR', role: 'Co-PI' } }, awards: [] },
                { id: 212, name: 'Dr. Abdulmajeed Al Shehri', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'shehriabdul@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Abdulmajeed+Al+Shehri&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 9, citations: 350, url: 'https://scholar.google.com' }, research: { q1: 2, q2: 2, q3: 1, q4: 0, supervision: { undergrad: 3, master: 0, phd: 0 }, grants: { submitted: 1, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 213, name: 'Dr. Mohammed Al Zahrani', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'alzahranimoham@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Mohammed+Al+Zahrani&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 7, citations: 250, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 2, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 214, name: 'Dr. Nada Al Suhebany', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'suhebanyn@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Nada+Al+Suhebany&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 6, citations: 200, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 215, name: 'Dr. Atheer Aldairem', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'dairema@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Atheer+Aldairem&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 5, citations: 150, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 216, name: 'Dr. Maha AlDoughaim', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'doughaimm@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Maha+AlDoughaim&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 6, citations: 180, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 217, name: 'Dr. Lama Alfehaid', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'fehaidl@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Lama+Alfehaid&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 5, citations: 120, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 0, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 218, name: 'Dr. Lama Alsheddi', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'sheddil@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Lama+Alsheddi&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 5, citations: 130, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 0, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 219, name: 'Dr. Saleh Dekhail', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'dekhaels@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Saleh+Dekhail&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 4, citations: 100, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 0, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 220, name: 'Dr. Numan Al Abdan', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'abdann@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Numan+Al+Abdan&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 5, citations: 140, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 0, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 221, name: 'Dr. Faisal Al Sehli', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'sehlief@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Faisal+Al+Sehli&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 4, citations: 110, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 0, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 222, name: 'Dr. Fahad Aldhahri', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'aldhahrifa@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Fahad+Aldhahri&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 5, citations: 160, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 0, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 223, name: 'Dr. Khalid Alsulaiman', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'alsulaimankh@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Khalid+Alsulaiman&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 6, citations: 210, url: 'https://scholar.google.com' }, research: { q1: 2, q2: 1, q3: 0, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 224, name: 'Dr. Yousef Al-Rajhi', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'rajhiy@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Yousef+Al-Rajhi&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 5, citations: 150, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 0, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 225, name: 'Dr. Sarah Al Yousif', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'yousifs@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Sarah+Al+Yousif&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 4, citations: 90, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 1, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 226, name: 'Dr. Abeer Alsmari', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'alsmariab@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Abeer+Alsmari&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 5, citations: 130, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 0, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 227, name: 'Dr. Khuloud Aljoudi', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'aljoudikh@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Khuloud+Aljoudi&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 4, citations: 80, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 1, q3: 0, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 228, name: 'Dr. Lolowa Al Swaidan', dept: 'Pharmacy Practice', title: 'Assistant Professor', email: 'swaidanl@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Lolowa+Al+Swaidan&background=4CAF50&color=fff', teachingLoad: 12, scholar: { hIndex: 5, citations: 100, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 0, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 229, name: 'Mr. Abdelhameed Elfadol', dept: 'Pharmacy Practice', title: 'Lecturer', email: 'fadola@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Abdelhameed+Elfadol&background=4CAF50&color=fff', teachingLoad: 14, scholar: { hIndex: 2, citations: 30, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 0, q3: 1, q4: 0, supervision: { undergrad: 1, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 230, name: 'Mr. Ahmed Elmubark', dept: 'Pharmacy Practice', title: 'Lecturer', email: 'mubarka@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Ahmed+Elmubark&background=4CAF50&color=fff', teachingLoad: 14, scholar: { hIndex: 3, citations: 40, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 1, q3: 0, q4: 0, supervision: { undergrad: 1, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 231, name: 'Mr. Mohammed Ahmed', dept: 'Pharmacy Practice', title: 'Lecturer', email: 'ahmedmo@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Mohammed+Ahmed&background=4CAF50&color=fff', teachingLoad: 14, scholar: { hIndex: 2, citations: 20, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 0, q3: 1, q4: 0, supervision: { undergrad: 1, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 232, name: 'Ms. Mariam Abdalla', dept: 'Pharmacy Practice', title: 'Lecturer', email: 'abdallama@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Mariam+Abdalla&background=4CAF50&color=fff', teachingLoad: 14, scholar: { hIndex: 1, citations: 10, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 0, q3: 0, q4: 1, supervision: { undergrad: 1, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 233, name: 'Ms. Shazia Adnan', dept: 'Pharmacy Practice', title: 'Lecturer', email: 'adnans@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Shazia+Adnan&background=4CAF50&color=fff', teachingLoad: 14, scholar: { hIndex: 2, citations: 25, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 0, q3: 1, q4: 0, supervision: { undergrad: 1, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 234, name: 'Hamoud Al Samhan', dept: 'Pharmacy Practice', title: 'Lecturer', email: 'samhanh@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Hamoud+Al+Samhan&background=4CAF50&color=fff', teachingLoad: 14, scholar: { hIndex: 1, citations: 5, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 0, q3: 0, q4: 1, supervision: { undergrad: 1, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 235, name: 'Lt. Col. Khalil Al Majed', dept: 'Pharmacy Practice', title: 'Lecturer', email: 'majidk@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Khalil+Al+Majed&background=4CAF50&color=fff', teachingLoad: 14, scholar: { hIndex: 0, citations: 0, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 0, q3: 0, q4: 0, supervision: { undergrad: 0, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 236, name: 'Zohour Bootah', dept: 'Pharmacy Practice', title: 'Lecturer', email: 'bootahz@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Zohour+Bootah&background=4CAF50&color=fff', teachingLoad: 14, scholar: { hIndex: 1, citations: 15, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 0, q3: 1, q4: 0, supervision: { undergrad: 1, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 237, name: 'Laila Carolina Abu Esba', dept: 'Pharmacy Practice', title: 'Lecturer', email: 'abuesbala@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Laila+Carolina+Abu+Esba&background=4CAF50&color=fff', teachingLoad: 14, scholar: { hIndex: 2, citations: 35, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 0, q3: 1, q4: 0, supervision: { undergrad: 1, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 238, name: 'Dalal Abdulkarim', dept: 'Pharmacy Practice', title: 'Lecturer', email: 'alabdulkareemda@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Dalal+Abdulkarim&background=4CAF50&color=fff', teachingLoad: 14, scholar: { hIndex: 1, citations: 12, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 0, q3: 0, q4: 1, supervision: { undergrad: 1, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 239, name: 'Mohammed AlOtaibi', dept: 'Pharmacy Practice', title: 'Clinical Preceptor', email: 'otaibim7@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Mohammed+AlOtaibi&background=4CAF50&color=fff', teachingLoad: 20, scholar: { hIndex: 1, citations: 8, url: 'https://scholar.google.com' }, research: { q1: 0, q2: 0, q3: 0, q4: 0, supervision: { undergrad: 5, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },

                // --- DEPT OF PHARMACEUTICAL SCIENCES ---
                { id: 301, name: 'Dr. Tariq AlQahtani', dept: 'Pharmaceutical Sciences', title: 'Chairperson', email: 'qahtanita@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Tariq+AlQahtani&background=E91E63&color=fff', teachingLoad: 6, scholar: { hIndex: 15, citations: 800, url: 'https://scholar.google.com' }, research: { q1: 4, q2: 3, q3: 2, q4: 1, supervision: { undergrad: 2, master: 1, phd: 0 }, grants: { submitted: 2, awarded: 1, amount: '200k SAR', role: 'PI' } }, awards: [] },
                { id: 302, name: 'Prof. Mahmoud Mansour', dept: 'Pharmaceutical Sciences', title: 'Professor', email: 'mansoura@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Mahmoud+Mansour&background=E91E63&color=fff', teachingLoad: 12, scholar: { hIndex: 30, citations: 3000, url: 'https://scholar.google.com' }, research: { q1: 10, q2: 8, q3: 5, q4: 3, supervision: { undergrad: 5, master: 3, phd: 2 }, grants: { submitted: 4, awarded: 2, amount: '1M SAR', role: 'PI' } }, awards: [] },
                { id: 303, name: 'Prof. Alaa El-deen Yassin', dept: 'Pharmaceutical Sciences', title: 'Professor', email: 'yassina@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Alaa+El-deen+Yassin&background=E91E63&color=fff', teachingLoad: 12, scholar: { hIndex: 32, citations: 3200, url: 'https://scholar.google.com' }, research: { q1: 12, q2: 9, q3: 4, q4: 1, supervision: { undergrad: 5, master: 4, phd: 1 }, grants: { submitted: 3, awarded: 2, amount: '900k SAR', role: 'PI' } }, awards: [] },
                { id: 304, name: 'Dr. Osama AlWassil', dept: 'Pharmaceutical Sciences', title: 'Associate Professor', email: 'wassilo@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Osama+AlWassil&background=E91E63&color=fff', teachingLoad: 10, scholar: { hIndex: 12, citations: 600, url: 'https://scholar.google.com' }, research: { q1: 3, q2: 3, q3: 2, q4: 0, supervision: { undergrad: 3, master: 1, phd: 0 }, grants: { submitted: 1, awarded: 1, amount: '150k SAR', role: 'Co-PI' } }, awards: [] },
                { id: 305, name: 'Dr. Wesam Abdel-razaq', dept: 'Pharmaceutical Sciences', title: 'Associate Professor', email: 'razaqw@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Wesam+Abdel-razaq&background=E91E63&color=fff', teachingLoad: 10, scholar: { hIndex: 10, citations: 500, url: 'https://scholar.google.com' }, research: { q1: 2, q2: 3, q3: 1, q4: 1, supervision: { undergrad: 2, master: 1, phd: 0 }, grants: { submitted: 1, awarded: 1, amount: '100k SAR', role: 'Co-PI' } }, awards: [] },
                { id: 306, name: 'Dr. Mai Al Ajaji', dept: 'Pharmaceutical Sciences', title: 'Assistant Professor', email: 'ajajim@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Mai+Al+Ajaji&background=E91E63&color=fff', teachingLoad: 12, scholar: { hIndex: 8, citations: 300, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 2, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '50k SAR', role: 'Co-PI' } }, awards: [] },
                { id: 307, name: 'Dr. Sahar AlGhamdi', dept: 'Pharmaceutical Sciences', title: 'Assistant Professor', email: 'ghamdisa@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Sahar+AlGhamdi&background=E91E63&color=fff', teachingLoad: 12, scholar: { hIndex: 7, citations: 250, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '50k SAR', role: 'PI' } }, awards: [] },
                { id: 308, name: 'Dr. Reem Alkhodier', dept: 'Pharmaceutical Sciences', title: 'Assistant Professor', email: 'khodierr@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Reem+Alkhodier&background=E91E63&color=fff', teachingLoad: 12, scholar: { hIndex: 6, citations: 200, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 309, name: 'Dr. Abeer Al Harbi', dept: 'Pharmaceutical Sciences', title: 'Assistant Professor', email: 'harbiabe@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Abeer+Al+Harbi&background=E91E63&color=fff', teachingLoad: 12, scholar: { hIndex: 5, citations: 150, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 310, name: 'Dr. Rawan Alnafisah', dept: 'Pharmaceutical Sciences', title: 'Assistant Professor', email: 'nafisahr@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Rawan+Alnafisah&background=E91E63&color=fff', teachingLoad: 12, scholar: { hIndex: 5, citations: 120, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 0, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 311, name: 'Dr. Saqer Al Arifi', dept: 'Pharmaceutical Sciences', title: 'Assistant Professor', email: 'arifis@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Saqer+Al+Arifi&background=E91E63&color=fff', teachingLoad: 12, scholar: { hIndex: 4, citations: 100, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 0, q3: 1, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 312, name: 'Dr. Saleh Alanizi', dept: 'Pharmaceutical Sciences', title: 'Assistant Professor', email: 'anazis@mngha.med.sa', img: 'https://ui-avatars.com/api/?name=Saleh+Alanizi&background=E91E63&color=fff', teachingLoad: 12, scholar: { hIndex: 5, citations: 130, url: 'https://scholar.google.com' }, research: { q1: 1, q2: 1, q3: 0, q4: 0, supervision: { undergrad: 2, master: 0, phd: 0 }, grants: { submitted: 0, awarded: 0, amount: '0', role: 'None' } }, awards: [] },
                { id: 313, name: 'Prof. Aiman Obaidat', dept: 'Pharmaceutical Sciences', title: 'Professor', email: 'obaidata@ksau-hs.edu.sa', img: 'https://ui-avatars.com/api/?name=Aiman+Obaidat&background=E91E63&color=fff', teachingLoad: 12, scholar: { hIndex: 28, citations: 2500, url: 'https://scholar.google.com' }, research: { q1: 8, q2: 8, q3: 6, q4: 1, supervision: { undergrad: 5, master: 3, phd: 1 }, grants: { submitted: 3, awarded: 2, amount: '800k SAR', role: 'PI' } }, awards: [] }
            ];
        }

        const ploData = window.ploData;
        const courseMap = window.courseMap;
        const facultyData = window.facultyData;

        // --- Calculate Dynamic Progress ---
        let atRiskItems = [];
        strategicGoals.forEach(g => {
            let totalProgress = 0;
            let count = 0;

            g.branches.forEach(b => {
                b.kpis.forEach(k => {
                    let kpiScore = 0;
                    const clean = (val) => {
                        if (!val) return 0;
                        val = val.toString().toLowerCase();
                        if (val.includes('%')) return parseFloat(val);
                        if (val.includes(':')) return parseFloat(val.split(':')[0]);
                        if (val === 'done') return 100;
                        if (val === 'in prog') return 50;
                        if (val === 'pending') return 0;
                        return parseFloat(val) || 0;
                    };

                    const tVal = clean(k.target);
                    const aVal = clean(k.actual);

                    // Logic: If target is 0 or NaN, assume 100% if actual > 0? No, avoid div/0.
                    // Special case: Text matches (e.g. both '10:1') -> 100%
                    if (k.target === k.actual) {
                        kpiScore = 100;
                    } else if (tVal > 0) {
                        kpiScore = (aVal / tVal) * 100;
                    } else {
                        // Fallback if target is weird
                        kpiScore = aVal > 0 ? 100 : 0;
                    }

                    // Check Risk
                    if (kpiScore < 100) {
                        atRiskItems.push({ text: `<strong>${g.title.split(': ')[0]} - ${b.name}</strong>: ${k.name} is ${k.actual} (Target: ${k.target})` });
                    }

                    totalProgress += Math.min(kpiScore, 100); // Cap at 100% for conservative progress
                    count++;
                });
            });

            g.progress = count > 0 ? Math.round(totalProgress / count) : 0;
        });

        // --- Calculate PharmD Progress ---
        let pharmdRiskItems = [];
        pharmdGoals.forEach(g => {
            let totalProgress = 0;
            let count = 0;

            g.branches.forEach(b => {
                b.kpis.forEach(k => {
                    let kpiScore = 0;
                    const clean = (val) => {
                        if (!val) return 0;
                        val = val.toString().toLowerCase();
                        if (val.includes('%')) return parseFloat(val);
                        if (val.includes(':')) return parseFloat(val.split(':')[0]);
                        if (val === 'done') return 100;
                        if (val === 'in prog') return 50;
                        if (val === 'pending') return 0;
                        return parseFloat(val) || 0;
                    };

                    const tVal = clean(k.target);
                    const aVal = clean(k.actual);

                    if (k.target === k.actual) {
                        kpiScore = 100;
                    } else if (tVal > 0) {
                        kpiScore = (aVal / tVal) * 100;
                    } else {
                        kpiScore = aVal > 0 ? 100 : 0;
                    }

                    // Risk Check
                    if (kpiScore < 100) {
                        pharmdRiskItems.push({ text: `<strong>${g.title.split(': ')[0]} - ${b.name}</strong>: ${k.name} is ${k.actual} (Target: ${k.target})` });
                    }

                    if (kpiScore >= 100) {
                        totalProgress += 1;
                    }
                    count++;
                });
            });

            g.progress = count > 0 ? Math.round((totalProgress / count) * 100) : 0;
        });

        // --- Calculate Quality Surveys Progress ---
        let surveyRiskItems = [];
        qualitySurveysData.forEach(g => {
            let totalProgress = 0;
            let count = 0;

            g.kpis.forEach(k => {
                let kpiScore = 0;
                const clean = (val) => parseFloat(val) || 0;

                const tVal = clean(k.target);
                const aVal = clean(k.y3); // Using Year 3 as latest

                if (tVal > 0) {
                    kpiScore = (aVal / tVal) * 100;
                } else {
                    kpiScore = aVal > 0 ? 100 : 0;
                }

                // Risk (Below Target in latest year)
                if (kpiScore < 100) {
                    surveyRiskItems.push({ text: `<strong>${g.title}</strong>: ${k.name} (Y3: ${k.y3}) is below Target (${k.target})` });
                }

                totalProgress += Math.min(kpiScore, 100);
                count++;
            });

            g.progress = count > 0 ? Math.round(totalProgress / count) : 0;
        });

        // --- Calculate PLO Progress (Linked to Courses) ---
        ploData.forEach(domain => {
            let domainTotal = 0;
            let outcomeCount = 0;

            domain.outcomes.forEach(plo => {
                // Find all courses that map to this PLO
                let linkedCourses = courseMap.filter(c => c.map.includes(plo.id));

                if (linkedCourses.length > 0) {
                    // Average grade of linked courses
                    let sum = linkedCourses.reduce((a, c) => a + c.grade, 0);
                    plo.score = Math.round(sum / linkedCourses.length);
                } else {
                    plo.score = 0; // No data linked
                }

                domainTotal += plo.score;
                outcomeCount++;
            });

            domain.progress = outcomeCount > 0 ? Math.round(domainTotal / outcomeCount) : 0;
        });

        const tabs = [
            { id: 'strategic', label: '📊 Strategic Goals' },
            { id: 'pharmd', label: '💊 PharmD Program KPI' },
            { id: 'surveys', label: '📝 Quality Surveys' },
            { id: 'plo', label: '🎓 Learning Outcomes (PLOs)' },
            { id: 'faculty', label: '👨‍🏫 Faculty' },
            { id: 'people', label: '🏆 People & Distinctions' },
            { id: 'data', label: '🔧 Reports' }
        ];

        const tabNav = `
            <div class="tab-nav" style="margin-bottom: 1.5rem; border-bottom: 2px solid #eee;">
                ${tabs.map(tab => `
                    <button 
                        class="btn ${activeTab === tab.id ? 'btn-primary' : 'btn-outline'}" 
                        style="margin-right: 0.5rem; border-bottom: ${activeTab === tab.id ? 'none' : '1px solid transparent'};"
                        onclick="app.renderQualityUnit('${tab.id}')"
                    >
                        ${tab.label}
                    </button>
                `).join('')}
            </div>
        `;

        let content = '';
        let initCharts = null;

        if (activeTab === 'strategic') {
            // --- NEW VISUAL DASHBOARD ---
            content = `
                <div class="fade-in-up">
                    <!-- Row 1: 5 Doughnut Charts -->
                    <h3 style="margin-bottom:1rem;">🚀 Strategic Goal Progress</h3>
                    <div class="dashboard-grid" style="grid-template-columns: repeat(5, 1fr); gap: 1rem; margin-bottom: 2rem;">
                         ${strategicGoals.map(g => `
                            <div class="card" style="text-align: center; padding: 1rem;">
                                <div style="height: 100px; position: relative; margin-bottom: 0.5rem;">
                                    <canvas id="chart-${g.id}-donut"></canvas>
                                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-weight: bold; font-size: 1.1rem; color: ${g.color};">
                                        ${g.progress}%
                                    </div>
                                </div>
                                <h5 style="margin:0; font-size: 0.8rem; color: #555; height: 32px; overflow:hidden;">${g.title.split(': ')[1]}</h5>
                            </div>
                         `).join('')}
                    </div>

                    <div class="dashboard-grid" style="grid-template-columns: 2fr 1fr; gap: 2rem;">
                        <!-- Row 2 Left: Radar Chart -->
                        <div class="card">
                            <h3 style="margin-bottom:1rem;">🎯 Strategic Balance Logic</h3>
                            <div style="height: 350px;">
                                <canvas id="chartStratRadarDashboard"></canvas>
                            </div>
                        </div>

                        <!-- Row 2 Right: At Risk / Highlights -->
                        <div class="card" style="background: #fff8f8; border-left: 4px solid #f44336;">
                            <h3 style="color: #d32f2f;">⚠️ Attention Needed</h3>
                            <ul style="padding-left: 1.2rem; margin-top: 1rem;">
                                ${atRiskItems.length > 0 ? atRiskItems.slice(0, 5).map(i => `<li>${i.text}</li>`).join('') : '<li style="list-style:none;">✅ All On Track!</li>'}
                            </ul>
                            <div style="margin-top:1rem; color:#d32f2f; font-size: 0.9rem; font-style:italic;">
                                * Use the details grid below to update these metrics.
                            </div>
                        </div>
                    </div>
                    </div>
                    <!-- Section 2: Interactive Grid -->
                    <div style="margin-top: 3rem; border-top: 2px dashed #eee; padding-top: 2rem;">
                        <h3 style="margin-bottom: 0.5rem;">📝 Strategic Goals Details & Editor</h3>
                        <p class="text-muted" style="margin-bottom: 1.5rem;">Tap any card below to view branch goals or edit Target/Actual values.</p>
                        
                        <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
                            ${strategicGoals.map(g => `
                                <div class="goal-card" onclick="document.getElementById('modal-${g.id}').classList.add('active')">
                                    <div class="icon-box" style="color: ${g.color}; background: ${g.color}15;">
                                        ${g.icon}
                                    </div>
                                    <h4 style="margin-bottom: 0.5rem;">${g.title}</h4>
                                    <div class="progress-bar-container" style="height: 6px; background: #eee; border-radius: 3px; margin: 1rem 0;">
                                        <div style="width: ${g.progress}%; background: ${g.color}; height: 100%; border-radius: 3px;"></div>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #666;">
                                        <span>${g.branches.length} Objectives</span>
                                        <span>${g.progress}% Done</span>
                                    </div>
                                    <div style="margin-top: 1rem; text-align: right; color: var(--primary-gold); font-size: 0.85rem; font-weight: 500;">
                                        Tap to Edit →
                                    </div>
                                </div>

                                <!-- MODAL FOR THIS GOAL -->
                                <div id="modal-${g.id}" class="qa-modal-overlay">
                                    <div class="qa-modal-content">
                                        <div class="qa-modal-header">
                                            <h3 style="margin:0; display:flex; align-items:center; gap:0.5rem;">${g.icon} ${g.title}</h3>
                                            <div style="display:flex; gap:1rem; align-items:center;">
                                                <button class="btn btn-primary btn-sm" onclick="app.updateGoalStatus('${g.id}')">💾 Save & Recalculate</button>
                                                <button class="close-modal" style="position:static;" onclick="document.getElementById('modal-${g.id}').classList.remove('active')">×</button>
                                            </div>
                                        </div>
                                        <div class="qa-modal-body">
                                            <table class="data-table" id="table-${g.id}">
                                                <thead>
                                                    <tr>
                                                        <th width="25%">Branch Goal</th>
                                                        <th width="35%">KPI Name</th>
                                                        <th width="15%">Target</th>
                                                        <th width="15%">Actual</th>
                                                        <th width="10%">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    ${g.branches.map(b =>
                b.kpis.map((k, kIndex) => `
                                                            <tr>
                                                                ${kIndex === 0 ? `<td rowspan="${b.kpis.length}" style="vertical-align: top; font-weight: 500;"><input type="text" class="input-field" value="${b.name}" style="width:100%; font-weight:500;"></td>` : ''}
                                                                <td><input type="text" class="input-field" value="${k.name}" style="width:100%;"></td>
                                                                <td><input type="text" class="input-field kpi-target" value="${k.target}" style="padding:4px; font-size:0.9rem;"></td>
                                                                <td><input type="text" class="input-field kpi-actual" value="${k.actual}" style="padding:4px; font-size:0.9rem; font-weight:bold;"></td>
                                                                <td class="kpi-status">${k.actual.includes('Prog') || k.actual.includes('Pending') ? '🟡' : (parseFloat(k.actual) >= parseFloat(k.target) ? '🟢' : '🔴')}</td>
                                                            </tr>
                                                        `).join('')
            ).join('')}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;

            initCharts = () => {
                // 1. Radar Chart
                new Chart(document.getElementById('chartStratRadarDashboard'), {
                    type: 'radar',
                    data: {
                        labels: strategicGoals.map(g => g.title.split(': ')[1]),
                        datasets: [{
                            label: 'Progress %',
                            data: strategicGoals.map(g => g.progress),
                            backgroundColor: 'rgba(33, 150, 243, 0.2)',
                            borderColor: '#2196f3',
                            pointBackgroundColor: strategicGoals.map(g => g.color),
                            pointRadius: 5
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: { r: { beginAtZero: true, max: 100, ticks: { display: false } } },
                        plugins: { legend: { display: false } }
                    }
                });

                // 2. Small Doughnuts
                strategicGoals.forEach(g => {
                    new Chart(document.getElementById(`chart-${g.id}-donut`), {
                        type: 'doughnut',
                        data: {
                            labels: ['Done', 'Left'],
                            datasets: [{
                                data: [g.progress, 100 - g.progress],
                                backgroundColor: [g.color, '#eee'],
                                borderWidth: 0
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            cutout: '75%',
                            plugins: { tooltip: { enabled: false }, legend: { display: false } }
                        }
                    });
                });
            };

        } else if (activeTab === 'pharmd') {
            // --- EDIT VIEW (Former Grid of Cards) ---
            content = `
                <div class="dashboard-grid" style="grid-template-columns: 1fr; gap: 2rem;">
                    <!-- Top: Visual Dashboard -->
                    <div class="dashboard-grid" style="grid-template-columns: 2fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                        <!-- Left: Standards Overview -->
                        <div class="card">
                            <h3 style="margin-bottom:1rem;">📊 Program Standards Overview</h3>
                            <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr); gap:1rem;">
                                ${pharmdGoals.map(g => `
                                    <div style="text-align:center;">
                                        <div style="height:100px; position:relative;">
                                            <canvas id="chart-${g.id}-donut"></canvas>
                                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-weight: bold; font-size: 1.2rem; color: ${g.color};">
                                                ${g.progress}%
                                            </div>
                                        </div>
                                        <p style="margin-top:0.5rem; font-size:0.9rem; font-weight:500;">${g.title}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                         <!-- Right: Radar & Risks -->
                        <div class="dashboard-grid" style="grid-template-columns: 1fr; gap: 1rem;">
                             <div class="card">
                                <h3>🎯 Standards Balance</h3>
                                <div style="height: 200px;">
                                    <canvas id="chartPharmdRadarDashboard"></canvas>
                                </div>
                            </div>
                            
                            <div class="card" style="background: #fff8f8; border-left: 4px solid #f44336;">
                                <h3 style="color: #d32f2f;">⚠️ Attention Needed</h3>
                                <ul style="padding-left: 1.2rem; margin-top: 1rem;">
                                    ${pharmdRiskItems.length > 0 ? pharmdRiskItems.slice(0, 5).map(i => `<li>${i.text}</li>`).join('') : '<li style="list-style:none;">✅ All KPIs On Track!</li>'}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom: INTERACTIVE GRID OF CARDS -->
                    <h3 style="margin-top:1rem;">PharmD Program KPIs Details</h3>
                    <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
                        ${pharmdGoals.map(g => `
                            <div class="goal-card" onclick="document.getElementById('modal-${g.id}').classList.add('active')">
                                <div class="icon-box" style="color: ${g.color}; background: ${g.color}15;">
                                    ${g.icon}
                                </div>
                                <h4 style="margin-bottom: 0.5rem;">${g.title}</h4>
                                <div class="progress-bar-container" style="height: 6px; background: #eee; border-radius: 3px; margin: 1rem 0;">
                                    <div style="width: ${g.progress}%; background: ${g.color}; height: 100%; border-radius: 3px;"></div>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.9rem; color: #666;">
                                    <span>${g.branches.length} Objectives</span>
                                    <span>${g.progress}% Done</span>
                                </div>
                                <div style="margin-top: 1rem; text-align: right; color: var(--primary-gold); font-size: 0.85rem; font-weight: 500;">
                                    Tap to View Details →
                                </div>
                            </div>

                            <!-- MODAL FOR THIS GOAL -->
                            <div id="modal-${g.id}" class="qa-modal-overlay">
                                <div class="qa-modal-content">
                                    <div class="qa-modal-header">
                                        <h3 style="margin:0; display:flex; align-items:center; gap:0.5rem;">${g.icon} ${g.title}</h3>
                                        <div style="display:flex; gap:1rem; align-items:center;">
                                            <button class="btn btn-primary btn-sm" onclick="app.updateGoalStatus('${g.id}')">💾 Save & Recalculate</button>
                                            <button class="close-modal" style="position:static;" onclick="document.getElementById('modal-${g.id}').classList.remove('active')">×</button>
                                        </div>
                                    </div>
                                    <div class="qa-modal-body">
                                        <table class="data-table" id="table-${g.id}">
                                            <thead>
                                                <tr>
                                                    <th width="25%">Branch Goal</th>
                                                    <th width="35%">KPI Name</th>
                                                    <th width="15%">Target</th>
                                                    <th width="15%">Actual</th>
                                                    <th width="10%">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${g.branches.map(b =>
                b.kpis.map((k, kIndex) => `
                                                        <tr>
                                                            ${kIndex === 0 ? `<td rowspan="${b.kpis.length}" style="vertical-align: top; font-weight: 500;"><input type="text" class="input-field" value="${b.name}" style="width:100%; font-weight:500;"></td>` : ''}
                                                            <td><input type="text" class="input-field" value="${k.name}" style="width:100%;"></td>
                                                            <td><input type="text" class="input-field kpi-target" value="${k.target}" style="padding:4px; font-size:0.9rem;"></td>
                                                            <td><input type="text" class="input-field kpi-actual" value="${k.actual}" style="padding:4px; font-size:0.9rem; font-weight:bold;"></td>
                                                            <td class="kpi-status">${k.actual.includes('Prog') || k.actual.includes('Pending') ? '🟡' : (parseFloat(k.actual) >= parseFloat(k.target) ? '🟢' : '🔴')}</td>
                                                        </tr>
                                                    `).join('')
            ).join('')}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

            initCharts = () => {
                new Chart(document.getElementById('chartPharmdRadarDashboard'), {
                    type: 'radar',
                    data: {
                        labels: pharmdGoals.map(g => g.title.split(': ')[0]),
                        datasets: [{
                            label: 'Standard Progress %',
                            data: pharmdGoals.map(g => g.progress),
                            backgroundColor: 'rgba(76, 175, 80, 0.2)',
                            borderColor: '#4caf50',
                            pointBackgroundColor: pharmdGoals.map(g => g.color),
                            pointRadius: 5
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: { r: { beginAtZero: true, max: 100, ticks: { display: false } } },
                        plugins: { legend: { display: false } }
                    }
                });

                pharmdGoals.forEach(g => {
                    new Chart(document.getElementById(`chart-${g.id}-donut`), {
                        type: 'doughnut',
                        data: {
                            labels: ['Done', 'Left'],
                            datasets: [{
                                data: [g.progress, 100 - g.progress],
                                backgroundColor: [g.color, '#eee'],
                                borderWidth: 0
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            cutout: '75%',
                            plugins: { tooltip: { enabled: false }, legend: { display: false } }
                        }
                    });
                });
            };

        } else if (activeTab === 'surveys') {
            // --- QUALITY SURVEYS TAB ---
            content = `
                <div class="fade-in-up">
                    <div class="dashboard-grid" style="grid-template-columns: 2fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                         <!-- Left: Visual Overview (Bar Charts) -->
                        <div class="card">
                            <h3 style="margin-bottom:1rem;">📊 Stakeholder Feedback Trends (3-Year)</h3>
                            <div style="display: flex; flex-direction: column; gap: 2rem;">
                                ${qualitySurveysData.map(g => `
                                    <div>
                                        <h5 style="margin:0 0 0.5rem; color:${g.color};">${g.title}</h5>
                                        <div style="height:180px; position:relative;">
                                            <canvas id="chart-${g.id}-bar"></canvas>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                         <!-- Right: Radar & Risks -->
                        <div class="dashboard-grid" style="grid-template-columns: 1fr; gap: 1rem;">
                             <div class="card">
                                <h3>🎯 Surveys Balance</h3>
                                <div style="height: 200px;">
                                    <canvas id="chartSurveyRadarDashboard"></canvas>
                                </div>
                            </div>
                            
                            <div class="card" style="background: #fff8f8; border-left: 4px solid #f44336;">
                                <h3 style="color: #d32f2f;">⚠️ Attention Needed</h3>
                                <ul style="padding-left: 1.2rem; margin-top: 1rem;">
                                    ${surveyRiskItems.length > 0 ? surveyRiskItems.slice(0, 5).map(i => `<li>${i.text}</li>`).join('') : '<li style="list-style:none;">✅ All Surveys On Track!</li>'}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Section: Detailed Grid & Editor -->
                    <div style="margin-top: 3rem; border-top: 2px dashed #eee; padding-top: 2rem;">
                         <h3 style="margin-bottom: 0.5rem;">📝 Surveys Data Entry</h3>
                        <p class="text-muted" style="margin-bottom: 1.5rem;">Enter scores (out of 5) for previous years. Status compares Y3 vs Target.</p>
                        
                        <div class="dashboard-grid" style="grid-template-columns: 1fr; gap: 1.5rem;">
                             ${qualitySurveysData.map((g, i) => `
                                <div class="goal-card" style="cursor: auto;">
                                    <div class="icon-box" style="color: ${g.color}; background: ${g.color}15;">
                                        ${g.icon}
                                    </div>
                                    <div style="display:flex; justify-content:space-between; align-items:center;">
                                        <h4 style="margin: 0;">${g.title}</h4>
                                        <span class="badge" style="background: ${g.color}20; color: ${g.color};">${g.kpis.length} Surveys</span>
                                    </div>
                                    
                                    <div style="margin-top: 1.5rem; overflow-x: auto;">
                                        <table class="data-table" id="table-${g.id}" style="width:100%;">
                                            <thead>
                                                <tr>
                                                    <th width="30%">Survey Name</th>
                                                    <th width="12%">2023 (Y1)</th>
                                                    <th width="12%">2024 (Y2)</th>
                                                    <th width="12%">2025 (Y3)</th>
                                                    <th width="12%">Target</th>
                                                    <th width="10%">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${g.kpis.map(k => `
                                                    <tr>
                                                        <td><input type="text" class="input-field" value="${k.name}" style="width:100%;"></td>
                                                        <td><input type="text" class="input-field kpi-y1" value="${k.y1}" style="text-align:center;"></td>
                                                        <td><input type="text" class="input-field kpi-y2" value="${k.y2}" style="text-align:center;"></td>
                                                        <td><input type="text" class="input-field kpi-y3" value="${k.y3}" style="text-align:center; font-weight:bold;"></td>
                                                        <td><input type="text" class="input-field kpi-target" value="${k.target}" style="text-align:center;"></td>
                                                        <td class="kpi-status">${(parseFloat(k.y3) >= parseFloat(k.target)) ? '🟢' : '🔴'}</td>
                                                    </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div style="margin-top: 1rem; text-align: right;">
                                         <button class="btn btn-primary btn-sm" onclick="alert('✅ Changes Saved (Demo)!')">💾 Save Data</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;

            initCharts = () => {
                new Chart(document.getElementById('chartSurveyRadarDashboard'), {
                    type: 'radar',
                    data: {
                        labels: qualitySurveysData.map(g => g.title),
                        datasets: [{
                            label: 'Category Performance %',
                            data: qualitySurveysData.map(g => g.progress),
                            backgroundColor: 'rgba(255, 152, 0, 0.2)',
                            borderColor: '#ff9800',
                            pointBackgroundColor: qualitySurveysData.map(g => g.color),
                            pointRadius: 5
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: { r: { beginAtZero: true, max: 100, ticks: { display: false } } },
                        plugins: { legend: { display: false } }
                    }
                });

                qualitySurveysData.forEach(g => {
                    new Chart(document.getElementById(`chart-${g.id}-bar`), {
                        type: 'bar',
                        data: {
                            labels: g.kpis.map(k => k.name.split(' Survey')[0]), // Shorten name
                            datasets: [
                                {
                                    label: '2023',
                                    data: g.kpis.map(k => k.y1),
                                    backgroundColor: '#e0e0e0',
                                    barPercentage: 0.7,
                                    categoryPercentage: 0.8
                                },
                                {
                                    label: '2024',
                                    data: g.kpis.map(k => k.y2),
                                    backgroundColor: '#90a4ae',
                                    barPercentage: 0.7,
                                    categoryPercentage: 0.8
                                },
                                {
                                    label: '2025',
                                    data: g.kpis.map(k => k.y3),
                                    backgroundColor: g.color,
                                    barPercentage: 0.7,
                                    categoryPercentage: 0.8
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            scales: {
                                y: { beginAtZero: true, max: 5, grid: { display: true, drawBorder: false } },
                                x: { grid: { display: false } }
                            },
                            plugins: {
                                legend: { position: 'top', align: 'end', labels: { boxWidth: 12, usePointStyle: true } },
                                tooltip: { mode: 'index', intersect: false }
                            },
                            interaction: {
                                mode: 'index',
                                intersect: false,
                            },
                        }
                    });
                });
            };

        } else if (activeTab === 'plo') {
            // --- PLO TAB (Curriculum Map) ---

            // Define Helpers (Attached to Window for global access from DOM)
            window.addPLOCourse = () => {
                window.courseMap.push({ code: 'NEW101', name: 'New Course', grade: 75, map: [] });
                app.renderQualityUnit('plo');
            };

            window.removePLOCourse = (index) => {
                if (confirm('Delete this course?')) {
                    window.courseMap.splice(index, 1);
                    app.renderQualityUnit('plo');
                }
            };

            window.recalcPLOs = () => {
                // 1. Scrape data from table
                const rows = document.querySelectorAll('#plo-course-body tr');
                const newMap = [];
                rows.forEach((row, i) => {
                    const code = row.querySelector('.course-code').value;
                    const name = row.querySelector('.course-name').value;
                    const grade = parseFloat(row.querySelector('.course-grade').value) || 0;
                    const mapStr = row.querySelector('.course-map').value;
                    const map = mapStr.split(',').map(s => s.trim().toUpperCase()).filter(s => s);

                    newMap.push({ code, name, grade, map });
                });

                window.courseMap = newMap;

                // Recalculate will happen on re-render, OR we can manually recalculate to avoid full refresh
                // For simplicity, we re-render the tab to trigger logic at top of renderQualityUnit
                app.renderQualityUnit('plo'); // Triggers the recalculation logic in main function
                alert('✅ Curriculum Map Updated & PLOs Recalculated!');
            };

            content = `
                <div class="fade-in-up">
                    <div class="dashboard-grid" style="grid-template-columns: 1fr 2fr; gap: 2rem;">
                        
                        <!-- LEFT: COURSE ASSESSMENT (Simulated Input) -->
                        <div class="card" style="height: fit-content;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                                <h3 style="margin:0;">📚 Course Simulator</h3>
                                <button class="btn btn-sm btn-outline" onclick="window.addPLOCourse()">➕ Add Course</button>
                            </div>
                            <p class="text-muted" style="margin-bottom: 1rem; font-size: 0.9rem;">
                                Edit courses, grades, and mapped PLOs (comma-separated, e.g., K1, S2).
                            </p>
                            
                            <table class="data-table" id="plo-course-table">
                                <thead>
                                    <tr>
                                        <th width="20%">Code</th>
                                        <th width="30%">Name</th>
                                        <th width="15%">Grade</th>
                                        <th width="25%">Map (e.g. K1, S2)</th>
                                        <th width="10%"></th>
                                    </tr>
                                </thead>
                                <tbody id="plo-course-body">
                                    ${courseMap.map((c, i) => `
                                        <tr id="course-row-${i}">
                                            <td><input type="text" class="input-field course-code" value="${c.code}" style="width:100%; font-weight:bold;"></td>
                                            <td><input type="text" class="input-field course-name" value="${c.name}" style="width:100%;"></td>
                                            <td><input type="number" class="input-field course-grade" value="${c.grade}" style="width:100%; text-align:center;"></td>
                                            <td><input type="text" class="input-field course-map" value="${c.map.join(', ')}" style="width:100%; font-size:0.85rem;"></td>
                                            <td style="text-align:center;"><span style="cursor:pointer; color:#f44336;" onclick="window.removePLOCourse(${i})">🗑️</span></td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                            <div style="margin-top: 1rem; text-align: center;">
                                <button class="btn btn-primary" style="width:100%;" onclick="window.recalcPLOs()">🔄 Update & Recalculate Outcomes</button>
                            </div>
                        </div>

                        <!-- RIGHT: PLO ACHIEVEMENT & RADAR -->
                        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                            
                            <!-- Radar Chart -->
                            <div class="card">
                                <h3>🎯 Domain Achievement Overview</h3>
                                <div style="height: 250px;">
                                    <canvas id="chartPloRadarDashboard"></canvas>
                                </div>
                            </div>

                            <!-- Detailed Outcome List -->
                            <div class="card">
                                <h3>🎓 Program Learning Outcomes Status</h3>
                                <p class="text-muted" style="margin-bottom: 1rem;">Calculated based on linked course performance.</p>
                                
                                ${ploData.map(d => `
                                    <h4 style="margin: 1.5rem 0 0.5rem; color: ${d.color}; border-bottom: 2px solid ${d.color}20; padding-bottom: 0.5rem;">
                                        ${d.title} (${d.progress}%)
                                    </h4>
                                    <div style="display: flex; flex-direction: column; gap: 0.8rem;">
                                        ${d.outcomes.map(plo => `
                                            <div style="display: flex; align-items: center; gap: 1rem; padding: 0.5rem; background: #fafafa; border-radius: 6px;">
                                                <div style="width: 40px; font-weight: bold; color: ${d.color}; font-size: 1.1rem;">${plo.id}</div>
                                                <div style="flex: 1;">
                                                    <div style="font-size: 0.9rem; margin-bottom: 0.3rem;">${plo.text}</div>
                                                    <div class="progress-bar-container" style="height: 6px;">
                                                        <div style="width: ${plo.score}%; background: ${plo.score >= 80 ? '#4caf50' : (plo.score >= 60 ? '#ff9800' : '#f44336')}; height: 100%; border-radius: 3px;"></div>
                                                    </div>
                                                    <div style="font-size: 0.75rem; color: #888; margin-top: 2px;">
                                                        Linked: ${courseMap.filter(c => c.map.includes(plo.id)).map(c => c.code).join(', ') || 'None'}
                                                    </div>
                                                </div>
                                                <div style="width: 50px; text-align: right; font-weight: bold;">${plo.score}%</div>
                                            </div>
                                        `).join('')}
                                    </div>
                                `).join('')}
                            </div>

                        </div>
                    </div>
                </div>
            `;

            initCharts = () => {
                new Chart(document.getElementById('chartPloRadarDashboard'), {
                    type: 'radar',
                    data: {
                        labels: ploData.map(d => d.title),
                        datasets: [{
                            label: 'Domain Mastery %',
                            data: ploData.map(d => d.progress),
                            backgroundColor: 'rgba(33, 150, 243, 0.2)',
                            borderColor: '#2196f3',
                            pointBackgroundColor: ploData.map(d => d.color),
                            pointRadius: 6
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: { r: { beginAtZero: true, max: 100, ticks: { display: false } } }
                    }
                });
            };

        } else if (activeTab === 'faculty') {
            // --- ENHANCED FACULTY ACHIEVEMENT DASHBOARD (3 PILLARS) ---

            // Helper: Save Changes
            window.handleFacChange = (id, field, subField, val) => {
                const f = facultyData.find(x => x.id === id);
                if (!f) return;

                // Parse value
                let num = parseFloat(val);
                if (isNaN(num)) num = 0;

                // Update Data
                if (field === 'research') {
                    if (f.research) f.research[subField] = num;
                } else if (field === 'teachingLoad') {
                    f.teachingLoad = num;
                } else if (field === 'supervision') {
                    if (!f.research) f.research = {};
                    if (!f.research.supervision) f.research.supervision = {};
                    f.research.supervision.undergrad = num;
                } else if (field === 'scholarUrl') {
                    if (!f.scholar) f.scholar = {};
                    f.scholar.url = val;
                }

                if (window.saveFacultyData) window.saveFacultyData();

                // Refresh Visuals
                const currentFilter = document.getElementById('fac-filter-select').value;
                if (currentFilter == id || currentFilter == 'all') {
                    window.renderFacVisuals(currentFilter);
                }
            };

            // Helper: Manage Awards (Switch View)
            window.manageAwards = (id) => {
                const select = document.getElementById('fac-filter-select');
                if (select) {
                    select.value = id;
                    window.renderFacVisuals(id);
                    document.getElementById('fac-right-panel').scrollIntoView({ behavior: 'smooth' });
                    // Flash the panel
                    const panel = document.getElementById('fac-right-panel');
                    panel.style.transition = 'background 0.3s';
                    panel.style.background = '#fff8e1';
                    setTimeout(() => { panel.style.background = 'transparent'; }, 500);
                }
            };

            // Helper: Fetch Scholar Metrics (Simulated Scraper w/ Real Data Lookup)
            window.fetchScholarMetrics = (id) => {
                const f = facultyData.find(x => x.id === id);
                if (!f || !f.scholar || !f.scholar.url) {
                    alert('⚠️ Please enter a valid Google Scholar URL first.');
                    return;
                }

                // Known Real Data for Demo Purposes (Since client-side scraping is blocked)
                const scholarDB = {
                    'kwW79H8AAAAJ': { citations: 4017, hIndex: 7 }, // Dr. Mohammed Alrashed
                    'ExampleID1': { citations: 5320, hIndex: 45 },  // Prof. Bekairy (Mock)
                    'ExampleID2': { citations: 4210, hIndex: 38 }   // Prof. Harbi (Mock)
                };

                const btn = document.getElementById(`sync-btn-${id}`);
                const originalContent = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
                btn.disabled = true;

                // Simulate Network Request
                setTimeout(() => {
                    // Extract ID from URL for "realism" 
                    // Matches: user=ID, or /citations?user=ID
                    let scholarId = 'UNKNOWN';
                    try {
                        const urlObj = new URL(f.scholar.url);
                        scholarId = urlObj.searchParams.get('user');
                    } catch (e) {
                        // Fallback for raw ID or partial string
                        const parts = f.scholar.url.split('user=');
                        if (parts.length > 1) scholarId = parts[1].split('&')[0];
                    }

                    let newCits = 0;
                    let newH = 0;
                    let source = 'Simulation';

                    if (scholarDB[scholarId]) {
                        // HIT! Use real pre-fetched data
                        newCits = scholarDB[scholarId].citations;
                        newH = scholarDB[scholarId].hIndex;
                        source = 'Verified Database';
                    } else {
                        // MISS: Ask user for input (Better than random)
                        btn.innerHTML = originalContent;
                        btn.disabled = false;
                        const userCits = prompt(`⚠️ Direct connection to Google Scholar blocked by browser.\n\nPlease enter the ACTUAL Total Citations for ID: ${scholarId}`, f.scholar.citations || 0);
                        if (userCits === null) return; // Cancelled

                        const userH = prompt(`Please enter the ACTUAL h-index:`, f.scholar.hIndex || 0);
                        if (userH === null) return;

                        newCits = parseInt(userCits);
                        newH = parseInt(userH);
                        source = 'Manual Entry';
                    }

                    if (!isNaN(newCits)) f.scholar.citations = newCits;
                    if (!isNaN(newH)) f.scholar.hIndex = newH;

                    if (window.saveFacultyData) window.saveFacultyData();
                    window.renderFacVisuals(document.getElementById('fac-filter-select').value);

                    btn.innerHTML = '<i class="fas fa-check"></i>';
                    btn.className = 'btn btn-sm btn-outline btn-success';

                    setTimeout(() => {
                        btn.innerHTML = originalContent;
                        btn.className = 'btn btn-sm btn-outline';
                        btn.disabled = false;
                        if (source === 'Verified Database') {
                            alert(`✅ Successfully Synced!\n\nSource: ${source}\nID: ${scholarId}\nCitations: ${newCits}\nh-index: ${newH}`);
                        }
                    }, 1000);
                }, 1500);
            };

            // Helper: Awards Management
            // Helper: Awards Management (With Visual Feedback)
            window.addAward = (id) => {
                const f = facultyData.find(x => x.id === id);
                if (!f) return;
                const name = prompt("Enter Award Name:");
                if (!name) return;
                const year = prompt("Enter Year (e.g., 2025):", "2025");
                const type = prompt("Enter Type (Internal/National/International):", "Internal");

                if (!f.awards) f.awards = [];
                f.awards.push({ name, year, type });
                if (window.saveFacultyData) window.saveFacultyData();

                // Update Visuals (Right Panel)
                window.renderFacVisuals(id);

                // Update Table Data
                if (window.renderFacultyTable) window.renderFacultyTable();

                // Update Table Button (Flash Green)
                setTimeout(() => {
                    const btn = document.getElementById(`btn-award-count-${id}`);
                    if (btn) {
                        btn.style.transition = 'background 0.5s';
                        btn.style.background = '#d4edda';
                        setTimeout(() => btn.style.background = 'transparent', 500);
                    }
                }, 50); // Small delay to allow table re-render
            };

            window.removeAward = (id, idx) => {
                const f = facultyData.find(x => x.id === id);
                if (!f) return;
                f.awards.splice(idx, 1);
                if (window.saveFacultyData) window.saveFacultyData();

                // Update Visuals
                window.renderFacVisuals(id);

                // Update Table Data
                if (window.renderFacultyTable) window.renderFacultyTable();

                // Update Table Button (Flash Red)
                setTimeout(() => {
                    const btn = document.getElementById(`btn-award-count-${id}`);
                    if (btn) {
                        btn.style.transition = 'background 0.5s';
                        btn.style.background = '#f8d7da';
                        setTimeout(() => btn.style.background = 'transparent', 500);
                    }
                }, 50); // Small delay to allow table re-render
            };


            // Helper: Render Faculty Table
            window.renderFacultyTable = () => {
                const container = document.getElementById('faculty-table-container');
                if (!container) return;

                container.innerHTML = `
                    <table class="data-table" style="width:100%; border-collapse:collapse;">
                        <thead style="background:#fff; position:sticky; top:0; z-index:5;">
                            <tr>
                                <th style="padding:10px;">Faculty Member</th>
                                <th style="padding:10px; width:80px; text-align:center;">Load (Hrs)</th>
                                <th style="padding:10px; width:60px; text-align:center;">Q1</th>
                                <th style="padding:10px; width:60px; text-align:center;">Q2</th>
                                <th style="padding:10px; width:60px; text-align:center;">Q3</th>
                                <th style="padding:10px; width:60px; text-align:center;">Q4</th>
                                <th style="padding:10px; width:60px; text-align:center;">Sup.</th>
                                <th style="padding:10px; text-align:center;">Awards</th>
                                <th style="padding:10px; text-align:center;">Google Scholar</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${facultyData.map(f => `
                                <tr>
                                    <td style="padding:10px;">
                                        <div style="font-weight:600;">${f.name}</div>
                                        <div style="font-size:0.8rem; color:#666;">${f.dept}</div>
                                    </td>
                                    <td style="padding:5px; text-align:center;">
                                        <input type="number" value="${f.teachingLoad || 0}" style="width:50px; text-align:center; border:1px solid #ddd; padding:4px; border-radius:4px;" 
                                            onchange="window.handleFacChange(${f.id}, 'teachingLoad', null, this.value)">
                                    </td>
                                    <td style="padding:5px; text-align:center;">
                                        <input type="number" value="${f.research?.q1 || 0}" style="width:40px; text-align:center; border:1px solid #eee; background:#e8f5e9; padding:4px;"
                                            onchange="window.handleFacChange(${f.id}, 'research', 'q1', this.value)">
                                    </td>
                                    <td style="padding:5px; text-align:center;">
                                        <input type="number" value="${f.research?.q2 || 0}" style="width:40px; text-align:center; border:1px solid #eee; background:#fff3e0; padding:4px;"
                                            onchange="window.handleFacChange(${f.id}, 'research', 'q2', this.value)">
                                    </td>
                                    <td style="padding:5px; text-align:center;">
                                        <input type="number" value="${f.research?.q3 || 0}" style="width:40px; text-align:center; border:1px solid #eee; padding:4px;"
                                            onchange="window.handleFacChange(${f.id}, 'research', 'q3', this.value)">
                                    </td>
                                    <td style="padding:5px; text-align:center;">
                                        <input type="number" value="${f.research?.q4 || 0}" style="width:40px; text-align:center; border:1px solid #eee; padding:4px;"
                                            onchange="window.handleFacChange(${f.id}, 'research', 'q4', this.value)">
                                    </td>
                                    <td style="padding:5px; text-align:center;">
                                         <input type="number" value="${(f.research?.supervision?.undergrad || 0) + (f.research?.supervision?.master || 0)}" style="width:40px; text-align:center; border:1px solid #ddd; padding:4px;"
                                            onchange="window.handleFacChange(${f.id}, 'supervision', 'total', this.value)">
                                    </td>
                                    <td style="padding:5px; text-align:center;">
                                        <button id="btn-award-count-${f.id}" onclick="window.manageAwards(${f.id})" class="btn btn-sm btn-outline" style="font-size:0.8rem; padding:2px 8px;">
                                            🏆 ${f.awards ? f.awards.length : 0}
                                        </button>
                                    </td>
                                    <td style="padding:5px; white-space:nowrap;">
                                        <div style="display:flex; gap:4px; align-items:center; justify-content:center;">
                                            <input type="text" value="${f.scholar?.url || ''}" placeholder="Scholar URL" style="width:100px; font-size:0.8rem; padding:4px; border:1px solid #ddd; border-radius:4px;" onchange="window.handleFacChange(${f.id}, 'scholarUrl', null, this.value)">
                                            <button id="sync-btn-${f.id}" onclick="window.fetchScholarMetrics(${f.id})" class="btn btn-sm btn-outline" style="padding:4px 8px;" title="Sync Data">🔄</button>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                `;
            };

            // Helper: Render Visuals
            window.renderFacVisuals = (filterId) => {
                let dataSubset = facultyData;
                let title = 'College Overview';

                if (filterId !== 'all') {
                    dataSubset = facultyData.filter(f => f.id == filterId);
                    if (dataSubset.length > 0) title = dataSubset[0].name;
                } else {
                    // Reset Logic for 'All'
                }

                // 1. Teaching Visual (Avg or Single)
                const avgLoad = dataSubset.reduce((acc, f) => acc + (f.teachingLoad || 0), 0) / dataSubset.length;
                const loadEl = document.getElementById('vis-teaching-val');
                if (loadEl) loadEl.innerText = avgLoad.toFixed(1);

                // 2. Research Visual (Bar Chart)
                const q1 = dataSubset.reduce((acc, f) => acc + (f.research?.q1 || 0), 0);
                const q2 = dataSubset.reduce((acc, f) => acc + (f.research?.q2 || 0), 0);
                const q3 = dataSubset.reduce((acc, f) => acc + (f.research?.q3 || 0), 0);
                const q4 = dataSubset.reduce((acc, f) => acc + (f.research?.q4 || 0), 0);

                if (window.facResearchChart) {
                    window.facResearchChart.data.datasets[0].data = [q1, q2, q3, q4];
                    window.facResearchChart.update();
                }

                // Research Stats
                const totCits = dataSubset.reduce((acc, f) => acc + (f.scholar?.citations || 0), 0);
                const totGrants = dataSubset.reduce((acc, f) => acc + (f.research?.grants?.awarded || 0), 0);
                const totSup = dataSubset.reduce((acc, f) => acc + ((f.research?.supervision?.undergrad || 0) + (f.research?.supervision?.master || 0) + (f.research?.supervision?.phd || 0)), 0);

                const citEl = document.getElementById('vis-cits'); if (citEl) citEl.innerText = totCits.toLocaleString();
                const grantEl = document.getElementById('vis-grants'); if (grantEl) grantEl.innerText = totGrants;
                const supEl = document.getElementById('vis-sup'); if (supEl) supEl.innerText = totSup;

                // 3. Right Side Panel (Dynamic: Spotlight OR Fac Details)
                const rightPanel = document.getElementById('fac-right-panel');
                if (rightPanel) {
                    if (filterId === 'all') {
                        // Default Spotlight
                        const top = facultyData.sort((a, b) => b.scholar.citations - a.scholar.citations)[0];
                        rightPanel.innerHTML = `
                            <div class="card" style="background: linear-gradient(135deg, #1e88e5 0%, #1565c0 100%); color: white; text-align: center; height: 100%;">
                                <h3>🚀 Spotlight</h3>
                                <div style="margin-top: 1rem;">
                                    <div style="font-size: 3rem; margin-bottom: 0.5rem;">🏆</div>
                                    <div style="font-weight: bold; font-size: 1.2rem;">Top Performer</div>
                                    <div style="font-size: 1.1rem; margin-bottom: 0.5rem;">${top.name}</div>
                                    <div style="font-size: 0.9rem; opacity: 0.9; background: rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 12px; display: inline-block;">
                                        ${top.scholar.citations.toLocaleString()} Citations
                                    </div>
                                    <p style="margin-top:1.5rem; font-size:0.8rem; opacity:0.8;">Select a faculty member above to manage their Awards & Details.</p>
                                </div>
                            </div>
                        `;
                    } else {
                        // Faculty Award Manager
                        const f = dataSubset[0];
                        rightPanel.innerHTML = `
                             <div class="card" style="height:100%; border-left: 4px solid #ff9800;">
                                <div style="display:flex; justify-content:space-between; align-items:center;">
                                    <h3 style="margin:0;">🎖️ Manage Awards</h3>
                                     <button class="btn btn-sm btn-outline" onclick="window.addAward(${f.id})">+ Add</button>
                                </div>
                                <p class="text-muted" style="font-size:0.85rem; margin-bottom:1rem;">${f.name}</p>
                                <div style="max-height: 200px; overflow-y:auto;">
                                    ${f.awards && f.awards.length > 0 ? f.awards.map((a, idx) => `
                                        <div style="display:flex; justify-content:space-between; align-items:center; padding: 6px 0; border-bottom:1px solid #eee;">
                                            <div style="font-size:0.9rem;">
                                                <strong>${a.year}</strong> ${a.name}
                                                <div style="font-size:0.75rem; color:#888;">${a.type}</div>
                                            </div>
                                            <button onclick="window.removeAward(${f.id}, ${idx})" style="border:none; background:none; color:red; cursor:pointer;">×</button>
                                        </div>
                                    `).join('') : '<div class="text-muted" style="font-style:italic;">No awards listed.</div>'}
                                </div>
                             </div>
                         `;
                    }
                }

                // Awards List on Dashboard (Center)
                const awardsList = document.getElementById('vis-awards-list');
                if (awardsList) {
                    const allAwards = dataSubset.flatMap(f => f.awards || []).slice(0, 5);
                    awardsList.innerHTML = allAwards.length ? allAwards.map(a => `
                        <div style="font-size:0.85rem; padding: 4px 0; border-bottom:1px solid #eee;">
                            <span style="color:#ff9800;">★</span> <strong>${a.year}</strong> ${a.name} (${a.type})
                        </div>
                    `).join('') : '<div class="text-muted" style="font-size:0.9rem;">No awards recorded</div>';
                }
            };

            // Main Faculty Dashboard Renderer
            window.renderFacultyDashboard = () => {
                const content = `
                <div class="fade-in-up">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 2rem;">
                         <div>
                            <h2 style="margin:0;">🏆 Faculty Achievement Matrix</h2>
                            <p class="text-muted" style="margin:0;">Teaching • Research • Distinctions</p>
                         </div>
                         <div style="display:flex; gap: 1rem; align-items:center;">
                            <!-- Filter -->
                            <select id="fac-filter-select" class="input-field" style="padding: 8px 12px; width: 250px;" onchange="window.renderFacVisuals(this.value)">
                                <option value="all">📊 College Overview (All)</option>
                                ${facultyData.map(f => `<option value="${f.id}">${f.name}</option>`).join('')}
                            </select>
                            <button class="btn btn-primary" onclick="alert('Exporting Report...')">📤 Export Report</button>
                         </div>
                    </div>

                    <!-- 3 PILLARS VISUALS -->
                    <div class="dashboard-grid" style="grid-template-columns: 1fr 2fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
                        <!-- Pillar 1: Teaching & Experiential -->
                        <div class="card" style="text-align:center;">
                            <h3 style="font-size:1.1rem; color:#555; margin-bottom:1.5rem;">📚 Teaching Load</h3>
                            <div style="position:relative; height: 120px; display:flex; align-items:center; justify-content:center;">
                                <div style="width: 120px; height: 120px; border-radius: 50%; border: 10px solid #e3f2fd; display:flex; align-items:center; justify-content:center; flex-direction:column;">
                                    <span id="vis-teaching-val" style="font-size: 2.2rem; font-weight:bold; color: #2196f3;">0</span>
                                    <span style="font-size: 0.8rem; color:#666;">Hrs/Week</span>
                                </div>
                            </div>
                            <p style="font-size:0.85rem; color:#888; margin-top:1rem;">Source: Academic Affairs</p>
                        </div>

                        <!-- Pillar 2: Research & Scholarship -->
                        <div class="card">
                             <div style="display:flex; justify-content:space-between; margin-bottom:1rem;">
                                 <h3 style="font-size:1.1rem; color:#555; margin:0;">🧪 Research Output</h3>
                                 <div style="font-size:0.9rem;">
                                    <span style="margin-right:10px;">📜 Citations: <strong id="vis-cits">0</strong></span>
                                    <span style="margin-right:10px;">💰 Grants: <strong id="vis-grants">0</strong></span>
                                    <span>👥 Sup: <strong id="vis-sup">0</strong></span>
                                 </div>
                             </div>
                             <div style="height: 180px;">
                                <canvas id="chartFacResearch"></canvas>
                             </div>
                        </div>

                        <!-- Pillar 3: Awards -->
                        <div class="card">
                            <h3 style="font-size:1.1rem; color:#555; margin-bottom:1rem;">🎖️ Awards</h3>
                            <div id="vis-awards-list" style="height: 180px; overflow-y:auto; padding-right:5px;">
                                <!-- Dynamic List -->
                            </div>
                        </div>
                    </div>

                    <!-- DETAILED EDITABLE TABLE -->
                    <div class="card" style="padding:0; overflow:hidden;">
                        <div style="padding:1rem; border-bottom:1px solid #eee; background:#f9f9f9;">
                            <h3 style="margin:0;">📝 Detailed Metrics (Editable)</h3>
                        </div>
                            <div id="faculty-table-container"></div>
                        </div>
                     </div>
                </div>
            `;
                document.getElementById('app-root').innerHTML = content;
                // Initialize Table
                setTimeout(() => window.renderFacultyTable(), 100);
            };

            // Initial Load
            window.renderFacultyDashboard();


            window.initCharts = () => {
                // Initialize Research Bar Chart
                const ctx = document.getElementById('chartFacResearch').getContext('2d');
                window.facResearchChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Q1 Papers', 'Q2 Papers', 'Q3 Papers', 'Q4 Papers'],
                        datasets: [{
                            label: 'Publications',
                            data: [0, 0, 0, 0], // Initial dummy, updated by renderFacVisuals
                            backgroundColor: ['#4caf50', '#ff9800', '#2196f3', '#9c27b0'],
                            borderRadius: 4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: { y: { beginAtZero: true } }
                    }
                });

                // Initial Render for 'All'
                window.renderFacVisuals('all');
            };


        } else if (activeTab === 'people') {
            content = `
                <div class="dashboard-grid">
                    <div class="card" style="grid-column: span 2;">
                        <h3>🏛️ College Achievements</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 1rem; border-bottom: 1px solid #eee;">✅ <strong>Full Accreditation</strong> renewal by NCAAA (2024-2029).</li>
                            <li style="padding: 1rem; border-bottom: 1px solid #eee;">🚀 Launched new <strong>Simulation Center</strong> for IPPE/APPE training.</li>
                            <li style="padding: 1rem; border-bottom: 1px solid #eee;">🌍 Signed MOU with 3 International Pharmacy Schools.</li>
                        </ul>
                    </div>
                </div>

                <div class="dashboard-grid" style="margin-top: 2rem;">
                     <div class="card">
                        <h3>🏆 Faculty Awards</h3>
                        <div class="data-table-container">
                            <table class="data-table">
                                <thead><tr><th>Faculty</th><th>Award</th><th>Year</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Dr. Sara Ahmed</strong></td><td>Excellence in Teaching</td><td>2024</td></tr>
                                    <tr><td><strong>Prof. John Doe</strong></td><td>Research Grant Award (NIH)</td><td>2023</td></tr>
                                    <tr><td><strong>Dr. Amnah Ali</strong></td><td>Community Service Medal</td><td>2024</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div class="card">
                        <h3>🥇 Student Awards</h3>
                        <div class="data-table-container">
                             <table class="data-table">
                                <thead><tr><th>Student</th><th>Award</th><th>Excellence</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Fahad Al-Otaibi</strong></td><td>Dean's List</td><td>Academic</td></tr>
                                    <tr><td><strong>Nouf Al-Saud</strong></td><td>Best Research Poster</td><td>Research</td></tr>
                                    <tr><td><strong>Khalid Kami</strong></td><td>Community Leader</td><td>Service</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="card" style="margin-top: 2rem;">
                    <h3>👨‍🏫 Faculty List</h3>
                     <div class="data-table-container">
                        <table class="data-table">
                            <thead><tr><th>Name</th><th>Position</th><th>Department</th><th>Status</th></tr></thead>
                            <tbody>
                                <tr><td>Dr. Hisham Aljadhey</td><td>Dean</td><td>Clinical Pharmacy</td><td>Active</td></tr>
                                <tr><td>Dr. Sara Al-Dossari</td><td>Associate Dean</td><td>Pharmacy Practice</td><td>Active</td></tr>
                                <tr><td>Dr. Ahmed Malik</td><td>Assistant Professor</td><td>Pharmaceutical Sci</td><td>Active</td></tr>
                                <tr><td>Dr. Layla Hassan</td><td>Lecturer</td><td>Clinical Pharmacy</td><td>Sabbatical</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `;

        } else if (activeTab === 'data') {
            // --- NEW DATA TAB ---

            // Helper to generate CSV content
            const generateKPI_CSV = () => {
                let csv = 'Goal,Branch,KPI,Target,Actual\n';
                strategicGoals.forEach(g => {
                    g.branches.forEach(b => {
                        b.kpis.forEach(k => {
                            csv += `"${g.title}","${b.name}","${k.name}","${k.target}","${k.actual}"\n`;
                        });
                    });
                });
                return encodeURIComponent(csv);
            };

            content = `
                <div class="dashboard-grid" style="align-items:start;">
                    <div class="card">
                        <h3>📥 Excel / CSV Reports</h3>
                        <p>Download the latest detailed KPI report across all 5 Strategic Goals.</p>
                        <br>
                        <a href="data:text/csv;charset=utf-8,${generateKPI_CSV()}" download="strategic_goals_report.csv" class="btn btn-primary" style="text-decoration:none; display:inline-block;">
                            📥 Download KPI Report (.csv)
                        </a>
                    </div>
                    
                    <div class="card">
                        <h3>ℹ️ KPI Management</h3>
                        <p>To edit Target or Actual values, please click on the <strong>Goal Cards</strong> in the "KPIs & Strategy" tab and use the <strong>"Save & Recalculate"</strong> button in the popup.</p>
                    </div>
                </div>
            `;
        }

        // Render directly
        this.root.innerHTML = tabNav + `<div class="fade-in-up">${content}</div>`;
        if (initCharts) setTimeout(initCharts, 50);
    }
    updateGoalStatus(goalId) {
        const table = document.getElementById(`table-${goalId}`);
        if (!table) return;

        const rows = table.querySelectorAll('tbody tr');
        let successCount = 0;

        rows.forEach(row => {
            const targetInput = row.querySelector('.kpi-target');
            const actualInput = row.querySelector('.kpi-actual');
            const statusCell = row.querySelector('.kpi-status');

            if (targetInput && actualInput && statusCell) {
                const target = parseFloat(targetInput.value) || 0; // Simple parsing
                const actualVal = actualInput.value.trim();
                const actual = parseFloat(actualVal) || 0;

                // Simple logic: If text contains 'Prog' or 'Pending', it's yellow.
                // Otherwise compare numbers.
                let status = '🔴';
                if (actualVal.includes('Prog') || actualVal.includes('Pending') || actualVal.includes('Done')) {
                    status = '🟡';
                    if (actualVal.includes('Done')) status = '🟢';
                } else {
                    if (actual >= target) status = '🟢';
                    else status = '🔴';
                }

                statusCell.textContent = status;

                // visual feedback
                actualInput.style.backgroundColor = '#e8f5e9';
                setTimeout(() => actualInput.style.backgroundColor = '', 500);
            }
        });

        alert('✅ KPI Status Recalculated & Saved!');
    }
    getIPPEDashboardContent(activeTab, subTab, filterId) {
        try {
            let allStudents = this.store.getStudents();

            // Filter by Level (Cohort)
            if (level === 'ippe1') {
                allStudents = allStudents.filter(s => s.cohort === 'IPPE I' || s.cohort === 'IPPE 1');
            } else if (level === 'ippe2') {
                allStudents = allStudents.filter(s => s.cohort === 'IPPE II' || s.cohort === 'IPPE 2');
            } else if (level === 'ippe3') {
                allStudents = allStudents.filter(s => s.cohort === 'IPPE III' || s.cohort === 'IPPE 3');
            } else if (level === 'community') {
                // Community uses IPPE III Roster (Same Students)
                allStudents = allStudents.filter(s => s.cohort === 'IPPE III' || s.cohort === 'IPPE 3');
            } else if (level === 'appe') {
                allStudents = allStudents.filter(s => s.cohort === 'APPE');
            }

            // Filter Logic (Student Filter)
            let students = allStudents;
            if (filterId !== 'all') {
                students = allStudents.filter(s => s.id === filterId);
            }

            // Sub-Navigation Tabs (Course Specific)
            const tabs = [
                { id: 'overview', label: 'Overview & Risk' },
                { id: 'tracking', label: 'Tracking & Roster' },
                { id: 'competency', label: 'Competency & Sessions' },
                { id: 'assessments', label: 'Assessments & Grading' },
                { id: 'admin', label: 'Admin & Reports' }
            ];

            const tabNav = `
                <div class="tab-nav" style="margin-bottom: 1.5rem; border-bottom: 2px solid #eee;">
                    ${tabs.map(tab => `
                        <button 
                            class="btn ${activeTab === tab.id ? 'btn-primary' : 'btn-outline'}" 
                            style="margin-right: 0.5rem; border-bottom: ${activeTab === tab.id ? 'none' : '1px solid transparent'};"
                            onclick="app.renderHomePage('${level}', '${tab.id}', '${filterId}')"
                        >
                            ${tab.label}
                        </button>
                    `).join('')
                }
                </div>
            `;

            let content = '';
            // Sub-View Routing
            if (activeTab === 'overview') {
                if (level === 'ippe2') content = this.renderIPPE2_Overview(allStudents, students, filterId, level);
                else if (level === 'ippe3' || level === 'community') content = this.renderIPPE3_Overview(allStudents, students, filterId);
                else content = this.renderIPPE1_Overview(allStudents, students, filterId, level);
            }
            else if (activeTab === 'tracking') content = this.renderIPPE_Tracking(students);
            else if (activeTab === 'competency') content = this.renderIPPE_Competency_V2(students);
            else if (activeTab === 'assessments') content = this.renderIPPE_Assessments(students);
            else if (activeTab === 'admin') content = this.renderIPPE_Admin(students);

            // Return package
            return {
                html: tabNav + content,
                initCharts: () => {
                    if (activeTab === 'overview') this.initIPPECharts(students, level);
                }
            };

        } catch (e) {
            console.error(`Error in getIPPEDashboardContent(${level}):`, e);
            return {
                html: `<div class="alert alert-danger">Error: ${e.message}</div>`,
                initCharts: () => { }
            };
        }
    }

    renderIPPE_Competency_V2(students) {
        return `
            <div class="card mb-4" style="background: linear-gradient(135deg, #1abc9c, #16a085); color: white;">
                <div class="flex-between">
                    <div>
                        <h3 style="color:white;">Competency & EPA Tracker</h3>
                        <p style="opacity: 0.9;">Monitoring Entrustable Professional Activities & Skills</p>
                    </div>
                    <div style="text-align:right;">
                        <h1>${students.length * 12}</h1>
                        <small>Total Assessments</small>
                    </div>
                </div>
            </div>

            <div class="dashboard-grid" style="grid-template-columns: 2fr 1fr;">
                <div class="card">
                     <h4 style="margin-bottom:1rem;">Class EPA Progress (Heatmap)</h4>
                     <div style="height:300px; display:flex; align-items:center; justify-content:center; background:#f9f9f9; color:#999;">
                        Running Heatmap Visualization...
                        <!-- Placeholder for complex heatmap -->
                     </div>
                </div>
                <div class="card">
                    <h4 style="margin-bottom:1rem;">Skill Gaps</h4>
                    <ul style="list-style:none; padding:0;">
                        <li style="padding:0.5rem; border-bottom:1px solid #eee; display:flex; justify-content:space-between;">
                            <span>IV Compounding</span> <span style="color:red;">12% At-Risk</span>
                        </li>
                        <li style="padding:0.5rem; border-bottom:1px solid #eee; display:flex; justify-content:space-between;">
                            <span>Patient Counseling</span> <span style="color:orange;">8% At-Risk</span>
                        </li>
                         <li style="padding:0.5rem; border-bottom:1px solid #eee; display:flex; justify-content:space-between;">
                            <span>Medication Rec</span> <span style="color:green;">2% At-Risk</span>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    }

    renderIPPE_Tracking(students) {
        return `
            <div class="card mb-4">
                <div class="flex-between">
                    <h3>Student Roster & Tracking</h3>
                    <div style="display:flex; gap:1rem;">
                        <button class="btn btn-outline" onclick="window.print()">🖨️ Print Roster</button>
                        <button class="btn btn-primary">Export Excel</button>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="data-table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Badge #</th>
                                <th>Student Name</th>
                                <th>Attendance</th>
                                <th>EPA Progress</th>
                                <th>Simulation</th>
                                <th>Professionalism</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${students.map(s => `
                            <tr>
                                <td><span style="font-family:monospace; color:#666;">${s.id}</span></td>
                                <td><strong>${s.name}</strong></td>
                                <td>
                                    <div style="display:flex; align-items:center; gap:0.5rem; width:120px;">
                                        <div style="flex:1; background:#eee; height:6px; border-radius:3px;">
                                            <div style="width:${s.attendance}%; background:${s.attendance >= 90 ? '#2ecc71' : '#e74c3c'}; height:100%; border-radius:3px;"></div>
                                        </div>
                                        <span style="font-size:0.8rem;">${s.attendance}%</span>
                                    </div>
                                </td>
                                <td>
                                    <div style="display:flex; align-items:center; gap:0.5rem; width:120px;">
                                        <div style="flex:1; background:#eee; height:6px; border-radius:3px;">
                                            <div style="width:50%; background:#f1c40f; height:100%; border-radius:3px;"></div>
                                        </div>
                                        <span style="font-size:0.8rem;">1/2</span>
                                    </div>
                                </td>
                                 <td>
                                    <div style="display:flex; align-items:center; gap:0.5rem; width:120px;">
                                        <div style="flex:1; background:#eee; height:6px; border-radius:3px;">
                                            <div style="width:100%; background:#3498db; height:100%; border-radius:3px;"></div>
                                        </div>
                                        <span style="font-size:0.8rem;">Done</span>
                                    </div>
                                </td>
                                 <td>
                                    <div style="display:flex; align-items:center; gap:0.5rem; width:120px;">
                                        <div style="flex:1; background:#eee; height:6px; border-radius:3px;">
                                            <div style="width:${s.professionalism ? s.professionalism.score * 10 : 100}%; background:#9b59b6; height:100%; border-radius:3px;"></div>
                                        </div>
                                        <span style="font-size:0.8rem;">${s.professionalism ? s.professionalism.score : 10}/10</span>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }

    switchIPPETab(level, tabId, filterId) {
        this.renderHomePage(level, tabId, filterId);
    }

    getIPPETitle(level) {
        switch (level) {
            case 'ippe1': return 'IPPE I';
            case 'ippe2': return 'IPPE II';
            case 'ippe3': return 'IPPE III';
            case 'community':
            case 'ippe-community': return 'Community';
            case 'appe': return 'APPE';
            default: return 'IPPE Dashboard';
        }
    }

    renderIPPE2(filterId = 'all') {
        this.renderHomePage('ippe2', 'overview', filterId);
    }

    renderIPPE3(filterId = 'all') {
        this.renderHomePage('ippe3', 'overview', filterId);
    }

    renderAPPE(filterId = 'all') {
        this.renderHomePage('appe', 'overview', filterId);
    }

    renderIPPECommunity(filterId = 'all') {
        this.renderHomePage('community', 'overview', filterId);
    }

    renderIPPE1_Overview(allStudents, filteredStudents, filterId, level = 'ippe1') {
        // Helper to calculate average of a property across students
        const calcAvg = (list, accessor) => {
            const validValues = list.map(accessor).filter(v => v !== null && v !== undefined && !isNaN(v));
            if (validValues.length === 0) return 0;
            return validValues.reduce((a, b) => a + b, 0) / validValues.length;
        };

        // 1. Total Enrolled
        const totalEnrolled = filteredStudents.length;

        // 2. Attendance Rate
        const avgAttendance = calcAvg(filteredStudents, s => s.attendance);

        // 3. Hours Completed vs Required (Assuming 30 sessions * 4 hours = 120 hours)
        const totalSessions = filteredStudents.reduce((acc, s) => acc + (s.competencies?.sessions?.filter(sess => sess.status === 'Completed').length || 0), 0);
        const avgSessions = totalSessions / (filteredStudents.length || 1);
        const hoursCompleted = avgSessions * 4;
        const hoursRequired = 120;

        // 4. Avg Rubric Score per CLO
        const avgCLOScore = calcAvg(filteredStudents, s => {
            const clos = Object.values(s.competencies?.clos || {});
            if (clos.length === 0) return 0;
            return clos.reduce((a, b) => a + b, 0) / clos.length;
        });

        // 5. Avg Professionalism
        const avgProfessionalism = calcAvg(filteredStudents, s => s.professionalism?.score || 0);

        // 6. Avg Mid-Year Eval
        const avgMidYear = calcAvg(filteredStudents, s => {
            const grade = this.store.calculateStudentGrade(s.id);
            return grade?.components?.midYear?.score || 0;
        });

        // 7. Avg End-Year Eval
        const avgEndYear = calcAvg(filteredStudents, s => {
            const grade = this.store.calculateStudentGrade(s.id);
            return grade?.components?.endYear?.score || 0;
        });

        // 8. Avg Portfolio
        const avgPortfolio = calcAvg(filteredStudents, s => {
            const grade = this.store.calculateStudentGrade(s.id);
            return grade?.components?.portfolio?.score || 0;
        });

        // 9. Avg EPA
        const avgEPA = calcAvg(filteredStudents, s => {
            const epas = Object.values(s.competencies?.epas || {});
            if (epas.length === 0) return 0;
            return epas.reduce((a, b) => a + b, 0) / epas.length;
        });

        // 10. Avg Simulation
        const avgSimulation = calcAvg(filteredStudents, s => {
            const grade = this.store.calculateStudentGrade(s.id);
            return grade?.components?.simulation?.score || 0;
        });

        // 11. Highest and Lowest Grade (Ranking)
        const allGrades = filteredStudents.map(s => this.store.calculateStudentGrade(s.id)?.finalGrade || 0);
        const highestGrade = Math.max(...allGrades, 0);
        const lowestGrade = Math.min(...allGrades, 0);

        // Render
        return `
                <div class="card mb-4" >
                    <div class="flex-between">
                        <h3>Program Overview & Metrics</h3>
                        <div style="display:flex; align-items:center; gap:1rem;">
                            <label><strong>Filter Student:</strong></label>
                            <select onchange="app.renderHomePage('${level}', 'overview', this.value)" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc;">
                                <option value="all" ${filterId === 'all' ? 'selected' : ''}>All Students</option>
                                ${allStudents.map(s => `<option value="${s.id}" ${filterId === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                            </select>
                        </div>
                    </div>
            </div>

            <!--Statistical Charts Row-->
            <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr); margin-bottom: 2rem;">
                <!-- Ranking Chart (Restored) -->
                <div class="card" style="grid-column: span 3; margin-bottom: 1rem;">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-green);">Student Performance Ranking (Weighted)</h4>
                    <div style="height: 300px; position: relative;" id="ranking-chart-container">
                        <canvas id="chartRanking"></canvas>
                    </div>
                </div>

                <div class="card">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-green);">Attendance Overview</h4>
                    <div style="height: 200px; position: relative;">
                        <canvas id="chartAttendance"></canvas>
                    </div>
                </div>
                <div class="card">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-green);">Performance Metrics</h4>
                    <div style="height: 200px; position: relative;">
                        <canvas id="chartPerformance"></canvas>
                    </div>
                </div>
                <div class="card">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-green);">Grade Distribution</h4>
                    <div style="height: 200px; position: relative;">
                        <canvas id="chartGrades"></canvas>
                    </div>
                </div>
            </div>

            <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
                <div class="card stat-card">
                    <span class="stat-label">Total Enrolled</span>
                    <span class="stat-value">${totalEnrolled}</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Attendance Rate</span>
                    <span class="stat-value">${avgAttendance.toFixed(1)}%</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Hours Completed</span>
                    <span class="stat-value">${hoursCompleted.toFixed(0)} / ${hoursRequired}</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg CLO Score</span>
                    <span class="stat-value">${avgCLOScore.toFixed(1)}%</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg Professionalism</span>
                    <span class="stat-value">${avgProfessionalism.toFixed(1)}/10</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg Mid-Year Eval</span>
                    <span class="stat-value">${avgMidYear.toFixed(1)}%</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg End-Year Eval</span>
                    <span class="stat-value">${avgEndYear.toFixed(1)}%</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg Portfolio</span>
                    <span class="stat-value">${avgPortfolio.toFixed(1)}%</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg EPA Score</span>
                    <span class="stat-value">${avgEPA.toFixed(1)}/5</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg Simulation</span>
                    <span class="stat-value">${avgSimulation.toFixed(1)}%</span>
                </div>
            </div>

            <div class="card" style="margin-top: 1rem;">
                <h3>?? Grade Ranking System</h3>
                <div style="display: flex; justify-content: space-around; margin-top: 1rem;">
                    <div style="text-align: center;">
                        <div style="font-size: 2.5rem; color: var(--primary-green);">
                            ${highestGrade.toFixed(1)}%
                        </div>
                        <div style="font-weight: bold; color: #666;">Highest Grade</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2.5rem; color: var(--danger);">
                            ${lowestGrade.toFixed(1)}%
                        </div>
                        <div style="font-weight: bold; color: #666;">Lowest Grade</div>
                    </div>
                </div>
            </div>
            `;
    }

    initIPPECharts(students, level) {
        if (level === 'ippe2') {
            // IPPE II Charts
            const ctxIV = document.getElementById('chartIVAccuracy').getContext('2d');
            new Chart(ctxIV, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                    datasets: [{
                        label: 'Accuracy (%)',
                        data: [88, 92, 95, 98],
                        borderColor: '#1B5E20',
                        tension: 0.4
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });

            const ctxInterventions = document.getElementById('chartInterventions').getContext('2d');
            new Chart(ctxInterventions, {
                type: 'pie',
                data: {
                    labels: ['Dosing', 'Interaction', 'Allergy', 'Other'],
                    datasets: [{
                        data: [40, 30, 20, 10],
                        backgroundColor: ['#1B5E20', '#C5B358', '#dc3545', '#6c757d']
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false }
            });
        } else if (level === 'ippe3') {
            // IPPE III Charts
            const ctxDomains = document.getElementById('chartClinicalDomains').getContext('2d');
            new Chart(ctxDomains, {
                type: 'radar',
                data: {
                    labels: ['Patient Care', 'Knowledge', 'Communication', 'Professionalism', 'Collab'],
                    datasets: [{
                        label: 'Class Avg',
                        data: [4.2, 4.5, 4.0, 4.8, 4.3],
                        backgroundColor: 'rgba(27, 94, 32, 0.2)',
                        borderColor: '#1B5E20'
                    }]
                },
                options: { responsive: true, maintainAspectRatio: false, scales: { r: { min: 0, max: 5 } } }
            });

            const ctxLoad = document.getElementById('chartPatientLoad').getContext('2d');
            new Chart(ctxLoad, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: 'Students',
                        data: Array.from({ length: 20 }, () => ({ x: Math.random() * 10 + 5, y: Math.random() * 5 + 1 })), // Mock data
                        backgroundColor: '#C5B358'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: { title: { display: true, text: 'Cases Logged' } },
                        y: { title: { display: true, text: 'Complexity (1-5)' } }
                    }
                }
            });
        } else {
            // IPPE I Charts (Default)
            // 1. Attendance Chart
            const avgAttendance = students.reduce((acc, s) => acc + (s.attendance || 0), 0) / (students.length || 1);
            const ctxAttendance = document.getElementById('chartAttendance').getContext('2d');
            new Chart(ctxAttendance, {
                type: 'doughnut',
                data: {
                    labels: ['Present', 'Absent'],
                    datasets: [{
                        data: [avgAttendance, 100 - avgAttendance],
                        backgroundColor: ['#1B5E20', '#dc3545'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: 'bottom' }
                    }
                }
            });

            // 2. Performance Chart
            const metrics = {
                'CLO': students.reduce((acc, s) => acc + (Object.values(s.competencies?.clos || {}).reduce((a, b) => a + b, 0) / (Object.values(s.competencies?.clos || {}).length || 1)), 0) / (students.length || 1),
                'Prof': students.reduce((acc, s) => acc + (s.professionalism?.score || 0), 0) / (students.length || 1) * 10, // Scale to 100
                'Mid': students.reduce((acc, s) => acc + (this.store.calculateStudentGrade(s.id)?.components?.midYear?.score || 0), 0) / (students.length || 1),
                'End': students.reduce((acc, s) => acc + (this.store.calculateStudentGrade(s.id)?.components?.endYear?.score || 0), 0) / (students.length || 1),
                'EPA': students.reduce((acc, s) => acc + (Object.values(s.competencies?.epas || {}).reduce((a, b) => a + b, 0) / (Object.values(s.competencies?.epas || {}).length || 1)), 0) / (students.length || 1) * 20 // Scale to 100
            };

            const ctxPerformance = document.getElementById('chartPerformance').getContext('2d');
            new Chart(ctxPerformance, {
                type: 'bar',
                data: {
                    labels: Object.keys(metrics),
                    datasets: [{
                        label: 'Avg Score (%)',
                        data: Object.values(metrics),
                        backgroundColor: '#C5B358',
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: { beginAtZero: true, max: 100 }
                    },
                    plugins: {
                        legend: { display: false }
                    }
                }
            });
        }

        // Common Grade Distribution Chart (All Levels)
        const grades = { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'F': 0 };
        students.forEach(s => {
            const score = this.store.calculateStudentGrade(s.id)?.finalGrade || 0;
            if (score >= 90) grades['A']++;
            else if (score >= 80) grades['B']++;
            else if (score >= 70) grades['C']++;
            else if (score >= 60) grades['D']++;
            else grades['F']++;
        });

        const ctxGrades = document.getElementById('chartGrades').getContext('2d');
        new Chart(ctxGrades, {
            type: 'pie',
            data: {
                labels: Object.keys(grades),
                datasets: [{
                    data: Object.values(grades),
                    backgroundColor: ['#28a745', '#1B5E20', '#ffc107', '#fd7e14', '#dc3545'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right' }
                }
            }
        });
    }

    renderIPPE2_Overview(allStudents, filteredStudents, filterId, level = 'ippe2') {
        allStudents = allStudents || [];
        filteredStudents = filteredStudents || [];

        // Helper to calculate average
        const calcAvg = (list, accessor) => {
            if (!list || !list.length) return 0;
            const validValues = list.map(accessor).filter(v => v !== null && v !== undefined && !isNaN(v));
            if (validValues.length === 0) return 0;
            return validValues.reduce((a, b) => a + b, 0) / validValues.length;
        };

        // 1. Total Enrolled
        const totalEnrolled = filteredStudents.length;

        // Mock Metrics for IPPE II
        const avgIVAccuracy = 94.5;
        const totalMedRecs = 1250;
        const avgMedRecs = (totalMedRecs / (filteredStudents.length || 1)).toFixed(1);
        const totalInteractions = 340;
        const avgInteractions = (totalInteractions / (filteredStudents.length || 1)).toFixed(1);

        const avgSterileCompounding = 88.5;
        const avgProfessionalism = calcAvg(filteredStudents, s => s.professionalism?.score || 0);
        const avgMidYear = 85.2;
        const avgEndYear = 89.5;
        const avgPortfolio = 92.0; // Added from original content
        const avgEPA = 4.1; // Added from original content
        const avgSimulation = 87.5; // Added from original content

        // Grade Ranking (Mock or Real) - Added from original content
        const allGrades = filteredStudents.map(s => this.store.calculateStudentGrade(s.id)?.finalGrade || 0);
        const highestGrade = Math.max(...allGrades, 0);
        const lowestGrade = Math.min(...allGrades, 0);

        return `
                <div class="card mb-4" >
                    <div class="flex-between">
                        <h3>IPPE II: Institutional Overview</h3>
                        <div style="display:flex; align-items:center; gap:1rem;">
                            <label><strong>Filter Student:</strong></label>
                            <select onchange="app.renderHomePage('${level}', 'overview', this.value)" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc;">
                                <option value="all" ${filterId === 'all' ? 'selected' : ''}>All Students</option>
                                ${allStudents.map(s => `<option value="${s.id}" ${filterId === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                            </select>
                        </div>
                    </div>
            </div>

            <!--Statistical Charts Row-->
            <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr); margin-bottom: 2rem;">
                <div class="card">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-green);">IV Admixture Accuracy</h4>
                    <div style="height: 200px; position: relative;">
                        <canvas id="chartIVAccuracy"></canvas>
                    </div>
                </div>
                <div class="card">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-green);">Intervention Types</h4>
                    <div style="height: 200px; position: relative;">
                        <canvas id="chartInterventions"></canvas>
                    </div>
                </div>
                <div class="card">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-green);">Grade Distribution</h4>
                    <div style="height: 200px; position: relative;">
                        <canvas id="chartGrades"></canvas>
                    </div>
                </div>
            </div>

            <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
                <div class="card stat-card">
                    <span class="stat-label">Total Enrolled</span>
                    <span class="stat-value">${totalEnrolled}</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg IV Accuracy</span>
                    <span class="stat-value">${avgIVAccuracy}%</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg Med Recs</span>
                    <span class="stat-value">${avgMedRecs}</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg Interactions</span>
                    <span class="stat-value">${avgInteractions}</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Sterile Compounding</span>
                    <span class="stat-value">${avgSterileCompounding}%</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg Professionalism</span>
                    <span class="stat-value">${avgProfessionalism.toFixed(1)}/10</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg Mid-Year Eval</span>
                    <span class="stat-value">${avgMidYear}%</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg End-Year Eval</span>
                    <span class="stat-value">${avgEndYear}%</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg Portfolio</span>
                    <span class="stat-value">${avgPortfolio}%</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg EPA Score</span>
                    <span class="stat-value">${avgEPA}/5</span>
                </div>
            </div>


            `;
    }

    renderIPPE3_Overview(allStudents, filteredStudents, filterId) {
        const totalEnrolled = filteredStudents.length;
        // Mock metrics for IPPE III
        const soapAvg = 4.2;
        const casesLogged = 850;
        const clinicalInterventions = 420;

        return `
                <div class="card mb-4" >
                    <div class="flex-between">
                        <h3>IPPE III: Clinical Overview</h3>
                        <div style="display:flex; align-items:center; gap:1rem;">
                            <label><strong>Filter Student:</strong></label>
                            <select onchange="app.renderHomePage('ippe3', 'overview', this.value)" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc;">
                                <option value="all" ${filterId === 'all' ? 'selected' : ''}>All Students</option>
                                ${allStudents.map(s => `<option value="${s.id}" ${filterId === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                            </select>
                        </div>
                    </div>
            </div>

            <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr); margin-bottom: 2rem;">
                <div class="card">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-green);">Clinical Domain Performance</h4>
                    <div style="height: 200px; position: relative;">
                        <canvas id="chartClinicalDomains"></canvas>
                    </div>
                </div>
                <div class="card">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-green);">Patient Load vs Complexity</h4>
                    <div style="height: 200px; position: relative;">
                        <canvas id="chartPatientLoad"></canvas>
                    </div>
                </div>
                <div class="card">
                    <h4 style="margin-bottom: 1rem; color: var(--primary-green);">Grade Distribution</h4>
                    <div style="height: 200px; position: relative;">
                        <canvas id="chartGrades"></canvas>
                    </div>
                </div>
            </div>

            <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
                <div class="card stat-card">
                    <span class="stat-label">Total Enrolled</span>
                    <span class="stat-value">${totalEnrolled}</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Avg SOAP Score</span>
                    <span class="stat-value">${soapAvg}/5.0</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Patient Cases</span>
                    <span class="stat-value">${casesLogged}</span>
                </div>
                <div class="card stat-card">
                    <span class="stat-label">Clinical Interventions</span>
                    <span class="stat-value">${clinicalInterventions}</span>
                </div>
            </div>
            `;
    }

    renderIPPE_Tracking(students) {
        return `
                <div class="card" >
                <h3>Student Roster & Attendance</h3>
                <div class="data-table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Group</th>
                                <th>Gender</th>
                                <th>Attendance %</th>
                                <th>Excused</th>
                                <th>Unexcused</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${students.map(s => `
                                <tr>
                                    <td>${s.id}</td>
                                    <td><a href="#" onclick="app.render('student-details', '${s.id}')">${s.name}</a></td>
                                    <td>${s.demographics?.group || '-'}</td>
                                    <td>${s.demographics?.gender || '-'}</td>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                                            <div style="width: 50px; background: #eee; height: 6px; border-radius: 3px;">
                                                <div style="width: ${s.attendance}%; background: ${s.attendance >= 90 ? 'var(--primary-green)' : 'var(--danger)'}; height: 100%; border-radius: 3px;"></div>
                                            </div>
                                            ${s.attendance}%
                                        </div>
                                    </td>
                                    <td>${s.attendanceStats?.excused || 0}</td>
                                    <td>${s.attendanceStats?.unexcused || 0}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
                `;
    }

    renderIPPE_Competency(students) {
        return `
                <div class="card" >
                <h3>Competency & Session Tracking</h3>
                <div class="data-table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Sessions Completed (of 30)</th>
                                <th>Avg CLO Score</th>
                                <th>Avg EPA Level</th>
                                <th>Simulation</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${students.map(s => {
            const sessionsDone = s.competencies?.sessions?.filter(sess => sess.status === 'Completed').length || 0;
            const avgCLO = s.competencies?.clos ? (Object.values(s.competencies.clos).reduce((a, b) => a + b, 0) / Object.values(s.competencies.clos).length) : 0;
            const avgEPA = s.competencies?.epas ? (Object.values(s.competencies.epas).reduce((a, b) => a + b, 0) / Object.values(s.competencies.epas).length) : 0;

            return `
                                <tr>
                                    <td><strong>${s.name}</strong></td>
                                    <td>
                                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                                            <progress value="${sessionsDone}" max="30" style="width: 80px;"></progress>
                                            ${sessionsDone}/30
                                        </div>
                                    </td>
                                    <td>${avgCLO.toFixed(1)}%</td>
                                    <td>${avgEPA.toFixed(1)}/5</td>
                                    <td>${s.assessments?.simulation?.completed ? '<span class="badge-success">Pass</span>' : '<span class="badge-warning">Pending</span>'}</td>
                                </tr>
                                `;
        }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
                `;
    }
    renderIPPE_Assessments(students) {
        return `
                <div class="card" >
                <h3>Assessment Status</h3>
                <div class="data-table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Mid-Year Eval</th>
                                <th>Final Eval</th>
                                <th>Portfolio</th>
                                <th>Final Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${students.map(s => {
            const grades = this.store.calculateStudentGrade(s.id);
            return `
                                <tr>
                                    <td><strong>${s.name}</strong></td>
                                    <td>${grades.components.midYear.score > 0 ? 'Submitted' : 'Pending'}</td>
                                    <td>${grades.components.endYear.score > 0 ? 'Submitted' : 'Pending'}</td>
                                    <td>${grades.components.portfolio.score > 0 ? 'Submitted' : 'Pending'}</td>
                                    <td>
                                        <span class="${grades.finalGrade >= 75 ? 'badge-success' : 'badge-danger'}">
                                            ${grades.finalGrade}%
                                        </span>
                                    </td>
                                </tr>
                                `;
        }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
                `;
    }

    renderIPPE_Admin(students) {
        // Risk Analysis Logic
        const atRiskStudents = students.filter(s => {
            const grade = this.store.calculateStudentGrade(s.id)?.finalGrade || 0;
            return s.attendance < 85 || grade < 75;
        });

        return `
                <div class="dashboard-grid" >
                <div class="card">
                    <h3>📂 Import Student Data (CSV)</h3>
                    <div style="display: flex; gap: 1rem; align-items: center; margin-top: 0.5rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #eee;">
                        <input type="file" id="csvDetails" accept=".csv">
                        <button class="btn btn-primary" onclick="app.handleCSVImport()">Import Data</button>
                        <span id="import-status" style="font-size: 0.9rem;"></span>
                </div>

                <!-- Manual Entry Card -->
                <div class="card" style="border-top: 4px solid var(--primary-gold);">
                    <h3>👤 Add Single Student</h3>
                    <p class="text-muted">Manually add a student. Year Level is auto-assigned.</p>
                    <form onsubmit="event.preventDefault(); app.handleAddManualStudent()" id="manualStudentForm" style="display:grid; gap:1rem;">
                        <input type="text" name="manualId" placeholder="Student ID" required class="form-control" style="padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                        <input type="text" name="manualName" placeholder="Full Name" required class="form-control" style="padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                        <input type="email" name="manualEmail" placeholder="Email (Optional)" class="form-control" style="padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                        <select name="manualCohort" required class="form-control" style="padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                            <option value="">Select Cohort...</option>
                            <option value="IPPE I">IPPE I (Year 1)</option>
                            <option value="IPPE II">IPPE II (Year 2)</option>
                            <option value="IPPE III">IPPE III (Year 3)</option>
                            <option value="APPE">APPE (Year 4)</option>
                        </select>
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.5rem;">
                            <input type="number" name="manualGPA" placeholder="GPA (0-5)" step="0.01" min="0" max="5" class="form-control" style="padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                            <input type="number" name="manualAttendance" placeholder="Attendance %" min="0" max="100" class="form-control" style="padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                            <input type="number" name="manualScore" placeholder="Exam Score %" min="0" max="100" class="form-control" style="padding:0.5rem; border:1px solid #ccc; border-radius:4px;">
                        </div>
                        <button type="submit" class="btn btn-primary">Save Student</button>
                    </form>
                </div>

                <div class="card">
                    <h3>Administrative Actions</h3>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <button class="btn btn-primary" onclick="app.exportReport('pdf')">📄 Export PDF Report</button>
                        <button class="btn btn-outline" onclick="app.exportReport('excel')">📊 Export Excel</button>
                        <button class="btn btn-outline" onclick="alert('Sending Notifications...')">🔔 Send Risk Notifications</button>
                    </div>
                </div>
                <div class="card">
                    <h3>Misconduct & Incidents</h3>
                    <ul style="list-style: none; padding: 0;">
                        ${students.flatMap(s => s.misconduct || []).map(m => `
                            <li style="padding: 0.5rem; border-bottom: 1px solid #eee;">
                                <strong style="color: var(--danger);">${m.type}</strong> - ${m.date}
                                <br><small>${m.action}</small>
                            </li>
                        `).join('') || '<li class="text-muted">No recent incidents.</li>'}
                    </ul>
                </div>
            </div>

                <div class="card" style="margin-top: 2rem; border-left: 4px solid var(--danger);">
                    <h3>⚠️ At-Risk Students Report</h3>
                    <p class="text-muted">Students with < 85% attendance or < 75% grade.</p>
                    <div class="data-table-container">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Student</th>
                                    <th>Issue Type</th>
                                    <th>Value</th>
                                    <th>Action Required</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${atRiskStudents.map(s => {
            const grade = this.store.calculateStudentGrade(s.id)?.finalGrade || 0;
            const issue = s.attendance < 85 ? 'Low Attendance' : 'Failing Grade';
            const value = s.attendance < 85 ? `${s.attendance}%` : `${grade}%`;
            return `
                                    <tr>
                                        <td><strong>${s.name}</strong></td>
                                        <td style="color: var(--danger);">${issue}</td>
                                        <td>${value}</td>
                                        <td><button class="btn btn-sm btn-outline">Contact</button></td>
                                    </tr>
                                `;
        }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
    }

    // --- CSV Import Logic ---
    async handleCSVImport() {
        const fileInput = document.getElementById('csvDetails');
        const statusDiv = document.getElementById('import-status');

        if (!fileInput || !fileInput.files.length) {
            alert('Please select a CSV file first.');
            return;
        }

        const file = fileInput.files[0];
        statusDiv.innerHTML = '<span style="color: blue;">Reading file...</span>';

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target.result;
                const lines = text.split('\n').map(l => l.trim()).filter(l => l);

                if (lines.length < 2) throw new Error('File is empty or missing headers.');

                // Expected Headers: Student ID, Count Index, Full Name, Cohort, Email, Status, Hours Completed
                const headers = lines[0].split(',').map(h => h.trim().toLowerCase());

                // Map headers to keys
                const map = {
                    id: headers.findIndex(h => h.includes('student id') || h.includes('badge')),
                    name: headers.findIndex(h => h.includes('full name') || h.includes('name')),
                    cohort: headers.findIndex(h => h.includes('cohort') || h.includes('level')),
                    email: headers.findIndex(h => h.includes('email')),
                    status: headers.findIndex(h => h.includes('status')),
                    hours: headers.findIndex(h => h.includes('hours'))
                };

                if (map.id === -1 || map.name === -1) throw new Error('Missing required columns: Student ID, Full Name');

                let count = 0;
                let updated = 0;

                const students = this.store.getStudents(); // Get current list

                for (let i = 1; i < lines.length; i++) {
                    const row = lines[i].split(',').map(c => c.trim());
                    if (row.length < headers.length) continue;

                    const id = row[map.id];
                    const existingIndex = students.findIndex(s => s.id === id);

                    const studentData = {
                        id: id,
                        name: row[map.name],
                        cohort: map.cohort > -1 ? row[map.cohort] : 'Unknown',
                        email: map.email > -1 ? row[map.email] : '',
                        status: map.status > -1 ? row[map.status] : 'Active',
                        attendance: 95, // Default for new import
                        gpa: 3.5, // Default
                        hours: map.hours > -1 ? parseInt(row[map.hours]) || 0 : 0
                    };

                    if (existingIndex > -1) {
                        // Update
                        students[existingIndex] = { ...students[existingIndex], ...studentData };
                        updated++;
                    } else {
                        // Add New
                        students.push(studentData);
                        count++;
                    }
                }

                // Save back to store (Simulated persistence)
                this.store.students = students;
                // In a real app, this would use this.store.save() or similar

                statusDiv.innerHTML = `<span style="color: green;">Success! Added ${count} new students, updated ${updated} records. Refreshing...</span>`;

                // Refresh View
                setTimeout(() => {
                    this.renderHomePage(this.currentIPPETab || 'overview');
                }, 1500);

            } catch (err) {
                console.error(err);
                statusDiv.innerHTML = `<span style="color: red;">Error: ${err.message}</span>`;
            }
        };

        reader.readAsText(file);
    }

    // --- Manual Student Entry ---
    handleAddManualStudent() {
        const form = document.getElementById('manualStudentForm');
        if (!form) return;

        const id = form.manualId.value.trim();
        const name = form.manualName.value.trim();
        const email = form.manualEmail.value.trim();
        const cohort = form.manualCohort.value;

        if (!id || !name || !cohort) {
            alert("Please fill in all required fields.");
            return;
        }

        // Duplicate Check
        if (this.store.getStudents().find(s => s.id === id)) {
            alert(`Error: Student ID ${id} already exists.`);
            return;
        }

        // Year Level Logic
        let yearLevel = 1;
        if (cohort.includes('II') || cohort.includes('2')) yearLevel = 2;
        if (cohort.includes('III') || cohort.includes('3')) yearLevel = 3;
        if (cohort === 'APPE') yearLevel = 4;

        // Grade Extraction
        const gpa = parseFloat(form.manualGPA.value) || 0.0; // Default 0 if empty? Or maybe 4.0 if we want optimistic defaults? Let's use 0 to encourage entry or handle explicitly. actually user might leave blank.
        // If blank, let's default to good standing vals? No, explicit entry is better.
        // Re-reading usage: "Allow administrators to input... rather than using default values."
        // So if they input, use it. If not, maybe default.
        const inputGPA = form.manualGPA.value ? parseFloat(form.manualGPA.value) : 4.0;
        const inputAttendance = form.manualAttendance.value ? parseFloat(form.manualAttendance.value) : 100;
        const inputScore = form.manualScore.value ? parseFloat(form.manualScore.value) : 95;

        // Risk Calculation
        let risk = 'low';
        if (inputGPA < 3.0 || inputAttendance < 85 || inputScore < 70) risk = 'high';
        else if (inputGPA < 3.5 || inputAttendance < 90) risk = 'medium';

        const newStudent = {
            id,
            name,
            cohort,
            email,
            yearLevel, // Added Context
            status: risk === 'high' ? 'At Risk' : 'Active',
            attendance: inputAttendance,
            gpa: inputGPA,
            completedRotations: 0,
            risk: risk,
            finalGrade: inputScore // Store as finalGrade roughly
        };

        // Save
        this.store.addStudent(newStudent); // Assuming addStudent exists, or push to array
        // Fallback if addStudent is not on store in this context:
        if (!this.store.addStudent) this.store.students.push(newStudent);

        alert(`✅ Student Added Successfully!\n\nName: ${name}\nCohort: ${cohort}\nGPA: ${inputGPA}\nRisk Status: ${risk.toUpperCase()}`);
        form.reset();

        // Refresh Current View
        this.renderHomePage(this.currentIPPETab || 'overview');
    }

    // --- PDF Report Generation ---
    generateStudentPDF(studentId) {
        const student = this.store.getStudents().find(s => s.id === studentId);
        if (!student) return;

        // Determine Historical Context based on current Level
        let historyHtml = '';
        const levels = ['Year 1 (IPPE I)', 'Year 2 (IPPE II)', 'Year 3 (IPPE III)', 'Year 4 (APPE)'];
        // Simple logic: render rows for current and past years
        for (let i = 1; i <= (student.yearLevel || 1); i++) {
            historyHtml += `
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px;">${levels[i - 1]}</td>
                    <td style="padding: 10px;">Completed</td>
                    <td style="padding: 10px;">Pass</td>
                    <td style="padding: 10px;">-</td>
                </tr>
             `;
        }

        const reportContent = `
            <html>
            <head>
                <title>Official Student Report - ${student.id}</title>
                <style>
                    body { font-family: 'Times New Roman', serif; padding: 40px; color: #333; }
                    .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 30px; }
                    .logo { font-size: 24px; font-weight: bold; color: #1a4d2e; } // KSAU Green approx
                    .sub-logo { font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-top: 5px; }
                    .report-title { text-align: center; font-size: 20px; font-weight: bold; margin-bottom: 30px; text-decoration: underline; }
                    .section { margin-bottom: 25px; }
                    .section-title { font-weight: bold; background: #f0f0f0; padding: 5px 10px; border-left: 4px solid #333; margin-bottom: 10px; }
                    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
                    .info-item label { font-weight: bold; display: block; font-size: 12px; color: #666; }
                    .info-item span { font-size: 16px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                    th { text-align: left; background: #eee; padding: 8px; border-bottom: 2px solid #333; font-size: 12px; }
                    td { padding: 8px; border-bottom: 1px solid #ddd; font-size: 14px; }
                    .footer { margin-top: 50px; border-top: 1px solid #ccc; padding-top: 20px; display: flex; justify-content: space-between; font-size: 12px; }
                    .watermark { position: absolute; top: 40%; left: 30%; transform: rotate(-45deg); font-size: 80px; color: rgba(0,0,0,0.05); border: 5px solid rgba(0,0,0,0.05); padding: 20px; }
                </style>
            </head>
            <body>
                <div class="watermark">OFFICIAL</div>
                
                <div class="header">
                    <div class="logo">KSAU-HS | Clinical Affairs</div>
                    <div class="sub-logo">College of Pharmacy</div>
                </div>

                <div class="report-title">Student Performance Record</div>

                <div class="section">
                    <div class="section-title">Student Information</div>
                    <div class="info-grid">
                        <div class="info-item"><label>Full Name</label><span>${student.name}</span></div>
                        <div class="info-item"><label>Student ID</label><span>${student.id}</span></div>
                        <div class="info-item"><label>Cohort / Level</label><span>${student.cohort || 'N/A'}</span></div>
                        <div class="info-item"><label>Current Status</label><span>${student.status || 'Active'}</span></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">Academic Summary</div>
                    <div class="info-grid">
                        <div class="info-item"><label>Cumulative GPA</label><span>${student.gpa || 'N/A'} / 5.00</span></div>
                        <div class="info-item"><label>Attendance Rate</label><span>${student.attendance || 0}%</span></div>
                        <div class="info-item"><label>Completed Rotations</label><span>${student.completedRotations || 0}</span></div>
                        <div class="info-item"><label>Total Clinical Hours</label><span>${student.hours || 0}</span></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">Progression History</div>
                    <table>
                        <thead>
                            <tr>
                                <th>Year / Level</th>
                                <th>Status</th>
                                <th>Outcome</th>
                                <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                           ${historyHtml}
                        </tbody>
                    </table>
                </div>

                <div class="footer">
                    <div>Generated on: ${new Date().toLocaleDateString()}</div>
                    <div style="text-align:center;">
                        __________________________<br>
                        <strong>Dr. Hisham Aljadhey</strong><br>
                        Dean, College of Pharmacy
                    </div>
                    <div style="text-align:center;">
                        __________________________<br>
                        <strong>Clinical Affairs Office</strong><br>
                        Verified Signature
                    </div>
                </div>
                <script>window.onload = function() { window.print(); }</script>
            </body>
            </html>
        `;

        const printWindow = window.open('', '_blank');
        printWindow.document.write(reportContent);
        printWindow.document.close();
    }

    // --- PDF Report Generation ---
    generateStudentPDF(studentId) {
        const student = this.store.getStudents().find(s => s.id === studentId);
        if (!student) return;

        // Determine Historical Context based on current Level
        let historyHtml = '';
        const levels = ['Year 1 (IPPE I)', 'Year 2 (IPPE II)', 'Year 3 (IPPE III)', 'Year 4 (APPE)'];
        // Simple logic: render rows for current and past years
        for (let i = 1; i <= (student.yearLevel || 1); i++) {
            historyHtml += `
                <tr style="border-bottom: 1px solid #ddd;">
                    <td style="padding: 10px;">${levels[i - 1]}</td>
                    <td style="padding: 10px;">Completed</td>
                    <td style="padding: 10px;">Pass</td>
                    <td style="padding: 10px;">-</td>
                </tr>
             `;
        }

        const reportContent = `
            <html>
            <head>
                <title>Official Student Report - ${student.id}</title>
                <style>
                    body { font-family: 'Times New Roman', serif; padding: 40px; color: #333; }
                    .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 30px; }
                    .logo { font-size: 24px; font-weight: bold; color: #1a4d2e; } 
                    .sub-logo { font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin-top: 5px; }
                    .report-title { text-align: center; font-size: 20px; font-weight: bold; margin-bottom: 30px; text-decoration: underline; }
                    .section { margin-bottom: 25px; }
                    .section-title { font-weight: bold; background: #f0f0f0; padding: 5px 10px; border-left: 4px solid #333; margin-bottom: 10px; }
                    .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
                    .info-item label { font-weight: bold; display: block; font-size: 12px; color: #666; }
                    .info-item span { font-size: 16px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                    th { text-align: left; background: #eee; padding: 8px; border-bottom: 2px solid #333; font-size: 12px; }
                    td { padding: 8px; border-bottom: 1px solid #ddd; font-size: 14px; }
                    .footer { margin-top: 50px; border-top: 1px solid #ccc; padding-top: 20px; display: flex; justify-content: space-between; font-size: 12px; }
                    .watermark { position: absolute; top: 40%; left: 30%; transform: rotate(-45deg); font-size: 80px; color: rgba(0,0,0,0.05); border: 5px solid rgba(0,0,0,0.05); padding: 20px; }
                </style>
            </head>
            <body>
                <div class="watermark">OFFICIAL</div>
                
                <div class="header">
                    <div class="logo">KSAU-HS | Clinical Affairs</div>
                    <div class="sub-logo">College of Pharmacy</div>
                </div>

                <div class="report-title">Student Performance Record</div>

                <div class="section">
                    <div class="section-title">Student Information</div>
                    <div class="info-grid">
                        <div class="info-item"><label>Full Name</label><span>${student.name}</span></div>
                        <div class="info-item"><label>Student ID</label><span>${student.id}</span></div>
                        <div class="info-item"><label>Cohort / Level</label><span>${student.cohort || 'N/A'}</span></div>
                        <div class="info-item"><label>Current Status</label><span>${student.status || 'Active'}</span></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">Academic Summary</div>
                    <div class="info-grid">
                        <div class="info-item"><label>Cumulative GPA</label><span>${student.gpa || 'N/A'} / 5.00</span></div>
                        <div class="info-item"><label>Attendance Rate</label><span>${student.attendance || 0}%</span></div>
                        <div class="info-item"><label>Completed Rotations</label><span>${student.completedRotations || 0}</span></div>
                        <div class="info-item"><label>Total Clinical Hours</label><span>${student.hours || 0}</span></div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">Progression History</div>
                    <table>
                        <thead>
                            <tr>
                                <th>Year / Level</th>
                                <th>Status</th>
                                <th>Outcome</th>
                                <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                           ${historyHtml}
                        </tbody>
                    </table>
                </div>

                <div class="footer">
                    <div>Generated on: ${new Date().toLocaleDateString()}</div>
                    <div style="text-align:center;">
                        __________________________<br>
                        <strong>Dr. Hisham Aljadhey</strong><br>
                        Dean, College of Pharmacy
                    </div>
                    <div style="text-align:center;">
                        __________________________<br>
                        <strong>Clinical Affairs Office</strong><br>
                        Verified Signature
                    </div>
                </div>
                <script>window.onload = function() { window.print(); }</script>
            </body>
            </html>
        `;

        const printWindow = window.open('', '_blank');
        printWindow.document.write(reportContent);
        printWindow.document.close();
    }

    renderPharmaScienceDashboard() {
        this.title.textContent = 'Dept. of Pharmaceutical Sciences';

        // --- Mock Data ---
        const researchData = {
            years: ['2020', '2021', '2022', '2023', '2024'],
            publications: [12, 18, 25, 30, 42],
            citations: [45, 80, 150, 320, 510]
        };

        const grantData = {
            labels: ['Internal Funding (KSAU-HS)', 'External Funding (KACST, etc.)'],
            values: [450000, 1200000] // SAR
        };

        const supervisionData = {
            labels: ['Undergraduate Projects', 'Master Theses', 'PhD Dissertations'],
            values: [45, 12, 3]
        };

        const developmentData = {
            labels: ['Conferences', 'Workshops', 'Awards', 'Leadership Roles', 'Community Service'],
            values: [15, 22, 5, 8, 12]
        };

        // --- Render Layout ---
        this.root.innerHTML = `
                <div class="dashboard-container" >
                <!--Header Stats-->
                <div class="dashboard-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 2rem;">
                    <div class="card stat-card">
                        <span class="stat-label">Total Publications</span>
                        <span class="stat-value">127</span>
                        <span class="stat-trend trend-up">↑ 15% vs LY</span>
                    </div>
                    <div class="card stat-card">
                        <span class="stat-label">Total Grant Funding</span>
                        <span class="stat-value">1.65M <small style="font-size:0.9rem; color:#888;">SAR</small></span>
                    </div>
                    <div class="card stat-card">
                        <span class="stat-label">Active Research Groups</span>
                        <span class="stat-value">5</span>
                    </div>
                    <div class="card stat-card">
                        <span class="stat-label">Faculty Awards</span>
                        <span class="stat-value">8</span>
                        <span class="stat-trend trend-up">↑ 2</span>
                    </div>
                </div>

                <!--Charts Grid-->
                <div class="dashboard-grid" style="grid-template-columns: 1fr 1fr; grid-gap: 1.5rem;">

                    <!-- 1. Research Outcomes -->
                    <div class="card">
                        <h3>📈 Research Output & Impact</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartResearch"></canvas>
                        </div>
                        <p style="margin-top:1rem; color:#666; font-size:0.9rem;">
                            Consistent growth in high-impact publications over the last 5 years.
                        </p>
                    </div>

                    <!-- 2. Grant Funding -->
                    <div class="card">
                        <h3>💰 Grant Funding Sources</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartGrants"></canvas>
                        </div>
                        <p style="margin-top:1rem; color:#666; font-size:0.9rem; text-align:center;">
                            Total: <strong>1,650,000 SAR</strong> (73% External)
                        </p>
                    </div>

                    <!-- 3. Student Supervision -->
                    <div class="card">
                        <h3>🎓 Student Supervision</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartSupervision"></canvas>
                        </div>
                    </div>

                    <!-- 4. Professional Development -->
                    <div class="card">
                        <h3>🏆 Professional Development</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartDev"></canvas>
                        </div>
                    </div>

                </div>
            </div>
                `;

        // --- Initialize Charts ---

        // 1. Research Line Chart
        new Chart(document.getElementById('chartResearch'), {
            type: 'line',
            data: {
                labels: researchData.years,
                datasets: [
                    {
                        label: 'Publications',
                        data: researchData.publications,
                        borderColor: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        fill: true,
                        tension: 0.4,
                        yAxisID: 'y'
                    },
                    {
                        label: 'Citations',
                        data: researchData.citations,
                        borderColor: '#2ecc71',
                        borderDash: [5, 5],
                        fill: false,
                        tension: 0.4,
                        yAxisID: 'y1'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: { mode: 'index', intersect: false },
                scales: {
                    y: { type: 'linear', display: true, position: 'left', title: { display: true, text: 'Publications' } },
                    y1: { type: 'linear', display: true, position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'Citations' } }
                }
            }
        });

        // 2. Grants Doughnut
        new Chart(document.getElementById('chartGrants'), {
            type: 'doughnut',
            data: {
                labels: grantData.labels,
                datasets: [{
                    data: grantData.values,
                    backgroundColor: ['#f1c40f', '#8e44ad'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%',
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });

        // 3. Supervision Bar
        new Chart(document.getElementById('chartSupervision'), {
            type: 'bar',
            data: {
                labels: supervisionData.labels,
                datasets: [{
                    label: 'Students Supervised',
                    data: supervisionData.values,
                    backgroundColor: ['#e67e22', '#16a085', '#2c3e50'],
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });

        // 4. Development Polar Area
        new Chart(document.getElementById('chartDev'), {
            type: 'polarArea',
            data: {
                labels: developmentData.labels,
                datasets: [{
                    data: developmentData.values,
                    backgroundColor: [
                        'rgba(231, 76, 60, 0.7)',
                        'rgba(52, 152, 219, 0.7)',
                        'rgba(241, 196, 15, 0.7)',
                        'rgba(155, 89, 182, 0.7)',
                        'rgba(46, 204, 113, 0.7)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { r: { ticks: { display: false } } },
                plugins: {
                    legend: { position: 'right' }
                }
            }
        });
    }

    // --- NEW ENHANCED METHOD WITH EDIT MODE ---
    renderPharmaScienceDashboardEnhanced() {
        this.title.innerHTML = `
            Dept.of Pharmaceutical Sciences
                <button onclick = "window.app.renderPharmaEditMode()" class="btn btn-sm btn-outline" style = "margin-left: 1rem; font-size: 0.8rem;" >✏️ Edit Data</button >
                    `;

        // --- Use State Data ---
        const data = this.pharmaData;

        // Fallback if state not initialized (safety check)
        if (!data) {
            console.error("Pharma Data not initialized");
            return;
        }

        const researchData = {
            years: data.research.years,
            q1: data.research.q1,
            q2: data.research.q2,
            q3: data.research.q3,
            citations: data.research.citations
        };

        const grantData = {
            funnelLabels: ['Proposals Submitted', 'Under Review', 'Awarded'],
            funnelValues: data.grants.funnelValues,
            fundingSources: data.grants.fundingSources
        };

        const supervisionData = {
            labels: ['Undergraduate Projects', 'Master Theses', 'PhD Dissertations'],
            values: data.supervision.values
        };

        const collaborations = data.collaborations;

        // --- Render Layout ---
        this.root.innerHTML = `
                    <div class="dashboard-container" >
                <!--Header Stats-->
                <div class="dashboard-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 2rem;">
                    <div class="card stat-card">
                        <span class="stat-label">High-Impact Pubs (Q1)</span>
                        <span class="stat-value">${researchData.q1[researchData.q1.length - 1]}</span>
                        <span class="stat-trend trend-up">Current Year</span>
                    </div>
                    <div class="card stat-card">
                        <span class="stat-label">Grant Success Rate</span>
                        <span class="stat-value">${Math.round((grantData.funnelValues[2] / grantData.funnelValues[0]) * 100)}%</span>
                        <span class="stat-trend trend-neutral">${grantData.funnelValues[2]} Awarded</span>
                    </div>
                    <div class="card stat-card">
                        <span class="stat-label">Active Collaborations</span>
                        <span class="stat-value">${collaborations.length}</span>
                        <span class="stat-trend">Intl. Partners</span>
                    </div>
                    <div class="card stat-card">
                        <span class="stat-label">Total Funding</span>
                        <span class="stat-value">${((grantData.fundingSources[0] + grantData.fundingSources[1]) / 1000000).toFixed(2)}M</span>
                        <span class="stat-trend trend-up">SAR</span>
                    </div>
                </div>

                <!--Charts Grid-->
                <div class="dashboard-grid" style="grid-template-columns: 1fr 1fr; grid-gap: 1.5rem;">

                    <!-- 1. Research Outcomes (Q-Index Stacked) -->
                    <div class="card">
                        <h3>📈 Research Quality (Q-Index)</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartResearch"></canvas>
                        </div>
                        <p style="margin-top:1rem; color:#666; font-size:0.9rem;">
                            High-Impact (Q1) Publications Track.
                        </p>
                    </div>

                    <!-- 2. Grant Success Funnel -->
                    <div class="card">
                        <h3>💰 Grant Success Funnel</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartGrants"></canvas>
                        </div>
                        <p style="margin-top:1rem; color:#666; font-size:0.9rem; text-align:center;">
                            Total Funding Secured: <strong>${((grantData.fundingSources[0] + grantData.fundingSources[1]) / 1000).toLocaleString()} K SAR</strong>
                        </p>
                    </div>

                    <!-- 3. Student Supervision -->
                    <div class="card">
                        <h3>🎓 Supervision Load</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartSupervision"></canvas>
                        </div>
                    </div>

                    <!-- 4. Global Collaborations (New) -->
                    <div class="card">
                        <h3>🌍 Global Collaborations</h3>
                        <div style="height: 300px; overflow-y:auto; padding-right:0.5rem;">
                            <ul style="list-style:none; padding:0;">
                                ${collaborations.map(c => `
                                    <li style="display:flex; align-items:center; padding: 1rem; border-bottom: 1px solid #eee; gap: 1rem;">
                                        <span style="font-size: 2rem;">${c.flag}</span>
                                        <div>
                                            <div style="font-weight:bold; font-size:1.05rem;">${c.institution}</div>
                                            <div style="color:#666; font-size:0.9rem;">${c.country} • ${c.type}</div>
                                        </div>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        <div style="text-align:center; padding-top:1rem;">
                            <button class="btn btn-sm btn-outline">View All Agreements</button>
                        </div>
                    </div>

                </div>
            </div>
                `;

        // --- Initialize Charts ---

        // 1. Research Stacked Bar (Q-Index)
        new Chart(document.getElementById('chartResearch'), {
            type: 'bar',
            data: {
                labels: researchData.years,
                datasets: [
                    { label: 'Q1 (High Impact)', data: researchData.q1, backgroundColor: '#27ae60' }, // Green
                    { label: 'Q2', data: researchData.q2, backgroundColor: '#f1c40f' }, // Yellow
                    { label: 'Q3', data: researchData.q3, backgroundColor: '#e67e22' }  // Orange
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: { stacked: true },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        title: { display: true, text: 'Number of Publications' }
                    }
                },
                plugins: {
                    legend: { position: 'top' },
                    tooltip: { mode: 'index', intersect: false }
                }
            }
        });

        // 2. Grant Funnel (Horizontal Bar)
        new Chart(document.getElementById('chartGrants'), {
            type: 'bar',
            data: {
                labels: grantData.funnelLabels,
                datasets: [{
                    label: 'Count',
                    data: grantData.funnelValues,
                    backgroundColor: ['#95a5a6', '#3498db', '#2ecc71'], // Grey -> Blue -> Green
                    borderRadius: 4,
                    barPercentage: 0.6
                }]
            },
            options: {
                indexAxis: 'y', // Horizontal Chart
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { display: false }, // Hide x axis for cleaner funnel look
                    y: { grid: { display: false } }
                }
            }
        });

        // 3. Supervision Bar
        new Chart(document.getElementById('chartSupervision'), {
            type: 'bar',
            data: {
                labels: supervisionData.labels,
                datasets: [{
                    label: 'Students Supervised',
                    data: supervisionData.values,
                    backgroundColor: ['#e67e22', '#16a085', '#2c3e50'],
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });
    }

    renderPharmaEditMode() {
        this.title.textContent = 'Edit Dashboard Data';
        const data = this.pharmaData;

        this.root.innerHTML = `
                <div class="card" style = "max-width: 800px; margin: 0 auto;" >
                <h3>✏️ Update Metrics</h3>
                <form id="pharma-edit-form" style="display:grid; gap:1.5rem; margin-top:1rem;">
                    
                    <!-- Research Section -->
                    <fieldset style="border:1px solid #eee; padding:1rem; border-radius:8px;">
                        <legend style="font-weight:bold; color:var(--primary-blue);">Research Output (Last 5 Years)</legend>
                        <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:0.5rem; text-align:center;">
                            <label>Year</label>
                            <label>Q1</label>
                            <label>Q2</label>
                            <label>Q3</label>
                            <label>Citations</label>
                            
                            ${data.research.years.map((year, i) => `
                                <span>${year}</span>
                                <input type="number" name="q1_${i}" value="${data.research.q1[i]}" style="width:100%">
                                <input type="number" name="q2_${i}" value="${data.research.q2[i]}" style="width:100%">
                                <input type="number" name="q3_${i}" value="${data.research.q3[i]}" style="width:100%">
                                <input type="number" name="cit_${i}" value="${data.research.citations[i]}" style="width:100%">
                            `).join('')}
                        </div>
                    </fieldset>

                    <!-- Grants Section -->
                    <fieldset style="border:1px solid #eee; padding:1rem; border-radius:8px;">
                        <legend style="font-weight:bold; color:var(--primary-blue);">Grant Success Funnel</legend>
                        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:1rem;">
                            <div>
                                <label>Submitted</label>
                                <input type="number" name="grant_submit" value="${data.grants.funnelValues[0]}" style="width:100%">
                            </div>
                            <div>
                                <label>Under Review</label>
                                <input type="number" name="grant_review" value="${data.grants.funnelValues[1]}" style="width:100%">
                            </div>
                            <div>
                                <label>Awarded</label>
                                <input type="number" name="grant_awarded" value="${data.grants.funnelValues[2]}" style="width:100%">
                            </div>
                        </div>
                    </fieldset>

                     <!-- Supervision Section -->
                    <fieldset style="border:1px solid #eee; padding:1rem; border-radius:8px;">
                        <legend style="font-weight:bold; color:var(--primary-blue);">Student Supervision</legend>
                        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:1rem;">
                            <div>
                                <label>Undergrad Projects</label>
                                <input type="number" name="sup_undergrad" value="${data.supervision.values[0]}" style="width:100%">
                            </div>
                            <div>
                                <label>Master Theses</label>
                                <input type="number" name="sup_master" value="${data.supervision.values[1]}" style="width:100%">
                            </div>
                            <div>
                                <label>PhD Dissertations</label>
                                <input type="number" name="sup_phd" value="${data.supervision.values[2]}" style="width:100%">
                            </div>
                        </div>
                    </fieldset>

                    <div style="display:flex; justify-content:flex-end; gap:1rem; margin-top:1rem;">
                        <button type="button" onclick="window.app.renderPharmaScienceDashboardEnhanced()" class="btn btn-outline">Cancel</button>
                        <button type="button" onclick="window.app.handlePharmaSave()" class="btn btn-primary">Save Changes</button>
                    </div>
                </form>
            </div>
                `;
    }

    handlePharmaSave() {
        const form = document.getElementById('pharma-edit-form');

        // Manual extraction for simplicity in this context
        const inputs = form.querySelectorAll('input');
        const values = {};
        inputs.forEach(input => {
            values[input.name] = parseInt(input.value) || 0;
        });

        // Update State
        // Research
        const yearsCount = 5;
        for (let i = 0; i < yearsCount; i++) {
            this.pharmaData.research.q1[i] = values[`q1_${i} `];
            this.pharmaData.research.q2[i] = values[`q2_${i} `];
            this.pharmaData.research.q3[i] = values[`q3_${i} `];
            this.pharmaData.research.citations[i] = values[`cit_${i} `];
        }

        // Grants
        this.pharmaData.grants.funnelValues = [
            values['grant_submit'],
            values['grant_review'],
            values['grant_awarded']
        ];

        // Supervision
        this.pharmaData.supervision.values = [
            values['sup_undergrad'],
            values['sup_master'],
            values['sup_phd']
        ];

        // Return to Dashboard
        this.renderPharmaScienceDashboardEnhanced();
    }

    // --- V2: ENHANCED DASHBOARD WITH RADAR CHART & ANIMATIONS ---
    renderPharmaScienceDashboardEnhanced_v2() {
        this.title.innerHTML = `
            Dept.of Pharmaceutical Sciences
                <button onclick = "window.app.renderPharmaEditMode_v2()" class="btn btn-sm btn-outline" style = "margin-left: 1rem; font-size: 0.8rem;" >✏️ Edit Data</button >
                    `;

        const data = this.pharmaData;
        if (!data) { console.error("Pharma Data not initialized"); return; }

        // Mapped Data
        const researchData = {
            years: data.research.years,
            q1: data.research.q1,
            q2: data.research.q2,
            q3: data.research.q3,
            publications: data.research.q1.map((v, i) => v + data.research.q2[i] + data.research.q3[i]) // Total
        };

        const grantData = {
            funnelLabels: ['Proposals Submitted', 'Under Review', 'Awarded'],
            funnelValues: data.grants.funnelValues,
            fundingSources: data.grants.fundingSources
        };

        const supervisionData = {
            labels: ['Student Research (Undergrad)', 'Master Theses', 'PhD Dissertations'],
            values: data.supervision.values
        };

        const devData = {
            labels: data.development.labels,
            values: data.development.values
        };

        const collaborations = data.collaborations;

        // --- Animations CSS ---
        const style = `
                    <style >
                .fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; transform: translateY(20px); }
                .delay-1 { animation-delay: 0.1s; }
                .delay-2 { animation-delay: 0.2s; }
                .delay-3 { animation-delay: 0.3s; }
                .delay-4 { animation-delay: 0.4s; }
            @keyframes fadeInUp {
                    to { opacity: 1; transform: translateY(0); }
            }
            </style >
                `;

        this.root.innerHTML = style + `
                <div class="dashboard-container" >
                
                <!--1. Header Stats(KPIs)-->
                <div class="dashboard-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 2rem;">
                    <div class="card stat-card fade-in-up delay-1">
                        <span class="stat-label">Total Publications (2024)</span>
                        <span class="stat-value">${researchData.publications[researchData.publications.length - 1]}</span>
                        <span class="stat-trend trend-up">High Impact (Q1): ${researchData.q1[researchData.q1.length - 1]}</span>
                    </div>
                    <div class="card stat-card fade-in-up delay-2">
                        <span class="stat-label">External Grant Funding</span>
                        <span class="stat-value">${(grantData.fundingSources[1] / 1000000).toFixed(2)}M</span>
                        <span class="stat-trend trend-neutral">SAR</span>
                    </div>
                    <div class="card stat-card fade-in-up delay-3">
                        <span class="stat-label">Student Researchers</span>
                        <span class="stat-value">${supervisionData.values[0]}</span>
                        <span class="stat-trend">Undergraduate</span>
                    </div>
                    <div class="card stat-card fade-in-up delay-4">
                        <span class="stat-label">Awards & Recognition</span>
                        <span class="stat-value">${devData.values[2]}</span>
                        <span class="stat-trend trend-up">Faculty Awards</span>
                    </div>
                </div>

                <!--2. Main Visualizations-->
                <div class="dashboard-grid" style="grid-template-columns: 1fr 1fr; grid-gap: 1.5rem;">
                    
                    <!-- Research Quality (Stacked Bar) -->
                    <div class="card fade-in-up delay-1">
                        <h3>📈 Research Outcomes & Quality</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartResearch"></canvas>
                        </div>
                        <p style="margin-top:1rem; color:#666; font-size:0.9rem; text-align:center;">
                            Focus on <strong>Q1/Q2</strong> High-Impact Journals
                        </p>
                    </div>

                    <!-- Grant Funnel (Funnel/Bar) -->
                    <div class="card fade-in-up delay-2">
                        <h3>💰 Grant Success Pipeline</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartGrants"></canvas>
                        </div>
                    </div>

                    <!-- Professional Profile (Radar Chart - NEW) -->
                    <div class="card fade-in-up delay-3">
                        <h3>🏆 Professional & Academic Development</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartRadar"></canvas>
                        </div>
                        <p style="margin-top:1rem; color:#666; font-size:0.9rem; text-align:center;">
                            Balanced portfolio of <strong>Service, Leadership, and Scholarship</strong>.
                        </p>
                    </div>

                    <!-- Student Supervision (Bar) -->
                    <div class="card fade-in-up delay-4">
                        <h3>🎓 Supervision & Mentorship</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartSupervision"></canvas>
                        </div>
                    </div>

                </div>

                <!--3. Global Collaborations List-->
                 <div class="card fade-in-up delay-4" style="margin-top: 1.5rem;">
                    <h3>🌍 International Collaborations</h3>
                    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:1rem; margin-top:1rem;">
                        ${collaborations.map(c => `
                            <div style="display:flex; align-items:center; padding: 1rem; border: 1px solid #eee; border-radius:8px; background:#fafafa;">
                                <span style="font-size: 2.5rem; margin-right:1rem;">${c.flag}</span>
                                <div>
                                    <div style="font-weight:bold; color:#333;">${c.institution}</div>
                                    <div style="color:#666; font-size:0.85rem;">${c.country}</div>
                                    <div style="color:var(--primary-blue); font-size:0.8rem; font-weight:bold;">${c.type}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!--4. Faculty Directory(NEW)-->
                <div class="card fade-in-up delay-4" style="margin-top: 1.5rem;">
                    <h3>📋 Department Faculty</h3>
                    <div style="margin-top:1rem; overflow-x:auto;">
                        <table style="width:100%; border-collapse: collapse; font-size: 0.95rem;">
                            <thead>
                                <tr style="background:#f8f9fa; border-bottom: 2px solid #eee;">
                                    <th style="padding:1rem; text-align:left;">Name</th>
                                    <th style="padding:1rem; text-align:left;">Academic Rank / Role</th>
                                    <th style="padding:1rem; text-align:center;">Teaching Load</th>
                                    <th style="padding:1rem; text-align:left;">Email Contact</th>
                                    <th style="padding:1rem; text-align:right;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${data.faculty ? data.faculty.map(f => {
            const metrics = this._getFacultyMetrics(f.email);
            return `
                                    <tr style="border-bottom: 1px solid #eee; transition: background 0.2s;">
                                        <td style="padding:1rem; font-weight:bold; color:var(--primary-blue);">
                                            <div style="display:flex; align-items:center; gap:0.5rem;">
                                                <div style="width:32px; height:32px; background:#e3f2fd; border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--primary-blue); font-size:0.8rem;">👨‍⚕️</div>
                                                ${f.name}
                                            </div>
                                        </td>
                                        <td style="padding:1rem;">${f.role}</td>
                                        <td style="padding:1rem; text-align:center;">
                                            <span class="badge-secondary" style="background:#e3f2fd; color:#1565c0;">${metrics.teachingLoad || 0} Hrs</span>
                                        </td>
                                        <td style="padding:1rem; color:#666;">${f.email}</td>
                                        <td style="padding:1rem; text-align:right; display:flex; gap:0.5rem; justify-content:flex-end;">
                                            <button onclick="window.app.renderFacultyProfile('${f.email}')" class="btn btn-sm btn-outline">📊 View Profile</button>
                                            <a href="mailto:${f.email}" class="btn btn-sm btn-outline" title="Email">✉️</a>
                                        </td>
                                    </tr>
                                `}).join('') : '<tr><td colspan="5" style="padding:1rem;">No faculty data available.</td></tr>'}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
                `;

        // --- Initialize Charts ---

        // 1. Research (Stacked)
        new Chart(document.getElementById('chartResearch'), {
            type: 'bar',
            data: {
                labels: researchData.years,
                datasets: [
                    { label: 'Q1 (High Impact)', data: researchData.q1, backgroundColor: '#2e7d32' },
                    { label: 'Q2', data: researchData.q2, backgroundColor: '#66bb6a' },
                    { label: 'Q3', data: researchData.q3, backgroundColor: '#a5d6a7' }
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                scales: { x: { stacked: true }, y: { stacked: true } }
            }
        });

        // 2. Grant Funnel
        new Chart(document.getElementById('chartGrants'), {
            type: 'bar',
            data: {
                labels: grantData.funnelLabels,
                datasets: [{
                    label: 'Proposals',
                    data: grantData.funnelValues,
                    backgroundColor: ['#90a4ae', '#42a5f5', '#26a69a'],
                    borderRadius: 4
                }]
            },
            options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });

        // 3. Professional Profile (Radar)
        new Chart(document.getElementById('chartRadar'), {
            type: 'radar',
            data: {
                labels: devData.labels,
                datasets: [{
                    label: 'Activity Score',
                    data: devData.values,
                    fill: true,
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    pointBackgroundColor: 'rgba(52, 152, 219, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { display: true },
                        suggestedMin: 0,
                        suggestedMax: 20
                    }
                }
            }
        });

        // 4. Supervision
        new Chart(document.getElementById('chartSupervision'), {
            type: 'bar',
            data: {
                labels: supervisionData.labels,
                datasets: [{
                    label: 'Students',
                    data: supervisionData.values,
                    backgroundColor: ['#ff7043', '#ab47bc', '#5c6bc0'],
                    borderRadius: 6
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });
    }

    renderPharmaEditMode_v2() {
        this.title.textContent = 'Edit Dashboard Data';
        const data = this.pharmaData;

        this.root.innerHTML = `
                <div class="card fade-in-up" style = "max-width: 900px; margin: 0 auto; border-top: 4px solid var(--primary-gold);" >
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                    <h3>✏️ Update Department Metrics</h3>
                    <button onclick="window.app.renderPharmaScienceDashboardEnhanced_v2()" class="btn btn-sm btn-outline">Cancel</button>
                </div>
                
                <form id="pharma-edit-form" style="display:grid; gap:2rem;">
                    
                    <!-- 1. Research -->
                    <div class="edit-section">
                        <h4 style="border-bottom:1px solid #eee; padding-bottom:0.5rem; margin-bottom:1rem; color:var(--primary-blue);">1. Research Output (Publications)</h4>
                        <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:0.5rem; text-align:center;">
                            <label style="font-weight:bold;">Year</label>
                            <label style="font-weight:bold; color:#2e7d32;">Q1</label>
                            <label style="font-weight:bold; color:#66bb6a;">Q2</label>
                            <label style="font-weight:bold; color:#a5d6a7;">Q3</label>
                            <label style="font-weight:bold;">Citations</label>
                            
                            ${data.research.years.map((year, i) => `
                                <div style="font-weight:bold; padding-top:0.5rem;">${year}</div>
                                <input type="number" name="q1_${i}" value="${data.research.q1[i]}" style="width:100%; text-align:center;">
                                <input type="number" name="q2_${i}" value="${data.research.q2[i]}" style="width:100%; text-align:center;">
                                <input type="number" name="q3_${i}" value="${data.research.q3[i]}" style="width:100%; text-align:center;">
                                <input type="number" name="cit_${i}" value="${data.research.citations[i]}" style="width:100%; text-align:center;">
                            `).join('')}
                        </div>
                    </div>

                    <!-- 2. Grants & Supervision Grid -->
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2rem;">
                        <!-- Grants -->
                        <div>
                             <h4 style="border-bottom:1px solid #eee; padding-bottom:0.5rem; margin-bottom:1rem; color:var(--primary-blue);">2. Grant Funnel</h4>
                             <div style="display:grid; gap:1rem;">
                                <div>
                                    <label>Proposals Submitted</label>
                                    <input type="number" name="grant_submit" value="${data.grants.funnelValues[0]}" style="width:100%; padding:0.5rem;">
                                </div>
                                <div>
                                    <label>Under Review</label>
                                    <input type="number" name="grant_review" value="${data.grants.funnelValues[1]}" style="width:100%; padding:0.5rem;">
                                </div>
                                <div>
                                    <label>Awarded Grants</label>
                                    <input type="number" name="grant_awarded" value="${data.grants.funnelValues[2]}" style="width:100%; padding:0.5rem;">
                                </div>
                             </div>
                        </div>

                        <!-- Supervision -->
                        <div>
                             <h4 style="border-bottom:1px solid #eee; padding-bottom:0.5rem; margin-bottom:1rem; color:var(--primary-blue);">3. Student Supervision</h4>
                             <div style="display:grid; gap:1rem;">
                                <div>
                                    <label>Student Research (Undergrad)</label>
                                    <input type="number" name="sup_undergrad" value="${data.supervision.values[0]}" style="width:100%; padding:0.5rem;">
                                </div>
                                <div>
                                    <label>Master Theses</label>
                                    <input type="number" name="sup_master" value="${data.supervision.values[1]}" style="width:100%; padding:0.5rem;">
                                </div>
                                <div>
                                    <label>PhD Dissertations</label>
                                    <input type="number" name="sup_phd" value="${data.supervision.values[2]}" style="width:100%; padding:0.5rem;">
                                </div>
                             </div>
                        </div>
                    </div>

                    <!-- 4. Professional Development (NEW) -->
                    <div>
                         <h4 style="border-bottom:1px solid #eee; padding-bottom:0.5rem; margin-bottom:1rem; color:var(--primary-blue);">4. Professional Development Activities</h4>
                         <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:1rem; text-align:center;">
                            ${data.development.labels.map((label, i) => `
                                <div>
                                    <label style="display:block; font-size:0.85rem; height:40px; margin-bottom:0.5rem;">${label}</label>
                                    <input type="number" name="dev_${i}" value="${data.development.values[i]}" style="width:100%; text-align:center;">
                                </div>
                            `).join('')}
                         </div>
                    </div>

                    <div style="text-align:right; margin-top:1rem; border-top:1px solid #eee; padding-top:1rem;">
                         <button type="button" onclick="window.app.handlePharmaSave_v2()" class="btn btn-primary btn-lg">💾 Save Changes</button>
                    </div>
                </form>
            </div>
                `;
    }

    handlePharmaSave_v2() {
        const form = document.getElementById('pharma-edit-form');
        const inputs = form.querySelectorAll('input');
        const values = {};
        inputs.forEach(input => values[input.name] = parseInt(input.value) || 0);

        // Update Research
        for (let i = 0; i < 5; i++) {
            this.pharmaData.research.q1[i] = values[`q1_${i} `];
            this.pharmaData.research.q2[i] = values[`q2_${i} `];
            this.pharmaData.research.q3[i] = values[`q3_${i} `];
            this.pharmaData.research.citations[i] = values[`cit_${i} `];
        }

        // Update Grants
        this.pharmaData.grants.funnelValues = [values['grant_submit'], values['grant_review'], values['grant_awarded']];

        // Update Supervision
        this.pharmaData.supervision.values = [values['sup_undergrad'], values['sup_master'], values['sup_phd']];

        // Update Development (NEW)
        this.pharmaData.development.values = [
            values['dev_0'], values['dev_1'], values['dev_2'], values['dev_3'], values['dev_4']
        ];

        // Return to Dashboard with Animation
        this.renderPharmaScienceDashboardEnhanced_v2();
    }

    // --- HELPER: Generate Consistent Mock Data for Faculty ---
    _getFacultyMetrics(email) {
        // Simple hash to make random-looking but consistent data for each email
        let hash = 0;
        for (let i = 0; i < email.length; i++) hash = (hash << 5) - hash + email.charCodeAt(i);
        const seededRandom = () => { var x = Math.sin(hash++) * 10000; return x - Math.floor(x); };

        const q1 = [1, 2, 3, 2, 4].map(v => Math.floor(v * seededRandom() * 2) + 1);
        const q2 = [1, 1, 2, 3, 2].map(v => Math.floor(v * seededRandom() * 2));
        const q3 = [0, 1, 1, 0, 1].map(v => Math.floor(v * seededRandom() * 1.5));

        return {
            name: this.pharmaData.faculty.find(f => f.email === email)?.name || 'Faculty Member',
            role: this.pharmaData.faculty.find(f => f.email === email)?.role || 'Professor',
            hIndex: Math.floor(10 + seededRandom() * 20), // New
            i10Index: Math.floor(15 + seededRandom() * 30), // New
            research: {
                years: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
                q1: q1.concat([0, 0]), // Add placeholders for 2025, 2026
                q2: q2.concat([0, 0]),
                q3: q3.concat([0, 0]),
                citations: [10, 25, 45, 80, 120, 150, 180].map(v => Math.floor(v * (0.8 + seededRandom() * 0.4)))
            },
            grants: {
                funnelValues: [5, 2, 1].map(v => Math.max(0, Math.floor(v + seededRandom() * 2 - 1))),
                fundingSources: [150000, 300000].map(v => Math.floor(v * (0.5 + seededRandom())))
            },
            supervision: {
                values: [5, 2, 1].map(v => Math.max(0, Math.floor(v + seededRandom() * 2)))
            },
            development: {
                labels: ['Conferences', 'Workshops', 'Awards', 'Leadership', 'Comm. Service'],
                values: [3, 4, 1, 1, 3].map(v => Math.max(1, Math.floor(v * (0.5 + seededRandom() * 1.5))))
            },
            teachingLoad: Math.floor(6 + seededRandom() * 6), // New Metric: 6-12 hours
            scholarUrl: '', // Google Scholar Link
            lastSync: null, // Timestamp of last sync
            collaborations: this.pharmaData.collaborations.slice(0, Math.floor(seededRandom() * 3) + 1)
        };
    }

    // --- NEW: Individual Faculty Profile View ---
    renderFacultyProfile(email) {
        const metrics = this._getFacultyMetrics(email);

        this.title.innerHTML = `
                <div style = "display:flex; align-items:center; gap:1rem; width:100%;" >
                <button onclick="window.app.renderPharmaScienceDashboardEnhanced_v2()" class="btn btn-sm btn-outline">← Dept.</button>
                <div style="flex:1;">
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                        <span style="font-size:1.2rem; font-weight:bold;">${metrics.name}</span>
                        <span class="badge-secondary" style="font-size:0.75rem;">${metrics.role}</span>
                    </div>
                    ${metrics.lastSync ? `<div style="font-size:0.75rem; color:#2e7d32; margin-top:2px;">✅ Last synced with Scholar: ${new Date(metrics.lastSync).toLocaleTimeString()}</div>` : ''}
                </div>
                
                <div style="display:flex; gap:0.5rem;">
                <div style="display:flex; gap:0.5rem;">
                    ${metrics.scholarUrl ? `
                        <button onclick="window.app.simulateScholarSync('${email}')" class="btn btn-sm btn-outline" style="border-color:#2196f3; color:#2196f3;">
                            🔄 Sync Scholar
                        </button>
                    ` : `
                        <button onclick="window.app.renderFacultyEditMode('${email}')" class="btn btn-sm btn-outline" style="border-color:#666; color:#666; opacity:0.7;">
                            ➕ Add Scholar Link
                        </button>
                    `}
                    <button onclick="window.app.renderFacultyEditMode('${email}')" class="btn btn-sm btn-primary">✏️ Edit Data</button>
                </div>
            </div>
            `;

        // Reuse chart rendering logic but with individual data
        // ... (Similar structure to main dashboard but tailored for individual)

        const researchData = {
            years: metrics.research.years,
            q1: metrics.research.q1,
            q2: metrics.research.q2,
            q3: metrics.research.q3,
            publications: metrics.research.q1.map((v, i) => v + metrics.research.q2[i] + metrics.research.q3[i])
        };

        const grantData = {
            funnelLabels: ['Submitted', 'Review', 'Awarded'],
            funnelValues: metrics.grants.funnelValues,
            fundingSources: metrics.grants.fundingSources
        };

        const supervisionData = {
            labels: ['Undergrad', 'Masters', 'PhD'],
            values: metrics.supervision.values
        };

        const devData = {
            labels: metrics.development.labels,
            values: metrics.development.values
        };

        this.root.innerHTML = `
                <div class="dashboard-container fade-in-up" >
                
                <!--Personal Stats-->
                <div class="dashboard-grid" style="grid-template-columns: repeat(4, 1fr); margin-bottom: 2rem;">
                    <div class="card stat-card">
                        <span class="stat-label">Publications (2024)</span>
                        <span class="stat-value">${researchData.publications[4]}</span>
                        <span class="stat-trend trend-up">Impact Factor Avg: ${(2.5 + Math.random()).toFixed(1)}</span>
                    </div>
                    <div class="card stat-card">
                        <span class="stat-label">Grant Funding</span>
                        <span class="stat-value">${(grantData.fundingSources[1] / 1000).toFixed(0)}K</span>
                        <span class="stat-trend">SAR</span>
                    </div>
                    <div class="card stat-card">
                        <span class="stat-label">Students Supervised</span>
                        <span class="stat-value">${supervisionData.values.reduce((a, b) => a + b, 0)}</span>
                        <span class="stat-trend">Active</span>
                    </div>
                    <div class="card stat-card">
                        <span class="stat-label">H-Index</span>
                        <span class="stat-value">${metrics.hIndex || 0}</span>
                        <span class="stat-trend">All Time</span>
                    </div>
                    <div class="card stat-card">
                        <span class="stat-label">i10-Index</span>
                        <span class="stat-value">${metrics.i10Index || 0}</span>
                        <span class="stat-trend">Scholar</span>
                    </div>
                </div>

                <!--Teaching Load Banner-->
                <div class="card mb-4" style="background: linear-gradient(to right, #e3f2fd, #fff); border-left: 4px solid #2196f3;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <h3 style="margin:0; color:#1565c0;">📚 Teaching Load (Fall 2024)</h3>
                            <p style="margin:0; opacity:0.8;">Assigned Credit Hours per Semester</p>
                        </div>
                        <div style="font-size: 2.5rem; font-weight:bold; color:#1565c0;">
                            ${metrics.teachingLoad} <span style="font-size:1rem; color:#666;">Hrs/Week</span>
                        </div>
                    </div>
                </div>

                <!--Charts Grid-->
                <div class="dashboard-grid" style="grid-template-columns: 1fr 1fr; grid-gap: 1.5rem;">

                    <!-- Research Quality -->
                    <div class="card">
                        <h3>📈 Research Output</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartProfileResearch"></canvas>
                        </div>
                    </div>

                    <!-- Grant Funnel -->
                    <div class="card">
                        <h3>💰 Grant Activity</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartProfileGrants"></canvas>
                        </div>
                    </div>

                    <!-- Professional Profile -->
                    <div class="card">
                        <h3>🏆 Annual Activity Profile</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartProfileRadar"></canvas>
                        </div>
                    </div>

                    <!-- Supervision -->
                    <div class="card">
                        <h3>🎓 Supervision Breakdown</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartProfileSupervision"></canvas>
                        </div>
                    </div>

                </div>
            </div>
                `;

        new Chart(document.getElementById('chartProfileResearch'), {
            type: 'bar',
            data: { labels: researchData.years, datasets: [{ label: 'Q1', data: researchData.q1, backgroundColor: '#2e7d32' }, { label: 'Q2', data: researchData.q2, backgroundColor: '#66bb6a' }, { label: 'Q3', data: researchData.q3, backgroundColor: '#a5d6a7' }] },
            options: { responsive: true, maintainAspectRatio: false, scales: { x: { stacked: true }, y: { stacked: true } } }
        });

        new Chart(document.getElementById('chartProfileGrants'), {
            type: 'bar',
            data: { labels: grantData.funnelLabels, datasets: [{ label: 'Grants', data: grantData.funnelValues, backgroundColor: ['#90a4ae', '#42a5f5', '#26a69a'], borderRadius: 4 }] },
            options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
        });

        new Chart(document.getElementById('chartProfileRadar'), {
            type: 'radar',
            data: { labels: devData.labels, datasets: [{ label: 'Score', data: devData.values, fill: true, backgroundColor: 'rgba(52, 152, 219, 0.2)', borderColor: 'rgba(52, 152, 219, 1)' }] },
            options: { responsive: true, maintainAspectRatio: false, scales: { r: { suggestedMin: 0, suggestedMax: 5 } } }
        });

        new Chart(document.getElementById('chartProfileSupervision'), {
            type: 'doughnut', // Different viz for variety
            data: { labels: supervisionData.labels, datasets: [{ data: supervisionData.values, backgroundColor: ['#ff7043', '#ab47bc', '#5c6bc0'] }] },
            options: { responsive: true, maintainAspectRatio: false }
        });
    }

    // --- NEW: Edit Form for Individual Faculty ---
    renderFacultyEditMode(email) {
        const data = this._getFacultyMetrics(email);
        this.title.textContent = `Edit Profile: ${data.name} `;

        this.root.innerHTML = `
                < div class="card fade-in-up" style = "max-width: 900px; margin: 0 auto; border-top: 4px solid var(--primary-gold);" >
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                    <h3>✏️ Update Personal Metrics</h3>
                    <button onclick="window.app.renderFacultyProfile('${email}')" class="btn btn-sm btn-outline">Cancel</button>
                </div>
                
                <form id="faculty-edit-form" style="display:grid; gap:2rem;">
                    
                    <!-- Scholar Link & Indices -->
                    <div style="background:#f0f7ff; padding:1rem; border-radius:8px; border:1px dashed #2196f3;">
                        <label style="font-weight:bold; color:#1565c0;">🎓 Google Scholar Details</label>
                        <input type="text" name="scholarUrl" value="${data.scholarUrl || ''}" placeholder="Paste Profile URL..." style="width:100%; padding:0.5rem; margin-top:0.5rem; border:1px solid #ccc; border-radius:4px; margin-bottom:1rem;">
                        
                        <div style="display:flex; gap:1rem;">
                            <div style="flex:1;">
                                <label style="font-size:0.9rem;">H-Index</label>
                                <input type="number" name="hIndex" value="${data.hIndex || 0}" style="width:100%; padding:0.5rem;">
                            </div>
                            <div style="flex:1;">
                                <label style="font-size:0.9rem;">i10-Index</label>
                                <input type="number" name="i10Index" value="${data.i10Index || 0}" style="width:100%; padding:0.5rem;">
                            </div>
                        </div>
                    </div>

                    <!-- 1. Research Output -->
                    <div class="edit-section">
                        <h4 style="border-bottom:1px solid #eee; padding-bottom:0.5rem; margin-bottom:1rem; color:var(--primary-blue);">1. Research Output</h4>
                        <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:0.5rem; text-align:center;">
                            <label style="font-weight:bold;">Year</label>
                            <label style="font-weight:bold; color:#2e7d32;">Q1</label>
                            <label style="font-weight:bold; color:#66bb6a;">Q2</label>
                            <label style="font-weight:bold; color:#a5d6a7;">Q3</label>
                            <label style="font-weight:bold;">Citations</label>
                            
                            ${data.research.years.map((year, i) => `
                                <div style="font-weight:bold; padding-top:0.5rem;">${year}</div>
                                <input type="number" name="q1_${i}" value="${data.research.q1[i]}" style="width:100%; text-align:center;">
                                <input type="number" name="q2_${i}" value="${data.research.q2[i]}" style="width:100%; text-align:center;">
                                <input type="number" name="q3_${i}" value="${data.research.q3[i]}" style="width:100%; text-align:center;">
                                <input type="number" name="cit_${i}" value="${data.research.citations[i]}" style="width:100%; text-align:center;">
                            `).join('')}
                        </div>
                    </div>

                    <!-- 2. Grants & Supervision -->
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:2rem;">
                        <div>
                             <h4 style="border-bottom:1px solid #eee; padding-bottom:0.5rem; margin-bottom:1rem; color:var(--primary-blue);">2. Research Grants</h4>
                             <div style="display:grid; gap:1rem;">
                                <div><label>Submitted</label><input type="number" name="grant_submit" value="${data.grants.funnelValues[0]}" style="width:100%;"></div>
                                <div><label>Under Review</label><input type="number" name="grant_review" value="${data.grants.funnelValues[1]}" style="width:100%;"></div>
                                <div><label>Awarded</label><input type="number" name="grant_awarded" value="${data.grants.funnelValues[2]}" style="width:100%;"></div>
                             </div>
                        </div>
                        <div>
                             <h4 style="border-bottom:1px solid #eee; padding-bottom:0.5rem; margin-bottom:1rem; color:var(--primary-blue);">3. Supervision</h4>
                             <div style="display:grid; gap:1rem;">
                                <div><label>Undergrad Research</label><input type="number" name="sup_undergrad" value="${data.supervision.values[0]}" style="width:100%;"></div>
                                <div><label>Master Theses</label><input type="number" name="sup_master" value="${data.supervision.values[1]}" style="width:100%;"></div>
                                <div><label>PhD Dissertations</label><input type="number" name="sup_phd" value="${data.supervision.values[2]}" style="width:100%;"></div>
                             </div>
                        </div>
                    </div>

                    <!-- 4. Activity Profile & Teaching -->
                    <div>
                         <h4 style="border-bottom:1px solid #eee; padding-bottom:0.5rem; margin-bottom:1rem; color:var(--primary-blue);">4. Professional Development</h4>
                         <div style="display:grid; grid-template-columns: repeat(5, 1fr); gap:1rem; text-align:center;">
                            ${data.development.labels.map((label, i) => `
                                <div>
                                    <label style="display:block; font-size:0.8rem; margin-bottom:0.5rem;">${label}</label>
                                    <input type="number" name="dev_${i}" value="${data.development.values[i]}" style="width:100%; text-align:center;">
                                </div>
                            `).join('')}
                         </div>
                         
                         <div style="margin-top:1.5rem; padding-top:1rem; border-top:1px dashed #ddd;">
                            <label style="font-weight:bold; display:block; margin-bottom:0.5rem;">📚 Teaching Load (Hours/Week)</label>
                            <input type="number" name="teachingLoad" value="${data.teachingLoad || 0}" style="width:150px; padding:0.5rem; font-size:1.1rem;">
                         </div>
                    </div>

                    <div style="text-align:right; margin-top:1rem; border-top:1px solid #eee; padding-top:1rem;">
                         <button type="button" onclick="window.app.handleFacultySave('${email}')" class="btn btn-primary btn-lg">💾 Save Profile</button>
                    </div>
                </form>
            </div >
                `;
    }

    handleFacultySave(email) {
        const form = document.getElementById('faculty-edit-form');
        const inputs = form.querySelectorAll('input');
        const values = {};
        inputs.forEach(input => values[input.name] = parseInt(input.value) || 0);

        // Retrieve the specific profile (it must exist by now)
        let profile = this.pharmaData.facultyProfiles[email];

        // Safety check: if profile wasn't in state yet (unlikely if viewing edit mode), recreate it
        if (!profile) {
            profile = this._getFacultyMetrics(email);
        }

        // Update Scholar Metrics
        profile.scholarUrl = values['scholarUrl'];
        profile.hIndex = values['hIndex'];
        profile.i10Index = values['i10Index'];

        // Update Research (0 to 6 = 7 years)
        for (let i = 0; i < 7; i++) {
            profile.research.q1[i] = values[`q1_${i} `] || 0;
            profile.research.q2[i] = values[`q2_${i} `] || 0;
            profile.research.q3[i] = values[`q3_${i} `] || 0;
            profile.research.citations[i] = values[`cit_${i} `] || 0;
        }

        // Update Grants
        profile.grants.funnelValues = [values['grant_submit'], values['grant_review'], values['grant_awarded']];

        // Update Supervision
        profile.supervision.values = [values['sup_undergrad'], values['sup_master'], values['sup_phd']];

        // Update Development
        profile.development.values = [
            values['dev_0'], values['dev_1'], values['dev_2'], values['dev_3'], values['dev_4']
        ];

        // Update Teaching Load
        profile.teachingLoad = values['teachingLoad'];

        // Save back to state
        this.pharmaData.facultyProfiles[email] = profile;

        // Return to View Mode
        this.renderFacultyProfile(email);
    }

    // --- NEW: Simulation Logic for Scholar Sync ---
    simulateScholarSync(email) {
        // 1. Show Loading State
        const btn = document.querySelector('button[onclick*="simulateScholarSync"]');
        if (btn) {
            btn.innerHTML = '⏳ Connecting...';
            btn.disabled = true;
        }

        // 2. Simulate Network Request (2 seconds)
        setTimeout(() => {
            const profile = this.pharmaData.facultyProfiles[email];
            if (!profile) return;

            // 3. "Fetch" New Data (Random Increments for Realism)
            const newCitations = Math.floor(Math.random() * 5) + 1; // 1-5 new citations
            const lastYearIdx = profile.research.years.length - 1;

            // Update Citations
            profile.research.citations[lastYearIdx] += newCitations;

            // Occasionally increment publication count (20% chance)
            if (Math.random() > 0.8) {
                profile.research.q1[lastYearIdx] += 1;
                alert(`📢 New Publication Found!\nAdded to Q1[${profile.research.years[lastYearIdx]}]`);
            }

            // Update timestamp
            profile.lastSync = new Date().toISOString();
            this.pharmaData.facultyProfiles[email] = profile;

            // 4. Re-render
            alert(`✅ Google Scholar Sync Complete!\n\n + ${newCitations} New Citations since last check.`);
            this.renderFacultyProfile(email);

        }, 2000);
    }


    renderAPPE(filterId = 'all') {
        this.title.textContent = 'Program Overview & APPE Dashboard';
        const allStudents = this.store.getStudents();

        // Filter students based on selection
        let students = allStudents;
        if (filterId !== 'all') {
            students = allStudents.filter(s => s.id === filterId);
        }

        const kpis = this.store.getKPIs(); // Get Program Overview KPIs

        // Calculate comprehensive metrics from filtered students
        const currentBlock = 4;
        const totalBlocks = 10;

        // Helper function to calculate averages
        const calcAvg = (list, accessor) => {
            const validValues = list.map(accessor).filter(v => v !== null && v !== undefined && !isNaN(v));
            if (validValues.length === 0) return 0;
            return validValues.reduce((a, b) => a + b, 0) / validValues.length;
        };

        // 1. Average Final Evaluation Score (per block + overall)
        const evalScoresPerBlock = [4.2, 4.5, 4.3, 4.6, 0, 0, 0, 0, 0, 0]; // Blocks 1-10
        const overallEvalScore = (evalScoresPerBlock.slice(0, currentBlock).reduce((a, b) => a + b, 0) / currentBlock).toFixed(2);

        // 2. Attendance Compliance Rate (calculated from filtered students)
        const attendanceCompliance = calcAvg(students, s => s.attendance).toFixed(1);

        // 3. Preceptor-to-Student Ratio
        const preceptorRatio = "1:2";

        // 4. Community Services (Total Hours) - sum from filtered students
        const communityServiceHours = students.length * 25; // Mock: 25 hours per student

        // 5. Students at Risk (Low Eval or Attendance) - count from filtered students
        const atRiskStudents = students.filter(s => {
            const grade = this.store.calculateStudentGrade(s.id)?.finalGrade || 0;
            return s.attendance < 85 || grade < 75;
        });
        const atRiskCount = atRiskStudents.length;

        const html = `
                < !--Filter Dropdown-- >
    <div class="card mb-4">
        <div class="flex-between">
            <h3>Program Overview & Metrics</h3>
            <div style="display:flex; align-items:center; gap:1rem;">
                <label><strong>Filter Student:</strong></label>
                <select onchange="app.renderAPPE(this.value)" style="padding: 0.5rem; border-radius: 4px; border: 1px solid #ccc;">
                    <option value="all" ${filterId === 'all' ? 'selected' : ''}>All Students</option>
                    ${allStudents.map(s => `<option value="${s.id}" ${filterId === s.id ? 'selected' : ''}>${s.name}</option>`).join('')}
                </select>
            </div>
        </div>
    </div>

    <!--Program Overview Section-- >
    <div class="dashboard-grid" style="margin-bottom: 2rem; border-bottom: 1px solid #eee; padding-bottom: 2rem;">
        <div class="card stat-card">
            <span class="stat-label">Total Students</span>
            <span class="stat-value">${filterId === 'all' ? kpis.totalStudents : students.length}</span>
        </div>
        <div class="card stat-card">
            <span class="stat-label">Active Rotations</span>
            <span class="stat-value">${kpis.activeRotations}</span>
        </div>
        <div class="card stat-card">
            <span class="stat-label">Average GPA</span>
            <span class="stat-value">${filterId === 'all' ? kpis.avgGPA : calcAvg(students, s => s.gpa).toFixed(2)}</span>
        </div>
        <div class="card stat-card" style="border-left: 4px solid var(--danger);">
            <span class="stat-label">High Risk Students</span>
            <span class="stat-value" style="color: var(--danger);">${filterId === 'all' ? kpis.highRiskCount : students.filter(s => s.risk === 'high').length}</span>
        </div>
    </div>

    <div class="dashboard-grid">
        <div class="card stat-card">
            <span class="stat-label">Overall Evaluation Score</span>
            <span class="stat-value">${overallEvalScore} / 5.0</span>
            <small class="text-muted">Avg across completed blocks</small>
        </div>
        <div class="card stat-card">
            <span class="stat-label">Attendance Compliance</span>
            <span class="stat-value">${attendanceCompliance}%</span>
        </div>
        <div class="card stat-card">
            <span class="stat-label">Preceptor Ratio</span>
            <span class="stat-value">${preceptorRatio}</span>
        </div>
        <div class="card stat-card">
            <span class="stat-label">Community Service Hours</span>
            <span class="stat-value">${communityServiceHours}</span>
        </div>
        <div class="card stat-card" style="border-left: 4px solid var(--danger);">
            <span class="stat-label">Students at Risk</span>
            <span class="stat-value" style="color: var(--danger);">${atRiskCount}</span>
        </div>
    </div>

    <div class="dashboard-grid" style="grid-template-columns: 2fr 1fr; margin-top: 2rem;">
        <div class="card">
            <h3>Evaluation Score Trend (By Block)</h3>
            <div style="height: 300px; position: relative;">
                <canvas id="chartEvalByBlock"></canvas>
            </div>
        </div>
        <div class="card">
            <h3>${filterId === 'all' ? 'Top 10 Students (GPA)' : 'Student Performance'}</h3>
            <ul style="list-style: none; padding: 0; margin-top: 1rem;">${filterId === 'all'
                ? students.sort((a, b) => b.gpa - a.gpa).slice(0, 10).map((s, i) => `
                    <li style="padding: 0.5rem 0; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
                        <span><strong>${i + 1}.</strong> ${s.name}</span>
                        <span class="badge-success">${s.gpa}</span>
                    </li>
                `).join('')
                : students.map((s, i) => `
                    <li style="padding: 0.5rem 0; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
                        <span><strong>${s.name}</strong></span>
                        <span class="badge-success">${s.gpa}</span>
                    </li>
                    <li style="padding: 0.5rem 0; border-bottom: 1px solid #eee;">
                        <span>Completed Rotations: <strong>${s.completedRotations} / 10</strong></span>
                    </li>
                    <li style="padding: 0.5rem 0; border-bottom: 1px solid #eee;">
                        <span>Attendance: <strong>${s.attendance}%</strong></span>
                    </li>
                `).join('')
            }
            </ul>
        </div>
    </div>

    <div class="dashboard-grid" style="margin-top: 2rem;">
        <div class="card">
            <h3>${filterId === 'all' ? 'Students at Risk (Detailed View)' : 'Risk Assessment'}</h3>
            <div class="data-table-container">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Risk Factor</th>
                            <th>Current Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${atRiskStudents.length > 0 ? atRiskStudents.map(s => {
                const grade = this.store.calculateStudentGrade(s.id)?.finalGrade || 0;
                const riskFactor = s.attendance < 85 ? `Low Attendance (${s.attendance}%)` : `Low Grade (${grade}%)`;
                const status = grade < 75 ? 'Remediation' : 'Monitoring';
                return `
                        <tr>
                            <td><strong>${s.name}</strong></td>
                            <td style="color: var(--danger);">${riskFactor}</td>
                            <td>${status}</td>
                            <td><button class="btn btn-sm btn-outline">View Profile</button></td>
                        </tr>
                            `;
            }).join('') : '<tr><td colspan="4" class="text-muted" style="text-align: center;">No students at risk</td></tr>'}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="card">
            <h3>Site Evaluation Summary</h3>
            <div style="display: flex; align-items: center; justify-content: center; height: 200px; color: #666;">
                [Site Ratings Heatmap Placeholder]
            </div>
        </div>
    </div>

    <!--Rotation Progress Tracker-- >
                <div class="card" style="margin-top: 2rem;">
                    <h3>Rotation Progress Tracker</h3>
                    <div style="margin-top: 1rem;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                            <span><strong>Block 4 in Progress</strong> (Week 3 of 4)</span>
                            <span>75% Complete</span>
                        </div>
                        <div style="width: 100%; background: #eee; height: 20px; border-radius: 10px; overflow: hidden;">
                            <div style="width: 75%; background: var(--primary-green); height: 100%;"></div>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-top: 0.5rem; font-size: 0.9rem; color: #666;">
                            <span>Start: Oct 1</span>
                            <span>End: Oct 28</span>
                        </div>
                    </div>
                </div>
            `;
        this.root.innerHTML = html;

        // Initialize Charts
        setTimeout(() => {
            const ctx = document.getElementById('chartEvalByBlock');
            if (ctx) {
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Block 1', 'Block 2', 'Block 3', 'Block 4', 'Block 5', 'Block 6', 'Block 7', 'Block 8', 'Block 9', 'Block 10'],
                        datasets: [{
                            label: 'Evaluation Score',
                            data: evalScoresPerBlock,
                            borderColor: '#1B5E20',
                            backgroundColor: 'rgba(27, 94, 32, 0.1)',
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 5
                            }
                        }
                    }
                });
            }
        }, 100);
    }

    renderRotationModal(block = 4) {
        const modalHtml = `
                < div class="modal-overlay" onclick = "this.remove()" >
                    <div class="modal" onclick="event.stopPropagation()">
                        <div class="modal-header">
                            <h3>Rotation Block ${block} Details</h3>
                            <button class="btn-close" onclick="this.closest('.modal-overlay').remove()">×</button>
                        </div>
                        <div class="modal-body">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                                <div>
                                    <label><strong>Rotation Type</strong></label>
                                    <p>Internal Medicine</p>
                                </div>
                                <div>
                                    <label><strong>Site</strong></label>
                                    <p>KAMC - Riyadh (Main Hospital)</p>
                                </div>
                                <div>
                                    <label><strong>Preceptor</strong></label>
                                    <p>Dr. Sarah Al-Ahmed</p>
                                </div>
                                <div>
                                    <label><strong>Duration</strong></label>
                                    <p>4 Weeks (Oct 1 - Oct 28)</p>
                                </div>
                            </div>
                            <h4>Learning Objectives</h4>
                            <ul style="margin-bottom: 1rem;">
                                <li>Demonstrate proficiency in medication reconciliation.</li>
                                <li>Develop comprehensive care plans for complex patients.</li>
                                <li>Participate in interprofessional rounds daily.</li>
                            </ul>
                            <div style="display: flex; gap: 1rem;">
                                <button class="btn btn-primary" onclick="alert('Edit Rotation')">Edit Assignment</button>
                                <button class="btn btn-outline" onclick="alert('View Evaluations')">View Evaluations</button>
                            </div>
                        </div>
                    </div>
            </div >
                `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    renderRequestForm(type) {
        this.title.textContent = `📝 New Request: ${type} `;

        // Common Course Field for ALL forms
        const courseField = `
                < div class="form-group mb-3" >
                <label style="display:block; margin-bottom:0.5rem; font-weight:bold;">Student Level / Course</label>
                <select name="courseContext" id="courseContext" class="input-field" style="width:100%; padding:0.8rem; border:1px solid #ddd; border-radius:4px;">
                    <option value="IPPE-I">IPPE-I (Community Pharmacy)</option>
                    <option value="IPPE-II">IPPE-II (Institutional Pharmacy)</option>
                    <option value="IPPE-III">IPPE-III (Comprehensive)</option>
                    <option value="APPE">APPE (Advanced Practice)</option>
                </select>
            </div >
                `;

        let formFields = '';

        if (type === 'Rotation Change') {
            formFields = `
                ${courseField}
                <div class="form-group mb-3">
                    <label style="display:block; margin-bottom:0.5rem; font-weight:bold;">Which Rotation?</label>
                    <select name="rotation" class="input-field" style="width:100%; padding:0.8rem; border:1px solid #ddd; border-radius:4px;">
                        <option value="Block 1">Block 1</option>
                        <option value="Block 2">Block 2</option>
                        <option value="Block 3">Block 3</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label style="display:block; margin-bottom:0.5rem; font-weight:bold;">Requested Change</label>
                    <select name="changeType" class="input-field" style="width:100%; padding:0.8rem; border:1px solid #ddd; border-radius:4px;">
                        <option value="site">Change Site Location</option>
                        <option value="date">Change Dates (Swap)</option>
                        <option value="drop">Drop / Postpone</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label style="display:block; margin-bottom:0.5rem; font-weight:bold;">Reason for Request</label>
                    <textarea name="reason" rows="4" style="width:100%; padding:0.8rem; border:1px solid #ddd; border-radius:4px;" placeholder="Please explain why you need this change..."></textarea>
                </div>
            `;
        } else if (type === 'Absence') {
            formFields = `
                ${courseField}
                <div class="form-group mb-3">
                    <label style="display:block; margin-bottom:0.5rem; font-weight:bold;">Absence Type</label>
                    <select name="absenceType" class="input-field" style="width:100%; padding:0.8rem; border:1px solid #ddd; border-radius:4px;">
                        <option value="sick">Sick Leave (Medical Report Required)</option>
                        <option value="emergency">Emergency / Compassionate</option>
                        <option value="conference">Conference / Educational</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label style="display:block; margin-bottom:0.5rem; font-weight:bold;">Dates</label>
                    <input type="date" name="date" style="width:100%; padding:0.8rem; border:1px solid #ddd; border-radius:4px;">
                </div>
                <div class="form-group mb-3">
                    <label style="display:block; margin-bottom:0.5rem; font-weight:bold;">Upload Proof (Simulated)</label>
                    <div style="border:2px dashed #ddd; padding:1.5rem; text-align:center; border-radius:4px; cursor:pointer; background:#f9f9f9;">
                        📄 Click to Upload Document
                    </div>
                </div>
            `;
        } else {
            formFields = `
                ${courseField}
                <div class="form-group mb-3">
                    <label style="display:block; margin-bottom:0.5rem; font-weight:bold;">Description</label>
                    <textarea name="description" rows="5" style="width:100%; padding:0.8rem; border:1px solid #ddd; border-radius:4px;" placeholder="Describe the issue..."></textarea>
                </div>
                <div class="form-group mb-3">
                    <label style="display:flex; align-items:center; gap:0.5rem;">
                        <input type="checkbox" name="confidential"> Make this report anonymous/confidential
                    </label>
                </div>
            `;
        }

        this.root.innerHTML = `
                < div class="card fade-in-up" style = "max-width:600px; margin:2rem auto; border-top:4px solid var(--primary-gold);" >
                <button onclick="window.app.renderStudentPortal()" style="background:none; border:none; color:#666; cursor:pointer; margin-bottom:1rem;">← Back to Portal</button>
                <h2 style="color:var(--primary-blue); margin-top:0;">Request: ${type}</h2>
                <div style="background:#e3f2fd; color:#1565c0; padding:1rem; border-radius:4px; margin-bottom:1.5rem; font-size:0.9rem;">
                    ℹ️ This request will be routed to the <strong>Clinical Affairs Admin</strong> for the selected Course/Level.
                </div>
                
                <form onsubmit="event.preventDefault(); window.app.handleRequestSubmit('${type}')" id="requestForm">
                    ${formFields}
                    <div style="text-align:right; margin-top:1.5rem;">
                        <button type="button" onclick="window.app.renderStudentPortal()" class="btn btn-outline" style="margin-right:0.5rem;">Cancel</button>
                        <button type="submit" class="btn btn-primary">🚀 Submit Request</button>
                    </div>
                </form>
            </div >
                `;
    }

    handleRequestSubmit(type) {
        // Capture Course Context
        const courseSelect = document.getElementById('courseContext');
        const course = courseSelect ? courseSelect.value : 'General';

        // Simpson (Simulated) Submission Logic
        const newReq = {
            id: `REQ - ${Math.floor(1000 + Math.random() * 9000)} `,
            type: type,
            course: course, // Store selected course
            date: new Date().toISOString().split('T')[0], // Today
            status: 'Submitted',
            step: 1, // Step 1: Submitted
            admin: 'Clinical Affairs' // Initial routing
        };

        // Add to state
        this.pharmaData.studentRequests.unshift(newReq); // Add to top

        // Show Success
        alert(`✅ Request Submitted Successfully!\n\nID: ${newReq.id} \nType: ${type} \nCourse: ${course} \nStatus: Sent to Admin`);

        // Return to Portal
        this.renderStudentPortal();
    }

    renderDocumentHub() {
        this.title.textContent = '📂 Clinical Documentation Hub';
        const docs = this.pharmaData.compliance;

        const html = `
                < div class="card fade-in-up" style = "max-width:900px; margin:2rem auto;" >
                <button onclick="window.app.renderStudentPortal()" style="background:none; border:none; color:#666; cursor:pointer; margin-bottom:1rem;">← Back to Portal</button>
                <div class="flex-between mb-4">
                    <h2 style="color:var(--primary-blue); margin:0;">Required Documents</h2>
                    <div style="text-align:right;">
                        <small>Compliance Status</small>
                        <div style="font-weight:bold; color:var(--primary-green);">90% Compliant</div>
                    </div>
                </div>

                <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:1.5rem;">
                    ${docs.map(doc => {
            let statusColor, statusIcon, statusLabel;
            if (doc.status === 'Approved') {
                statusColor = 'var(--primary-green)';
                statusIcon = '✅';
                statusLabel = 'Approved';
            } else if (doc.status === 'Pending') {
                statusColor = '#f1c40f'; // Yellow
                statusIcon = '⏳';
                statusLabel = 'Pending Review';
            } else {
                statusColor = '#e74c3c'; // Red
                statusIcon = '❌';
                statusLabel = 'Missing / Expired';
            }

            return `
                            <div class="card" style="border-left: 4px solid ${statusColor}; padding:1.5rem; transition:transform 0.2s; position:relative;">
                                <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:1rem;">
                                    <h4 style="margin:0;">${doc.name}</h4>
                                    <span style="font-size:1.5rem;">${statusIcon}</span>
                                </div>
                                
                                <div style="margin-bottom:1rem;">
                                    <span style="display:inline-block; padding:0.25rem 0.75rem; border-radius:12px; font-size:0.8rem; background:${statusColor}20; color:${statusColor}; font-weight:bold;">
                                        ${statusLabel}
                                    </span>
                                </div>

                                <div style="font-size:0.9rem; color:#666; margin-bottom:1.5rem;">
                                    ${doc.date ? `<div>📅 Date: ${doc.date}</div>` : ''}
                                    ${doc.expiry ? `<div>⚠️ Expires: ${doc.expiry}</div>` : ''}
                                    ${!doc.date ? '<div>Not uploaded yet</div>' : ''}
                                </div>

                                <button class="btn btn-outline btn-sm" style="width:100%;" onclick="window.app.handleAuthUpload('${doc.id}')">
                                    ${doc.status === 'Missing' ? '⬆️ Upload Document' : '🔄 Update / Renew'}
                                </button>
                            </div>
                        `;
        }).join('')}
                </div>

                <div style="margin-top:2rem; padding:1rem; background:#f0f7ff; border-radius:8px; display:flex; gap:1rem; align-items:center;">
                    <div style="font-size:1.5rem;">💡</div>
                    <div>
                        <strong>Need Help?</strong><br>
                        For technical issues with uploads, please contact IT Support. For questions about requirements, contact Clinical Affairs.
                    </div>
                </div>
            </div >
                `;
        this.root.innerHTML = html;
    }

    handleAuthUpload(docId) {
        // Find document
        const docIndex = this.pharmaData.compliance.findIndex(d => d.id === docId);
        if (docIndex === -1) return;
        const doc = this.pharmaData.compliance[docIndex];

        // Simulate File Selection (Prompt)
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.pdf,.jpg,.png';

        fileInput.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;

            // Simulate Upload Process
            const toast = document.createElement('div');
            toast.style.cssText = `
            position: fixed; bottom: 20px; right: 20px; background: #333; color: white;
            padding: 1rem 2rem; border - radius: 4px; box - shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z - index: 9999; display: flex; align - items: center; gap: 1rem;
            `;
            toast.innerHTML = `
                < span > Uploading ${file.name}...</span >
                    <div style="width: 100px; height: 4px; background: #555; border-radius: 2px;">
                        <div id="upload-progress" style="width: 0%; height: 100%; background: var(--primary-green); border-radius: 2px; transition: width 0.2s;"></div>
                    </div>
            `;
            document.body.appendChild(toast);

            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                const bar = document.getElementById('upload-progress');
                if (bar) bar.style.width = `${progress}% `;

                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        toast.remove();
                        // Update State
                        this.pharmaData.compliance[docIndex] = {
                            ...doc,
                            status: 'Pending',
                            date: new Date().toISOString().split('T')[0]
                        };
                        alert(`✅ Upload Successful!\n\nDocument: ${doc.name} \nStatus: Submitted for Review`);
                        this.renderDocumentHub();
                    }, 500);
                }
            }, 150); // 1.5s total upload time
        };

        fileInput.click();
    }

    renderHospitalProfiles() {
        this.title.textContent = '🏥 Clinical Training Sites';

        const hospitals = [
            { id: 'kamc', name: 'King Abdulaziz Medical City (KAMC)', type: 'National Guard', region: 'Riyadh', img: '🏥' },
            { id: 'kfmc', name: 'King Fahad Medical City (KFMC)', type: 'MOH', region: 'Riyadh', img: '🚑' },
            { id: 'kfsh', name: 'King Faisal Specialist Hospital', type: 'Specialist', region: 'Riyadh', img: '🧬' },
            { id: 'security', name: 'Security Forces Hospital', type: 'MOI', region: 'Riyadh', img: '🚔' },
            { id: 'nora', name: 'Princess Nourah Hospital', type: 'University', region: 'Riyadh', img: '🎓' }
        ];

        const html = `
                < div class= "card fade-in-up" style = "max-width:1000px; margin:2rem auto;" >
                <button onclick="window.app.renderStudentPortal()" style="background:none; border:none; color:#666; cursor:pointer; margin-bottom:1rem;">← Back to Portal</button>
                <div class="flex-between mb-4">
                    <h2 style="color:var(--primary-blue); margin:0;">Affiliated Hospitals</h2>
                    <input type="text" placeholder="Search hospitals..." style="padding:0.5rem; border:1px solid #ddd; border-radius:4px;">
                </div>

                <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap:1.5rem;">
                    ${hospitals.map(h => `
                        <div class="card hover-card" onclick="window.app.renderHospitalDetail('${h.id}')" style="cursor:pointer; text-align:center;">
                            <div style="font-size:3rem; margin-bottom:1rem;">${h.img}</div>
                            <h4 style="margin-bottom:0.5rem; min-height:3em; display:flex; align-items:center; justify-content:center;">${h.name}</h4>
                            <div style="display:flex; justify-content:center; gap:0.5rem;">
                                <span class="badge-secondary">${h.type}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div >
                `;
        this.root.innerHTML = html;
    }

    renderHospitalDetail(id) {
        // Mock Details
        const details = {
            'kamc': {
                name: 'King Abdulaziz Medical City',
                desc: 'A distinguished healthcare provider... known for its Center of Excellence in Trauma and Oncology.',
                reqs: ['BLS Certificate', 'N95 Fit Test', 'Updated CV', 'Hospital ID Form'],
                contacts: ['Dr. Sarah (Coordinator)', 'Mr. Ahmed (Security)']
            },
            'kfmc': {
                name: 'King Fahad Medical City',
                desc: 'One of the largest medical complexes in the Middle East...',
                reqs: ['BLS', 'ACLS', 'Vaccination Record'],
                contacts: ['Ms. Fatimah (Edu Dept)']
            }
        }[id] || { name: 'Hospital Details', desc: 'Information loading...', reqs: [], contacts: [] };

        const html = `
                < div class="card fade-in-up" style = "max-width:800px; margin:2rem auto; border-top:4px solid var(--primary-blue);" >
                <button onclick="window.app.renderHospitalProfiles()" style="background:none; border:none; color:#666; cursor:pointer; margin-bottom:1rem;">← Back to Directory</button>
                
                <div style="text-align:center; margin-bottom:2rem;">
                    <div style="font-size:4rem;">🏥</div>
                    <h1 style="color:var(--primary-blue); margin:0.5rem 0;">${details.name}</h1>
                    <p style="color:#666; max-width:600px; margin:0 auto;">${details.desc}</p>
                </div>

                <div class="dashboard-grid" style="grid-template-columns: 1fr 1fr; gap:2rem;">
                    <div style="background:#f4f6f8; padding:1.5rem; border-radius:8px;">
                        <h4 style="border-bottom:1px solid #ddd; padding-bottom:0.5rem;">📋 Specific Requirements</h4>
                        <ul style="margin-top:1rem; padding-left:1.5rem;">
                            ${details.reqs.map(r => `<li>${r}</li>`).join('') || '<li>Standard University Requirements</li>'}
                        </ul>
                    </div>
                    
                    <div style="background:#f4f6f8; padding:1.5rem; border-radius:8px;">
                        <h4 style="border-bottom:1px solid #ddd; padding-bottom:0.5rem;">📞 Key Contacts</h4>
                        <ul style="margin-top:1rem; padding-left:1.5rem;">
                            ${details.contacts.map(c => `<li>${c}</li>`).join('') || '<li>Contact Clinical Affairs</li>'}
                        </ul>
                    </div>
                </div>

                <div style="margin-top:2rem; text-align:center;">
                    <button class="btn btn-primary" onclick="alert('Opening Map...')">📍 View Location</button>
                    <button class="btn btn-outline" onclick="alert('Downloading Handbook...')">📖 Download Site Handbook</button>
                </div>
            </div >
                `;
        this.root.innerHTML = html;
    }

    renderMySchedule() {
        this.title.textContent = '📅 My Rotation Schedule';

        // Mock Schedule
        const schedule = [
            { block: 1, dates: 'Aug 27 - Sep 21', site: 'KAMC', rotation: 'Internal Medicine', status: 'Completed' },
            { block: 2, dates: 'Sep 24 - Oct 19', site: 'KFMC', rotation: 'Cardiology', status: 'Completed' },
            { block: 3, dates: 'Oct 22 - Nov 16', site: 'Security Forces', rotation: 'Ambulatory Care', status: 'In Progress' },
            { block: 4, dates: 'Nov 19 - Dec 14', site: 'Nora Hospital', rotation: 'Pediatrics', status: 'Upcoming' },
            { block: 5, dates: 'Dec 17 - Jan 11', site: 'Vacation', rotation: '-', status: 'Upcoming' },
            { block: 6, dates: 'Jan 14 - Feb 08', site: 'KAMC', rotation: 'Critical Care', status: 'Upcoming' },
        ];

        const html = `
                < div class="card fade-in-up" style = "max-width:900px; margin:2rem auto;" >
                <button onclick="window.app.renderStudentPortal()" style="background:none; border:none; color:#666; cursor:pointer; margin-bottom:1rem;">← Back to Portal</button>
                <div class="flex-between mb-4">
                     <h2 style="color:var(--primary-blue); margin:0;">2025-2026 Rotation Schedule</h2>
                     <button class="btn btn-outline" onclick="window.print()">🖨️ Print Schedule</button>
                </div>

                <div class="data-table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Block</th>
                                <th>Dates</th>
                                <th>Rotation</th>
                                <th>Site</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${schedule.map(s => {
            let badgeClass = s.status === 'Completed' ? 'badge-success' : (s.status === 'In Progress' ? 'badge-warning' : 'badge-secondary');
            return `
                                    <tr>
                                        <td><strong>Block ${s.block}</strong></td>
                                        <td>${s.dates}</td>
                                        <td>${s.rotation}</td>
                                        <td>${s.site}</td>
                                        <td><span class="${badgeClass}">${s.status}</span></td>
                                    </tr>
                                `;
        }).join('')}
                        </tbody>
                    </table>
                </div>
            </div >
                `;
        this.root.innerHTML = html;
    }

    filterAPPE(type) {
        alert(`Filtering dashboard by site type: ${type} `);
        // In a real app, this would re-render the dashboard with filtered data
    }

    filterAPPEByStudent(studentId) {
        if (studentId === 'all') {
            alert('Showing all students');
        } else {
            const student = this.store.getStudents().find(s => s.id === studentId);
            alert(`Filtering dashboard for: ${student ? student.name : 'Unknown Student'} \n\nThis would show only data for this student across all rotations.`);
        }
        // In a real app, this would re-render the dashboard with filtered student data
    }

    filterByDisease(disease) {
        alert(`Drilling down to cases for: ${disease} `);
    }

    viewCaseLogs() {
        alert('Opening detailed Case Logs view...');
    }





    renderCLODashboard() {
        this.title.textContent = 'CLO Achievement Dashboard';
        const meta = this.store.getIPPEMeta();
        const students = this.store.getStudents();

        const cloStats = meta.clos.map(clo => {
            const avg = students.reduce((acc, s) => acc + (s.competencies?.clos[clo.id] || 0), 0) / students.length;
            return { ...clo, avg };
        });

        const html = `
                < div class="card" >
                <button class="btn btn-outline btn-sm" onclick="app.render('ippe-competency')">? Back to Competency Hub</button>
                <h3 style="margin-top: 1rem;">CLO Performance Heatmap</h3>
                <div class="data-table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>CLO ID</th>
                                <th>Domain</th>
                                <th>Description</th>
                                <th>Class Average</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${cloStats.map(c => `
                                <tr>
                                    <td><strong>${c.id}</strong></td>
                                    <td>${c.domain}</td>
                                    <td>${c.desc}</td>
                                    <td>${c.avg.toFixed(1)}%</td>
                                    <td>
                                        <div style="width: 100%; background: #eee; height: 8px; border-radius: 4px;">
                                            <div style="width: ${c.avg}%; background: var(--primary-green); height: 100%; border-radius: 4px;"></div>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div >
                `;
        this.root.innerHTML = html;
    }

    renderEPADashboard() {
        this.title.textContent = 'EPA Dashboard';
        const meta = this.store.getIPPEMeta();
        const students = this.store.getStudents();

        const epaStats = meta.epas.map(epa => {
            const avg = students.reduce((acc, s) => acc + (s.competencies?.epas[epa] || 0), 0) / students.length;
            return { name: epa, avg };
        });

        const html = `
                < div class="card" >
                <button class="btn btn-outline btn-sm" onclick="app.render('ippe-competency')">? Back to Competency Hub</button>
                <h3 style="margin-top: 1rem;">EPA Mastery Levels (1-5)</h3>
                <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));">
                    ${epaStats.map(e => `
                        <div class="card" style="border: 1px solid #eee;">
                            <h4>${e.name}</h4>
                            <div style="font-size: 2rem; font-weight: bold; color: var(--primary-blue);">${e.avg.toFixed(1)}</div>
                            <small>Class Average</small>
                        </div>
                    `).join('')}
                </div>
            </div >
                `;
        this.root.innerHTML = html;
    }

    renderDomainDashboard() {
        this.title.textContent = 'Domain Performance Dashboard';
        const meta = this.store.getIPPEMeta();
        const students = this.store.getStudents();

        const domainStats = meta.domains.map(dom => {
            const avg = students.reduce((acc, s) => acc + (s.competencies?.domains[dom] || 0), 0) / students.length;
            return { name: dom, avg };
        });

        const html = `
                < div class="card" >
                <button class="btn btn-outline btn-sm" onclick="app.render('ippe-competency')">? Back to Competency Hub</button>
                <h3 style="margin-top: 1rem;">Domain Achievement (0-100%)</h3>
                <div class="data-table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Domain</th>
                                <th>Class Average</th>
                                <th>Performance</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${domainStats.map(d => `
                                <tr>
                                    <td><strong>${d.name}</strong></td>
                                    <td>${d.avg.toFixed(1)}%</td>
                                    <td>
                                        <div style="width: 100%; background: #eee; height: 8px; border-radius: 4px;">
                                            <div style="width: ${d.avg}%; background: var(--primary-blue); height: 100%; border-radius: 4px;"></div>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div >
                `;
        this.root.innerHTML = html;
    }

    renderCompetencyDashboard() {
        this.currentIPPETab = 'competency';
        this.renderIPPEDashboard('ippe1', 'Competency Dashboard');
    }

    renderPreceptorDirectory() {
        this.title.textContent = 'Preceptor Network & Availability';
        const preceptors = this.store.getPreceptors(); // Assume this exists or I'll mock

        // Mock if store returns empty (it might, if data structure changed)
        const preceptorList = (preceptors && preceptors.length > 0) ? preceptors : [
            { id: 1, name: 'Dr. Faisal AlMuqbil', specialty: 'Inpatient', rating: 5, activeStudents: 3 },
            { id: 2, name: 'Dr. Lama Alfehaid', specialty: 'Community', rating: 4.8, activeStudents: 2 },
            { id: 3, name: 'Dr. Mohammed Alotaibi', specialty: 'IV Room', rating: 4.9, activeStudents: 4 },
            { id: 4, name: 'Dr. Sarah Albilal', specialty: 'Outpatient', rating: 4.7, activeStudents: 2 }
        ];

        const html = `
                < div class="card mb-4" >
                    <div class="flex-between">
                        <input type="text" placeholder="🔍 Search by name or specialty..." style="padding:0.75rem; border:1px solid #ddd; border-radius:8px; width:400px; font-size:1rem;">
                            <button class="btn btn-primary">+ Invite Preceptor</button>
                    </div>
            </div >

                <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));">
                    ${preceptorList.map(p => `
                    <div class="card preceptor-card" style="transition:transform 0.2s;">
                        <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:1rem;">
                            <div style="display:flex; gap:1rem; align-items:center;">
                                <div style="width:50px; height:50px; background:#eee; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:1.5rem;">👨‍⚕️</div>
                                <div>
                                    <h3 style="margin:0; font-size:1.1rem;">${p.name}</h3>
                                    <span class="badge-secondary">${p.specialty}</span>
                                </div>
                            </div>
                            <div style="text-align:right;">
                                <div style="color:#f1c40f; font-weight:bold;">★ ${p.rating}</div>
                                <small>${p.activeStudents} Active Students</small>
                            </div>
                        </div>

                        <!-- Availability Strip -->
                        <div style="margin-top:1rem;">
                            <small style="display:block; margin-bottom:0.5rem; color:#666;">Availability (Next 10 Weeks)</small>
                            <div style="display:flex; gap:2px; height:20px;">
                                ${Array(10).fill(0).map((_, i) => {
            const isAvailable = Math.random() > 0.3;
            return `<div title="Week ${i + 1}: ${isAvailable ? 'Available' : 'Busy'}" 
                                        style="flex:1; background:${isAvailable ? '#2ecc71' : '#eee'}; border-radius:2px;"></div>`;
        }).join('')}
                            </div>
                            <div style="display:flex; justify-content:space-between; margin-top:0.25rem; font-size:0.7rem; color:#999;">
                                <span>W1</span><span>W10</span>
                            </div>
                        </div>

                        <div style="margin-top:1.5rem; display:flex; gap:0.5rem;">
                            <button class="btn btn-outline" style="flex:1;">View Profile</button>
                            <button class="btn btn-primary" style="flex:1;">Assign Student</button>
                        </div>
                    </div>
                `).join('')}
                </div>
            `;
        this.root.innerHTML = html;
    }

    renderRotationSchedule() {
        this.title.textContent = 'Rotation Schedule (Blocks 1-10)';
        const students = this.store.getStudents();
        const allRotations = this.store.getRotations();
        const preceptors = this.store.getPreceptors();

        const getRotation = (studentId, block) => {
            return allRotations.find(r => r.studentId === studentId && r.block === block);
        };

        const rows = students.map(s => {
            let cells = '';
            for (let i = 1; i <= 10; i++) {
                const rotation = getRotation(s.id, i);
                const cellContent = rotation
                    ? `< span class="rotation-chip" title = "${rotation.preceptor}" > ${rotation.site}</span > `
                    : '<span class="empty-slot">-</span>';
                cells += `< td > ${cellContent}</td > `;
            }
            return `
                < tr >
                <td><strong>${s.name}</strong></td>
                    ${cells}
                </tr >
                `;
        }).join('');

        const html = `
                < div class="card mb-4" >
                    <div class="flex-between">
                        <div style="display:flex; gap:1rem; align-items:center;">
                            <div style="display:flex; gap:0.5rem;">
                                <span class="badge-success" style="width:12px; height:12px; display:inline-block; border-radius:50%;"></span> Completed
                                <span class="badge-warning" style="width:12px; height:12px; display:inline-block; border-radius:50%;"></span> In Progress
                            </div>
                        </div>
                        <button id="btn-assign-rotation" class="btn btn-primary">+ Assign Rotation</button>
                    </div>
            </div >

                <div class="data-table-container" style="overflow-x: auto;">
                    <table class="data-table" style="min-width: 1200px;">
                        <thead>
                            <tr>
                                <th style="position:sticky; left:0; background:white; z-index:10;">Student</th>
                                <th>Block 1</th><th>Block 2</th><th>Block 3</th><th>Block 4</th><th>Block 5</th>
                                <th>Block 6</th><th>Block 7</th><th>Block 8</th><th>Block 9</th><th>Block 10</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                </div>
            `;

        this.root.innerHTML = html;
    }

    renderEvaluations() {
        const html = `
                < div class="dashboard-grid" style = "grid-template-columns: 1fr 3fr;" >
                <div class="card">
                    <h3>Available Forms</h3>
                    <ul class="nav-menu" style="margin-top: 1rem;">
                        <li class="nav-item"><a href="#" class="nav-link active" style="color: var(--primary-green); background: var(--light-green);">Mid-Rotation Eval</a></li>
                        <li class="nav-item"><a href="#" class="nav-link" style="color: var(--text-dark);">Final Evaluation</a></li>
                        <li class="nav-item"><a href="#" class="nav-link" style="color: var(--text-dark);">Professionalism Incident</a></li>
                        <li class="nav-item"><a href="#" class="nav-link" style="color: var(--text-dark);">Site Evaluation</a></li>
                    </ul>
                </div>

                <div class="card">
                    <div class="flex-between mb-4">
                        <h2>Mid-Rotation Student Evaluation</h2>
                        <span class="badge-warning risk-badge">Draft</span>
                    </div>
                    <form>
                        <div style="margin-bottom: 1rem;">
                            <label style="display:block; margin-bottom:0.5rem;">Student Name</label>
                            <input type="text" class="form-control" value="Raghad Saleh" disabled style="width: 100%; padding: 0.5rem;">
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <label style="display:block; margin-bottom:0.5rem;">Rotation Site</label>
                            <input type="text" class="form-control" value="KAMC - Riyadh" disabled style="width: 100%; padding: 0.5rem;">
                        </div>
                        
                        <h4>Competency Domains</h4>
                        <div style="margin-top: 1rem; border: 1px solid #eee; padding: 1rem; border-radius: 4px;">
                            <p><strong>1. Patient Care</strong></p>
                            <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                                <label><input type="radio" name="d1"> Exceeds Expectations</label>
                                <label><input type="radio" name="d1"> Meets Expectations</label>
                                <label><input type="radio" name="d1"> Needs Improvement</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
                `;
        this.root.innerHTML = html;
    }

    renderStatsDashboard() {
        const stats = this.store.getStats();
        const html = `
                < div class="dashboard-grid" >
                <div class="card">
                    <h3>Evaluation Averages</h3>
                    <div style="margin-top: 1rem;">
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                            <span>Student Self-Eval</span>
                            <strong>${stats.evaluations.studentAvg}/5.0</strong>
                        </div>
                        <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                            <span>Preceptor Eval</span>
                            <strong>${stats.evaluations.preceptorAvg}/5.0</strong>
                        </div>
                        <div style="display:flex; justify-content:space-between;">
                            <span>Site Eval</span>
                            <strong>${stats.evaluations.siteAvg}/5.0</strong>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <h3>Domain Performance</h3>
                    <canvas id="chart-domains"></canvas>
                </div>
            </div >
                `;
        this.root.innerHTML = html;
    }

    renderPreceptorDirectory() {
        const preceptors = this.store.getPreceptors();
        const html = `
                < div class="card mb-4" >
                    <div class="flex-between">
                        <input type="text" placeholder="Search preceptors..." style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; width: 300px;">
                            <button class="btn btn-primary">+ Add Preceptor</button>
                    </div>
            </div >
                <div class="dashboard-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));">
                    ${preceptors.map(p => `
                    <div class="card">
                        <div style="display:flex; justify-content:space-between; align-items:start;">
                            <div>
                                <h4>${p.name}</h4>
                                <p style="color: #666; font-size: 0.9rem;">${p.title}</p>
                                <span class="badge-success" style="font-size: 0.8rem; padding: 2px 6px; border-radius: 4px;">${p.specialty}</span>
                            </div>
                            <div style="width: 40px; height: 40px; background: #eee; border-radius: 50%; display:flex; align-items:center; justify-content:center;">
                                👨‍⚕️
                            </div>
                        </div>
                        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
                            <small>📧 ${p.email}</small>
                        </div>
                    </div>
                `).join('')}
                </div>
            `;
        this.root.innerHTML = html;
    }

    renderOutcomeMapping() {
        const outcomes = this.store.getOutcomes();
        const html = `
                < div class="card" >
                <h3>Curriculum Map (PLOs to CLOs)</h3>
                <div class="data-table-container">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Program Learning Outcome (PLO)</th>
                                <th>Mapped Courses/CLOs</th>
                                <th>Assessment Method</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${outcomes.plo.map(p => `
                                <tr>
                                    <td><strong>${p.id}</strong>: ${p.desc}</td>
                                    <td>
                                        ${outcomes.clo.filter(c => c.ploIds.includes(p.id)).map(c =>
            `<span class="badge-warning" style="margin-right: 0.5rem;">${c.id}</span>`
        ).join('')}
                                    </td>
                                    <td>Rubric, Exam, Portfolio</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div >
                `;
        this.root.innerHTML = html;
    }

    renderStudentTracker() {
        this.renderStudentList(); // Re-use student list for now
    }

    renderComingSoon(title) {
        this.title.textContent = title;
        this.root.innerHTML = `
                < div class="card" style = "text-align: center; padding: 3rem;" >
                <h2>?? Under Construction</h2>
                <p>The ${title} module is currently being developed.</p>
                <button class="btn btn-primary" onclick="app.render('dashboard')" style="margin-top: 1rem;">Return Home</button>
            </div >
                `;
    }

    initCharts() {
        // Mock Chart.js implementation since we don't have the library loaded in this environment
        // In a real app, this would initialize Chart.js instances
        const ctxRotations = document.getElementById('chart-rotations');
        if (ctxRotations) {
            // Placeholder for chart
            ctxRotations.style.height = '200px';
            ctxRotations.style.background = '#f9f9f9';
            ctxRotations.style.display = 'flex';
            ctxRotations.style.alignItems = 'center';
            ctxRotations.style.justifyContent = 'center';
            ctxRotations.innerHTML = '<span style="color:#999">Rotation Distribution Chart</span>';
        }
    }

    initIPPECharts(students, level) {
        if (typeof Chart === 'undefined') return;

        // 1. Ranking Chart (Weighted) - Vertical Stacked Bar
        const rankedData = students.map(s => {
            const academic = (s.gpa / 5) * 100 * 0.30;
            const prof = (s.attendance / 100) * 100 * 0.20;
            const ippeScore = 85 * 0.30; // Mock (would be avg of checks)
            const extra = 80 * 0.20; // Mock
            return {
                name: s.name.split(' ').slice(0, 2).join(' '),
                total: academic + prof + ippeScore + extra,
                parts: { academic, prof, ippeScore, extra }
            };
        }).sort((a, b) => b.total - a.total).slice(0, 10);

        const ctxRanking = document.getElementById('chartRanking');
        if (ctxRanking) {
            // Destroy existing if needed (simple check)
            const existing = Chart.getChart(ctxRanking);
            if (existing) existing.destroy();

            new Chart(ctxRanking, {
                type: 'bar',
                data: {
                    labels: rankedData.map(d => d.name),
                    datasets: [
                        { label: 'Academic', data: rankedData.map(d => d.parts.academic), backgroundColor: '#4facfe', borderRadius: 4, barPercentage: 0.6 },
                        { label: 'Prof.', data: rankedData.map(d => d.parts.prof), backgroundColor: '#00f2fe', borderRadius: 4, barPercentage: 0.6 },
                        { label: 'IPPE', data: rankedData.map(d => d.parts.ippeScore), backgroundColor: '#43e97b', borderRadius: 4, barPercentage: 0.6 },
                        { label: 'Extra', data: rankedData.map(d => d.parts.extra), backgroundColor: '#fa709a', borderRadius: 4, barPercentage: 0.6 }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { stacked: true, grid: { display: false } },
                        y: { stacked: true, grid: { display: false }, max: 100 }
                    }
                }
            });
        }

        // 2. Attendance Overview (Doughnut)
        const ctxAttendance = document.getElementById('chartAttendance');
        if (ctxAttendance) {
            const existing = Chart.getChart(ctxAttendance);
            if (existing) existing.destroy();

            const present = students.filter(s => s.attendance >= 90).length;
            const excused = students.filter(s => s.attendance >= 80 && s.attendance < 90).length;
            const risk = students.filter(s => s.attendance < 80).length;
            new Chart(ctxAttendance, {
                type: 'doughnut',
                data: {
                    labels: ['High (>90%)', 'Moderate (80-90%)', 'Risk (<80%)'],
                    datasets: [{
                        data: [present, excused, risk],
                        backgroundColor: ['#2ecc71', '#f1c40f', '#e74c3c'],
                        borderWidth: 0,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: { legend: { position: 'right', labels: { boxWidth: 10 } } }
                }
            });
        }

        // 3. Performance Metrics (Bar with specific labels)
        const ctxPerformance = document.getElementById('chartPerformance');
        if (ctxPerformance) {
            const existing = Chart.getChart(ctxPerformance);
            if (existing) existing.destroy();

            new Chart(ctxPerformance, {
                type: 'bar',
                data: {
                    labels: ['EPA', 'Simulation', 'Professionalism', 'CLOs', 'PLOs', 'Mid Eval', 'Final Eval'],
                    datasets: [{
                        label: 'Cohort Average',
                        data: [85, 88, 95, 78, 80, 82, 85], // Mock
                        backgroundColor: [
                            '#3498db', '#9b59b6', '#2ecc71', '#f1c40f', '#e67e22', '#1abc9c', '#34495e'
                        ],
                        borderRadius: 6,
                        barPercentage: 0.6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, max: 100, grid: { display: true, drawBorder: false } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // 4. Grade Distribution (Bar)
        const ctxGrades = document.getElementById('chartGrades');
        if (ctxGrades) {
            const existing = Chart.getChart(ctxGrades);
            if (existing) existing.destroy();

            // Mock Scores Breakdown
            const grades = students.map(s => (s.gpa / 5) * 100);
            const bins = { 'A (90-100)': 0, 'B (80-89)': 0, 'C (70-79)': 0, 'F (<70)': 0 };

            grades.forEach(g => {
                if (g >= 90) bins['A (90-100)']++;
                else if (g >= 80) bins['B (80-89)']++;
                else if (g >= 70) bins['C (70-79)']++;
                else bins['F (<70)']++;
            });

            new Chart(ctxGrades, {
                type: 'bar',
                data: {
                    labels: Object.keys(bins),
                    datasets: [{
                        label: 'Students',
                        data: Object.values(bins),
                        backgroundColor: ['#2ecc71', '#3498db', '#f1c40f', '#e74c3c'],
                        borderRadius: 5
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, grid: { display: false } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }
    }

    renderIPPE_Admin_Bulk() {
        this.title.textContent = 'Admin Control Center & Grading';
        const students = this.store.getStudents();
        const type = window.currentBulkType || 'midterm'; // Default to midterm
        window.currentBulkType = type;

        // Current Session Context from IPPE_SCHEDULE (Week 10 Mock)
        const currentSession = IPPE_SCHEDULE.find(s => s.week === 10);

        const options = [
            { value: 'attendance', label: 'Attendance' },
            { value: 'professionalism', label: 'Professionalism' },
            { value: 'simulation', label: 'Simulation' },
            { value: 'midterm', label: 'Midterm Evaluation' },
            { value: 'final', label: 'Final Evaluation' },
            { value: 'portfolio_detail', label: 'Portfolio Detail' }
        ];

        let headers = '';
        let rows = '';

        if (type === 'midterm' || type === 'final') {
            headers = `< th > Student</th ><th>Current Score</th><th>Action</th>`;
            rows = students.map(s => {
                const assessment = s.assessments ? s.assessments[type] : null;
                const score = assessment ? `${assessment.score}% ` : 'N/A';
                return `
                < tr >
                        <td><strong>${s.name}</strong><br><small>${s.id}</small></td>
                        <td>${score}</td>
                        <td>
                            <button class="btn btn-primary" onclick="window.renderGradingModal('${type}', '${s.id}')">📝 Grade (Rubric)</button>
                        </td>
                    </tr >
                `;
            }).join('');
        } else if (type === 'attendance') {
            headers = `< th > Student</th ><th>Attendance %</th><th>Update</th>`;
            rows = students.map(s => {
                return `
                < tr >
                        <td><strong>${s.name}</strong></td>
                        <td>${s.attendance}%</td>
                        <td><input type="number" value="${s.attendance}" style="width:60px" onchange="window.saveBulkData('${s.id}', 'attendance', this.value)"></td>
                    </tr >
                `;
            }).join('');
        } else {
            headers = `< th > Student</th ><th>Status</th><th>Action</th>`;
            rows = students.map(s => `< tr ><td>${s.name}</td><td>Coming Soon</td><td>-</td></tr > `).join('');
        }

        const html = `
                < !--Configuration & Feed Panel-- >
            <div class="dashboard-grid" style="grid-template-columns: 2fr 1fr; margin-bottom: 2rem;">
                <!-- Session Feed -->
                <div class="card" style="background: linear-gradient(135deg, #2c3e50, #34495e); color: white;">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                        <div>
                            <h3 style="color:white; border-bottom:1px solid rgba(255,255,255,0.2); padding-bottom:0.5rem; margin-bottom:1rem;">⚙️ Program Configuration</h3>
                            <div style="display:flex; gap:2rem;">
                                <div>
                                    <small style="text-transform:uppercase; opacity:0.7;">Current Session</small>
                                    <div style="font-size:1.5rem; font-weight:bold;">Week ${currentSession?.week}: ${currentSession?.topic.split(' ')[0]}...</div>
                                    <small>Preceptor: ${currentSession?.preceptor.split('/')[0]}</small>
                                </div>
                                <div style="border-left:1px solid rgba(255,255,255,0.2); padding-left:2rem;">
                                    <small style="text-transform:uppercase; opacity:0.7;">System Status</small>
                                    <div style="display:flex; align-items:center; gap:0.5rem; margin-top:0.25rem;">
                                        <span style="width:10px; height:10px; background:#2ecc71; border-radius:50%;"></span>
                                        <span>Live & Syncing</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                             <button class="btn btn-outline" style="color:white; border-color:white;">Advance Session</button>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="card">
                    <h3>✍️ Data Entry Hub</h3>
                    <div style="display:flex; flex-direction:column; gap:0.5rem;">
                        <button class="btn btn-primary" onclick="alert('Log New Incident Tool')">Log Professionalism Incident</button>
                        <button class="btn btn-outline" onclick="alert('Batch Upload Tool')">Batch Upload Excel</button>
                    </div>
                </div>
            </div>

            <!--Data Entry / Bulk Grading-- >
            <div class="card">
                <div class="flex-between mb-4">
                    <div style="display:flex; align-items:center; gap:1rem;">
                        <label><strong>Assessment Type:</strong></label>
                        <select id="bulkTypeSelector" class="form-control" onchange="window.updateBulkView(this.value)" style="padding:0.5rem;">
                            ${options.map(o => `<option value="${o.value}" ${o.value === type ? 'selected' : ''}>${o.label}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <button class="btn btn-outline">Export CSV</button>
                        <button class="btn btn-primary" onclick="window.downloadMockReport()">📊 Download Report</button>
                    </div>
                </div>

                <div class="data-table-container">
                    <table class="data-table">
                        <thead><tr>${headers}</tr></thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            </div>
            <div id="grading-modal-container"></div>
            `;
        this.root.innerHTML = html;
    }

    renderStudentPortal() {
        this.title.textContent = 'Student Portal';

        // Mock Session Logic (Week 10 as per prompt)
        const currentWeekNum = 10;
        const prevSession = IPPE_SCHEDULE.find(s => s.week === currentWeekNum - 1);
        const currentSession = IPPE_SCHEDULE.find(s => s.week === currentWeekNum);
        const nextSession = IPPE_SCHEDULE.find(s => s.week === currentWeekNum + 1);

        const html = `
                < div class="user-welcome" style = "margin-bottom: 2rem;" >
                <h2>Welcome back, Raghad! 🎓</h2>
                <p>IPPE I - Community Pharmacy | Cohort 2025</p>
            </div >

            < !--Career Flow / Session Tracker-- >
            <div class="card mb-4" style="background: linear-gradient(to right, #f8f9fa, #fff);">
                <h3 style="margin-bottom: 1rem; color: var(--primary-green);">📅 Your Rotation Journey</h3>
                <div style="display: flex; gap: 1rem; overflow-x: auto;">
                    
                    <!-- Previous -->
                    <div style="flex: 1; opacity: 0.6; border: 1px solid #ddd; padding: 1rem; border-radius: 8px;">
                        <span class="badge-secondary">Previous (Week ${prevSession?.week})</span>
                        <h4 style="margin: 0.5rem 0;">${prevSession?.topic}</h4>
                        <small>Preceptor: ${prevSession?.preceptor}</small>
                    </div>

                    <!-- Current -->
                    <div style="flex: 1; border: 2px solid var(--primary-green); background: #e8f5e9; padding: 1rem; border-radius: 8px; transform: scale(1.02);">
                        <span class="badge-success">Current (Week ${currentSession?.week})</span>
                        <h4 style="margin: 0.5rem 0;">${currentSession?.topic}</h4>
                        <p style="margin: 0;"><strong>Venue:</strong> ${currentSession?.topic.includes('IV Room') ? 'Hospital Venue – Large' : 'Riyadh Simulation Center'}</p>
                        <small style="display:block; margin-top:0.5rem;"><strong>Preceptor:</strong> ${currentSession?.preceptor}</small>
                    </div>

                    <!-- Next -->
                    <div style="flex: 1; border: 1px solid #ddd; padding: 1rem; border-radius: 8px; border-left: 4px solid var(--primary-gold);">
                        <span style="color: var(--primary-gold); font-weight: bold; font-size: 0.8rem;">Next Up (Week ${nextSession?.week})</span>
                        <h4 style="margin: 0.5rem 0;">${nextSession?.topic}</h4>
                        <small>Preceptor: ${nextSession?.preceptor}</small>
                    </div>
                </div>
            </div>

            <!--Active Requests Timeline-- >
            <div class="card mb-4">
                <div class="flex-between">
                    <h3 style="margin-bottom: 1rem; color: var(--primary-blue);">📨 Active Requests</h3>
                    <button class="btn btn-sm btn-outline" onclick="window.app.renderRequestForm('General')">+ New Request</button>
                </div>
                
                ${this.pharmaData.studentRequests && this.pharmaData.studentRequests.length > 0 ?
                this.pharmaData.studentRequests.map(req => {
                    // Determine step status colors
                    const s1 = req.step >= 1 ? 'var(--primary-green)' : '#eee';
                    const s2 = req.step >= 2 ? 'var(--primary-green)' : '#eee';
                    const s3 = req.step >= 3 ? 'var(--primary-green)' : '#eee';

                    return `
                        <div style="border:1px solid #eee; padding:1rem; border-radius:8px; margin-bottom:1rem;">
                            <div class="flex-between" style="margin-bottom:1rem;">
                                <div>
                                    <strong>${req.type}</strong> 
                                    <span style="font-size:0.85rem; background:#e3f2fd; color:#1565c0; padding:2px 6px; border-radius:4px; margin-left:0.5rem;">
                                        ${req.course || 'General'}
                                    </span>
                                    <div style="font-size:0.8rem; color:#666; margin-top:2px;">
                                        ID: ${req.id} • ${req.date}
                                    </div>
                                </div>
                                <span class="badge-warning">${req.status}</span>
                            </div>
                            
                            <!-- Timeline Stepper -->
                            <div style="display:flex; align-items:center; justify-content:space-between; position:relative; max-width:80%; margin:0 auto;">
                                <!-- Connecting Line -->
                                <div style="position:absolute; top:12px; left:0; width:100%; height:2px; background:#eee; z-index:0;"></div>
                                <div style="position:absolute; top:12px; left:0; width:${(req.step - 1) * 50}%; height:2px; background:var(--primary-green); z-index:0; transition:width 0.3s;"></div>

                                <!-- Step 1 -->
                                <div style="z-index:1; text-align:center;">
                                    <div style="width:24px; height:24px; background:${s1}; border-radius:50%; margin:0 auto; color:white; font-size:12px; line-height:24px;">✓</div>
                                    <small style="display:block; margin-top:5px; font-weight:bold;">Sent</small>
                                </div>
                                
                                <!-- Step 2 -->
                                <div style="z-index:1; text-align:center;">
                                    <div style="width:24px; height:24px; background:${req.step >= 2 ? s2 : '#fff'}; border:${req.step >= 2 ? 'none' : '2px solid #ddd'}; border-radius:50%; margin:0 auto; color:white; font-size:12px; line-height:24px;">
                                        ${req.step >= 2 ? '✓' : ''}
                                    </div>
                                    <small style="display:block; margin-top:5px;">Under Review</small>
                                </div>

                                <!-- Step 3 -->
                                <div style="z-index:1; text-align:center;">
                                    <div style="width:24px; height:24px; background:${req.step >= 3 ? s3 : '#fff'}; border:${req.step >= 3 ? 'none' : '2px solid #ddd'}; border-radius:50%; margin:0 auto; color:white; font-size:12px; line-height:24px;">
                                        ${req.step >= 3 ? '✓' : ''}
                                    </div>
                                    <small style="display:block; margin-top:5px;">Decision</small>
                                </div>
                            </div>
                        </div>
                        `;
                }).join('')
                : `<div style="text-align:center; padding:2rem; color:#999; border:2px dashed #eee; border-radius:8px;">
                        No active requests. Need help? Start a new request above.
                   </div>`
            }
            </div>

            <!--Dashboard Widgets-- >
            <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr);">
                <!-- Hours Chart -->
                <div class="card" style="text-align: center;">
                    <h3>Experiential Hours</h3>
                    <div style="position: relative; height: 150px; width: 150px; margin: 0 auto;">
                        <svg viewBox="0 0 36 36" class="circular-chart green">
                            <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path class="circle" stroke-dasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <text x="18" y="20.35" class="percentage">80%</text>
                        </svg>
                    </div>
                    <p>96 / 120 Hours</p>
                </div>

                <!-- EPA Progress -->
                <div class="card" style="text-align: center;">
                    <h3>EPA Progress</h3>
                     <div style="position: relative; height: 150px; width: 150px; margin: 0 auto;">
                        <svg viewBox="0 0 36 36" class="circular-chart gold">
                             <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <path class="circle" stroke-dasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                            <text x="18" y="20.35" class="percentage">1/2</text>
                        </svg>
                    </div>
                    <p>Entrustable Professional Activities</p>
                </div>

                <!-- Quick Actions -->
                <div class="card">
                    <h3>My Compass 🧭</h3>
                    <ul class="nav-menu">
                        <li style="padding: 0.5rem; border-bottom: 1px solid #eee; cursor:pointer;" onclick="window.app.renderDocumentHub()">
                            📂 <strong>Document Hub</strong> <br>
                            <small class="text-muted">Upload Compliance Docs</small>
                        </li>
                        <li style="padding: 0.5rem; border-bottom: 1px solid #eee; cursor:pointer;" onclick="window.app.renderHospitalProfiles()">
                            🏥 <strong>Hospital Directory</strong> <br>
                            <small class="text-muted">Explore Training Sites</small>
                        </li>
                        <li style="padding: 0.5rem; border-bottom: 1px solid #eee; cursor:pointer;" onclick="window.app.renderMySchedule()">
                            📅 <strong>My Schedule</strong> <br>
                            <small class="text-muted">View Rotation Blocks</small>
                        </li>
                    </ul>
                    <button class="btn btn-primary" onclick="window.app.renderRequestForm('General')" style="width: 100%; margin-top: 1rem;">+ New Request</button>
                    <button class="btn btn-outline" onclick="alert('Portfolio Manager Coming Soon')" style="width: 100%; margin-top: 0.5rem;">View e-Portfolio</button>
                </div>
            </div>
            
            <style>
                .circular-chart { display: block; margin: 10px auto; max-width: 80%; max-height: 250px; }
                .circle-bg { fill: none; stroke: #eee; stroke-width: 3.8; }
                .circle { fill: none; stroke-width: 2.8; stroke-linecap: round; animation: progress 1s ease-out forwards; }
                .percentage { fill: #666; font-family: sans-serif; font-weight: bold; font-size: 0.5em; text-anchor: middle; }
                .green .circle { stroke: #2ecc71; }
                .gold .circle { stroke: #f1c40f; }
            </style>
            `;
        this.root.innerHTML = html;
    }
}

// Global Helpers for Grading Center
window.currentBulkType = 'midterm';

window.updateBulkView = (type) => {
    window.currentBulkType = type;
    if (window.app) window.app.renderIPPE_Admin_Bulk();
};

window.saveBulkData = (studentId, type, value) => {
    // Simple save for attendance
    const student = window.appStore.data.students.find(s => s.id === studentId);
    if (student && type === 'attendance') {
        student.attendance = parseInt(value);
        window.appStore.save();
        alert('Saved!');
    }
};

window.renderGradingModal = (type, studentId) => {
    const student = window.appStore.data.students.find(s => s.id === studentId);
    if (!student) return;

    const rubric = RUBRICS[type];
    if (!rubric) { alert('Rubric not defined'); return; }

    const existing = (student.assessments && student.assessments[type]) ? student.assessments[type] : null;
    const answers = existing ? (existing.answers || {}) : {};

    let glossaryHtml = rubric.sections.map(section => {
        return `
                < h4 > ${section.title}</h4 >
                    ${section.questions.map(q => {
            const val = answers[q.id] || 0;
            return `
                    <div style="margin-bottom:1rem; padding:0.5rem; background:#f9f9f9; border-radius:4px;">
                        <p style="margin-bottom:0.5rem; font-weight:500;">${q.text}</p>
                        <div style="display:flex; gap:1rem;">
                            ${[1, 2, 3, 4, 5].map(v => `
                                <label style="cursor:pointer;">
                                    <input type="radio" name="${q.id}" value="${v}" ${val == v ? 'checked' : ''}> ${v}
                                </label>
                            `).join('')}
                        </div>
                    </div>
                `;
        }).join('')
            }
            `;
    }).join('');

    const modalHtml = `
                < div style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:1000; display:flex; justify-content:center; align-items:center;" >
                    <div style="background:white; padding:2rem; width:800px; max-height:90vh; overflow-y:auto; border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.2);">
                        <div class="flex-between mb-4">
                            <h2>Grade ${rubric.title}: ${student.name}</h2>
                            <button class="btn btn-outline" onclick="document.getElementById('grading-modal-container').innerHTML = ''">Close</button>
                        </div>
                        <form id="rubric-form">
                            ${glossaryHtml}
                        </form>
                        <div style="margin-top:1rem; text-align:right;">
                            <button class="btn btn-primary" onclick="window.saveRubricGrade('${type}', '${studentId}')">Save & Calculate Grade</button>
                        </div>
                    </div>
        </div >
                `;
    document.getElementById('grading-modal-container').innerHTML = modalHtml;
};

window.saveRubricGrade = (type, studentId) => {
    const form = document.getElementById('rubric-form');
    const inputs = form.querySelectorAll('input[type="radio"]:checked');
    const answers = {};
    let total = 0;
    let count = 0;

    inputs.forEach(input => {
        answers[input.name] = parseInt(input.value);
        total += parseInt(input.value);
        count++;
    });

    if (count === 0) { alert('Please select scores.'); return; }

    const maxScore = count * 5;
    const percentage = Math.round((total / maxScore) * 100);

    const student = window.appStore.data.students.find(s => s.id === studentId);
    if (!student.assessments) student.assessments = {};

    student.assessments[type] = {
        score: percentage,
        answers: answers,
        date: new Date().toISOString()
    };

    window.appStore.save();
    alert(`✅ Grade Saved! Score: ${total}/${maxScore} (${percentage}%) Assessment: ${type}`);
    document.getElementById('grading-modal-container').innerHTML = ''; // Close modal
    window.app.renderIPPE_Admin_Bulk(); // Refresh table
};

window.downloadMockReport = () => {
    alert("Downloading report... (Mock)");
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    if (window.appStore) {
        window.app = new App();
    } else {
        console.error('Store not initialized');
        document.body.innerHTML = '<h1 style="color:red; padding:2rem;">Error: Data Store Failed to Load</h1>';
    }
});

