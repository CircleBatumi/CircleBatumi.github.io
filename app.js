const STORAGE = {
  users: 'circlebatumi_users_v4',
  session: 'circlebatumi_session_v4',
  records: 'circlebatumi_records_v4'
};

const MATERIALS = {
  plastic: 'პლასტმასი',
  plastic02: 'HDPE #02 პლასტმასი',
  polyethylene: 'პოლიეთილენი',
  polypropylene: 'პოლიპროპილენი',
  paper: 'ქაღალდი / მუყაო',
  battery: 'ელემენტები',
  electronics: 'მცირე ელექტრონიკა'
};

const OFFICIAL_PLAN_URL = 'https://old.batumicc.ge/files/uploads/komisiebis_debulebebi/pasuxismgebeli_pirebis_brzaneba/kanonmdeloba/forma_nimushi/2021_kovelcliuri_angarishi/2022_wlis_angarishi/dasamebul_pirta_raodenoba/sxdoms_mocvevis_brzaneba_2022/5_punkti_gzamkvlevis/2023_clis_kvartaluri_angarishi/sxdomamorigi19maisi/dadgenilebeb/gamkargulebebi/151523044001.pdf';

const companies = [
  {
    id: 'recycleaf',
    name: 'Recycleaf',
    initials: 'RL',
    type: 'სოციალური ეკო-კომპანია',
    materials: ['plastic02','battery','electronics'],
    address: 'ახმედ მელაშვილის ქ. 11, ბათუმი',
    phone: '',
    email: '',
    hours: 'ყოველდღე, საჯარო მიღება — გადაამოწმე მიმდინარე საათები',
    note: 'ბათუმში მოქმედი შეგროვებისა და რეციკლირების პროექტი. იღებს #02 პლასტმასას, ელემენტებსა და მცირე ელექტრონულ მოწყობილობებს.',
    reception: 'საჯარო მიღება',
    sourceLabel: 'Recycleaf / RecycleLoc',
    sourceUrl: 'https://recycleloc.ge/en/community/recycleaf'
  },
  {
    id: 'zugo',
    name: 'შპს „ზუგო“',
    initials: 'ZG',
    type: 'პლასტიკის რეციკლირება',
    materials: ['plastic','polyethylene'],
    address: 'მეჯინისწყლის დასახლება, ბათუმი',
    phone: '558 06 65 65',
    email: 'zugo-2010@mail.ru',
    hours: 'ჩაბარების დრო და პირობა წინასწარ შეათანხმე',
    note: 'ბათუმის მუნიციპალურ გეგმაში მითითებულია, როგორც პლასტიკის ნარჩენების გადამამუშავებელი კომპანია.',
    reception: 'წინასწარი შეთანხმებით',
    sourceLabel: 'ბათუმის მუნიციპალიტეტის გეგმა',
    sourceUrl: OFFICIAL_PLAN_URL
  },
  {
    id: 'roni',
    name: 'შპს „RONI“',
    initials: 'RO',
    type: 'ქაღალდის შეგროვება და რეციკლირება',
    materials: ['paper'],
    address: 'მანია ვარშანიძის ქ. 211, ბათუმი',
    phone: '593 97 16 83',
    email: '',
    hours: 'ჩაბარების დრო და პირობა წინასწარ შეათანხმე',
    note: 'მუნიციპალურ გეგმაში მითითებულია ქაღალდის ნარჩენების შეგროვებისა და რეციკლირების კომპანიად.',
    reception: 'წინასწარი შეთანხმებით',
    sourceLabel: 'ბათუმის მუნიციპალიტეტის გეგმა',
    sourceUrl: OFFICIAL_PLAN_URL
  },
  {
    id: 'gio10',
    name: 'შპს „გიო-10“',
    initials: 'G10',
    type: 'პოლიეთილენის ნარჩენების გადამუშავება',
    materials: ['plastic','polyethylene'],
    address: 'ბაგრატიონის ქ. 97–99, ბათუმი',
    phone: '579 75 30 30',
    email: 'ritabolqvadze@gmail.com',
    hours: 'ჩაბარების დრო და პირობა წინასწარ შეათანხმე',
    note: 'გადამუშავებაში იყენებს პოლიმერულ ნარჩენებს და აწარმოებს პლასტმასის მილებს.',
    reception: 'წინასწარი შეთანხმებით',
    sourceLabel: 'ბათუმის მუნიციპალიტეტის გეგმა',
    sourceUrl: OFFICIAL_PLAN_URL
  },
  {
    id: 'royalplastic',
    name: 'შპს „როიალ პლასტიკი“',
    initials: 'RP',
    type: 'პოლიეთილენისა და პოლიპროპილენის გადამუშავება',
    materials: ['plastic','polyethylene','polypropylene'],
    address: 'საწარმო: ოპიზრების ქ. 32, ბათუმი',
    phone: '577 14 17 67',
    email: 'besikkoridze@mail.ru',
    hours: 'ჩაბარების დრო და პირობა წინასწარ შეათანხმე',
    note: 'მუნიციპალური გეგმის მიხედვით კომპანია ამუშავებს მეორად პოლიეთილენისა და პოლიპროპილენის ნარჩენებს.',
    reception: 'წინასწარი შეთანხმებით',
    sourceLabel: 'ბათუმის მუნიციპალიტეტის გეგმა',
    sourceUrl: OFFICIAL_PLAN_URL
  },
  {
    id: 'batumismili',
    name: 'შპს „ბათუმის მილი“',
    initials: 'BM',
    type: 'პოლიეთილენის ნარჩენების გადამუშავება',
    materials: ['plastic','polyethylene'],
    address: 'სულხან-საბა ორბელიანის ქ. 11ბ, ბათუმი',
    phone: '551 544 444',
    email: 'gia.batumi@yahoo.com',
    hours: 'ჩაბარების დრო და პირობა წინასწარ შეათანხმე',
    note: 'მუნიციპალურ გეგმაში მითითებულია პოლიეთილენის ნარჩენების გადამუშავების მიმართულებით.',
    reception: 'წინასწარი შეთანხმებით',
    sourceLabel: 'ბათუმის მუნიციპალიტეტის გეგმა',
    sourceUrl: OFFICIAL_PLAN_URL
  }
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const byId = id => companies.find(c => c.id === id);
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
const read = key => { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } };
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const currentUsername = () => { try { return localStorage.getItem(STORAGE.session) || ''; } catch { return ''; } };
const currentUser = () => read(STORAGE.users).find(u => u.username === currentUsername()) || null;
const records = () => read(STORAGE.records);
const setRecords = list => write(STORAGE.records, list);

