/**
 * Password Gate — shared across all dashboard sections
 * Password is required once per browser session.
 * After correct entry it is cached in sessionStorage.
 */
window._requirePassword = function () {
    const SESSION_KEY = '_cop_unlocked';
    const PASSWORD    = 'COP@2026';

    // Already unlocked this session — allow immediately
    if (sessionStorage.getItem(SESSION_KEY) === '1') return Promise.resolve(true);

    return new Promise(resolve => {
        const old = document.getElementById('_cop_pwd_modal');
        if (old) old.remove();

        const overlay = document.createElement('div');
        overlay.id = '_cop_pwd_modal';
        overlay.style.cssText = [
            'position:fixed', 'inset:0', 'background:rgba(0,0,0,0.45)',
            'display:flex', 'align-items:center', 'justify-content:center',
            'z-index:99999'
        ].join(';');

        overlay.innerHTML = `
            <div style="background:#fff;border-radius:16px;padding:2rem 2.5rem;
                        box-shadow:0 20px 60px rgba(0,0,0,0.25);min-width:320px;text-align:center;">
                <div style="font-size:1.6rem;margin-bottom:0.5rem;">🔒</div>
                <div style="font-weight:700;font-size:1rem;color:#1a202c;margin-bottom:0.25rem;">
                    Admin Password Required
                </div>
                <div style="font-size:0.82rem;color:#718096;margin-bottom:1.25rem;">
                    Enter the password to save changes
                </div>
                <input id="_cop_pwd_input" type="password" placeholder="Password"
                       style="width:100%;padding:10px 14px;border:1.5px solid #e2e8f0;border-radius:10px;
                              font-size:0.95rem;text-align:center;outline:none;box-sizing:border-box;
                              margin-bottom:0.5rem;">
                <div id="_cop_pwd_err" style="color:#c62828;font-size:0.8rem;min-height:18px;margin-bottom:0.75rem;"></div>
                <div style="display:flex;gap:0.75rem;justify-content:center;">
                    <button id="_cop_pwd_cancel"
                            style="padding:8px 22px;border:1.5px solid #e2e8f0;border-radius:50px;
                                   background:#fff;color:#718096;font-size:0.85rem;cursor:pointer;font-weight:600;">
                        Cancel
                    </button>
                    <button id="_cop_pwd_confirm"
                            style="padding:8px 22px;border:none;border-radius:50px;
                                   background:#1B5E20;color:#fff;font-size:0.85rem;cursor:pointer;font-weight:700;">
                        Confirm
                    </button>
                </div>
            </div>`;

        document.body.appendChild(overlay);

        const input     = document.getElementById('_cop_pwd_input');
        const errEl     = document.getElementById('_cop_pwd_err');
        const btnOk     = document.getElementById('_cop_pwd_confirm');
        const btnCancel = document.getElementById('_cop_pwd_cancel');

        setTimeout(() => input.focus(), 50);

        const done = (ok) => { overlay.remove(); resolve(ok); };

        btnCancel.onclick = () => done(false);
        overlay.onclick   = (e) => { if (e.target === overlay) done(false); };

        const attempt = () => {
            if (input.value === PASSWORD) {
                sessionStorage.setItem(SESSION_KEY, '1');
                done(true);
            } else {
                errEl.textContent = 'Incorrect password. Try again.';
                input.value = '';
                input.style.border = '1.5px solid #c62828';
                input.focus();
            }
        };

        btnOk.onclick = attempt;
        input.addEventListener('keydown', e => {
            if (e.key === 'Enter') attempt();
            else { errEl.textContent = ''; input.style.border = '1.5px solid #e2e8f0'; }
        });
    });
};

console.log('🔒 Password gate loaded');
