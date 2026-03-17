/**
 * Generate SQL INSERT statements for all students from app.js
 * Run with: node generate-student-inserts.js > copy-students-to-supabase.sql
 */

const fs = require('fs');

// Read app.js file
const appJsContent = fs.readFileSync('./js/app.js', 'utf8');

// Extract the students array using regex
const studentsMatch = appJsContent.match(/students:\s*\[([\s\S]*?)\n\s*\],/);

if (!studentsMatch) {
    console.error('Could not find students array in app.js');
    process.exit(1);
}

// Parse students - extract each student object
const studentsText = studentsMatch[1];
const studentRegex = /{\s*id:\s*'([^']+)',\s*name:\s*'([^']+)',\s*email:\s*'([^']+)',\s*cohort:\s*'([^']+)',\s*gpa:\s*([0-9.]+),\s*risk:\s*'([^']+)',\s*attendance:\s*(\d+)\s*}/g;

const students = [];
let match;
while ((match = studentRegex.exec(studentsText)) !== null) {
    students.push({
        id: match[1],
        name: match[2],
        email: match[3],
        cohort: match[4],
        gpa: parseFloat(match[5]),
        risk: match[6],
        attendance: parseInt(match[7])
    });
}

console.log(`-- ===================================`);
console.log(`-- Copy All ${students.length} Hardcoded Students to Supabase`);
console.log(`-- Generated automatically from app.js`);
console.log(`-- ===================================`);
console.log(``);
console.log(`-- Insert all students from hardcoded data`);
console.log(`INSERT INTO students (id, name, email, cohort, gpa, risk, attendance, account_status, approved_date) VALUES`);

// Generate INSERT statements
const insertValues = students.map((student, index) => {
    // Escape single quotes in names
    const name = student.name.replace(/'/g, "''");
    const isLast = index === students.length - 1;
    return `    ('${student.id}', '${name}', '${student.email}', '${student.cohort}', ${student.gpa}, '${student.risk}', ${student.attendance}, 'active', NOW())${isLast ? ';' : ','}`;
});

console.log(insertValues.join('\n'));
console.log(``);
console.log(`-- Handle conflicts (if student already exists, update their info)`);
console.log(`-- Uncomment below if you want to update existing students instead of skipping them:`);
console.log(`/*`);
console.log(`ON CONFLICT (id) DO UPDATE SET`);
console.log(`    name = EXCLUDED.name,`);
console.log(`    email = EXCLUDED.email,`);
console.log(`    cohort = EXCLUDED.cohort,`);
console.log(`    gpa = EXCLUDED.gpa,`);
console.log(`    risk = EXCLUDED.risk,`);
console.log(`    attendance = EXCLUDED.attendance,`);
console.log(`    updated_at = NOW();`);
console.log(`*/`);
console.log(``);
console.log(`SELECT '✅ ${students.length} students copied to Supabase!' AS status;`);
console.log(``);
console.log(`-- Verify the data`);
console.log(`SELECT cohort, COUNT(*) as count FROM students GROUP BY cohort ORDER BY cohort;`);