let activeFilter = 'all';
let toastTimer;

function showToast(message, type='ok') {
  const toast = $('#toast');
  toast.textContent = message;
  toast.className = `toast show ${type === 'error' ? 'error' : ''}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.className = 'toast', 2600);
}

function scrollToId(id){ document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'}); }

function materialSearchText(c){ return c.materials.map(m => MATERIALS[m]).join(' ').toLowerCase(); }
function filterMatch(c, f){
  if(f === 'all') return true;
  if(f === 'plastic') return c.materials.some(m => ['plastic','plastic02','polyethylene','polypropylene'].includes(m));
  return c.materials.includes(f);
}

function renderCompanies(){
  const q = ($('#companySearch')?.value || '').trim().toLowerCase();
  const filtered = companies.filter(c => filterMatch(c,activeFilter) && (!q || `${c.name} ${c.type} ${c.address} ${materialSearchText(c)}`.toLowerCase().includes(q)));
  $('#companyGrid').innerHTML = filtered.length ? filtered.map(c => `
    <article class="company-card reveal in">
      <div class="company-top">
        <div class="company-mark">${escapeHtml(c.initials)}</div>
        <div class="company-title"><h3>${escapeHtml(c.name)}</h3><p>${escapeHtml(c.type)}</p></div>
        <span class="verified" title="წყაროში გადამოწმებული">✓</span>
      </div>
      <div class="material-tags">${c.materials.map(m=>`<span class="material-tag">${escapeHtml(MATERIALS[m])}</span>`).join('')}</div>
      <div class="company-info">
        <div class="info-line"><span class="info-icon">⌖</span><span><b>${escapeHtml(c.address)}</b></span></div>
        ${c.phone ? `<div class="info-line"><span class="info-icon">☎</span><span>${escapeHtml(c.phone)}</span></div>` : ''}
        <div class="info-line"><span class="info-icon">◷</span><span>${escapeHtml(c.reception)}</span></div>
      </div>
      <div class="company-actions">
        <button class="btn btn-soft" type="button" data-detail="${c.id}">დეტალები</button>
        <button class="btn btn-dark" type="button" data-record="${c.id}">ჩაბარების დაფიქსირება</button>
      </div>
    </article>`).join('') : `<div class="empty" style="grid-column:1/-1">ამ ფილტრით კომპანია ვერ მოიძებნა.</div>`;

  $$('[data-detail]').forEach(btn => btn.onclick = () => openCompanyDetail(btn.dataset.detail));
  $$('[data-record]').forEach(btn => btn.onclick = () => openRecordModal(btn.dataset.record));
}

function openCompanyDetail(id){
  const c = byId(id); if(!c) return;
  $('#companyDetailContent').innerHTML = `
    <div class="detail-head">
      <div class="company-mark">${escapeHtml(c.initials)}</div>
      <div><h3>${escapeHtml(c.name)}</h3><p>${escapeHtml(c.type)}</p></div>
    </div>
    <div class="material-tags">${c.materials.map(m=>`<span class="material-tag">${escapeHtml(MATERIALS[m])}</span>`).join('')}</div>
    <div class="detail-section"><h4>კომპანიის შესახებ</h4><p>${escapeHtml(c.note)}</p></div>
    <div class="detail-section"><h4>კონტაქტი და ჩაბარება</h4>
      <div class="contact-grid">
        <div class="contact-item"><small>მისამართი</small><strong>${escapeHtml(c.address)}</strong></div>
        <div class="contact-item"><small>ჩაბარება</small><strong>${escapeHtml(c.reception)}</strong></div>
        ${c.phone ? `<div class="contact-item"><small>ტელეფონი</small><strong>${escapeHtml(c.phone)}</strong></div>` : ''}
        ${c.email ? `<div class="contact-item"><small>ელფოსტა</small><strong>${escapeHtml(c.email)}</strong></div>` : ''}
      </div>
      <p style="margin-top:12px">${escapeHtml(c.hours)}</p>
    </div>
    <div class="detail-section"><h4>მონაცემის წყარო</h4><p>${escapeHtml(c.sourceLabel)}</p></div>
    <div class="detail-actions">
      <button class="btn btn-soft" type="button" id="sourceBtn">წყაროს ნახვა ↗</button>
      <button class="btn btn-dark" type="button" id="detailRecordBtn">ჩაბარების დაფიქსირება</button>
    </div>`;
  $('#sourceBtn').onclick = () => window.open(c.sourceUrl,'_blank','noopener');
  $('#detailRecordBtn').onclick = () => { $('#companyDetailModal').close(); openRecordModal(c.id); };
  $('#companyDetailModal').showModal();
}

async function sha256(text){
  if(globalThis.crypto?.subtle){
    const data = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return [...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,'0')).join('');
  }
  // Local-file fallback for the demo preview only. Production auth requires a backend.
  let h = 2166136261;
  for(const ch of text){ h ^= ch.charCodeAt(0); h = Math.imul(h,16777619); }
  return ('demo'+(h>>>0).toString(16)).repeat(8).slice(0,64);
}

function openAuth(tab='login'){
  switchAuth(tab);
  if(!$('#authModal').open) $('#authModal').showModal();
}
function switchAuth(tab){
  const login = tab === 'login';
  $('#loginTab').classList.toggle('active',login); $('#signupTab').classList.toggle('active',!login);
  $('#loginForm').classList.toggle('hidden',!login); $('#signupForm').classList.toggle('hidden',login);
}
function setRole(role){
  $('#signupRole').value = role;
  $$('#roleSwitch button').forEach(b=>b.classList.toggle('active',b.dataset.role===role));
  $('#companySelectWrap').classList.toggle('hidden',role!=='company');
  $('#signupCompany').required = role === 'company';
}
function fillCompanySelects(){
  const options = companies.map(c=>`<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('');
  $('#signupCompany').innerHTML = options;
  $('#recordCompany').innerHTML = options;
}
function fillMaterialSelect(select, companyId){
  const c = byId(companyId) || companies[0];
  select.innerHTML = c.materials.map(m=>`<option value="${m}">${escapeHtml(MATERIALS[m])}</option>`).join('');
}
function makeCode(){ return 'CB-' + Math.random().toString(36).slice(2,8).toUpperCase(); }

