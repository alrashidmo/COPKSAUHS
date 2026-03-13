#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os

# Read the file
filepath = os.path.join(os.path.dirname(__file__), 'js', 'app.js')
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Define all replacements as tuples of (old, new)
replacements = [
    # Community Service dashboard tabs
    ("'dashboard': '?? Community Service Dashboard'", "'dashboard': '📋 Community Service Dashboard'"),
    ("'requests': '?? My Requests", "'requests': '📝 My Requests"),
    ("'activities': '?? Activities Calendar", "'activities': '📅 Activities Calendar"),
    ("'hours': '?? Hours Tracking", "'hours': '⏳ Hours Tracking"),
    ("'certificates': '?? Certificates", "'certificates': '🏅 Certificates"),
    
    # Event request details
    ('<p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">?? ${req.studentName', '<p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">👤 ${req.studentName'),
    ('<p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">?? ${req.eventDetails?.date', '<p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">📅 ${req.eventDetails?.date'),
    
    # Approved sections
    ("<h3 style=\"margin: 0 0 1.5rem 0;\">?? Approved Students", "<h3 style=\"margin: 0 0 1.5rem 0;\">✅ Approved Students"),
    ("<strong style=\"color: #2E7D32;\">?? No approved students", "<strong style=\"color: #2E7D32;\">✅ No approved students"),
    ("<h3 style=\"margin: 0 0 1.5rem 0;\">????? Approved Admin Staff", "<h3 style=\"margin: 0 0 1.5rem 0;\">👨‍💼 Approved Admin Staff"),
    ("<strong style=\"color: #2E7D32;\">?? No approved admin staff", "<strong style=\"color: #2E7D32;\">✅ No approved admin staff"),
    
    # Clear buttons
    ("alert('? All pending requests cleared!')", "alert('✅ All pending requests cleared!')"),
    (">??? Clear All Pending Requests</button>", ">🗑️ Clear All Pending Requests</button>"),
    
    # Console logs
    ("console.log('?? Stat card clicked:", "console.log('📊 Stat card clicked:"),
    ("console.log('?? Initializing XLSX", "console.log('📊 Initializing XLSX"),
    ("console.warn('?? XLSX elements", "console.warn('⚠️ XLSX elements"),
    ("console.log('?? Initializing PDF", "console.log('📄 Initializing PDF"),
    ("console.warn('?? PDF elements", "console.warn('⚠️ PDF elements"),
    ("console.log('?? Rendering student", "console.log('📊 Rendering student"),
    ("console.warn('?? Student database", "console.warn('⚠️ Student database"),
    
    # Learning outcome tabs
    ("{ id: 'overview', label: '?? Outcomes Overview'", "{ id: 'overview', label: '📊 Outcomes Overview'"),
    
    # Clinical affairs
    ("<!-- ?? CLINICAL AFFAIRS:", "<!-- 🏥 CLINICAL AFFAIRS:"),
    ("<h3 style=\"margin: 0 0 1.5rem 0; color: #333;\">?? Rotation/Clinical", "<h3 style=\"margin: 0 0 1.5rem 0; color: #333;\">🏥 Rotation/Clinical"),
    ('<div style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">?? Total Submitted', '<div style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">📋 Total Submitted'),
    ('<div style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">?? In Progress', '<div style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">⏳ In Progress'),
    
    # PDF reports button
    ('onclick="app.generateStudentPDF(\'${student.id}\')">?? Download Official Report', 'onclick="app.generateStudentPDF(\'${student.id}\')">📄 Download Official Report'),
    
    # Student Performance
    ("<h3 style=\"margin:0;\">?? Student Performance Ranking", "<h3 style=\"margin:0;\">📊 Student Performance Ranking"),
    
    # Strategic Goals and Quality Survey icons
    ("icon: '??', color: '#2196f3', progress: 88", "icon: '🎓', color: '#2196f3', progress: 88"),
    ("icon: '??', color: '#9c27b0', progress: 72", "icon: '🔬', color: '#9c27b0', progress: 72"),
    ("icon: '??', color: '#4caf50', progress: 90", "icon: '🤝', color: '#4caf50', progress: 90"),
    ("icon: '??', color: '#607d8b', progress: 60", "icon: '🎓', color: '#607d8b', progress: 60"),
    ("icon: '??', color: '#673ab7', progress: 0", "icon: '🏢', color: '#673ab7', progress: 0"),
    ("icon: '??', color: '#2196f3', progress: 0", "icon: '📚', color: '#2196f3', progress: 0"),
    ("icon: '?????', color: '#00bcd4'", "icon: '👥', color: '#00bcd4'"),
    ("icon: '?????', color: '#009688'", "icon: '👨‍🏫', color: '#009688'"),
    ("icon: '??', color: '#4caf50', progress: 0,", "icon: '💼', color: '#4caf50', progress: 0,"),
    ('id: \'qs1\', title: \'Student Surveys\', icon: \'??\'', 'id: \'qs1\', title: \'Student Surveys\', icon: \'📋\''),
    ('id: \'qs2\', title: \'Faculty & Staff\', icon: \'??\'', 'id: \'qs2\', title: \'Faculty & Staff\', icon: \'👨‍🏫\''),
    ('id: \'qs3\', title: \'External Stakeholders\', icon: \'??\'', 'id: \'qs3\', title: \'External Stakeholders\', icon: \'🤝\''),
    
    # Tab labels in research unit
    ("{ id: 'strategic', label: '?? Strategic Goals'", "{ id: 'strategic', label: '🎯 Strategic Goals'"),
    ("{ id: 'pharmd', label: '?? PharmD Program KPI'", "{ id: 'pharmd', label: '💊 PharmD Program KPI'"),
    ("{ id: 'surveys', label: '?? Quality Surveys'", "{ id: 'surveys', label: '📊 Quality Surveys'"),
    ("{ id: 'plo', label: '?? Learning Outcomes (PLOs)'", "{ id: 'plo', label: '🎯 Learning Outcomes (PLOs)'"),
    ("{ id: 'faculty', label: '????? Faculty'", "{ id: 'faculty', label: '👨‍🏫 Faculty'"),
]

# Apply all replacements
original_length = len(content)
count = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new)
        count += 1

# Write back
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"✅ Replacements complete!")
print(f"✅ Successfully replaced {count}/{len(replacements)} emoji instances")
print(f"✅ File size: {len(content)} bytes (was {original_length})")
