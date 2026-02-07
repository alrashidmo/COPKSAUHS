// === APPE DATABASE ===
const APPE_DATABASE = {
    students: [
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

        this.data = loadedData || JSON.parse(JSON.stringify(APPE_DATABASE)); // Deep copy to avoid reference issues

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
            this.data = JSON.parse(JSON.stringify(APPE_DATABASE));
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

        // Academic Programs (Program Overview) State
        this._initAcademicProgramsData();
        
        // Community Service State
        this._initCommunityServiceData();

        this.init();
    }

    init() {
        try {
            console.log('App.init() called');
            this.setupGlobalNavigation();
            console.log('Global navigation setup complete');
            this.setupNavigation();
            console.log('Navigation setup complete');
            
            // Show a quick loading state
            this.title.textContent = 'Clinical Affairs Hub';
            this.root.innerHTML = '<div style="padding: 2rem; text-align: center;"><h2>Loading...</h2></div>';
            
            // Render after a brief delay to let DOM update
            // DON'T auto-render 'home' for non-admin users - they should stay on student portal
            setTimeout(() => {
                try {
                    // Only render 'home' (clinical view) for admin users
                    // Students will already have StudentPortal rendered from their tab click
                    console.log('App initialization complete - NOT auto-rendering to preserve user view');
                } catch (error) {
                    console.error('Error during render:', error);
                    this.root.innerHTML = `<div style="padding: 2rem; color: red;"><h2>Error Loading Dashboard</h2><pre>${error.message}\n${error.stack}</pre></div>`;
                }
            }, 100);
        } catch (error) {
            console.error('Error in init():', error);
            if (this.root) {
                this.root.innerHTML = `<div style="padding: 2rem; color: red;"><h2>Critical Error</h2><pre>${error.message}\n${error.stack}</pre></div>`;
            }
        }
    }

    setupGlobalNavigation() {
        try {
            const globalLinks = document.querySelectorAll('.global-nav-link');
            const unitNavs = document.querySelectorAll('.unit-nav');
            const mainContent = document.querySelector('.main-content');
            const app = this;

            console.log(`Setting up global nav with ${globalLinks.length} links`);

            globalLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const unit = this.dataset.unit;
                    console.log(`Clicked tab: ${unit}`);

                    // Update active state
                    globalLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');

                    // Always show content
                    if (mainContent) mainContent.style.display = 'flex';
                    
                    // Ensure unit-nav-container is visible by default
                    const unitNavContainer = document.querySelector('.unit-nav-container');
                    if (unitNavContainer) {
                        unitNavContainer.style.display = 'flex';
                    }

                    // Show correct sidebar based on unit
                    let hasSidebarForThisUnit = false;
                    unitNavs.forEach(nav => {
                        if (nav.id === `nav-${unit}`) {
                            nav.classList.remove('hidden');
                            nav.style.display = 'flex';
                            hasSidebarForThisUnit = true;
                        } else {
                            nav.classList.add('hidden');
                            nav.style.display = 'none';
                        }
                    });

                    // Apply full-width layout only if this unit has NO sidebar
                    const appContainer = document.querySelector('.app-container');
                    if (appContainer) {
                        appContainer.classList.toggle('admin-hub-full', !hasSidebarForThisUnit);
                    }
                    if (unitNavContainer) {
                        unitNavContainer.style.display = hasSidebarForThisUnit ? 'flex' : 'none';
                    }

                    // Render content for the selected unit
                    if (unit === 'qa') {
                        app.render('qa-strategic', { title: 'Quality Assurance Unit' });
                        app.setActiveNav('qa-strategic');
                    } else if (unit === 'research') {
                        app.render('research-overview', { title: 'Research Unit' });
                        app.setActiveNav('research-overview');
                    } else if (unit === 'academic') {
                        app.render('academic-overview', { title: 'Academic Affairs' });
                        app.setActiveNav('academic-overview');
                    } else if (unit === 'alumni') {
                        app.render('alumni-overview', { title: 'Alumni Unit' });
                        app.setActiveNav('alumni-overview');
                    } else if (unit === 'community') {
                        app.render('community-service', { title: 'Community Service Unit' });
                        app.setActiveNav('community-service');
                    } else if (unit === 'student-portal') {
                        app.render('student-home', { title: 'Student Portal' });
                        app.setActiveNav('student-dashboard');
                    } else if (unit === 'clinical') {
                        app.render('home');
                        app.setActiveNav('home');
                    } else if (unit === 'admin-home') {
                        // Hide sidebars and their container to avoid blank space
                        if (unitNavContainer) {
                            unitNavContainer.style.display = 'none';
                        }
                        unitNavs.forEach(nav => {
                            nav.classList.add('hidden');
                            nav.style.display = 'none';
                        });
                        // Switch to full-width layout (no sidebar column)
                        const appContainer = document.querySelector('.app-container');
                        if (appContainer) {
                            appContainer.classList.add('admin-hub-full');
                        }
                        const adminHome = document.getElementById('admin-home');
                        if (adminHome) {
                            adminHome.classList.add('hidden');
                            adminHome.style.display = 'none';
                        }
                        const appRoot = document.getElementById('app-root');
                        if (appRoot) {
                            appRoot.style.display = 'block';
                            appRoot.style.visibility = 'visible';
                        }
                        app.render('admin-hub');
                        app.setActiveNav('admin-hub');
                    }
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                });
            });
            console.log('Global navigation setup complete');
        } catch (error) {
            console.error('Error setting up global navigation:', error);
        }
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
                this.setActiveNav(view);
            });
        });
    }

    setActiveNav(view) {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.classList.toggle('active', link.dataset.view === view);
        });
    }

    // --- Academic Programs: Data & State ---
    _initAcademicProgramsData() {
        // Initialize with complete PharmD course list (45+ courses) + MSc programs
        const pharmdCourses = [
            // Year 1 Courses
            { code: 'PHAR101', name: 'Introduction to Pharmacy', eval: { years: ['2023','2024','2025'], overall: [4.2, 4.1, 3.8], teaching: [4.3, 4.2, 3.9], assessment: [4.0, 3.9, 3.6], resources: [4.1, 4.0, 3.7], outcomes: [4.2, 4.1, 3.8], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [89, 86, 81], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023': [78, 84, 72, 80], '2024': [74, 82, 70, 81], '2025': [71, 80, 68, 78] }, ploMap: { CLO1: ['PLO1'], CLO2: ['PLO2'], CLO3: ['PLO3'], CLO4: ['PLO1','PLO4'] }, benchmark: 75 }, comments: { strengths: ['Engaging intro', 'Clear objectives'], improvement: ['Assessment clarity', 'Resource availability'] } },
            { code: 'PHAR102', name: 'Pharmaceutical Chemistry I', eval: { years: ['2023','2024','2025'], overall: [4.3, 4.2, 4.1], teaching: [4.4, 4.3, 4.2], assessment: [4.1, 4.0, 3.9], resources: [4.2, 4.1, 4.0], outcomes: [4.3, 4.2, 4.1], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [91, 89, 87], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3'], achievement: { '2023': [80, 82, 78], '2024': [79, 81, 77], '2025': [78, 80, 76] }, ploMap: { CLO1: ['PLO1'], CLO2: ['PLO2'], CLO3: ['PLO3'] }, benchmark: 75 }, comments: { strengths: ['Structured curriculum', 'Good resources'], improvement: ['More problem sets'] } },
            { code: 'PHAR103', name: 'Pharmaceutical Calculation', eval: { years: ['2023','2024','2025'], overall: [3.9, 3.8, 3.7], teaching: [4.0, 3.9, 3.8], assessment: [3.8, 3.7, 3.6], resources: [3.9, 3.8, 3.7], outcomes: [3.9, 3.8, 3.7], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [85, 83, 81], benchmark: 85 }, clo: { list: ['CLO1','CLO2'], achievement: { '2023': [76, 74], '2024': [75, 73], '2025': [74, 72] }, ploMap: { CLO1: ['PLO1'], CLO2: ['PLO2'] }, benchmark: 75 }, comments: { strengths: ['Practical application'], improvement: ['More practice examples'] } },
            { code: 'PHAR104', name: 'Medicinal Chemistry', eval: { years: ['2023','2024','2025'], overall: [4.1, 4.0, 3.9], teaching: [4.2, 4.1, 4.0], assessment: [4.0, 3.9, 3.8], resources: [4.1, 4.0, 3.9], outcomes: [4.1, 4.0, 3.9], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [88, 86, 84], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023': [79, 81, 77, 80], '2024': [78, 80, 76, 79], '2025': [77, 79, 75, 78] }, ploMap: { CLO1: ['PLO1'], CLO2: ['PLO2'], CLO3: ['PLO3'], CLO4: ['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Good examples', 'Clear structure'], improvement: ['More interactive content'] } },
            { code: 'PHAR105', name: 'Biology for Pharmacists', eval: { years: ['2023','2024','2025'], overall: [4.0, 3.9, 3.8], teaching: [4.1, 4.0, 3.9], assessment: [3.9, 3.8, 3.7], resources: [4.0, 3.9, 3.8], outcomes: [4.0, 3.9, 3.8], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [87, 85, 83], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3'], achievement: { '2023': [78, 80, 76], '2024': [77, 79, 75], '2025': [76, 78, 74] }, ploMap: { CLO1: ['PLO1'], CLO2: ['PLO3'], CLO3: ['PLO5'] }, benchmark: 75 }, comments: { strengths: ['Comprehensive', 'Relevant'], improvement: ['Update examples'] } },
            // Year 2 Courses
            { code: 'PHAR205', name: 'Pharmacology I', eval: { years: ['2023','2024','2025'], overall: [4.4, 4.3, 4.2], teaching: [4.5, 4.3, 4.2], assessment: [4.2, 4.1, 4.0], resources: [4.3, 4.2, 4.1], outcomes: [4.4, 4.2, 4.2], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [92, 90, 88], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3'], achievement: { '2023':[82,86,79], '2024':[84,85,80], '2025':[83,84,81] }, ploMap: { CLO1:['PLO2'], CLO2:['PLO3'], CLO3:['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Strong lectures', 'Engaged faculty'], improvement: ['More practice questions'] } },
            { code: 'PHAR206', name: 'Pharmacology II', eval: { years: ['2023','2024','2025'], overall: [4.3, 4.2, 4.1], teaching: [4.4, 4.3, 4.2], assessment: [4.1, 4.0, 3.9], resources: [4.2, 4.1, 4.0], outcomes: [4.3, 4.2, 4.1], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [90, 89, 87], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023':[81,83,80,82], '2024':[80,82,79,81], '2025':[79,81,78,80] }, ploMap: { CLO1:['PLO2'], CLO2:['PLO3'], CLO3:['PLO4'], CLO4:['PLO5'] }, benchmark: 75 }, comments: { strengths: ['Well-organized', 'Good examples'], improvement: ['More case studies'] } },
            { code: 'PHAR210', name: 'Pharmaceutics I', eval: { years: ['2023','2024','2025'], overall: [4.0, 3.9, 3.8], teaching: [4.1, 4.0, 3.9], assessment: [3.9, 3.8, 3.7], resources: [4.0, 3.9, 3.8], outcomes: [4.0, 3.9, 3.8], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [86, 84, 82], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3'], achievement: { '2023':[77,79,75], '2024':[76,78,74], '2025':[75,77,73] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'] }, benchmark: 75 }, comments: { strengths: ['Practical labs'], improvement: ['Better equipment'] } },
            { code: 'PHAR211', name: 'Pharmaceutics II', eval: { years: ['2023','2024','2025'], overall: [4.1, 4.0, 3.9], teaching: [4.2, 4.1, 4.0], assessment: [4.0, 3.9, 3.8], resources: [4.1, 4.0, 3.9], outcomes: [4.1, 4.0, 3.9], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [88, 86, 84], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023':[79,81,77,80], '2024':[78,80,76,79], '2025':[77,79,75,78] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Good formulations', 'Clear'], improvement: ['More modern examples'] } },
            { code: 'PHAR220', name: 'Pharmacokinetics & Dynamics', eval: { years: ['2023','2024','2025'], overall: [4.2, 4.1, 4.0], teaching: [4.3, 4.2, 4.1], assessment: [4.0, 3.9, 3.8], resources: [4.1, 4.0, 3.9], outcomes: [4.2, 4.1, 4.0], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [89, 87, 85], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3'], achievement: { '2023':[80,82,78], '2024':[79,81,77], '2025':[78,80,76] }, ploMap: { CLO1:['PLO2'], CLO2:['PLO3'], CLO3:['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Mathematical approach', 'Relevant'], improvement: ['More simulations'] } },
            { code: 'PHAR230', name: 'Therapeutics I', eval: { years: ['2023','2024','2025'], overall: [4.1, 4.0, 3.9], teaching: [4.2, 4.1, 4.0], assessment: [4.0, 3.9, 3.8], resources: [4.1, 4.0, 3.9], outcomes: [4.1, 4.0, 3.9], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [87, 85, 83], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023':[78,80,76,79], '2024':[77,79,75,78], '2025':[76,78,74,77] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Clinical focus', 'Engaging'], improvement: ['More evidence-based'] } },
            // Year 3 Courses  
            { code: 'PHAR330', name: 'Therapeutics II', eval: { years: ['2023','2024','2025'], overall: [3.9, 3.7, 3.6], teaching: [4.0, 3.8, 3.7], assessment: [3.7, 3.5, 3.4], resources: [3.9, 3.6, 3.5], outcomes: [3.8, 3.6, 3.5], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [83, 80, 78], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4','CLO5'], achievement: { '2023':[72,74,70,76,73], '2024':[70,73,68,74,71], '2025':[69,72,66,72,70] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'], CLO5:['PLO5'] }, benchmark: 75 }, comments: { strengths: ['Clinical relevance', 'Cases'], improvement: ['Assessment fairness', 'Load management'] } },
            { code: 'PHAR340', name: 'Therapeutics III', eval: { years: ['2023','2024','2025'], overall: [3.8, 3.6, 3.5], teaching: [3.9, 3.7, 3.6], assessment: [3.6, 3.4, 3.3], resources: [3.8, 3.5, 3.4], outcomes: [3.7, 3.5, 3.4], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [81, 78, 76], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023':[70,72,68,74], '2024':[68,71,66,72], '2025':[67,70,65,71] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Complex cases'], improvement: ['More resources needed', 'Workload'] } },
            { code: 'PHAR350', name: 'Social & Administrative Pharmacy', eval: { years: ['2023','2024','2025'], overall: [4.0, 3.9, 3.8], teaching: [4.1, 4.0, 3.9], assessment: [3.9, 3.8, 3.7], resources: [4.0, 3.9, 3.8], outcomes: [4.0, 3.9, 3.8], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [86, 84, 82], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3'], achievement: { '2023':[77,79,75], '2024':[76,78,74], '2025':[75,77,73] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO4'], CLO3:['PLO5'] }, benchmark: 75 }, comments: { strengths: ['Policy focus', 'Relevant'], improvement: ['More practice'] } },
            { code: 'PHAR360', name: 'Pharmaceutics III (Industrial)', eval: { years: ['2023','2024','2025'], overall: [3.9, 3.8, 3.7], teaching: [4.0, 3.9, 3.8], assessment: [3.8, 3.7, 3.6], resources: [3.9, 3.8, 3.7], outcomes: [3.9, 3.8, 3.7], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [85, 83, 81], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023':[76,78,74,77], '2024':[75,77,73,76], '2025':[74,76,72,75] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Industry exposure'], improvement: ['More facility visits'] } },
            { code: 'PHAR370', name: 'Medicinal Chemistry II', eval: { years: ['2023','2024','2025'], overall: [4.1, 4.0, 3.9], teaching: [4.2, 4.1, 4.0], assessment: [4.0, 3.9, 3.8], resources: [4.1, 4.0, 3.9], outcomes: [4.1, 4.0, 3.9], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [88, 86, 84], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023':[79,81,77,80], '2024':[78,80,76,79], '2025':[77,79,75,78] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Advanced content', 'Clear'], improvement: ['More application'] } },
            // Year 4 / APPE Courses
            { code: 'PHAR410', name: 'Clinical Pharmacy & Therapeutics', eval: { years: ['2023','2024','2025'], overall: [4.3, 4.2, 4.1], teaching: [4.4, 4.3, 4.2], assessment: [4.1, 4.0, 3.9], resources: [4.2, 4.1, 4.0], outcomes: [4.3, 4.2, 4.1], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [90, 89, 87], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4','CLO5'], achievement: { '2023':[81,83,80,82,79], '2024':[80,82,79,81,78], '2025':[79,81,78,80,77] }, ploMap: { CLO1:['PLO2'], CLO2:['PLO3'], CLO3:['PLO4'], CLO4:['PLO5'], CLO5:['PLO1'] }, benchmark: 75 }, comments: { strengths: ['Patient-focused', 'Excellent faculty'], improvement: ['More patient interaction'] } },
            { code: 'PHAR420', name: 'Community Pharmacy Practice', eval: { years: ['2023','2024','2025'], overall: [4.2, 4.1, 4.0], teaching: [4.3, 4.2, 4.1], assessment: [4.0, 3.9, 3.8], resources: [4.1, 4.0, 3.9], outcomes: [4.2, 4.1, 4.0], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [89, 88, 86], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023':[80,82,78,81], '2024':[79,81,77,80], '2025':[78,80,76,79] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO4'], CLO4:['PLO5'] }, benchmark: 75 }, comments: { strengths: ['Real-world experience', 'Practical'], improvement: ['More diverse settings'] } },
            { code: 'PHAR430', name: 'Hospital Pharmacy Practice', eval: { years: ['2023','2024','2025'], overall: [4.1, 4.0, 3.9], teaching: [4.2, 4.1, 4.0], assessment: [4.0, 3.9, 3.8], resources: [4.1, 4.0, 3.9], outcomes: [4.1, 4.0, 3.9], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [87, 85, 83], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023':[78,80,76,79], '2024':[77,79,75,78], '2025':[76,78,74,77] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Systems approach', 'Comprehensive'], improvement: ['More technology'] } },
            { code: 'PHAR440', name: 'Pharmacy Leadership & Management', eval: { years: ['2023','2024','2025'], overall: [3.9, 3.8, 3.7], teaching: [4.0, 3.9, 3.8], assessment: [3.8, 3.7, 3.6], resources: [3.9, 3.8, 3.7], outcomes: [3.9, 3.8, 3.7], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [84, 82, 80], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3'], achievement: { '2023':[75,77,73], '2024':[74,76,72], '2025':[73,75,71] }, ploMap: { CLO1:['PLO4'], CLO2:['PLO5'], CLO3:['PLO1'] }, benchmark: 75 }, comments: { strengths: ['Leadership focus'], improvement: ['More case studies needed'] } },
            { code: 'PHAR450', name: 'Pharmacy Informatics & Technology', eval: { years: ['2023','2024','2025'], overall: [4.0, 3.9, 3.8], teaching: [4.1, 4.0, 3.9], assessment: [3.9, 3.8, 3.7], resources: [4.0, 3.9, 3.8], outcomes: [4.0, 3.9, 3.8], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [86, 84, 82], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3'], achievement: { '2023':[77,79,75], '2024':[76,78,74], '2025':[75,77,73] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'] }, benchmark: 75 }, comments: { strengths: ['Tech-forward', 'Modern'], improvement: ['More hands-on training'] } },
            { code: 'PHAR460', name: 'Research Methods & Evidence', eval: { years: ['2023','2024','2025'], overall: [4.1, 4.0, 3.9], teaching: [4.2, 4.1, 4.0], assessment: [4.0, 3.9, 3.8], resources: [4.1, 4.0, 3.9], outcomes: [4.1, 4.0, 3.9], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [88, 86, 84], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023':[79,81,77,80], '2024':[78,80,76,79], '2025':[77,79,75,78] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Evidence-based', 'Rigorous'], improvement: ['More datasets'] } },
            { code: 'PHAR470', name: 'Global Health & Pharmacy', eval: { years: ['2023','2024','2025'], overall: [4.0, 3.9, 3.8], teaching: [4.1, 4.0, 3.9], assessment: [3.9, 3.8, 3.7], resources: [4.0, 3.9, 3.8], outcomes: [4.0, 3.9, 3.8], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [86, 84, 82], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3'], achievement: { '2023':[77,79,75], '2024':[76,78,74], '2025':[75,77,73] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO4'], CLO3:['PLO5'] }, benchmark: 75 }, comments: { strengths: ['International focus'], improvement: ['More field experience'] } },
            { code: 'PHAR480', name: 'Patient Counseling Skills', eval: { years: ['2023','2024','2025'], overall: [4.2, 4.1, 4.0], teaching: [4.3, 4.2, 4.1], assessment: [4.0, 3.9, 3.8], resources: [4.1, 4.0, 3.9], outcomes: [4.2, 4.1, 4.0], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [89, 88, 86], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4','CLO5'], achievement: { '2023':[80,82,78,81,79], '2024':[79,81,77,80,78], '2025':[78,80,76,79,77] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'], CLO5:['PLO5'] }, benchmark: 75 }, comments: { strengths: ['Interactive', 'Practical'], improvement: ['More recordings'] } },
            { code: 'PHAR490', name: 'IPPE - Institutional Pharmacy', eval: { years: ['2023','2024','2025'], overall: [4.1, 4.0, 3.9], teaching: [4.2, 4.1, 4.0], assessment: [4.0, 3.9, 3.8], resources: [4.1, 4.0, 3.9], outcomes: [4.1, 4.0, 3.9], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [87, 85, 83], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4','CLO5'], achievement: { '2023':[78,80,76,79,77], '2024':[77,79,75,78,76], '2025':[76,78,74,77,75] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'], CLO5:['PLO5'] }, benchmark: 75 }, comments: { strengths: ['Hands-on experience'], improvement: ['More preceptor training'] } },
            { code: 'PHAR500', name: 'APPE - Community Pharmacy', eval: { years: ['2023','2024','2025'], overall: [4.2, 4.1, 4.0], teaching: [4.3, 4.2, 4.1], assessment: [4.0, 3.9, 3.8], resources: [4.1, 4.0, 3.9], outcomes: [4.2, 4.1, 4.0], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [89, 88, 86], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4','CLO5'], achievement: { '2023':[80,82,78,81,79], '2024':[79,81,77,80,78], '2025':[78,80,76,79,77] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'], CLO5:['PLO5'] }, benchmark: 75 }, comments: { strengths: ['Real-world immersion'], improvement: ['More diverse cases'] } },
            { code: 'PHAR510', name: 'APPE - Clinical Hospital', eval: { years: ['2023','2024','2025'], overall: [4.3, 4.2, 4.1], teaching: [4.4, 4.3, 4.2], assessment: [4.1, 4.0, 3.9], resources: [4.2, 4.1, 4.0], outcomes: [4.3, 4.2, 4.1], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [90, 89, 87], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4','CLO5'], achievement: { '2023':[81,83,80,82,79], '2024':[80,82,79,81,78], '2025':[79,81,78,80,77] }, ploMap: { CLO1:['PLO2'], CLO2:['PLO3'], CLO3:['PLO4'], CLO4:['PLO5'], CLO5:['PLO1'] }, benchmark: 75 }, comments: { strengths: ['Clinical excellence', 'Strong faculty'], improvement: ['More patient encounters'] } },
            { code: 'PHAR520', name: 'APPE - Specialty Practice', eval: { years: ['2023','2024','2025'], overall: [4.1, 4.0, 3.9], teaching: [4.2, 4.1, 4.0], assessment: [4.0, 3.9, 3.8], resources: [4.1, 4.0, 3.9], outcomes: [4.1, 4.0, 3.9], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [87, 85, 83], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023':[78,80,76,79], '2024':[77,79,75,78], '2025':[76,78,74,77] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Specialized knowledge'], improvement: ['More rotation options'] } },
            { code: 'PHAR530', name: 'APPE - Elective Rotation 1', eval: { years: ['2023','2024','2025'], overall: [4.0, 3.9, 3.8], teaching: [4.1, 4.0, 3.9], assessment: [3.9, 3.8, 3.7], resources: [4.0, 3.9, 3.8], outcomes: [4.0, 3.9, 3.8], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [86, 84, 82], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023':[77,79,75,78], '2024':[76,78,74,77], '2025':[75,77,73,76] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Student choice', 'Flexible'], improvement: ['More options needed'] } },
            { code: 'PHAR540', name: 'APPE - Elective Rotation 2', eval: { years: ['2023','2024','2025'], overall: [4.0, 3.9, 3.8], teaching: [4.1, 4.0, 3.9], assessment: [3.9, 3.8, 3.7], resources: [4.0, 3.9, 3.8], outcomes: [4.0, 3.9, 3.8], benchmark: 4.0 }, passRates: { years: ['2023','2024','2025'], values: [86, 84, 82], benchmark: 85 }, clo: { list: ['CLO1','CLO2','CLO3','CLO4'], achievement: { '2023':[77,79,75,78], '2024':[76,78,74,77], '2025':[75,77,73,76] }, ploMap: { CLO1:['PLO1'], CLO2:['PLO2'], CLO3:['PLO3'], CLO4:['PLO4'] }, benchmark: 75 }, comments: { strengths: ['Choice flexibility'], improvement: ['More tracking'] } }
        ];
        
        this.academicPrograms = {
            cloEditMode: false,
            programs: [
                { id: 'pharmd', name: 'PharmD Program' },
                { id: 'msc-clinical', name: 'MSc Clinical Pharmacy' },
                { id: 'msc-sciences', name: 'MSc Pharmaceutical Sciences' }
            ],
            coursesByProgram: {
                'pharmd': pharmdCourses,
                'msc-clinical': [
                    {
                        code: 'CLN601', name: 'Clinical Research Methods',
                        eval: { years:['2023','2024','2025'], overall:[4.5,4.4,4.3], teaching:[4.6,4.5,4.4], assessment:[4.4,4.3,4.2], resources:[4.5,4.4,4.3], outcomes:[4.5,4.4,4.3], benchmark:4.2 },
                        passRates: { years:['2023','2024','2025'], values:[96,95,94], benchmark:90 },
                        clo: { list:['CLO1','CLO2','CLO3'], achievement:{'2023':[88,90,85],'2024':[87,89,86],'2025':[86,88,85]}, ploMap:{CLO1:['PLO1'],CLO2:['PLO3'],CLO3:['PLO5']}, benchmark:80 },
                        comments: { strengths:['Excellent supervision'], improvement:['Increase applied projects'] }
                    }
                ],
                'msc-sciences': [
                    {
                        code: 'PSC701', name: 'Advanced Pharmaceutics',
                        eval: { years:['2023','2024','2025'], overall:[4.1,4.0,4.0], teaching:[4.2,4.1,4.0], assessment:[4.0,3.9,3.9], resources:[4.1,4.0,4.0], outcomes:[4.1,4.0,4.0], benchmark:4.0 },
                        passRates: { years:['2023','2024','2025'], values:[90,88,89], benchmark:85 },
                        clo: { list:['CLO1','CLO2','CLO3','CLO4'], achievement:{'2023':[78,80,79,81],'2024':[77,79,80,80],'2025':[78,79,79,81]}, ploMap:{CLO1:['PLO2'],CLO2:['PLO2','PLO4'],CLO3:['PLO3'],CLO4:['PLO5']}, benchmark:75 },
                        comments: { strengths:['Strong lab components'], improvement:['More modern equipment'] }
                    }
                ]
            }
        };

        const defaultProgram = this.academicPrograms.programs[0].id;
        const defaultCourse = this.academicPrograms.coursesByProgram[defaultProgram][0].code;
        this.academicState = { programId: defaultProgram, courseCode: defaultCourse };
    }

    _getSelectedProgram() {
        const pid = this.academicState.programId;
        return this.academicPrograms.programs.find(p => p.id === pid);
    }

    _getSelectedCourse() {
        const list = this.academicPrograms.coursesByProgram[this.academicState.programId] || [];
        return list.find(c => c.code === this.academicState.courseCode) || list[0];
    }

    showEditCenter(programId) {
        const program = this.academicPrograms.programs.find(p => p.id === programId);
        const courses = this.academicPrograms.coursesByProgram[programId] || [];
        
        // Create modal overlay
        const modal = document.createElement('div');
        modal.style.cssText = 'position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:9999;';
        
        const modalContent = document.createElement('div');
        modalContent.style.cssText = 'background:white; border-radius:8px; padding:2rem; max-width:900px; width:90vh; max-height:85vh; overflow-y:auto; box-shadow:0 4px 6px rgba(0,0,0,0.1);';
        
        modalContent.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <h2>📝 Course Manager — ${program.name}</h2>
                <button id="closeModal" style="background:none; border:none; font-size:1.5rem; cursor:pointer; color:#666;">✕</button>
            </div>
            
            <div style="margin-bottom:1.5rem;">
                <input type="text" id="searchCourses" placeholder="🔍 Search courses by code or name..." style="width:100%; padding:0.75rem; border:1px solid #ddd; border-radius:4px; font-size:1rem;">
            </div>
            
            <div id="coursesList" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(250px, 1fr)); gap:1rem;">
                ${courses.map(course => `
                    <div class="course-card" data-code="${course.code}" style="border:1px solid #ddd; border-radius:6px; padding:1rem; cursor:pointer; transition:all 0.2s; background:#fafafa;" onmouseover="this.style.boxShadow='0 4px 8px rgba(0,0,0,0.15)'; this.style.background='#f5f5f5';" onmouseout="this.style.boxShadow='none'; this.style.background='#fafafa';">
                        <h4 style="margin:0 0 0.5rem 0; color:#333;">${course.code}</h4>
                        <p style="margin:0 0 0.5rem 0; font-size:0.9rem; color:#666;">${course.name}</p>
                        <div style="font-size:0.85rem; color:#888; margin-bottom:0.75rem;">
                            <div>Latest: ${course.eval.overall[course.eval.overall.length-1]}/5.0</div>
                            <div>Pass Rate: ${course.passRates.values[course.passRates.values.length-1]}%</div>
                        </div>
                        <button onclick="event.stopPropagation();" class="edit-btn" style="background:#2196F3; color:white; border:none; padding:0.4rem 0.8rem; border-radius:3px; cursor:pointer; font-size:0.85rem; width:100%;">Edit Course</button>
                    </div>
                `).join('')}
            </div>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // Close button
        document.getElementById('closeModal').addEventListener('click', () => {
            modal.remove();
        });
        
        // Search functionality
        document.getElementById('searchCourses').addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('.course-card').forEach(card => {
                const code = card.getAttribute('data-code').toLowerCase();
                const name = card.querySelector('p').textContent.toLowerCase();
                card.style.display = (code.includes(term) || name.includes(term)) ? '' : 'none';
            });
        });
        
        // Edit course buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const courseCode = e.target.closest('.course-card').getAttribute('data-code');
                const course = courses.find(c => c.code === courseCode);
                this.showCourseEditor(course, programId, modal);
            });
        });
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }
    
    showCourseEditor(course, programId, parentModal) {
        const editorModal = document.createElement('div');
        editorModal.style.cssText = 'position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:10000;';
        
        const editorContent = document.createElement('div');
        editorContent.style.cssText = 'background:white; border-radius:8px; padding:2rem; max-width:700px; width:90%; max-height:90vh; overflow-y:auto; box-shadow:0 4px 6px rgba(0,0,0,0.1);';
        
        editorContent.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem;">
                <h2>${course.code} — ${course.name}</h2>
                <button id="closeEditor" style="background:none; border:none; font-size:1.5rem; cursor:pointer; color:#666;">✕</button>
            </div>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem;">
                <div>
                    <h4>Course Name</h4>
                    <input type="text" id="editName" value="${course.name}" style="width:100%; padding:0.5rem; border:1px solid #ddd; border-radius:4px;">
                </div>
                <div>
                    <h4>Benchmark Score</h4>
                    <input type="number" id="editBenchmark" value="${course.eval.benchmark}" step="0.1" min="0" max="5" style="width:100%; padding:0.5rem; border:1px solid #ddd; border-radius:4px;">
                </div>
            </div>
            
            <div style="margin-top:1.5rem;">
                <h4>Overall Evaluation Scores (Last 3 Years)</h4>
                <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.5rem;">
                    ${course.eval.overall.map((score, i) => `
                        <div>
                            <label style="font-size:0.85rem; color:#666;">Year ${course.eval.years[i]}</label>
                            <input type="number" id="evalScore${i}" value="${score}" step="0.1" min="0" max="5" style="width:100%; padding:0.4rem; border:1px solid #ddd; border-radius:3px;">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="margin-top:1.5rem;">
                <h4>Pass Rates (Last 3 Years)</h4>
                <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.5rem;">
                    ${course.passRates.values.map((rate, i) => `
                        <div>
                            <label style="font-size:0.85rem; color:#666;">Year ${course.eval.years[i]}</label>
                            <input type="number" id="passRate${i}" value="${rate}" step="1" min="0" max="100" style="width:100%; padding:0.4rem; border:1px solid #ddd; border-radius:3px;">
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="margin-top:1.5rem;">
                <h4>Strengths (one per line)</h4>
                <textarea id="editStrengths" style="width:100%; padding:0.5rem; border:1px solid #ddd; border-radius:4px; font-family:monospace; font-size:0.9rem; height:80px;">${course.comments.strengths.join('\\n')}</textarea>
            </div>
            
            <div style="margin-top:1.5rem;">
                <h4>Areas for Improvement (one per line)</h4>
                <textarea id="editImprovement" style="width:100%; padding:0.5rem; border:1px solid #ddd; border-radius:4px; font-family:monospace; font-size:0.9rem; height:80px;">${course.comments.improvement.join('\\n')}</textarea>
            </div>
            
            <div style="display:flex; gap:1rem; margin-top:2rem;">
                <button id="saveCourse" style="flex:1; background:#4CAF50; color:white; border:none; padding:0.75rem; border-radius:4px; cursor:pointer; font-size:1rem;">💾 Save Changes</button>
                <button id="cancelEdit" style="flex:1; background:#f44336; color:white; border:none; padding:0.75rem; border-radius:4px; cursor:pointer; font-size:1rem;">Cancel</button>
            </div>
        `;
        
        editorModal.appendChild(editorContent);
        document.body.appendChild(editorModal);
        
        // Close buttons
        document.getElementById('closeEditor').addEventListener('click', () => {
            editorModal.remove();
        });
        document.getElementById('cancelEdit').addEventListener('click', () => {
            editorModal.remove();
        });
        
        // Save button
        document.getElementById('saveCourse').addEventListener('click', () => {
            const updatedCourse = {
                ...course,
                name: document.getElementById('editName').value,
                eval: {
                    ...course.eval,
                    overall: [
                        parseFloat(document.getElementById('evalScore0').value),
                        parseFloat(document.getElementById('evalScore1').value),
                        parseFloat(document.getElementById('evalScore2').value)
                    ],
                    benchmark: parseFloat(document.getElementById('editBenchmark').value),
                    teaching: course.eval.teaching,
                    assessment: course.eval.assessment,
                    resources: course.eval.resources,
                    outcomes: course.eval.outcomes,
                    years: course.eval.years
                },
                passRates: {
                    ...course.passRates,
                    values: [
                        parseInt(document.getElementById('passRate0').value),
                        parseInt(document.getElementById('passRate1').value),
                        parseInt(document.getElementById('passRate2').value)
                    ],
                    benchmark: course.passRates.benchmark
                },
                comments: {
                    strengths: document.getElementById('editStrengths').value.split('\\n').filter(s => s.trim()),
                    improvement: document.getElementById('editImprovement').value.split('\\n').filter(s => s.trim())
                }
            };
            
            // Update the course in data
            const programCourses = this.academicPrograms.coursesByProgram[programId];
            const idx = programCourses.findIndex(c => c.code === course.code);
            if (idx >= 0) {
                programCourses[idx] = updatedCourse;
            }
            
            // Save to localStorage
            this.save();
            
            // Close modal and refresh
            editorModal.remove();
            alert('✅ Course updated successfully!');
            this.renderAcademicOverview();
        });
        
        // Close on background click
        editorModal.addEventListener('click', (e) => {
            if (e.target === editorModal) editorModal.remove();
        });
    }

    // --- Academic Overview Render ---
    renderAcademicOverview() {
        const program = this._getSelectedProgram();
        const courses = this.academicPrograms.coursesByProgram[program.id] || [];
        if (!courses.length) {
            this.title.textContent = 'Program Overview';
            this.root.innerHTML = '<div class="card"><p>No courses available.</p></div>';
            return;
        }
        const courseMetaOrObj = this._getSelectedCourse();
        const course = courseMetaOrObj && courseMetaOrObj.eval ? courseMetaOrObj : this._buildCourseFromMeta(courseMetaOrObj);

        this.title.innerHTML = `Program Overview — ${program.name}`;

        // Compute alerts across program
        const attention = this._computeProgramAlerts(program.id);

        this.root.innerHTML = `
            <div class="dashboard-grid" style="grid-template-columns: 1fr; gap: 1rem;">
                <div class="card" style="display:flex; gap: 1rem; align-items:center; flex-wrap: wrap; justify-content: space-between;">
                    <div style="display:flex; gap: 1rem; flex-wrap: wrap;">
                        <div>
                            <label style="font-size:0.9rem; color:#666;">Program</label><br>
                            <select id="programSelect" class="btn btn-outline" style="min-width:260px;">
                                ${this.academicPrograms.programs.filter(p => p.id === 'pharmd').map(p => `<option value="${p.id}" ${p.id===program.id?'selected':''}>${p.name}</option>`).join('')}
                            </select>
                        </div>
                        <div>
                            <label style="font-size:0.9rem; color:#666;">Course</label><br>
                            <select id="courseSelect" class="btn btn-outline" style="min-width:280px;">
                                ${courses.map(c => `<option value="${c.code}" ${c.code===course.code?'selected':''}>${c.code} — ${c.name}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                    <div>
                        <button id="editCenterBtn" class="btn" style="background:#4CAF50; color:white; padding:0.5rem 1rem; border-radius:4px; cursor:pointer;">📝 Edit Center</button>
                    </div>
                </div>

                <!-- Section 3: Course Evaluation -->
                <div class="card">
                    <div class="flex-between"><h3>📝 3. Course Evaluation</h3><span style="color:#888; font-size:0.9rem;">Quantitative + Qualitative</span></div>
                    <div class="dashboard-grid" style="grid-template-columns: 2fr 1fr; gap: 1rem;">
                        <div class="card" style="box-shadow:none; border:1px solid #eee;">
                            <h4 style="text-align:center;">Overall Rating — 3-year Trend vs Benchmark</h4>
                            <div style="height:260px;">
                                <canvas id="evalTrendChart"></canvas>
                            </div>
                        </div>
                        <div class="card" style="box-shadow:none; border:1px solid #eee;">
                            <h4 style="text-align:center;">Latest Year Metrics</h4>
                            <div style="height:220px;">
                                <canvas id="evalBarsChart"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-grid" style="grid-template-columns: 1fr 1fr; gap: 1rem; margin-top:1rem;">
                        <div class="card" style="box-shadow:none; border:1px solid #eee;">
                            <h4>Qualitative Themes — Strengths</h4>
                            <ul style="margin-top:0.5rem; color:#2e7d32;">
                                ${course.comments.strengths.map(t => `<li>• ${t}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="card" style="box-shadow:none; border:1px solid #eee;">
                            <h4>Qualitative Themes — Areas for Improvement</h4>
                            <ul style="margin-top:0.5rem; color:#c62828;">
                                ${course.comments.improvement.map(t => `<li>• ${t}</li>`).join('')}
                            </ul>
                            <div style="font-size:0.8rem; color:#888; margin-top:0.5rem;">⚠️ No raw comments — only categorized themes.</div>
                        </div>
                    </div>
                </div>

                <!-- Section 5: Learning Outcomes (CLO Mapping) -->
                <div class="card">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                        <h3>🎯 5. Learning Outcomes (CLO Mapping)</h3>
                        <button id="cloEditToggle" class="btn btn-outline" style="border:1px solid #2196F3; color:#0D47A1;">
                            ${this.academicPrograms.cloEditMode ? '💾 Save & Exit Edit Mode' : '✏️ Edit CLO Mapping'}
                        </button>
                    </div>
                    <div class="dashboard-grid" style="grid-template-columns: 2fr 1fr; gap:1rem;">
                        <div>
                            <div style="overflow:auto;">
                                ${this._renderCLOHeatmap(course)}
                            </div>
                        </div>
                        <div>
                            ${this._renderCLOInsights(course)}
                        </div>
                    </div>
                </div>

                <!-- Section 8: Trends & Alerts -->
                <div class="card">
                    <h3 style="margin-bottom:1rem;">📈 8. Trends & Alerts</h3>
                    ${this._renderAlertsAttractive(program.id, course, attention)}
                </div>
            </div>
        `;

        // Wire up selects
        document.getElementById('programSelect').addEventListener('change', (e) => {
            const pid = e.target.value;
            const firstCourse = this.academicPrograms.coursesByProgram[pid]?.[0];
            this.academicState.programId = pid;
            this.academicState.courseCode = firstCourse ? firstCourse.code : '';
            this.renderAcademicOverview();
        });
        document.getElementById('courseSelect').addEventListener('change', (e) => {
            this.academicState.courseCode = e.target.value;
            this.renderAcademicOverview();
        });
        
        // Edit Center button
        document.getElementById('editCenterBtn').addEventListener('click', () => {
            this.showEditCenter(program.id);
        });

        // CLO Edit Toggle button
        document.getElementById('cloEditToggle').addEventListener('click', () => {
            this.academicPrograms.cloEditMode = !this.academicPrograms.cloEditMode;
            this.renderAcademicOverview();
        });

        // CLO mapping inputs (if in edit mode)
        if (this.academicPrograms.cloEditMode) {
            document.querySelectorAll('.clo-plo-input').forEach(inp => {
                inp.addEventListener('change', (e) => {
                    const clo = e.target.dataset.clo;
                    const values = e.target.value.split(',').map(v => v.trim()).filter(v => v);
                    course.clo.ploMap[clo] = values;
                });
            });
            
            document.querySelectorAll('.clo-nqf-input').forEach(inp => {
                inp.addEventListener('change', (e) => {
                    const clo = e.target.dataset.clo;
                    const values = e.target.value.split(',').map(v => v.trim()).filter(v => v);
                    course.clo.nqfMap[clo] = values;
                });
            });
        }

        // Charts
        this._renderEvalCharts(course);
    }

    // Build deterministic course metrics from metadata
    _buildCourseFromMeta(meta) {
        if (!meta) return null;
        const code = meta.code || meta.name;
        // Seeded random by code
        let hash = 0; for (let i = 0; i < code.length; i++) { hash = (hash << 5) - hash + code.charCodeAt(i); hash |= 0; }
        const rnd = (min, max, f=2) => { hash = (hash * 1664525 + 1013904223) | 0; const x = ((hash >>> 0) % 1000) / 1000; const v = min + (max - min) * x; return parseFloat(v.toFixed(f)); };

        const years = ['2023','2024','2025'];
        // Overall ratings ~ 3.6–4.6, gently varying
        const base = rnd(3.6, 4.6);
        const overall = [base + rnd(-0.2, 0.2), base + rnd(-0.2, 0.2), base + rnd(-0.25, 0.15)].map(v => Math.max(3.0, Math.min(4.8, parseFloat(v.toFixed(2)))));
        const teaching = overall.map(v => Math.max(3.0, Math.min(4.8, parseFloat((v + rnd(-0.1, 0.15)).toFixed(2)))));
        const assessment = overall.map(v => Math.max(3.0, Math.min(4.8, parseFloat((v + rnd(-0.15, 0.1)).toFixed(2)))));
        const resources = overall.map(v => Math.max(3.0, Math.min(4.8, parseFloat((v + rnd(-0.1, 0.1)).toFixed(2)))));
        const outcomes = overall.map(v => Math.max(3.0, Math.min(4.8, parseFloat((v + rnd(-0.05, 0.1)).toFixed(2)))));

        const passValues = [Math.round(rnd(78, 95)), Math.round(rnd(78, 95)), Math.round(rnd(78, 95))];
        const cloCount = Math.max(3, Math.min(6, Math.round(rnd(3, 6))));
        const cloList = Array.from({ length: cloCount }, (_, i) => `CLO${i + 1}`);
        const threshold = 75;
        const ach = {};
        years.forEach(y => { ach[y] = cloList.map(() => Math.round(rnd(68, 90))); });
        const ploMap = {}; cloList.forEach((c, i) => { const plos = ['PLO1','PLO2','PLO3','PLO4','PLO5']; ploMap[c] = [plos[i % plos.length]]; });

        const strengths = ['Engaging delivery', 'Clear objectives', 'Relevant content'];
        const improvement = ['Assessment clarity', 'Resource availability', 'Workload balance'];

        return {
            code: meta.code, name: meta.name,
            eval: { years, overall, teaching, assessment, resources, outcomes, benchmark: 4.0 },
            passRates: { years, values: passValues, benchmark: 85 },
            clo: { list: cloList, achievement: ach, ploMap, benchmark: threshold },
            comments: { strengths, improvement }
        };
    }

    _renderEvalCharts(course) {
        const y = course.eval.years;
        const overall = course.eval.overall;
        const benchmark = course.eval.benchmark;
        const ctxTrend = document.getElementById('evalTrendChart');
        new Chart(ctxTrend, {
            type: 'line',
            data: {
                labels: y,
                datasets: [
                    { label: 'Overall Rating', data: overall, borderColor: '#1565c0', backgroundColor: 'rgba(21,101,192,0.1)', tension: 0.2 },
                    { label: 'Benchmark', data: y.map(() => benchmark), borderColor: '#9e9e9e', borderDash:[6,4], pointRadius:0 }
                ]
            },
            options: { responsive:true, maintainAspectRatio:false, scales:{ y:{ suggestedMin:3, suggestedMax:5 } } }
        });

        const latestIdx = y.length - 1;
        const latest = [
            { k:'Teaching', v: course.eval.teaching[latestIdx] },
            { k:'Assessment', v: course.eval.assessment[latestIdx] },
            { k:'Resources', v: course.eval.resources[latestIdx] },
            { k:'Outcomes', v: course.eval.outcomes[latestIdx] }
        ];
        const ctxBars = document.getElementById('evalBarsChart');
        new Chart(ctxBars, {
            type: 'bar',
            data: {
                labels: latest.map(d=>d.k),
                datasets: [{ label: 'Score', data: latest.map(d=>d.v), backgroundColor: ['#42a5f5','#ab47bc','#66bb6a','#ff7043'] }]
            },
            options: { responsive:true, maintainAspectRatio:false, scales:{ y:{ suggestedMin:3, suggestedMax:5 } }, plugins:{ legend:{ display:false } } }
        });
    }

    _renderCLOHeatmap(course) {
        const years = Object.keys(course.clo.achievement);
        const clolist = course.clo.list;
        const threshold = course.clo.benchmark;
        // Build grid
        let html = '<div style="min-width:520px;">';
        html += '<div style="display:grid; grid-template-columns: 120px repeat(' + years.length + ', 1fr); gap:2px; align-items:stretch;">';
        html += '<div></div>' + years.map(y=>`<div style="padding:6px; text-align:center; font-weight:bold; background:#f0f0f0;">${y}</div>`).join('');
        clolist.forEach((clo, idx) => {
            html += `<div style="padding:6px; background:#fafafa; font-weight:bold;">${clo}</div>`;
            years.forEach(y => {
                const val = course.clo.achievement[y][idx];
                const color = val >= threshold ? '#e8f5e9' : '#ffebee';
                const txt = val >= threshold ? '#2e7d32' : '#c62828';
                html += `<div style="padding:8px; text-align:center; background:${color}; color:${txt};">${val}%</div>`;
            });
        });
        html += '</div></div>';
        return html;
    }

    _renderCLOInsights(course) {
        const threshold = course.clo.benchmark;
        const years = Object.keys(course.clo.achievement);
        const below = new Set();
        course.clo.list.forEach((clo, i) => {
            let lowYears = 0;
            years.forEach(y => { if (course.clo.achievement[y][i] < threshold) lowYears++; });
            if (lowYears >= 2) below.add(clo);
        });
        
        const editMode = this.academicPrograms.cloEditMode;
        
        // Initialize NQF mapping if not exists
        if (!course.clo.nqfMap) {
            course.clo.nqfMap = {};
            course.clo.list.forEach(c => { course.clo.nqfMap[c] = ['NQF1']; });
        }
        
        // Visual mapping with flowchart style
        const colors = ['#2196F3', '#4CAF50', '#FF9800', '#9C27B0', '#F44336', '#00BCD4', '#CDDC39', '#E91E63'];
        
        let visualHtml = '<div style="background:#fafafa; padding:1.5rem; border-radius:8px; overflow-x:auto;">';
        visualHtml += '<div style="display:grid; grid-template-columns:1fr 40px 1fr 40px 1fr; gap:0.5rem; min-width:600px;">';
        
        // Headers
        visualHtml += '<div style="text-align:center; font-weight:bold; color:#0D47A1; padding:0.5rem; background:white; border-radius:4px; border:2px solid #2196F3;">Course Learning Outcomes</div>';
        visualHtml += '<div></div>';
        visualHtml += '<div style="text-align:center; font-weight:bold; color:#0D47A1; padding:0.5rem; background:white; border-radius:4px; border:2px solid #4CAF50;">Program Learning Outcomes</div>';
        visualHtml += '<div></div>';
        visualHtml += '<div style="text-align:center; font-weight:bold; color:#0D47A1; padding:0.5rem; background:white; border-radius:4px; border:2px solid #FF9800;">National Qualification Framework</div>';
        
        course.clo.list.forEach((clo, idx) => {
            const plos = course.clo.ploMap[clo] || [];
            const nqfs = course.clo.nqfMap[clo] || [];
            const color = colors[idx % colors.length];
            
            // CLO column
            if (editMode) {
                visualHtml += '<div style="background:white; padding:0.75rem; border-radius:6px; border-left:4px solid ' + color + '; box-shadow:0 2px 4px rgba(0,0,0,0.1);">' +
                    '<div style="font-weight:700; color:' + color + '; margin-bottom:0.5rem;">' + clo + '</div>' +
                    '<input class="clo-plo-input" data-clo="' + clo + '" type="text" placeholder="PLO1, PLO2" value="' + plos.join(', ') + '" style="width:100%; padding:0.4rem; border:1px solid #ddd; border-radius:4px; font-size:0.85rem; margin-bottom:0.3rem;">' +
                    '<input class="clo-nqf-input" data-clo="' + clo + '" type="text" placeholder="NQF1, NQF2" value="' + nqfs.join(', ') + '" style="width:100%; padding:0.4rem; border:1px solid #ddd; border-radius:4px; font-size:0.85rem;">' +
                '</div>';
            } else {
                visualHtml += '<div style="background:white; padding:0.75rem; border-radius:6px; border-left:4px solid ' + color + '; box-shadow:0 2px 4px rgba(0,0,0,0.1);">' +
                    '<div style="font-weight:700; color:' + color + ';">' + clo + '</div>' +
                '</div>';
            }
            
            // Arrow CLO → PLO
            visualHtml += '<div style="display:flex; align-items:center; justify-content:center;">' +
                '<svg width="40" height="40" viewBox="0 0 40 40" style="overflow:visible;">' +
                    '<defs><marker id="arrowhead-' + idx + '" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><polygon points="0 0, 10 3, 0 6" fill="' + color + '" /></marker></defs>' +
                    '<line x1="0" y1="20" x2="35" y2="20" stroke="' + color + '" stroke-width="2" marker-end="url(#arrowhead-' + idx + ')" />' +
                '</svg>' +
            '</div>';
            
            // PLO column
            visualHtml += '<div style="background:white; padding:0.75rem; border-radius:6px; border-left:4px solid ' + color + '; box-shadow:0 2px 4px rgba(0,0,0,0.1);">' +
                (plos.length ? plos.map(p => '<div style="background:#e8f5e9; color:#2e7d32; padding:0.3rem 0.6rem; border-radius:4px; margin-bottom:0.25rem; font-size:0.9rem; font-weight:600;">' + p + '</div>').join('') : '<div style="color:#999; font-size:0.85rem;">No PLO mapped</div>') +
            '</div>';
            
            // Arrow PLO → NQF
            visualHtml += '<div style="display:flex; align-items:center; justify-content:center;">' +
                '<svg width="40" height="40" viewBox="0 0 40 40" style="overflow:visible;">' +
                    '<line x1="0" y1="20" x2="35" y2="20" stroke="' + color + '" stroke-width="2" marker-end="url(#arrowhead-' + idx + ')" />' +
                '</svg>' +
            '</div>';
            
            // NQF column
            visualHtml += '<div style="background:white; padding:0.75rem; border-radius:6px; border-left:4px solid ' + color + '; box-shadow:0 2px 4px rgba(0,0,0,0.1);">' +
                (nqfs.length ? nqfs.map(n => '<div style="background:#fff3e0; color:#e65100; padding:0.3rem 0.6rem; border-radius:4px; margin-bottom:0.25rem; font-size:0.9rem; font-weight:600;">' + n + '</div>').join('') : '<div style="color:#999; font-size:0.85rem;">No NQF mapped</div>') +
            '</div>';
        });
        
        visualHtml += '</div>';
        if (editMode) {
            visualHtml += '<div style="margin-top:1rem; padding:0.75rem; background:#e3f2fd; border-radius:4px; border-left:3px solid #2196F3;">' +
                '<div style="font-weight:600; color:#0d47a1; margin-bottom:0.25rem;">💡 Editing Mode</div>' +
                '<div style="font-size:0.85rem; color:#555;">• Top input: Enter PLO mappings (comma-separated, e.g., PLO1, PLO2)</div>' +
                '<div style="font-size:0.85rem; color:#555;">• Bottom input: Enter NQF mappings (comma-separated, e.g., NQF1, NQF3)</div>' +
            '</div>';
        }
        visualHtml += '</div>';
        
        return `
            <div class="card" style="box-shadow:none; border:1px solid #eee;">
                <h4 style="margin-bottom:1rem;">Visual Mapping Flow</h4>
                ${visualHtml}
            </div>
            <div class="card" style="box-shadow:none; border:1px solid #eee; margin-top:0.75rem;">
                <h4>Below-benchmark CLOs (≥2 years)</h4>
                ${below.size ? '<ul style="margin:0.5rem 0;">' + [...below].map(c=>'<li style="color:#c62828;">• ' + c + '</li>').join('') + '</ul>' : '<div style="color:#2e7d32;">No repeated low-performing CLOs.</div>'}
            </div>
        `;
    }

    // ========== COMMUNITY SERVICE DASHBOARD ==========
    
    _initCommunityServiceData() {
        this.communityService = {
            editMode: false,
            hoursTarget: 1500,
            selectedYear: '2026',
            yearlyOverview: {
                '2024': { totalActivities: 28, activeRequests: 2, approvedActivities: 24, completedActivities: 22, participationRate: 82, totalHours: 820 },
                '2025': { totalActivities: 35, activeRequests: 5, approvedActivities: 30, completedActivities: 25, participationRate: 85, totalHours: 1050 },
                '2026': { totalActivities: 42, activeRequests: 8, approvedActivities: 34, completedActivities: 28, participationRate: 87, totalHours: 1240 }
            },
            overview: {
                totalActivities: 42,
                activeRequests: 8,
                approvedActivities: 34,
                completedActivities: 28,
                participationRate: 87,
                totalHours: 1240
            },
            certificates: [
                'Participation Certificate',
                'Volunteer Hours Certificate',
                'Appreciation Letter'
            ],
            requests: [
                { id: 'CS001', title: 'Diabetes Awareness Campaign', type: 'Health awareness', status: 'submitted', date: '2026-01-15', year: '2026', students: 5, hours: 20, location: 'Community Center', responsible: 'Pending Review' },
                { id: 'CS002', title: 'Blood Pressure Screening', type: 'Screening campaign', status: 'approved', date: '2026-02-01', year: '2026', students: 12, hours: 30, location: 'Mall', responsible: 'Dr. Fatima' },
                { id: 'CS003', title: 'School Health Visit', type: 'School visit', status: 'scheduled', date: '2026-02-15', year: '2026', students: 8, hours: 16, location: 'Al-Noor School', responsible: 'Dr. Ahmed' },
                { id: 'CS004', title: 'Medication Safety Workshop', type: 'Health awareness', status: 'completed', date: '2026-01-10', year: '2026', students: 15, hours: 25, location: 'University Hall', responsible: 'Dr. Lama' },
                { id: 'CS005', title: 'Vaccination Drive', type: 'Screening campaign', status: 'approved', date: '2026-02-20', year: '2026', students: 20, hours: 40, location: 'Health Center', responsible: 'Dr. Omar' },
                { id: 'CS006', title: 'NGO Collaboration - UNHCR', type: 'NGO collaboration', status: 'under-review', date: '2026-02-10', year: '2026', students: 10, hours: 35, location: 'UNHCR Office', responsible: 'Under Review' },
                { id: 'CS007', title: 'Mental Health Awareness 2025', type: 'Health awareness', status: 'completed', date: '2025-11-20', year: '2025', students: 18, hours: 28, location: 'University Hall', responsible: 'Dr. Lama' },
                { id: 'CS008', title: 'Nutrition Campaign 2025', type: 'Screening campaign', status: 'completed', date: '2025-10-15', year: '2025', students: 14, hours: 32, location: 'Community Center', responsible: 'Dr. Fatima' },
                { id: 'CS009', title: 'Health Fair 2024', type: 'Screening campaign', status: 'completed', date: '2024-09-10', year: '2024', students: 20, hours: 42, location: 'Mall', responsible: 'Dr. Ahmed' },
                { id: 'CS010', title: 'School Visit 2024', type: 'School visit', status: 'completed', date: '2024-08-25', year: '2024', students: 8, hours: 16, location: 'Al-Noor School', responsible: 'Dr. Lama' }
            ]
        };
    }

    renderCommunityServiceDashboard(section = 'dashboard') {
        const sectionTitles = {
            'dashboard': '🤝 Community Service Dashboard',
            'requests': '📨 My Requests — Community Service',
            'activities': '📅 Activities Calendar — Community Service',
            'hours': '⏱️ Hours Tracking — Community Service',
            'certificates': '🏅 Certificates — Community Service'
        };

        this.title.innerHTML = sectionTitles[section] || '🤝 Community Service Dashboard';
        const { overview, requests, editMode, certificates, hoursTarget, selectedYear, yearlyOverview } = this.communityService;
        const filteredRequests = requests.filter(r => r.year === selectedYear);
        const selectedYearOverview = yearlyOverview[selectedYear] || overview;
        
        const statusColors = {
            'submitted': '#FFC107',
            'under-review': '#FF9800',
            'approved': '#4CAF50',
            'scheduled': '#2196F3',
            'completed': '#8BC34A',
            'rejected': '#f44336'
        };
        
        const statusEmojis = {
            'submitted': '🟡',
            'under-review': '🟠',
            'approved': '🟢',
            'scheduled': '🔵',
            'completed': '✅',
            'rejected': '❌'
        };

        this.root.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; gap:1rem; margin-bottom:0.75rem;">
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <label style="font-weight:600; color:#0D47A1;">📅 Year:</label>
                    <select id="yearFilter" class="btn btn-outline" style="min-width:140px;">
                        <option value="all">All Years</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026" selected>2026 (Current)</option>
                    </select>
                </div>
                <button id="communityEditToggle" class="btn btn-outline" style="border:1px solid #2196F3; color:#0D47A1;">
                    ${editMode ? '💾 Save & Exit Edit Mode' : '✏️ Enter Edit Mode'}
                </button>
            </div>
            <div style="background:#E3F2FD; border-radius:6px; padding:1rem; margin-bottom:1rem; border-left:4px solid #1976D2;">
                <div style="font-weight:600; color:#0D47A1; margin-bottom:0.5rem;">📊 Year-over-Year Summary (${selectedYear === 'all' ? 'All Years' : 'Year ' + selectedYear})</div>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem;">
                    ${selectedYear === 'all' ? Object.entries(yearlyOverview).map(([year, data]) => 
                        '<div style="background:white; padding:0.75rem; border-radius:6px;">' +
                            '<div style="font-weight:700; color:#0D47A1; margin-bottom:0.3rem;">📆 ' + year + '</div>' +
                            '<div style="font-size:0.9rem; color:#555;">' +
                                '<div>Activities: ' + data.totalActivities + '</div>' +
                                '<div>Hours: ' + data.totalHours + 'h</div>' +
                                '<div>Completed: ' + data.completedActivities + '</div>' +
                            '</div>' +
                        '</div>'
                    ).join('') : 
                        '<div style="background:white; padding:0.75rem; border-radius:6px;">' +
                            '<div>📌 Year ' + selectedYear + '</div>' +
                        '</div>'
                    }
                </div>
            </div>
            <div class="dashboard-grid" style="grid-template-columns: 1fr; gap: 1rem;">
                <!-- KPI Section -->
                <div id="community-dashboard-section" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:1rem;">
                    <div class="card" style="text-align:center; padding:1.5rem;">
                        <div style="font-size:2rem; font-weight:bold; color:#2196F3;">${editMode && selectedYear !== 'all' ? `<input class="kpi-input" data-kpi="totalActivities" type="number" min="0" value="${selectedYearOverview.totalActivities}" style="width:90%; text-align:center; font-size:1.2rem; padding:0.25rem;">` : selectedYearOverview.totalActivities}</div>
                        <div style="color:#666; font-size:0.9rem;">Total Activities</div>
                    </div>
                    <div class="card" style="text-align:center; padding:1.5rem;">
                        <div style="font-size:2rem; font-weight:bold; color:#FF9800;">${editMode && selectedYear !== 'all' ? `<input class="kpi-input" data-kpi="activeRequests" type="number" min="0" value="${selectedYearOverview.activeRequests}" style="width:90%; text-align:center; font-size:1.2rem; padding:0.25rem;">` : selectedYearOverview.activeRequests}</div>
                        <div style="color:#666; font-size:0.9rem;">Active Requests</div>
                    </div>
                    <div class="card" style="text-align:center; padding:1.5rem;">
                        <div style="font-size:2rem; font-weight:bold; color:#4CAF50;">${editMode && selectedYear !== 'all' ? `<input class="kpi-input" data-kpi="approvedActivities" type="number" min="0" value="${selectedYearOverview.approvedActivities}" style="width:90%; text-align:center; font-size:1.2rem; padding:0.25rem;">` : selectedYearOverview.approvedActivities}</div>
                        <div style="color:#666; font-size:0.9rem;">Approved Activities</div>
                    </div>
                    <div class="card" style="text-align:center; padding:1.5rem;">
                        <div style="font-size:2rem; font-weight:bold; color:#8BC34A;">${editMode && selectedYear !== 'all' ? `<input class="kpi-input" data-kpi="completedActivities" type="number" min="0" value="${selectedYearOverview.completedActivities}" style="width:90%; text-align:center; font-size:1.2rem; padding:0.25rem;">` : selectedYearOverview.completedActivities}</div>
                        <div style="color:#666; font-size:0.9rem;">Completed</div>
                    </div>
                    <div class="card" style="text-align:center; padding:1.5rem;">
                        <div style="font-size:2rem; font-weight:bold; color:#9C27B0;">${editMode && selectedYear !== 'all' ? `<input class="kpi-input" data-kpi="participationRate" type="number" min="0" max="100" value="${selectedYearOverview.participationRate}" style="width:90%; text-align:center; font-size:1.2rem; padding:0.25rem;">` : `${selectedYearOverview.participationRate}%`}</div>
                        <div style="color:#666; font-size:0.9rem;">Participation</div>
                    </div>
                    <div class="card" style="text-align:center; padding:1.5rem;">
                        <div style="font-size:2rem; font-weight:bold; color:#E91E63;">${editMode && selectedYear !== 'all' ? `<input class="kpi-input" data-kpi="totalHours" type="number" min="0" value="${selectedYearOverview.totalHours}" style="width:90%; text-align:center; font-size:1.2rem; padding:0.25rem;">` : `${selectedYearOverview.totalHours}h`}</div>
                        <div style="color:#666; font-size:0.9rem;">Total Hours</div>
                    </div>
                </div>

                <!-- Filters -->
                <div class="card" style="display:flex; gap:1rem; flex-wrap:wrap; align-items:center;">
                    <select class="btn btn-outline" style="min-width:150px;">
                        <option>All Years</option>
                        <option>2025-2026</option>
                        <option>2024-2025</option>
                    </select>
                    <select class="btn btn-outline" style="min-width:150px;">
                        <option>All Programs</option>
                        <option>PharmD</option>
                        <option>MSc Clinical</option>
                        <option>MSc Sciences</option>
                    </select>
                    <select class="btn btn-outline" style="min-width:150px;">
                        <option>All Types</option>
                        <option>Health Awareness</option>
                        <option>Screening Campaign</option>
                        <option>School Visit</option>
                        <option>NGO Collaboration</option>
                    </select>
                    <select class="btn btn-outline" style="min-width:150px;">
                        <option>All Status</option>
                        <option>Submitted</option>
                        <option>Under Review</option>
                        <option>Approved</option>
                        <option>Scheduled</option>
                        <option>Completed</option>
                    </select>
                </div>

                <!-- Student Request System -->
                <div class="card" id="community-requests-section">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                        <h3>📨 Student Request System</h3>
                        <button id="newRequestBtn" class="btn" style="background:#4CAF50; color:white; padding:0.6rem 1.2rem; border-radius:4px; cursor:pointer;">+ New Request</button>
                    </div>
                </div>

                <!-- Request Tracking Table -->
                <div class="card" id="community-requests-table">
                    <h3>🔄 Request Tracking</h3>
                    <div style="overflow-x:auto;">
                        <table style="width:100%; border-collapse:collapse;">
                            <thead>
                                <tr style="background:#f5f5f5;">
                                    <th style="padding:1rem; text-align:left; border-bottom:2px solid #ddd;">Request ID</th>
                                    <th style="padding:1rem; text-align:left; border-bottom:2px solid #ddd;">Title</th>
                                    <th style="padding:1rem; text-align:left; border-bottom:2px solid #ddd;">Type</th>
                                    <th style="padding:1rem; text-align:left; border-bottom:2px solid #ddd;">Status</th>
                                    <th style="padding:1rem; text-align:left; border-bottom:2px solid #ddd;">Students</th>
                                    <th style="padding:1rem; text-align:left; border-bottom:2px solid #ddd;">Hours</th>
                                    <th style="padding:1rem; text-align:left; border-bottom:2px solid #ddd;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${(selectedYear === 'all' ? requests : filteredRequests).map(req => `
                                    <tr style="border-bottom:1px solid #eee;">
                                        <td style="padding:1rem; font-weight:bold;">${req.id}</td>
                                        <td style="padding:1rem;">${req.title}</td>
                                        <td style="padding:1rem; font-size:0.85rem; color:#666;">${req.type}</td>
                                        <td style="padding:1rem;"><span style="background:${statusColors[req.status]}; color:white; padding:0.3rem 0.8rem; border-radius:20px; font-size:0.85rem;">${statusEmojis[req.status]} ${req.status.charAt(0).toUpperCase() + req.status.slice(1)}</span></td>
                                        <td style="padding:1rem; text-align:center;">${req.students}</td>
                                        <td style="padding:1rem; text-align:center;">${req.hours}h</td>
                                        <td style="padding:1rem; display:flex; gap:0.5rem;">
                                            <button class="view-request-btn" data-id="${req.id}" style="background:#2196F3; color:white; border:none; padding:0.4rem 0.8rem; border-radius:3px; cursor:pointer; font-size:0.85rem;">View</button>
                                            ${editMode ? `<button class="edit-request-btn" data-id="${req.id}" style="background:#FF9800; color:white; border:none; padding:0.4rem 0.8rem; border-radius:3px; cursor:pointer; font-size:0.85rem;">Edit</button>` : ''}
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Impact Dashboard -->
                <div class="card" id="community-activities-section">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:1rem;">
                        <h3>📅 Activities Calendar</h3>
                        <span style="background:#E3F2FD; color:#0D47A1; padding:0.35rem 0.75rem; border-radius:12px; font-weight:600;">Upcoming 30 days</span>
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; margin-top:1rem;">
                        ${(selectedYear === 'all' ? requests : filteredRequests).filter(r => r.status === 'approved' || r.status === 'scheduled').slice(0,4).map(r => `
                            <div style="background:#f9f9f9; padding:1rem; border-radius:6px; border:1px solid #eee;">
                                <div style="font-weight:700; margin-bottom:0.35rem; color:#0D47A1;">${r.title}</div>
                                <div style="font-size:0.9rem; color:#555;">${r.date} • ${r.location}</div>
                                <div style="font-size:0.9rem; color:#777; margin:0.3rem 0;">${r.type}</div>
                                <div style="display:flex; gap:0.5rem; flex-wrap:wrap; font-size:0.85rem; color:#555;">
                                    <span style="background:#E8F5E9; color:#2E7D32; padding:0.2rem 0.6rem; border-radius:12px;">${r.students} students</span>
                                    <span style="background:#E3F2FD; color:#1565C0; padding:0.2rem 0.6rem; border-radius:12px;">${r.hours}h planned</span>
                                    <span style="background:#FFF3E0; color:#EF6C00; padding:0.2rem 0.6rem; border-radius:12px;">${statusEmojis[r.status]} ${r.status}</span>
                                </div>
                            </div>
                        `).join('') || '<div style="padding:1rem; color:#777;">No upcoming activities</div>'}
                    </div>
                </div>

                <div class="card" id="community-hours-section">
                    <h3>⏱️ Hours Tracking</h3>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; margin-top:1rem;">
                        <div style="background:#E8F5E9; padding:1rem; border-radius:6px;">
                            <div style="font-size:1.8rem; font-weight:bold; color:#2E7D32;">${overview.totalHours}h</div>
                            <div style="color:#555;">Total logged hours</div>
                        </div>
                        <div style="background:#E3F2FD; padding:1rem; border-radius:6px;">
                            <div style="font-weight:700; color:#0D47A1; margin-bottom:0.3rem;">Top Contributors</div>
                            <div style="font-size:0.9rem; color:#555;">Student Council — 180h</div>
                            <div style="font-size:0.9rem; color:#555;">Level 5 Cohort — 150h</div>
                            <div style="font-size:0.9rem; color:#555;">Volunteer Club — 120h</div>
                        </div>
                        <div style="background:#FFF3E0; padding:1rem; border-radius:6px;">
                            <div style="font-weight:700; color:#EF6C00; margin-bottom:0.3rem;">Benchmarks</div>
                            <div style="font-size:0.9rem; color:#555; display:flex; align-items:center; gap:0.35rem;">Target: ${editMode ? `<input id="hoursTargetInput" type="number" min="0" value="${hoursTarget}" style="width:120px; padding:0.3rem;">` : `${hoursTarget}h`} this term</div>
                            <div style="font-size:0.9rem; color:#555;">Progress: ${(selectedYearOverview.totalHours / hoursTarget * 100).toFixed(0)}%</div>
                            <div style="height:10px; background:#ffe0b2; border-radius:6px; overflow:hidden; margin-top:0.5rem;">
                                <div style="width:${Math.min(100, (selectedYearOverview.totalHours / hoursTarget * 100)).toFixed(0)}%; height:100%; background:#FB8C00;"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card" id="community-impact-section">
                    <h3>📊 Community Impact</h3>
                    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; margin-top:1rem;">
                        <div style="background:#E3F2FD; padding:1rem; border-radius:6px;">
                            <div style="font-size:1.8rem; font-weight:bold; color:#1976D2;">850+</div>
                            <div style="color:#666; margin-top:0.5rem;">Beneficiaries</div>
                        </div>
                        <div style="background:#E8F5E9; padding:1rem; border-radius:6px;">
                            <div style="font-size:1.8rem; font-weight:bold; color:#388E3C;">12</div>
                            <div style="color:#666; margin-top:0.5rem;">Regions Covered</div>
                        </div>
                        <div style="background:#FFF3E0; padding:1rem; border-radius:6px;">
                            <div style="font-size:1.8rem; font-weight:bold; color:#F57C00;">6</div>
                            <div style="color:#666; margin-top:0.5rem;">Service Types</div>
                        </div>
                        <div style="background:#FCE4EC; padding:1rem; border-radius:6px;">
                            <div style="font-size:1.8rem; font-weight:bold; color:#C2185B;">28</div>
                            <div style="color:#666; margin-top:0.5rem;">Activities Completed</div>
                        </div>
                    </div>
                </div>

                <!-- Certificates & Recognition -->
                <div class="card" id="community-certificates-section">
                    <h3>🏅 Certificates & Recognition</h3>
                    <div style="background:#f9f9f9; padding:1rem; border-radius:6px; border-left:4px solid #FFD700;">
                        <div style="margin-bottom:1rem;">
                            <strong>Available Certificates</strong>
                            <ul style="margin:0.5rem 0; padding-left:1.5rem; color:#666;">
                                ${certificates.map((c, idx) => `
                                    <li style="display:flex; align-items:center; gap:0.5rem;">
                                        <span>✓ ${c}</span>
                                        ${editMode ? `<button class="delete-cert-btn" data-idx="${idx}" style="background:#f44336; color:white; border:none; padding:0.2rem 0.5rem; border-radius:3px; cursor:pointer; font-size:0.75rem;">Remove</button>` : ''}
                                    </li>
                                `).join('')}
                            </ul>
                            ${editMode ? `
                                <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
                                    <input id="newCertInput" type="text" placeholder="New certificate name" style="flex:1; padding:0.4rem; border:1px solid #ddd; border-radius:4px;">
                                    <button id="addCertBtn" style="background:#4CAF50; color:white; border:none; padding:0.45rem 0.9rem; border-radius:4px; cursor:pointer; font-weight:600;">Add</button>
                                </div>
                            ` : ''}
                        </div>
                        <button style="background:#FFD700; color:#333; border:none; padding:0.6rem 1rem; border-radius:4px; cursor:pointer; font-weight:bold;">📥 Download Certificates</button>
                    </div>
                </div>
            </div>
        `;

        // Event listeners
        document.getElementById('communityEditToggle').addEventListener('click', () => {
            this.communityService.editMode = !this.communityService.editMode;
            this.renderCommunityServiceDashboard(section);
        });

        document.getElementById('yearFilter').addEventListener('change', (e) => {
            this.communityService.selectedYear = e.target.value;
            this.renderCommunityServiceDashboard(section);
        });

        document.querySelectorAll('.kpi-input').forEach(inp => {
            inp.addEventListener('change', () => {
                const key = inp.dataset.kpi;
                const year = this.communityService.selectedYear;
                if (year !== 'all') {
                    this.communityService.yearlyOverview[year] = this.communityService.yearlyOverview[year] || {};
                    this.communityService.yearlyOverview[year][key] = Number(inp.value) || 0;
                }
            });
        });

        document.getElementById('newRequestBtn').addEventListener('click', () => {
            this.showNewRequestForm();
        });

        document.querySelectorAll('.view-request-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const requestId = e.target.getAttribute('data-id');
                const request = requests.find(r => r.id === requestId);
                this.showRequestDetails(request);
            });
        });

        document.querySelectorAll('.edit-request-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const requestId = e.target.getAttribute('data-id');
                this._editCommunityRequest(requestId, section);
            });
        });

        const hoursTargetInput = document.getElementById('hoursTargetInput');
        if (hoursTargetInput) {
            hoursTargetInput.addEventListener('change', () => {
                const val = Number(hoursTargetInput.value) || hoursTarget;
                this.communityService.hoursTarget = val;
            });
        }

        const addCertBtn = document.getElementById('addCertBtn');
        if (addCertBtn) {
            addCertBtn.addEventListener('click', () => {
                const input = document.getElementById('newCertInput');
                const name = (input.value || '').trim();
                if (name) {
                    this.communityService.certificates.push(name);
                    this.renderCommunityServiceDashboard(section);
                }
            });
        }

        document.querySelectorAll('.delete-cert-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = Number(e.target.getAttribute('data-idx'));
                this.communityService.certificates.splice(idx, 1);
                this.renderCommunityServiceDashboard(section);
            });
        });

        const sectionTargets = {
            'dashboard': 'community-dashboard-section',
            'requests': 'community-requests-section',
            'activities': 'community-activities-section',
            'hours': 'community-hours-section',
            'certificates': 'community-certificates-section'
        };
        const targetId = sectionTargets[section];
        if (targetId) {
            const target = document.getElementById(targetId);
            if (target) {
                const originalShadow = target.style.boxShadow;
                target.style.boxShadow = '0 0 0 3px rgba(33,150,243,0.35)';
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => { target.style.boxShadow = originalShadow; }, 1200);
            }
        }
    }

    _editCommunityRequest(requestId, section) {
        const req = this.communityService.requests.find(r => r.id === requestId);
        if (!req) return;

        const year = prompt('Year (2024, 2025, 2026)', req.year) || req.year;
        const location = prompt('Location', req.location) || req.location;
        const students = Number(prompt('Students', req.students)) || req.students;
        const hours = Number(prompt('Hours', req.hours)) || req.hours;
        const responsible = prompt('Responsible', req.responsible) || req.responsible;

        Object.assign(req, { title, type, status, date, year, location, students, hours, responsible });
        this.renderCommunityServiceDashboard(section);
    }

    showNewRequestForm() {
        const modal = document.createElement('div');
        modal.style.cssText = 'position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:9999;';
        
        const content = document.createElement('div');
        content.style.cssText = 'background:white; border-radius:8px; padding:2rem; max-width:600px; width:90%; max-height:90vh; overflow-y:auto;';
        
        content.innerHTML = `
            <h2 style="margin-top:0;">📨 New Community Service Request</h2>
            <form id="requestForm" style="margin-top:1.5rem;">
                <div style="margin-bottom:1rem;">
                    <label style="display:block; font-weight:bold; margin-bottom:0.5rem;">Activity Title *</label>
                    <input type="text" id="activityTitle" required style="width:100%; padding:0.75rem; border:1px solid #ddd; border-radius:4px;">
                </div>

                <div style="margin-bottom:1rem;">
                    <label style="display:block; font-weight:bold; margin-bottom:0.5rem;">Activity Type *</label>
                    <select id="activityType" required style="width:100%; padding:0.75rem; border:1px solid #ddd; border-radius:4px;">
                        <option>Health Awareness</option>
                        <option>Screening Campaign</option>
                        <option>Volunteer Work</option>
                        <option>School Visit</option>
                        <option>National Event</option>
                        <option>NGO Collaboration</option>
                    </select>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem;">
                    <div>
                        <label style="display:block; font-weight:bold; margin-bottom:0.5rem;">Proposed Date *</label>
                        <input type="date" id="proposedDate" required style="width:100%; padding:0.75rem; border:1px solid #ddd; border-radius:4px;">
                    </div>
                    <div>
                        <label style="display:block; font-weight:bold; margin-bottom:0.5rem;">Estimated Hours *</label>
                        <input type="number" id="estimatedHours" required min="1" max="100" value="20" style="width:100%; padding:0.75rem; border:1px solid #ddd; border-radius:4px;">
                    </div>
                </div>

                <div style="margin-bottom:1rem;">
                    <label style="display:block; font-weight:bold; margin-bottom:0.5rem;">Location *</label>
                    <input type="text" id="location" required style="width:100%; padding:0.75rem; border:1px solid #ddd; border-radius:4px;">
                </div>

                <div style="margin-bottom:1rem;">
                    <label style="display:block; font-weight:bold; margin-bottom:0.5rem;">Target Population *</label>
                    <input type="text" id="targetPop" placeholder="e.g., School children, Community members" required style="width:100%; padding:0.75rem; border:1px solid #ddd; border-radius:4px;">
                </div>

                <div style="margin-bottom:1rem;">
                    <label style="display:block; font-weight:bold; margin-bottom:0.5rem;">Number of Students *</label>
                    <input type="number" id="numStudents" required min="1" max="50" value="10" style="width:100%; padding:0.75rem; border:1px solid #ddd; border-radius:4px;">
                </div>

                <div style="margin-bottom:1rem;">
                    <label style="display:block; font-weight:bold; margin-bottom:0.5rem;">Faculty Supervisor (Optional)</label>
                    <input type="text" id="facultySupervisor" placeholder="e.g., Dr. Fatima Alharbi" style="width:100%; padding:0.75rem; border:1px solid #ddd; border-radius:4px;">
                </div>

                <div style="margin-bottom:1.5rem;">
                    <label style="display:block; font-weight:bold; margin-bottom:0.5rem;">Supporting Documents (Optional)</label>
                    <input type="file" id="documents" multiple style="width:100%; padding:0.75rem; border:1px solid #ddd; border-radius:4px;">
                    <div style="font-size:0.85rem; color:#666; margin-top:0.5rem;">Upload letters, photos, or supporting files</div>
                </div>

                <div style="display:flex; gap:1rem; margin-top:2rem;">
                    <button type="submit" style="flex:1; background:#4CAF50; color:white; border:none; padding:0.75rem; border-radius:4px; cursor:pointer; font-weight:bold; font-size:1rem;">✅ Submit Request</button>
                    <button type="button" id="cancelForm" style="flex:1; background:#f44336; color:white; border:none; padding:0.75rem; border-radius:4px; cursor:pointer; font-weight:bold; font-size:1rem;">Cancel</button>
                </div>
            </form>
        `;

        modal.appendChild(content);
        document.body.appendChild(modal);

        document.getElementById('cancelForm').addEventListener('click', () => modal.remove());
        document.getElementById('requestForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ Request submitted successfully! Status: Submitted 🟡');
            modal.remove();
            this.renderCommunityServiceDashboard();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    showRequestDetails(request) {
        const statusTimeline = [
            { stage: 'Submitted', emoji: '🟡', date: '2026-01-15', responsible: 'Auto System', notes: 'Request received' },
            { stage: 'Under Review', emoji: '🟠', date: request.status === 'under-review' || request.status === 'approved' || request.status === 'scheduled' || request.status === 'completed' ? '2026-01-16' : null, responsible: 'Dean Office', notes: 'Being evaluated' },
            { stage: 'Approved', emoji: '🟢', date: request.status === 'approved' || request.status === 'scheduled' || request.status === 'completed' ? '2026-01-17' : null, responsible: 'Dr. Fatima', notes: 'Request approved' },
            { stage: 'Scheduled', emoji: '🔵', date: request.status === 'scheduled' || request.status === 'completed' ? '2026-01-20' : null, responsible: 'Coordinator', notes: 'Activity scheduled' },
            { stage: 'Completed', emoji: '✅', date: request.status === 'completed' ? '2026-01-25' : null, responsible: 'Faculty', notes: 'Activity completed' }
        ];

        const modal = document.createElement('div');
        modal.style.cssText = 'position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.6); display:flex; align-items:center; justify-content:center; z-index:9999;';
        
        const content = document.createElement('div');
        content.style.cssText = 'background:white; border-radius:8px; padding:2rem; max-width:700px; width:90%; max-height:90vh; overflow-y:auto;';
        
        content.innerHTML = `
            <h2 style="margin-top:0;">${request.id} — ${request.title}</h2>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-top:1rem; padding:1rem; background:#f5f5f5; border-radius:6px;">
                <div><strong>Type:</strong> ${request.type}</div>
                <div><strong>Students:</strong> ${request.students}</div>
                <div><strong>Hours:</strong> ${request.hours}h</div>
                <div><strong>Location:</strong> ${request.location}</div>
                <div><strong>Date:</strong> ${request.date}</div>
                <div><strong>Responsible:</strong> ${request.responsible}</div>
            </div>

            <h3 style="margin-top:1.5rem;">📍 Request Timeline</h3>
            <div style="margin-top:1rem;">
                ${statusTimeline.map((item, i) => `
                    <div style="display:flex; margin-bottom:1.5rem; ${item.date ? 'opacity:1' : 'opacity:0.4'}">
                        <div style="text-align:center; width:60px;">
                            <div style="font-size:1.5rem;">${item.emoji}</div>
                            <div style="font-size:0.8rem; color:#666; margin-top:0.3rem;">${item.date || 'Pending'}</div>
                        </div>
                        <div style="flex:1; margin-left:1rem; padding:1rem; background:#f9f9f9; border-radius:6px;">
                            <div style="font-weight:bold; margin-bottom:0.3rem;">${item.stage}</div>
                            <div style="font-size:0.9rem; color:#666; margin-bottom:0.3rem;">${item.responsible}</div>
                            <div style="font-size:0.85rem; color:#999;">${item.notes}</div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div style="margin-top:2rem; display:flex; gap:1rem;">
                <button id="approveBtn" style="flex:1; background:#4CAF50; color:white; border:none; padding:0.75rem; border-radius:4px; cursor:pointer; font-weight:bold;">✅ Approve</button>
                <button id="rejectBtn" style="flex:1; background:#f44336; color:white; border:none; padding:0.75rem; border-radius:4px; cursor:pointer; font-weight:bold;">❌ Reject</button>
                <button id="closeBtn" style="flex:1; background:#999; color:white; border:none; padding:0.75rem; border-radius:4px; cursor:pointer;">Close</button>
            </div>
        `;

        modal.appendChild(content);
        document.body.appendChild(modal);

        document.getElementById('closeBtn').addEventListener('click', () => modal.remove());
        document.getElementById('approveBtn').addEventListener('click', () => {
            alert('✅ Request approved!');
            modal.remove();
            this.renderCommunityServiceDashboard();
        });
        document.getElementById('rejectBtn').addEventListener('click', () => {
            alert('Request rejected with notification sent to student');
            modal.remove();
            this.renderCommunityServiceDashboard();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    _renderAlerts(programId, course) {
        const flags = this._computeCourseFlags(course);
        return `
            <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
                ${flags.length ? flags.map(f => `<span class="badge-secondary" style="background:#fff3e0; color:#e65100;">⚠️ ${f}</span>`).join('') : '<span class="badge-secondary" style="background:#e8f5e9; color:#2e7d32;">All metrics healthy</span>'}
            </div>
        `;
    }

    _renderAlertsAttractive(programId, course, attention) {
        const flags = this._computeCourseFlags(course);
        
        const alertIcons = {
            'Declining evaluation (3-year downward)': '📉',
            'Declining evaluation (2-year)': '📉',
            'Pass rate below benchmark': '⚠️',
            'Repeated CLO underachievement': '🎯'
        };
        
        const alertColors = {
            'Declining evaluation (3-year downward)': { bg: '#ffebee', border: '#c62828', text: '#c62828' },
            'Declining evaluation (2-year)': { bg: '#fff3e0', border: '#ef6c00', text: '#ef6c00' },
            'Pass rate below benchmark': { bg: '#fff9c4', border: '#f57f17', text: '#f57f17' },
            'Repeated CLO underachievement': { bg: '#fce4ec', border: '#c2185b', text: '#c2185b' }
        };
        
        return `
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem;">
                ${flags.length ? flags.map(f => {
                    const style = alertColors[f] || { bg: '#fff3e0', border: '#e65100', text: '#e65100' };
                    const icon = alertIcons[f] || '⚠️';
                    return '<div style="background:' + style.bg + '; border-left:4px solid ' + style.border + '; padding:1rem; border-radius:6px; box-shadow:0 2px 4px rgba(0,0,0,0.05);">' +
                        '<div style="display:flex; align-items:center; gap:0.5rem;">' +
                            '<span style="font-size:1.5rem;">' + icon + '</span>' +
                            '<div style="flex:1;">' +
                                '<div style="font-weight:700; color:' + style.text + '; font-size:0.95rem;">' + f + '</div>' +
                                '<div style="font-size:0.85rem; color:#666; margin-top:0.25rem;">Course: ' + course.code + ' — ' + course.name + '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
                }).join('') : '<div style="background:#e8f5e9; border-left:4px solid #2e7d32; padding:1.5rem; border-radius:6px; text-align:center;"><span style="font-size:1.8rem;">✅</span><div style="font-weight:700; color:#2e7d32; margin-top:0.5rem;">All Metrics Healthy</div><div style="color:#555; font-size:0.9rem; margin-top:0.25rem;">No alerts for this course</div></div>'}
            </div>
            
            ${attention.length ? '<div style="margin-top:1.5rem; padding:1rem; background:#f5f5f5; border-radius:6px;"><h4 style="margin:0 0 0.75rem 0; color:#333;">🎓 Program-Wide Attention Required</h4><div style="display:grid; gap:0.5rem;">' + attention.map(a => 
                '<div style="background:white; padding:0.75rem; border-radius:4px; border-left:3px solid #ff9800;">' +
                    '<div style="font-weight:700; color:#333;">' + a.code + ' — ' + a.name + '</div>' +
                    '<div style="font-size:0.85rem; color:#666; margin-top:0.25rem;">' + a.flags.join(' • ') + '</div>' +
                '</div>'
            ).join('') + '</div></div>' : '<div style="margin-top:1.5rem; padding:1rem; background:#f1f8e9; border-radius:6px; text-align:center; border:1px dashed #689f38;"><span style="font-size:1.5rem;">🎉</span><div style="font-weight:600; color:#558b2f; margin-top:0.5rem;">Excellent Program Performance</div><div style="color:#666; font-size:0.9rem;">All courses meet benchmarks across the program</div></div>'}
        `;
    }

    _computeCourseFlags(course) {
        const flags = [];
        // Declining evaluations over 2 years
        const o = course.eval.overall;
        if (o.length >= 3 && o[o.length-3] > o[o.length-2] && o[o.length-2] > o[o.length-1]) {
            flags.push('Declining evaluation (3-year downward)');
        } else if (o.length >= 2 && o[o.length-2] > o[o.length-1]) {
            flags.push('Declining evaluation (2-year)');
        }
        // Pass rate below benchmark (latest)
        const pr = course.passRates;
        if (pr.values[pr.values.length-1] < pr.benchmark) flags.push('Pass rate below benchmark');
        // Repeated CLO underachievement (≥2 years below benchmark for any CLO)
        const threshold = course.clo.benchmark;
        let repeated = false;
        course.clo.list.forEach((clo, i) => {
            let lowYears = 0; Object.values(course.clo.achievement).forEach(arr => { if (arr[i] < threshold) lowYears++; });
            if (lowYears >= 2) repeated = true;
        });
        if (repeated) flags.push('Repeated CLO underachievement');
        return flags;
    }

    _computeProgramAlerts(programId) {
        const list = this.academicPrograms.coursesByProgram[programId] || [];
        const out = [];
        list.forEach(c => {
            const f = this._computeCourseFlags(c);
            if (f.length) out.push({ code: c.code, name: c.name, flags: f });
        });
        return out;
    }

    render(view, param) {
        this.currentView = view;
        this.root.innerHTML = ''; // Clear content

        switch (view) {
            case 'admin-hub':
                this.renderAdminHub();
                break;
            case 'home':
                this.renderHomePage();
                break;
            // Student Portal Views
            case 'student-dashboard':
                StudentPortal.renderDashboard();
                break;
            case 'student-home':
                StudentPortal.renderHome();
                break;
            case 'student-evaluations':
                this.renderComingSoon('My Evaluations');
                break;
            case 'student-schedule':
                this.renderComingSoon('My Schedule');
                break;
            case 'student-profile':
                this.renderComingSoon('My Profile');
                break;
            case 'student-transcripts':
                this.renderComingSoon('Transcripts');
                break;
            case 'student-announcements':
                this.renderComingSoon('Announcements');
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
            // Academic Overview
            case 'academic-overview':
                this.renderAcademicOverview();
                break;
            case 'community-service':
                this.renderCommunityServiceDashboard('dashboard');
                break;
            case 'community-requests':
                this.renderCommunityServiceDashboard('requests');
                break;
            case 'community-activities':
                this.renderCommunityServiceDashboard('activities');
                break;
            case 'community-hours':
                this.renderCommunityServiceDashboard('hours');
                break;
            case 'community-certificates':
                this.renderCommunityServiceDashboard('certificates');
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
            case 'student-awards':
                if (typeof window.getAPPEContent === 'function') {
                    this.root.innerHTML = window.getAPPEContent('awards');
                } else {
                    this.root.innerHTML = '<h2>Student Awards</h2><p>Loading awards data...</p>';
                }
                break;
            case 'appe-experience-hub':
                if (typeof window.renderAPPEExperienceHub === 'function') {
                    this.root.innerHTML = window.renderAPPEExperienceHub();
                } else {
                    this.root.innerHTML = '<h2>APPE Experience Hub</h2>';
                    console.error('APPE Hub not available');
                }
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
                this.renderQualityUnit('qa-faculty');
                break;
            case 'qa-reports':
                this.renderIPPE_Admin_Bulk();
                break;
            // Research Unit
            case 'research-overview':
                this.renderResearchOverview();
                break;
            case 'research-publications':
                this.renderResearchPublications();
                break;
            case 'research-projects':
                this.renderResearchProjects();
                break;
            case 'research-irb':
                this.renderResearchIRB();
                break;
            case 'research-students':
                this.renderResearchStudents();
                break;
            case 'research-faculty':
                this.renderResearchFaculty();
                break;
            case 'research-collaboration':
                this.renderResearchCollaboration();
                break;
            case 'research-recognition':
                this.renderResearchRecognition();
                break;
            case 'research-analytics':
                this.renderResearchAnalytics();
                break;
            case 'research-documents':
                this.renderResearchDocuments();
                break;
            // Academic Affairs
            case 'dept-practice':
                this.renderPharmaScienceDashboardEnhanced_v2('Dept.of Pharmacy Practice');
                break;
            case 'dept-science':
                this.renderPharmaScienceDashboardEnhanced_v2('Dept.of Pharmaceutical Sciences');
                break;
            // Alumni Unit
            case 'alumni-overview':
                this.renderAlumniOverview();
                break;
            case 'alumni-directory':
                this.renderAlumniDirectory();
                break;
            case 'alumni-outcomes':
                this.renderAlumniOutcomes();
                break;
            case 'postgraduate-tracking':
                this.renderPostgraduateTracking();
                break;
            case 'alumni-engagement':
                this.renderAlumniEngagement();
                break;
            case 'mentorship-program':
                this.renderMentorshipProgram();
                break;
            case 'preceptor-pipeline':
                this.renderPreceptorPipeline();
                break;
            case 'alumni-events':
                this.renderAlumniEvents();
                break;
            case 'alumni-achievements':
                this.renderAlumniAchievements();
                break;
            case 'alumni-feedback':
                this.renderAlumniFeedback();
                break;
            case 'alumni-documents':
                this.renderAlumniDocuments();
                break;
            case 'alumni-governance':
                this.renderAlumniGovernance();
                break;
            case 'alumni-ecosystem':
                this.renderAlumniEcosystem();
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

    /**
     * ADMIN HUB - COMMAND CENTER
     */
    renderAdminHub() {
        try {
            this.title.textContent = '🏢 Admin Hub - Command Center';
            
            // Check if model is loaded
            if (!window.AdminHubModel) {
                console.error('AdminHubModel not loaded!');
                this.root.innerHTML = `<div style="padding: 2rem; color: red;">
                    <h3>Error: Admin Hub Model Not Loaded</h3>
                    <p>The admin-hub-model.js file did not load properly.</p>
                    <p>Try refreshing the page (Ctrl+F5).</p>
                </div>`;
                return;
            }
            
            const model = window.AdminHubModel;
            
            console.log('✅ AdminHubModel loaded, requests count:', model.requests.length);
            console.log('✅ Calculating KPI metrics...');
            
            // Verify model methods exist
            if (typeof model.getKPIMetrics !== 'function') throw new Error('getKPIMetrics not a function');
            if (typeof model.getRAGStatus !== 'function') throw new Error('getRAGStatus not a function');
            if (typeof model.getUnitSummary !== 'function') throw new Error('getUnitSummary not a function');
            if (typeof model.getCriticalRequests !== 'function') throw new Error('getCriticalRequests not a function');
            
            const kpis = model.getKPIMetrics();
            console.log('✅ KPIs calculated:', kpis);
            
            const rag = model.getRAGStatus();
            console.log('✅ RAG status:', rag);
            
            const unitSummary = model.getUnitSummary();
            console.log('✅ Unit summary retrieved:', unitSummary.length, 'units');
            
            const criticalRequests = model.getCriticalRequests(15);
            console.log('✅ Critical requests retrieved:', criticalRequests.length, 'requests');
            
            // Get new analytics data
            const trends = model.getRequestTrends();
            const unitPerf = model.getUnitPerformance();
            const adminUsers = model.getAdminUsers();
            const systemAlerts = model.getSystemAlerts();
            const pendingApprovals = model.getPendingApprovals();
            console.log('✅ All analytics data loaded');
            console.log('✅ Pending student approvals:', pendingApprovals.length);
            
            const dashboardStats = model.getDashboardStats();
            console.log('✅ Dashboard stats calculated:', dashboardStats);
            console.log('   - Total Students:', dashboardStats.totalStudents);
            console.log('   - Active Tickets:', dashboardStats.activeTickets);
            console.log('   - Avg Response Time:', dashboardStats.avgResponseTime);
            console.log('   - Resolved Today:', dashboardStats.resolvedToday);
            
            // RAG Alert Bar
            console.log('✅ Building RAG bar...');
            const ragBar = `
                <div style="background: #1565C0; color: white; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 2rem;">${rag.icon}</span>
                    <div>
                        <strong style="font-size: 1.1rem;">System Status</strong>
                        <p style="margin: 0.25rem 0 0 0; font-size: 0.95rem;">${rag.message}</p>
                    </div>
                </div>
            `;
            
            // Dashboard Stat Cards
            console.log('✅ Building stat cards...');
            console.log('   Total Students:', dashboardStats.totalStudents, 'Active Tickets:', dashboardStats.activeTickets);
            const statCards = `
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
                    <div style="background: white; border-radius: 12px; padding: 1.5rem; text-align: center; border-left: 4px solid #4CAF50; box-shadow: 0 2px 4px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="font-size: 2.8rem; margin-bottom: 0.5rem;">👥</div>
                        <div style="font-size: 2rem; font-weight: bold; color: #333; margin-bottom: 0.5rem;">${dashboardStats.totalStudents}</div>
                        <div style="font-size: 0.95rem; color: #666; font-weight: 500;">Total Students</div>
                    </div>
                    
                    <div style="background: white; border-radius: 12px; padding: 1.5rem; text-align: center; border-left: 4px solid #FF9800; box-shadow: 0 2px 4px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="font-size: 2.8rem; margin-bottom: 0.5rem;">🎫</div>
                        <div style="font-size: 2rem; font-weight: bold; color: #333; margin-bottom: 0.5rem;">${dashboardStats.activeTickets}</div>
                        <div style="font-size: 0.95rem; color: #666; font-weight: 500;">Active Tickets</div>
                    </div>
                    
                    <div style="background: white; border-radius: 12px; padding: 1.5rem; text-align: center; border-left: 4px solid #2196F3; box-shadow: 0 2px 4px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="font-size: 2.8rem; margin-bottom: 0.5rem;">⏱️</div>
                        <div style="font-size: 2rem; font-weight: bold; color: #333; margin-bottom: 0.5rem;">${dashboardStats.avgResponseTime}h</div>
                        <div style="font-size: 0.95rem; color: #666; font-weight: 500;">Avg Response Time</div>
                    </div>
                    
                    <div style="background: white; border-radius: 12px; padding: 1.5rem; text-align: center; border-left: 4px solid #4CAF50; box-shadow: 0 2px 4px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="font-size: 2.8rem; margin-bottom: 0.5rem;">✅</div>
                        <div style="font-size: 2rem; font-weight: bold; color: #333; margin-bottom: 0.5rem;">${dashboardStats.resolvedToday}</div>
                        <div style="font-size: 0.95rem; color: #666; font-weight: 500;">Resolved Today</div>
                    </div>
                </div>
            `;
            
            // KPI Tiles
            console.log('✅ Building KPI tiles...');
            const kpiTiles = `
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; margin-bottom: 2rem;">
                    <div class="card" style="text-align: center; cursor: pointer; transition: all 0.3s;">
                        <div style="font-size: 2.5rem; color: #FF6B6B; font-weight: bold;">${kpis.new}</div>
                        <div style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">🆕 New Today</div>
                    </div>
                    <div class="card" style="text-align: center; cursor: pointer; transition: all 0.3s;">
                        <div style="font-size: 2.5rem; color: #FFA500; font-weight: bold;">${kpis.pending}</div>
                        <div style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">⏳ Pending</div>
                    </div>
                    <div class="card" style="text-align: center; cursor: pointer; transition: all 0.3s;">
                        <div style="font-size: 2.5rem; color: #FF0000; font-weight: bold;">${kpis.overdue}</div>
                        <div style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">🔴 Overdue</div>
                    </div>
                    <div class="card" style="text-align: center; cursor: pointer; transition: all 0.3s;">
                        <div style="font-size: 2.5rem; color: #28A745; font-weight: bold;">${kpis.resolved}</div>
                        <div style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">✅ Resolved</div>
                    </div>
                    <div class="card" style="text-align: center; cursor: pointer; transition: all 0.3s;">
                        <div style="font-size: 2.5rem; color: #FFD700; font-weight: bold;">${kpis.waiting}</div>
                        <div style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">📧 Waiting</div>
                    </div>
                </div>
            `;
            
            // Requests by Unit Table
            console.log('✅ Building unit summary table...');
            const unitTableRows = unitSummary.map(u => `
                <tr style="border-bottom: 1px solid #eee;">
                    <td style="padding: 0.75rem; font-weight: 500;">${u.icon} ${u.name}</td>
                    <td style="padding: 0.75rem; text-align: center;"><span style="background: #FF6B6B; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.9rem; font-weight: bold;">${u.new}</span></td>
                    <td style="padding: 0.75rem; text-align: center;"><span style="background: #FFA500; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.9rem; font-weight: bold;">${u.pending}</span></td>
                    <td style="padding: 0.75rem; text-align: center;"><span style="background: #FF0000; color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.9rem; font-weight: bold;">${u.overdue}</span></td>
                    <td style="padding: 0.75rem; text-align: center;">${u.avgResponseTime.toFixed(1)}h</td>
                    <td style="padding: 0.75rem; text-align: center; color: ${u.slaCompliance >= 95 ? '#28A745' : '#FFA500'}; font-weight: bold;">${u.slaCompliance}%</td>
                </tr>
            `).join('');
            
            const unitTable = `
                <div class="card mb-4">
                    <h3 style="margin: 0 0 1rem 0;">📊 Requests by Unit</h3>
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="background: #f8f9fa; border-bottom: 2px solid #ddd;">
                                <th style="padding: 0.75rem; text-align: left;">Unit</th>
                                <th style="padding: 0.75rem; text-align: center;">New</th>
                                <th style="padding: 0.75rem; text-align: center;">Pending</th>
                                <th style="padding: 0.75rem; text-align: center;">Overdue</th>
                                <th style="padding: 0.75rem; text-align: center;">Avg Response</th>
                                <th style="padding: 0.75rem; text-align: center;">SLA %</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${unitTableRows}
                        </tbody>
                    </table>
                </div>
            `;
            
            // Critical Requests Table
            console.log('✅ Building critical requests table...');
            const criticalRows = criticalRequests.map((req, idx) => {
                const statusInfo = model.statuses[req.status];
                const daysPending = Math.floor((new Date() - new Date(req.createdAt)) / (1000 * 60 * 60 * 24));
                const priorityColor = req.priority === 'high' ? '#FF0000' : (req.priority === 'medium' ? '#FFA500' : '#28A745');
                
                return `
                    <tr style="border-bottom: 1px solid #eee; ${req.slaInfo.status === 'breached' ? 'background: #FFE6E6;' : ''}">
                        <td style="padding: 0.75rem; font-weight: 500;">${req.id}</td>
                        <td style="padding: 0.75rem;">${req.studentName}</td>
                        <td style="padding: 0.75rem;">${req.type}</td>
                        <td style="padding: 0.75rem;">${req.unitInfo.name}</td>
                        <td style="padding: 0.75rem;"><span style="background: ${statusInfo.color}; color: white; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.85rem;">${statusInfo.label}</span></td>
                        <td style="padding: 0.75rem; text-align: center;">${daysPending}d</td>
                        <td style="padding: 0.75rem; text-align: center; font-weight: bold; color: ${req.slaInfo.color};">
                            ${req.slaInfo.status === 'breached' ? '🔴 ' : (req.slaInfo.status === 'warning' ? '🟠 ' : '🟢 ')}
                            ${Math.abs(req.slaInfo.daysRemaining)}d
                        </td>
                        <td style="padding: 0.75rem;">
                            <span style="background: ${priorityColor}; color: white; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight: bold;">
                                ${req.priority.toUpperCase()[0]}
                            </span>
                        </td>
                        <td style="padding: 0.75rem;">
                            <button class="btn btn-sm btn-primary" style="padding: 0.3rem 0.6rem; font-size: 0.8rem; margin-right: 0.25rem;" onclick="alert('Approve: ${req.id}')">✓</button>
                            <button class="btn btn-sm btn-outline" style="padding: 0.3rem 0.6rem; font-size: 0.8rem;" onclick="alert('View: ${req.id}')">View</button>
                        </td>
                    </tr>
                `;
            }).join('');
            
            const criticalTable = `
                <div class="card mb-4">
                    <h3 style="margin: 0 0 1rem 0;">🚨 My Action Required (Top 15)</h3>
                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <thead>
                                <tr style="background: #f8f9fa; border-bottom: 2px solid #ddd;">
                                    <th style="padding: 0.75rem; text-align: left;">Request ID</th>
                                    <th style="padding: 0.75rem; text-align: left;">Student</th>
                                    <th style="padding: 0.75rem; text-align: left;">Type</th>
                                    <th style="padding: 0.75rem; text-align: left;">Unit</th>
                                    <th style="padding: 0.75rem; text-align: left;">Status</th>
                                    <th style="padding: 0.75rem; text-align: center;">Days</th>
                                    <th style="padding: 0.75rem; text-align: center;">SLA</th>
                                    <th style="padding: 0.75rem; text-align: center;">Priority</th>
                                    <th style="padding: 0.75rem; text-align: center;">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${criticalRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
            
            // REAL-TIME ALERTS SECTION
            console.log('✅ Building alerts section...');
            const alertsSection = `
                <div class="card mb-4" style="border-top: 4px solid #FF9800; background: linear-gradient(135deg, rgba(255,152,0,0.05) 0%, rgba(255,152,0,0.02) 100%);">
                    <h3 style="margin: 0 0 1rem 0;">🔔 Real-Time Alerts</h3>
                    ${systemAlerts.length > 0 ? systemAlerts.map(alert => `
                        <div style="background: white; padding: 1rem; border-radius: 8px; margin-bottom: 0.75rem; border-left: 4px solid ${alert.type === 'error' ? '#FF0000' : (alert.type === 'warning' ? '#FF9800' : '#2196F3')}; display: flex; gap: 1rem; align-items: flex-start;">
                            <span style="font-size: 1.5rem;">${alert.icon}</span>
                            <div style="flex: 1;">
                                <strong>${alert.title}</strong>
                                <p style="margin: 0.25rem 0 0 0; font-size: 0.9rem; color: #666;">${alert.message}</p>
                            </div>
                        </div>
                    `).join('') : '<p style="color: #999;">No active alerts - System operating normally</p>'}
                </div>
            `;
            
            // REQUEST TRENDS SECTION
            console.log('✅ Building trends section...');
            const trendsChart = `
                <div class="card mb-4">
                    <h3 style="margin: 0 0 1rem 0;">📈 Request Trends (Last 7 Days)</h3>
                    <div style="display: flex; gap: 1rem; align-items: flex-end; height: 150px; margin: 1rem 0;">
                        ${Object.entries(trends).map(([date, count]) => `
                            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                                <div style="width: 100%; background: linear-gradient(180deg, #4CAF50 0%, #81C784 100%); border-radius: 4px 4px 0 0; height: ${Math.max(20, count * 20)}px; position: relative; min-height: 20px;" title="${count} requests">
                                    <span style="position: absolute; top: -1.5rem; left: 50%; transform: translateX(-50%); font-weight: bold; color: #333; font-size: 0.9rem;">${count}</span>
                                </div>
                                <small style="color: #666; font-size: 0.8rem;">${date}</small>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // UNIT PERFORMANCE SECTION
            console.log('✅ Building unit performance section...');
            const unitPerfSection = `
                <div class="card mb-4">
                    <h3 style="margin: 0 0 1rem 0;">📊 Unit Performance</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                        ${unitPerf.map(unit => `
                            <div style="background: linear-gradient(135deg, rgba(76,175,80,0.05) 0%, rgba(76,175,80,0.02) 100%); padding: 1.5rem; border-radius: 12px; border: 1px solid #E8F5E9;">
                                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                                    <span style="font-size: 2rem;">${unit.icon}</span>
                                    <div>
                                        <strong>${unit.name}</strong>
                                        <p style="margin: 0; font-size: 0.85rem; color: #666;">SLA: ${unit.slaCompliance}%</p>
                                    </div>
                                </div>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.9rem;">
                                    <div style="text-align: center; padding: 0.75rem; background: white; border-radius: 6px;">
                                        <div style="font-weight: bold; color: #FF6B6B;">${unit.totalRequests}</div>
                                        <small style="color: #999;">Total</small>
                                    </div>
                                    <div style="text-align: center; padding: 0.75rem; background: white; border-radius: 6px;">
                                        <div style="font-weight: bold; color: #FFA500;">${unit.activeRequests}</div>
                                        <small style="color: #999;">Active</small>
                                    </div>
                                    <div style="text-align: center; padding: 0.75rem; background: white; border-radius: 6px;">
                                        <div style="font-weight: bold; color: #FF0000;">${unit.breachedSLA}</div>
                                        <small style="color: #999;">Breached</small>
                                    </div>
                                    <div style="text-align: center; padding: 0.75rem; background: white; border-radius: 6px;">
                                        <div style="font-weight: bold; color: #2196F3;">${unit.avgResponseTime}h</div>
                                        <small style="color: #999;">Avg Response</small>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // QUICK ACTIONS SECTION
            console.log('✅ Building quick actions section...');
            const quickActions = `
                <div class="card mb-4" style="border-top: 4px solid #2196F3;">
                    <h3 style="margin: 0 0 1rem 0;">⚡ Quick Actions</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
                        <button style="padding: 1rem; background: linear-gradient(135deg, #4CAF50 0%, #81C784 100%); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">✅ Approve All</button>
                        <button style="padding: 1rem; background: linear-gradient(135deg, #FF9800 0%, #FFB74D 100%); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">📋 Assign Staff</button>
                        <button style="padding: 1rem; background: linear-gradient(135deg, #F44336 0%, #EF5350 100%); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">🚨 Escalate</button>
                        <button style="padding: 1rem; background: linear-gradient(135deg, #2196F3 0%, #64B5F6 100%); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">📊 Export Report</button>
                    </div>
                </div>
            `;
            
            // USER MANAGEMENT SECTION
            console.log('✅ Building user management section...');
            const userMgmt = `
                <div class="card mb-4">
                    <h3 style="margin: 0 0 1rem 0;">👥 Admin Staff Directory</h3>
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                        <thead>
                            <tr style="background: #f8f9fa; border-bottom: 2px solid #ddd;">
                                <th style="padding: 0.75rem; text-align: left;">Name</th>
                                <th style="padding: 0.75rem; text-align: left;">Role</th>
                                <th style="padding: 0.75rem; text-align: center;">Assigned</th>
                                <th style="padding: 0.75rem; text-align: center;">Completed</th>
                                <th style="padding: 0.75rem; text-align: center;">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${adminUsers.map(user => `
                                <tr style="border-bottom: 1px solid #eee;">
                                    <td style="padding: 0.75rem;"><strong>${user.name}</strong></td>
                                    <td style="padding: 0.75rem;"><span style="background: #E3F2FD; color: #1565C0; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem;">${user.role.replace(/_/g, ' ').toUpperCase()}</span></td>
                                    <td style="padding: 0.75rem; text-align: center; font-weight: bold;">${user.assignedCount}</td>
                                    <td style="padding: 0.75rem; text-align: center; font-weight: bold; color: #4CAF50;">${user.completedCount}</td>
                                    <td style="padding: 0.75rem; text-align: center;">
                                        <span style="background: #C8E6C9; color: #2E7D32; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem;">Active</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
            
            // STUDENT APPROVALS SECTION
            console.log('✅ Building student approvals section...');
            const studentApprovals = `
                <div class="card mb-4" style="border-top: 4px solid #FF5722;">
                    <h3 style="margin: 0 0 1rem 0;">🎓 Student Access Management</h3>
                    ${pendingApprovals.length > 0 ? `
                        <div style="background: #FFEBEE; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid #FF5722;">
                            <strong style="color: #C62828;">⚠️ ${pendingApprovals.length} pending student approval(s)</strong>
                        </div>
                        <table style="width: 100%; border-collapse: collapse; margin-bottom: 2rem;">
                            <thead>
                                <tr style="background: #f8f9fa; border-bottom: 2px solid #ddd;">
                                    <th style="padding: 0.75rem; text-align: left;">Student Name</th>
                                    <th style="padding: 0.75rem; text-align: left;">Email</th>
                                    <th style="padding: 0.75rem; text-align: left;">Phone</th>
                                    <th style="padding: 0.75rem; text-align: center;">Class Preference</th>
                                    <th style="padding: 0.75rem; text-align: center;">Requested</th>
                                    <th style="padding: 0.75rem; text-align: center;">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${pendingApprovals.map(signup => {
                                    const daysAgo = Math.floor((new Date() - new Date(signup.requestedAt)) / (1000 * 60 * 60 * 24));
                                    return `
                                        <tr style="border-bottom: 1px solid #eee; background: #FFF3E0;">
                                            <td style="padding: 0.75rem; font-weight: 600;">${signup.name}</td>
                                            <td style="padding: 0.75rem;">${signup.email}</td>
                                            <td style="padding: 0.75rem;">${signup.phone}</td>
                                            <td style="padding: 0.75rem; text-align: center;">
                                                <span style="background: #E1F5FE; color: #01579B; padding: 0.25rem 0.75rem; border-radius: 12px; font-weight: bold; font-size: 0.85rem;">${signup.classPreference}</span>
                                            </td>
                                            <td style="padding: 0.75rem; text-align: center; font-size: 0.9rem; color: #666;">${daysAgo} days ago</td>
                                            <td style="padding: 0.75rem; text-align: center;">
                                                <select style="padding: 0.4rem; margin-right: 0.5rem; border: 1px solid #ddd; border-radius: 4px; font-weight: bold; cursor: pointer;">
                                                    <option value="">Assign Class</option>
                                                    <option value="P1">P1 (First Year)</option>
                                                    <option value="P2">P2 (Second Year)</option>
                                                    <option value="P3">P3 (Third Year)</option>
                                                    <option value="P4">P4 (Final Year)</option>
                                                </select>
                                                <button style="background: #4CAF50; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 4px; cursor: pointer; font-weight: bold; margin-right: 0.3rem;" onclick="alert('Approved: ${signup.name}')">✅ Approve</button>
                                                <button style="background: #F44336; color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 4px; cursor: pointer; font-weight: bold;" onclick="alert('Rejected: ${signup.name}')">❌ Reject</button>
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    ` : `
                        <div style="background: #E8F5E9; padding: 1.5rem; border-radius: 8px; text-align: center; border-left: 4px solid #4CAF50;">
                            <strong style="color: #2E7D32;">✅ All pending students approved!</strong>
                            <p style="margin: 0.5rem 0 0 0; color: #558B2F;">No new signup requests awaiting review</p>
                        </div>
                    `}
                    
                    <h4 style="margin: 2rem 0 1rem 0;">📋 Approved Students (${model.approvedStudents.length})</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                        ${model.approvedStudents.map(student => `
                            <div style="background: linear-gradient(135deg, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0.05) 100%); padding: 1rem; border-radius: 8px; border-left: 4px solid #4CAF50;">
                                <div style="font-weight: bold; color: #333; margin-bottom: 0.5rem;">${student.name}</div>
                                <div style="font-size: 0.9rem; color: #666; margin-bottom: 0.5rem;">${student.email}</div>
                                <div style="display: flex; gap: 0.5rem; align-items: center;">
                                    <span style="background: #C8E6C9; color: #1B5E20; padding: 0.2rem 0.6rem; border-radius: 12px; font-weight: bold; font-size: 0.8rem;">${student.class}</span>
                                    <span style="background: #E0F2F1; color: #004D40; padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.8rem;">✓ Active</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // SYSTEM CONTROLS SECTION
            console.log('✅ Building system controls section...');
            const systemControls = `
                <div class="card mb-4" style="border-top: 4px solid #9C27B0;">
                    <h3 style="margin: 0 0 1rem 0;">⚙️ System Controls</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                        <div style="background: #F3E5F5; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #9C27B0;">
                            <h4 style="margin: 0 0 0.75rem 0;">SLA Settings</h4>
                            <p style="margin: 0 0 1rem 0; font-size: 0.9rem; color: #666;">Configure SLA thresholds for each unit type</p>
                            <button style="background: #9C27B0; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: bold;">Configure</button>
                        </div>
                        <div style="background: #E8F5E9; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #4CAF50;">
                            <h4 style="margin: 0 0 0.75rem 0;">Unit Configuration</h4>
                            <p style="margin: 0 0 1rem 0; font-size: 0.9rem; color: #666;">Manage units, heads, and coordinators</p>
                            <button style="background: #4CAF50; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: bold;">Manage</button>
                        </div>
                        <div style="background: #FFF3E0; padding: 1.5rem; border-radius: 12px; border-left: 4px solid #FF9800;">
                            <h4 style="margin: 0 0 0.75rem 0;">Notifications</h4>
                            <p style="margin: 0 0 1rem 0; font-size: 0.9rem; color: #666;">Setup email and SMS alerts</p>
                            <button style="background: #FF9800; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: bold;">Setup</button>
                        </div>
                    </div>
                </div>
            `;
            
            // Assemble full HTML
            console.log('✅ Assembling final HTML...');
            const html = `
                <div style="padding: 2rem; height: 100%; overflow-y: scroll; overflow-x: hidden; box-sizing: border-box;">
                    ${ragBar}
                    ${statCards}
                    ${alertsSection}
                    ${trendsChart}
                    ${unitPerfSection}
                    ${quickActions}
                    ${userMgmt}
                    ${studentApprovals}
                    ${systemControls}
                    ${kpiTiles}
                    ${unitTable}
                    ${criticalTable}
                    <div style="text-align: center; color: #999; font-size: 0.9rem; margin-top: 2rem;">
                        <p>Last updated: ${new Date().toLocaleTimeString()}</p>
                        <p style="font-size: 0.85rem;">All times in working days</p>
                    </div>
                </div>
            `;
            
            this.root.innerHTML = html;
            
            console.log('✅ Admin Hub rendered successfully');
            
        } catch (error) {
            console.error('❌ Error in renderAdminHub:', error);
            console.error('Stack:', error.stack);
            this.root.innerHTML = `<div style="padding: 2rem; color: red;">
                <h3>❌ Error Loading Admin Hub</h3>
                <p><strong>Error Message:</strong> ${error.message}</p>
                <p><strong>Type:</strong> ${error.name}</p>
                <details style="margin-top: 1rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
                    <summary style="cursor: pointer; font-weight: bold;">Stack Trace</summary>
                    <pre style="overflow: auto; font-size: 0.8rem;">${error.stack || 'No stack trace'}</pre>
                </details>
                <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
                    Try refreshing the page (Ctrl+F5). If the problem persists, check the browser console (F12).
                </p>
            </div>`;
        }
    }

    renderIPPE1() {
        this.renderHomePage('ippe1', 'overview', 'all');
    }

    renderHomePage(activeTab = 'overview', subTab = 'overview', filterId = 'all') {
        try {
            this.title.textContent = 'Clinical Affairs Hub';
            
            // Clear and render immediately
            this.root.innerHTML = '';
            
            // Load full content immediately instead of waiting
            this._renderHomePageFull(activeTab, subTab, filterId);
            
        } catch (error) {
            console.error('Error in renderHomePage:', error);
            this.root.innerHTML = `<div style="padding: 2rem; color: red;"><h3>Error Loading Home Page</h3><pre>${error.message}</pre></div>`;
        }
    }

    _renderHomePageFull(activeTab = 'overview', subTab = 'overview', filterId = 'all') {
        try {
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
                { id: 'appe', label: 'APPE Experience Hub' }
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

            } else if (activeTab === 'appe') {
                // --- APPE TAB: Show Full APPE Experience Hub ---
                if (typeof window.renderAPPEExperienceHub === 'function') {
                    this.root.innerHTML = tabNav + `<div class="fade-in-up">${window.renderAPPEExperienceHub()}</div>`;
                } else {
                    this.root.innerHTML = tabNav + `<div class="card"><h3>APPE Experience Hub not available</h3></div>`;
                    console.error('renderAPPEExperienceHub function not found');
                }
            } else {
                // --- SPECIFIC COURSE DASHBOARDS (IPPE I, II, III, Community) ---
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
                <button class="btn btn-outline" onclick="app.render('students')">? Back to List</button>
                <button class="btn btn-primary" style="float: right;" onclick="app.generateStudentPDF('${student.id}')">📥 Download Official Report</button>
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
                        <span><span style="color:#4facfe">?</span> Academic</span>
                        <span><span style="color:#00f2fe">?</span> Professionalism</span>
                        <span><span style="color:#43e97b">?</span> IPPE Perf</span>
                        <span><span style="color:#fa709a">?</span> Extra</span>
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
                id: 'g1', title: 'Goal 1: High-Quality Education', icon: '🎯', color: '#2196f3', progress: 88,
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
                id: 'g2', title: 'Goal 2: Premier Research', icon: '🔬', color: '#9c27b0', progress: 72,
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
                id: 'g4', title: 'Goal 4: Impactful Fingerprint', icon: '⭐', color: '#ff9800', progress: 85,
                branches: [
                    { name: '4.1 Brand', kpis: [{ name: 'Social Reactivity', target: '5', actual: '8' }, { name: 'Leader Roles', target: '10', actual: '12' }] },
                    { name: '4.2 Alumni', kpis: [{ name: 'Alumni Activities', target: '9', actual: '6' }] },
                    { name: '4.3 Prof Orgs', kpis: [{ name: 'New MOUs', target: '1', actual: '2' }] }
                ]
            },
            {
                id: 'g5', title: 'Goal 5: Grad Studies', icon: '🎓', color: '#607d8b', progress: 60,
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
                id: 'ph2', title: 'Std 2: Qual Assurance', icon: '✅', color: '#3f51b5', progress: 0,
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
                id: 'ph4', title: 'Std 4: Students', icon: '👨‍🎓', color: '#00bcd4', progress: 0,
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
                id: 'ph6', title: 'Std 6: Resources', icon: '💼', color: '#4caf50', progress: 0,
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
                id: 'qs1', title: 'Student Surveys', icon: '📋', color: '#ff9800', progress: 0,
                kpis: [
                    { name: 'Course Evaluation Survey', y1: '3.8', y2: '4.0', y3: '4.1', target: '4.0' },
                    { name: 'Student Experience Survey', y1: '3.5', y2: '3.8', y3: '3.9', target: '4.0' },
                    { name: 'Program Evaluation Survey', y1: '3.6', y2: '3.9', y3: '4.2', target: '4.0' }
                ]
            },
            {
                id: 'qs2', title: 'Faculty & Staff', icon: '👥', color: '#9c27b0', progress: 0,
                kpis: [
                    { name: 'Faculty Experience Survey', y1: '3.9', y2: '4.1', y3: '4.0', target: '4.0' },
                    { name: 'Employee Satisfaction Survey', y1: '3.7', y2: '3.8', y3: '4.2', target: '4.0' }
                ]
            },
            {
                id: 'qs3', title: 'External Stakeholders', icon: '🌍', color: '#00bcd4', progress: 0,
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
            { id: 'strategic', label: '🎯 Strategic Goals' },
            { id: 'pharmd', label: '🎓 PharmD Program KPI' },
            { id: 'surveys', label: '📊 Quality Surveys' },
            { id: 'plo', label: '📈 Learning Outcomes (PLOs)' },
            { id: 'faculty', label: '👨‍🏫 Faculty' },
            { id: 'people', label: '👥 People & Distinctions' },
            { id: 'data', label: '📑 Reports' }
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
                    <h3 style="margin-bottom:1rem;">🎯 Strategic Goal Progress</h3>
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
                            <h3 style="margin-bottom:1rem;">⚖️ Strategic Balance Logic</h3>
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
                                        Tap to Edit ✏️
                                    </div>
                                </div>

                                <!-- MODAL FOR THIS GOAL -->
                                <div id="modal-${g.id}" class="qa-modal-overlay">
                                    <div class="qa-modal-content">
                                        <div class="qa-modal-header">
                                            <h3 style="margin:0; display:flex; align-items:center; gap:0.5rem;">${g.icon} ${g.title}</h3>
                                            <div style="display:flex; gap:1rem; align-items:center;">
                                                <button class="btn btn-primary btn-sm" onclick="app.updateGoalStatus('${g.id}')">💾 Save & Recalculate</button>
                                                <button class="close-modal" style="position:static;" onclick="document.getElementById('modal-${g.id}').classList.remove('active')">�</button>
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
                                <h3>⚖️ Standards Balance</h3>
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
                                    Tap to View Details 🔍
                                </div>
                            </div>

                            <!-- MODAL FOR THIS GOAL -->
                            <div id="modal-${g.id}" class="qa-modal-overlay">
                                <div class="qa-modal-content">
                                    <div class="qa-modal-header">
                                        <h3 style="margin:0; display:flex; align-items:center; gap:0.5rem;">${g.icon} ${g.title}</h3>
                                        <div style="display:flex; gap:1rem; align-items:center;">
                                            <button class="btn btn-primary btn-sm" onclick="app.updateGoalStatus('${g.id}')">💾 Save & Recalculate</button>
                                            <button class="close-modal" style="position:static;" onclick="document.getElementById('modal-${g.id}').classList.remove('active')">�</button>
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
                                <h3>⚖️ Surveys Balance</h3>
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
                alert('? Curriculum Map Updated & PLOs Recalculated!');
            };

            content = `
                <div class="fade-in-up">
                    <div class="dashboard-grid" style="grid-template-columns: 1fr 2fr; gap: 2rem;">
                        
                        <!-- LEFT: COURSE ASSESSMENT (Simulated Input) -->
                        <div class="card" style="height: fit-content;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                                <h3 style="margin:0;">🎓 Course Simulator</h3>
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
                                <h3>🕸️ Domain Achievement Overview</h3>
                                <div style="height: 250px;">
                                    <canvas id="chartPloRadarDashboard"></canvas>
                                </div>
                            </div>

                            <!-- Detailed Outcome List -->
                            <div class="card">
                                <h3>📈 Program Learning Outcomes Status</h3>
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
        } else if (activeTab === 'faculty' || activeTab === 'people' || activeTab === 'qa-faculty' || activeTab === 'qa-distinctions') {
            // Integration with Shared Layout: Get Content and Init Function
            content = window.getFacultyDashboardHTML ? window.getFacultyDashboardHTML() : '<h3>Error: Dashboard not loaded</h3>';
            initCharts = window.initFacultyCharts;
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

        alert('? KPI Status Recalculated & Saved!');
    }
    getIPPEDashboardContent(activeTab, subTab, filterId) {
        try {
            let allStudents = this.store.getStudents();

            // Filter by Level (Cohort)
            if (activeTab === 'ippe1') {
                allStudents = allStudents.filter(s => s.cohort === 'IPPE I' || s.cohort === 'IPPE 1');
            } else if (activeTab === 'ippe2') {
                allStudents = allStudents.filter(s => s.cohort === 'IPPE II' || s.cohort === 'IPPE 2');
            } else if (activeTab === 'ippe3') {
                allStudents = allStudents.filter(s => s.cohort === 'IPPE III' || s.cohort === 'IPPE 3');
            } else if (activeTab === 'community') {
                // Community uses IPPE III Roster (Same Students)
                allStudents = allStudents.filter(s => s.cohort === 'IPPE III' || s.cohort === 'IPPE 3');
            } else if (activeTab === 'appe') {
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
                            onclick="app.renderHomePage('${activeTab}', '${tab.id}', '${filterId}')"
                        >
                            ${tab.label}
                        </button>
                    `).join('')
                }
                </div>
            `;

            let content = '';
            // Sub-View Routing
            if (subTab === 'overview') {
                if (activeTab === 'ippe2') content = this.renderIPPE2_Overview(allStudents, students, filterId, activeTab);
                else if (activeTab === 'ippe3' || activeTab === 'community') content = this.renderIPPE3_Overview(allStudents, students, filterId);
                else content = this.renderIPPE1_Overview(allStudents, students, filterId, activeTab);
            }
            else if (subTab === 'tracking') content = this.renderIPPE_Tracking(students);
            else if (subTab === 'competency') content = this.renderIPPE_Competency_V2(students);
            else if (subTab === 'assessments') content = this.renderIPPE_Assessments(students);
            else if (subTab === 'admin') content = this.renderIPPE_Admin(students);

            // Return package
            return {
                html: tabNav + content,
                initCharts: () => {
                    if (subTab === 'overview') this.initIPPECharts(students, activeTab);
                }
            };

        } catch (e) {
            console.error(`Error in getIPPEDashboardContent(${activeTab}):`, e);
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
                <h3>📊 Grade Ranking System</h3>
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
                    <h3>➕ Add Single Student</h3>
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
                        <button class="btn btn-outline" onclick="alert('Sending Notifications...')">📧 Send Risk Notifications</button>
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

        alert(`? Student Added Successfully!\n\nName: ${name}\nCohort: ${cohort}\nGPA: ${inputGPA}\nRisk Status: ${risk.toUpperCase()}`);
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
                        <span class="stat-trend trend-up">? 15% vs LY</span>
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
                        <span class="stat-trend trend-up">? 2</span>
                    </div>
                </div>

                <!--Charts Grid-->
                <div class="dashboard-grid" style="grid-template-columns: 1fr 1fr; grid-gap: 1.5rem;">

                    <!-- 1. Research Outcomes -->
                    <div class="card">
                        <h3>📚 Research Output & Impact</h3>
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
                        <h3>👨‍🎓 Student Supervision</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartSupervision"></canvas>
                        </div>
                    </div>

                    <!-- 4. Professional Development -->
                    <div class="card">
                        <h3>🎓 Professional Development</h3>
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
                        <h3>⭐ Research Quality (Q-Index)</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartResearch"></canvas>
                        </div>
                        <p style="margin-top:1rem; color:#666; font-size:0.9rem;">
                            High-Impact (Q1) Publications Track.
                        </p>
                    </div>

                    <!-- 2. Grant Success Funnel -->
                    <div class="card">
                        <h3>📊 Grant Success Funnel</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartGrants"></canvas>
                        </div>
                        <p style="margin-top:1rem; color:#666; font-size:0.9rem; text-align:center;">
                            Total Funding Secured: <strong>${((grantData.fundingSources[0] + grantData.fundingSources[1]) / 1000).toLocaleString()} K SAR</strong>
                        </p>
                    </div>

                    <!-- 3. Student Supervision -->
                    <div class="card">
                        <h3>📋 Supervision Load</h3>
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
                                            <div style="color:#666; font-size:0.9rem;">${c.country} � ${c.type}</div>
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
                <h3>📝 Update Metrics</h3>
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
    renderPharmaScienceDashboardEnhanced_v2(deptLabel = 'Dept.of Pharmaceutical Sciences') {
        this.pharmaDeptLabel = deptLabel;
        this.title.innerHTML = `
            ${deptLabel}
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
                        <h3>📊 Research Outcomes & Quality</h3>
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
                        <h3>🎓 Professional & Academic Development</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartRadar"></canvas>
                        </div>
                        <p style="margin-top:1rem; color:#666; font-size:0.9rem; text-align:center;">
                            Balanced portfolio of <strong>Service, Leadership, and Scholarship</strong>.
                        </p>
                    </div>

                    <!-- Student Supervision (Bar) -->
                    <div class="card fade-in-up delay-4">
                        <h3>👨‍🎓 Supervision & Mentorship</h3>
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
                    <h3>👥 Department Faculty</h3>
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
                                                <div style="width:32px; height:32px; background:#e3f2fd; border-radius:50%; display:flex; align-items:center; justify-content:center; color:var(--primary-blue); font-size:0.8rem;">👨‍🔬</div>
                                                ${f.name}
                                            </div>
                                        </td>
                                        <td style="padding:1rem;">${f.role}</td>
                                        <td style="padding:1rem; text-align:center;">
                                            <span class="badge-secondary" style="background:#e3f2fd; color:#1565c0;">${metrics.teachingLoad || 0} Hrs</span>
                                        </td>
                                        <td style="padding:1rem; color:#666;">${f.email}</td>
                                        <td style="padding:1rem; text-align:right; display:flex; gap:0.5rem; justify-content:flex-end;">
                                            <button onclick="window.app.renderFacultyProfile('${f.email}')" class="btn btn-sm btn-outline">👁️ View Profile</button>
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
                    <h3>📝 Update Department Metrics</h3>
                    <button onclick="window.app.renderPharmaScienceDashboardEnhanced_v2(window.app.pharmaDeptLabel)" class="btn btn-sm btn-outline">Cancel</button>
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
        this.renderPharmaScienceDashboardEnhanced_v2(this.pharmaDeptLabel);
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
                <button onclick="window.app.renderPharmaScienceDashboardEnhanced_v2(window.app.pharmaDeptLabel)" class="btn btn-sm btn-outline">? Dept.</button>
                <div style="flex:1;">
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                        <span style="font-size:1.2rem; font-weight:bold;">${metrics.name}</span>
                        <span class="badge-secondary" style="font-size:0.75rem;">${metrics.role}</span>
                    </div>
                    ${metrics.lastSync ? `<div style="font-size:0.75rem; color:#2e7d32; margin-top:2px;">? Last synced with Scholar: ${new Date(metrics.lastSync).toLocaleTimeString()}</div>` : ''}
                </div>
                
                <div style="display:flex; gap:0.5rem;">
                <div style="display:flex; gap:0.5rem;">
                    ${metrics.scholarUrl ? `
                        <button onclick="window.app.simulateScholarSync('${email}')" class="btn btn-sm btn-outline" style="border-color:#2196f3; color:#2196f3;">
                            🔄 Sync Scholar
                        </button>
                    ` : `
                        <button onclick="window.app.renderFacultyEditMode('${email}')" class="btn btn-sm btn-outline" style="border-color:#666; color:#666; opacity:0.7;">
                            ? Add Scholar Link
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
                        <h3>📊 Research Output</h3>
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
                        <h3>📈 Annual Activity Profile</h3>
                        <div style="height: 300px; position:relative;">
                            <canvas id="chartProfileRadar"></canvas>
                        </div>
                    </div>

                    <!-- Supervision -->
                    <div class="card">
                        <h3>👥 Supervision Breakdown</h3>
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
                    <h3>📝 Update Personal Metrics</h3>
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
            btn.innerHTML = '? Connecting...';
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
                alert(`📚 New Publication Found!\nAdded to Q1[${profile.research.years[lastYearIdx]}]`);
            }

            // Update timestamp
            profile.lastSync = new Date().toISOString();
            this.pharmaData.facultyProfiles[email] = profile;

            // 4. Re-render
            alert(`? Google Scholar Sync Complete!\n\n + ${newCitations} New Citations since last check.`);
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
                            <button class="btn-close" onclick="this.closest('.modal-overlay').remove()">�</button>
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
                        📤 Click to Upload Document
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
                <button onclick="window.app.renderStudentPortal()" style="background:none; border:none; color:#666; cursor:pointer; margin-bottom:1rem;">? Back to Portal</button>
                <h2 style="color:var(--primary-blue); margin-top:0;">Request: ${type}</h2>
                <div style="background:#e3f2fd; color:#1565c0; padding:1rem; border-radius:4px; margin-bottom:1.5rem; font-size:0.9rem;">
                    ℹ️ This request will be routed to the <strong>Clinical Affairs Admin</strong> for the selected Course/Level.
                </div>
                
                <form onsubmit="event.preventDefault(); window.app.handleRequestSubmit('${type}')" id="requestForm">
                    ${formFields}
                    <div style="text-align:right; margin-top:1.5rem;">
                        <button type="button" onclick="window.app.renderStudentPortal()" class="btn btn-outline" style="margin-right:0.5rem;">Cancel</button>
                        <button type="submit" class="btn btn-primary">📨 Submit Request</button>
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
        alert(`? Request Submitted Successfully!\n\nID: ${newReq.id} \nType: ${type} \nCourse: ${course} \nStatus: Sent to Admin`);

        // Return to Portal
        this.renderStudentPortal();
    }

    renderDocumentHub() {
        this.title.textContent = '📋 Clinical Documentation Hub';
        const docs = this.pharmaData.compliance;

        const html = `
                < div class="card fade-in-up" style = "max-width:900px; margin:2rem auto;" >
                <button onclick="window.app.renderStudentPortal()" style="background:none; border:none; color:#666; cursor:pointer; margin-bottom:1rem;">? Back to Portal</button>
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
                statusIcon = '?';
                statusLabel = 'Approved';
            } else if (doc.status === 'Pending') {
                statusColor = '#f1c40f'; // Yellow
                statusIcon = '?';
                statusLabel = 'Pending Review';
            } else {
                statusColor = '#e74c3c'; // Red
                statusIcon = '?';
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
                                    ${doc.expiry ? `<div>📅 Expires: ${doc.expiry}</div>` : ''}
                                    ${!doc.date ? '<div>Not uploaded yet</div>' : ''}
                                </div>

                                <button class="btn btn-outline btn-sm" style="width:100%;" onclick="window.app.handleAuthUpload('${doc.id}')">
                                    ${doc.status === 'Missing' ? '📤 Upload Document' : '📤 Update / Renew'}
                                </button>
                            </div>
                        `;
        }).join('')}
                </div>

                <div style="margin-top:2rem; padding:1rem; background:#f0f7ff; border-radius:8px; display:flex; gap:1rem; align-items:center;">
                    <div style="font-size:1.5rem;">📄</div>
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
                        alert(`? Upload Successful!\n\nDocument: ${doc.name} \nStatus: Submitted for Review`);
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
            { id: 'kfmc', name: 'King Fahad Medical City (KFMC)', type: 'MOH', region: 'Riyadh', img: '🏥' },
            { id: 'kfsh', name: 'King Faisal Specialist Hospital', type: 'Specialist', region: 'Riyadh', img: '🏥' },
            { id: 'security', name: 'Security Forces Hospital', type: 'MOI', region: 'Riyadh', img: '🏥' },
            { id: 'nora', name: 'Princess Nourah Hospital', type: 'University', region: 'Riyadh', img: '🏥' }
        ];

        const html = `
                < div class= "card fade-in-up" style = "max-width:1000px; margin:2rem auto;" >
                <button onclick="window.app.renderStudentPortal()" style="background:none; border:none; color:#666; cursor:pointer; margin-bottom:1rem;">? Back to Portal</button>
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
                <button onclick="window.app.renderHospitalProfiles()" style="background:none; border:none; color:#666; cursor:pointer; margin-bottom:1rem;">? Back to Directory</button>
                
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
                    <button class="btn btn-outline" onclick="alert('Downloading Handbook...')">📥 Download Site Handbook</button>
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
                <button onclick="window.app.renderStudentPortal()" style="background:none; border:none; color:#666; cursor:pointer; margin-bottom:1rem;">? Back to Portal</button>
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
                                <div style="color:#f1c40f; font-weight:bold;">? ${p.rating}</div>
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
                            <small>✉️ ${p.email}</small>
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
            <div class="card" style="text-align:center; padding:3rem;">
                <h2 style="font-size:1.6rem; margin-bottom:0.5rem;">🚧 Under Construction</h2>
                <p style="margin:0.25rem 0 1rem 0;">The ${title} module is currently being developed.</p>
                <button class="btn btn-primary" onclick="app.render('dashboard')" style="margin-top: 0.5rem;">Return Home</button>
            </div>
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
                            <button class="btn btn-primary" onclick="window.renderGradingModal('${type}', '${s.id}')">📊 Grade (Rubric)</button>
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
                    <h3>📝 Data Entry Hub</h3>
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
                        <button class="btn btn-primary" onclick="window.downloadMockReport()">📥 Download Report</button>
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
        this.title.textContent = 'Student Portal - Home';
        StudentPortal.renderHome();
    }

    renderStudentPortalOld() {
        this.title.textContent = 'Student Portal';

        // Mock Session Logic (Week 10 as per prompt)
        const currentWeekNum = 10;
        const prevSession = IPPE_SCHEDULE.find(s => s.week === currentWeekNum - 1);
        const currentSession = IPPE_SCHEDULE.find(s => s.week === currentWeekNum);
        const nextSession = IPPE_SCHEDULE.find(s => s.week === currentWeekNum + 1);

        const html = `
                <!-- Program Selector & Navigation Cards -->
                <div class="card mb-4" style="background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%); border: none;">
                    <label style="font-size: 0.9rem; color: #666; margin-bottom: 1rem; display: block; font-weight: 600;">Select Program:</label>
                    <select class="program-dropdown" style="width: 100%; padding: 0.75rem; border: 2px solid #e0e0e0; border-radius: 8px; font-size: 0.95rem; margin-bottom: 1.5rem; cursor: pointer;">
                        <option value="pharmd">PharmD Program</option>
                    </select>
                    
                    <!-- Card-Based Navigation -->
                    <div class="clinical-nav-cards">
                        <!-- Home/Portal Card -->
                        <a href="#" class="clinical-nav-card" onclick="event.preventDefault(); window.app.render('student-portal');">
                            <div class="card-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                                🏠
                            </div>
                            <div class="card-content">
                                <h4>Home</h4>
                                <p>Student Portal</p>
                            </div>
                            <div class="card-badge">Portal</div>
                        </a>

                        <!-- IPPE I Card -->
                        <a href="#" class="clinical-nav-card" onclick="event.preventDefault(); window.app.render('ippe1');">
                            <div class="card-icon" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
                                1️⃣
                            </div>
                            <div class="card-content">
                                <h4>IPPE I</h4>
                                <p>Year 2 • Foundation</p>
                            </div>
                            <div class="card-badge" style="background: #f5576c;">Year 2</div>
                        </a>

                        <!-- IPPE II Card -->
                        <a href="#" class="clinical-nav-card" onclick="event.preventDefault(); window.app.render('ippe2');">
                            <div class="card-icon" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                                2️⃣
                            </div>
                            <div class="card-content">
                                <h4>IPPE II</h4>
                                <p>Year 3 • Development</p>
                            </div>
                            <div class="card-badge" style="background: #00f2fe;">Year 3</div>
                        </a>

                        <!-- IPPE III Card -->
                        <a href="#" class="clinical-nav-card" onclick="event.preventDefault(); window.app.render('ippe3');">
                            <div class="card-icon" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
                                3️⃣
                            </div>
                            <div class="card-content">
                                <h4>IPPE III</h4>
                                <p>Year 4 • Advanced</p>
                            </div>
                            <div class="card-badge" style="background: #38f9d7; color: #000;">Year 4</div>
                        </a>

                        <!-- IPPE Community Card -->
                        <a href="#" class="clinical-nav-card" onclick="event.preventDefault(); window.app.render('ippe-community');">
                            <div class="card-icon" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
                                🏘️
                            </div>
                            <div class="card-content">
                                <h4>IPPE Community</h4>
                                <p>Community Practice</p>
                            </div>
                            <div class="card-badge" style="background: #fa709a;">Community</div>
                        </a>

                        <!-- APPE Experience Hub Card -->
                        <a href="#" class="clinical-nav-card" onclick="event.preventDefault(); window.app.render('appe-experience-hub');">
                            <div class="card-icon" style="background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);">
                                🎓
                            </div>
                            <div class="card-content">
                                <h4>APPE Experience Hub</h4>
                                <p>Advanced Rotations</p>
                            </div>
                            <div class="card-badge" style="background: #fcb69f; color: #000;">Riyadh</div>
                        </a>
                    </div>
                </div>

                < div class="user-welcome" style = "margin-bottom: 2rem;" >
                <h2>Welcome back, Raghad! 👋</h2>
                <p>IPPE I - Community Pharmacy | Cohort 2025</p>
            </div >

            < !--Career Flow / Session Tracker-- >
            <div class="card mb-4" style="background: linear-gradient(to right, #f8f9fa, #fff);">
                <h3 style="margin-bottom: 1rem; color: var(--primary-green);">🎯 Your Rotation Journey</h3>
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
                        <p style="margin: 0;"><strong>Venue:</strong> ${currentSession?.topic.includes('IV Room') ? 'Hospital Venue � Large' : 'Riyadh Simulation Center'}</p>
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
                    <h3 style="margin-bottom: 1rem; color: var(--primary-blue);">📝 Active Requests</h3>
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
                                        ID: ${req.id} � ${req.date}
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
                                    <div style="width:24px; height:24px; background:${s1}; border-radius:50%; margin:0 auto; color:white; font-size:12px; line-height:24px;">?</div>
                                    <small style="display:block; margin-top:5px; font-weight:bold;">Sent</small>
                                </div>
                                
                                <!-- Step 2 -->
                                <div style="z-index:1; text-align:center;">
                                    <div style="width:24px; height:24px; background:${req.step >= 2 ? s2 : '#fff'}; border:${req.step >= 2 ? 'none' : '2px solid #ddd'}; border-radius:50%; margin:0 auto; color:white; font-size:12px; line-height:24px;">
                                        ${req.step >= 2 ? '?' : ''}
                                    </div>
                                    <small style="display:block; margin-top:5px;">Under Review</small>
                                </div>

                                <!-- Step 3 -->
                                <div style="z-index:1; text-align:center;">
                                    <div style="width:24px; height:24px; background:${req.step >= 3 ? s3 : '#fff'}; border:${req.step >= 3 ? 'none' : '2px solid #ddd'}; border-radius:50%; margin:0 auto; color:white; font-size:12px; line-height:24px;">
                                        ${req.step >= 3 ? '?' : ''}
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
    alert(`? Grade Saved! Score: ${total}/${maxScore} (${percentage}%) Assessment: ${type}`);
    document.getElementById('grading-modal-container').innerHTML = ''; // Close modal
    window.app.renderIPPE_Admin_Bulk(); // Refresh table
};

window.downloadMockReport = () => {
    alert("Downloading report... (Mock)");
};

// ======================
// Alumni Edit System
// ======================

App.prototype.getAlumniEditData = function(tab) {
    const stored = JSON.parse(localStorage.getItem('alumniEdits') || '{}');
    return stored[tab] || {};
};

App.prototype.saveAlumniEditData = function(tab, data) {
    const stored = JSON.parse(localStorage.getItem('alumniEdits') || '{}');
    stored[tab] = data;
    localStorage.setItem('alumniEdits', JSON.stringify(stored));
};

App.prototype.renderAlumniEditPanel = function(tab, tabTitle) {
    const editData = this.getAlumniEditData(tab);
    const editHtml = `
        <div style="background: #f5f5f5; border: 1px solid #ddd; border-radius: 12px; padding: 2rem; margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="margin: 0; color: #333;">✏️ Edit Tab Content</h3>
                <button onclick="app.exitEditMode()" style="background: #f0f0f0; border: 1px solid #ddd; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 500;">Exit Edit Mode</button>
            </div>

            <!-- Tab Metadata Section -->
            <div style="background: white; border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem; border-left: 4px solid #1B5E20;">
                <h4 style="margin-top: 0; margin-bottom: 1rem; color: #333;">📋 Tab Information</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #333;">Tab Title</label>
                        <input type="text" id="edit_title" value="${editData.title || tabTitle}" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;" />
                    </div>
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #333;">Icon/Emoji</label>
                        <input type="text" id="edit_icon" value="${editData.icon || '📊'}" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem;" />
                    </div>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #333;">Description/Notes</label>
                    <textarea id="edit_description" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px; font-size: 1rem; min-height: 80px; font-family: inherit;">${editData.description || ''}</textarea>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <button onclick="app.saveAlumniTabEdit('${tab}')" style="background: #1B5E20; color: white; padding: 0.75rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">💾 Save Tab Info</button>
                    <button onclick="app.resetAlumniTabEdit('${tab}'); app.render('${tab}');" style="background: #FF9800; color: white; padding: 0.75rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">🔄 Reset</button>
                </div>
            </div>

            <!-- Data Editing Section -->
            <div style="background: white; border-radius: 10px; padding: 1.5rem; border-left: 4px solid #2196F3;">
                <h4 style="margin-top: 0; margin-bottom: 1rem; color: #333;">📊 Edit Data & Numbers</h4>
                <p style="margin: 0 0 1rem 0; color: #666; font-size: 0.95rem;">
                    Edit individual metrics and values displayed on this tab
                </p>
                <div id="alumni_data_editor_${tab}" style="background: #f9f9f9; padding: 1rem; border-radius: 8px; max-height: 300px; overflow-y: auto; margin-bottom: 1rem;">
                    <p style="color: #999; text-align: center; padding: 2rem;">Click "Edit Metrics" to modify numbers and data</p>
                </div>
                <button onclick="app.showDataEditor('${tab}')" style="background: #2196F3; color: white; padding: 0.75rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; width: 100%; margin-bottom: 1rem;">✏️ Edit Metrics & Numbers</button>
            </div>

            <!-- Import/Export Section -->
            <div style="background: white; border-radius: 10px; padding: 1.5rem; border-left: 4px solid #F57C00; margin-top: 1.5rem;">
                <h4 style="margin-top: 0; margin-bottom: 1rem; color: #333;">📥📤 Import / Export Data</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #333;">Import from Excel/CSV</label>
                        <input type="file" id="alumni_data_file_${tab}" accept=".csv,.xlsx" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 6px; font-size: 0.9rem;" />
                    </div>
                    <div style="display: flex; align-items: flex-end;">
                        <button onclick="app.importAlumniData('${tab}')" style="background: #4CAF50; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; width: 100%;">📂 Import Data</button>
                    </div>
                </div>
                <button onclick="app.exportAlumniDataCSV('${tab}')" style="background: #F57C00; color: white; padding: 0.75rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; width: 100%; margin-bottom: 1rem;">📥 Download Data as CSV</button>
            </div>

            <!-- Reset Section -->
            <div style="background: white; border-radius: 10px; padding: 1.5rem; border-left: 4px solid #E91E63; margin-top: 1.5rem;">
                <h4 style="margin-top: 0; margin-bottom: 1rem; color: #333;">🔄 Reset to Database</h4>
                <p style="margin: 0 0 1rem 0; color: #666; font-size: 0.95rem;">
                    Clear all manual edits and refresh numbers to show latest database values
                </p>
                <button onclick="app.resetAlumniMetrics('${tab}')" style="background: #E91E63; color: white; padding: 0.75rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; width: 100%;">🔄 Reset All Numbers to Database</button>
            </div>
        </div>
    `;
    return editHtml;
};

App.prototype.saveAlumniTabEdit = function(tab) {
    const editData = {
        title: document.getElementById('edit_title').value,
        icon: document.getElementById('edit_icon').value,
        description: document.getElementById('edit_description').value
    };
    this.saveAlumniEditData(tab, editData);
    alert('Changes saved! Refreshing view...');
    this.render(tab);
};

App.prototype.resetAlumniTabEdit = function(tab) {
    const stored = JSON.parse(localStorage.getItem('alumniEdits') || '{}');
    delete stored[tab];
    localStorage.setItem('alumniEdits', JSON.stringify(stored));
};

App.prototype.toggleAlumniEditMode = function(tab) {
    if (!this.alumniEditMode || this.alumniEditMode !== tab) {
        this.alumniEditMode = tab;
        this.render(tab);
    } else {
        this.alumniEditMode = null;
        this.render(tab);
    }
};

App.prototype.exitEditMode = function() {
    this.alumniEditMode = null;
};

App.prototype.getAlumniTabTitle = function(tab, defaultTitle) {
    const editData = this.getAlumniEditData(tab);
    return editData.title || defaultTitle;
};

// Data Editor Methods
App.prototype.getAlumniTabMetrics = function(tab) {
    const stored = JSON.parse(localStorage.getItem('alumniMetrics') || '{}');
    return stored[tab] || {};
};

App.prototype.saveAlumniMetrics = function(tab, metrics) {
    const stored = JSON.parse(localStorage.getItem('alumniMetrics') || '{}');
    stored[tab] = metrics;
    localStorage.setItem('alumniMetrics', JSON.stringify(stored));
};

App.prototype.getMetricValue = function(tab, metricKey, defaultValue) {
    const metrics = this.getAlumniTabMetrics(tab);
    return metrics[metricKey] !== undefined ? metrics[metricKey] : defaultValue;
};

App.prototype.saveMetricValue = function(tab, metricKey, value) {
    const metrics = this.getAlumniTabMetrics(tab);
    metrics[metricKey] = value;
    this.saveAlumniMetrics(tab, metrics);
};

App.prototype.makeMetricEditable = function(tab, metricKey, currentValue) {
    const inputId = `metric_input_${tab}_${metricKey}`;
    return `
        <span id="metric_${tab}_${metricKey}" onclick="app.editMetricInline('${tab}', '${metricKey}', '${currentValue}')" style="cursor: pointer; padding: 0.25rem 0.5rem; border-radius: 4px; transition: all 0.2s;" onmouseover="this.style.backgroundColor='#fff3e0'; this.style.boxShadow='0 0 0 2px #FF9800';" onmouseout="this.style.backgroundColor='transparent'; this.style.boxShadow='none';">
            ${currentValue}
        </span>
    `;
};

// Helper to create editable metric span with custom colors
App.prototype.createEditableMetric = function(tab, metricKey, defaultValue, hoverColor = '#e8f5e9', borderColor = '#1B5E20') {
    const value = this.getMetricValue(tab, metricKey, defaultValue);
    return `<span class="editable-metric" data-tab="${tab}" data-key="${metricKey}" data-value="${value}" style="cursor: pointer; padding: 0.25rem 0.5rem; border-radius: 4px; transition: all 0.2s; display: inline-block;" onmouseover="this.style.backgroundColor='${hoverColor}'; this.style.boxShadow='0 0 0 2px ${borderColor}';" onmouseout="this.style.backgroundColor='transparent'; this.style.boxShadow='none';" onclick="app.editMetricInline('${tab}', '${metricKey}', '${value}')">${value}</span>`;
};

App.prototype.editMetricInline = function(tab, metricKey, currentValue) {
    const metricElement = document.querySelector(`[data-tab="${tab}"][data-key="${metricKey}"]`);
    if (!metricElement) {
        console.log(`Element not found: [data-tab="${tab}"][data-key="${metricKey}"]`);
        return;
    }

    const inputId = `edit_${tab}_${metricKey}`;
    const inputHtml = `<input type="text" id="${inputId}" value="${currentValue}" style="width: auto; min-width: 100px; padding: 0.5rem; border: 2px solid #FF9800; border-radius: 4px; font-size: 1.1rem; font-weight: 700;" 
        onkeypress="if(event.key==='Enter') { app.saveMetricInline('${tab}', '${metricKey}', this.value); }"
        onblur="app.saveMetricInline('${tab}', '${metricKey}', this.value)"
    />`;
    
    metricElement.innerHTML = inputHtml;
    metricElement.style.cursor = 'default';
    metricElement.style.backgroundColor = 'transparent';
    metricElement.style.boxShadow = 'none';
    
    setTimeout(() => {
        const input = document.getElementById(inputId);
        if (input) {
            input.focus();
            input.select();
        }
    }, 10);
};

App.prototype.saveMetricInline = function(tab, metricKey, newValue) {
    this.saveMetricValue(tab, metricKey, newValue);
    // Re-render the current tab
    this.render(tab);
};

App.prototype.showDataEditor = function(tab) {
    const metrics = this.getAlumniTabMetrics(tab);
    const metricsList = Object.entries(metrics).length > 0 
        ? Object.entries(metrics).map(([key, value]) => `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; padding: 1rem; background: white; border-radius: 6px; border: 1px solid #eee;">
                <div>
                    <label style="font-size: 0.85rem; color: #666; font-weight: 600;">${key}</label>
                    <input type="text" value="${value}" placeholder="Enter value" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; margin-top: 0.5rem;" onchange="app.updateMetric('${tab}', '${key}', this.value)" />
                </div>
            </div>
        `).join('')
        : `<p style="color: #999; text-align: center; padding: 1rem;">No custom metrics yet. Add metrics below.</p>`;

    const editorPanel = `
        ${metricsList}
        <div style="padding: 1rem; background: white; border-radius: 6px; border: 1px dashed #ddd; margin-bottom: 1rem;">
            <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #333;">Add New Metric</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                <input type="text" id="new_metric_key_${tab}" placeholder="Metric name (e.g., Employment Rate)" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;" />
                <input type="text" id="new_metric_value_${tab}" placeholder="Value (e.g., 94%)" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;" />
            </div>
            <button onclick="app.addNewMetric('${tab}')" style="background: #2196F3; color: white; padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; font-weight: 600; margin-top: 0.75rem; width: 100%;">➕ Add Metric</button>
        </div>
        <button onclick="app.saveAllMetrics('${tab}')" style="background: #1B5E20; color: white; padding: 0.75rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; width: 100%;">💾 Save All Metrics</button>
    `;

    document.getElementById(`alumni_data_editor_${tab}`).innerHTML = editorPanel;
};

App.prototype.updateMetric = function(tab, key, value) {
    const metrics = this.getAlumniTabMetrics(tab);
    metrics[key] = value;
    this.saveAlumniMetrics(tab, metrics);
};

App.prototype.addNewMetric = function(tab) {
    const keyInput = document.getElementById(`new_metric_key_${tab}`);
    const valueInput = document.getElementById(`new_metric_value_${tab}`);
    
    if (!keyInput.value.trim() || !valueInput.value.trim()) {
        alert('Please enter both metric name and value');
        return;
    }

    const metrics = this.getAlumniTabMetrics(tab);
    metrics[keyInput.value] = valueInput.value;
    this.saveAlumniMetrics(tab, metrics);
    
    keyInput.value = '';
    valueInput.value = '';
    
    this.showDataEditor(tab);
    alert('Metric added! Click Save All Metrics to finalize.');
};

App.prototype.saveAllMetrics = function(tab) {
    alert('Metrics saved! Refreshing view...');
    this.render(tab);
};

App.prototype.importAlumniData = function(tab) {
    const fileInput = document.getElementById(`alumni_data_file_${tab}`);
    if (!fileInput.files.length) {
        alert('Please select a CSV or Excel file first.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
        try {
            const content = e.target.result;
            const lines = content.split('\n');
            const headers = lines[0].split(',').map(h => h.trim());
            
            const metrics = {};
            for (let i = 1; i < lines.length; i++) {
                if (!lines[i].trim()) continue;
                const values = lines[i].split(',').map(v => v.trim());
                if (values[0]) {
                    metrics[values[0]] = values[1] || '';
                }
            }

            this.saveAlumniMetrics(tab, metrics);
            alert(`Successfully imported ${Object.keys(metrics).length} metrics from ${file.name}`);
            this.render(tab);
        } catch (error) {
            alert('Error importing file. Make sure it\'s a valid CSV with format: Metric Name, Value');
            console.error(error);
        }
    };

    reader.readAsText(file);
};

App.prototype.resetAlumniMetrics = function(tab) {
    if (confirm(`Reset all metrics for this tab to database values? This will remove all manual edits.`)) {
        const key = `alumniMetrics_${tab}`;
        localStorage.removeItem(key);
        console.log(`Reset metrics for tab: ${tab}`);
        // Re-render the tab to show fresh database values
        this.render(tab);
    }
};

App.prototype.exportAlumniDataCSV = function(tab) {
    const metrics = this.getAlumniTabMetrics(tab);
    const editData = this.getAlumniEditData(tab);
    
    let csv = 'Metric,Value\n';
    Object.entries(metrics).forEach(([key, value]) => {
        csv += `"${key}","${value}"\n`;
    });

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    element.setAttribute('download', `${tab}_data_${new Date().toISOString().split('T')[0]}.csv`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    alert('Data exported successfully!');
};

// ======================
// Alumni Unit Methods
// ======================

App.prototype.renderAlumniOverview = function() {
    this.title.textContent = '🧑‍🎓 Alumni Overview';
    const db = ALUMNI_DATABASE;
    const currentYear = document.getElementById('alumniYearFilter')?.value || '';
    const currentProgram = document.getElementById('alumniProgramFilter')?.value || '';

    const totalAlumni = db.alumni.length + 235;
    const activeAlumni = db.mentorship.total_mentors + db.preceptorship.total_preceptors + 156;
    const mentorCount = db.mentorship.total_mentors;
    const postgraduateCount = db.postgraduate.length + 123;
    const boardCertCount = db.postgraduate.filter(p => p.type === 'Board Certification').length + 335;

    const pharmacdCount = db.alumni.filter(a => a.program === 'PharmD').length + 445;
    const bpharmCount = db.alumni.filter(a => a.program === 'BPharm').length + 645;
    const engagementRate = 78;
    const employmentRate = db.employment_outcomes.employment_rate_12m || 94;

    this.root.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <label style="font-size: 0.9rem; color: #666; margin-right: 1rem;">Filter by Year:</label>
            <select id="alumniYearFilter" onchange="window.updateAlumniOverview()" style="padding: 0.5rem 0.75rem; border: 1px solid #ddd; border-radius: 6px;">
                <option value="" ${currentYear === '' ? 'selected' : ''}>All Years</option>
                <option value="2019" ${currentYear === '2019' ? 'selected' : ''}>2019</option>
                <option value="2020" ${currentYear === '2020' ? 'selected' : ''}>2020</option>
                <option value="2021" ${currentYear === '2021' ? 'selected' : ''}>2021</option>
                <option value="2022" ${currentYear === '2022' ? 'selected' : ''}>2022</option>
            </select>
            <label style="font-size: 0.9rem; color: #666; margin-left: 1.5rem; margin-right: 1rem;">Program:</label>
            <select id="alumniProgramFilter" onchange="window.updateAlumniOverview()" style="padding: 0.5rem 0.75rem; border: 1px solid #ddd; border-radius: 6px;">
                <option value="" ${currentProgram === '' ? 'selected' : ''}>All Programs</option>
                <option value="PharmD" ${currentProgram === 'PharmD' ? 'selected' : ''}>PharmD</option>
                <option value="BPharm" ${currentProgram === 'BPharm' ? 'selected' : ''}>BPharm</option>
                <option value="Technician" ${currentProgram === 'Technician' ? 'selected' : ''}>Technician</option>
            </select>
        </div>

        <!-- Top 3 Main Metrics -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <!-- Total Alumni Card -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">👥</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 0.5rem;">Total Alumni</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #1B5E20;">${totalAlumni.toLocaleString()}</div>
                </div>
                <div style="background: #f0f0f0; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: #1B5E20; height: 100%; width: 92%; border-radius: 3px;"></div>
                </div>
                <div style="margin-top: 0.75rem; font-size: 0.8rem; color: #666;">
                    <span style="font-weight: 600; color: #1B5E20;">92%</span> Active Rate
                </div>
            </div>

            <!-- Employment Rate Card -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">💼</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 0.5rem;">Employment Rate</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #2196F3;">${employmentRate}%</div>
                </div>
                <div style="font-size: 0.8rem; color: #666; margin-bottom: 1rem;">
                    <div>📊 <strong>${db.employment_outcomes.total_employed || 345}</strong> Employed</div>
                    <div style="margin-top: 0.3rem;">📈 <strong>${activeAlumni - (db.employment_outcomes.total_employed || 345)}</strong> Postgrad/Other</div>
                </div>
                <div style="background: #e3f2fd; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: #2196F3; height: 100%; width: ${employmentRate}%; border-radius: 3px;"></div>
                </div>
                <div style="margin-top: 0.75rem; font-size: 0.8rem; color: #666;">
                    <span style="font-weight: 600; color: #2196F3;">+${Math.floor(activeAlumni * 0.15)}</span> This Month
                </div>
            </div>

            <!-- Mentors & Preceptors Card -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">🎯</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 0.5rem;">Active Contributors</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #ff6b6b;">${mentorCount + db.preceptorship.total_preceptors}</div>
                </div>
                <div style="font-size: 0.8rem; color: #666; margin-bottom: 1rem;">
                    <div>🧠 <strong>${mentorCount}</strong> Mentors</div>
                    <div style="margin-top: 0.3rem;">🏥 <strong>${db.preceptorship.total_preceptors}</strong> Preceptors</div>
                </div>
                <div style="background: #ffebee; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: #ff6b6b; height: 100%; width: 85%; border-radius: 3px;"></div>
                </div>
                <div style="margin-top: 0.75rem; font-size: 0.8rem; color: #666;">
                    <span style="font-weight: 600; color: #ff6b6b;">85%</span> Engagement Goal
                </div>
            </div>
        </div>

        <!-- Secondary Stats -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: #f9f9f9; border-radius: 12px; padding: 1.5rem; border-left: 4px solid #1B5E20;">
                <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Board Certified</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #1B5E20;">${boardCertCount}</div>
                <div style="font-size: 0.8rem; color: #999; margin-top: 0.5rem;">Specialty Certification</div>
            </div>

            <div style="background: #f9f9f9; border-radius: 12px; padding: 1.5rem; border-left: 4px solid #4CAF50;">
                <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Postgraduate Training</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #4CAF50;">${postgraduateCount}</div>
                <div style="font-size: 0.8rem; color: #999; margin-top: 0.5rem;">Residency/Fellowship</div>
            </div>

            <div style="background: #f9f9f9; border-radius: 12px; padding: 1.5rem; border-left: 4px solid #2196F3;">
                <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Engagement Rate</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #2196F3;">${engagementRate}%</div>
                <div style="font-size: 0.8rem; color: #999; margin-top: 0.5rem;">Active Participation</div>
            </div>
        </div>

        <!-- Program Distribution Section -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Program Distribution</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <div style="padding: 1.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; text-align: center; color: white;">
                    <div style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 0.5rem; text-transform: uppercase; font-weight: 600;">PharmD Graduates</div>
                    <div style="font-size: 2.8rem; font-weight: 700; margin-bottom: 0.5rem;">${pharmacdCount}</div>
                    <div style="font-size: 0.8rem; opacity: 0.85;">${Math.round((pharmacdCount / totalAlumni) * 100)}% of Total</div>
                </div>

                <div style="padding: 1.5rem; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 10px; text-align: center; color: white;">
                    <div style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 0.5rem; text-transform: uppercase; font-weight: 600;">BPharm Graduates</div>
                    <div style="font-size: 2.8rem; font-weight: 700; margin-bottom: 0.5rem;">${bpharmCount}</div>
                    <div style="font-size: 0.8rem; opacity: 0.85;">${Math.round((bpharmCount / totalAlumni) * 100)}% of Total</div>
                </div>
            </div>
        </div>

        <!-- Engagement Activities -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); margin-top: 1.5rem;">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Engagement Activities</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1.5rem;">
                <div style="text-align: center; padding: 1.5rem; background: #f5f5f5; border-radius: 10px;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎤</div>
                    <div style="font-size: 2rem; font-weight: 700; color: #1B5E20; margin-bottom: 0.3rem;">${db.engagement.guest_lectures}</div>
                    <div style="font-size: 0.85rem; color: #666;">Guest Lectures</div>
                </div>

                <div style="text-align: center; padding: 1.5rem; background: #f5f5f5; border-radius: 10px;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">📅</div>
                    <div style="font-size: 2rem; font-weight: 700; color: #2196F3; margin-bottom: 0.3rem;">${db.engagement.career_days}</div>
                    <div style="font-size: 0.85rem; color: #666;">Career Days</div>
                </div>

                <div style="text-align: center; padding: 1.5rem; background: #f5f5f5; border-radius: 10px;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎓</div>
                    <div style="font-size: 2rem; font-weight: 700; color: #ff6b6b; margin-bottom: 0.3rem;">${db.engagement.workshops}</div>
                    <div style="font-size: 0.85rem; color: #666;">Workshops</div>
                </div>

                <div style="text-align: center; padding: 1.5rem; background: #f5f5f5; border-radius: 10px;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">💬</div>
                    <div style="font-size: 2rem; font-weight: 700; color: #FFA500; margin-bottom: 0.3rem;">${db.engagement.panels}</div>
                    <div style="font-size: 0.85rem; color: #666;">Panel Discussions</div>
                </div>
            </div>
        </div>
    `;
};

App.prototype.renderAlumniDirectory = function() {
    this.title.textContent = '\ud83d\dc64 Alumni Directory';
    const db = ALUMNI_DATABASE;
    const alumni = db.alumni;

    const searchTerm = (document.getElementById('alumniSearch')?.value || '').toLowerCase();
    const programFilter = document.getElementById('programFilter')?.value || '';
    const mentorFilter = document.getElementById('mentorFilter')?.value || '';

    const filteredAlumni = alumni.filter(a => {
        const matchesSearch = !searchTerm || a.name.toLowerCase().includes(searchTerm) || a.jobTitle.toLowerCase().includes(searchTerm);
        const matchesProgram = !programFilter || a.program.toLowerCase() === programFilter.toLowerCase();
        const matchesMentor = mentorFilter === 'mentor' ? a.mentorWilling : mentorFilter === 'preceptor' ? a.preceptorWilling : true;
        return matchesSearch && matchesProgram && matchesMentor;
    });

    let alumniTable = '<table style="width: 100%; border-collapse: collapse;">';
    alumniTable += '<thead><tr style="background: #f5f5f5; border-bottom: 2px solid #ddd;">';
    alumniTable += '<th style="padding: 0.75rem; text-align: left; border-right: 1px solid #ddd;">Name</th>';
    alumniTable += '<th style="padding: 0.75rem; text-align: left; border-right: 1px solid #ddd;">Program</th>';
    alumniTable += '<th style="padding: 0.75rem; text-align: left; border-right: 1px solid #ddd;">Graduation</th>';
    alumniTable += '<th style="padding: 0.75rem; text-align: left; border-right: 1px solid #ddd;">Status</th>';
    alumniTable += '<th style="padding: 0.75rem; text-align: left; border-right: 1px solid #ddd;">Current Role</th>';
    alumniTable += '<th style="padding: 0.75rem; text-align: left; border-right: 1px solid #ddd;">Employer</th>';
    alumniTable += '<th style="padding: 0.75rem; text-align: left; border-right: 1px solid #ddd;">Board Cert</th>';
    alumniTable += '<th style="padding: 0.75rem; text-align: left; border-right: 1px solid #ddd;">Mentor</th>';
    alumniTable += '<th style="padding: 0.75rem; text-align: left;">Preceptor</th>';
    alumniTable += '</tr></thead><tbody>';

    filteredAlumni.forEach((a, idx) => {
        const bgColor = idx % 2 === 0 ? 'white' : '#fafafa';
        alumniTable += `<tr data-alumni-row="${a.id}" style="background: ${bgColor}; border-bottom: 1px solid #ddd;">`;
        alumniTable += `<td data-field="name" contenteditable="${window.alumniEditMode ? 'true' : 'false'}" style="padding: 0.75rem; border-right: 1px solid #ddd; font-weight:600;">${a.name}</td>`;
        alumniTable += `<td data-field="program" contenteditable="${window.alumniEditMode ? 'true' : 'false'}" style="padding: 0.75rem; border-right: 1px solid #ddd;"><span style="background: #e3f2fd; padding: 0.25rem 0.5rem; border-radius: 3px;">${a.program}</span></td>`;
        alumniTable += `<td data-field="graduationYear" contenteditable="${window.alumniEditMode ? 'true' : 'false'}" style="padding: 0.75rem; border-right: 1px solid #ddd;">${a.graduationYear}</td>`;
        const statusLabel = window.alumniEditMode ? a.status : `<span style="background: ${a.status === 'employed' ? '#E8F5E9' : '#E3F2FD'}; color: ${a.status === 'employed' ? '#2E7D32' : '#1565C0'}; padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.85rem; font-weight: 600;">${a.status === 'employed' ? '💼 Employed' : '📚 Postgrad'}</span>`;
        alumniTable += `<td data-field="status" contenteditable="${window.alumniEditMode ? 'true' : 'false'}" style="padding: 0.75rem; border-right: 1px solid #ddd;">${statusLabel}</td>`;
        alumniTable += `<td data-field="jobTitle" contenteditable="${window.alumniEditMode ? 'true' : 'false'}" style="padding: 0.75rem; border-right: 1px solid #ddd;">${a.jobTitle}</td>`;
        alumniTable += `<td data-field="currentEmployer" contenteditable="${window.alumniEditMode ? 'true' : 'false'}" style="padding: 0.75rem; border-right: 1px solid #ddd;"><small>${a.currentEmployer}</small></td>`;
        const boardCertLabel = window.alumniEditMode ? (a.boardCert ? 'true' : 'false') : (a.boardCert ? '✅' : '❌');
        alumniTable += `<td data-field="boardCert" contenteditable="${window.alumniEditMode ? 'true' : 'false'}" style="padding: 0.75rem; border-right: 1px solid #ddd; text-align: center;">${boardCertLabel}</td>`;
        const mentorLabel = window.alumniEditMode ? (a.mentorWilling ? 'true' : 'false') : (a.mentorWilling ? '✅' : '❌');
        alumniTable += `<td data-field="mentorWilling" contenteditable="${window.alumniEditMode ? 'true' : 'false'}" style="padding: 0.75rem; border-right: 1px solid #ddd; text-align: center;">${mentorLabel}</td>`;
        const preceptorLabel = window.alumniEditMode ? (a.preceptorWilling ? 'true' : 'false') : (a.preceptorWilling ? '✅' : '❌');
        alumniTable += `<td data-field="preceptorWilling" contenteditable="${window.alumniEditMode ? 'true' : 'false'}" style="padding: 0.75rem; text-align: center;">${preceptorLabel}</td>`;
        alumniTable += '</tr>';
    });

    alumniTable += '</tbody></table>';

    const escapedSearch = searchTerm.replace(/"/g, '&quot;');

    this.root.innerHTML = `
        <div style="margin-bottom: 1.5rem; display:flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;">
            <div style="display: grid; grid-template-columns: repeat(3, minmax(200px, 1fr)); gap: 0.75rem; flex: 1 1 600px; min-width: 300px;">
                <input type="text" id="alumniSearch" placeholder="Search by name..." value="${escapedSearch}" onkeyup="window.filterAlumniTable()" style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px;">
                <select id="programFilter" onchange="window.filterAlumniTable()" style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px;">
                    <option value="" ${programFilter === '' ? 'selected' : ''}>All Programs</option>
                    <option value="PharmD" ${programFilter === 'PharmD' ? 'selected' : ''}>PharmD</option>
                    <option value="BPharm" ${programFilter === 'BPharm' ? 'selected' : ''}>BPharm</option>
                    <option value="Technician" ${programFilter === 'Technician' ? 'selected' : ''}>Technician</option>
                </select>
                <select id="mentorFilter" onchange="window.filterAlumniTable()" style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px;">
                    <option value="" ${mentorFilter === '' ? 'selected' : ''}>All Mentor Status</option>
                    <option value="mentor" ${mentorFilter === 'mentor' ? 'selected' : ''}>Willing Mentors</option>
                    <option value="preceptor" ${mentorFilter === 'preceptor' ? 'selected' : ''}>Willing Preceptors</option>
                </select>
            </div>
            <div style="display:flex; gap:0.5rem; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="window.addAlumniRow()" title="Add a new alumni entry">➕ Add Alumni</button>
                <button class="btn btn-outline" onclick="window.toggleAlumniEditMode()">${window.alumniEditMode ? 'Exit Edit Mode' : 'Edit Inline'}</button>
                <button class="btn btn-primary" onclick="window.saveAlumniEdits()" ${window.alumniEditMode ? '' : 'disabled'}>Save Changes</button>
                <button class="btn btn-outline" onclick="window.exportAlumniCSV()">Export CSV</button>
                <button class="btn btn-outline" onclick="document.getElementById('alumni-import-input').click()">Import CSV</button>
                <input id="alumni-import-input" type="file" accept=".csv" style="display:none" onchange="window.handleAlumniCSVUpload(event)">
            </div>
        </div>
        <div style="overflow-x: auto; background: white; border-radius: 8px; padding: 1rem;">
            ${alumniTable}
        </div>
        <div style="margin-top: 1.5rem; padding: 1rem; background: #e8f5e9; border-radius: 6px;">
            <strong>📊 Directory Statistics:</strong> ${filteredAlumni.length} of ${alumni.length} shown | ${alumni.filter(a => a.mentorWilling).length} mentors | ${alumni.filter(a => a.preceptorWilling).length} preceptors
        </div>
    `;
};

App.prototype.renderAlumniOutcomes = function() {
    const tabTitle = '📊 Alumni Outcomes Tracking';
    this.title.textContent = this.getAlumniTabTitle('alumni-outcomes', tabTitle);
    const db = ALUMNI_DATABASE;
    const outcomes = db.employment_outcomes;

    const defaultEmploymentRate12m = outcomes.employment_rate_12m || 94;
    const defaultEmploymentRate6m = outcomes.employment_rate_6m || 89;
    const defaultTotalEmployed = outcomes.total_employed || 345;
    const defaultPostgraduateCount = db.postgraduate.length + 123;

    // Get custom values from localStorage or use defaults
    const employmentRate12m = this.getMetricValue('alumni-outcomes', 'employment_12m', defaultEmploymentRate12m);
    const employmentRate6m = this.getMetricValue('alumni-outcomes', 'employment_6m', defaultEmploymentRate6m);
    const totalEmployed = this.getMetricValue('alumni-outcomes', 'total_employed', defaultTotalEmployed);
    const postgraduateCount = this.getMetricValue('alumni-outcomes', 'postgraduate_count', defaultPostgraduateCount);
    const unemployedRate = 100 - employmentRate12m;

    const editButton = `
        <div style="margin-bottom: 1.5rem; display: flex; justify-content: flex-end;">
            <button onclick="app.toggleAlumniEditMode('alumni-outcomes')" style="background: ${this.alumniEditMode === 'alumni-outcomes' ? '#FF9800' : '#1B5E20'}; color: white; padding: 0.6rem 1.2rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                ${this.alumniEditMode === 'alumni-outcomes' ? '✓ Editing' : '✏️ Edit Tab'}
            </button>
        </div>
    `;

    const editPanel = this.alumniEditMode === 'alumni-outcomes' ? this.renderAlumniEditPanel('alumni-outcomes', tabTitle) : '';

    // Prepare editable metric displays with proper escaping
    const metric12m = `<span class="editable-metric" data-tab="alumni-outcomes" data-key="employment_12m" data-value="${employmentRate12m}%" style="cursor: pointer; padding: 0.25rem 0.5rem; border-radius: 4px; transition: all 0.2s; display: inline-block;" onmouseover="this.style.backgroundColor='#e8f5e9'; this.style.boxShadow='0 0 0 2px #1B5E20';" onmouseout="this.style.backgroundColor='transparent'; this.style.boxShadow='none';" onclick="app.editMetricInline('alumni-outcomes', 'employment_12m', '${employmentRate12m}%')">${employmentRate12m}%</span>`;
    
    const metric6m = `<span class="editable-metric" data-tab="alumni-outcomes" data-key="employment_6m" data-value="${employmentRate6m}%" style="cursor: pointer; padding: 0.25rem 0.5rem; border-radius: 4px; transition: all 0.2s; display: inline-block;" onmouseover="this.style.backgroundColor='#e3f2fd'; this.style.boxShadow='0 0 0 2px #2196F3';" onmouseout="this.style.backgroundColor='transparent'; this.style.boxShadow='none';" onclick="app.editMetricInline('alumni-outcomes', 'employment_6m', '${employmentRate6m}%')">${employmentRate6m}%</span>`;

    this.root.innerHTML = editButton + editPanel + `
        <!-- Top 4 Key Metrics -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <!-- 12-Month Employment -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">💼</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 0.5rem;">12-Month Employment</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #1B5E20;">${metric12m}</div>
                </div>
                <div style="background: #e8f5e9; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #1B5E20; height: 100%; width: ${employmentRate12m}%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">
                    <strong>${totalEmployed}</strong> alumni employed
                </div>
            </div>

            <!-- 6-Month Employment -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">📈</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 0.5rem;">6-Month Employment</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #2196F3;">${metric6m}</div>
                </div>
                <div style="background: #e3f2fd; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #2196F3; height: 100%; width: ${employmentRate6m}%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">
                    <strong>${Math.round(employmentRate6m / 100 * totalEmployed)}</strong> alumni employed at 6m
                </div>
            </div>

            <!-- Postgraduate Training -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">🎓</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 0.5rem;">Postgraduate Training</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #FF9800;">${postgraduateCount}</div>
                </div>
                <div style="background: #fff3e0; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #FF9800; height: 100%; width: 68%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">
                    Residency/Fellowship Programs
                </div>
            </div>

            <!-- Outcome Categories -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">📋</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 0.5rem;">Outcome Categories</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #9C27B0;">${outcomes.outcomes.length}</div>
                </div>
                <div style="background: #f3e5f5; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #9C27B0; height: 100%; width: 100%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">
                    Tracked outcome types
                </div>
            </div>
        </div>

        <!-- Employment Outcomes Breakdown -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); margin-bottom: 2rem;">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Employment Outcomes Breakdown</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                ${outcomes.outcomes.map(o => {
                    const colors = ['#1B5E20', '#2196F3', '#FF9800', '#9C27B0', '#E91E63', '#00BCD4'];
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    return `
                        <div style="padding: 1.5rem; background: linear-gradient(135deg, ${randomColor}22 0%, ${randomColor}11 100%); border-left: 4px solid ${randomColor}; border-radius: 10px;">
                            <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">
                                ${o.outcome}
                            </div>
                            <div style="font-size: 2.2rem; font-weight: 700; color: ${randomColor}; margin-bottom: 0.5rem;">
                                ${o.count}
                            </div>
                            <div style="background: ${randomColor}33; height: 4px; border-radius: 2px; overflow: hidden;">
                                <div style="background: ${randomColor}; height: 100%; width: ${o.percentage}%; border-radius: 2px;"></div>
                            </div>
                            <div style="margin-top: 0.75rem; font-size: 0.8rem; color: #666; font-weight: 600;">
                                ${o.percentage}% of outcomes
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <!-- Employment by Sector -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Employment by Sector</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                ${Object.entries(outcomes.by_sector).map(([sector, count], idx) => {
                    const sectorColors = {
                        'Hospital': '#E74C3C',
                        'Pharmacy': '#3498DB',
                        'Industry': '#2ECC71',
                        'Government': '#F39C12',
                        'Academic': '#9B59B6',
                        'Research': '#1ABC9C',
                        'Consulting': '#34495E'
                    };
                    const color = sectorColors[sector] || '#95A5A6';
                    const totalCount = Object.values(outcomes.by_sector).reduce((a, b) => a + b, 0);
                    const percentage = Math.round((count / totalCount) * 100);
                    return `
                        <div style="padding: 1.5rem; background: ${color}11; border-radius: 10px; border-left: 4px solid ${color};">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                <strong style="color: ${color}; font-size: 1.1rem;">${sector}</strong>
                                <span style="background: ${color}; color: white; padding: 0.4rem 0.8rem; border-radius: 6px; font-weight: 700; font-size: 1.2rem;">${count}</span>
                            </div>
                            <div style="background: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden; margin-bottom: 0.75rem;">
                                <div style="background: ${color}; height: 100%; width: ${percentage}%; border-radius: 4px; transition: width 0.3s;"></div>
                            </div>
                            <div style="font-size: 0.85rem; color: #666;">
                                <strong>${percentage}%</strong> of employed alumni
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    // Attach click handlers to editable metric spans (backup to inline onclick)
    setTimeout(() => {
        const metrics = this.root.querySelectorAll('.editable-metric');
        console.log('Found editable metrics:', metrics.length);
        metrics.forEach(span => {
            span.addEventListener('click', function() {
                const tab = this.getAttribute('data-tab');
                const key = this.getAttribute('data-key');
                const value = this.textContent.trim();
                console.log('Clicked metric:', tab, key, value);
                app.editMetricInline(tab, key, value);
            });
        });
    }, 200);
};

App.prototype.renderPostgraduateTracking = function() {
    const tabTitle = '🎓 Postgraduate & Certification';
    this.title.textContent = this.getAlumniTabTitle('postgraduate-tracking', tabTitle);
    const db = ALUMNI_DATABASE;
    const pgData = db.postgraduate;

    const defaultResidencies = pgData.filter(p => p.type === 'Residency').length;
    const defaultBoardCerts = pgData.filter(p => p.type === 'Board Certification').length;
    const defaultFellowships = pgData.filter(p => p.type === 'Fellowship').length;
    const defaultTotal = pgData.length;

    const residencies = this.createEditableMetric('postgraduate-tracking', 'residencies', defaultResidencies, '#e8f5e9', '#1B5E20');
    const boardCerts = this.createEditableMetric('postgraduate-tracking', 'board_certs', defaultBoardCerts, '#e3f2fd', '#2196F3');
    const fellowships = this.createEditableMetric('postgraduate-tracking', 'fellowships', defaultFellowships, '#fff3e0', '#FF9800');
    const totalPG = this.createEditableMetric('postgraduate-tracking', 'total', defaultTotal, '#f3e5f5', '#9C27B0');

    const editButton = `
        <div style="margin-bottom: 1.5rem; display: flex; justify-content: flex-end;">
            <button onclick="app.toggleAlumniEditMode('postgraduate-tracking')" style="background: ${this.alumniEditMode === 'postgraduate-tracking' ? '#FF9800' : '#1B5E20'}; color: white; padding: 0.6rem 1.2rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                ${this.alumniEditMode === 'postgraduate-tracking' ? '✓ Editing' : '✏️ Edit Tab'}
            </button>
        </div>
    `;

    const editPanel = this.alumniEditMode === 'postgraduate-tracking' ? this.renderAlumniEditPanel('postgraduate-tracking', tabTitle) : '';

    this.root.innerHTML = editButton + editPanel + `
        <!-- Top 4 Key Metrics -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">🩺</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Residencies</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #1B5E20;">${residencies}</div>
                </div>
                <div style="background: #e8f5e9; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #1B5E20; height: 100%; width: 75%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Active Residency Programs</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">✅</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Board Certifications</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #2196F3;">${boardCerts}</div>
                </div>
                <div style="background: #e3f2fd; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #2196F3; height: 100%; width: 82%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Certified Specialists</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">🎓</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Fellowships</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #FF9800;">${fellowships}</div>
                </div>
                <div style="background: #fff3e0; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #FF9800; height: 100%; width: 65%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Advanced Fellowship Programs</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">📚</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Total Programs</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #9C27B0;">${totalPG}</div>
                </div>
                <div style="background: #f3e5f5; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #9C27B0; height: 100%; width: 88%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">All Training Programs</div>
            </div>
        </div>

        <!-- Postgraduate Programs Details -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Postgraduate Programs</h3>
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #f5f5f5; border-bottom: 2px solid #ddd;">
                            <th style="padding: 1rem; text-align: left; color: #333; font-weight: 600;">Name</th>
                            <th style="padding: 1rem; text-align: left; color: #333; font-weight: 600;">Type</th>
                            <th style="padding: 1rem; text-align: left; color: #333; font-weight: 600;">Specialty</th>
                            <th style="padding: 1rem; text-align: left; color: #333; font-weight: 600;">Institution</th>
                            <th style="padding: 1rem; text-align: center; color: #333; font-weight: 600;">Year</th>
                            <th style="padding: 1rem; text-align: center; color: #333; font-weight: 600;">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${pgData.map((pg, idx) => {
                            const bgColor = idx % 2 === 0 ? 'white' : '#f9f9f9';
                            const statusBg = pg.status === 'Certified' ? '#c8e6c9' : (pg.status === 'In Progress' ? '#fff9c4' : '#ffcccc');
                            const statusColor = pg.status === 'Certified' ? '#2e7d32' : (pg.status === 'In Progress' ? '#f57f17' : '#c62828');
                            return `
                                <tr style="background: ${bgColor}; border-bottom: 1px solid #eee;">
                                    <td style="padding: 1rem; font-weight: 600;">${pg.name}</td>
                                    <td style="padding: 1rem;"><span style="background: #e3f2fd; color: #1976d2; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.85rem; font-weight: 500;">${pg.type}</span></td>
                                    <td style="padding: 1rem;">${pg.specialty}</td>
                                    <td style="padding: 1rem; font-size: 0.9rem;"><small>${pg.institution}</small></td>
                                    <td style="padding: 1rem; text-align: center; font-weight: 600;">${pg.year}</td>
                                    <td style="padding: 1rem; text-align: center;"><span style="background: ${statusBg}; color: ${statusColor}; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600;">${pg.status}</span></td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
};

App.prototype.renderAlumniEngagement = function() {
    const tabTitle = '🤝 Engagement Tracking';
    this.title.textContent = this.getAlumniTabTitle('alumni-engagement', tabTitle);
    const db = ALUMNI_DATABASE;
    const eng = db.engagement;

    const defaultTotalEngagements = eng.guest_lectures + eng.career_days + eng.workshops + eng.panels + eng.conferences;
    const defaultParticipationRate = 78;

    const guestLectures = this.createEditableMetric('alumni-engagement', 'guest_lectures', eng.guest_lectures, '#e8f5e9', '#1B5E20');
    const careerDays = this.createEditableMetric('alumni-engagement', 'career_days', eng.career_days, '#e3f2fd', '#2196F3');
    const workshops = this.createEditableMetric('alumni-engagement', 'workshops', eng.workshops, '#fff3e0', '#FF9800');
    const panels = this.createEditableMetric('alumni-engagement', 'panels', eng.panels, '#f3e5f5', '#9C27B0');
    const conferences = this.createEditableMetric('alumni-engagement', 'conferences', eng.conferences, '#fce4ec', '#E91E63');
    const totalEngagements = this.createEditableMetric('alumni-engagement', 'total_engagements', defaultTotalEngagements, '#e8f5e9', '#1B5E20');
    const activeAlumni = this.createEditableMetric('alumni-engagement', 'active_alumni', eng.active_alumni, '#e3f2fd', '#2196F3');
    const participationRate = this.createEditableMetric('alumni-engagement', 'participation_rate', defaultParticipationRate + '%', '#fff3e0', '#FF9800');

    const editButton = `
        <div style="margin-bottom: 1.5rem; display: flex; justify-content: flex-end;">
            <button onclick="app.toggleAlumniEditMode('alumni-engagement')" style="background: ${this.alumniEditMode === 'alumni-engagement' ? '#FF9800' : '#1B5E20'}; color: white; padding: 0.6rem 1.2rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                ${this.alumniEditMode === 'alumni-engagement' ? '✓ Editing' : '✏️ Edit Tab'}
            </button>
        </div>
    `;

    const editPanel = this.alumniEditMode === 'alumni-engagement' ? this.renderAlumniEditPanel('alumni-engagement', tabTitle) : '';

    this.root.innerHTML = editButton + editPanel + `
        <!-- Top 5 Engagement Activities -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🎤</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #1B5E20; margin-bottom: 0.5rem;">${guestLectures}</div>
                <div style="font-size: 0.9rem; color: #666; font-weight: 600;">Guest Lectures</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📅</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #2196F3; margin-bottom: 0.5rem;">${careerDays}</div>
                <div style="font-size: 0.9rem; color: #666; font-weight: 600;">Career Days</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔧</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #FF9800; margin-bottom: 0.5rem;">${workshops}</div>
                <div style="font-size: 0.9rem; color: #666; font-weight: 600;">Workshops</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🎤</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #9C27B0; margin-bottom: 0.5rem;">${panels}</div>
                <div style="font-size: 0.9rem; color: #666; font-weight: 600;">Panel Discussions</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📚</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #E91E63; margin-bottom: 0.5rem;">${conferences}</div>
                <div style="font-size: 0.9rem; color: #666; font-weight: 600;">Conferences</div>
            </div>
        </div>

        <!-- Summary Stats -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">📊</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Total Engagements</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #1B5E20;">${totalEngagements}</div>
                </div>
                <div style="background: #e8f5e9; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #1B5E20; height: 100%; width: 92%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Activities This Year</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">👥</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Active Alumni</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #2196F3;">${activeAlumni}</div>
                </div>
                <div style="background: #e3f2fd; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #2196F3; height: 100%; width: 78%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Contributing to Activities</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">🎯</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Participation Rate</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #FF9800;">${participationRate}</div>
                </div>
                <div style="background: #fff3e0; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #FF9800; height: 100%; width: ${participationRate}%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Target: 85%</div>
            </div>
        </div>
    `;
};

App.prototype.renderMentorshipProgram = function() {
    const tabTitle = '🧠 Mentorship Program';
    this.title.textContent = this.getAlumniTabTitle('mentorship-program', tabTitle);
    const db = ALUMNI_DATABASE;
    const ment = db.mentorship;

    this.root.innerHTML = `
        <!-- Top 4 Key Metrics -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">👨‍🏫</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Alumni Mentors</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #1B5E20;">${ment.total_mentors}</div>
                </div>
                <div style="background: #e8f5e9; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #1B5E20; height: 100%; width: 88%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Actively Mentoring</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">👨‍🎓</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Student Mentees</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #2196F3;">${ment.total_mentees}</div>
                </div>
                <div style="background: #e3f2fd; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #2196F3; height: 100%; width: 92%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">In Mentorship Programs</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">⭐</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Average Rating</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #FF9800;">${ment.avg_rating.toFixed(1)}</div>
                    <div style="font-size: 1.2rem; color: #FFB300; letter-spacing: 2px;">★★★★★</div>
                </div>
                <div style="background: #fff3e0; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #FF9800; height: 100%; width: 92%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Out of 5 Stars</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">🤝</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Active Pairs</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #9C27B0;">${ment.active_pairs}</div>
                </div>
                <div style="background: #f3e5f5; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #9C27B0; height: 100%; width: 85%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Active Mentorships</div>
            </div>
        </div>

        <!-- Program Details -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <!-- Mentor Specialties -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Mentor Specialties</h3>
                <div style="display: grid; gap: 0.75rem;">
                    ${Object.entries(ment.mentor_specialties).map(([spec, count]) => {
                        const colors = ['#1B5E20', '#2196F3', '#FF9800', '#9C27B0', '#E91E63', '#00BCD4'];
                        const randomColor = colors[Math.floor(Math.random() * colors.length)];
                        return `
                            <div style="padding: 1rem; background: linear-gradient(135deg, ${randomColor}22 0%, ${randomColor}11 100%); border-left: 4px solid ${randomColor}; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                                <strong style="color: #333;">${spec}</strong>
                                <span style="background: ${randomColor}; color: white; padding: 0.4rem 0.8rem; border-radius: 6px; font-weight: 700; font-size: 0.95rem;">${count}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- Program Metrics -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Program Metrics</h3>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="padding: 1.5rem; background: linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%); border-left: 4px solid #1B5E20; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <strong style="color: #333;">Matching Success</strong>
                            <span style="font-weight: 700; color: #1B5E20; font-size: 1.3rem;">92%</span>
                        </div>
                        <div style="background: #ddd; height: 4px; border-radius: 2px; overflow: hidden; margin-top: 0.75rem;">
                            <div style="background: #1B5E20; height: 100%; width: 92%; border-radius: 2px;"></div>
                        </div>
                    </div>

                    <div style="padding: 1.5rem; background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%); border-left: 4px solid #2196F3; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <strong style="color: #333;">Avg Duration</strong>
                            <span style="font-weight: 700; color: #2196F3; font-size: 1.3rem;">18 mo.</span>
                        </div>
                        <div style="font-size: 0.85rem; color: #666; margin-top: 0.5rem;">Average program length</div>
                    </div>

                    <div style="padding: 1.5rem; background: linear-gradient(135deg, #fff3e0 0%, #f1f8e9 100%); border-left: 4px solid #FF9800; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <strong style="color: #333;">Completion Rate</strong>
                            <span style="font-weight: 700; color: #FF9800; font-size: 1.3rem;">88%</span>
                        </div>
                        <div style="background: #ddd; height: 4px; border-radius: 2px; overflow: hidden; margin-top: 0.75rem;">
                            <div style="background: #FF9800; height: 100%; width: 88%; border-radius: 2px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

App.prototype.renderPreceptorPipeline = function() {
    const tabTitle = '🏥 Preceptor & Training Sites';
    this.title.textContent = this.getAlumniTabTitle('preceptor-pipeline', tabTitle);
    const db = ALUMNI_DATABASE;
    const precep = db.preceptorship;

    const editButton = `
        <div style="margin-bottom: 1.5rem; display: flex; justify-content: flex-end;">
            <button onclick="app.toggleAlumniEditMode('preceptor-pipeline')" style="background: ${this.alumniEditMode === 'preceptor-pipeline' ? '#FF9800' : '#1B5E20'}; color: white; padding: 0.6rem 1.2rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                ${this.alumniEditMode === 'preceptor-pipeline' ? '✓ Editing' : '✏️ Edit Tab'}
            </button>
        </div>
    `;

    const editPanel = this.alumniEditMode === 'preceptor-pipeline' ? this.renderAlumniEditPanel('preceptor-pipeline', tabTitle) : '';

    this.root.innerHTML = editButton + editPanel + `
        <!-- Top 4 Key Metrics -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">👨‍⚕️</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Total Preceptors</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #1B5E20;">${precep.total_preceptors}</div>
                </div>
                <div style="background: #e8f5e9; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #1B5E20; height: 100%; width: 88%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Registered Preceptors</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">✅</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Active Preceptors</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #2196F3;">${precep.active_preceptors}</div>
                </div>
                <div style="background: #e3f2fd; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #2196F3; height: 100%; width: 82%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Currently Teaching</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">🏛️</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Training Sites</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #FF9800;">${precep.training_sites}</div>
                </div>
                <div style="background: #fff3e0; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #FF9800; height: 100%; width: 75%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Active Training Locations</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">📊</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Utilization Rate</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #9C27B0;">${precep.utilization_rate}%</div>
                </div>
                <div style="background: #f3e5f5; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #9C27B0; height: 100%; width: ${precep.utilization_rate}%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Capacity Used</div>
            </div>
        </div>

        <!-- Detailed Information -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <!-- Capacity Management -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Capacity Management</h3>
                <div style="padding: 1.5rem; background: linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%); border-radius: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <strong style="color: #333;">Current Load</strong>
                        <span style="font-size: 1.3rem; font-weight: 700; color: #1B5E20;">${precep.current_load}/${precep.total_capacity}</span>
                    </div>
                    <div style="background: #e0e0e0; height: 10px; border-radius: 5px; overflow: hidden; margin-bottom: 1rem;">
                        <div style="background: linear-gradient(90deg, #1B5E20, #4caf50); height: 100%; width: ${precep.utilization_rate}%; border-radius: 5px;"></div>
                    </div>
                    <div style="text-align: right; font-size: 0.9rem; font-weight: 600; color: #1B5E20;">${precep.utilization_rate}% utilized</div>
                </div>

                <div style="padding: 1.5rem; background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); border-left: 4px solid #FF9800; border-radius: 10px; margin-top: 1.5rem;">
                    <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
                        <span style="font-size: 1.5rem;">⚠️</span>
                        <div>
                            <strong style="display: block; margin-bottom: 0.3rem;">Pending Approvals</strong>
                            <div style="font-size: 1.3rem; font-weight: 700; color: #FF9800;">${precep.pending_approval}</div>
                            <small style="color: #666;">Applications awaiting review</small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Training Sites by Type -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Training Sites by Type</h3>
                <div style="display: grid; gap: 0.75rem;">
                    ${Object.entries(precep.by_type).map(([type, count]) => {
                        const colors = ['#1B5E20', '#2196F3', '#FF9800', '#9C27B0', '#E91E63'];
                        const randomColor = colors[Math.floor(Math.random() * colors.length)];
                        const totalSites = Object.values(precep.by_type).reduce((a, b) => a + b, 0);
                        const percentage = Math.round((count / totalSites) * 100);
                        return `
                            <div style="padding: 1rem; background: linear-gradient(135deg, ${randomColor}22 0%, ${randomColor}11 100%); border-left: 4px solid ${randomColor}; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                    <strong style="color: #333;">${type}</strong>
                                    <span style="background: ${randomColor}; color: white; padding: 0.4rem 0.8rem; border-radius: 6px; font-weight: 700;">${count}</span>
                                </div>
                                <div style="background: #e0e0e0; height: 4px; border-radius: 2px; overflow: hidden;">
                                    <div style="background: ${randomColor}; height: 100%; width: ${percentage}%; border-radius: 2px;"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
};

App.prototype.renderAlumniEvents = function() {
    const tabTitle = '📅 Events & Communication';
    this.title.textContent = this.getAlumniTabTitle('alumni-events', tabTitle);
    const db = ALUMNI_DATABASE;
    const events = db.events;

    const defaultUpcomingCount = events.filter(e => e.status === 'Upcoming').length;
    const defaultCompletedCount = events.filter(e => e.status === 'Completed').length;
    const defaultRegistrations = events.reduce((sum, e) => sum + e.registered, 0);

    const upcomingCount = this.createEditableMetric('alumni-events', 'upcoming', defaultUpcomingCount, '#fff3e0', '#FF9800');
    const completedCount = this.createEditableMetric('alumni-events', 'completed', defaultCompletedCount, '#e8f5e9', '#1B5E20');
    const totalRegistrations = this.createEditableMetric('alumni-events', 'registrations', defaultRegistrations, '#e3f2fd', '#2196F3');

    const editButton = `
        <div style="margin-bottom: 1.5rem; display: flex; justify-content: flex-end;">
            <button onclick="app.toggleAlumniEditMode('alumni-events')" style="background: ${this.alumniEditMode === 'alumni-events' ? '#FF9800' : '#1B5E20'}; color: white; padding: 0.6rem 1.2rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                ${this.alumniEditMode === 'alumni-events' ? '✓ Editing' : '✏️ Edit Tab'}
            </button>
        </div>
    `;

    const editPanel = this.alumniEditMode === 'alumni-events' ? this.renderAlumniEditPanel('alumni-events', tabTitle) : '';

    this.root.innerHTML = editButton + editPanel + `
        <div style="margin-bottom: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="alert('Add new event - Coming soon!')">➕ Add Event</button>
            <button class="btn btn-outline" onclick="alert('Send communications - Coming soon!')">📧 Send Communication</button>
        </div>

        <!-- Event Stats -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📅</div>
                <div style="font-size: 2rem; font-weight: 700; color: #FF9800; margin-bottom: 0.3rem;">${upcomingCount}</div>
                <div style="font-size: 0.9rem; color: #666;">Upcoming Events</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">✅</div>
                <div style="font-size: 2rem; font-weight: 700; color: #1B5E20; margin-bottom: 0.3rem;">${completedCount}</div>
                <div style="font-size: 0.9rem; color: #666;">Completed Events</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">👥</div>
                <div style="font-size: 2rem; font-weight: 700; color: #2196F3; margin-bottom: 0.3rem;">${totalRegistrations}</div>
                <div style="font-size: 0.9rem; color: #666;">Total Registrations</div>
            </div>
        </div>

        <!-- Events List -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Upcoming & Past Events</h3>
            <div style="display: grid; gap: 1rem;">
                ${events.map(evt => {
                    const bgColor = evt.status === 'Upcoming' ? '#fff3e0' : '#e8f5e9';
                    const borderColor = evt.status === 'Upcoming' ? '#FF9800' : '#1B5E20';
                    const statusColor = evt.status === 'Upcoming' ? '#FF9800' : '#1B5E20';
                    const icon = evt.status === 'Upcoming' ? '📌' : '✓';
                    return `
                        <div style="padding: 1.5rem; background: ${bgColor}; border-left: 4px solid ${borderColor}; border-radius: 10px;">
                            <div style="display: flex; justify-content: space-between; align-items: start;">
                                <div style="flex: 1;">
                                    <strong style="font-size: 1.1rem; display: block; margin-bottom: 0.5rem;">${icon} ${evt.title}</strong>
                                    <small style="color: #666; display: block; margin-bottom: 0.3rem;">📍 ${evt.location}</small>
                                    <small style="color: #666;">📅 ${evt.date}</small>
                                </div>
                                <div style="text-align: right;">
                                    <span style="background: ${statusColor}; color: white; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600; display: inline-block; margin-bottom: 0.5rem;">${evt.type}</span><br>
                                    <small style="color: #666; font-weight: 600;">👥 ${evt.registered} registered</small>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
};

App.prototype.renderAlumniAchievements = function() {
    const tabTitle = '🏆 Achievements & Recognition';
    this.title.textContent = this.getAlumniTabTitle('alumni-achievements', tabTitle);
    const db = ALUMNI_DATABASE;
    const achievements = db.achievements;

    const defaultAwards = achievements.filter(a => a.type === 'Award').length + 34;
    const defaultPublications = achievements.filter(a => a.type === 'Publication').length + 151;
    const defaultLeadership = achievements.filter(a => a.type === 'Leadership').length + 44;
    const defaultMedia = achievements.filter(a => a.type === 'Media').length + 22;

    const awards = this.createEditableMetric('alumni-achievements', 'awards', defaultAwards, '#e8f5e9', '#1B5E20');
    const publications = this.createEditableMetric('alumni-achievements', 'publications', defaultPublications, '#e3f2fd', '#2196F3');
    const leadership = this.createEditableMetric('alumni-achievements', 'leadership', defaultLeadership, '#fff3e0', '#FF9800');
    const media = this.createEditableMetric('alumni-achievements', 'media', defaultMedia, '#f3e5f5', '#9C27B0');

    const editButton = `
        <div style="margin-bottom: 1.5rem; display: flex; justify-content: flex-end;">
            <button onclick="app.toggleAlumniEditMode('alumni-achievements')" style="background: ${this.alumniEditMode === 'alumni-achievements' ? '#FF9800' : '#1B5E20'}; color: white; padding: 0.6rem 1.2rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                ${this.alumniEditMode === 'alumni-achievements' ? '✓ Editing' : '✏️ Edit Tab'}
            </button>
        </div>
    `;

    const editPanel = this.alumniEditMode === 'alumni-achievements' ? this.renderAlumniEditPanel('alumni-achievements', tabTitle) : '';

    this.root.innerHTML = editButton + editPanel + `
        <!-- Top Achievement Stats -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🏆</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #1B5E20; margin-bottom: 0.3rem;">${awards}</div>
                <div style="font-size: 0.9rem; color: #666;">Awards & Recognition</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📚</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #2196F3; margin-bottom: 0.3rem;">${publications}</div>
                <div style="font-size: 0.9rem; color: #666;">Publications</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">👔</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #FF9800; margin-bottom: 0.3rem;">${leadership}</div>
                <div style="font-size: 0.9rem; color: #666;">Leadership Roles</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📰</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #9C27B0; margin-bottom: 0.3rem;">${media}</div>
                <div style="font-size: 0.9rem; color: #666;">Media Features</div>
            </div>
        </div>

        <!-- Achievements Table -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Recent Achievements</h3>
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #f5f5f5; border-bottom: 2px solid #ddd;">
                            <th style="padding: 1rem; text-align: left; color: #333; font-weight: 600;">Alumni Name</th>
                            <th style="padding: 1rem; text-align: left; color: #333; font-weight: 600;">Achievement</th>
                            <th style="padding: 1rem; text-align: center; color: #333; font-weight: 600;">Type</th>
                            <th style="padding: 1rem; text-align: center; color: #333; font-weight: 600;">Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${achievements.map((ach, idx) => {
                            const bgColor = idx % 2 === 0 ? 'white' : '#f9f9f9';
                            const typeColors = {
                                'Award': '#c8e6c9',
                                'Publication': '#bbdefb',
                                'Leadership': '#fff9c4',
                                'Media': '#f8bbd0'
                            };
                            const typeColorBg = typeColors[ach.type] || '#e0e0e0';
                            return `
                                <tr style="background: ${bgColor}; border-bottom: 1px solid #eee;">
                                    <td style="padding: 1rem; font-weight: 600;">${ach.name}</td>
                                    <td style="padding: 1rem;">${ach.achievement}</td>
                                    <td style="padding: 1rem; text-align: center;"><span style="background: ${typeColorBg}; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600;">${ach.type}</span></td>
                                    <td style="padding: 1rem; text-align: center; font-weight: 600;">${ach.year}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
};

App.prototype.renderAlumniFeedback = function() {
    const tabTitle = '📣 Feedback & Surveys';
    this.title.textContent = this.getAlumniTabTitle('alumni-feedback', tabTitle);
    const db = ALUMNI_DATABASE;
    const feedback = db.feedback;

    const defaultAvgScore = (feedback.survey_results.reduce((sum, r) => sum + r.score, 0) / feedback.survey_results.length).toFixed(1);
    const defaultSatisfactionRate = 92;

    const satisfactionRate = this.createEditableMetric('alumni-feedback', 'satisfaction_rate', defaultSatisfactionRate + '%', '#e8f5e9', '#1B5E20');
    const avgScore = this.createEditableMetric('alumni-feedback', 'avg_score', defaultAvgScore, '#e3f2fd', '#2196F3');
    const responses = this.createEditableMetric('alumni-feedback', 'responses', feedback.responses, '#fff3e0', '#FF9800');

    const editButton = `
        <div style="margin-bottom: 1.5rem; display: flex; justify-content: flex-end;">
            <button onclick="app.toggleAlumniEditMode('alumni-feedback')" style="background: ${this.alumniEditMode === 'alumni-feedback' ? '#FF9800' : '#1B5E20'}; color: white; padding: 0.6rem 1.2rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                ${this.alumniEditMode === 'alumni-feedback' ? '✓ Editing' : '✏️ Edit Tab'}
            </button>
        </div>
    `;

    const editPanel = this.alumniEditMode === 'alumni-feedback' ? this.renderAlumniEditPanel('alumni-feedback', tabTitle) : '';

    this.root.innerHTML = editButton + editPanel + `
        <!-- Feedback Stats -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">📊</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Overall Satisfaction</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #1B5E20;">${satisfactionRate}</div>
                </div>
                <div style="background: #e8f5e9; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #1B5E20; height: 100%; width: 92%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Alumni Satisfaction Rating</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">⭐</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Average Score</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #2196F3;">${avgScore}</div>
                    <div style="font-size: 1rem; color: #FFB300; letter-spacing: 1px;">★★★★☆</div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Out of 5 Stars</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">📋</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Responses</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #FF9800;">${responses}</div>
                </div>
                <div style="background: #fff3e0; height: 6px; border-radius: 3px; overflow: hidden; margin-bottom: 1rem;">
                    <div style="background: #FF9800; height: 100%; width: 85%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Survey Responses Collected</div>
            </div>
        </div>

        <!-- Survey Results -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Survey Results</h3>
            <div style="display: grid; gap: 1rem;">
                ${feedback.survey_results.map(result => {
                    const scorePercentage = (result.score / 5) * 100;
                    const trendIsPositive = result.trend.includes('+');
                    return `
                        <div style="padding: 1.5rem; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #1B5E20;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                                <strong style="color: #333;">${result.metric}</strong>
                                <span style="font-size: 0.9rem; font-weight: 700; color: ${trendIsPositive ? '#1B5E20' : '#f44336'};">${result.trend}</span>
                            </div>
                            <div style="display: flex; gap: 1rem; align-items: center;">
                                <div style="flex: 1;">
                                    <div style="background: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden;">
                                        <div style="background: linear-gradient(90deg, #1B5E20, #4caf50); height: 100%; width: ${scorePercentage}%; border-radius: 4px;"></div>
                                    </div>
                                </div>
                                <div style="font-weight: 700; color: #1B5E20; min-width: 50px; text-align: right;">${result.score}/5</div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
};

App.prototype.renderAlumniDocuments = function() {
    const tabTitle = '📁 Documents & Records';
    this.title.textContent = this.getAlumniTabTitle('alumni-documents', tabTitle);
    const db = ALUMNI_DATABASE;
    const docs = db.documents;

    const defaultTotal = docs.consent_forms + docs.communication_history + docs.cv_submissions + docs.certificates + docs.participation_letters;
    
    const consentForms = this.createEditableMetric('alumni-documents', 'consent_forms', docs.consent_forms, '#e8f5e9', '#1B5E20');
    const commHistory = this.createEditableMetric('alumni-documents', 'comm_history', docs.communication_history, '#e3f2fd', '#1565C0');
    const cvSubmissions = this.createEditableMetric('alumni-documents', 'cv_submissions', docs.cv_submissions, '#f3e5f5', '#6A1B9A');
    const certificates = this.createEditableMetric('alumni-documents', 'certificates', docs.certificates, '#fff3e0', '#F57C00');
    const participationLetters = this.createEditableMetric('alumni-documents', 'participation', docs.participation_letters, '#ffebee', '#C62828');
    const totalDocs = this.createEditableMetric('alumni-documents', 'total', defaultTotal, '#e8f5e9', '#1B5E20');
    
    const documentTypes = [
        { name: 'Consent Forms', icon: '✅', count: consentForms, color: '#1B5E20' },
        { name: 'Communication History', icon: '💌', count: commHistory, color: '#1565C0' },
        { name: 'CV Submissions', icon: '📄', count: cvSubmissions, color: '#6A1B9A' },
        { name: 'Certificates', icon: '🎓', count: certificates, color: '#F57C00' },
        { name: 'Participation Letters', icon: '📧', count: participationLetters, color: '#C62828' }
    ];

    const editButton = `
        <div style="margin-bottom: 1.5rem; display: flex; justify-content: flex-end;">
            <button onclick="app.toggleAlumniEditMode('alumni-documents')" style="background: ${this.alumniEditMode === 'alumni-documents' ? '#FF9800' : '#1B5E20'}; color: white; padding: 0.6rem 1.2rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                ${this.alumniEditMode === 'alumni-documents' ? '✓ Editing' : '✏️ Edit Tab'}
            </button>
        </div>
    `;

    const editPanel = this.alumniEditMode === 'alumni-documents' ? this.renderAlumniEditPanel('alumni-documents', tabTitle) : '';

    this.root.innerHTML = editButton + editPanel + `
        <!-- Top Stats -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📁</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #1B5E20; margin-bottom: 0.3rem;">${totalDocs}</div>
                <div style="font-size: 0.9rem; color: #666;">Total Documents</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">✅</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #2196F3; margin-bottom: 0.3rem;">${docs.consent_forms}</div>
                <div style="font-size: 0.9rem; color: #666;">Consent Forms</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📄</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #FF9800; margin-bottom: 0.3rem;">${docs.cv_submissions}</div>
                <div style="font-size: 0.9rem; color: #666;">CV Submissions</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🎓</div>
                <div style="font-size: 2.2rem; font-weight: 700; color: #9C27B0; margin-bottom: 0.3rem;">${docs.certificates}</div>
                <div style="font-size: 0.9rem; color: #666;">Certificates</div>
            </div>
        </div>

        <!-- Document Types -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); margin-bottom: 2rem;">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Documents by Type</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
                ${documentTypes.map(doc => {
                    const percentage = Math.round((doc.count / totalDocs) * 100);
                    return `
                        <div style="padding: 1.5rem; background: linear-gradient(135deg, ${doc.color}22 0%, ${doc.color}11 100%); border-left: 4px solid ${doc.color}; border-radius: 10px;">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                                <div>
                                    <div style="font-size: 1.8rem; margin-bottom: 0.3rem;">${doc.icon}</div>
                                    <strong style="display: block; color: #333;">${doc.name}</strong>
                                </div>
                                <div style="font-size: 1.6rem; font-weight: 700; color: ${doc.color};">${doc.count}</div>
                            </div>
                            <div style="background: #e0e0e0; height: 4px; border-radius: 2px; overflow: hidden;">
                                <div style="background: ${doc.color}; height: 100%; width: ${percentage}%; border-radius: 2px;"></div>
                            </div>
                            <div style="margin-top: 0.5rem; font-size: 0.75rem; color: #666;">${percentage}% of total</div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <!-- Document Actions -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Document Management</h3>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button style="padding: 0.75rem 1.5rem; background: #1976d2; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">📤 Upload Document</button>
                <button style="padding: 0.75rem 1.5rem; background: #388e3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">📥 Download Records</button>
                <button style="padding: 0.75rem 1.5rem; background: #f57c00; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">🔒 Manage Access</button>
            </div>
        </div>
    `;
};

App.prototype.renderAlumniGovernance = function() {
    const tabTitle = '🔐 Data Governance & Privacy';
    this.title.textContent = this.getAlumniTabTitle('alumni-governance', tabTitle);
    const db = ALUMNI_DATABASE;

    const totalConsents = this.createEditableMetric('alumni-governance', 'total_consents', 245, '#e8f5e9', '#1B5E20');
    const verified = this.createEditableMetric('alumni-governance', 'verified', 234, '#e3f2fd', '#2196F3');
    const pending = this.createEditableMetric('alumni-governance', 'pending', 11, '#fff3e0', '#FF9800');
    const complianceRate = this.createEditableMetric('alumni-governance', 'compliance_rate', '95.5%', '#e8f5e9', '#1B5E20');

    const editButton = `
        <div style="margin-bottom: 1.5rem; display: flex; justify-content: flex-end;">
            <button onclick="app.toggleAlumniEditMode('alumni-governance')" style="background: ${this.alumniEditMode === 'alumni-governance' ? '#FF9800' : '#1B5E20'}; color: white; padding: 0.6rem 1.2rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                ${this.alumniEditMode === 'alumni-governance' ? '✓ Editing' : '✏️ Edit Tab'}
            </button>
        </div>
    `;

    const editPanel = this.alumniEditMode === 'alumni-governance' ? this.renderAlumniEditPanel('alumni-governance', tabTitle) : '';

    this.root.innerHTML = editButton + editPanel + `
        <!-- Compliance Stats -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">✅</div>
                <div style="font-size: 2rem; font-weight: 700; color: #1B5E20; margin-bottom: 0.3rem;">${totalConsents}</div>
                <div style="font-size: 0.9rem; color: #666;">Total Consents</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">☑️</div>
                <div style="font-size: 2rem; font-weight: 700; color: #2196F3; margin-bottom: 0.3rem;">${verified}</div>
                <div style="font-size: 0.9rem; color: #666;">Verified</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⏳</div>
                <div style="font-size: 2rem; font-weight: 700; color: #FF9800; margin-bottom: 0.3rem;">${pending}</div>
                <div style="font-size: 0.9rem; color: #666;">Pending Review</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📊</div>
                <div style="font-size: 2rem; font-weight: 700; color: #9C27B0; margin-bottom: 0.3rem;">95%</div>
                <div style="font-size: 0.9rem; color: #666;">Compliance Rate</div>
            </div>
        </div>

        <!-- Governance Details -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <!-- Privacy & Compliance -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Privacy & Compliance Status</h3>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="padding: 1.5rem; background: linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%); border-left: 4px solid #1B5E20; border-radius: 8px;">
                        <strong style="display: block; margin-bottom: 0.3rem; color: #1B5E20;">✅ GDPR Compliance</strong>
                        <small style="color: #666;">Fully compliant with data protection regulations</small>
                    </div>

                    <div style="padding: 1.5rem; background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%); border-left: 4px solid #2196F3; border-radius: 8px;">
                        <strong style="display: block; margin-bottom: 0.3rem; color: #2196F3;">👁️ Visibility Controls</strong>
                        <small style="color: #666;">Alumni can manage profile visibility preferences</small>
                    </div>

                    <div style="padding: 1.5rem; background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); border-left: 4px solid #FF9800; border-radius: 8px;">
                        <strong style="display: block; margin-bottom: 0.3rem; color: #FF9800;">📝 Data Retention</strong>
                        <small style="color: #666;">Compliant with FERPA and institutional policies</small>
                    </div>
                </div>
            </div>

            <!-- Consent Tracking -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Consent Tracking</h3>
                <div style="display: grid; gap: 0.75rem;">
                    <div style="padding: 1rem; background: #f9f9f9; border-radius: 8px; display: flex; justify-content: space-between;">
                        <strong style="color: #333;">Total Consents</strong>
                        <span style="font-weight: 700; color: #1B5E20;">245</span>
                    </div>

                    <div style="padding: 1rem; background: #f9f9f9; border-radius: 8px; display: flex; justify-content: space-between;">
                        <strong style="color: #333;">Verified (v2.1)</strong>
                        <span style="font-weight: 700; color: #4caf50;">234</span>
                    </div>

                    <div style="padding: 1rem; background: #f9f9f9; border-radius: 8px; display: flex; justify-content: space-between;">
                        <strong style="color: #333;">Pending Review</strong>
                        <span style="font-weight: 700; color: #ff9800;">11</span>
                    </div>

                    <div style="padding: 1rem; background: #f9f9f9; border-radius: 8px; display: flex; justify-content: space-between;">
                        <strong style="color: #333;">Compliance Score</strong>
                        <span style="font-weight: 700; color: #1976d2;">95.5%</span>
                    </div>
                </div>
            </div>
        </div>
    `;
};

App.prototype.renderAlumniEcosystem = function() {
    const tabTitle = '🔄 Alumni-Student Ecosystem';
    this.title.textContent = this.getAlumniTabTitle('alumni-ecosystem', tabTitle);
    const db = ALUMNI_DATABASE;

    // Calculate ecosystem metrics
    const mentorMetrics = db.mentorship || { total_mentors: 215, total_mentees: 0, active_pairs: 350 };
    const preceptorMetrics = db.preceptorship || { total_preceptors: 186, active_preceptors: 0, training_sites: 0 };
    const employmentMetrics = db.employment_outcomes || { total_employed: 365, employment_rate_12m: 94 };
    const defaultAdvisoryCount = 12;

    const totalMentors = this.createEditableMetric('alumni-ecosystem', 'mentors', mentorMetrics.total_mentors, '#e8f5e9', '#1B5E20');
    const totalPreceptors = this.createEditableMetric('alumni-ecosystem', 'preceptors', preceptorMetrics.total_preceptors, '#e3f2fd', '#2196F3');
    const employmentRate = this.createEditableMetric('alumni-ecosystem', 'employment_rate', employmentMetrics.employment_rate_12m + '%', '#fff3e0', '#FF9800');
    const advisoryCount = this.createEditableMetric('alumni-ecosystem', 'advisory', defaultAdvisoryCount, '#f3e5f5', '#9C27B0');

    const editButton = `
        <div style="margin-bottom: 1.5rem; display: flex; justify-content: flex-end;">
            <button onclick="app.toggleAlumniEditMode('alumni-ecosystem')" style="background: ${this.alumniEditMode === 'alumni-ecosystem' ? '#FF9800' : '#1B5E20'}; color: white; padding: 0.6rem 1.2rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 0.9rem;">
                ${this.alumniEditMode === 'alumni-ecosystem' ? '✓ Editing' : '✏️ Edit Tab'}
            </button>
        </div>
    `;

    const editPanel = this.alumniEditMode === 'alumni-ecosystem' ? this.renderAlumniEditPanel('alumni-ecosystem', tabTitle) : '';

    this.root.innerHTML = editButton + editPanel + `
        <!-- Main Ecosystem Metrics -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">👥</div>
                <div style="font-size: 2rem; font-weight: 700; color: #1B5E20; margin-bottom: 0.3rem;">${totalMentors}</div>
                <div style="font-size: 0.9rem; color: #666;">Mentors Active</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🏥</div>
                <div style="font-size: 2rem; font-weight: 700; color: #2196F3; margin-bottom: 0.3rem;">${totalPreceptors}</div>
                <div style="font-size: 0.9rem; color: #666;">Preceptors</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💼</div>
                <div style="font-size: 2rem; font-weight: 700; color: #FF9800; margin-bottom: 0.3rem;">${employmentRate}</div>
                <div style="font-size: 0.9rem; color: #666;">Employment Success</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🎯</div>
                <div style="font-size: 2rem; font-weight: 700; color: #9C27B0; margin-bottom: 0.3rem;">${advisoryCount}</div>
                <div style="font-size: 0.9rem; color: #666;">Advisory Board</div>
            </div>
        </div>

        <!-- Ecosystem Connections -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); margin-bottom: 2rem;">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Ecosystem Connections</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                <!-- Mentorship Flow -->
                <div style="padding: 1.5rem; background: linear-gradient(135deg, #1B5E2022 0%, #1B5E2011 100%); border-left: 4px solid #1B5E20; border-radius: 10px;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">👥</div>
                    <strong style="display: block; margin-bottom: 0.5rem; color: #1B5E20;">Mentorship Program</strong>
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 0.8rem;">Alumni guiding students through professional development</div>
                    <div style="display: grid; gap: 0.3rem; font-size: 0.85rem; color: #555;">
                        <div><strong>${mentorMetrics.active_pairs}</strong> active mentorship pairs</div>
                        <div>Focus: Career guidance, skill development</div>
                    </div>
                </div>

                <!-- Preceptorship Flow -->
                <div style="padding: 1.5rem; background: linear-gradient(135deg, #2196F322 0%, #2196F311 100%); border-left: 4px solid #2196F3; border-radius: 10px;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏥</div>
                    <strong style="display: block; margin-bottom: 0.5rem; color: #2196F3;">Preceptorship Program</strong>
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 0.8rem;">Alumni providing clinical training to pharmacy students</div>
                    <div style="display: grid; gap: 0.3rem; font-size: 0.85rem; color: #555;">
                        <div><strong>28</strong> training sites</div>
                        <div>Focus: Clinical competencies, practice</div>
                    </div>
                </div>

                <!-- Employment Partnership -->
                <div style="padding: 1.5rem; background: linear-gradient(135deg, #FF980022 0%, #FF980011 100%); border-left: 4px solid #FF9800; border-radius: 10px;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">💼</div>
                    <strong style="display: block; margin-bottom: 0.5rem; color: #FF9800;">Employment Pathway</strong>
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 0.8rem;">Alumni advancing to leadership positions, hiring graduates</div>
                    <div style="display: grid; gap: 0.3rem; font-size: 0.85rem; color: #555;">
                        <div><strong>${employmentMetrics.total_employed}</strong> alumni employed</div>
                        <div>Focus: Career advancement, networking</div>
                    </div>
                </div>

                <!-- Advisory & Governance -->
                <div style="padding: 1.5rem; background: linear-gradient(135deg, #9C27B022 0%, #9C27B011 100%); border-left: 4px solid #9C27B0; border-radius: 10px;">
                    <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎯</div>
                    <strong style="display: block; margin-bottom: 0.5rem; color: #9C27B0;">Advisory & Governance</strong>
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 0.8rem;">Alumni shaping program direction and institutional strategy</div>
                    <div style="display: grid; gap: 0.3rem; font-size: 0.85rem; color: #555;">
                        <div><strong>${advisoryCount}</strong> board members</div>
                        <div>Focus: Program excellence, vision</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Impact Summary -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Ecosystem Impact</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <div style="padding: 1.5rem; background: #f5f5f5; border-radius: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <strong style="color: #333;">Direct Mentorship Impact</strong>
                        <span style="font-size: 1.2rem;">👥</span>
                    </div>
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">
                        Students receiving career guidance from alumni mentors, resulting in better career transitions
                    </div>
                    <div style="background: #e8f5e9; height: 6px; border-radius: 3px; overflow: hidden;">
                        <div style="background: #1B5E20; height: 100%; width: 92%; border-radius: 3px;"></div>
                    </div>
                </div>

                <div style="padding: 1.5rem; background: #f5f5f5; border-radius: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <strong style="color: #333;">Clinical Training Impact</strong>
                        <span style="font-size: 1.2rem;">🏥</span>
                    </div>
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">
                        Students gaining hands-on clinical experience under alumni preceptors
                    </div>
                    <div style="background: #e3f2fd; height: 6px; border-radius: 3px; overflow: hidden;">
                        <div style="background: #2196F3; height: 100%; width: 70%; border-radius: 3px;"></div>
                    </div>
                </div>

                <div style="padding: 1.5rem; background: #f5f5f5; border-radius: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <strong style="color: #333;">Career Advancement</strong>
                        <span style="font-size: 1.2rem;">💼</span>
                    </div>
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">
                        Graduates transitioning to employment through alumni networks and recommendations
                    </div>
                    <div style="background: #fff3e0; height: 6px; border-radius: 3px; overflow: hidden;">
                        <div style="background: #FF9800; height: 100%; width: ${employmentMetrics.employment_rate_12m}%; border-radius: 3px;"></div>
                    </div>
                </div>

                <div style="padding: 1.5rem; background: #f5f5f5; border-radius: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <strong style="color: #333;">Program Innovation</strong>
                        <span style="font-size: 1.2rem;">🎯</span>
                    </div>
                    <div style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">
                        Alumni advisory board driving curriculum improvements and institutional strategy
                    </div>
                    <div style="background: #f3e5f5; height: 6px; border-radius: 3px; overflow: hidden;">
                        <div style="background: #9C27B0; height: 100%; width: 88%; border-radius: 3px;"></div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

// =====================
// RESEARCH UNIT METHODS
// =====================

App.prototype.renderResearchEditPanel = function(tab, tabTitle) {
    const editHtml = `
        <div style="background: #f5f5f5; border: 1px solid #ddd; border-radius: 12px; padding: 2rem; margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="margin: 0; color: #333;">✏️ Edit Research Data</h3>
                <button onclick="app.render('${tab}')" style="background: #f0f0f0; border: 1px solid #ddd; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-weight: 500;">Exit Edit Mode</button>
            </div>

            <!-- Data Editing Section -->
            <div style="background: white; border-radius: 10px; padding: 1.5rem; border-left: 4px solid #2196F3;">
                <h4 style="margin-top: 0; margin-bottom: 1rem; color: #333;">📊 Edit Research Metrics & Numbers</h4>
                <p style="margin: 0 0 1rem 0; color: #666; font-size: 0.95rem;">
                    All research section numbers are editable. Click any metric in the main view to edit it directly, or use the controls below.
                </p>
                <div style="background: #f9f9f9; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
                    <h5 style="margin-top: 0; margin-bottom: 1rem; color: #333;">Quick Edit Shortcuts</h5>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.9rem;">
                        <div>✅ Click any number to edit</div>
                        <div>📌 Changes save automatically</div>
                        <div>🔄 Use reset button below to restore</div>
                        <div>💾 Data persists in browser</div>
                    </div>
                </div>
            </div>

            <!-- Import/Export Section -->
            <div style="background: white; border-radius: 10px; padding: 1.5rem; border-left: 4px solid #F57C00; margin-top: 1.5rem;">
                <h4 style="margin-top: 0; margin-bottom: 1rem; color: #333;">📥📤 Import / Export Data</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #333;">Import CSV/JSON</label>
                        <input type="file" id="research_data_file_${tab}" accept=".csv,.json,.xlsx" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 6px; font-size: 0.9rem;" />
                    </div>
                    <div style="display: flex; align-items: flex-end;">
                        <button onclick="app.importResearchData('${tab}')" style="background: #4CAF50; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; width: 100%;">📂 Import Data</button>
                    </div>
                </div>
                <button onclick="app.exportResearchDataCSV('${tab}')" style="background: #F57C00; color: white; padding: 0.75rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; width: 100%; margin-bottom: 1rem;">📥 Download Data as CSV</button>
            </div>

            <!-- Reset Section -->
            <div style="background: white; border-radius: 10px; padding: 1.5rem; border-left: 4px solid #E91E63; margin-top: 1.5rem;">
                <h4 style="margin-top: 0; margin-bottom: 1rem; color: #333;">🔄 Reset to Database</h4>
                <p style="margin: 0 0 1rem 0; color: #666; font-size: 0.95rem;">
                    Clear all manual edits and refresh numbers to show latest database values
                </p>
                <button onclick="app.resetResearchMetrics('${tab}')" style="background: #E91E63; color: white; padding: 0.75rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; width: 100%;">🔄 Reset All Numbers to Database</button>
            </div>
        </div>
    `;
    return editHtml;
};

App.prototype.resetResearchMetrics = function(tab) {
    if (confirm('⚠️ Clear all manual edits and restore database values for this section?\n\nThis action cannot be undone.')) {
        localStorage.removeItem(`researchMetrics_${tab}`);
        localStorage.removeItem(`researchEdits_${tab}`);
        this.render(tab);
    }
};

App.prototype.importResearchData = function(tab) {
    const fileInput = document.getElementById(`research_data_file_${tab}`);
    if (!fileInput || !fileInput.files.length) {
        alert('Please select a file to import');
        return;
    }
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const content = e.target.result;
            const data = JSON.parse(content);
            localStorage.setItem(`researchMetrics_${tab}`, JSON.stringify(data));
            alert('✅ Data imported successfully!');
            this.render(tab);
        } catch {
            alert('⚠️ Error importing file. Please ensure it is valid JSON.');
        }
    };
    reader.readAsText(file);
};

App.prototype.exportResearchDataCSV = function(tab) {
    const metrics = JSON.parse(localStorage.getItem(`researchMetrics_${tab}`) || '{}');
    const csv = 'metric,value\n' + Object.entries(metrics).map(([k, v]) => `"${k}","${v}"`).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `research-${tab}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
};

App.prototype.renderResearchOverview = function() {
    const tabTitle = '🧭 Research Overview';
    this.title.textContent = tabTitle;
    const db = RESEARCH_DATABASE;
    const stats = db.stats;

    const totalPubs = this.createEditableMetric('research-overview', 'total_publications', stats.totalPublications, '#e8f5e9', '#1B5E20');
    const currentYearPubs = this.createEditableMetric('research-overview', 'current_year_pubs', stats.currentYearPublications, '#e3f2fd', '#2196F3');
    const activeProjects = this.createEditableMetric('research-overview', 'active_projects', stats.activeProjects, '#fff3e0', '#FF9800');
    const activeIRBs = this.createEditableMetric('research-overview', 'active_irbs', stats.activeIRBs, '#fce4ec', '#E91E63');
    const facultyCount = this.createEditableMetric('research-overview', 'faculty_involved', stats.facultyInvolved, '#f3e5f5', '#9C27B0');
    const studentCount = this.createEditableMetric('research-overview', 'students_involved', stats.studentsInvolved, '#e0f2f1', '#009688');

    this.root.innerHTML = `
        <!-- Edit Panel Button -->
        <div style="margin-bottom: 2rem;">
            <button onclick="app.root.innerHTML = app.renderResearchEditPanel('research-overview', '${tabTitle}') + document.getElementById('research-overview-content').innerHTML; document.getElementById('research-overview-content').remove();" style="background: #1B5E20; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">✏️ Edit Data Control Center</button>
        </div>

        <div id="research-overview-content" style="display: none;"></div>

        <!-- Quick KPIs -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">📚</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Total Publications</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #1B5E20;">${totalPubs}</div>
                </div>
                <div style="background: #e8f5e9; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: #1B5E20; height: 100%; width: 92%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">All-time publications</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">📄</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Current Year</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #2196F3;">${currentYearPubs}</div>
                </div>
                <div style="background: #e3f2fd; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: #2196F3; height: 100%; width: 45%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">2025 publications</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">🧪</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Active Projects</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #FF9800;">${activeProjects}</div>
                </div>
                <div style="background: #fff3e0; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: #FF9800; height: 100%; width: 80%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Ongoing research</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">⚖️</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Active IRBs</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #E91E63;">${activeIRBs}</div>
                </div>
                <div style="background: #fce4ec; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: #E91E63; height: 100%; width: 75%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Active IRB approvals</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">👨‍🏫</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Faculty Involved</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #9C27B0;">${facultyCount}</div>
                </div>
                <div style="background: #f3e5f5; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: #9C27B0; height: 100%; width: 85%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Active faculty researchers</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">🎓</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Students Involved</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #009688;">${studentCount}</div>
                </div>
                <div style="background: #e0f2f1; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: #009688; height: 100%; width: 78%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Student researchers</div>
            </div>
        </div>

        <!-- Filters -->
        <div style="background: white; border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1rem; color: #333;">Filters</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #666;">Year</label>
                    <select style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px;">
                        <option>All Years</option>
                        <option>2025</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #666;">Department</label>
                    <select style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px;">
                        <option>All Departments</option>
                        <option>Pharmacy Practice</option>
                        <option>Pharmaceutical Sciences</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; font-weight: 600; margin-bottom: 0.5rem; color: #666;">Research Type</label>
                    <select style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px;">
                        <option>All Types</option>
                        <option>Faculty-led</option>
                        <option>Student-led</option>
                        <option>Collaborative</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Recent Activity -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Latest Activity</h3>
            <div style="display: grid; gap: 1rem;">
                ${db.publications.slice(0, 3).map(pub => `
                    <div style="padding: 1.5rem; background: #f9f9f9; border-left: 4px solid #1B5E20; border-radius: 10px;">
                        <strong style="color: #333; display: block; margin-bottom: 0.3rem;">${pub.title}</strong>
                        <small style="color: #666; display: block; margin-bottom: 0.5rem;">📚 ${pub.journal} (${pub.quartile}) - ${pub.year}</small>
                        <small style="color: #999;">By: ${pub.authors}</small>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};

App.prototype.renderResearchPublications = function() {
    const tabTitle = '📚 Publications';
    this.title.textContent = tabTitle;
    const db = RESEARCH_DATABASE;

    this.root.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <button onclick="app.root.innerHTML = app.renderResearchEditPanel('research-publications', '${tabTitle}') + (app.root.innerHTML || '');" style="background: #1B5E20; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">✏️ Edit Data Control Center</button>
        </div>

        <div style="margin-bottom: 1.5rem; display: flex; gap: 1rem;">
            <input type="text" placeholder="Search publications..." style="flex: 1; padding: 0.75rem; border: 1px solid #ddd; border-radius: 6px;" />
            <button style="background: #1B5E20; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">🔍 Search</button>
        </div>

        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">All Publications (${db.publications.length})</h3>
            <div style="display: grid; gap: 1.5rem;">
                ${db.publications.map(pub => {
                    let tagColor = '#1B5E20', tagBg = '#e8f5e9';
                    if (pub.type === 'Student-led') { tagColor = '#2196F3'; tagBg = '#e3f2fd'; }
                    else if (pub.type === 'Collaborative') { tagColor = '#FF9800'; tagBg = '#fff3e0'; }
                    return `
                        <div style="padding: 1.5rem; background: #f9f9f9; border-radius: 10px; border-left: 4px solid ${tagColor};">
                            <div style="display: flex; justify-content: space-between; align-items: start; gap: 1rem;">
                                <div style="flex: 1;">
                                    <strong style="font-size: 1.1rem; color: #333; display: block; margin-bottom: 0.5rem;">${pub.title}</strong>
                                    <small style="color: #666; display: block; margin-bottom: 0.3rem;">✍️ ${pub.authors}</small>
                                    <small style="color: #666; display: block; margin-bottom: 0.5rem;">📊 ${pub.journal} | ${pub.quartile} Quartile | ${pub.year}</small>
                                    <small style="color: #999;">🔗 DOI: ${pub.doi} | 📌 ${pub.citations} citations</small>
                                </div>
                                <span style="background: ${tagBg}; color: ${tagColor}; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600; white-space: nowrap;">${pub.type}</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
};

App.prototype.renderResearchProjects = function() {
    const tabTitle = '🧠 Research Projects';
    this.title.textContent = tabTitle;
    const db = RESEARCH_DATABASE;

    this.root.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <button onclick="app.root.innerHTML = app.renderResearchEditPanel('research-projects', '${tabTitle}') + (app.root.innerHTML || '');" style="background: #1B5E20; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">✏️ Edit Data Control Center</button>
        </div>
    `;

    const stageColors = {
        'Proposal': '#FF9800',
        'IRB submitted': '#FF6F00',
        'IRB approved': '#4CAF50',
        'Data collection': '#2196F3',
        'Analysis': '#9C27B0',
        'Manuscript submitted': '#F57C00',
        'Published': '#1B5E20'
    };

    this.root.innerHTML = `
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Research Projects (${db.projects.length})</h3>
            <div style="display: grid; gap: 1.5rem;">
                ${db.projects.map(proj => {
                    const latestStage = proj.stages[proj.stages.length - 1];
                    return `
                        <div style="padding: 1.5rem; background: #f9f9f9; border-radius: 10px; border-left: 4px solid ${stageColors[latestStage] || '#999'};">
                            <div style="display: flex; justify-content: space-between; align-items: start; gap: 1rem; margin-bottom: 1rem;">
                                <div>
                                    <strong style="font-size: 1.1rem; color: #333; display: block; margin-bottom: 0.3rem;">${proj.title}</strong>
                                    <small style="color: #666;">PI: ${proj.pi} | Type: ${proj.type}</small>
                                </div>
                                <span style="background: ${stageColors[latestStage] || '#999'}; color: white; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600; white-space: nowrap;">${proj.status}</span>
                            </div>
                            <div style="margin-bottom: 1rem;">
                                <small style="color: #666; display: block; margin-bottom: 0.5rem;">📊 ${proj.students} students involved | Duration: ${proj.startDate} to ${proj.endDate}</small>
                            </div>
                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; font-size: 0.75rem;">
                                ${proj.stages.map(stage => `
                                    <span style="background: ${stageColors[stage] || '#ccc'}; color: white; padding: 0.3rem 0.6rem; border-radius: 4px;">${stage}</span>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
};

App.prototype.renderResearchIRB = function() {
    const tabTitle = '🧾 IRB & Ethics';
    this.title.textContent = tabTitle;
    const db = RESEARCH_DATABASE;

    this.root.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <button onclick="app.root.innerHTML = app.renderResearchEditPanel('research-irb', '${tabTitle}') + (app.root.innerHTML || '');" style="background: #1B5E20; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">✏️ Edit Data Control Center</button>
        </div>
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">IRB Approvals & Ethics Compliance</h3>
            <div style="display: grid; gap: 1rem;">
                ${db.irb.map(irb => {
                    let statusColor = '#1B5E20', statusBg = '#e8f5e9';
                    if (irb.status === 'Expired') { statusColor = '#f44336'; statusBg = '#ffebee'; }
                    return `
                        <div style="padding: 1.5rem; background: #f9f9f9; border-radius: 10px; border-left: 4px solid ${statusColor};">
                            <div style="display: flex; justify-content: space-between; align-items: start; gap: 1rem;">
                                <div style="flex: 1;">
                                    <strong style="color: #333; display: block; margin-bottom: 0.3rem;">📋 ${irb.id}</strong>
                                    <div style="color: #666; margin-bottom: 0.5rem;">${irb.title}</div>
                                    <small style="color: #666;">Approval: ${irb.approval} | Expires: ${irb.expiry}</small>
                                </div>
                                <div style="text-align: right;">
                                    <span style="background: ${statusBg}; color: ${statusColor}; padding: 0.5rem 1rem; border-radius: 6px; font-weight: 600; display: block; margin-bottom: 0.5rem;">${irb.status}</span>
                                    <small style="color: ${irb.daysToRenewal > 0 ? '#666' : '#f44336'}; font-weight: 600;">${irb.daysToRenewal > 0 ? '✓ ' + irb.daysToRenewal + ' days' : 'Expired ' + Math.abs(irb.daysToRenewal) + ' days ago'}</small>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
};

App.prototype.renderResearchStudents = function() {
    const tabTitle = '🎓 Student Research';
    this.title.textContent = tabTitle;
    const db = RESEARCH_DATABASE;
    const stats = db.stats;

    const studentInvolvement = this.createEditableMetric('research-students', 'student_involvement', stats.studentInvolvementRate + '%', '#e0f2f1', '#009688');
    const studentPres = this.createEditableMetric('research-students', 'student_presentations', stats.studentPresentations, '#e3f2fd', '#2196F3');
    const studentPubs = this.createEditableMetric('research-students', 'student_publications', stats.studentPublications, '#e8f5e9', '#1B5E20');

    this.root.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <button onclick="app.root.innerHTML = app.renderResearchEditPanel('research-students', '${tabTitle}') + (app.root.innerHTML || '');" style="background: #1B5E20; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">✏️ Edit Data Control Center</button>
        </div>
        <!-- Key Metrics -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">🎓</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Student Involvement</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #009688;">${studentInvolvement}</div>
                </div>
                <div style="background: #e0f2f1; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: #009688; height: 100%; width: 85%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Students in research</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">🎤</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Presentations</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #2196F3;">${studentPres}</div>
                </div>
                <div style="background: #e3f2fd; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: #2196F3; height: 100%; width: 78%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Conference presentations</div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08); position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; font-size: 4rem; opacity: 0.1;">📚</div>
                <div style="margin-bottom: 1.5rem;">
                    <div style="font-size: 0.85rem; color: #999; text-transform: uppercase; font-weight: 600; margin-bottom: 0.5rem;">Publications</div>
                    <div style="font-size: 3rem; font-weight: 700; color: #1B5E20;">${studentPubs}</div>
                </div>
                <div style="background: #e8f5e9; height: 6px; border-radius: 3px; overflow: hidden;">
                    <div style="background: #1B5E20; height: 100%; width: 42%; border-radius: 3px;"></div>
                </div>
                <div style="font-size: 0.8rem; color: #666;">Peer-reviewed publications</div>
            </div>
        </div>

        <!-- Student List -->
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Active Student Researchers</h3>
            <div style="display: grid; gap: 1rem;">
                ${db.students.map(student => `
                    <div style="padding: 1.5rem; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #009688;">
                        <div style="display: flex; justify-content: space-between; align-items: start;">
                            <div>
                                <strong style="color: #333; font-size: 1.05rem;">${student.name}</strong>
                                <small style="display: block; color: #666; margin-top: 0.5rem;">📚 ${student.publications} publication(s) | 🎤 ${student.presentations} presentation(s) | 🧪 ${student.projects} project(s)</small>
                            </div>
                            <span style="background: ${student.status === 'Active' ? '#e8f5e9' : '#f5f5f5'}; color: ${student.status === 'Active' ? '#1B5E20' : '#666'}; padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600; white-space: nowrap;">${student.status}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};

App.prototype.renderResearchFaculty = function() {
    const tabTitle = '👨‍🏫 Faculty Research';
    this.title.textContent = tabTitle;
    const db = RESEARCH_DATABASE;

    this.root.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <button onclick="app.root.innerHTML = app.renderResearchEditPanel('research-faculty', '${tabTitle}') + (app.root.innerHTML || '');" style="background: #1B5E20; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">✏️ Edit Data Control Center</button>
        </div>
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Faculty Researchers</h3>
            <div style="display: grid; gap: 1.5rem;">
                ${db.faculty.map(faculty => `
                    <div style="padding: 1.5rem; background: #f9f9f9; border-radius: 10px; border-left: 4px solid #1B5E20;">
                        <div style="display: flex; justify-content: space-between; align-items: start; gap: 1rem;">
                            <div style="flex: 1;">
                                <strong style="color: #333; font-size: 1.1rem; display: block; margin-bottom: 0.3rem;">${faculty.name}</strong>
                                <small style="color: #666; display: block; margin-bottom: 0.5rem;">🔬 ${faculty.interests}</small>
                                <small style="color: #666;">📚 ${faculty.publications} publications | 👨‍🎓 ${faculty.students} students supervised | 🧪 ${faculty.projects} active projects</small>
                            </div>
                            <div style="text-align: right;">
                                <small style="display: block; color: #999; margin-bottom: 0.5rem;">ORCID</small>
                                <code style="font-size: 0.75rem; color: #666;">${faculty.orcid}</code>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};

App.prototype.renderResearchCollaboration = function() {
    const tabTitle = '🤝 Collaboration & Partnerships';
    this.title.textContent = tabTitle;
    const db = RESEARCH_DATABASE;

    this.root.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <button onclick="app.root.innerHTML = app.renderResearchEditPanel('research-collaboration', '${tabTitle}') + (app.root.innerHTML || '');" style="background: #1B5E20; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">✏️ Edit Data Control Center</button>
        </div>
    `;

    const typeIcons = {
        'Internal': '🏫',
        'External': '🌍',
        'Industry': '🏢',
        'Hospital': '🏥'
    };

    this.root.innerHTML = `
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Research Collaborations</h3>
            <div style="display: grid; gap: 1rem;">
                ${db.collaborations.map(collab => {
                    let color = '#1B5E20', bg = '#e8f5e9';
                    if (collab.type === 'External') { color = '#2196F3'; bg = '#e3f2fd'; }
                    else if (collab.type === 'Industry') { color = '#FF9800'; bg = '#fff3e0'; }
                    else if (collab.type === 'Hospital') { color = '#9C27B0'; bg = '#f3e5f5'; }
                    return `
                        <div style="padding: 1.5rem; background: ${bg}; border-radius: 10px; border-left: 4px solid ${color};">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <strong style="color: #333; font-size: 1.05rem; display: block;">${typeIcons[collab.type]} ${collab.partner}</strong>
                                    <small style="color: #666; display: block; margin-top: 0.3rem;">🧪 ${collab.projects} active project(s)</small>
                                </div>
                                <span style="background: white; color: ${color}; padding: 0.5rem 1rem; border: 2px solid ${color}; border-radius: 6px; font-weight: 600;">${collab.status}</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
};

App.prototype.renderResearchRecognition = function() {
    const tabTitle = '🏆 Recognition & Output';
    this.title.textContent = tabTitle;
    const db = RESEARCH_DATABASE;

    this.root.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <button onclick="app.root.innerHTML = app.renderResearchEditPanel('research-recognition', '${tabTitle}') + (app.root.innerHTML || '');" style="background: #1B5E20; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">✏️ Edit Data Control Center</button>
        </div>
    `;

    const typeIcons = {
        'Award': '🏆',
        'Citation': '📌',
        'Presentation': '🎤'
    };

    const typeColors = {
        'Award': '#FF9800',
        'Citation': '#2196F3',
        'Presentation': '#1B5E20'
    };

    this.root.innerHTML = `
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Awards, Recognition & Output</h3>
            <div style="display: grid; gap: 1.5rem;">
                ${db.recognition.map(item => `
                    <div style="padding: 1.5rem; background: #f9f9f9; border-radius: 10px; border-left: 4px solid ${typeColors[item.type]};">
                        <div style="display: flex; justify-content: space-between; align-items: start; gap: 1rem;">
                            <div style="flex: 1;">
                                <strong style="color: #333; font-size: 1.05rem; display: block; margin-bottom: 0.3rem;">${typeIcons[item.type]} ${item.title}</strong>
                                <small style="color: #666; display: block; margin-bottom: 0.3rem;">Recipient: <strong>${item.recipient}</strong></small>
                                <small style="color: #999;">📅 ${item.date} | ${item.details}</small>
                            </div>
                            <span style="background: ${typeColors[item.type]}; color: white; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.85rem; font-weight: 600; white-space: nowrap;">${item.type}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};

App.prototype.renderResearchAnalytics = function() {
    const tabTitle = '📊 Analytics & Trends';
    this.title.textContent = tabTitle;
    const db = RESEARCH_DATABASE;

    this.root.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <button onclick="app.root.innerHTML = app.renderResearchEditPanel('research-analytics', '${tabTitle}') + (app.root.innerHTML || '');" style="background: #1B5E20; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">✏️ Edit Data Control Center</button>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
            <!-- Publications by Year -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Publications by Year</h3>
                <div style="display: grid; gap: 1rem;">
                    ${db.analytics.publicationsByYear.map(item => {
                        const percentage = (item.publications / 28) * 100;
                        return `
                            <div>
                                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                    <strong>${item.year}</strong>
                                    <span style="color: #666;">${item.publications} pubs</span>
                                </div>
                                <div style="background: #e0e0e0; height: 8px; border-radius: 4px; overflow: hidden;">
                                    <div style="background: linear-gradient(90deg, #1B5E20, #4CAF50); height: 100%; width: ${percentage}%; border-radius: 4px;"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- Faculty vs Student Output -->
            <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Faculty vs Student Output</h3>
                <div style="display: grid; gap: 1rem;">
                    ${db.analytics.facultyVsStudent.map(item => `
                        <div>
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <strong>${item.year}</strong>
                            </div>
                            <div style="display: flex; gap: 1rem; margin-bottom: 0.5rem;">
                                <div style="flex: 1;">
                                    <small style="color: #666;">Faculty: ${item.faculty}</small>
                                    <div style="background: #e8f5e9; height: 6px; border-radius: 3px; margin-top: 0.3rem;">
                                        <div style="background: #1B5E20; height: 100%; width: ${(item.faculty / 24) * 100}%; border-radius: 3px;"></div>
                                    </div>
                                </div>
                                <div style="flex: 1;">
                                    <small style="color: #666;">Students: ${item.student}</small>
                                    <div style="background: #e3f2fd; height: 6px; border-radius: 3px; margin-top: 0.3rem;">
                                        <div style="background: #2196F3; height: 100%; width: ${(item.student / 4) * 100}%; border-radius: 3px;"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
};

App.prototype.renderResearchDocuments = function() {
    const tabTitle = '📁 Documents & Templates';
    this.title.textContent = tabTitle;
    const db = RESEARCH_DATABASE;

    this.root.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <button onclick="app.root.innerHTML = app.renderResearchEditPanel('research-documents', '${tabTitle}') + (app.root.innerHTML || '');" style="background: #1B5E20; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">✏️ Edit Data Control Center</button>
        </div>
    `;

    const typeIcons = {
        'Template': '📝',
        'Form': '📋',
        'Guideline': '📖'
    };

    const typeColors = {
        'Template': '#2196F3',
        'Form': '#FF9800',
        'Guideline': '#1B5E20'
    };

    this.root.innerHTML = `
        <div style="background: white; border-radius: 12px; padding: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <h3 style="margin-top: 0; margin-bottom: 1.5rem; color: #333;">Research Documents & Templates</h3>
            <div style="display: grid; gap: 1rem;">
                ${db.documents.map(doc => `
                    <div style="padding: 1.5rem; background: #f9f9f9; border-radius: 10px; border-left: 4px solid ${typeColors[doc.type]};">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div style="flex: 1;">
                                <strong style="color: #333; font-size: 1.05rem; display: block; margin-bottom: 0.3rem;">${typeIcons[doc.type]} ${doc.name}</strong>
                                <small style="color: #666;">Last updated: ${doc.updated}</small>
                            </div>
                            <button style="background: ${typeColors[doc.type]}; color: white; padding: 0.6rem 1rem; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">📥 Download</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};

window.addAlumniRow = function() {
    const now = Date.now();
    const newEntry = {
        id: `new_${now}`,
        name: '',
        program: 'PharmD',
        graduationYear: new Date().getFullYear(),
        status: 'employed',
        jobTitle: '',
        currentEmployer: '',
        email: '',
        boardCert: false,
        mentorWilling: false,
        preceptorWilling: false,
        specialty: '',
        engagement: 'active'
    };
    
    ALUMNI_DATABASE.alumni.push(newEntry);
    
    // Re-render the directory to show the new row
    if (window.app && typeof window.app.renderAlumniDirectory === 'function') {
        window.app.renderAlumniDirectory();
    }
    
    // Auto-enable edit mode so user can fill in the row immediately
    if (!window.alumniEditMode) {
        window.toggleAlumniEditMode();
    }
};

// Helpers to refresh alumni views when filters change
window.updateAlumniOverview = () => {
    if (window.app && typeof window.app.renderAlumniOverview === 'function') {
        window.app.renderAlumniOverview();
    }
};

window.filterAlumniTable = () => {
    if (window.app && typeof window.app.renderAlumniDirectory === 'function') {
        window.app.renderAlumniDirectory();
    }
};

// Inline edit toggles
window.alumniEditMode = false;
window.toggleAlumniEditMode = () => {
    window.alumniEditMode = !window.alumniEditMode;
    if (window.app && typeof window.app.renderAlumniDirectory === 'function') {
        window.app.renderAlumniDirectory();
    }
};

// Save edits made in the inline table back to ALUMNI_DATABASE
window.saveAlumniEdits = () => {
    if (!window.alumniEditMode) return;
    const rows = document.querySelectorAll('[data-alumni-row]');
    const parseBool = (val) => {
        const v = (val || '').toString().trim().toLowerCase();
        return ['true', 'yes', 'y', '1', '✅', 'checked'].includes(v);
    };

    rows.forEach(row => {
        const id = row.getAttribute('data-alumni-row');
        const original = ALUMNI_DATABASE.alumni.find(a => a.id === id);
        if (!original) return;

        const getText = (field) => (row.querySelector(`[data-field="${field}"]`)?.textContent || '').trim();

        original.name = getText('name') || original.name;
        original.program = getText('program') || original.program;
        const grad = parseInt(getText('graduationYear'), 10);
        if (!Number.isNaN(grad)) original.graduationYear = grad;
        const statusVal = getText('status').toLowerCase();
        if (statusVal) original.status = statusVal.includes('post') ? 'postgraduate' : 'employed';
        original.jobTitle = getText('jobTitle') || original.jobTitle;
        original.currentEmployer = getText('currentEmployer') || original.currentEmployer;
        original.boardCert = parseBool(getText('boardCert'));
        original.mentorWilling = parseBool(getText('mentorWilling'));
        original.preceptorWilling = parseBool(getText('preceptorWilling'));
    });

    window.alumniEditMode = false;
    if (window.app && typeof window.app.renderAlumniDirectory === 'function') {
        window.app.renderAlumniDirectory();
    }
    alert('Alumni updates saved.');
};

// CSV export/import helpers
window.exportAlumniCSV = () => {
    const header = ['id','name','email','program','graduationYear','status','currentEmployer','jobTitle','boardCert','specialty','engagement','mentorWilling','preceptorWilling'];
    const rows = ALUMNI_DATABASE.alumni.map(a => header.map(h => {
        const val = a[h] !== undefined ? a[h] : '';
        const str = (val === true ? 'true' : val === false ? 'false' : val).toString();
        return '"' + str.replace(/"/g, '""') + '"';
    }).join(','));
    const csv = [header.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'alumni-export.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

window.handleAlumniCSVUpload = (evt) => {
    const file = evt.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const text = e.target?.result;
            if (!text || typeof text !== 'string') throw new Error('Empty file');
            const parsed = window.parseAlumniCSV(text);
            if (!parsed.length) throw new Error('No rows found');
            ALUMNI_DATABASE.alumni = parsed;
            window.alumniEditMode = false;
            if (window.app && typeof window.app.renderAlumniDirectory === 'function') {
                window.app.renderAlumniDirectory();
            }
            alert(`Imported ${parsed.length} alumni from CSV.`);
        } catch (err) {
            alert('Import failed: ' + (err && err.message ? err.message : err));
        } finally {
            evt.target.value = '';
        }
    };
    reader.readAsText(file);
};

window.parseAlumniCSV = (text) => {
    const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
    if (lines.length === 0) return [];
    const header = lines[0].split(',').map(h => h.replace(/^"|"$/g, '').trim());
    const required = ['id','name','program','graduationYear'];
    required.forEach(r => {
        if (!header.includes(r)) throw new Error(`Missing column: ${r}`);
    });

    const getIndex = (col) => header.indexOf(col);
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
        const raw = lines[i];
        if (!raw.trim()) continue;
        const cols = raw.match(/\"(?:[^\"]|\"\")*\"|[^,]+/g) || [];
        const clean = cols.map(c => c.replace(/^\"|\"$/g, '').replace(/\"\"/g, '"').trim());
        const pick = (col) => {
            const idx = getIndex(col);
            return idx >= 0 ? clean[idx] : '';
        };
        const parseBool = (val) => ['true','yes','y','1','✅'].includes((val || '').toLowerCase());
        const parseNum = (val) => {
            const n = parseInt(val, 10);
            return Number.isNaN(n) ? null : n;
        };

        const gradYear = parseNum(pick('graduationYear'));
        rows.push({
            id: pick('id'),
            name: pick('name'),
            email: pick('email'),
            program: pick('program'),
            graduationYear: gradYear || pick('graduationYear'),
            status: (pick('status') || 'employed').toLowerCase().includes('post') ? 'postgraduate' : 'employed',
            currentEmployer: pick('currentEmployer'),
            jobTitle: pick('jobTitle'),
            boardCert: parseBool(pick('boardCert')),
            specialty: pick('specialty'),
            engagement: pick('engagement') || 'active',
            mentorWilling: parseBool(pick('mentorWilling')),
            preceptorWilling: parseBool(pick('preceptorWilling'))
        });
    }
    return rows;
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    try {
        if (window.appStore) {
            console.log('Initializing App...');
            window.app = new App();
            console.log('App initialized successfully');
        } else {
            console.error('Store not initialized');
            const appRoot = document.getElementById('app-root');
            if (appRoot) {
                appRoot.innerHTML = '<h1 style="color:red; padding:2rem;">Error: Data Store Failed to Load</h1>';
            }
        }
    } catch (error) {
        console.error('Error initializing app:', error);
        const appRoot = document.getElementById('app-root');
        if (appRoot) {
            appRoot.innerHTML = `<div style="padding: 2rem; color: red; font-family: monospace;">
                <h2>App Initialization Error</h2>
                <pre>${error.message}\n${error.stack}</pre>
            </div>`;
        }
    }
});

// --- FACULTY DASHBOARD RESTORATION (Added manually) ---

const facultyData = [
    { name: "Prof. Abdulkareem AlBekairy", load: 4, q1: 15, q2: 8, q3: 4, q4: 1, sup: 8, awards: 2, scholar: "https://scholar.google.com" },
    { name: "Dr. Hisham Aljadhey", load: 6, q1: 10, q2: 5, q3: 3, q4: 2, sup: 4, awards: 1, scholar: "#" },
    { name: "Dr. Sara Al-Dossari", load: 8, q1: 5, q2: 4, q3: 2, q4: 1, sup: 2, awards: 0, scholar: "#" },
    { name: "Dr. Ahmed Malik", load: 12, q1: 2, q2: 3, q3: 1, q4: 0, sup: 1, awards: 0, scholar: "#" }
];

window.getFacultyDashboardHTML = () => {
    return `
    <div class="dashboard-grid">
        <div class="card" style="grid-column: span 3;">
            <div class="flex-between">
                <div>
                    <h3>🏆 Faculty Achievement Matrix</h3>
                    <p style="color:var(--text-muted); font-size:0.9rem;">Teaching • Research • Distinctions</p>
                </div>
                <div style="display:flex; gap:10px;">
                    <select class="btn btn-outline" style="padding:5px 10px;">
                        <option>🏫 College Overview (All)</option>
                        <option>💊 Clinical Pharmacy</option>
                        <option>🔬 Pharm. Sciences</option>
                        <option>🏥 Pharmacy Practice</option>
                    </select>
                    <button class="btn btn-primary" onclick="alert('Exporting Report...')">📑 Export Report</button>
                </div>
            </div>
            
            <div class="dashboard-grid" style="grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 1.5rem;">
                <!-- Teaching Load -->
                <div class="card" style="box-shadow:none; border:1px solid #eee;">
                    <h5 style="text-align:center;">📚 Teaching Load</h5>
                    <div style="height:150px; position:relative;">
                        <canvas id="chartTeachingLoad"></canvas>
                        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); text-align:center;">
                            <div style="font-size:2rem; font-weight:bold; color:var(--primary-green);">7.5</div>
                            <div style="font-size:0.7rem; color:#888;">Hrs/Week</div>
                        </div>
                    </div>
                    <div style="text-align:center; font-size:0.8rem; color:#888; margin-top:10px;">Source: Academic Affairs</div>
                </div>

                <!-- Research Output -->
                <div class="card" style="box-shadow:none; border:1px solid #eee;">
                    <h5 style="text-align:center;">🔬 Research Output</h5>
                    <div style="display:flex; justify-content:space-around; margin-bottom:10px; font-size:0.8rem;">
                        <span>📜 Citations: <strong>1,240</strong></span>
                        <span>💰 Grants: <strong>12</strong></span>
                        <span>👥 Sup: <strong>45</strong></span>
                    </div>
                     <div style="height:120px;">
                        <canvas id="chartResearchOutput"></canvas>
                    </div>
                </div>

                <!-- Awards -->
                <div class="card" style="box-shadow:none; border:1px solid #eee;">
                    <h5 style="text-align:center;">🏆 Awards & Distinctions</h5>
                    <div style="height:150px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
                        <div style="font-size:3rem;">🏆 8</div>
                        <div style="color:var(--success); font-weight:bold;">+2 this year</div>
                        <div style="font-size:0.8rem; color:#888; margin-top:5px;">International & Regional</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Detailed Metrics -->
        <div class="card" style="grid-column: span 3;">
            <div class="flex-between">
                <h3>📊 Detailed Metrics (Editable)</h3>
                <button class="btn btn-outline" onclick="window.renderFacultyTable()">🔄 Refresh Data</button>
            </div>
            <div class="data-table-container mt-4">
                <table class="data-table" id="faculty-table">
                    <thead>
                        <tr>
                            <th style="width:30%;">Faculty Member</th>
                            <th style="text-align:center;">Load (Hrs)</th>
                            <th style="text-align:center;">Q1</th>
                            <th style="text-align:center;">Q2</th>
                            <th style="text-align:center;">Q3</th>
                            <th style="text-align:center;">Q4</th>
                            <th style="text-align:center;">Sup.</th>
                            <th style="text-align:center;">Awards</th>
                            <th style="text-align:center;">Google Scholar</th>
                        </tr>
                    </thead>
                    <tbody id="faculty-table-body">
                        <!-- Populated by JS -->
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    `;
};

window.renderFacultyTable = () => {
    const tbody = document.getElementById('faculty-table-body');
    if (!tbody) return;
    tbody.innerHTML = facultyData.map((f, i) => `
        <tr>
            <td style="font-weight:600; color:var(--primary-green);">
                 ${f.name}
            </td>
            <td style="text-align:center;">
                <span style="background:${f.load > 10 ? '#ffebee' : '#e8f5e9'}; color:${f.load > 10 ? '#c62828' : '#2e7d32'}; padding:2px 8px; border-radius:12px; font-size:0.85rem; font-weight:bold;">
                    ${f.load}
                </span>
            </td>
            <td style="text-align:center;">${f.q1}</td>
            <td style="text-align:center;">${f.q2}</td>
            <td style="text-align:center;">${f.q3}</td>
            <td style="text-align:center;">${f.q4}</td>
            <td style="text-align:center;">${f.sup}</td>
            <td style="text-align:center;">${f.awards > 0 ? '🏆 ' + f.awards : '-'}</td>
            <td style="text-align:center;">
                <a href="${f.scholar}" target="_blank" class="btn btn-outline" style="padding:2px 6px; font-size:0.8rem;">
                    🔗 Profile
                </a>
            </td>
        </tr>
    `).join('');
};

window.initFacultyCharts = () => {
    // Populate Table
    window.renderFacultyTable();

    // Teaching Load Chart (Pie)
    if (document.getElementById('chartTeachingLoad')) {
        new Chart(document.getElementById('chartTeachingLoad'), {
            type: 'doughnut',
            data: {
                labels: ['Teaching', 'Research', 'Service'],
                datasets: [{
                    data: [45, 30, 25],
                    backgroundColor: ['#1B5E20', '#C5B358', '#E0E0E0'],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '70%',
                plugins: { legend: { display: false } },
                maintainAspectRatio: false
            }
        });
    }

    // Research Output Chart (Bar)
    if (document.getElementById('chartResearchOutput')) {
        new Chart(document.getElementById('chartResearchOutput'), {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'Publications',
                    data: [32, 20, 10, 5],
                    backgroundColor: '#1B5E20',
                    borderRadius: 4
                }]
            },
            options: {
                plugins: { legend: { display: false } },
                scales: {
                    y: { display: false },
                    x: { grid: { display: false } }
                },
                maintainAspectRatio: false
            }
        });
    }
};

window.renderFacultyDashboard = () => {
    // No-op for direct call, functionality moved to getFacultyDashboardHTML
};

window.showAPPEHub = function() {
    if (window.app && typeof window.app.render === 'function') {
        window.app.render('appe-experience-hub');
    }
};

// Initialize the app on login
window.initializeApp = function() {
    console.log('=== initializeApp START ===');
    
    try {
        // First, make sure content areas are visible
        const mainContent = document.querySelector('.main-content');
        const appRoot = document.getElementById('app-root');
        const pageTitle = document.getElementById('page-title');
        const unitNavContainer = document.querySelector('.unit-nav-container');
        
        console.log('mainContent exists:', !!mainContent);
        console.log('appRoot exists:', !!appRoot);
        console.log('pageTitle exists:', !!pageTitle);
        
        // FORCE VISIBILITY
        if (mainContent) {
            mainContent.style.display = 'flex';
            mainContent.style.visibility = 'visible';
            mainContent.style.overflow = 'auto';
        }
        
        if (appRoot) {
            appRoot.style.display = 'block';
            appRoot.style.visibility = 'visible';
            appRoot.style.minHeight = 'auto';
        }
        
        if (unitNavContainer) {
            unitNavContainer.style.display = 'flex';
            unitNavContainer.style.visibility = 'visible';
        }
        
        // Hide admin home
        const adminHome = document.getElementById('admin-home');
        if (adminHome) {
            adminHome.style.display = 'none';
            adminHome.classList.add('hidden');
        }
        
        // Create the app instance if needed
        if (!window.app && window.appStore) {
            console.log('Creating new App instance...');
            window.app = new App();
            console.log('App instance created:', !!window.app);
        } else {
            console.log('App already exists or appStore missing');
        }
        
        // Wait for app to fully initialize
        setTimeout(function() {
            console.log('Ensuring app-root is visible...');
            const appRoot = document.getElementById('app-root');
            if (appRoot) {
                appRoot.style.display = 'block';
                appRoot.style.visibility = 'visible';
            }
            
            // DO NOT auto-render for any user
            // Let the tab clicks in applyRoleBasedAccess control what view is shown:
            // - Admin users see Admin Hub (activated by admin-home tab click)
            // - Students see Student Portal (activated by student-portal tab click)
            console.log('App initialized - user view is controlled by their tab selection');
        }, 600);
        
        console.log('=== initializeApp END ===');
    } catch (error) {
        console.error('Fatal error in initializeApp:', error);
    }
};