function openRecordModal(companyId=''){
  const user = currentUser();
  if(!user){ openAuth('login'); showToast('ჩაბარების დასაფიქსირებლად ჯერ შედი ანგარიშში.'); return; }
  if(user.role === 'company'){ openCompanyRecordModal(); return; }
  $('#recordCompany').value = companyId || companies[0].id;
  fillMaterialSelect($('#recordMaterial'), $('#recordCompany').value);
  $('#recordWeight').value = ''; $('#recordNote').value=''; $('#previewCode').textContent = makeCode();
  $('#recordModal').showModal();
}

function openCompanyRecordModal(){
  const user = currentUser();
  if(!user || user.role!=='company'){ showToast('ეს ფუნქცია კომპანიის ანგარიშისთვისაა.','error'); return; }
  fillMaterialSelect($('#companyRecordMaterial'), user.companyId);
  $('#companyRecordUsername').value=''; $('#companyRecordWeight').value='';
  $('#companyRecordModal').showModal();
}

function updateHeader(){
  const user = currentUser();
  if(!user){
    $('#navActions').innerHTML = `<button class="btn btn-plain" id="loginBtn" type="button">შესვლა</button><button class="btn btn-accent" id="signupBtn" type="button">რეგისტრაცია</button>`;
    $('#loginBtn').onclick=()=>openAuth('login'); $('#signupBtn').onclick=()=>openAuth('signup');
  } else {
    $('#navActions').innerHTML = `<button class="btn btn-plain" id="profileBtn" type="button">@${escapeHtml(user.username)}</button><button class="btn btn-accent" id="quickRecordBtn" type="button">+ ჩაბარება</button>`;
    $('#profileBtn').onclick=openProfile; $('#quickRecordBtn').onclick=()=> user.role==='company' ? openCompanyRecordModal() : openRecordModal();
  }
}

