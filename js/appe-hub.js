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
    let _year   = '2025-2026'; // currently viewed academic year (can differ from active write year)
    const YEARS = ['2024-2025', '2025-2026', '2026-2027'];
    let _data   = {
        students:    [],
        sites:       [],
        assignments: [],
        preferences: [],
        evaluations: [],
        settings:    { submissions_open: true, academic_year: '2025-2026' },
        allComparisons: {}, // { year: { students, avgScore, placed, preferred } }
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

    window.appeHubSwitchYear = async function (yr) {
        if (!YEARS.includes(yr)) return;
        _year   = yr;
        _loaded = false;
        const panel = document.getElementById('appe-hub-panel');
        if (panel) panel.innerHTML = _loadingHTML(`Loading ${yr}\u2026`);
        await _loadData();
        _loaded = true;
        // Re-render full shell so dropdown reflects selection, then re-render panel
        const hub = document.getElementById('appe-hub-root') || document.querySelector('[data-section="appe-hub"]');
        if (hub) { hub.innerHTML = _shellHTML(); }
        const p2 = document.getElementById('appe-hub-panel');
        if (p2) p2.innerHTML = _renderTab(_tab);
        // Re-apply active tab button style
        document.querySelectorAll('.appe-tab-btn').forEach(b => {
            const active = b.dataset.tab === _tab;
            b.style.background     = active ? 'rgba(255,255,255,0.2)' : 'transparent';
            b.style.color          = active ? '#fff' : 'rgba(255,255,255,0.65)';
            b.style.fontWeight     = active ? '700' : '500';
            b.style.backdropFilter = active ? 'blur(4px)' : 'none';
        });
    };

    /* ═══════════════════════════════════════════════════════════
       INIT & DATA LOADING
    ═══════════════════════════════════════════════════════════ */
    async function _init() {
        await _loadData();
        _year   = _data.settings?.academic_year || '2025-2026';
        _loaded = true;
        const panel = document.getElementById('appe-hub-panel');
        if (panel) panel.innerHTML = _renderTab(_tab);
    }

    async function _loadData() {
        const sb = window.SupabaseAuth?.supabase;
        if (!sb) return;
        try {
            const [siRes, asRes, prRes, evRes, seRes, upRes, enRes, yrCmpRes, compRes, spleRes] = await Promise.all([
                sb.from('rotation_sites').select('*').order('site_name'),
                sb.from('rotation_assignments').select('*').eq('academic_year', _year).order('student_score', { ascending: false }),
                sb.from('rotation_preferences').select('*').eq('academic_year', _year).order('student_id'),
                sb.from('rotation_evaluations').select('*').order('created_at', { ascending: false }),
                sb.from('rotation_settings').select('*').eq('id', 1).maybeSingle(),
                sb.from('user_profiles').select('user_id,full_name,email,class_year,student_id,status').eq('is_approved', true),
                sb.from('student_enrollments').select('*').order('created_at', { ascending: false }),
                // All years for comparison card
                sb.from('rotation_assignments').select('academic_year,student_id,student_score,site_id,assignment_method').in('academic_year', YEARS),
                // Compliance from Supabase (replaces localStorage)
                sb.from('student_compliance').select('*').eq('academic_year', _year),
                // SPLE scores from Supabase (replaces localStorage)
                sb.from('student_sple_scores').select('*').eq('academic_year', _year),
            ]);

            if (!siRes.error)  _data.sites       = siRes.data  || [];
            if (!asRes.error)  _data.assignments = asRes.data  || [];
            if (!prRes.error)  _data.preferences = prRes.data  || [];
            if (!evRes.error)  _data.evaluations = evRes.data  || [];
            if (!seRes.error && seRes.data) _data.settings = seRes.data;
            if (!enRes.error)  _data.enrollments = enRes.data  || [];

            // user_profiles: build maps and derive student list
            if (!upRes.error) {
                _data.allProfiles    = upRes.data || [];
                _data.profileMap     = {};
                _data.numericToAuthId = {};
                (upRes.data || []).forEach(p => {
                    if (p.user_id) {
                        _data.profileMap[p.user_id] = p;
                        if (p.student_id) _data.numericToAuthId[String(p.student_id)] = p.user_id;
                    }
                });
                // ★ Student list now derived from real authenticated users (P4, active)
                //   s.id = auth UUID so all operations use consistent IDs
                _data.students = (_data.allProfiles)
                    .filter(p => p.class_year === 'P4' && p.status !== 'alumni')
                    .map(p => ({
                        id:        p.user_id,
                        student_id: p.student_id,
                        name:      p.full_name,
                        full_name: p.full_name,
                        email:     p.email,
                        cohort:    'P4',
                    }));
            }

            // Per-year comparison stats
            if (!yrCmpRes.error) {
                _data.allComparisons = {};
                YEARS.forEach(yr => {
                    const rows = (yrCmpRes.data || []).filter(r => r.academic_year === yr);
                    const uniqueStudents = [...new Set(rows.map(r => r.student_id))];
                    const scores = rows.map(r => r.student_score).filter(s => s != null);
                    const avgScore = scores.length ? (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1) : null;
                    const placed   = rows.filter(r => r.site_id).length;
                    const preferred= rows.filter(r => r.assignment_method === 'auto').length;
                    _data.allComparisons[yr] = { studentCount: uniqueStudents.length, avgScore, placed, preferred, total: rows.length };
                });
            }

            // Compliance store: { student_id(authUUID): { item_key: status } }
            _data.complianceStore = {};
            (compRes.data || []).forEach(row => {
                if (!_data.complianceStore[row.student_id]) _data.complianceStore[row.student_id] = {};
                _data.complianceStore[row.student_id][row.item_key] = row.status;
            });

            // SPLE store: { student_id(authUUID): { exam1: score, exam2: score, ... } }
            _data.spleStore = {};
            (spleRes.data || []).forEach(row => {
                if (!_data.spleStore[row.student_id]) _data.spleStore[row.student_id] = {};
                _data.spleStore[row.student_id][`exam${row.exam_number}`] = Number(row.score);
            });

        } catch (e) { console.warn('[APPE Hub]', e); }
        window._appeData = _data;
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
            { id:'scores',      icon:'\uD83C\uDFC6', label:'Scores'       },
            { id:'outcomes',    icon:'\uD83C\uDFAF', label:'Outcomes'     },
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
                        <select onchange="window.appeHubSwitchYear(this.value)"
                                style="background:rgba(255,255,255,0.15);color:#fff;
                                       padding:5px 14px;border-radius:50px;font-size:0.78rem;
                                       font-weight:700;border:1px solid rgba(255,255,255,0.3);
                                       cursor:pointer;backdrop-filter:blur(4px);outline:none;
                                       appearance:none;-webkit-appearance:none;">
                            ${YEARS.map(y => `<option value="${y}" ${_year===y?'selected':''} style="background:#1B5E20;color:#fff;">\uD83D\uDCC5 ${y}${y===(_data.settings?.academic_year||'2025-2026')?' \u2605':''}</option>`).join('')}
                        </select>
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
            case 'scores':      return _tabScores();
            case 'outcomes':    return _tabOutcomes();
            case 'settings':    return _tabSettings();
            default:            return _tabDashboard();
        }
    }

    /* ── SPLE / Quarter helpers ───────────────────────────────── */
    function _getSPLEStore()        { return _data.spleStore || {}; }
    function _saveSPLEStore(store)  { _data.spleStore = store; } // in-memory only; Supabase saved via appeHubSaveSPLEInline
    function _quarterOf(dateStr, yr) {
        if (!dateStr) return null;
        const d = new Date(dateStr);
        const yk = parseInt((yr || '2025-2026').split('-')[0]);
        const m = d.getMonth(), y = d.getFullYear();
        if (y === yk   && m >= 8  && m <= 10) return 'Q1';
        if ((y === yk && m === 11) || (y === yk+1 && m <= 1)) return 'Q2';
        if (y === yk+1 && m >= 2  && m <= 4)  return 'Q3';
        if (y === yk+1 && m >= 5  && m <= 7)  return 'Q4';
        return null;
    }

    /* ═══════════════════════════════════════════════════════════
       TAB 1 - DASHBOARD
    ═══════════════════════════════════════════════════════════ */
    function _tabDashboard() {
        window._appeData = _data; // expose for student profile
        const { students: st, assignments: as, evaluations: ev, sites: si, preferences: pr, settings } = _data;
        const year = settings?.academic_year || '2025-2026';

        /* ── Core numbers ── */
        const total    = st.length;
        const placed   = as.filter(a => a.site_id);
        // Count unique students with at least one placed block (not total rows)
        const assignedStudentIds = new Set(placed.map(a => String(a.student_id)));
        const assignedCount = st.filter(s => assignedStudentIds.has(String(s.id))).length;
        const pct      = total ? Math.round(assignedCount / total * 100) : 0;
        const totalSlots = si.filter(s => s.is_active !== false).reduce((n, x) => n + (x.available_slots || 0), 0);
        const subOpen  = settings?.submissions_open !== false;

        /* ── Preferences ── */
        // preferences.student_id = auth UUID; bridge via numericToAuthId
        const { numericToAuthId = {} } = _data;
        const submittedAuthIds = new Set(pr.map(p => String(p.student_id)));
        const prefsSubmitted = st.filter(s => {
            const authId = numericToAuthId[String(s.id)];
            return authId && submittedAuthIds.has(authId);
        }).length;

        /* ── Compliance ── */
        const compStore       = _getComplianceStore();
        const fullyCompliant  = st.filter(s => {
            const r = compStore[s.id] || {};
            return COMPLIANCE_ITEMS.every(it => r[it.key] === 'ok');
        }).length;

        /* ── Evaluations ── */
        const _evalVal = e => parseFloat(e.overall_score ?? e.rating_overall ?? e.score ?? e.rating);
        const evalScores = ev.filter(e => !isNaN(_evalVal(e)));
        const avgEval    = evalScores.length
            ? (evalScores.reduce((s, e) => s + _evalVal(e), 0) / evalScores.length).toFixed(1)
            : null;

        /* ── Student score bands ── */
        const scoreMap = {};
        as.forEach(a => { if (a.student_score != null) scoreMap[String(a.student_id)] = a.student_score; });
        const scoredSt = st.filter(s => scoreMap[String(s.id)] != null);
        const bands = { distinction: 0, onTrack: 0, needsSupport: 0, atRisk: 0 };
        scoredSt.forEach(s => {
            const sc = scoreMap[String(s.id)];
            if (sc >= 90)      bands.distinction++;
            else if (sc >= 80) bands.onTrack++;
            else if (sc >= 70) bands.needsSupport++;
            else               bands.atRisk++;
        });
        const highPct = total ? Math.round(bands.distinction / total * 100) : 0;

        /* ── SPLE ── */
        const spleStore = _getSPLEStore();
        const allSpleScores = [];
        const spleDistrib = { prepared: 0, onTrack: 0, developing: 0, atRisk: 0 };
        Object.entries(spleStore).forEach(([, exams]) => {
            const vals = [1,2,3,4,5,6].map(n => parseFloat(exams[`exam${n}`])).filter(v => !isNaN(v));
            if (!vals.length) return;
            vals.forEach(v => allSpleScores.push(v));
            const latest = vals[vals.length - 1];
            if (latest >= 85)      spleDistrib.prepared++;
            else if (latest >= 70) spleDistrib.onTrack++;
            else if (latest >= 60) spleDistrib.developing++;
            else                   spleDistrib.atRisk++;
        });
        const avgSPLE = allSpleScores.length
            ? (allSpleScores.reduce((a,b) => a+b, 0) / allSpleScores.length).toFixed(0)
            : null;

        /* ── Clinical vs Non-clinical ── */
        const siteTypeMap = {};
        si.forEach(s => { siteTypeMap[s.id] = (s.rotation_type || 'clinical'); });
        const studentSiteType = {};
        as.forEach(a => { if (a.site_id) studentSiteType[String(a.student_id)] = siteTypeMap[a.site_id]; });
        const clinEvals = [], nonClinEvals = [];
        ev.forEach(e => {
            const sc = parseFloat(e.overall_score ?? e.rating_overall ?? e.score ?? e.rating);
            if (isNaN(sc)) return;
            (studentSiteType[String(e.student_id)] === 'non-clinical' ? nonClinEvals : clinEvals)
                .push({ sc, name: e.student_name || e.student_id });
        });
        const _avgArr = arr => arr.length ? (arr.reduce((a,b) => a+b.sc, 0) / arr.length).toFixed(1) : null;
        const avgClin    = _avgArr(clinEvals);
        const avgNonClin = _avgArr(nonClinEvals);
        const topClin    = [...clinEvals].sort((a,b) => b.sc-a.sc)[0];
        const topNonClin = [...nonClinEvals].sort((a,b) => b.sc-a.sc)[0];
        const clinComp   = avgClin && avgNonClin
            ? (parseFloat(avgClin) > parseFloat(avgNonClin) ? '\u2191 Higher' : parseFloat(avgClin) < parseFloat(avgNonClin) ? '\u2193 Lower' : '= Equal')
            : '\u2014';

        /* ── Quarterly eval trend ── */
        const qBuckets = { Q1: [], Q2: [], Q3: [], Q4: [] };
        ev.forEach(e => {
            const q  = _quarterOf(e.created_at || e.submitted_at, year);
            const sc = parseFloat(e.overall_score ?? e.rating_overall ?? e.score ?? e.rating);
            if (q && !isNaN(sc)) qBuckets[q].push(sc);
        });
        const qAvg = q => qBuckets[q].length
            ? (qBuckets[q].reduce((a,b) => a+b, 0) / qBuckets[q].length).toFixed(1)
            : null;

        /* ── Match quality ── */
        const mb = { r1:0, r2:0, r3:0, other:0, unmatched:0 };
        as.forEach(a => {
            if (!a.site_id) { mb.unmatched++; return; }
            const r = a.preference_rank_received;
            if (r === 1) mb.r1++;
            else if (r === 2) mb.r2++;
            else if (r === 3) mb.r3++;
            else mb.other++;
        });

        /* ── Top sites & preceptors ── */
        const siteEvalMap = {};
        ev.forEach(e => {
            const sc = parseFloat(e.overall_score ?? e.rating_overall ?? e.score ?? e.rating);
            if (isNaN(sc)) return;
            const a = as.find(x => String(x.student_id) === String(e.student_id));
            if (!a?.site_id) return;
            if (!siteEvalMap[a.site_id]) siteEvalMap[a.site_id] = [];
            siteEvalMap[a.site_id].push(sc);
        });
        const topSites = Object.entries(siteEvalMap)
            .map(([id, scores]) => {
                const site = si.find(s => String(s.id) === String(id)) || {};
                return { name: site.site_name||'\u2014', spec: site.specialty||'', avg: (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1), n: scores.length };
            })
            .sort((a,b) => parseFloat(b.avg)-parseFloat(a.avg)).slice(0,3);
        const precEvalMap = {};
        ev.forEach(e => {
            const sc = parseFloat(e.overall_score ?? e.rating_overall ?? e.score ?? e.rating);
            if (isNaN(sc) || !e.preceptor_name) return;
            if (!precEvalMap[e.preceptor_name]) precEvalMap[e.preceptor_name] = [];
            precEvalMap[e.preceptor_name].push(sc);
        });
        const topPreceptors = Object.entries(precEvalMap)
            .map(([name, scores]) => ({ name, avg: (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1), n: scores.length }))
            .sort((a,b) => parseFloat(b.avg)-parseFloat(a.avg)).slice(0,3);

        /* ── Alerts ── */
        const alertItems = [];
        const unassignedSt = st.filter(s => !as.find(a => String(a.student_id)===String(s.id) && a.site_id));
        if (unassignedSt.length) alertItems.push({ col:'#b45309', bg:'#fffbeb', msg:`${unassignedSt.length} student${unassignedSt.length>1?'s':''} not yet assigned to a site` });
        const nonCompliant = st.filter(s => { const r=compStore[s.id]||{}; return COMPLIANCE_ITEMS.some(it=>r[it.key]==='missing'||r[it.key]==='expired'); });
        if (nonCompliant.length) alertItems.push({ col:'#c62828', bg:'#fff5f5', msg:`${nonCompliant.length} student${nonCompliant.length>1?'s':''} with compliance issues` });
        const lowEvals = ev.filter(e => parseFloat(e.overall_score||e.score||e.rating) < 3);
        if (lowEvals.length) alertItems.push({ col:'#c62828', bg:'#fff5f5', msg:`${lowEvals.length} evaluation${lowEvals.length>1?'s':''} scored below 3/5` });
        const spleAtRisk = Object.values(spleStore).filter(exams => {
            const vals = [1,2,3,4,5,6].map(n => parseFloat(exams[`exam${n}`])).filter(v => !isNaN(v));
            return vals.length && vals[vals.length-1] < 60;
        }).length;
        if (spleAtRisk) alertItems.push({ col:'#c62828', bg:'#fff5f5', msg:`${spleAtRisk} student${spleAtRisk>1?'s':''} at risk in SPLE (latest score < 60)` });

        /* ═══════════ HTML ASSEMBLY ═══════════ */

        /* Status banner */
        const statusBanner = `
            <div style="background:${subOpen?'linear-gradient(135deg,#f0fdf4,#dcfce7)':'linear-gradient(135deg,#fff1f2,#ffe4e6)'};
                        border-radius:18px;padding:1.25rem 1.5rem;border:1px solid ${subOpen?'#bbf7d0':'#fecaca'};
                        display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
                <div style="display:flex;align-items:center;gap:12px;">
                    <div style="width:38px;height:38px;border-radius:50%;background:${subOpen?C.greenPl:C.redPl};
                                display:flex;align-items:center;justify-content:center;font-size:1rem;">
                        ${subOpen?'\uD83D\uDFE2':'\uD83D\uDD34'}
                    </div>
                    <div>
                        <div style="font-weight:700;color:${C.text};font-size:0.9rem;">Submissions ${subOpen?'Open':'Closed'}</div>
                        <div style="font-size:0.75rem;color:${C.muted};margin-top:1px;">${subOpen?'Students can submit rotation preferences':'Preference portal is closed'}</div>
                    </div>
                </div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    <button onclick="window.appeHubSwitchTab('preferences')" style="${_btn(C.blue,C.bluePl)}">View Preferences</button>
                    <button onclick="window.appeHubSwitchTab('matching')"    style="${_btn(C.primary,C.primaryPl)}">Run Matching</button>
                </div>
            </div>`;

        /* 6 KPI cards */
        const mkKPI = (icon,label,value,sub,ac,bg) => `
            <div style="background:${C.card};border-radius:18px;padding:1.4rem 1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 6px 20px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};position:relative;overflow:hidden;">
                <div style="position:absolute;top:-18px;right:-18px;width:72px;height:72px;
                            border-radius:50%;background:${bg};opacity:0.6;"></div>
                <div style="font-size:1.5rem;margin-bottom:0.6rem;">${icon}</div>
                <div style="font-size:1.9rem;font-weight:800;color:${ac};line-height:1;">${value}</div>
                <div style="font-size:0.8rem;font-weight:600;color:${C.text};margin-top:4px;">${label}</div>
                <div style="font-size:0.72rem;color:${C.muted};margin-top:2px;">${sub}</div>
            </div>`;
        const kpiCards = [
            mkKPI('\uD83D\uDC65','P4 Students',     total||'0',                  'enrolled this year',                  '#1d4ed8','#eff6ff'),
            mkKPI('\uD83D\uDCCB','Assigned',         pct+'%',                    `${assignedCount} of ${total} placed`,       '#15803d','#f0fdf4'),
            mkKPI('\u2B50',       'Preferences In',  prefsSubmitted+'/'+total,   `${total-prefsSubmitted} pending`,       '#b45309','#fffbeb'),
            mkKPI('\u2705',       'Compliance Ready',fullyCompliant+'/'+total,   `${total-fullyCompliant} need action`,   '#276749','#f0fff4'),
            mkKPI('\uD83D\uDCDD','Avg Eval Score',   avgEval?avgEval+'/5':'\u2014', `${evalScores.length} evaluations`,  '#7e22ce','#faf5ff'),
            mkKPI('\uD83C\uDFC6','High-Performing',  highPct+'%',                `${bands.distinction} students \u2265 90`,'#92400e','#fef3c7'),
        ].join('');

        /* Student status bands */
        const bandTotal = scoredSt.length || 1;
        const bandBar = (label, count, col) => count > 0 ? `
            <div style="margin-bottom:9px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
                    <span style="font-size:0.76rem;font-weight:600;color:${col};">${label}</span>
                    <span style="font-size:0.72rem;color:${C.muted};">${count} (${Math.round(count/bandTotal*100)}%)</span>
                </div>
                <div style="background:#f1f5f9;border-radius:50px;height:8px;overflow:hidden;">
                    <div style="width:${Math.round(count/bandTotal*100)}%;background:${col};height:100%;border-radius:50px;"></div>
                </div>
            </div>` : '';
        const studentBandsCard = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1rem;font-size:0.95rem;font-weight:700;color:${C.text};">Student Status</h3>
                ${scoredSt.length ? [
                    bandBar('\uD83C\uDFC6 Distinction (\u226590)',   bands.distinction,  '#15803d'),
                    bandBar('\u2713 On Track (80\u201389)',           bands.onTrack,      '#1d4ed8'),
                    bandBar('\u26A0 Needs Support (70\u201379)',      bands.needsSupport, '#b45309'),
                    bandBar('\uD83D\uDD34 At Risk (<70)',             bands.atRisk,       '#c62828'),
                ].join('') : `<p style="color:${C.muted};font-size:0.85rem;">No ranking scores computed yet.</p>`}
                ${scoredSt.length ? `<div style="margin-top:10px;padding-top:8px;border-top:1px solid ${C.border};font-size:0.72rem;color:${C.muted};">${scoredSt.length} of ${total} students scored</div>` : ''}
            </div>`;

        /* Match quality */
        const mRow = (label, count, col) => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid ${C.border};">
                <span style="font-size:0.8rem;color:${C.text};">${label}</span>
                <span style="font-size:0.88rem;font-weight:700;color:${col};">${count}</span>
            </div>`;
        const matchCard = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1rem;font-size:0.95rem;font-weight:700;color:${C.text};">Match Quality</h3>
                <div style="font-size:1.9rem;font-weight:800;color:${C.primary};margin-bottom:0.75rem;">${pct}%
                    <span style="font-size:0.8rem;font-weight:500;color:${C.muted};"> placed</span>
                </div>
                ${mRow('\uD83E\uDD47 Got #1 choice', mb.r1,       C.green)}
                ${mRow('\uD83E\uDD48 Got #2 choice', mb.r2,       C.blue)}
                ${mRow('\uD83E\uDD49 Got #3 choice', mb.r3,       C.amber)}
                ${mRow('\u2194 Outside top 3',        mb.other,    C.muted)}
                ${mRow('\u23F3 Unmatched',             mb.unmatched,C.red)}
            </div>`;

        /* SPLE readiness */
        const spleTot = Object.values(spleDistrib).reduce((a,b)=>a+b,0)||1;
        const sBar = (label, count, col) => count > 0 ? `
            <div style="margin-bottom:7px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:2px;">
                    <span style="font-size:0.74rem;font-weight:600;color:${col};">${label}</span>
                    <span style="font-size:0.7rem;color:${C.muted};">${count}</span>
                </div>
                <div style="background:#f1f5f9;border-radius:50px;height:6px;overflow:hidden;">
                    <div style="width:${Math.round(count/spleTot*100)}%;background:${col};height:100%;border-radius:50px;"></div>
                </div>
            </div>` : '';
        const spleCard = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
                    <h3 style="margin:0;font-size:0.95rem;font-weight:700;color:${C.text};">SPLE Readiness</h3>
                    <button onclick="window.appeHubSwitchTab('evaluations')" style="${_btn(C.purple,C.purplePl)};padding:5px 12px;font-size:0.75rem;">Enter Scores</button>
                </div>
                <div style="font-size:1.9rem;font-weight:800;color:${C.purple};margin-bottom:0.75rem;">
                    ${avgSPLE !== null
                        ? avgSPLE+'<span style="font-size:0.85rem;font-weight:500;color:'+C.muted+';">/100</span>'
                        : '<span style="font-size:1rem;color:'+C.muted+';">No data yet</span>'}
                </div>
                ${sBar('\uD83C\uDFC6 Highly Prepared (\u226585)', spleDistrib.prepared,   '#15803d')}
                ${sBar('\u2713 On Track (70\u201384)',             spleDistrib.onTrack,    '#1d4ed8')}
                ${sBar('\u26A0 Developing (60\u201369)',           spleDistrib.developing, '#b45309')}
                ${sBar('\uD83D\uDD34 At Risk (<60)',               spleDistrib.atRisk,     '#c62828')}
                ${!Object.keys(spleStore).length ? `<p style="color:${C.muted};font-size:0.8rem;margin:4px 0 0;">Enter scores in the Evaluations tab.</p>` : ''}
            </div>`;

        /* Clinical vs Non-clinical */
        const clinCol = (label, avg, count, top, col, bg) => `
            <div style="flex:1;background:${bg};border-radius:14px;padding:1.25rem;border:1px solid ${col}30;min-width:180px;">
                <div style="font-size:0.82rem;font-weight:700;color:${col};margin-bottom:0.6rem;">${label}</div>
                <div style="font-size:1.9rem;font-weight:800;color:${col};">
                    ${avg !== null ? avg+'/5' : '<span style="font-size:1rem;color:'+C.muted+';">No data</span>'}
                </div>
                <div style="font-size:0.72rem;color:${C.muted};margin-top:4px;">${count} evaluation${count!==1?'s':''}</div>
                ${top ? `<div style="margin-top:10px;padding-top:8px;border-top:1px solid ${col}20;font-size:0.75rem;color:${col};font-weight:600;">\uD83C\uDFC6 Top: ${top.name}</div>` : ''}
            </div>`;
        const clinVsNonClin = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1.25rem;font-size:0.95rem;font-weight:700;color:${C.text};">Clinical vs. Non-clinical Performance</h3>
                <div style="display:flex;gap:1rem;flex-wrap:wrap;">
                    ${clinCol('\uD83C\uDFE5 Clinical Rotations',    avgClin,    clinEvals.length,    topClin,    C.blue,  C.bluePl)}
                    ${clinCol('\uD83C\uDFEA Non-clinical Rotations',avgNonClin, nonClinEvals.length, topNonClin, C.green, C.greenPl)}
                </div>
                ${(clinEvals.length && nonClinEvals.length) ? `
                    <div style="margin-top:1rem;padding-top:0.75rem;border-top:1px solid ${C.border};font-size:0.78rem;color:${C.muted};">
                        Clinical scores are <strong style="color:${C.text};">${clinComp}</strong> compared to non-clinical
                    </div>` : `<p style="margin:0.75rem 0 0;font-size:0.8rem;color:${C.muted};">Tag sites as Clinical/Non-clinical in the Rotations &amp; Preceptors page to see the comparison.</p>`}
            </div>`;

        /* Quarterly trend */
        const qBar2 = (q, val) => {
            const has = val !== null;
            const h   = has ? Math.round(parseFloat(val) / 5 * 100) : 0;
            const col = !has ? '#e2e8f0' : parseFloat(val) >= 4 ? C.green : parseFloat(val) >= 3 ? C.amber : C.red;
            return `
                <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:5px;">
                    <div style="font-size:0.78rem;font-weight:700;color:${has?C.text:C.muted};">${has?val+'/5':'Pending'}</div>
                    <div style="width:100%;background:#f1f5f9;border-radius:8px;height:80px;display:flex;align-items:flex-end;overflow:hidden;">
                        <div style="width:100%;height:${Math.max(h,has?4:0)}%;background:${col};border-radius:8px 8px 0 0;transition:height 0.6s ease;"></div>
                    </div>
                    <div style="font-size:0.75rem;font-weight:600;color:${C.muted};">${q}</div>
                    <div style="font-size:0.68rem;color:${C.muted};">${qBuckets[q].length ? qBuckets[q].length+' eval'+(qBuckets[q].length!==1?'s':'') : 'No data'}</div>
                </div>`;
        };
        const quarterlyTrend = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;">
                    <h3 style="margin:0;font-size:0.95rem;font-weight:700;color:${C.text};">Quarterly Evaluation Trend</h3>
                    <span style="font-size:0.75rem;color:${C.muted};">Academic Year ${year}</span>
                </div>
                <div style="display:flex;gap:1rem;align-items:flex-end;">
                    ${['Q1','Q2','Q3','Q4'].map(q => qBar2(q, qAvg(q))).join('')}
                </div>
            </div>`;

        /* Top league tables */
        const lRow = (rank, name, avg, sub) => `
            <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${C.border};">
                <div style="font-size:1rem;flex-shrink:0;">${rank===1?'\uD83E\uDD47':rank===2?'\uD83E\uDD48':'\uD83E\uDD49'}</div>
                <div style="flex:1;min-width:0;">
                    <div style="font-size:0.83rem;font-weight:600;color:${C.text};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${name}">${name}</div>
                    <div style="font-size:0.7rem;color:${C.muted};">${sub}</div>
                </div>
                <div style="font-size:1.1rem;font-weight:800;color:${C.primary};">${avg}</div>
            </div>`;
        const lCard = (title, rows, empty) => `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1rem;font-size:0.95rem;font-weight:700;color:${C.text};">${title}</h3>
                ${rows.length ? rows.map((r,i) => lRow(i+1, r.name, r.avg, r.sub)).join('')
                              : `<p style="color:${C.muted};font-size:0.82rem;text-align:center;padding:1rem 0;">${empty}</p>`}
            </div>`;

        /* Alerts */
        const alertsPanel = alertItems.length ? `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid #fca5a5;">
                <h3 style="margin:0 0 0.75rem;font-size:0.95rem;font-weight:700;color:#c62828;">\u26A0 Alerts</h3>
                ${alertItems.map(a => `
                    <div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:${a.bg};
                                border-radius:8px;margin-bottom:6px;border-left:3px solid ${a.col};">
                        <span style="font-size:0.83rem;color:${a.col};font-weight:600;">${a.msg}</span>
                    </div>`).join('')}
            </div>` : '';

        /* Quick actions */
        const quickActions = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1rem;font-size:0.95rem;font-weight:700;color:${C.text};">Quick Actions</h3>
                <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
                    <button onclick="window.appeHubSwitchTab('compliance')"  style="${_qa('#ecfdf5','#065f46')}">Check Compliance</button>
                    <button onclick="window.appeHubSwitchTab('evaluations')" style="${_qa('#faf5ff','#6b21a8')}">Enter Evaluations</button>
                    <button onclick="window.appeHubSwitchTab('matching')"    style="${_qa('#eff6ff','#1d4ed8')}">Run Auto-Match</button>
                    <button onclick="window.appeHubSwitchTab('reports')"     style="${_qa('#fff7ed','#9a3412')}">Generate Report</button>
                    <button onclick="window.appeHubSwitchTab('settings')"    style="${_qa('#f8fafc','#334155')}">Settings</button>
                </div>
            </div>`;

        return `
        <div style="display:grid;gap:1.25rem;">
            ${statusBanner}
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(185px,1fr));gap:1rem;">${kpiCards}</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;">${studentBandsCard}${matchCard}${spleCard}</div>
            ${clinVsNonClin}
            ${quarterlyTrend}
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;">
                ${lCard('Top Sites by Eval Score',
                    topSites.map(s => ({ name:s.name, avg:s.avg+'/5', sub:s.spec+' \u00B7 '+s.n+' eval'+(s.n!==1?'s':'') })),
                    'No evaluation data yet')}
                ${lCard('Top Preceptors by Eval Score',
                    topPreceptors.map(p => ({ name:p.name, avg:p.avg+'/5', sub:p.n+' student'+(p.n!==1?'s':'') })),
                    'No evaluation data yet')}
            </div>
            ${alertsPanel}
            ${quickActions}
        </div>`;
    }

    /* ═══════════════════════════════════════════════════════════
       TAB 2 - SCHEDULE
    ═══════════════════════════════════════════════════════════ */
    function _tabSchedule() {
        const { assignments: as, sites: si } = _data;
        const blockAssignments = as.filter(a => a.block_number >= 1);
        if (!blockAssignments.length) {
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
            {bg:'#f9fbe7',fg:'#558b2f'},{bg:'#fde0dc',fg:'#b71c1c'},{bg:'#e8f5e9',fg:'#388e3c'},
        ];
        const allSpecs = [...new Set(si.map(s=>s.specialty).filter(Boolean))].sort();
        const specIdx  = {};
        allSpecs.forEach((sp,i) => { specIdx[sp] = i; });
        const sc = sp => PALETTE[(specIdx[sp] ?? 0) % PALETTE.length];

        // Group: { student_id → { name, score, blocks: { block_number → assignment } } }
        const byStudent = {};
        blockAssignments.forEach(a => {
            if (!byStudent[a.student_id]) byStudent[a.student_id] = { name: a.student_name || a.student_id, score: a.student_score, blocks: {} };
            byStudent[a.student_id].blocks[a.block_number] = a;
        });

        // Sort students by score desc
        const studentRows = Object.entries(byStudent)
            .sort((a,b) => (b[1].score||0) - (a[1].score||0))
            .map(([sid, stu], idx) => {
                const blockCells = Array.from({length:10}, (_,i) => {
                    const block = i + 1;
                    const a = stu.blocks[block];
                    if (!a || !a.site_id) {
                        return `<td style="padding:6px 4px;text-align:center;">
                            <span style="font-size:0.7rem;color:${C.muted};">—</span>
                        </td>`;
                    }
                    const site = siteMap[a.site_id] || {};
                    const c = sc(site.specialty);
                    const isPref = a.preference_rank_received != null;
                    return `<td style="padding:4px 3px;text-align:center;">
                        <div title="${site.site_name||''} (${site.specialty||''})"
                             style="background:${c.bg};color:${c.fg};border:1px solid ${c.fg}30;
                                    border-radius:8px;padding:4px 5px;font-size:0.68rem;font-weight:600;
                                    white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:90px;
                                    ${isPref ? '' : 'opacity:0.75;'}">
                            ${site.site_name ? site.site_name.split(' ').slice(0,2).join(' ') : 'Site '+a.site_id}
                            ${isPref ? `<span style="font-size:0.6rem;opacity:0.8;">#${a.preference_rank_received}</span>` : ''}
                        </div>
                    </td>`;
                }).join('');

                const prefCount = Object.values(stu.blocks).filter(a=>a.preference_rank_received!=null).length;
                return `
                <tr style="border-bottom:1px solid ${C.border};${idx%2===0?'background:'+C.bg+';':''}">
                    <td style="padding:8px 12px;white-space:nowrap;">
                        <div style="font-weight:600;font-size:0.85rem;color:${C.text};">${stu.name}</div>
                        <div style="font-size:0.7rem;color:${C.muted};">Score: ${stu.score ?? '—'} &middot; ${prefCount}/10 preferred</div>
                    </td>
                    ${blockCells}
                </tr>`;
            }).join('');

        const totalPlaced = blockAssignments.filter(a=>a.site_id).length;
        const totalSlots  = blockAssignments.length;

        return `
        <div style="display:grid;gap:1.25rem;">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
                <div>
                    <h2 style="margin:0;font-size:1.15rem;font-weight:700;color:${C.text};">📅 10-Block Rotation Schedule</h2>
                    <p style="margin:4px 0 0;font-size:0.82rem;color:${C.muted};">
                        ${Object.keys(byStudent).length} students &middot; ${totalPlaced} of ${totalSlots} blocks placed
                    </p>
                </div>
                <button onclick="window.appeHubSwitchTab('matching')"
                        style="background:${C.primary};color:#fff;border:none;padding:8px 20px;
                               border-radius:50px;cursor:pointer;font-size:0.85rem;font-weight:700;">
                    Re-run Matching
                </button>
            </div>
            <div style="background:${C.card};border-radius:16px;border:1px solid ${C.border};overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;min-width:900px;">
                    <thead>
                        <tr style="border-bottom:2px solid ${C.border};">
                            <th style="text-align:left;padding:10px 12px;font-size:0.72rem;color:${C.muted};font-weight:700;text-transform:uppercase;white-space:nowrap;">Student</th>
                            ${Array.from({length:10},(_,i)=>`<th style="text-align:center;padding:10px 4px;font-size:0.72rem;color:${C.muted};font-weight:700;">B${i+1}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>${studentRows}</tbody>
                </table>
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

    function _getComplianceStore() { return _data.complianceStore || {}; }

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

    window.appeHubCycleCompliance = async function (sid, key) {
        if (!(await _requirePassword())) return;
        const stored = _getComplianceStore();
        if (!stored[sid]) stored[sid] = {};
        const cycle  = { missing:'ok', ok:'expiring', expiring:'expired', expired:'missing' };
        stored[sid][key] = cycle[stored[sid][key] || 'missing'];
        _data.complianceStore = stored;
        const sb = window.SupabaseAuth?.supabase;
        if (sb) {
            await sb.from('student_compliance').upsert({
                student_id:   sid,
                academic_year: _year,
                item_key:     key,
                status:       stored[sid][key],
                updated_at:   new Date().toISOString()
            }, { onConflict: 'student_id,academic_year,item_key' });
        }
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
        const { students, preferences, settings, profileMap = {} } = _data;

        // Build submitted set from preferences — use profileMap (auth UUID → profile) as source of truth
        // preferences.student_id = auth UUID; profileMap keys = auth UUID
        const submittedAuthIds = new Set(preferences.map(p => String(p.student_id)));
        const totalP4 = Object.keys(profileMap).length || students.length;

        // Build submitted/not-submitted lists from user_profiles (most accurate for P4 count)
        const profileList = Object.values(profileMap);
        // profileMap is keyed by user_id (auth UUID); each value has {user_id, full_name, email, class_year}
        const submittedProfiles = profileList.filter(p => submittedAuthIds.has(String(p.user_id)));
        const notSubProfiles    = profileList.filter(p => !submittedAuthIds.has(String(p.user_id)));

        // Fallback to students table if profileMap empty
        const submitted = profileList.length
            ? submittedProfiles.map(p => ({ id: p.user_id, name: p.full_name || p.email }))
            : students.filter(s => submittedAuthIds.has(String(s.id)));
        const notSub = profileList.length
            ? notSubProfiles.map(p => ({ id: p.user_id, name: p.full_name || p.email }))
            : students.filter(s => !submittedAuthIds.has(String(s.id)));

        const total = submitted.length + notSub.length || students.length;
        const pct   = total ? Math.round(submitted.length / total * 100) : 0;
        const subOpen = settings?.submissions_open !== false;

        if (!total) {
            return _emptyState('\u2B50','No Students Found',
                'Add P4 students to Supabase to track preference submissions.');
        }

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
                        <span style="font-size:0.9rem;color:${C.muted};font-weight:400;">of ${total} submitted</span>
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
       Priority = Student Ranking Score (same formula as Clinical
       Dashboard): GPA 44% + Experiential 44% + Research 4% +
       Community 4% + Conferences 4%  (stored as student_score
       in rotation_assignments, out of 100).
       Higher-ranked students pick their preferred site first.
    ═══════════════════════════════════════════════════════════ */
    function _tabMatching() {
        const { assignments: as, students: st, sites: si } = _data;

        /* Build score map from existing rotation_assignments */
        const scoreMap = {};
        as.forEach(a => { if (a.student_score != null) scoreMap[String(a.student_id)] = a.student_score; });

        const placed    = as.filter(a => a.site_id).length;
        const choice1   = as.filter(a => a.preference_rank_received === 1).length;
        const sitesUsed = new Set(as.filter(a=>a.site_id).map(a=>a.site_id)).size;
        const pending   = st.filter(s => !as.find(a=>String(a.student_id)===String(s.id)&&a.site_id)).length;
        const scored    = st.filter(s => scoreMap[String(s.id)] != null).length;

        /* Top 10 ranked students */
        const ranked = [...st]
            .map(s => ({ ...s, _score: scoreMap[String(s.id)] ?? null }))
            .filter(s => s._score != null)
            .sort((a,b) => b._score - a._score)
            .slice(0, 10);

        const rankRows = ranked.length
            ? ranked.map((s, i) => {
                const sc  = s._score;
                const col = sc >= 80 ? C.green : sc >= 65 ? C.amber : C.red;
                const medal = i===0 ? '\uD83E\uDD47' : i===1 ? '\uD83E\uDD48' : i===2 ? '\uD83E\uDD49' : `${i+1}`;
                const assigned = as.find(a=>String(a.student_id)===String(s.id)&&a.site_id);
                const site     = assigned ? (si.find(x=>x.id===assigned.site_id)||{}) : null;
                return `<tr style="border-bottom:1px solid ${C.border};">
                    <td style="padding:9px 12px;text-align:center;font-size:${i<3?'1.1rem':'0.82rem'};">${medal}</td>
                    <td style="padding:9px 12px;font-size:0.85rem;font-weight:600;color:${C.text};">${s.name||s.id}</td>
                    <td style="padding:9px 12px;text-align:center;font-size:1rem;font-weight:800;color:${col};">${sc}</td>
                    <td style="padding:9px 12px;font-size:0.78rem;color:${C.muted};">
                        ${site ? `<span style="background:${C.greenPl};color:${C.green};padding:2px 9px;border-radius:50px;font-size:0.72rem;font-weight:700;">\u2713 ${site.site_name||'Assigned'}</span>` : `<span style="color:${C.muted};">\u2014</span>`}
                    </td>
                </tr>`;
            }).join('')
            : `<tr><td colspan="4" style="padding:2rem;text-align:center;color:${C.muted};">
                   No ranking scores yet. Enter scores via the Clinical Dashboard &rarr; Student Ranking System.
               </td></tr>`;

        const formulaItems = [
            { label:'GPA',                  pct:'44%', col:'#1565c0', pale:'#e3f2fd', note:'From students table' },
            { label:'Experiential Courses',  pct:'44%', col:'#2e7d32', pale:'#e8f5e9', note:'From rotation_evaluations' },
            { label:'Research',              pct:'4%',  col:'#6a1b9a', pale:'#f3e5f5', note:'Survey score'        },
            { label:'Community Service',     pct:'4%',  col:'#e65100', pale:'#fff3e0', note:'Survey score'        },
            { label:'Conferences',           pct:'4%',  col:'#b45309', pale:'#fffbeb', note:'Survey score'        },
        ];

        const formulaHTML = formulaItems.map(f => `
            <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;
                        background:${f.pale};border-radius:12px;border:1px solid ${f.col}20;">
                <span style="font-size:1.3rem;font-weight:800;color:${f.col};min-width:42px;">${f.pct}</span>
                <div>
                    <div style="font-size:0.85rem;font-weight:700;color:${C.text};">${f.label}</div>
                    <div style="font-size:0.72rem;color:${C.muted};">${f.note}</div>
                </div>
            </div>`).join('');

        return `
        <div style="display:grid;gap:1.25rem;">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
                <div>
                    <h2 style="margin:0;font-size:1.15rem;font-weight:700;color:${C.text};">Auto-Match Algorithm</h2>
                    <p style="margin:4px 0 0;font-size:0.82rem;color:${C.muted};">
                        Priority order uses the Student Ranking Score &mdash; higher ranked students pick their preferred site first.
                    </p>
                </div>
                <button onclick="window.appeHubRunMatch()"
                        style="background:${C.primary};color:#fff;border:none;padding:10px 24px;
                               border-radius:50px;cursor:pointer;font-size:0.9rem;font-weight:700;">
                    \uD83D\uDD00 Run Matching
                </button>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;align-items:start;">

                <!-- Left: Formula + How it works -->
                <div style="display:grid;gap:1rem;">
                    <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                                box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                                border:1px solid ${C.border};">
                        <h3 style="margin:0 0 1rem;font-size:0.95rem;font-weight:700;color:${C.text};">
                            \uD83C\uDFC6 Ranking Formula (out of 100)
                        </h3>
                        <div style="display:grid;gap:8px;">${formulaHTML}</div>
                        <div style="margin-top:1rem;padding:10px 14px;background:#f8fafc;border-radius:10px;
                                    border:1px solid ${C.border};font-size:0.78rem;color:${C.muted};line-height:1.5;">
                            Scores are managed in the <strong>Clinical Dashboard &rarr; Student Ranking System</strong>.
                            ${scored < st.length
                                ? `<span style="color:${C.amber};font-weight:600;"> ${st.length - scored} students have no score yet &mdash; they will be assigned by fallback.</span>`
                                : `<span style="color:${C.green};font-weight:600;"> All ${scored} students have scores.</span>`}
                        </div>
                    </div>

                    <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                                box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                                border:1px solid ${C.border};">
                        <h3 style="margin:0 0 1rem;font-size:0.95rem;font-weight:700;color:${C.text};">How It Works</h3>
                        ${[
                            ['\uD83C\uDFC6','1. Rank students','Sort all students by ranking score (high &rarr; low)'],
                            ['\u2B50','2. Apply preferences','Each student gets their highest available preferred site'],
                            ['\u2696\uFE0F','3. Fallback','Students with no preference or full sites: assigned to least-loaded active site'],
                            ['\uD83D\uDCBE','4. Save','Results written directly to Supabase rotation_assignments'],
                        ].map(([ic,title,desc]) => `
                            <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;">
                                <span style="font-size:1.1rem;flex-shrink:0;margin-top:1px;">${ic}</span>
                                <div>
                                    <div style="font-size:0.82rem;font-weight:700;color:${C.text};">${title}</div>
                                    <div style="font-size:0.75rem;color:${C.muted};">${desc}</div>
                                </div>
                            </div>`).join('')}
                    </div>
                </div>

                <!-- Right: Current results + Top 10 -->
                <div style="display:grid;gap:1rem;">
                    <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                                box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                                border:1px solid ${C.border};">
                        <h3 style="margin:0 0 1rem;font-size:0.95rem;font-weight:700;color:${C.text};">Current Results</h3>
                        ${[
                            ['Assigned / Total', placed+' / '+st.length, C.green   ],
                            ['Got #1 Choice',    choice1,                  C.primaryMd],
                            ['Sites in Use',     sitesUsed,                C.blue    ],
                            ['Unassigned',       pending, pending>0?C.amber:C.muted ],
                            ['With Scores',      scored+' / '+st.length,  C.purple  ],
                        ].map(([lbl,val,col]) => `
                            <div style="display:flex;justify-content:space-between;align-items:center;
                                        padding:8px 0;border-bottom:1px solid ${C.border};">
                                <span style="font-size:0.82rem;color:${C.muted};">${lbl}</span>
                                <span style="font-size:0.95rem;font-weight:700;color:${col};">${val}</span>
                            </div>`).join('')}
                    </div>

                    <div style="background:${C.card};border-radius:18px;overflow:hidden;
                                box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                                border:1px solid ${C.border};">
                        <div style="padding:1rem 1.25rem;border-bottom:2px solid ${C.border};
                                    background:linear-gradient(135deg,#fff7ed,#fffbeb);">
                            <h3 style="margin:0;font-size:0.95rem;font-weight:700;color:#b45309;">\uD83C\uDFC6 Top 10 Ranked Students</h3>
                        </div>
                        <div style="overflow-x:auto;">
                            <table style="width:100%;border-collapse:collapse;">
                                <thead>
                                    <tr style="background:#f8fafc;border-bottom:1px solid ${C.border};">
                                        <th style="${_th('center')}">#</th>
                                        <th style="${_th('left')}">Student</th>
                                        <th style="${_th('center')}">Score</th>
                                        <th style="${_th('left')}">Assigned To</th>
                                    </tr>
                                </thead>
                                <tbody>${rankRows}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    window.appeHubRunMatch = async function () {
        const sb = window.SupabaseAuth?.supabase;
        if (!sb) { alert('Supabase not connected.'); return; }

        const { students, sites, assignments, preferences } = _data;
        const activeSites = sites.filter(s => s.is_active !== false);
        if (!activeSites.length) { alert('No active rotation sites available.'); return; }

        const studentsWithScores = students.filter(s => {
            const score = assignments.find(a => String(a.student_id) === String(s.id))?.student_score;
            return score != null;
        });
        if (!studentsWithScores.length) { alert('No students have scores yet. Enter scores in the Scores tab first.'); return; }

        if (!confirm(`Run 10-block auto-match for ${studentsWithScores.length} student(s)?\nThis will replace existing auto-assignments.`)) return;

        // Load block-level availability
        const { data: avail, error: avErr } = await sb.from('rotation_site_availability').select('*');
        if (avErr) { alert('Error loading availability: ' + avErr.message); return; }

        // Block slot map: { site_id: { block_number: remaining_slots } }
        const slotMap = {};
        (avail || []).forEach(a => {
            if (!slotMap[a.site_id]) slotMap[a.site_id] = {};
            slotMap[a.site_id][a.block_number] = a.max_students;
        });

        // Score map: numeric student_id → score
        const scoreMap = {};
        assignments.forEach(a => { if (a.student_score != null) scoreMap[String(a.student_id)] = a.student_score; });

        // Preference map: auth_uuid → [{rank, site_id}] sorted by rank
        // Bridge: numeric student_id → auth_uuid via numericToAuthId
        const prefMap = {};
        preferences.forEach(p => {
            if (!prefMap[p.student_id]) prefMap[p.student_id] = [];
            prefMap[p.student_id].push({ rank: p.preference_rank, site_id: p.site_id });
        });
        Object.values(prefMap).forEach(arr => arr.sort((a,b) => a.rank - b.rank));

        // Sort students by score DESC
        const sorted = [...studentsWithScores].sort((a,b) =>
            (scoreMap[String(b.id)] ?? -1) - (scoreMap[String(a.id)] ?? -1)
        );

        const results = [];
        const now = new Date().toISOString();

        for (const student of sorted) {
            // student.id IS the auth UUID — direct lookup, no bridge needed
            const prefs = prefMap[student.id] || [];
            const assignedSiteIds = new Set();
            const score = scoreMap[String(student.id)] ?? null;

            for (let block = 1; block <= 10; block++) {
                let bestSite = null, bestRank = null;

                // Try preferred sites in rank order
                for (const pref of prefs) {
                    if (assignedSiteIds.has(pref.site_id)) continue;
                    if ((slotMap[pref.site_id]?.[block] || 0) > 0) {
                        bestSite = activeSites.find(s => s.id === pref.site_id);
                        bestRank = pref.rank;
                        break;
                    }
                }

                // Fallback: any available site not yet used by this student
                if (!bestSite) {
                    bestSite = activeSites.find(s =>
                        !assignedSiteIds.has(s.id) && (slotMap[s.id]?.[block] || 0) > 0
                    );
                }

                if (bestSite) {
                    slotMap[bestSite.id][block]--;
                    assignedSiteIds.add(bestSite.id);
                    results.push({
                        student_id: student.id,
                        student_name: student.name || student.id,
                        student_score: score,
                        site_id: bestSite.id,
                        block_number: block,
                        academic_year: _year,
                        preference_rank_received: bestRank || null,
                        assignment_method: bestRank ? 'auto' : 'auto-fallback',
                        assigned_at: now,
                    });
                } else {
                    results.push({
                        student_id: student.id,
                        student_name: student.name || student.id,
                        student_score: score,
                        site_id: null,
                        block_number: block,
                        academic_year: _year,
                        preference_rank_received: null,
                        assignment_method: 'unassigned',
                        assigned_at: now,
                    });
                }
            }
        }

        if (!results.length) { alert('No assignments could be generated.'); return; }

        try {
            const { error } = await sb.from('rotation_assignments')
                .upsert(results, { onConflict: 'student_id,block_number,academic_year' });
            if (error) throw error;

            const placed = results.filter(r => r.site_id).length;
            const byPref = results.filter(r => r.preference_rank_received).length;
            alert(`✅ Auto-match complete!\n${sorted.length} students × 10 blocks = ${results.length} slots\n⭐ ${byPref} matched to a preferred site\n📍 ${placed} total placed`);
            await _loadData();
            const panel = document.getElementById('appe-hub-panel');
            if (panel) panel.innerHTML = _renderTab('schedule');
        } catch (e) { alert('Error saving assignments: ' + e.message); }
    };

    /* ═══════════════════════════════════════════════════════════
       TAB 6 - EVALUATIONS  (student-centric accordion + SPLE)
    ═══════════════════════════════════════════════════════════ */
    function _tabEvaluations() {
        const { students: st, assignments: as, sites: si, evaluations: ev } = _data;
        const spleStore = _getSPLEStore();

        if (!st.length) {
            return _emptyState('\uD83D\uDCDD','No Students Found',
                'Ensure P4 students are in Supabase with cohort "P4" or "APPE".');
        }

        /* per-student lookups */
        const evalBySt = {};
        ev.forEach(e => {
            const k = String(e.student_id);
            if (!evalBySt[k]) evalBySt[k] = [];
            evalBySt[k].push(e);
        });
        const assignBySt = {};
        as.forEach(a => {
            const k = String(a.student_id);
            if (!assignBySt[k]) assignBySt[k] = [];
            assignBySt[k].push(a);
        });

        const _scoreStyle = (sc) => {
            if (isNaN(sc)) return [C.muted,'#fff'];
            if (sc >= 4)   return [C.green, C.greenPl];
            if (sc >= 3)   return [C.amber, C.amberPl];
            return [C.red, C.redPl];
        };
        const _spleStyle = (sc) => {
            if (isNaN(sc)) return [C.muted,'#fff'];
            if (sc >= 85) return [C.green, C.greenPl];
            if (sc >= 70) return [C.blue,  C.bluePl];
            if (sc >= 60) return [C.amber, C.amberPl];
            return [C.red, C.redPl];
        };

        const studentRows = st.map(student => {
            const sid         = String(student.id);
            const spleData    = spleStore[sid] || {};
            const stEvals     = evalBySt[sid]  || [];
            const stAssigns   = (assignBySt[sid] || []).filter(a => a.site_id);

            /* ── Rotation rows ── */
            const rotRows = stAssigns.length
                ? stAssigns.map((a, idx) => {
                    const site    = si.find(s => s.id === a.site_id) || {};
                    const isClin  = (site.rotation_type || 'clinical') !== 'non-clinical';
                    const typePill = isClin
                        ? `<span style="background:#e3f2fd;color:#1565c0;padding:2px 7px;border-radius:9px;font-size:0.7rem;font-weight:600;">Clinical</span>`
                        : `<span style="background:#e0f7fa;color:#00695c;padding:2px 7px;border-radius:9px;font-size:0.7rem;font-weight:600;">Non-clinical</span>`;
                    const existEval = stEvals.find(e => e.rotation_name === site.site_name || String(e.rotation_name) === String(a.site_id));
                    const curScore  = existEval ? String(existEval.overall_score ?? existEval.rating_overall ?? existEval.score ?? '') : '';
                    const [fc, bc]  = _scoreStyle(parseFloat(curScore));
                    return `
                        <tr style="background:#fafafa;border-bottom:1px solid ${C.border};">
                            <td style="padding:10px 14px;font-size:0.8rem;color:${C.muted};font-weight:600;">R${idx+1}</td>
                            <td style="padding:10px 14px;">
                                <div style="font-size:0.85rem;font-weight:600;color:${C.text};">${site.site_name || '\u2014'}</div>
                                <div style="margin-top:3px;">${typePill}</div>
                            </td>
                            <td style="padding:10px 14px;font-size:0.8rem;color:${C.muted};">${site.preceptor_name || '\u2014'}</td>
                            <td style="padding:10px 14px;text-align:center;">
                                <div style="display:inline-flex;align-items:center;gap:6px;">
                                    <input type="number" min="0" max="5" step="0.1"
                                           value="${curScore}" placeholder="\u2014"
                                           style="width:62px;padding:5px 6px;border:1.5px solid ${C.border};border-radius:8px;
                                                  text-align:center;font-size:0.85rem;font-weight:600;
                                                  color:${curScore?fc:C.muted};background:${curScore?bc:'#fff'};"
                                           onblur="window.appeHubSaveEvalInline('${sid}','${a.site_id}','${(site.site_name||'').replace(/'/g,"\\'")}',this.value)"
                                           oninput="this.style.color='${C.text}';this.style.background='#fff';">
                                    <span id="eval-saved-${sid}-${a.site_id}" style="font-size:0.75rem;color:${C.green};min-width:12px;"></span>
                                </div>
                            </td>
                            <td style="padding:10px 14px;text-align:center;font-size:0.78rem;color:${C.muted};">/ 5</td>
                        </tr>`;
                }).join('')
                : `<tr style="background:#fafafa;"><td colspan="5" style="padding:12px 14px;font-size:0.82rem;color:${C.muted};font-style:italic;">No rotation assigned yet — run Auto-Match first.</td></tr>`;

            /* ── SPLE rows ── */
            const spleRows = [1,2,3,4,5,6].map(n => {
                const val    = spleData[`exam${n}`];
                const hasVal = val !== undefined && val !== null && val !== '';
                const [fc2, bc2] = _spleStyle(parseFloat(val));
                return `
                    <tr style="background:#fdf8ff;border-bottom:1px solid ${C.border};">
                        <td style="padding:10px 14px;font-size:0.8rem;color:${C.purple};font-weight:600;">SPLE</td>
                        <td style="padding:10px 14px;">
                            <div style="font-size:0.85rem;font-weight:600;color:${C.text};">Mock Exam ${n}</div>
                        </td>
                        <td style="padding:10px 14px;font-size:0.78rem;color:${C.muted};">SPLE Preparation</td>
                        <td style="padding:10px 14px;text-align:center;">
                            <div style="display:inline-flex;align-items:center;gap:6px;">
                                <input type="number" min="0" max="100" step="1"
                                       value="${hasVal ? val : ''}" placeholder="\u2014"
                                       style="width:66px;padding:5px 6px;border:1.5px solid ${C.border};border-radius:8px;
                                              text-align:center;font-size:0.85rem;font-weight:600;
                                              color:${hasVal?fc2:C.muted};background:${hasVal?bc2:'#fff'};"
                                       onblur="window.appeHubSaveSPLEInline('${sid}',${n},this.value)"
                                       oninput="this.style.color='${C.text}';this.style.background='#fff';">
                                <span id="sple-saved-${sid}-${n}" style="font-size:0.75rem;color:${C.green};min-width:12px;"></span>
                            </div>
                        </td>
                        <td style="padding:10px 14px;text-align:center;font-size:0.78rem;color:${C.muted};">/ 100</td>
                    </tr>`;
            }).join('');

            /* ── Accordion header summary ── */
            const evalsDone  = stAssigns.filter(a => {
                const s = si.find(x => x.id === a.site_id);
                return s && stEvals.find(e => e.rotation_name === s.site_name);
            }).length;
            const spleDone   = [1,2,3,4,5,6].filter(n => spleData[`exam${n}`] !== undefined && spleData[`exam${n}`] !== '').length;
            const spleVals   = [1,2,3,4,5,6].map(n => parseFloat(spleData[`exam${n}`])).filter(v => !isNaN(v));
            const spleLatest = spleVals.length ? spleVals[spleVals.length-1] : null;
            const [spleFc, spleBc] = _spleStyle(spleLatest);

            const evalPill = evalsDone > 0
                ? `<span style="padding:2px 8px;border-radius:9px;font-size:0.71rem;font-weight:600;background:${C.bluePl};color:${C.blue};">${evalsDone}/${stAssigns.length} eval${evalsDone!==1?'s':''}</span>` : '';
            const splePill = spleLatest !== null
                ? `<span style="padding:2px 8px;border-radius:9px;font-size:0.71rem;font-weight:600;background:${spleBc};color:${spleFc};">SPLE latest: ${spleLatest}</span>` : '';
            const spleCountPill = spleDone > 0 && spleLatest === null
                ? `<span style="padding:2px 8px;border-radius:9px;font-size:0.71rem;font-weight:600;background:${C.purplePl};color:${C.purple};">${spleDone}/6 SPLE</span>` : '';

            return `
                <div style="background:${C.card};border-radius:14px;margin-bottom:6px;
                            box-shadow:0 1px 3px rgba(0,0,0,0.04);border:1px solid ${C.border};overflow:hidden;">
                    <div onclick="window.appeHubToggleAccordion('${sid}')"
                         style="display:flex;align-items:center;justify-content:space-between;
                                padding:0.9rem 1.25rem;cursor:pointer;user-select:none;">
                        <div style="display:flex;align-items:center;gap:12px;min-width:0;">
                            <div style="width:36px;height:36px;border-radius:50%;background:${C.primaryPl};flex-shrink:0;
                                        display:flex;align-items:center;justify-content:center;
                                        font-size:0.9rem;font-weight:700;color:${C.primary};">
                                ${(student.name||'?').charAt(0).toUpperCase()}
                            </div>
                            <div style="min-width:0;">
                                <div style="font-size:0.9rem;font-weight:700;color:${C.text};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${student.name || student.id}</div>
                                <div style="font-size:0.71rem;color:${C.muted};">ID: ${student.id}</div>
                            </div>
                            <div style="display:flex;gap:5px;flex-wrap:wrap;margin-left:4px;">
                                ${evalPill}${splePill}${spleCountPill}
                            </div>
                        </div>
                        <span id="appe-eval-arrow-${sid}" style="font-size:0.75rem;color:${C.muted};flex-shrink:0;margin-left:8px;">&#9654;</span>
                    </div>
                    <div id="appe-eval-detail-${sid}" style="display:none;border-top:1px solid ${C.border};">
                        <table style="width:100%;border-collapse:collapse;">
                            <thead>
                                <tr style="background:#f8fafc;">
                                    <th style="${_th('left')};width:46px;">#</th>
                                    <th style="${_th('left')};">Site / Exam</th>
                                    <th style="${_th('left')};">Preceptor / Category</th>
                                    <th style="${_th('center')};width:110px;">Score</th>
                                    <th style="${_th('center')};width:50px;">Scale</th>
                                </tr>
                            </thead>
                            <tbody>${rotRows}${spleRows}</tbody>
                        </table>
                    </div>
                </div>`;
        }).join('');

        return `
        <div style="display:grid;gap:1.25rem;">

            <!-- Header -->
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
                <div>
                    <h2 style="margin:0;font-size:1.15rem;font-weight:700;color:${C.text};">Evaluations</h2>
                    <p style="margin:4px 0 0;font-size:0.82rem;color:${C.muted};">
                        ${st.length} students &nbsp;&middot;&nbsp;
                        ${ev.length} eval record${ev.length!==1?'s':''} &nbsp;&middot;&nbsp;
                        ${Object.keys(spleStore).length} SPLE entries
                    </p>
                </div>
                <input type="search" placeholder="&#128269; Search student&hellip;"
                       oninput="window.appeHubFilterEvals(this.value)"
                       style="padding:8px 16px;border:1.5px solid ${C.border};border-radius:50px;
                              font-size:0.85rem;outline:none;min-width:220px;">
            </div>

            <!-- Rotation eval import -->
            <div style="background:${C.primaryPl};border-radius:14px;padding:1.1rem 1.25rem;border:1px solid ${C.primaryMd}20;">
                <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
                    <div>
                        <h4 style="margin:0 0 3px;font-size:0.88rem;font-weight:700;color:${C.primary};">Bulk Import Rotation Evaluations</h4>
                        <p style="margin:0;font-size:0.77rem;color:${C.primaryMd};">Columns: <code>student_id, student_name, rotation_name, preceptor_name, overall_score</code> &mdash; scores 1&ndash;5</p>
                    </div>
                    <div style="display:flex;gap:8px;">
                        <input type="file" id="appe-eval-csv" accept=".csv" style="display:none;" onchange="window.appeHubImportCSV(this)">
                        <button onclick="document.getElementById('appe-eval-csv').click()" style="${_btn(C.blue,C.bluePl)}">Import CSV</button>
                        <button onclick="window.appeHubExportEvals()" style="${_btn(C.primary,C.primaryPl)}">Export</button>
                    </div>
                </div>
            </div>

            <!-- SPLE import -->
            <div style="background:${C.purplePl};border-radius:14px;padding:1.1rem 1.25rem;border:1px solid ${C.purple}20;">
                <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.75rem;">
                    <div>
                        <h4 style="margin:0 0 3px;font-size:0.88rem;font-weight:700;color:${C.purple};">Bulk Import SPLE Scores</h4>
                        <p style="margin:0;font-size:0.77rem;color:${C.purple};">Columns: <code>student_id, exam1, exam2, exam3, exam4, exam5, exam6</code> &mdash; scores 0&ndash;100</p>
                    </div>
                    <div>
                        <input type="file" id="appe-sple-csv" accept=".csv" style="display:none;" onchange="window.appeHubImportSPLECSV(this)">
                        <button onclick="document.getElementById('appe-sple-csv').click()" style="${_btn(C.purple,C.purplePl)}">Import SPLE CSV</button>
                    </div>
                </div>
            </div>

            <!-- Student accordion list -->
            <div id="appe-eval-list">${studentRows}</div>
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
                (e.created_at||e.submitted_at) ? new Date(e.created_at||e.submitted_at).toLocaleDateString() : '',
            ]),
        ]);
    };

    /* ── New evaluation helpers ───────────────────────────────── */
    window.appeHubToggleAccordion = function (sid) {
        const row   = document.getElementById(`appe-eval-detail-${sid}`);
        const arrow = document.getElementById(`appe-eval-arrow-${sid}`);
        if (!row) return;
        const isOpen = row.style.display !== 'none';
        row.style.display = isOpen ? 'none' : 'block';
        if (arrow) arrow.innerHTML = isOpen ? '&#9654;' : '&#9660;';
    };

    window.appeHubSaveEvalInline = async function (studentId, siteId, siteName, val) {
        if (!(await _requirePassword())) return;
        const score = parseFloat(val);
        const sb    = window.SupabaseAuth?.supabase;
        if (!sb) return;
        const student  = _data.students.find(s => String(s.id) === String(studentId));
        const site     = _data.sites.find(s => String(s.id) === String(siteId));
        const rotName  = site?.site_name || siteName;
        const record   = {
            student_id:     studentId,
            student_name:   student?.name || null,
            rotation_name:  rotName,
            preceptor_name: site?.preceptor_name || null,
            overall_score:  isNaN(score) ? null : score,
        };
        const ind = document.getElementById(`eval-saved-${studentId}-${siteId}`);
        try {
            const { error } = await sb.from('rotation_evaluations')
                .upsert(record, { onConflict: 'student_id,rotation_name' });
            if (error) throw error;
            if (ind) { ind.textContent = '\u2713'; ind.style.color = '#15803d'; }
            const ex = _data.evaluations.find(e => String(e.student_id)===String(studentId) && e.rotation_name===rotName);
            if (ex) ex.overall_score = record.overall_score;
            else    _data.evaluations.push({ ...record, created_at: new Date().toISOString() });
        } catch(e) {
            if (ind) { ind.textContent = '\u2717'; ind.style.color = '#c62828'; }
        }
        if (ind) setTimeout(() => { if (ind) ind.textContent = ''; }, 2000);
    };

    window.appeHubSaveSPLEInline = async function (studentId, examNum, val) {
        if (!(await _requirePassword())) return;
        const store = _getSPLEStore();
        if (!store[studentId]) store[studentId] = {};
        const score = parseFloat(val);
        if (isNaN(score) || val === '') delete store[studentId][`exam${examNum}`];
        else store[studentId][`exam${examNum}`] = score;
        _saveSPLEStore(store);
        const sb = window.SupabaseAuth?.supabase;
        if (sb) {
            if (!isNaN(score) && val !== '') {
                await sb.from('student_sple_scores').upsert({
                    student_id: studentId, academic_year: _year,
                    exam_number: examNum, score,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'student_id,academic_year,exam_number' });
            } else {
                await sb.from('student_sple_scores').delete()
                    .eq('student_id', studentId).eq('academic_year', _year).eq('exam_number', examNum);
            }
        }
        const ind = document.getElementById(`sple-saved-${studentId}-${examNum}`);
        if (ind) {
            ind.textContent = '\u2713'; ind.style.color = '#15803d';
            setTimeout(() => { if (ind) ind.textContent = ''; }, 1500);
        }
    };

    window.appeHubFilterEvals = function (query) {
        const q = (query || '').toLowerCase().trim();
        document.querySelectorAll('#appe-eval-list > div').forEach(el => {
            el.style.display = !q || el.textContent.toLowerCase().includes(q) ? '' : 'none';
        });
    };

    window.appeHubImportSPLECSV = function (input) {
        const file = input.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const lines = e.target.result.replace(/\r/g,'').split('\n').filter(l => l.trim());
            if (lines.length < 2) { alert('CSV is empty.'); return; }
            const clean   = s => s.trim().replace(/^["']|["']$/g,'').toLowerCase().replace(/\s+/g,'_');
            const headers = lines[0].split(',').map(clean);
            const idCol   = headers.findIndex(h => h==='student_id'||h==='id');
            const store   = _getSPLEStore();
            let matched   = 0;
            lines.slice(1).forEach(line => {
                const cols = line.split(',').map(c => c.trim().replace(/^["']|["']$/g,''));
                const sid  = idCol >= 0 ? cols[idCol] : null;
                if (!sid) return;
                if (!store[sid]) store[sid] = {};
                [1,2,3,4,5,6].forEach(n => {
                    const ci = headers.findIndex(h => h===`exam${n}`);
                    if (ci >= 0 && cols[ci] !== '') {
                        const v = parseFloat(cols[ci]);
                        if (!isNaN(v)) { store[sid][`exam${n}`] = v; matched++; }
                    }
                });
            });
            _saveSPLEStore(store);
            alert(`SPLE import complete: ${matched} score${matched!==1?'s':''} updated.`);
            const panel = document.getElementById('appe-hub-panel');
            if (panel) panel.innerHTML = _tabEvaluations();
            input.value = '';
        };
        reader.readAsText(file);
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
       TAB 9 - OUTCOMES
    ═══════════════════════════════════════════════════════════ */
    function _tabOutcomes() {
        const { evaluations: ev, students: st, sites: si, assignments: as, settings, allComparisons } = _data;
        const year = settings?.academic_year || '2025-2026';

        /* ── 3-Year Comparison ── */
        const activeYear = settings?.academic_year || '2025-2026';
        const compCard = `
        <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                    box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                    border:1px solid ${C.border};margin-bottom:1.5rem;">
            <h3 style="margin:0 0 1.25rem;font-size:0.95rem;font-weight:700;color:${C.text};">📊 Year-over-Year Comparison</h3>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;">
                ${YEARS.map(yr => {
                    const d = allComparisons[yr] || {};
                    const isActive = yr === activeYear;
                    const isCurrent = yr === _year;
                    return `
                    <div style="border-radius:14px;padding:1.25rem;text-align:center;
                                background:${isCurrent ? C.primaryPl : '#f8fafc'};
                                border:2px solid ${isCurrent ? C.primary : C.border};">
                        <div style="font-size:0.78rem;font-weight:700;color:${isCurrent?C.primary:C.muted};
                                    margin-bottom:10px;letter-spacing:0.5px;">
                            ${yr}${isActive ? ' ★' : ''}
                        </div>
                        <div style="display:flex;flex-direction:column;gap:8px;">
                            <div>
                                <div style="font-size:1.6rem;font-weight:800;color:${C.text};line-height:1;">
                                    ${d.studentCount || '—'}
                                </div>
                                <div style="font-size:0.72rem;color:${C.muted};">Students</div>
                            </div>
                            <div style="height:1px;background:${C.border};"></div>
                            <div>
                                <div style="font-size:1.3rem;font-weight:700;color:${C.green};line-height:1;">
                                    ${d.avgScore ? d.avgScore + '%' : '—'}
                                </div>
                                <div style="font-size:0.72rem;color:${C.muted};">Avg Score</div>
                            </div>
                            <div style="height:1px;background:${C.border};"></div>
                            <div>
                                <div style="font-size:1.3rem;font-weight:700;color:${C.blue};line-height:1;">
                                    ${d.total ? Math.round(d.preferred/d.total*100)+'%' : '—'}
                                </div>
                                <div style="font-size:0.72rem;color:${C.muted};">Matched Preferred</div>
                            </div>
                            <div style="height:1px;background:${C.border};"></div>
                            <div>
                                <div style="font-size:1.3rem;font-weight:700;color:${C.amber};line-height:1;">
                                    ${d.placed != null ? d.placed : '—'}
                                </div>
                                <div style="font-size:0.72rem;color:${C.muted};">Blocks Placed</div>
                            </div>
                        </div>
                        ${isCurrent ? '' : `
                        <button onclick="window.appeHubSwitchYear('${yr}')"
                                style="margin-top:12px;background:${C.primary};color:#fff;border:none;
                                       padding:5px 14px;border-radius:50px;cursor:pointer;font-size:0.75rem;font-weight:700;">
                            View ${yr}
                        </button>`}
                    </div>`;
                }).join('')}
            </div>
        </div>`;

        /* ── Student Satisfaction (from real eval ratings) ── */
        const ratingFields = [
            { key: 'rating_learning',  label: 'Learning Experience' },
            { key: 'rating_preceptor', label: 'Preceptor Support'   },
            { key: 'rating_career',    label: 'Career Relevance'    },
        ];
        const overallScores = ev.map(e => parseFloat(e.overall_score ?? e.rating_overall ?? e.score ?? e.rating)).filter(v => !isNaN(v));
        const avgOverall = overallScores.length ? (overallScores.reduce((a,b)=>a+b,0)/overallScores.length).toFixed(1) : null;
        const stars = n => {
            const full  = Math.floor(n);
            const half  = n - full >= 0.5;
            return '\u2605'.repeat(full) + (half ? '\u00BD' : '') + '\u2606'.repeat(5 - full - (half?1:0));
        };

        const satisfactionCard = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1.25rem;font-size:0.95rem;font-weight:700;color:${C.text};">\uD83D\uDE0A Student Satisfaction</h3>
                ${avgOverall ? `
                <div style="text-align:center;margin-bottom:1.25rem;">
                    <div style="font-size:3rem;font-weight:800;color:${C.green};line-height:1;">${avgOverall}</div>
                    <div style="font-size:1.1rem;color:#f6ad55;margin:4px 0;">${stars(parseFloat(avgOverall))}</div>
                    <div style="font-size:0.78rem;color:${C.muted};">Out of 5.0 &nbsp;&middot;&nbsp; ${overallScores.length} responses</div>
                </div>
                ${ratingFields.map(f => {
                    const vals = ev.map(e => parseFloat(e[f.key])).filter(v => !isNaN(v));
                    const avg  = vals.length ? (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1) : null;
                    if (!avg) return '';
                    return `
                    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
                        <span style="flex:0 0 150px;font-size:0.8rem;color:${C.text};">${f.label}</span>
                        <div style="flex:1;background:#f1f5f9;border-radius:50px;height:7px;overflow:hidden;">
                            <div style="width:${parseFloat(avg)/5*100}%;background:${C.primaryMd};height:100%;border-radius:50px;"></div>
                        </div>
                        <span style="flex:0 0 28px;font-size:0.8rem;font-weight:700;color:${C.green};text-align:right;">${avg}</span>
                    </div>`;
                }).join('')}` : `<p style="color:${C.muted};text-align:center;padding:1.5rem 0;font-size:0.85rem;">No evaluation data yet</p>`}
            </div>`;

        /* ── Red Flags (at-risk students) ── */
        const compStore  = _getComplianceStore();
        const spleStore  = _getSPLEStore();
        const redFlags   = [];
        st.forEach(s => {
            const comp = compStore[s.id] || {};
            const missing = COMPLIANCE_ITEMS.filter(it => comp[it.key] !== 'ok');
            if (missing.length >= 2) redFlags.push({ student: s.name || s.id, issue: `${missing.length} compliance items missing`, severity: 'critical' });
            else if (missing.length === 1) redFlags.push({ student: s.name || s.id, issue: `${missing[0].label} missing`, severity: 'moderate' });
            const exams = spleStore[s.id] || {};
            const spleVals = [1,2,3,4,5,6].map(n => parseFloat(exams[`exam${n}`])).filter(v => !isNaN(v));
            if (spleVals.length && spleVals[spleVals.length-1] < 60) {
                redFlags.push({ student: s.name || s.id, issue: `SPLE score ${spleVals[spleVals.length-1]} — below 60`, severity: 'critical' });
            }
        });
        const critical = redFlags.filter(f => f.severity === 'critical');
        const moderate = redFlags.filter(f => f.severity === 'moderate');

        const redFlagsCard = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1.25rem;font-size:0.95rem;font-weight:700;color:${C.text};">\uD83D\uDEA9 Red Flags</h3>
                <div style="display:flex;gap:1.5rem;margin-bottom:1.25rem;">
                    <div style="text-align:center;flex:1;">
                        <div style="font-size:2rem;font-weight:800;color:#e53e3e;">${critical.length}</div>
                        <div style="font-size:0.75rem;color:${C.muted};">Critical</div>
                    </div>
                    <div style="text-align:center;flex:1;">
                        <div style="font-size:2rem;font-weight:800;color:#d97706;">${moderate.length}</div>
                        <div style="font-size:0.75rem;color:${C.muted};">Moderate</div>
                    </div>
                    <div style="text-align:center;flex:1;">
                        <div style="font-size:2rem;font-weight:800;color:${C.text};">${redFlags.length}</div>
                        <div style="font-size:0.75rem;color:${C.muted};">Total</div>
                    </div>
                </div>
                <div style="max-height:200px;overflow-y:auto;display:flex;flex-direction:column;gap:6px;">
                    ${redFlags.length ? redFlags.map(f => `
                        <div style="padding:8px 12px;border-radius:8px;border-left:3px solid ${f.severity==='critical'?'#e53e3e':'#d97706'};
                                    background:${f.severity==='critical'?'#fff5f5':'#fffbeb'};">
                            <div style="font-size:0.83rem;font-weight:600;color:${C.text};">${f.student}</div>
                            <div style="font-size:0.75rem;color:${C.muted};margin-top:2px;">${f.issue}</div>
                        </div>`).join('')
                    : `<p style="color:${C.muted};text-align:center;padding:1rem 0;font-size:0.85rem;">\u2705 No red flags — great work!</p>`}
                </div>
            </div>`;

        /* ── Preceptor Metrics ── */
        const precMap = {};
        ev.forEach(e => {
            if (!e.preceptor_name) return;
            if (!precMap[e.preceptor_name]) precMap[e.preceptor_name] = [];
            const s = parseFloat(e.overall_score ?? e.rating_overall ?? e.score ?? e.rating);
            if (!isNaN(s)) precMap[e.preceptor_name].push(s);
        });
        const precList = Object.entries(precMap)
            .map(([name, scores]) => ({ name, avg: (scores.reduce((a,b)=>a+b,0)/scores.length).toFixed(1), n: scores.length }))
            .sort((a,b) => b.avg - a.avg).slice(0,3);
        const totalPreceptors = [...new Set(si.map(s => s.preceptor_name).filter(Boolean))].length;

        const preceptorCard = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1.25rem;font-size:0.95rem;font-weight:700;color:${C.text};">\uD83D\uDC68\u200D\u2695\uFE0F Preceptor Metrics</h3>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.25rem;">
                    <div style="text-align:center;padding:12px;background:#f0fdf4;border-radius:12px;">
                        <div style="font-size:1.8rem;font-weight:800;color:${C.green};">${totalPreceptors}</div>
                        <div style="font-size:0.72rem;color:${C.muted};">Total Preceptors</div>
                    </div>
                    <div style="text-align:center;padding:12px;background:#eff6ff;border-radius:12px;">
                        <div style="font-size:1.8rem;font-weight:800;color:${C.blue};">${avgOverall || '\u2014'}</div>
                        <div style="font-size:0.72rem;color:${C.muted};">Avg Rating</div>
                    </div>
                </div>
                ${precList.length ? `
                <div style="font-size:0.8rem;font-weight:700;color:${C.muted};margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px;">Top Performers</div>
                ${precList.map((p,i) => `
                    <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid ${C.border};">
                        <span style="font-size:1rem;">${i===0?'\uD83E\uDD47':i===1?'\uD83E\uDD48':'\uD83E\uDD49'}</span>
                        <div style="flex:1;">
                            <div style="font-size:0.83rem;font-weight:600;color:${C.text};">${p.name}</div>
                            <div style="font-size:0.7rem;color:${C.muted};">${p.n} student${p.n!==1?'s':''}</div>
                        </div>
                        <span style="font-size:1rem;font-weight:800;color:${C.primary};">\u2605 ${p.avg}</span>
                    </div>`).join('')}` : `<p style="color:${C.muted};font-size:0.82rem;text-align:center;padding:1rem 0;">No evaluation data yet</p>`}
            </div>`;

        /* ── Site Metrics ── */
        const activeSites  = si.filter(s => s.is_active !== false);
        const totalSlots   = activeSites.reduce((n,s) => n + (s.available_slots||0), 0);
        const placed       = as.filter(a => a.site_id).length;
        const utilPct      = totalSlots ? Math.round(placed/totalSlots*100) : 0;
        const siteEvals    = {};
        ev.forEach(e => {
            const a = as.find(x => String(x.student_id)===String(e.student_id));
            if (!a?.site_id) return;
            const site = si.find(s => s.id===a.site_id);
            if (!site) return;
            if (!siteEvals[site.id]) siteEvals[site.id] = { name: site.site_name, scores: [] };
            const sc = parseFloat(e.overall_score ?? e.rating_overall ?? e.score ?? e.rating);
            if (!isNaN(sc)) siteEvals[site.id].scores.push(sc);
        });
        const topSites = Object.values(siteEvals)
            .filter(s => s.scores.length)
            .map(s => ({ name: s.name, avg: (s.scores.reduce((a,b)=>a+b,0)/s.scores.length).toFixed(1), n: s.scores.length }))
            .sort((a,b) => b.avg - a.avg).slice(0,3);

        const siteCard = `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:1px solid ${C.border};">
                <h3 style="margin:0 0 1.25rem;font-size:0.95rem;font-weight:700;color:${C.text};">\uD83C\uDFE5 Site Metrics</h3>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                    <span style="font-size:0.83rem;color:${C.text};">Utilization</span>
                    <span style="font-size:1rem;font-weight:800;color:${utilPct>=80?C.green:utilPct>=50?C.amber:C.red};">${utilPct}%</span>
                </div>
                <div style="background:#f1f5f9;border-radius:50px;height:10px;overflow:hidden;margin-bottom:6px;">
                    <div style="width:${utilPct}%;background:linear-gradient(90deg,${C.primaryMd},${C.primaryLt});height:100%;border-radius:50px;"></div>
                </div>
                <div style="font-size:0.75rem;color:${C.muted};margin-bottom:1.25rem;">${placed} / ${totalSlots} students placed</div>
                ${topSites.length ? `
                <div style="font-size:0.8rem;font-weight:700;color:${C.muted};margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px;">Top Sites</div>
                ${topSites.map((s,i) => `
                    <div style="padding:10px 12px;background:#f8fafc;border-radius:10px;margin-bottom:6px;">
                        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">
                            <span style="font-size:0.83rem;font-weight:600;color:${C.text};">${i+1}. ${s.name}</span>
                            <span style="font-size:0.85rem;font-weight:800;color:${C.primary};">\u2605 ${s.avg}</span>
                        </div>
                        <div style="background:#e2e8f0;border-radius:50px;height:6px;overflow:hidden;">
                            <div style="width:${parseFloat(s.avg)/5*100}%;background:${C.primaryMd};height:100%;border-radius:50px;"></div>
                        </div>
                        <div style="font-size:0.7rem;color:${C.muted};margin-top:4px;">${s.n} eval${s.n!==1?'s':''}</div>
                    </div>`).join('')}` : `<p style="color:${C.muted};font-size:0.82rem;text-align:center;padding:1rem 0;">No evaluation data yet</p>`}
            </div>`;

        /* ── CLO-PLO-NQF & Outcome Domains (placeholder until data model is built) ── */
        const placeholderCard = (icon, title, msg) => `
            <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                        box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                        border:2px dashed ${C.border};text-align:center;">
                <div style="font-size:2rem;margin-bottom:8px;">${icon}</div>
                <div style="font-size:0.92rem;font-weight:700;color:${C.text};margin-bottom:6px;">${title}</div>
                <div style="font-size:0.78rem;color:${C.muted};">${msg}</div>
            </div>`;

        return `
        <div style="display:grid;gap:1.25rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <h2 style="margin:0;font-size:1.15rem;font-weight:700;color:${C.text};">Outcomes — ${_year}</h2>
                <span style="font-size:0.78rem;color:${C.muted};">Live data from Supabase &nbsp;&middot;&nbsp; ${ev.length} evaluations on record</span>
            </div>
            ${compCard}
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1.25rem;">
                ${satisfactionCard}
                ${redFlagsCard}
                ${preceptorCard}
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;">
                ${siteCard}
                <div style="display:grid;gap:1.25rem;">
                    ${placeholderCard('\uD83D\uDCDA','CLO \u2013 PLO \u2013 NQF Alignment','Curriculum mapping data coming soon. Will show coverage rate across CLOs, PLOs, and NQF levels.')}
                    ${placeholderCard('\uD83C\uDFC6','Outcome Domains','Knowledge \u00B7 Skills \u00B7 Values achievement tracking — requires assessment data entry.')}
                </div>
            </div>
        </div>`;
    }

    /* ═══════════════════════════════════════════════════════════
       TAB 8 - SETTINGS (now tab 10 in display order)
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

            ${_progressionPanel()}

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

    function _progressionPanel() {
        const all     = _data.allProfiles || [];
        const active  = all.filter(p => p.status !== 'alumni');
        const alumni  = all.filter(p => p.status === 'alumni');
        if (!all.length) return '';

        const yearOrder = { P1:1, P2:2, P3:3, P4:4 };
        const sorted = [...active].sort((a, b) =>
            (yearOrder[a.class_year] || 9) - (yearOrder[b.class_year] || 9) ||
            (a.full_name || '').localeCompare(b.full_name || '')
        );

        const yearStyle = {
            P1: `background:#e0f2fe;color:#0369a1`,
            P2: `background:#fef3c7;color:#92400e`,
            P3: `background:#ede9fe;color:#5b21b6`,
            P4: `background:#dcfce7;color:#166534`,
        };
        const nextYear = { P1:'P2', P2:'P3', P3:'P4' };

        const rows = sorted.map(p => {
            const uid  = p.user_id;
            const yr   = p.class_year || '—';
            const pill = yearStyle[yr] || `background:#f3f4f6;color:#374151`;
            const promoteBtn = nextYear[yr]
                ? `<button onclick="window.appePromoteStudent('${uid}','${yr}')"
                           style="background:${C.primary};color:#fff;border:none;padding:5px 14px;
                                  border-radius:50px;cursor:pointer;font-size:0.78rem;font-weight:700;margin-right:6px;">
                       → ${nextYear[yr]}
                   </button>` : '';
            const gradBtn = yr === 'P4'
                ? `<button onclick="window.appeGraduateStudent('${uid}')"
                           style="background:#7c3aed;color:#fff;border:none;padding:5px 14px;
                                  border-radius:50px;cursor:pointer;font-size:0.78rem;font-weight:700;">
                       🎓 Graduate
                   </button>` : '';
            return `
            <tr style="border-bottom:1px solid ${C.border};">
                <td style="padding:10px 12px;font-size:0.88rem;font-weight:600;color:${C.text};">${p.full_name || '—'}</td>
                <td style="padding:10px 12px;">
                    <span style="${pill};padding:3px 10px;border-radius:50px;font-size:0.78rem;font-weight:700;">${yr}</span>
                </td>
                <td style="padding:10px 12px;white-space:nowrap;">${promoteBtn}${gradBtn}</td>
            </tr>`;
        }).join('');

        const alumniChips = alumni.map(p =>
            `<span style="background:#f3f4f6;color:#374151;padding:4px 12px;border-radius:50px;
                          font-size:0.8rem;font-weight:600;">🎓 ${p.full_name || '—'}</span>`
        ).join('');

        return `
        <div style="background:${C.card};border-radius:18px;padding:1.5rem;
                    box-shadow:0 1px 3px rgba(0,0,0,0.06),0 8px 24px rgba(0,0,0,0.05);
                    border:1px solid ${C.border};">
            <h3 style="margin:0 0 4px;font-size:0.95rem;font-weight:700;color:${C.text};">Student Progression</h3>
            <p style="margin:0 0 1rem;font-size:0.8rem;color:${C.muted};">Promote students to the next year or graduate them to Alumni.</p>
            <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;">
                    <thead>
                        <tr style="background:#f8fafc;border-bottom:2px solid ${C.border};">
                            <th style="padding:8px 12px;text-align:left;font-size:0.78rem;color:${C.muted};font-weight:700;">Name</th>
                            <th style="padding:8px 12px;text-align:left;font-size:0.78rem;color:${C.muted};font-weight:700;">Year</th>
                            <th style="padding:8px 12px;text-align:left;font-size:0.78rem;color:${C.muted};font-weight:700;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
            ${alumni.length ? `
            <div style="margin-top:1rem;padding-top:1rem;border-top:1px solid ${C.border};">
                <div style="font-size:0.82rem;font-weight:700;color:${C.muted};margin-bottom:8px;">Alumni (${alumni.length})</div>
                <div style="display:flex;flex-wrap:wrap;gap:6px;">${alumniChips}</div>
            </div>` : ''}
        </div>`;
    }

    window.appePromoteStudent = async function (userId, currentYear) {
        const next = { P1:'P2', P2:'P3', P3:'P4' }[currentYear];
        if (!next) return;
        if (!confirm(`Promote this student from ${currentYear} to ${next}?`)) return;
        const sb = window.SupabaseAuth?.supabase;
        if (!sb) return;
        const { error } = await sb.from('user_profiles').update({ class_year: next }).eq('user_id', userId);
        if (error) { alert('Error: ' + error.message); return; }
        const p = (_data.allProfiles || []).find(x => x.user_id === userId);
        if (p) p.class_year = next;
        const panel = document.getElementById('appe-hub-panel');
        if (panel) panel.innerHTML = _tabSettings();
    };

    window.appeGraduateStudent = async function (userId) {
        if (!confirm('Graduate this student to Alumni? They will be added to the Alumni Directory and excluded from APPE operations.')) return;
        const sb = window.SupabaseAuth?.supabase;
        if (!sb) return;

        // 1. Mark as alumni in user_profiles
        const { error } = await sb.from('user_profiles').update({ status: 'alumni' }).eq('user_id', userId);
        if (error) { alert('Error: ' + error.message); return; }

        // 2. Add to alumni_profiles directory (the Alumni Unit)
        const p = (_data.allProfiles || []).find(x => x.user_id === userId);
        if (p) {
            p.status = 'alumni';
            const gradYear = new Date().getFullYear();
            // Check if already in alumni_profiles (avoid duplicate)
            const { data: existing } = await sb.from('alumni_profiles').select('id').eq('email', p.email).maybeSingle();
            if (!existing) {
                await sb.from('alumni_profiles').insert({
                    alumni_id:         'GRAD-' + (p.student_id || userId.slice(0,8)),
                    name:              p.full_name,
                    email:             p.email || '',
                    program:           'PharmD',
                    graduation_year:   gradYear,
                    student_id:        p.student_id || null,
                    status:            'employed',
                    engagement:        'moderate',
                    mentor_willing:    false,
                    preceptor_willing: false,
                    country:           'Saudi Arabia',
                });
            }
        }

        const panel = document.getElementById('appe-hub-panel');
        if (panel) panel.innerHTML = _tabSettings();
        alert('Student graduated and added to the Alumni Directory!');
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

    /* ═══════════════════════════════════════════════════════════
       TAB: SCORES — MS Survey Score Management
    ═══════════════════════════════════════════════════════════ */
    function _tabScores() {
        // Exclude alumni students
        const allStudents = _data.students || [];
        const students = allStudents.filter(s => {
            const authId = _data.numericToAuthId?.[String(s.id || s.student_id)];
            if (!authId) return true; // no profile found, keep them
            return _data.profileMap?.[authId]?.status !== 'alumni';
        });
        if (!students.length) {
            return `<div style="text-align:center;padding:4rem;color:${C.muted};">
                <div style="font-size:3rem;margin-bottom:1rem;">🏆</div>
                <p style="font-size:1.1rem;">No P4 students found.</p>
            </div>`;
        }

        // Build score lookup from rotation_assignments
        const scoreMap = {};
        (_data.assignments || []).forEach(a => {
            if (a.student_id && a.student_score != null) scoreMap[a.student_id] = a.student_score;
        });

        // Sort: scored students highest→lowest, then unscored alphabetically
        const sorted = [...students].sort((a, b) => {
            const sa = scoreMap[a.id || a.student_id];
            const sb2 = scoreMap[b.id || b.student_id];
            if (sa != null && sb2 != null) return sb2 - sa;
            if (sa != null) return -1;
            if (sb2 != null) return 1;
            return (a.name || '').localeCompare(b.name || '');
        });

        const MEDALS = ['🥇','🥈','🥉'];
        const rows = sorted.map((s, idx) => {
            const sid = s.id || s.student_id;
            const existingScore = scoreMap[sid] != null ? scoreMap[sid] : '';
            const rank = existingScore !== '' ? idx + 1 : null;
            const rankDisplay = rank ? (MEDALS[idx] || `<span style="font-weight:800;color:${C.muted};">#${rank}</span>`) : `<span style="color:${C.muted};">—</span>`;
            return `
            <tr id="score-row-${sid}" style="border-bottom:1px solid ${C.border};${existingScore !== '' && idx < 3 ? 'background:linear-gradient(90deg,rgba(27,94,32,0.04) 0%,transparent 100%);' : ''}">
                <td style="padding:12px 10px;text-align:center;font-size:1.1rem;">${rankDisplay}</td>
                <td style="padding:12px 14px;font-weight:600;color:${C.text};">${s.name || s.full_name || '—'}</td>
                <td style="padding:12px 14px;color:${C.muted};font-size:0.85rem;">${s.email || '—'}</td>
                <td style="padding:12px 8px;">
                    <input type="number" id="gpa-${sid}" min="0" max="100" step="0.1"
                           placeholder="0–100" oninput="window.appeCalcScore('${sid}')"
                           style="width:80px;padding:6px 8px;border:1px solid ${C.border};border-radius:8px;
                                  font-size:0.85rem;text-align:center;background:${C.card};">
                </td>
                <td style="padding:12px 8px;">
                    <input type="number" id="exp-${sid}" min="0" max="100" step="0.1"
                           placeholder="0–100" oninput="window.appeCalcScore('${sid}')"
                           style="width:80px;padding:6px 8px;border:1px solid ${C.border};border-radius:8px;
                                  font-size:0.85rem;text-align:center;background:${C.card};">
                </td>
                <td style="padding:12px 8px;">
                    <input type="number" id="res-${sid}" min="0" max="100" step="0.1"
                           placeholder="0–100" oninput="window.appeCalcScore('${sid}')"
                           style="width:70px;padding:6px 8px;border:1px solid ${C.border};border-radius:8px;
                                  font-size:0.85rem;text-align:center;background:${C.card};">
                </td>
                <td style="padding:12px 8px;">
                    <input type="number" id="com-${sid}" min="0" max="100" step="0.1"
                           placeholder="0–100" oninput="window.appeCalcScore('${sid}')"
                           style="width:70px;padding:6px 8px;border:1px solid ${C.border};border-radius:8px;
                                  font-size:0.85rem;text-align:center;background:${C.card};">
                </td>
                <td style="padding:12px 8px;">
                    <input type="number" id="conf-${sid}" min="0" max="100" step="0.1"
                           placeholder="0–100" oninput="window.appeCalcScore('${sid}')"
                           style="width:70px;padding:6px 8px;border:1px solid ${C.border};border-radius:8px;
                                  font-size:0.85rem;text-align:center;background:${C.card};">
                </td>
                <td style="padding:12px 14px;text-align:center;">
                    <span id="calc-${sid}" style="font-size:1rem;font-weight:800;
                          color:${existingScore !== '' ? '#1B5E20' : C.muted};">
                        ${existingScore !== '' ? Number(existingScore).toFixed(1) : '—'}
                    </span>
                </td>
                <td style="padding:12px 14px;text-align:center;">
                    <button onclick="window.appeSaveScore('${sid}')"
                            style="background:#1B5E20;color:#fff;border:none;padding:6px 16px;
                                   border-radius:50px;cursor:pointer;font-size:0.8rem;font-weight:700;">
                        Save
                    </button>
                </td>
            </tr>`;
        }).join('');

        const thStyle = `text-align:center;padding:12px 8px;font-size:0.72rem;color:${C.muted};
                         font-weight:700;text-transform:uppercase;letter-spacing:0.5px;white-space:nowrap;`;

        return `
        <div style="background:${C.card};border-radius:16px;padding:1.5rem;border:1px solid ${C.border};">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem;flex-wrap:wrap;gap:1rem;">
                <div>
                    <h2 style="margin:0;font-size:1.2rem;color:${C.text};font-weight:800;">🏆 MS Survey Score Management</h2>
                    <p style="margin:4px 0 0;font-size:0.83rem;color:${C.muted};">
                        Enter component scores for each student. Final score = GPA×44% + Experiential×44% + Research×4% + Community×4% + Conferences×4%
                    </p>
                </div>
                <div style="background:#e8f5e9;color:#1B5E20;padding:8px 16px;border-radius:50px;font-size:0.82rem;font-weight:700;">
                    ${students.length} P4 Students
                </div>
            </div>

            <!-- Formula reminder -->
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:1.25rem;">
                ${[['GPA','44%','#1B5E20'],['Experiential','44%','#1B5E20'],['Research','4%','#0277BD'],['Community','4%','#6A1B9A'],['Conferences','4%','#E65100']].map(([label,pct,col]) => `
                <span style="background:${col}15;color:${col};border:1px solid ${col}30;padding:4px 12px;
                              border-radius:50px;font-size:0.78rem;font-weight:700;">${label} ${pct}</span>`).join('')}
            </div>

            <div style="overflow-x:auto;">
                <table style="width:100%;border-collapse:collapse;min-width:900px;">
                    <thead>
                        <tr style="border-bottom:2px solid ${C.border};">
                            <th style="text-align:center;padding:12px 10px;font-size:0.72rem;color:${C.muted};font-weight:700;text-transform:uppercase;">Rank</th>
                            <th style="text-align:left;padding:12px 14px;font-size:0.72rem;color:${C.muted};font-weight:700;text-transform:uppercase;">Student</th>
                            <th style="text-align:left;padding:12px 14px;font-size:0.72rem;color:${C.muted};font-weight:700;text-transform:uppercase;">Email</th>
                            <th style="${thStyle}">GPA<br><span style="font-weight:400;color:#1B5E20;">44%</span></th>
                            <th style="${thStyle}">Experiential<br><span style="font-weight:400;color:#1B5E20;">44%</span></th>
                            <th style="${thStyle}">Research<br><span style="font-weight:400;color:#0277BD;">4%</span></th>
                            <th style="${thStyle}">Community<br><span style="font-weight:400;color:#6A1B9A;">4%</span></th>
                            <th style="${thStyle}">Conferences<br><span style="font-weight:400;color:#E65100;">4%</span></th>
                            <th style="${thStyle}">Final Score<br><span style="font-weight:400;">/100</span></th>
                            <th style="${thStyle}">Action</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </div>`;
    }

    /* Global helpers for Score tab */
    window.appeCalcScore = function(sid) {
        const val = id => {
            const el = document.getElementById(`${id}-${sid}`);
            return el ? (parseFloat(el.value) || 0) : 0;
        };
        const score = val('gpa') * 0.44 + val('exp') * 0.44 + val('res') * 0.04 + val('com') * 0.04 + val('conf') * 0.04;
        const display = document.getElementById(`calc-${sid}`);
        if (display) {
            display.textContent = score > 0 ? score.toFixed(1) : '—';
            display.style.color = score > 0 ? '#1B5E20' : '#999';
        }
    };

    window.appeSaveScore = async function(sid) {
        if (!(await _requirePassword())) return;
        const val = id => {
            const el = document.getElementById(`${id}-${sid}`);
            return el ? (parseFloat(el.value) || 0) : 0;
        };
        const gpa   = val('gpa');
        const exp   = val('exp');
        const res   = val('res');
        const com   = val('com');
        const conf  = val('conf');

        if (gpa === 0 && exp === 0 && res === 0 && com === 0 && conf === 0) {
            alert('Please enter at least one score component before saving.');
            return;
        }

        const score = +(gpa * 0.44 + exp * 0.44 + res * 0.04 + com * 0.04 + conf * 0.04).toFixed(2);

        const sb = window.SupabaseAuth?.supabase;
        if (!sb) { alert('Supabase not connected.'); return; }

        const btn = document.querySelector(`#score-row-${sid} button`);
        if (btn) { btn.textContent = 'Saving…'; btn.disabled = true; }

        try {
            const { data: existing } = await sb.from('rotation_assignments')
                .select('id').eq('student_id', sid).eq('academic_year', _year).limit(1);
            if (existing && existing.length > 0) {
                const { error } = await sb.from('rotation_assignments')
                    .update({ student_score: score }).eq('student_id', sid).eq('academic_year', _year);
                if (error) throw error;
            } else {
                const { error } = await sb.from('rotation_assignments')
                    .insert({ student_id: sid, student_score: score, block_number: 0, academic_year: _year });
                if (error) throw error;
            }

            // Update display
            const display = document.getElementById(`calc-${sid}`);
            if (display) { display.textContent = score.toFixed(1); display.style.color = '#1B5E20'; }
            if (btn) { btn.textContent = '✓ Saved'; btn.style.background = '#2e7d32'; }
            setTimeout(() => { if (btn) { btn.textContent = 'Save'; btn.disabled = false; btn.style.background = '#1B5E20'; } }, 2000);
        } catch (e) {
            console.error('[Scores] save error', e);
            alert('Failed to save score: ' + e.message);
            if (btn) { btn.textContent = 'Save'; btn.disabled = false; }
        }
    };

    function _downloadCSV(filename, rows) {
        const csv  = rows.map(r => r.map(v => `"${String(v||'').replace(/"/g,'""')}"`).join(',')).join('\n');
        const blob = new Blob([csv], { type:'text/csv;charset=utf-8;' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href = url; a.download = filename; a.click();
        URL.revokeObjectURL(url);
    }

})();
