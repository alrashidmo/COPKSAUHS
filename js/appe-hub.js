// ================================================================
//  APPE EXPERIENCE HUB  —  Clean Rebuild  v20260323
//  Live data from Supabase. No hardcoded mock data.
//  Tabs: Dashboard · Schedule · Compliance · Preferences ·
//        Auto-Match · Evaluations · Reports · Settings
// ================================================================
(function () {
    'use strict';

    /* ── Design tokens ────────────────────────────────────────── */
    const C = {
        primary:   '#1B5E20',
        primaryMd: '#2e7d32',
        primaryLt: '#43a047',
        primaryPl: '#e8f5e9',
        bg:        '#f0f4f8',
        card:      '#ffffff',
        border:    '#e2e8f0',
        text:      '#1a202c',
        muted:     '#718096',
        green:     '#276749',
        greenPl:   '#c6f6d5',
        amber:     '#b7791f',
        amberPl:   '#fefcbf',
        red:       '#9b2c2c',
        redPl:     '#fed7d7',
        blue:      '#2b6cb0',
        bluePl:    '#bee3f8',
        purple:    '#553c9a',
        purplePl:  '#e9d8fd',
    };

    /* ── Module state ─────────────────────────────────────────── */
    let _tab    = 'dashboard';
    let _loaded = false;
    let _data   = {
        students:    [],
        sites:       [],
        assignments: [],
        preferences: [],
        evaluations: [],
        settings:    { submissions_open: true, academic_year: '2025-2026' },
    };

    /* ═══════════════════════════════════════════════════════════
       PUBLIC API
    ═══════════════════════════════════════════════════════════ */
    window.renderAPPEExperienceHub = function () {
        _loaded = false;
        setTimeout(_init, 0);   // async init after DOM paint
        return _shellHTML();
    };

    /* Legacy shim — keep sidebar Student Awards working */
    if (typeof window.getAPPEContent !== 'function') {
        window.getAPPEContent = function (section) {
            return `<div style="padding:2rem;text-align:center;color:#888;">
                        <h3>${section}</h3><p>Navigate via APPE Experience Hub.</p>
                    </div>`;
        };
    }

    window.appeHubSwitchTab = function (tab) {
        _tab = tab;
        document.querySelectorAll('.appe-tab-btn').forEach(b => {
            const active = b.dataset.tab === tab;
            b.style.background     = active ? 'rgba(255,255,255,0.2)' : 'transparent';
            b.style.color          = active ? '#fff'  : 'rgba(255,255,255,0.65)';
            b.style.fontWeight     = active ? '700'   : '500';
            b.style.backdropFilter = active ? 'blur(4px)' : 'none';
        });
        const panel = document.getElementById('appe-hub-panel');
        if (panel) panel.innerHTML = _loaded ? _renderTab(tab) : _loadingHTML('Loading\u2026');
    };

    window.appeHubRefresh = async function () {
        _loaded = false;
        const panel = document.getElementById('appe-hub-panel');
        if (panel) panel.innerHTML = _loadingHTML('Refreshing data\u2026');
        await _loadData();
        _loaded = true;
        if (panel) panel.innerHTML = _renderTab(_tab);
    };

    /* ═══════════════════════════════════════════════════════════
       INIT & DATA LOADING
    ═══════════════════════════════════════════════════════════ */
    async function _init() {
        await _loadData();
        _loaded = true;
        const panel = document.getElementById('appe-hub-panel');
        if (panel) panel.innerHTML = _renderTab(_tab);
    }

    async function _loadData() {
        const sb = window.SupabaseAuth?.supabase;
        if (!sb) return;
        try {
            const [stRes, siRes, asRes, prRes, evRes, seRes] = await Promise.all([
                sb.from('students').select('*').in('cohort', ['P4','APPE','p4','appe']),
                sb.from('rotation_sites').select('*').order('site_name'),
                sb.from('rotation_assignments').select('*').order('student_score', { ascending: false }),
                sb.from('rotation_preferences').select('*').order('student_id'),
                sb.from('rotation_evaluations').select('*').order('created_at', { ascending: false }),
                sb.from('rotation_settings').select('*').eq('id', 1).maybeSingle(),
            ]);
            if (!stRes.error) _data.students    = stRes.data  || [];
            if (!siRes.error) _data.sites       = siRes.data  || [];
            if (!asRes.error) _data.assignments = asRes.data  || [];
            if (!prRes.error) _data.preferences = prRes.data  || [];
            if (!evRes.error) _data.evaluations = evRes.data  || [];
            if (!seRes.error && seRes.data) _data.settings = seRes.data;
        } catch (e) { console.warn('[APPE Hub]', e); }
    }

    /* ═══════════════════════════════════════════════════════════
       SHELL
    ═══════════════════════════════════════════════════════════ */
    function _shellHTML() {
        const TABS = [
            { id:'dashboard',   icon:'\uD83D\uDCCA', label:'Dashboard'   },
            { id:'schedule',    icon:'\uD83D\uDCC5', label:'Schedule'     },
            { id:'compliance',  icon:'\u2705',        label:'Compliance'   },
            { id:'preferences', icon:'\u2B50',        label:'Preferences'  },
            { id:'matching',    icon:'\uD83D\uDD00', label:'Auto-Match'   },
            { id:'evaluations', icon:'\uD83D\uDCDD', label:'Evaluations'  },
            { id:'reports',     icon:'\uD83D\uDCC8', label:'Reports'      },
            { id:'settings',    icon:'\u2699\uFE0F',  label:'Settings'     },
        ];
        const tabBtns = TABS.map(t => `
            <button class="appe-tab-btn" data-tab="${t.id}"
                    onclick="window.appeHubSwitchTab('${t.id}')"
                    style="display:inline-flex;align-items:center;gap:6px;padding:8px 18px;border:none;
                           border-radius:50px;cursor:pointer;font-size:0.85rem;white-space:nowrap;
                           transition:all 0.2s;
                           background:${t.id===_tab?'rgba(255,255,255,0.2)':'transparent'};
                           color:${t.id===_tab?'#fff':'rgba(255,255,255,0.65)'};
                           font-weight:${t.id===_tab?'700':'500'};
                           backdrop-filter:${t.id===_tab?'blur(4px)':'none'};">
                <span>${t.icon}</span><span>${t.label}</span>
            </button>`).join('');

        return `
        <style>
            .appe-tab-btn:hover { background:rgba(255,255,255,0.12)!important; color:#fff!important; }
            #appe-hub-panel { animation: appe-fade 0.3s ease; }
            @keyframes appe-fade { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:none; } }
            @keyframes appe-spin { to { transform:rotate(360deg); } }
        </style>
        <div style="background:${C.bg};min-height:100vh;">

            <!-- Gradient Header -->
            <div style="background:linear-gradient(135deg,#1a472a 0%,#1B5E20 45%,#2e7d32 75%,#388e3c 100%);
                        padding:1.75rem 2rem 0;position:relative;overflow:hidden;">

                <div style="position:absolute;top:-50px;right:-30px;width:220px;height:220px;
                            border-radius:50%;background:rgba(255,255,255,0.04);pointer-events:none;"></div>
                <div style="position:absolute;bottom:-70px;left:35%;width:180px;height:180px;
                            border-radius:50%;background:rgba(255,255,255,0.03);pointer-events:none;"></div>

                <!-- Title row -->
                <div style="position:relative;z-index:1;display:flex;justify-content:space-between;
                            align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem;">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <div style="width:44px;height:44px;background:rgba(255,255,255,0.15);border-radius:12px;
                                    display:flex;align-items:center;justify-content:center;font-size:1.5rem;
                                    backdrop-filter:blur(4px);">\uD83C\uDF93</div>
                        <div>
                            <h1 style="margin:0;color:#fff;font-size:1.5rem;font-weight:800;letter-spacing:-0.5px;">
                                APPE Experience Hub
                            </h1>
                            <p style="margin:3px 0 0;color:rgba(255,255,255,0.7);font-size:0.82rem;">
                                PharmD Year 5 &nbsp;&middot;&nbsp; Clinical Rotation Management
                            </p>
                        </div>
                    </div>
                    <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                        <span style="background:rgba(255,255,255,0.15);color:#fff;padding:5px 14px;
                                     border-radius:50px;font-size:0.78rem;font-weight:700;
                                     backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,0.2);">
                            \uD83D\uDCC5 ${_data.settings?.academic_year || '2025-2026'}
                        </span>
                        <button onclick="window.appeHubRefresh()"
                                style="background:rgba(255,255,255,0.12);color:rgba(255,255,255,0.9);
                                       border:1px solid rgba(255,255,255,0.25);padding:5px 14px;
                                       border-radius:50px;cursor:pointer;font-size:0.78rem;">
                            \u21BB Refresh
                        </button>
                    </div>
                </div>

                <!-- Tab bar -->
                <div style="position:relative;z-index:1;display:flex;gap:2px;overflow-x:auto;
                            padding-bottom:1px;scrollbar-width:none;-ms-overflow-style:none;">
                    ${tabBtns}
                </div>
            </div>

            <!-- Content Panel -->
            <div id="appe-hub-panel" style="padding:1.75rem 2rem;max-width:1440px;">
                ${_loadingHTML('Loading APPE data from Supabase\u2026')}
            </div>
        </div>`;
    }

    /* ═══════════════════════════════════════════════════════════
       TAB ROUTER
    ═══════════════════════════════════════════════════════════ */
    function _renderTab(tab) {
        switch (tab) {
            case 'dashboard':   return _tabDashboard();
            case 'schedule':    return _tabSchedule();
            case 'compliance':  return _tabCompliance();
            case 'preferences': return _tabPreferences();
            case 'matching':    return _tabMatching();
            case 'evaluations': return _tabEvaluations();
            case 'reports':     return _tabReports();
            case 'settings':    return _tabSettings();
            default:            return _tabDashboard();
        }
    }

    /* ═══════════════════════════════════════════════════════════
       TAB 1 - DASHBOARD
    ═══════════════════════════════════════════════════════════ */
    function _tabDashboard() {
        const { students: st, assignments: as, evaluations: ev, sites: si, settings } = _data;

        const total      = st.length;
        const assigned   = as.filter(a => a.site_id).length;
        const pct        = total ? Math.round(assigned / total * 100) : 0;
        const activeSites = si.filter(s => s.is_active !== false).length;
        const evalScores = ev.filter(e => e.overall_score || e.score || e.rating);
        const avgEval    = evalScores.length
            ? (evalScores.reduce((s,e) => s + (parseFloat(e.overall_score||e.score||e.rating)||0), 0) / evalScores.length).toFixed(1)
            : null;
        const subOpen    = settings?.submissions_open !== false;

        const kpis = [
            { icon:'\uD83D\uDC65', label:'P4 Students',  value: total || '0',     sub:'enrolled this year',          bg:'#eff6ff', ac:'#1d4ed8' },
            { icon:'\uD83D\uDCCB', label:'Assigned',      value: pct + '%',        sub:`${assigned} of ${total} placed`, bg:'#f0fdf4', ac:'#15803d' },
            { icon:'\uD83D\uDCDD', label:'Evaluations',   value: ev.length || '0', sub:'total on record',              bg:'#faf5ff', ac:'#7e22ce' },
            { icon:'\uD83C\uDFE5', label:'Active Sites',  value: activeSites||'0', sub:'accepting students',           bg:'#fffbeb', ac:'#b45309' },
        ];
        const kpiCards = kpis.map(k => `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};position:relative;overflow:hidden;">
                <div style="position:absolute;top:-16px;right:-16px;width:80px;height:80px;
                            border-radius:50%;background:${k.bg};opacity:0.7;"></div>
                <div style="font-size:1.75rem;margin-bottom:0.75rem;position:relative;">${k.icon}</div>
                <div style="font-size:2.1rem;font-weight:800;color:${k.ac};line-height:1;position:relative;">${k.value}</div>
                <div style="font-size:0.8rem;color:${C.text};font-weight:600;margin-top:5px;">${k.label}</div>
                <div style="font-size:0.72rem;color:${C.muted};margin-top:2px;">${k.sub}</div>
            </div>`).join('');

        const progress = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
                    <h3 style="margin:0;font-size:0.95rem;font-weight:700;color:${C.text};">Assignment Progress</h3>
                    <span style="font-size:2rem;font-weight:800;color:${pct>=80?C.green:pct>=50?C.amber:C.red};">${pct}%</span>
                </div>
                <div style="background:#f1f5f9;border-radius:50px;height:12px;overflow:hidden;">
                    <div style="width:${pct}%;background:linear-gradient(90deg,${C.primaryMd},${C.primaryLt});
                                height:100%;border-radius:50px;transition:width 1s ease;"></div>
                </div>
                <div style="display:flex;justify-content:space-between;margin-top:10px;">
                    <span style="font-size:0.78rem;color:${C.green};font-weight:600;">\u2713 ${assigned} assigned</span>
                    <span style="font-size:0.78rem;color:${C.muted};">\u23F3 ${total - assigned} pending</span>
                </div>
                <div style="margin-top:1.25rem;padding-top:1rem;border-top:1px solid ${C.border};
                            display:flex;gap:1rem;flex-wrap:wrap;">
                    <div style="text-align:center;flex:1;">
                        <div style="font-size:1.3rem;font-weight:700;color:${C.blue};">${as.filter(a=>a.preference_rank_received===1).length}</div>
                        <div style="font-size:0.72rem;color:${C.muted};">Got #1 Choice</div>
                    </div>
                    <div style="text-align:center;flex:1;border-left:1px solid ${C.border};border-right:1px solid ${C.border};">
                        <div style="font-size:1.3rem;font-weight:700;color:${C.purple};">${avgEval || '\u2014'}</div>
                        <div style="font-size:0.72rem;color:${C.muted};">Avg Eval Score</div>
                    </div>
                    <div style="text-align:center;flex:1;">
                        <div style="font-size:1.3rem;font-weight:700;color:${C.amber};">${new Set(as.filter(a=>a.site_id).map(a=>a.site_id)).size}</div>
                        <div style="font-size:0.72rem;color:${C.muted};">Sites Used</div>
                    </div>
                </div>
            </div>`;

        const specMap = {};
        si.forEach(s => { if (s.specialty) specMap[s.specialty] = (specMap[s.specialty]||0) + (s.available_slots||0); });
        const specEntries = Object.entries(specMap).sort((a,b)=>b[1]-a[1]).slice(0,7);
        const maxSlots    = specEntries[0]?.[1] || 1;
        const SPEC_COLORS = ['#1B5E20','#1565c0','#c62828','#e65100','#6a1b9a','#00695c','#b45309'];
        const specRows = specEntries.length
            ? specEntries.map(([sp, n], i) => `
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
                    <span style="flex:0 0 130px;font-size:0.8rem;color:${C.text};font-weight:500;
                                 overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${sp}">${sp}</span>
                    <div style="flex:1;background:#f1f5f9;border-radius:50px;height:8px;overflow:hidden;">
                        <div style="width:${Math.round(n/maxSlots*100)}%;background:${SPEC_COLORS[i%SPEC_COLORS.length]};
                                    height:100%;border-radius:50px;"></div>
                    </div>
                    <span style="flex:0 0 24px;font-size:0.75rem;color:${C.muted};text-align:right;font-weight:600;">${n}</span>
                </div>`).join('')
            : `<p style="color:${C.muted};font-size:0.85rem;text-align:center;padding:1rem 0;">No sites configured yet</p>`;

        const specChart = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1.25rem;font-size:0.95rem;font-weight:700;color:${C.text};">Slots by Specialty</h3>
                ${specRows}
            </div>`;

        const statusBanner = `
            <div style="background:${subOpen?'linear-gradient(135deg,#f0fdf4,#dcfce7)':'linear-gradient(135deg,#fff1f2,#ffe4e6)'};
                        border-radius:18px;padding:1.25rem 1.5rem;
                        border:1px solid ${subOpen?'#bbf7d0':'#fecaca'};
                        display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
                <div style="display:flex;align-items:center;gap:12px;">
                    <div style="width:40px;height:40px;border-radius:50%;
                                background:${subOpen?C.greenPl:C.redPl};
                                display:flex;align-items:center;justify-content:center;font-size:1.1rem;">
                        ${subOpen?'\uD83D\uDFE2':'\uD83D\uDD34'}
                    </div>
                    <div>
                        <div style="font-weight:700;color:${C.text};font-size:0.9rem;">
                            Submissions are ${subOpen?'Open':'Closed'}
                        </div>
                        <div style="font-size:0.78rem;color:${C.muted};margin-top:2px;">
                            ${subOpen?'Students can submit rotation preferences':'Preference portal is closed'}
                        </div>
                    </div>
                </div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    <button onclick="window.appeHubSwitchTab('preferences')"
                            style="${_btn(C.blue,C.bluePl)}">View Preferences</button>
                    <button onclick="window.appeHubSwitchTab('matching')"
                            style="${_btn(C.primary,C.primaryPl)}">Run Matching</button>
                </div>
            </div>`;

        const quickActions = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1rem;font-size:0.95rem;font-weight:700;color:${C.text};">Quick Actions</h3>
                <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
                    <button onclick="window.appeHubSwitchTab('compliance')"  style="${_qa('#ecfdf5','#065f46')}">Check Compliance</button>
                    <button onclick="window.appeHubSwitchTab('evaluations')" style="${_qa('#faf5ff','#6b21a8')}">Import Evaluations</button>
                    <button onclick="window.appeHubSwitchTab('reports')"     style="${_qa('#fff7ed','#9a3412')}">Generate Report</button>
                    <button onclick="window.appeHubSwitchTab('settings')"    style="${_qa('#f8fafc','#334155')}">Settings</button>
                </div>
            </div>`;

        return `
        <div style="display:grid;gap:1.25rem;">
            ${statusBanner}
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:1rem;">${kpiCards}</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;">${progress}${specChart}</div>
            ${quickActions}
        </div>`;
    }

    /* ═══════════════════════════════════════════════════════════
       TAB 2 - SCHEDULE
    ═══════════════════════════════════════════════════════════ */
    function _tabSchedule() {
        const { assignments: as, sites: si } = _data;
        const placed = as.filter(a => a.site_id);
        if (!placed.length) {
            return _emptyState('\uD83D\uDCC5','No Assignments Yet',
                'Run the Auto-Match algorithm to assign students to rotation sites.',
                'Run Matching',"window.appeHubSwitchTab('matching')");
        }

        const siteMap = {};
        si.forEach(s => { siteMap[s.id] = s; });

        const PALETTE = [
            {bg:'#e8f5e9',fg:'#2e7d32'},{bg:'#e3f2fd',fg:'#1565c0'},{bg:'#fce4ec',fg:'#c62828'},
            {bg:'#fff3e0',fg:'#e65100'},{bg:'#f3e5f5',fg:'#6a1b9a'},{bg:'#e0f7fa',fg:'#00695c'},
            {bg:'#fff8e1',fg:'#f57f17'},{bg:'#fbe9e7',fg:'#bf360c'},{bg:'#e8eaf6',fg:'#283593'},
            {bg:'#f9fbe7',fg:'#558b2f'},
        ];
        const allSpecs = [...new Set(si.map(s=>s.specialty).filter(Boolean))].sort();
        const specIdx  = {};
        allSpecs.forEach((sp,i) => { specIdx[sp] = i; });
        const sc = sp => PALETTE[(specIdx[sp] ?? 0) % PALETTE.length];

        const bySite = {};
        placed.forEach(a => {
            const key = a.site_id;
            if (!bySite[key]) bySite[key] = { site: siteMap[a.site_id]||{}, students: [] };
            bySite[key].students.push(a);
        });

        const siteCards = Object.values(bySite)
            .sort((a,b) => (a.site.site_name||'').localeCompare(b.site.site_name||''))
            .map(({ site, students }) => {
                const c = sc(site.specialty);
                const stuRows = students.map(s => {
                    const rank = s.preference_rank_received;
                    const [rankBg, rankFg] = rank===1 ? [C.greenPl,C.green] : rank<=3 ? [C.amberPl,C.amber] : [C.bluePl,C.blue];
                    return `
                    <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${C.border};">
                        <div style="width:32px;height:32px;border-radius:50%;background:${c.bg};
                                    display:flex;align-items:center;justify-content:center;
                                    font-size:0.75rem;font-weight:700;color:${c.fg};flex-shrink:0;">
                            ${(s.student_name||'?').charAt(0).toUpperCase()}
                        </div>
                        <div style="flex:1;min-width:0;">
                            <div style="font-size:0.85rem;font-weight:600;color:${C.text};
                                        white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
                                ${s.student_name || s.student_id}
                            </div>
                            <div style="font-size:0.72rem;color:${C.muted};">Score: ${s.student_score ?? '\u2014'}</div>
                        </div>
                        <span style="background:${rankBg};color:${rankFg};padding:2px 9px;
                                     border-radius:50px;font-size:0.7rem;font-weight:700;white-space:nowrap;">
                            ${rank ? '#'+rank+' choice' : s.assignment_method||'auto'}
                        </span>
                    </div>`;
                }).join('');

                return `
                <div style="background:${C.card};border-radius:18px;overflow:hidden;
                            box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                            border:1px solid ${C.border};">
                    <div style="padding:1rem 1.25rem;background:${c.bg};border-bottom:3px solid ${c.fg}25;">
                        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
                            <div>
                                <div style="font-weight:700;color:${C.text};font-size:0.92rem;margin-bottom:2px;">
                                    ${site.site_name || 'Site ' + site.id}
                                </div>
                                <div style="font-size:0.75rem;color:${C.muted};">${site.location||''}</div>
                            </div>
                            <div style="text-align:right;flex-shrink:0;">
                                <span style="background:${c.bg};color:${c.fg};border:1px solid ${c.fg}40;
                                             padding:3px 10px;border-radius:50px;font-size:0.72rem;font-weight:700;">
                                    ${site.specialty||'\u2014'}
                                </span>
                                <div style="font-size:0.7rem;color:${C.muted};margin-top:5px;">
                                    ${students.length} student${students.length!==1?'s':''}
                                </div>
                            </div>
                        </div>
                        ${site.preceptor_name ? `
                        <div style="margin-top:8px;font-size:0.78rem;color:${C.muted};">
                            ${site.preceptor_name}
                            ${site.preceptor_email ? ` &middot; <a href="mailto:${site.preceptor_email}" style="color:${C.blue};text-decoration:none;">${site.preceptor_email}</a>` : ''}
                        </div>` : ''}
                    </div>
                    <div style="padding:0.25rem 1.25rem 1rem;">${stuRows}</div>
                </div>`;
            }).join('');

        const unassigned = _data.students.length - placed.length;
        return `
        <div style="display:grid;gap:1.25rem;">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
                <div>
                    <h2 style="margin:0;font-size:1.15rem;font-weight:700;color:${C.text};">Rotation Schedule</h2>
                    <p style="margin:4px 0 0;font-size:0.82rem;color:${C.muted};">
                        ${placed.length} placed across ${Object.keys(bySite).length} sites
                        ${unassigned > 0 ? ` &middot; <span style="color:${C.amber};font-weight:600;">${unassigned} unassigned</span>` : ''}
                    </p>
                </div>
                <button onclick="window.appeHubSwitchTab('matching')"
                        style="background:${C.primary};color:#fff;border:none;padding:8px 20px;
                               border-radius:50px;cursor:pointer;font-size:0.85rem;font-weight:700;">
                    Re-run Matching
                </button>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:1.25rem;">
                ${siteCards}
            </div>
        </div>`;
    }

    /* ═══════════════════════════════════════════════════════════
       TAB 3 - COMPLIANCE
    ═══════════════════════════════════════════════════════════ */
    const COMPLIANCE_ITEMS = [
        { key:'bls',        label:'BLS Cert.',      icon:'\u2764\uFE0F'  },
        { key:'tb',         label:'TB Test',         icon:'\uD83E\uDEB1'  },
        { key:'background', label:'Background',      icon:'\uD83D\uDD0D'  },
        { key:'hepb',       label:'Hep B Vaccine',   icon:'\uD83D\uDC89'  },
    ];

    function _getComplianceStore() {
        try { return JSON.parse(localStorage.getItem('appe_compliance')||'{}'); } catch(e) { return {}; }
    }

    function _tabCompliance() {
        const { students } = _data;
        if (!students.length) {
            return _emptyState('\u2705','No Students Found',
                'Ensure P4 students are in Supabase with cohort = "P4" or "APPE".');
        }

        const stored = _getComplianceStore();
        let greenC=0, yellowC=0, redC=0;
        students.forEach(s => {
            const rec      = stored[s.id] || {};
            const statuses = COMPLIANCE_ITEMS.map(it => rec[it.key]||'missing');
            if (statuses.every(st=>st==='ok'))                        greenC++;
            else if (statuses.some(st=>st==='missing'||st==='expired')) redC++;
            else                                                        yellowC++;
        });

        const summaryCards = [
            { label:'Fully Compliant', count:greenC,  icon:'\u2705', col:C.green, pale:C.greenPl },
            { label:'Needs Attention', count:yellowC, icon:'\u26A0\uFE0F', col:C.amber, pale:C.amberPl },
            { label:'Non-Compliant',   count:redC,    icon:'\u274C', col:C.red,   pale:C.redPl   },
        ].map(c => `
            <div style="background:${c.pale};border-radius:16px;padding:1.25rem;text-align:center;
                        border:1px solid ${c.col}20;flex:1;min-width:130px;">
                <div style="font-size:1.5rem;margin-bottom:6px;">${c.icon}</div>
                <div style="font-size:2rem;font-weight:800;color:${c.col};line-height:1;">${c.count}</div>
                <div style="font-size:0.78rem;color:${c.col};font-weight:600;margin-top:4px;">${c.label}</div>
            </div>`).join('');

        const chip = (status) => {
            const map = {
                ok:       [C.green, C.greenPl, '\u2713 OK'     ],
                expiring: [C.amber, C.amberPl, '\u26A0 Expiring'],
                expired:  [C.red,   C.redPl,   '\u2715 Expired' ],
                missing:  [C.muted, '#f1f5f9',  '\u2014 Missing' ],
            };
            const [fg, bg, lbl] = map[status] || map['missing'];
            return `<span style="background:${bg};color:${fg};padding:3px 10px;border-radius:50px;
                                 font-size:0.72rem;font-weight:700;cursor:pointer;user-select:none;"
                         title="Click to cycle status">${lbl}</span>`;
        };

        const rows = students.map(s => {
            const rec   = stored[s.id] || {};
            const allOk = COMPLIANCE_ITEMS.every(it=>(rec[it.key]||'missing')==='ok');
            const cells = COMPLIANCE_ITEMS.map(it =>
                `<td style="padding:10px 12px;text-align:center;"
                      onclick="window.appeHubCycleCompliance('${s.id}','${it.key}')">
                    ${chip(rec[it.key]||'missing')}
                 </td>`).join('');
            return `<tr style="border-bottom:1px solid ${C.border};${allOk?'background:#fafffe;':''}">
                <td style="padding:10px 14px;">
                    <div style="font-weight:600;color:${C.text};font-size:0.85rem;">${s.name||s.id}</div>
                    <div style="font-size:0.72rem;color:${C.muted};">${s.id}</div>
                </td>
                ${cells}
            </tr>`;
        }).join('');

        return `
        <div style="display:grid;gap:1.25rem;">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
                <div>
                    <h2 style="margin:0;font-size:1.15rem;font-weight:700;color:${C.text};">Compliance Tracker</h2>
                    <p style="margin:4px 0 0;font-size:0.82rem;color:${C.muted};">Click any badge to cycle: Missing &rarr; OK &rarr; Expiring &rarr; Expired</p>
                </div>
                <button onclick="window.appeHubExportCompliance()"
                        style="background:${C.primary};color:#fff;border:none;padding:8px 20px;
                               border-radius:50px;cursor:pointer;font-size:0.85rem;font-weight:700;">
                    Export CSV
                </button>
            </div>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;">${summaryCards}</div>
            <div style="background:${C.card};border-radius:18px;overflow:hidden;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <div style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;">
                        <thead>
                            <tr style="background:#f8fafc;border-bottom:2px solid ${C.border};">
                                <th style="${_th('left')}">Student</th>
                                ${COMPLIANCE_ITEMS.map(it => `<th style="${_th('center')}">${it.icon} ${it.label}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            </div>
        </div>`;
    }

    window.appeHubCycleCompliance = function (sid, key) {
        const stored = _getComplianceStore();
        if (!stored[sid]) stored[sid] = {};
        const cycle  = { missing:'ok', ok:'expiring', expiring:'expired', expired:'missing' };
        stored[sid][key] = cycle[stored[sid][key] || 'missing'];
        localStorage.setItem('appe_compliance', JSON.stringify(stored));
        const panel = document.getElementById('appe-hub-panel');
        if (panel) panel.innerHTML = _tabCompliance();
    };

    window.appeHubExportCompliance = function () {
        const stored  = _getComplianceStore();
        const headers = ['Student Name','Student ID',...COMPLIANCE_ITEMS.map(i=>i.label)];
        const rows    = _data.students.map(s => {
            const rec = stored[s.id] || {};
            return [s.name||'', s.id, ...COMPLIANCE_ITEMS.map(i=>rec[i.key]||'missing')];
        });
        _downloadCSV('appe_compliance.csv', [headers, ...rows]);
    };

    /* ═══════════════════════════════════════════════════════════
       TAB 4 - PREFERENCES
    ═══════════════════════════════════════════════════════════ */
    function _tabPreferences() {
        const { students, preferences, settings } = _data;
        if (!students.length) {
            return _emptyState('\u2B50','No Students Found',
                'Add P4 students to Supabase to track preference submissions.');
        }

        const submittedIds = new Set(preferences.map(p => String(p.student_id)));
        const submitted    = students.filter(s => submittedIds.has(String(s.id)));
        const notSub       = students.filter(s => !submittedIds.has(String(s.id)));
        const pct          = students.length ? Math.round(submitted.length / students.length * 100) : 0;
        const subOpen      = settings?.submissions_open !== false;

        const donut = `
            <div style="background:${C.card};border-radius:18px;padding:2rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};
                        display:flex;align-items:center;gap:2rem;flex-wrap:wrap;">
                <div style="flex-shrink:0;">
                    <div style="width:130px;height:130px;border-radius:50%;
                                background:conic-gradient(${C.primaryMd} ${pct*3.6}deg,#e2e8f0 0deg);
                                display:flex;align-items:center;justify-content:center;">
                        <div style="width:88px;height:88px;border-radius:50%;background:#fff;
                                    display:flex;flex-direction:column;align-items:center;justify-content:center;
                                    box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                            <span style="font-size:1.4rem;font-weight:800;color:${C.text};line-height:1;">${pct}%</span>
                            <span style="font-size:0.62rem;color:${C.muted};">submitted</span>
                        </div>
                    </div>
                </div>
                <div style="flex:1;min-width:200px;">
                    <div style="font-size:1.5rem;font-weight:800;color:${C.text};">
                        ${submitted.length}
                        <span style="font-size:0.9rem;color:${C.muted};font-weight:400;">of ${students.length} submitted</span>
                    </div>
                    <div style="margin-top:12px;background:#f1f5f9;border-radius:50px;height:8px;overflow:hidden;">
                        <div style="width:${pct}%;background:linear-gradient(90deg,${C.primaryMd},${C.primaryLt});
                                    height:100%;border-radius:50px;"></div>
                    </div>
                    <div style="margin-top:10px;display:flex;gap:1.5rem;">
                        <span style="font-size:0.78rem;color:${C.green};font-weight:600;">&bull; ${submitted.length} submitted</span>
                        <span style="font-size:0.78rem;color:${C.muted};">&bull; ${notSub.length} pending</span>
                    </div>
                </div>
                <div>
                    <button onclick="window.appeHubToggleSubmissions()"
                            style="background:${subOpen?C.red:C.green};color:#fff;border:none;
                                   padding:10px 22px;border-radius:50px;cursor:pointer;
                                   font-size:0.85rem;font-weight:700;">
                        ${subOpen ? 'Close Portal' : 'Open Portal'}
                    </button>
                </div>
            </div>`;

        const mkList = (title, list, tagBg, tagFg, tagText) => `
            <div style="background:${C.card};border-radius:18px;padding:1.25rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 0.75rem;font-size:0.9rem;font-weight:700;color:${tagFg};">${title}</h3>
                ${list.length === 0
                    ? `<p style="color:${C.muted};font-size:0.85rem;text-align:center;padding:1.5rem 0;">
                           ${tagText.includes('Submitted') ? 'None yet' : 'All submitted!'}
                       </p>`
                    : list.slice(0,30).map(s => `
                        <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${C.border};">
                            <div style="width:30px;height:30px;border-radius:50%;background:${tagBg};
                                        display:flex;align-items:center;justify-content:center;
                                        font-size:0.75rem;font-weight:700;color:${tagFg};flex-shrink:0;">
                                ${(s.name||'?').charAt(0).toUpperCase()}
                            </div>
                            <span style="flex:1;font-size:0.85rem;font-weight:500;color:${C.text};">${s.name||s.id}</span>
                            <span style="background:${tagBg};color:${tagFg};padding:2px 9px;
                                         border-radius:50px;font-size:0.7rem;font-weight:700;">${tagText}</span>
                        </div>`).join('')
                }
            </div>`;

        return `
        <div style="display:grid;gap:1.25rem;">
            <h2 style="margin:0;font-size:1.15rem;font-weight:700;color:${C.text};">Student Preferences</h2>
            ${donut}
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;">
                ${mkList(`\u2713 Submitted (${submitted.length})`, submitted, C.greenPl, C.green, '\u2713 Submitted')}
                ${mkList(`\u23F3 Pending (${notSub.length})`,      notSub,    C.amberPl, C.amber, '\u23F3 Pending')}
            </div>
        </div>`;
    }

    window.appeHubToggleSubmissions = async function () {
        const sb  = window.SupabaseAuth?.supabase;
        const cur = _data.settings?.submissions_open !== false;
        if (sb) {
            const { error } = await sb.from('rotation_settings')
                .upsert({ id:1, submissions_open: !cur }, { onConflict:'id' });
            if (error) { alert('Error: ' + error.message); return; }
        }
        _data.settings.submissions_open = !cur;
        const panel = document.getElementById('appe-hub-panel');
        if (panel) panel.innerHTML = _renderTab(_tab);
    };

    /* ═══════════════════════════════════════════════════════════
       TAB 5 - AUTO-MATCH
    ═══════════════════════════════════════════════════════════ */
    function _tabMatching() {
        const weights = (() => {
            try { return JSON.parse(localStorage.getItem('appe_match_weights')||'null'); } catch(e) {}
            return null;
        })() || { preference: 50, score: 30, balance: 20 };

        const total = weights.preference + weights.score + weights.balance;
        const valid = Math.abs(total - 100) <= 1;

        const sliders = [
            { key:'preference', label:'Student Preference', col:C.primaryMd, desc:'Priority given to ranked site choices' },
            { key:'score',      label:'Academic Score',     col:C.blue,      desc:'Higher GPA students get priority picks' },
            { key:'balance',    label:'Site Balance',       col:C.purple,    desc:'Distribute students evenly across sites' },
        ];

        const sliderHTML = sliders.map(s => `
            <div style="background:#f8fafc;border-radius:14px;padding:1.25rem;border:1px solid ${C.border};margin-bottom:0.75rem;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                    <div>
                        <div style="font-size:0.88rem;font-weight:700;color:${C.text};">${s.label}</div>
                        <div style="font-size:0.72rem;color:${C.muted};margin-top:2px;">${s.desc}</div>
                    </div>
                    <span id="wt-val-${s.key}"
                          style="font-size:1.3rem;font-weight:800;color:${s.col};min-width:52px;text-align:right;">
                        ${weights[s.key]}%
                    </span>
                </div>
                <input type="range" min="0" max="100" value="${weights[s.key]}" id="wt-${s.key}"
                       oninput="window.appeHubUpdateWeight('${s.key}',this.value)"
                       style="width:100%;accent-color:${s.col};height:6px;border-radius:50px;cursor:pointer;">
            </div>`).join('');

        const warn = !valid
            ? `<div style="background:${C.amberPl};color:${C.amber};padding:10px 14px;border-radius:10px;
                           font-size:0.82rem;font-weight:600;margin-bottom:1rem;border:1px solid ${C.amber}30;">
                   Weights sum to ${total}%. Must add up to 100%.
               </div>` : '';

        const { assignments: as, students: st, sites: si } = _data;
        const placed    = as.filter(a => a.site_id).length;
        const choice1   = as.filter(a => a.preference_rank_received === 1).length;
        const sitesUsed = new Set(as.filter(a=>a.site_id).map(a=>a.site_id)).size;
        const pending   = st.filter(s => !as.find(a=>String(a.student_id)===String(s.id)&&a.site_id)).length;

        return `
        <div style="display:grid;gap:1.25rem;">
            <h2 style="margin:0;font-size:1.15rem;font-weight:700;color:${C.text};">Auto-Match Algorithm</h2>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;align-items:start;">

                <div style="background:${C.card};border-radius:18px;padding:1.75rem;
                            box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                            border:1px solid ${C.border};">
                    <h3 style="margin:0 0 1.25rem;font-size:0.95rem;font-weight:700;color:${C.text};">Configure Weights</h3>
                    ${sliderHTML}
                    ${warn}
                    <div style="display:flex;gap:10px;margin-top:1rem;">
                        <button onclick="window.appeHubRunMatch()"
                                style="flex:1;background:${valid?C.primary:'#ccc'};color:#fff;border:none;
                                       padding:12px;border-radius:10px;cursor:${valid?'pointer':'not-allowed'};
                                       font-size:0.9rem;font-weight:700;">
                            Run Matching
                        </button>
                        <button onclick="window.appeHubResetWeights()"
                                style="background:#f1f5f9;color:${C.muted};border:none;
                                       padding:12px 16px;border-radius:10px;cursor:pointer;font-size:0.85rem;">
                            Reset
                        </button>
                    </div>
                </div>

                <div style="display:grid;gap:1rem;">
                    <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                                box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                                border:1px solid ${C.border};">
                        <h3 style="margin:0 0 1rem;font-size:0.95rem;font-weight:700;color:${C.text};">Current Results</h3>
                        ${[
                            ['Assigned / Total',  placed + ' / ' + st.length, C.green   ],
                            ['Got #1 Choice',     choice1,                     C.primaryMd],
                            ['Sites in Use',      sitesUsed,                   C.blue    ],
                            ['Still Unassigned',  pending, pending>0?C.amber:C.muted],
                        ].map(([lbl,val,col]) => `
                            <div style="display:flex;justify-content:space-between;align-items:center;
                                        padding:10px 0;border-bottom:1px solid ${C.border};">
                                <span style="font-size:0.85rem;color:${C.muted};">${lbl}</span>
                                <span style="font-size:1.05rem;font-weight:700;color:${col};">${val}</span>
                            </div>`).join('')}
                    </div>

                    <div style="background:${C.primaryPl};border:2px dashed ${C.primaryMd}50;
                                border-radius:18px;padding:1.5rem;text-align:center;">
                        <div style="font-size:2.5rem;margin-bottom:10px;">\uD83D\uDD00</div>
                        <div style="font-size:0.85rem;font-weight:600;color:${C.primary};line-height:1.6;">
                            Adjust weights then click Run Matching. Results are written directly to Supabase.
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    window.appeHubUpdateWeight = function (key, val) {
        const el = document.getElementById('wt-val-' + key);
        if (el) el.textContent = val + '%';
        const w = {};
        ['preference','score','balance'].forEach(k => {
            w[k] = parseInt(document.getElementById('wt-' + k)?.value || 0);
        });
        localStorage.setItem('appe_match_weights', JSON.stringify(w));
        const total = Object.values(w).reduce((a,b)=>a+b,0);
        const btn   = document.querySelector('[onclick="window.appeHubRunMatch()"]');
        if (btn) {
            const ok = Math.abs(total-100) <= 1;
            btn.style.background = ok ? C.primary : '#ccc';
            btn.style.cursor     = ok ? 'pointer'  : 'not-allowed';
        }
    };

    window.appeHubResetWeights = function () {
        localStorage.removeItem('appe_match_weights');
        const panel = document.getElementById('appe-hub-panel');
        if (panel) panel.innerHTML = _tabMatching();
    };

    window.appeHubRunMatch = async function () {
        const sb = window.SupabaseAuth?.supabase;
        if (!sb) { alert('Supabase not connected.'); return; }

        const w = (() => {
            try { return JSON.parse(localStorage.getItem('appe_match_weights')||'null'); } catch(e) {}
            return null;
        })() || { preference:50, score:30, balance:20 };

        if (Math.abs(w.preference + w.score + w.balance - 100) > 1) {
            alert('Weights must sum to 100.'); return;
        }

        const { students, sites, assignments, preferences } = _data;
        const activeSites = sites.filter(s => s.is_active !== false);
        const unassigned  = students.filter(s =>
            !assignments.find(a => String(a.student_id)===String(s.id) && a.site_id)
        );

        if (!unassigned.length) { alert('All students are already assigned!'); return; }
        if (!activeSites.length){ alert('No active sites available.');          return; }

        const prefMap = {};
        preferences.forEach(p => {
            if (!prefMap[p.student_id]) prefMap[p.student_id] = [];
            prefMap[p.student_id].push({ rank: p.preference_rank, site_id: p.site_id });
        });
        Object.values(prefMap).forEach(arr => arr.sort((a,b)=>a.rank-b.rank));

        const usedSlots = {};
        assignments.filter(a=>a.site_id).forEach(a => {
            usedSlots[a.site_id] = (usedSlots[a.site_id]||0) + 1;
        });

        const sorted = [...unassigned].sort((a,b) => (b.gpa||0)-(a.gpa||0));
        const results = [];

        sorted.forEach(student => {
            const prefs  = prefMap[student.id] || [];
            let bestSite = null, bestRank = null;
            for (const pref of prefs) {
                const site = activeSites.find(s => s.id === pref.site_id);
                if (!site) continue;
                if ((usedSlots[site.id]||0) < (site.available_slots||1)) {
                    bestSite = site; bestRank = pref.rank; break;
                }
            }
            if (!bestSite) {
                const avail = activeSites.filter(s => (usedSlots[s.id]||0) < (s.available_slots||1));
                if (avail.length) {
                    bestSite = avail.sort((a,b) =>
                        (usedSlots[a.id]||0)/(a.available_slots||1) -
                        (usedSlots[b.id]||0)/(b.available_slots||1)
                    )[0];
                }
            }
            if (bestSite) {
                usedSlots[bestSite.id] = (usedSlots[bestSite.id]||0) + 1;
                results.push({
                    student_id:               student.id,
                    student_name:             student.name || student.id,
                    site_id:                  bestSite.id,
                    assignment_method:        bestRank ? 'preference' : 'fallback',
                    preference_rank_received: bestRank || null,
                });
            }
        });

        if (!results.length) { alert('No assignments could be generated.'); return; }

        const byPref    = results.filter(r=>r.preference_rank_received).length;
        const byFallback = results.length - byPref;
        if (!confirm(
            `Assign ${results.length} student${results.length!==1?'s':''}?\n` +
            `  ${byPref} matched by preference\n` +
            `  ${byFallback} assigned by fallback\n\nThis writes to Supabase. Continue?`
        )) return;

        try {
            const { error } = await sb.from('rotation_assignments')
                .upsert(results, { onConflict: 'student_id' });
            if (error) throw error;
            alert(`${results.length} students assigned successfully!`);
            await _loadData();
            const panel = document.getElementById('appe-hub-panel');
            if (panel) panel.innerHTML = _tabMatching();
        } catch (e) { alert('Error: ' + e.message); }
    };

    /* ═══════════════════════════════════════════════════════════
       TAB 6 - EVALUATIONS
    ═══════════════════════════════════════════════════════════ */
    function _tabEvaluations() {
        const { evaluations: evs } = _data;
        const evalScores = evs.filter(e => e.overall_score || e.score || e.rating);
        const avgScore   = evalScores.length
            ? (evalScores.reduce((s,e)=>s+(parseFloat(e.overall_score||e.score||e.rating)||0),0)/evalScores.length).toFixed(1)
            : null;

        const statCards = [
            { label:'Total Evaluations', value: evs.length,   col:C.blue   },
            { label:'Average Score',     value: avgScore ? avgScore+'/5' : '\u2014', col:C.green  },
            { label:'Unique Students',   value: new Set(evs.map(e=>e.student_id).filter(Boolean)).size, col:C.purple },
        ].map(c => `
            <div style="background:${C.card};border-radius:14px;padding:1.25rem;text-align:center;
                        border:1px solid ${C.border};box-shadow:0 1px 3px rgba(0,0,0,0.05);flex:1;">
                <div style="font-size:1.8rem;font-weight:800;color:${c.col};">${c.value}</div>
                <div style="font-size:0.78rem;color:${C.muted};margin-top:4px;font-weight:500;">${c.label}</div>
            </div>`).join('');

        const rows = evs.length
            ? evs.slice(0,60).map(e => {
                const score = parseFloat(e.overall_score || e.score || e.rating);
                const [sfg, sbg] = !isNaN(score)
                    ? score>=4 ? [C.green,C.greenPl] : score>=3 ? [C.amber,C.amberPl] : [C.red,C.redPl]
                    : [C.muted,'#f1f5f9'];
                return `<tr style="border-bottom:1px solid ${C.border};">
                    <td style="padding:10px 14px;font-size:0.85rem;font-weight:600;color:${C.text};">
                        ${e.student_name || e.student_id || '\u2014'}
                    </td>
                    <td style="padding:10px 14px;font-size:0.82rem;color:${C.muted};">${e.rotation_name||e.rotation||'\u2014'}</td>
                    <td style="padding:10px 14px;font-size:0.82rem;color:${C.muted};">${e.preceptor_name||e.preceptor||'\u2014'}</td>
                    <td style="padding:10px 14px;text-align:center;">
                        ${!isNaN(score)
                            ? `<span style="background:${sbg};color:${sfg};padding:3px 10px;border-radius:50px;font-size:0.8rem;font-weight:700;">${score}/5</span>`
                            : `<span style="color:#ccc;">\u2014</span>`}
                    </td>
                    <td style="padding:10px 14px;font-size:0.78rem;color:${C.muted};">
                        ${e.created_at ? new Date(e.created_at).toLocaleDateString() : '\u2014'}
                    </td>
                </tr>`;
            }).join('')
            : `<tr><td colspan="5" style="text-align:center;padding:3rem;color:${C.muted};">
                   <div style="font-size:2.5rem;margin-bottom:10px;">\uD83D\uDCDD</div>
                   No evaluations yet. Import from Microsoft Forms CSV above.
               </td></tr>`;

        return `
        <div style="display:grid;gap:1.25rem;">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
                <div>
                    <h2 style="margin:0;font-size:1.15rem;font-weight:700;color:${C.text};">Evaluations</h2>
                    <p style="margin:4px 0 0;font-size:0.82rem;color:${C.muted};">${evs.length} evaluation${evs.length!==1?'s':''} on record</p>
                </div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    <button onclick="document.getElementById('appe-eval-csv').click()"
                            style="${_btn(C.blue,C.bluePl)}">Import CSV</button>
                    <input type="file" id="appe-eval-csv" accept=".csv" style="display:none;"
                           onchange="window.appeHubImportCSV(this)">
                    <button onclick="window.appeHubExportEvals()"
                            style="${_btn(C.primary,C.primaryPl)}">Export</button>
                </div>
            </div>

            <div style="display:flex;gap:1rem;flex-wrap:wrap;">${statCards}</div>

            <div style="background:${C.primaryPl};border-radius:14px;padding:1.25rem;border:1px solid ${C.primaryMd}20;">
                <h4 style="margin:0 0 6px;font-size:0.88rem;font-weight:700;color:${C.primary};">CSV Format</h4>
                <p style="margin:0;font-size:0.8rem;color:${C.primaryMd};line-height:1.5;">
                    Columns: <code>student_id, student_name, rotation_name, preceptor_name, overall_score</code>
                    &mdash; Scores on a 1&ndash;5 scale. Export directly from Microsoft Forms.
                </p>
            </div>

            <div style="background:${C.card};border-radius:18px;overflow:hidden;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <div style="overflow-x:auto;">
                    <table style="width:100%;border-collapse:collapse;">
                        <thead>
                            <tr style="background:#f8fafc;border-bottom:2px solid ${C.border};">
                                ${['Student','Rotation','Preceptor','Score','Date'].map((h,i) =>
                                    `<th style="${_th(i===3?'center':'left')}">${h}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            </div>
        </div>`;
    }

    window.appeHubImportCSV = async function (input) {
        const file = input.files[0];
        if (!file) return;
        const text    = await file.text();
        const lines   = text.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/["']/g,''));
        const records = lines.slice(1)
            .map(line => {
                const vals = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/);
                const obj  = {};
                headers.forEach((h,i) => { obj[h] = (vals[i]||'').replace(/^"|"$/g,'').trim(); });
                return obj;
            })
            .filter(r => r.student_id || r.student_name)
            .map(r => ({
                student_id:    r.student_id    || null,
                student_name:  r.student_name  || null,
                rotation_name: r.rotation_name || r.rotation  || null,
                preceptor_name:r.preceptor_name|| r.preceptor || null,
                overall_score: parseFloat(r.overall_score||r.score||r.rating) || null,
            }));

        if (!records.length) { alert('No valid records found in CSV.'); input.value=''; return; }
        const sb = window.SupabaseAuth?.supabase;
        if (!sb) { alert('Supabase not connected.'); return; }
        try {
            const { error } = await sb.from('rotation_evaluations').insert(records);
            if (error) throw error;
            alert(records.length + ' evaluations imported!');
            await _loadData();
            const panel = document.getElementById('appe-hub-panel');
            if (panel) panel.innerHTML = _tabEvaluations();
        } catch (e) { alert('Import error: ' + e.message); }
        input.value = '';
    };

    window.appeHubExportEvals = function () {
        _downloadCSV('appe_evaluations.csv', [
            ['Student Name','Student ID','Rotation','Preceptor','Score','Date'],
            ..._data.evaluations.map(e => [
                e.student_name||'', e.student_id||'',
                e.rotation_name||'', e.preceptor_name||'',
                e.overall_score||'',
                e.created_at ? new Date(e.created_at).toLocaleDateString() : '',
            ]),
        ]);
    };

    /* ═══════════════════════════════════════════════════════════
       TAB 7 - REPORTS
    ═══════════════════════════════════════════════════════════ */
    function _tabReports() {
        const REPORTS = [
            { icon:'\uD83D\uDCCB', title:'Assignment Summary',  desc:'All student-site assignments with match method and score.',        col:C.blue,      pale:C.bluePl,   key:'assignments'  },
            { icon:'\u2705',        title:'Compliance Report',   desc:'Per-student BLS, TB Test, Background Check, and Hep B status.',   col:C.green,     pale:C.greenPl,  key:'compliance'   },
            { icon:'\uD83D\uDCDD', title:'Evaluation Report',   desc:'All scores by student, rotation, and preceptor with averages.',    col:C.purple,    pale:C.purplePl, key:'evaluations'  },
            { icon:'\uD83C\uDFE5', title:'Site Utilisation',    desc:'Students placed vs. available slots per rotation site.',           col:C.amber,     pale:C.amberPl,  key:'sites'        },
            { icon:'\u2B50',        title:'Preference Analysis', desc:'Submission rates, ranked choices, and unmatched preferences.',     col:C.primaryMd, pale:C.primaryPl,key:'preferences'  },
        ];

        const cards = REPORTS.map(r => `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};display:flex;flex-direction:column;gap:1.25rem;">
                <div style="display:flex;align-items:flex-start;gap:14px;">
                    <div style="width:48px;height:48px;border-radius:14px;background:${r.pale};
                                display:flex;align-items:center;justify-content:center;
                                font-size:1.4rem;flex-shrink:0;border:1px solid ${r.col}15;">${r.icon}</div>
                    <div>
                        <div style="font-weight:700;color:${C.text};font-size:0.92rem;margin-bottom:4px;">${r.title}</div>
                        <div style="font-size:0.78rem;color:${C.muted};line-height:1.4;">${r.desc}</div>
                    </div>
                </div>
                <div style="display:flex;gap:8px;margin-top:auto;">
                    <button onclick="window.appeHubPrintReport('${r.key}')"
                            style="flex:1;background:${r.col};color:#fff;border:none;padding:9px;
                                   border-radius:10px;cursor:pointer;font-size:0.82rem;font-weight:700;">
                        Print / PDF
                    </button>
                    <button onclick="window.appeHubExportCSV_report('${r.key}')"
                            style="background:#f1f5f9;color:${C.muted};border:1px solid ${C.border};
                                   padding:9px 14px;border-radius:10px;cursor:pointer;font-size:0.82rem;font-weight:600;">
                        CSV
                    </button>
                </div>
            </div>`).join('');

        return `
        <div style="display:grid;gap:1.25rem;">
            <h2 style="margin:0;font-size:1.15rem;font-weight:700;color:${C.text};">Reports &amp; Exports</h2>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.25rem;">
                ${cards}
            </div>
        </div>`;
    }

    window.appeHubPrintReport = function (type) {
        const win  = window.open('', '_blank', 'width=960,height=720');
        const year = _data.settings?.academic_year || '2025-2026';
        let title  = '', body = '';

        if (type === 'assignments') {
            title = 'Assignment Summary';
            const rows = _data.assignments.filter(a=>a.site_id).map((a,i) => {
                const site = _data.sites.find(s=>s.id===a.site_id) || {};
                return `<tr><td>${i+1}</td><td><strong>${a.student_name||a.student_id}</strong></td>
                         <td>${site.site_name||'&mdash;'}</td><td>${site.specialty||'&mdash;'}</td>
                         <td>${a.preference_rank_received ? '#'+a.preference_rank_received+' choice' : a.assignment_method||'&mdash;'}</td>
                         <td>${a.student_score ?? '&mdash;'}</td></tr>`;
            }).join('');
            body = `<table><thead><tr style="background:#e8f5e9"><th>#</th><th>Student</th><th>Site</th><th>Specialty</th><th>Match</th><th>Score</th></tr></thead><tbody>${rows}</tbody></table>`;
        } else if (type === 'evaluations') {
            title = 'Evaluation Report';
            const rows = _data.evaluations.map((e,i) =>
                `<tr><td>${i+1}</td><td>${e.student_name||e.student_id||'&mdash;'}</td>
                 <td>${e.rotation_name||'&mdash;'}</td><td>${e.preceptor_name||'&mdash;'}</td>
                 <td>${e.overall_score??'&mdash;'}/5</td></tr>`).join('');
            body = `<table><thead><tr style="background:#f3e5f5"><th>#</th><th>Student</th><th>Rotation</th><th>Preceptor</th><th>Score</th></tr></thead><tbody>${rows}</tbody></table>`;
        } else if (type === 'sites') {
            title = 'Site Utilisation';
            const rows = _data.sites.map((s,i) => {
                const n = _data.assignments.filter(a=>a.site_id===s.id).length;
                return `<tr><td>${i+1}</td><td>${s.site_name}</td><td>${s.specialty||'&mdash;'}</td>
                         <td>${n}</td><td>${s.available_slots||'&mdash;'}</td>
                         <td>${s.available_slots ? Math.round(n/s.available_slots*100)+'%' : '&mdash;'}</td></tr>`;
            }).join('');
            body = `<table><thead><tr style="background:#fff3e0"><th>#</th><th>Site</th><th>Specialty</th><th>Students</th><th>Slots</th><th>Utilisation</th></tr></thead><tbody>${rows}</tbody></table>`;
        } else if (type === 'compliance') {
            title = 'Compliance Report';
            const stored = _getComplianceStore();
            const rows   = _data.students.map((s,i) => {
                const rec = stored[s.id]||{};
                return `<tr><td>${i+1}</td><td>${s.name||s.id}</td>
                         ${COMPLIANCE_ITEMS.map(it =>
                             `<td style="text-align:center;color:${rec[it.key]==='ok'?'#276749':rec[it.key]==='missing'?'#9b2c2c':'#b7791f'}">
                                 ${rec[it.key]||'missing'}</td>`).join('')}</tr>`;
            }).join('');
            body = `<table><thead><tr style="background:#f0fdf4"><th>#</th><th>Student</th>${COMPLIANCE_ITEMS.map(i=>`<th>${i.label}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table>`;
        } else if (type === 'preferences') {
            title = 'Preference Analysis';
            const submittedIds = new Set(_data.preferences.map(p=>String(p.student_id)));
            const rows = _data.students.map((s,i) => {
                const sub = submittedIds.has(String(s.id));
                return `<tr><td>${i+1}</td><td>${s.name||s.id}</td>
                         <td style="color:${sub?'#276749':'#9b2c2c'};font-weight:600;">${sub?'Submitted':'Pending'}</td></tr>`;
            }).join('');
            body = `<table><thead><tr style="background:#f0fdf4"><th>#</th><th>Student</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>`;
        }

        win.document.write(`<!DOCTYPE html><html><head><title>APPE Report &mdash; ${title}</title>
            <style>body{font-family:Arial,sans-serif;padding:2rem;color:#1a202c;}
            h1{color:#1B5E20;font-size:1.4rem;margin-bottom:4px;}.sub{color:#718096;font-size:0.85rem;margin-bottom:1.5rem;}
            table{width:100%;border-collapse:collapse;font-size:0.85rem;}th,td{border:1px solid #e2e8f0;padding:7px 10px;text-align:left;}
            th{font-weight:700;}tr:nth-child(even){background:#f8fafc;}@media print{body{padding:0;}}</style>
            </head><body>
            <h1>${title}</h1>
            <div class="sub">APPE Experience Hub &middot; ${year} &middot; ${new Date().toLocaleDateString()}</div>
            ${body}</body></html>`);
        win.document.close();
        setTimeout(() => win.print(), 400);
    };

    window.appeHubExportCSV_report = function (type) {
        if (type === 'assignments') {
            _downloadCSV('appe_assignments.csv', [
                ['Student Name','Student ID','Site','Specialty','Match','Score'],
                ..._data.assignments.filter(a=>a.site_id).map(a => {
                    const site = _data.sites.find(s=>s.id===a.site_id)||{};
                    return [a.student_name||'',a.student_id||'',site.site_name||'',
                            site.specialty||'',a.preference_rank_received||'fallback',a.student_score||''];
                }),
            ]);
        } else if (type === 'evaluations') {
            window.appeHubExportEvals();
        } else if (type === 'sites') {
            _downloadCSV('appe_sites.csv', [
                ['Site Name','Specialty','Preceptor','Students','Slots'],
                ..._data.sites.map(s => {
                    const n = _data.assignments.filter(a=>a.site_id===s.id).length;
                    return [s.site_name,s.specialty||'',s.preceptor_name||'',n,s.available_slots||''];
                }),
            ]);
        } else if (type === 'compliance') {
            window.appeHubExportCompliance();
        } else if (type === 'preferences') {
            const submittedIds = new Set(_data.preferences.map(p=>String(p.student_id)));
            _downloadCSV('appe_preferences.csv', [
                ['Student Name','ID','Status'],
                ..._data.students.map(s => [s.name||'',s.id||'',submittedIds.has(String(s.id))?'Submitted':'Pending']),
            ]);
        }
    };

    /* ═══════════════════════════════════════════════════════════
       TAB 8 - SETTINGS
    ═══════════════════════════════════════════════════════════ */
    function _tabSettings() {
        const { settings } = _data;
        const subOpen = settings?.submissions_open !== false;
        const year    = settings?.academic_year || '2025-2026';

        return `
        <div style="display:grid;gap:1.25rem;max-width:660px;">
            <h2 style="margin:0;font-size:1.15rem;font-weight:700;color:${C.text};">Settings</h2>

            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1rem;font-size:0.95rem;font-weight:700;color:${C.text};">Preference Submissions</h3>
                <div style="display:flex;align-items:center;justify-content:space-between;
                            padding:14px 16px;background:#f8fafc;border-radius:12px;border:1px solid ${C.border};">
                    <div>
                        <div style="font-size:0.88rem;font-weight:600;color:${C.text};">Student Portal</div>
                        <div style="font-size:0.78rem;color:${C.muted};margin-top:2px;">
                            Currently <strong style="color:${subOpen?C.green:C.red};">${subOpen?'open':'closed'}</strong>
                        </div>
                    </div>
                    <button onclick="window.appeHubToggleSubmissions()"
                            style="background:${subOpen?C.red:C.green};color:#fff;border:none;
                                   padding:8px 22px;border-radius:50px;cursor:pointer;font-size:0.85rem;font-weight:700;">
                        ${subOpen ? 'Close' : 'Open'}
                    </button>
                </div>
            </div>

            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1rem;font-size:0.95rem;font-weight:700;color:${C.text};">Academic Year</h3>
                <div style="display:flex;gap:10px;">
                    <input id="settings-year" type="text" value="${year}" placeholder="e.g. 2025-2026"
                           style="flex:1;padding:10px 14px;border:1px solid ${C.border};border-radius:10px;
                                  font-size:0.88rem;color:${C.text};outline:none;">
                    <button onclick="window.appeHubSaveYear()"
                            style="background:${C.primary};color:#fff;border:none;
                                   padding:10px 22px;border-radius:10px;cursor:pointer;font-size:0.85rem;font-weight:700;">
                        Save
                    </button>
                </div>
            </div>

            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1rem;font-size:0.95rem;font-weight:700;color:${C.text};">Compliance Requirements</h3>
                ${COMPLIANCE_ITEMS.map(it => `
                    <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid ${C.border};">
                        <span style="font-size:1.1rem;">${it.icon}</span>
                        <span style="flex:1;font-size:0.85rem;font-weight:500;color:${C.text};">${it.label}</span>
                        <span style="font-size:0.75rem;background:${C.greenPl};color:${C.green};
                                     padding:2px 10px;border-radius:50px;font-weight:700;">Required</span>
                    </div>`).join('')}
            </div>

            <div style="background:${C.redPl};border-radius:18px;padding:1.5rem;border:1px solid ${C.red}20;">
                <h3 style="margin:0 0 6px;font-size:0.9rem;font-weight:700;color:${C.red};">Danger Zone</h3>
                <p style="margin:0 0 1rem;font-size:0.82rem;color:${C.red};">These actions cannot be undone.</p>
                <button onclick="window.appeHubClearCompliance()"
                        style="background:#fff;color:${C.red};border:1px solid ${C.red}60;
                               padding:8px 20px;border-radius:8px;cursor:pointer;font-size:0.82rem;font-weight:700;">
                    Clear Compliance Data
                </button>
            </div>
        </div>`;
    }

    window.appeHubSaveYear = async function () {
        const val = document.getElementById('settings-year')?.value?.trim();
        if (!val) return;
        const sb  = window.SupabaseAuth?.supabase;
        if (sb) {
            const { error } = await sb.from('rotation_settings')
                .upsert({ id:1, academic_year: val }, { onConflict:'id' });
            if (error) { alert('Error: ' + error.message); return; }
        }
        _data.settings.academic_year = val;
        alert('Academic year saved!');
    };

    window.appeHubClearCompliance = function () {
        if (!confirm('Clear ALL compliance data? This cannot be undone.')) return;
        localStorage.removeItem('appe_compliance');
        alert('Compliance data cleared.');
        const panel = document.getElementById('appe-hub-panel');
        if (panel) panel.innerHTML = _tabSettings();
    };

    /* ═══════════════════════════════════════════════════════════
       SHARED HELPERS
    ═══════════════════════════════════════════════════════════ */
    function _loadingHTML(msg) {
        return `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
                    padding:5rem 2rem;gap:1rem;">
            <div style="width:44px;height:44px;border:4px solid ${C.primaryPl};border-top-color:${C.primary};
                        border-radius:50%;animation:appe-spin 0.8s linear infinite;"></div>
            <p style="color:${C.muted};font-size:0.88rem;margin:0;">${msg}</p>
        </div>`;
    }

    function _emptyState(icon, title, sub, btnLabel, btnAction) {
        return `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
                    padding:5rem 2rem;text-align:center;">
            <div style="font-size:3.5rem;margin-bottom:1rem;">${icon}</div>
            <h3 style="margin:0 0 8px;color:${C.text};font-size:1.05rem;font-weight:700;">${title}</h3>
            <p style="margin:0 0 1.5rem;color:${C.muted};font-size:0.88rem;max-width:380px;line-height:1.5;">${sub}</p>
            ${btnLabel ? `<button onclick="${btnAction}"
                                  style="background:${C.primary};color:#fff;border:none;padding:10px 24px;
                                         border-radius:50px;cursor:pointer;font-size:0.88rem;font-weight:700;">
                              ${btnLabel}
                          </button>` : ''}
        </div>`;
    }

    /* Pill button style */
    function _btn(col, pale) {
        return `background:${pale};color:${col};border:1px solid ${col}25;padding:8px 18px;
                border-radius:50px;cursor:pointer;font-size:0.82rem;font-weight:700;`;
    }

    /* Outlined quick-action button */
    function _qa(bg, fg) {
        return `background:${bg};color:${fg};border:1px solid ${fg}20;padding:9px 18px;
                border-radius:50px;cursor:pointer;font-size:0.82rem;font-weight:700;`;
    }

    /* Table header cell */
    function _th(align) {
        return `text-align:${align};padding:12px 14px;font-size:0.75rem;color:${C.muted};
                font-weight:700;text-transform:uppercase;letter-spacing:0.5px;`;
    }

    function _downloadCSV(filename, rows) {
        const csv  = rows.map(r => r.map(v => `"${String(v||'').replace(/"/g,'""')}"`).join(',')).join('\n');
        const blob = new Blob([csv], { type:'text/csv;charset=utf-8;' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = filename; a.click();
        URL.revokeObjectURL(url);
    }

})();