function formatDate(iso){
  return new Intl.DateTimeFormat('ka-GE',{day:'2-digit',month:'short',year:'numeric'}).format(new Date(iso));
}
function statusLabel(s){ return s==='confirmed'?'დადასტურებული':s==='rejected'?'უარყოფილი':'დადასტურებას ელოდება'; }
function n(v){ return Number(v||0).toLocaleString('ka-GE',{maximumFractionDigits:2}); }

function openProfile(){
  if(!currentUser()){ openAuth('login'); return; }
  renderProfile(); $('#profileSection').classList.remove('hidden'); setTimeout(()=>scrollToId('profileSection'),30);
}

function materialBreakdown(userRecords){
  const confirmed = userRecords.filter(r=>r.status==='confirmed');
  const totals = {};
  confirmed.forEach(r => totals[r.material]=(totals[r.material]||0)+Number(r.weight));
  const max = Math.max(...Object.values(totals),1);
  return Object.entries(totals).sort((a,b)=>b[1]-a[1]).map(([m,w])=>`<div class="break-row"><span>${escapeHtml(MATERIALS[m]||m)}</span><b>${n(w)} კგ</b><i><em style="width:${Math.round(w/max*100)}%"></em></i></div>`).join('') || '<div class="empty">ჯერ დადასტურებული მონაცემი არ არის.</div>';
}

function renderRecords(list, mode){
  if(!list.length) return '<div class="empty">ჯერ ჩანაწერები არ არის.</div>';
  return `<div class="records">${[...list].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map(r=>{
    const c = byId(r.companyId);
    const actions = mode==='company-pending' ? `<div class="record-actions"><button class="approve" data-approve="${r.id}" type="button">დადასტურება</button><button class="reject" data-reject="${r.id}" type="button">უარყოფა</button></div>` : '';
    return `<div class="record">
      <div><strong>${escapeHtml(mode.startsWith('company') ? (r.userName || r.username) : (c?.name || 'კომპანია'))}</strong><small>${escapeHtml(mode.startsWith('company') ? '@'+r.username : MATERIALS[r.material] || r.material)}</small></div>
      <div><strong>${escapeHtml(mode.startsWith('company') ? (MATERIALS[r.material]||r.material) : formatDate(r.createdAt))}</strong><small>${escapeHtml(mode.startsWith('company') ? formatDate(r.createdAt) : 'თარიღი')}</small></div>
      <div><strong>${n(r.weight)} კგ</strong><small>რაოდენობა</small></div>
      <span class="status ${r.status}">${statusLabel(r.status)}</span>
      ${actions || `<span class="record-code">${escapeHtml(r.code)}</span>`}
    </div>`;
  }).join('')}</div>`;
}

function renderProfile(){
  const user = currentUser(); if(!user) return;
  const all = records();
  if(user.role === 'company') return renderCompanyProfile(user, all.filter(r=>r.companyId===user.companyId));
  const mine = all.filter(r=>r.username===user.username);
  const confirmed = mine.filter(r=>r.status==='confirmed');
  const kg = confirmed.reduce((s,r)=>s+Number(r.weight),0);
  const companyCount = new Set(confirmed.map(r=>r.companyId)).size;
  const next = Math.max(25, Math.ceil((kg+0.01)/25)*25);
  const pct = Math.min(100, kg/next*100);
  $('#profileContent').innerHTML = `<div class="profile-shell">
    <div class="profile-header">
      <div class="profile-person"><div class="avatar">${escapeHtml((user.name||user.username).charAt(0).toUpperCase())}</div><div><h2>${escapeHtml(user.name)}</h2><p>@${escapeHtml(user.username)} · მოქალაქის პროფილი</p></div></div>
      <div class="profile-actions"><button class="btn btn-dark" id="newRecordBtn" type="button">+ ჩაბარების დაფიქსირება</button><button class="btn secondary" id="logoutBtn" type="button">გასვლა</button></div>
    </div>
    <div class="metrics">
      <div class="metric"><small>დადასტურებული წვლილი</small><strong>${n(kg)} კგ</strong><em>ჯამური რაოდენობა</em></div>
      <div class="metric"><small>ჩაბარება</small><strong>${confirmed.length}</strong><em>დადასტურებული ჩანაწერი</em></div>
      <div class="metric"><small>კომპანია</small><strong>${companyCount}</strong><em>სადაც ჩააბარე</em></div>
      <div class="metric"><small>ეკო-ქულა</small><strong>${Math.round(kg*10)}</strong><em>10 ქულა / 1 კგ</em></div>
    </div>
    <div class="profile-grid">
      <div class="panel"><div class="panel-head"><h3>მასალების განაწილება</h3><span>${confirmed.length} დადასტურება</span></div><div class="breakdown">${materialBreakdown(mine)}</div></div>
      <div class="panel"><div class="panel-head"><h3>შემდეგი ნიშნული — ${next} კგ</h3><span>${n(kg)} / ${next} კგ</span></div><div class="contribution-bar"><i style="width:${pct}%"></i></div><div style="height:18px"></div><div class="panel-head"><h3>ჩაბარების ისტორია</h3><span>${mine.length} ჩანაწერი</span></div>${renderRecords(mine,'user')}</div>
    </div>
  </div>`;
  $('#newRecordBtn').onclick=()=>openRecordModal(); $('#logoutBtn').onclick=logout;
}

function renderCompanyProfile(user, mine){
  const c = byId(user.companyId);
  const pending = mine.filter(r=>r.status==='pending');
  const confirmed = mine.filter(r=>r.status==='confirmed');
  const kg = confirmed.reduce((s,r)=>s+Number(r.weight),0);
  const uniqueUsers = new Set(confirmed.map(r=>r.username)).size;
  $('#profileContent').innerHTML = `<div class="profile-shell">
    <div class="profile-header">
      <div class="profile-person"><div class="avatar">${escapeHtml(c?.initials||'CO')}</div><div><h2>${escapeHtml(c?.name||'კომპანია')}</h2><p>${escapeHtml(user.name)} · კომპანიის ანგარიში</p></div></div>
      <div class="profile-actions"><button class="btn btn-dark" id="companyAddBtn" type="button">+ ჩაბარების დამატება</button><button class="btn secondary" id="logoutBtn" type="button">გასვლა</button></div>
    </div>
    <div class="metrics">
      <div class="metric"><small>დადასტურებული ნარჩენი</small><strong>${n(kg)} კგ</strong><em>ჯამური რაოდენობა</em></div>
      <div class="metric"><small>ჩაბარება</small><strong>${confirmed.length}</strong><em>დადასტურებული ჩანაწერი</em></div>
      <div class="metric"><small>მოქალაქე</small><strong>${uniqueUsers}</strong><em>უნიკალური მომხმარებელი</em></div>
      <div class="metric"><small>მოლოდინში</small><strong>${pending.length}</strong><em>დასადასტურებელი</em></div>
    </div>
    <div class="panel"><div class="panel-head"><h3>დასადასტურებელი ჩაბარებები</h3><span>${pending.length} მოთხოვნა</span></div>${renderRecords(pending,'company-pending')}</div>
    <div class="panel"><div class="panel-head"><h3>დადასტურებული ისტორია</h3><span>${confirmed.length} ჩანაწერი</span></div>${renderRecords(confirmed,'company')}</div>
  </div>`;
  $('#companyAddBtn').onclick=openCompanyRecordModal; $('#logoutBtn').onclick=logout;
  $$('[data-approve]').forEach(b=>b.onclick=()=>setRecordStatus(b.dataset.approve,'confirmed'));
  $$('[data-reject]').forEach(b=>b.onclick=()=>setRecordStatus(b.dataset.reject,'rejected'));
}

function setRecordStatus(id,status){
  const user = currentUser(); if(!user || user.role!=='company') return;
  const list = records(); const i = list.findIndex(r=>r.id===id);
  if(i<0 || list[i].companyId!==user.companyId) return showToast('ამ ჩანაწერს ეს კომპანია ვერ ადასტურებს.','error');
  list[i].status=status; list[i].verifiedBy=user.username; list[i].verifiedAt=new Date().toISOString(); setRecords(list);
  renderProfile(); showToast(status==='confirmed'?'ჩაბარება დადასტურდა და მომხმარებლის წვლილს დაემატა.':'ჩაბარება უარყოფილია.');
}

function logout(){ localStorage.removeItem(STORAGE.session); $('#profileSection').classList.add('hidden'); updateHeader(); scrollToId('home'); showToast('ანგარიშიდან გამოხვედი.'); }

$('#loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  const username = $('#loginUsername').value.trim().toLowerCase();
  const passwordHash = await sha256($('#loginPassword').value);
  const user = read(STORAGE.users).find(u=>u.username===username && u.passwordHash===passwordHash);
  if(!user) return showToast('username ან პაროლი არასწორია.','error');
  localStorage.setItem(STORAGE.session,user.username); $('#authModal').close(); updateHeader(); showToast('წარმატებით შეხვედი.'); openProfile();
});

$('#signupForm').addEventListener('submit', async e => {
  e.preventDefault();
  const users = read(STORAGE.users);
  const username = $('#signupUsername').value.trim().toLowerCase().replace(/\s+/g,'');
  if(username.length<3) return showToast('username მინიმუმ 3 სიმბოლო უნდა იყოს.','error');
  if(users.some(u=>u.username===username)) return showToast('ეს username უკვე გამოყენებულია.','error');
  const role = $('#signupRole').value;
  const user = {
    name: $('#signupName').value.trim(), username, role,
    companyId: role==='company' ? $('#signupCompany').value : '',
    passwordHash: await sha256($('#signupPassword').value), createdAt:new Date().toISOString()
  };
  users.push(user); write(STORAGE.users,users); localStorage.setItem(STORAGE.session,username);
  $('#authModal').close(); updateHeader(); showToast('ანგარიში შეიქმნა.'); openProfile(); e.target.reset(); setRole('user');
});

$('#recordForm').addEventListener('submit', e => {
  e.preventDefault(); const user=currentUser(); if(!user || user.role!=='user') return;
  const list=records(); const code=$('#previewCode').textContent.startsWith('CB-')?$('#previewCode').textContent:makeCode();
  list.push({id:crypto.randomUUID?crypto.randomUUID():Date.now().toString(36),code,username:user.username,userName:user.name,companyId:$('#recordCompany').value,material:$('#recordMaterial').value,weight:Number($('#recordWeight').value),note:$('#recordNote').value.trim(),status:'pending',createdAt:new Date().toISOString(),createdBy:'user'});
  setRecords(list); $('#recordModal').close(); showToast(`ჩანაწერი ${code} გაიგზავნა დასადასტურებლად.`); openProfile();
});

$('#companyRecordForm').addEventListener('submit', e => {
  e.preventDefault(); const companyUser=currentUser(); if(!companyUser || companyUser.role!=='company') return;
  const username=$('#companyRecordUsername').value.trim().toLowerCase(); const user=read(STORAGE.users).find(u=>u.username===username && u.role==='user');
  if(!user) return showToast('ასეთი მოქალაქის username ვერ მოიძებნა.','error');
  const list=records(); const code=makeCode();
  list.push({id:crypto.randomUUID?crypto.randomUUID():Date.now().toString(36),code,username:user.username,userName:user.name,companyId:companyUser.companyId,material:$('#companyRecordMaterial').value,weight:Number($('#companyRecordWeight').value),note:'',status:'confirmed',createdAt:new Date().toISOString(),verifiedAt:new Date().toISOString(),verifiedBy:companyUser.username,createdBy:'company'});
  setRecords(list); $('#companyRecordModal').close(); showToast(`ჩაბარება ${code} ჩაიწერა და მოქალაქის წვლილს დაემატა.`); openProfile();
});

$('#recordCompany').addEventListener('change',()=>fillMaterialSelect($('#recordMaterial'),$('#recordCompany').value));
$('#companySearch').addEventListener('input',renderCompanies);
$$('.filter').forEach(btn=>btn.addEventListener('click',()=>{ $$('.filter').forEach(x=>x.classList.remove('active')); btn.classList.add('active'); activeFilter=btn.dataset.filter; renderCompanies(); }));
$$('[data-scroll]').forEach(btn=>btn.addEventListener('click',()=>scrollToId(btn.dataset.scroll)));
$$('[data-close]').forEach(btn=>btn.addEventListener('click',()=>document.getElementById(btn.dataset.close)?.close()));
$$('.modal').forEach(d=>d.addEventListener('click',e=>{ if(e.target===d)d.close(); }));
$('#loginTab').onclick=()=>switchAuth('login'); $('#signupTab').onclick=()=>switchAuth('signup');
$$('#roleSwitch button').forEach(btn=>btn.onclick=()=>setRole(btn.dataset.role));
$('#brandBtn').onclick=()=>scrollToId('home');
$('#openProfileHero').onclick=()=>currentUser()?openProfile():openAuth('signup');
$('#impactProfileBtn').onclick=()=>currentUser()?openProfile():openAuth('signup');
$('#ctaBtn').onclick=()=>currentUser()?openProfile():openAuth('signup');
$('#footerProfileBtn').onclick=()=>currentUser()?openProfile():openAuth('login');
window.addEventListener('scroll',()=>$('#siteHeader').classList.toggle('scrolled',scrollY>20));

const observer = new IntersectionObserver(entries=>entries.forEach(e=>{ if(e.isIntersecting)e.target.classList.add('in'); }),{threshold:.08});
$$('.reveal').forEach(el=>observer.observe(el));

fillCompanySelects(); fillMaterialSelect($('#recordMaterial'),companies[0].id); renderCompanies(); updateHeader();
