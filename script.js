const eventImages = {
    hackathon: 'https://images.pexels.com/photos/5475816/pexels-photo-5475816.jpeg?auto=compress&cs=tinysrgb&w=1200',
    programming: 'https://images.pexels.com/photos/5475809/pexels-photo-5475809.jpeg?auto=compress&cs=tinysrgb&w=1200',
    valorant: 'https://images.pexels.com/photos/9072388/pexels-photo-9072388.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fifa: 'https://images.pexels.com/photos/39470745/pexels-photo-39470745.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bgmi: 'https://images.pexels.com/photos/7774027/pexels-photo-7774027.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tekken: 'https://images.pexels.com/photos/7777520/pexels-photo-7777520.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'free-fire': 'https://images.pexels.com/photos/7773979/pexels-photo-7773979.jpeg?auto=compress&cs=tinysrgb&w=1200',
    workshop: 'https://images.pexels.com/photos/34803990/pexels-photo-34803990.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'wall-painting': 'https://images.pexels.com/photos/32323428/pexels-photo-32323428.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'ad-making': 'https://images.pexels.com/photos/35976902/pexels-photo-35976902.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'poster-making': 'https://images.pexels.com/photos/8108526/pexels-photo-8108526.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'treasure-hunt': 'https://images.pexels.com/photos/31729749/pexels-photo-31729749.jpeg?auto=compress&cs=tinysrgb&w=1200',
    quiz: 'https://images.pexels.com/photos/36484265/pexels-photo-36484265.jpeg?auto=compress&cs=tinysrgb&w=1200'
};
const events = [
    { id: 'hackathon', title: '12-Hour Hackathon', category: 'Build', mode: 'Team challenge', desc: 'An overnight-style sprint for ideas, prototypes, and rapid problem solving.', icon: 'terminal', image: 'hack' },
    { id: 'programming', title: 'Competitive Programming', category: 'Code', mode: 'Individual / team format TBA', desc: 'Algorithmic thinking, focused problem sets, and leaderboard energy.', icon: 'braces', image: 'code' },
    { id: 'valorant', title: 'VALORANT', category: 'Play', mode: '5-player team tactical shooter', teamSize: 5, desc: 'Coordinate your squad, master agent abilities, and compete in a round-based tactical shooter.', icon: 'crosshair', image: 'play', format: 'Five-player team tactical shooter tournament. Match format and round structure to be announced.', eligibility: 'Each team must register exactly five players, including the team leader.', rules: 'Use the event-approved game version and settings. Competitive conduct and match rules will be published before the tournament.', preparation: 'Bring your own peripherals if permitted. Setup, account, and equipment requirements will be shared before the event.' },
    { id: 'fifa', title: 'FIFA / EA SPORTS FC', category: 'Play', mode: 'Football game tournament', desc: 'Take control on the virtual pitch and compete for a place at the top of the football leaderboard.', icon: 'trophy', image: 'play', format: 'Football video game tournament. Platform, match length, and bracket format to be announced.', eligibility: 'Player eligibility and whether the event is single-player or team-based will be confirmed by organisers.', rules: 'Game edition, team selection, match settings, and tie-break rules will be announced before the event.', preparation: 'Bring a controller if permitted. Console or PC setup and controller requirements will be shared before the tournament.' },
    { id: 'bgmi', title: 'BGMI', category: 'Play', mode: '4-player squad battle royale', teamSize: 4, desc: 'Drop in with your squad, make smart rotations, and battle to be the last team standing.', icon: 'crosshair', image: 'play', format: 'Four-player squad battle royale tournament. Map rotation, match count, and scoring system to be announced.', eligibility: 'Each team must register exactly four players, including the team leader.', rules: 'Only approved devices, accounts, and in-game settings may be used. Fair-play and match procedures will be published before the event.', preparation: 'Bring a charged device and headphones if permitted. Network, device, and account requirements will be shared before the tournament.' },
    { id: 'tekken', title: 'TEKKEN', category: 'Play', mode: 'One-on-one fighting game', desc: 'Choose your fighter, sharpen your combos, and prove yourself in head-to-head combat.', icon: 'swords', image: 'play', format: 'One-on-one fighting game tournament. Game edition, set length, and bracket format to be announced.', eligibility: 'Player eligibility and controller options will be confirmed by organisers.', rules: 'Character selection, match settings, stage rules, and tournament conduct guidelines will be shared before the event.', preparation: 'Bring a controller or fight stick if permitted. The tournament setup and supported equipment will be announced.' },
    { id: 'free-fire', title: 'FREE FIRE', category: 'Play', mode: '4-player squad battle royale', teamSize: 4, desc: 'Work together, adapt your strategy, and outlast the competition in a fast-paced battle royale.', icon: 'flame', image: 'play', format: 'Four-player squad battle royale tournament. Match count, map, and scoring system to be announced.', eligibility: 'Each team must register exactly four players, including the team leader.', rules: 'Approved devices, accounts, and in-game settings will be specified by organisers. Fair-play rules apply to all matches.', preparation: 'Bring a charged device and headphones if permitted. Network, device, and account requirements will be shared before the tournament.' },
    { id: 'workshop', title: 'Tech Workshop', category: 'Learn', mode: 'Hands-on session', desc: 'Practical sessions designed to help curious builders explore new tools.', icon: 'cpu', image: 'learn' },
    { id: 'wall-painting', title: 'Wall Painting', category: 'Create', mode: 'Individual / team format TBA', desc: 'Bring expressive visual culture into the Xordium universe.', icon: 'palette', image: 'create' },
    { id: 'ad-making', title: 'Ad Making', category: 'Create', mode: 'Online reel contest', desc: 'Create a short reel ad for a unique product—real or imaginary, like a magic lamp. The entry with the most likes wins.', icon: 'clapperboard', image: 'create', format: 'Create and submit a reel advertising a unique product. This is an online-based contest, and the entry receiving the most likes wins.', eligibility: 'Individual or team participation details will be announced by the organisers.', rules: 'The advertised product may be imaginary, such as a magic lamp. Submission platform, deadline, hashtag, and rules for eligible likes will be announced before the contest.', preparation: 'Prepare an original reel and make sure it is submitted through the official channel before the deadline. Final video specifications will be shared by organisers.' },
    { id: 'poster-making', title: 'Poster Making Contest', category: 'Create', mode: 'Creative design contest', desc: 'Turn a bold idea into a striking poster and make your visual message impossible to miss.', icon: 'panels-top-left', image: 'create', format: 'Create an original poster based on the official theme. Submission format, judging criteria, and deadline will be announced by organisers.', eligibility: 'Individual or team participation details will be announced by the organisers.', rules: 'Poster theme, dimensions, file format, and originality requirements will be supplied in the official contest brief.', preparation: 'Bring your own creative concept and design tools. Submission instructions will be published before the contest.' },
    { id: 'treasure-hunt', title: 'Treasure Hunt', category: 'Explore', mode: 'Team challenge', desc: 'Decode clues, navigate missions, and uncover the next checkpoint.', icon: 'map', image: 'explore' },
    { id: 'quiz', title: 'Technocrat of the Year', category: 'More', mode: 'Technology competition', desc: 'Showcase your technology knowledge, problem-solving, and curiosity to compete for the Technocrat of the Year title.', icon: 'circle-help', image: 'more', format: 'Technology-focused competition. Rounds and assessment format will be announced by organisers.', eligibility: 'Eligibility requirements will be announced in the official event brief.', rules: 'Competition topics, round rules, and scoring criteria will be published before the event.', preparation: 'Review the official event brief for topics, schedule, and anything participants should bring.' }
];
const team = [
    ['Club President', 'Leading the signal. Replace with organiser bio and official contact details.', 'team-president'],
    ['Event Co-Head', 'Coordinating event experiences. Replace with organiser bio and contact details.', 'team-cohead'],
    ['Technical Lead', 'Powering the platform and technical operations. Replace with organiser bio.', 'team-techlead'],
    ['Sponsorship Lead', 'Building partner connections. Replace with organiser bio and contact details.', 'team-sponsorship'],
    ['Publicity Lead', 'Amplifying the Xordium signal. Replace with organiser bio and contact details.', 'team-publicity']
];
const faqs = [
    ['How do I register?', 'Use the Registration page, select your event, complete the required details, and submit your request.'],
    ['Who is eligible to participate?', 'Eligibility is an organiser-supplied placeholder. Please add the final college, student, and participant criteria before launch.'],
    ['Can I form a team?', 'Team rules vary by event. Use the team name and team size fields where an event supports team participation.'],
    ['Where can I find event rules?', 'Each event detail view has a rules and highlights section. Replace the placeholder rules with official documents or guidance.'],
    ['When is the schedule?', 'Dates and schedules are currently placeholders. Organisers should publish the final timetable before the event.'],
    ['What prizes are available?', 'Prize amounts and award details are placeholders and should be confirmed by the organising team.'],
    ['Where is the venue?', 'Venue information is a placeholder. Check the Contact section once the official venue is announced.'],
    ['How can I get support?', 'Use the contact form or replace the support email placeholder with the official Xordium support channel.']
];

function go(route) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(route).classList.add('active');
    document.querySelectorAll('[data-route]').forEach(n => n.classList.toggle('active', n.dataset.route === route));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleMenu() { const menu = document.getElementById('mobile-menu'), btn = document.querySelector('.mobile-trigger'); menu.classList.toggle('open'); btn.setAttribute('aria-expanded', menu.classList.contains('open')); }
function eventArtwork(event, heightClass = '') {
    return `<div class="event-art ${heightClass}"><img src="${eventImages[event.id]}" alt="${event.title} event artwork" loading="lazy"><i data-lucide="${event.icon}" class="event-art-icon absolute right-5 bottom-5 h-10 w-10 text-pink-300/90"></i></div>`;
}
function updateGameRoster() {
    const selectedEvent = events.find(event => event.title === document.getElementById('reg-event').value);
    const teamSize = document.getElementById('reg-team-size');
    const teamName = document.getElementById('reg-team-name');
    const roster = document.getElementById('game-roster-fields');

    if (!selectedEvent || !selectedEvent.teamSize) {
        teamSize.readOnly = false;
        teamSize.value = '';
        teamName.required = false;
        roster.innerHTML = '';
        return;
    }

    teamSize.value = String(selectedEvent.teamSize);
    teamSize.readOnly = true;
    teamName.required = true;
    const fields = (prefix, label) => `<fieldset class="grid gap-3 border border-cyan-200/20 p-4 sm:grid-cols-2"><legend class="px-2 font-mono text-xs uppercase tracking-widest text-cyan-200">${label}</legend><div><label class="field-label" for="${prefix}-name">Name</label><input id="${prefix}-name" class="form-field" autocomplete="name" required></div><div><label class="field-label" for="${prefix}-game-id">Game ID</label><input id="${prefix}-game-id" class="form-field" required></div></fieldset>`;
    const members = Array.from({ length: selectedEvent.teamSize - 1 }, (_, index) => fields(`team-member-${index + 1}`, `Team member ${index + 1}`)).join('');
    roster.innerHTML = `<p class="text-sm text-slate-400">Enter all ${selectedEvent.teamSize} players, including the team leader. Every roster field is required.</p>${fields('team-leader', 'Team leader')}${members}`;
}
function eventCard(e) {
    return `<article class="event-card">${eventArtwork(e)}<div class="p-5"><div class="flex items-center justify-between gap-3"><span class="font-mono text-[10px] uppercase tracking-widest text-cyan-200">${e.category}</span><span class="text-xs text-slate-500">${e.mode}</span></div><h2 class="mt-3 text-xl font-bold">${e.title}</h2><p class="mt-2 min-h-12 text-sm leading-6 text-slate-400">${e.desc}</p><div class="mt-5 flex gap-3"><button class="button button-secondary flex-1 !px-3" onclick="showDetail('${e.id}')">Details</button><button class="button button-primary flex-1 !px-3" onclick="registerFor('${e.id}')">Register</button></div></div></article>`;
}
function renderEvents(category = 'All') { document.getElementById('event-grid').innerHTML = events.filter(e => category === 'All' || e.category === category).map(eventCard).join(''); lucide.createIcons(); }
function renderFeatured() { document.getElementById('featured-events').innerHTML = events.slice(0, 3).map(eventCard).join(''); lucide.createIcons(); }
function showDetail(id) {
    const e = events.find(x => x.id === id);
    if (!e) return;
    document.getElementById('detail-content').innerHTML = `${eventArtwork(e, 'min-h-[250px] border border-cyan-200/25')}<div class="mt-7 grid gap-8 lg:grid-cols-[1.3fr_.7fr]"><div><p class="eyebrow">${e.category} // ${e.mode}</p><h1 class="mt-3 text-4xl font-bold md:text-6xl">${e.title}</h1><p class="mt-5 text-lg leading-8 text-slate-300">${e.desc}</p><div class="mt-8 grid gap-4 sm:grid-cols-2"><section class="neon-border bg-[#0d0f1b] p-5"><h2 class="font-bold text-cyan-100">Format</h2><p class="mt-2 text-sm leading-6 text-slate-400">${e.format || 'Official format, rounds, and judging details: organiser placeholder.'}</p></section><section class="neon-border bg-[#0d0f1b] p-5"><h2 class="font-bold text-cyan-100">Eligibility & team size</h2><p class="mt-2 text-sm leading-6 text-slate-400">${e.eligibility || `${e.mode}. Final eligibility requirements to be supplied by organisers.`}</p></section><section class="neon-border bg-[#0d0f1b] p-5"><h2 class="font-bold text-cyan-100">Rules & highlights</h2><p class="mt-2 text-sm leading-6 text-slate-400">${e.rules || 'Rulebook, required materials, and judging criteria placeholder.'}</p></section><section class="neon-border bg-[#0d0f1b] p-5"><h2 class="font-bold text-cyan-100">Schedule & prizes</h2><p class="mt-2 text-sm leading-6 text-slate-400">Time slot, prize amounts, and award details to be announced.</p></section></div></div><aside class="neon-border h-fit bg-[#0d0f1b] p-6"><p class="eyebrow text-pink-300">Quick FAQ</p><div class="mt-4 space-y-4 text-sm text-slate-400"><p><strong class="block text-slate-200">When does it happen?</strong>Schedule placeholder.</p><p><strong class="block text-slate-200">What should I bring?</strong>${e.preparation || 'Official requirements placeholder.'}</p><p><strong class="block text-slate-200">Need help?</strong>Contact the Xordium support team.</p></div><button class="button button-primary mt-7 w-full" onclick="registerFor('${e.id}')">Register now <i data-lucide="arrow-right"></i></button></aside></div>`;
    go('event-detail'); lucide.createIcons();
}
function registerFor(id) { const e = events.find(x => x.id === id); if (!e) return; document.getElementById('reg-event').value = e.title; updateGameRoster(); go('register'); }
function renderTeam() { document.getElementById('team-grid').innerHTML = team.map(([role, bio, img]) => `<article class="event-card p-5"><img data-template-id="${img}" class="canva-image h-48 w-full object-cover opacity-85" loading="lazy"><p class="mt-4 font-mono text-[10px] uppercase tracking-widest text-pink-300">${role}</p><p class="mt-2 text-sm leading-6 text-slate-400">${bio}</p><button class="button button-secondary mt-5 w-full" onclick="focusContact()">Contact</button></article>`).join(''); }
function focusContact() { go('contact'); setTimeout(() => document.getElementById('contact-subject').focus(), 300) }
function renderFaq(list = faqs) { document.getElementById('faq-list').innerHTML = list.map(([q, a], i) => `<article class="faq-item border border-cyan-100/15 bg-[#0d0f1b]"><button class="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold" onclick="this.parentElement.classList.toggle('open')" aria-label="Toggle answer for ${q}"><span>${q}</span><i data-lucide="plus" class="faq-icon shrink-0 text-cyan-200"></i></button><div class="faq-answer px-5 pb-5 text-sm leading-6 text-slate-400">${a}</div></article>`).join(''); lucide.createIcons(); }
const dataHandler = { onDataChanged() { } }; let dataReady = false;
async function initData() { const result = await window.dataSdk.init(dataHandler); dataReady = result.isOk; }
async function saveRecord(record, button, status) {
    if (!dataReady) { status.textContent = 'Unable to connect to submissions. Please try again.'; status.className = 'mt-4 text-sm text-pink-300'; return false }
    button.disabled = true; button.classList.add('opacity-50'); status.textContent = 'Sending encrypted event request...'; status.className = 'mt-4 text-sm text-cyan-200';
    const result = await window.dataSdk.create(record); button.disabled = false; button.classList.remove('opacity-50');
    if (!result.isOk) { status.textContent = 'Submission could not be saved. Please check your details and retry.'; status.className = 'mt-4 text-sm text-pink-300'; return false } return true;
}
function resetRegistration() { const form = document.getElementById('registration-form'); form.reset(); updateGameRoster(); form.classList.remove('hidden'); document.getElementById('registration-success').classList.add('hidden'); }
function normalizeRegistrationInputs(form) {
    form.querySelectorAll('input:not([type="checkbox"]), textarea').forEach(field => {
        field.value = field.value.trim();
        if (field.required) field.setCustomValidity(field.value ? '' : 'This field is required.');
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const cats = ['All', ...new Set(events.map(e => e.category))]; document.getElementById('filters').innerHTML = cats.map((c, i) => `<button class="filter button ${i === 0 ? 'button-primary' : 'button-secondary'}" data-category="${c}">${c}</button>`).join('');
    document.querySelectorAll('.filter').forEach(btn => btn.onclick = () => { document.querySelectorAll('.filter').forEach(b => { b.classList.remove('button-primary'); b.classList.add('button-secondary') }); btn.classList.remove('button-secondary'); btn.classList.add('button-primary'); renderEvents(btn.dataset.category) });
    document.getElementById('reg-event').innerHTML = `<option value="">Choose an event</option>${events.map(e => `<option>${e.title}</option>`).join('')}`;
    document.getElementById('reg-event').addEventListener('change', updateGameRoster);
    document.getElementById('reg-team-size').addEventListener('input', event => { if (event.currentTarget.readOnly) { const selected = events.find(item => item.title === document.getElementById('reg-event').value); event.currentTarget.value = selected ? String(selected.teamSize) : ''; } });
    document.getElementById('reg-team-name').addEventListener('input', event => { event.currentTarget.setCustomValidity(''); });
    renderEvents(); renderFeatured(); renderTeam(); renderFaq(); lucide.createIcons(); initData();
    document.getElementById('faq-search').addEventListener('input', e => { const term = e.target.value.toLowerCase(); renderFaq(faqs.filter(f => (f[0] + f[1]).toLowerCase().includes(term))) });
    document.getElementById('registration-form').addEventListener('submit', async e => {
        e.preventDefault();
        const form = e.currentTarget;
        const status = document.getElementById('registration-message');
        const button = form.querySelector('button[type="submit"]');
        normalizeRegistrationInputs(form);
        const selectedEvent = events.find(event => event.title === document.getElementById('reg-event').value);
        const teamSize = document.getElementById('reg-team-size');

        if (selectedEvent?.teamSize) {
            teamSize.value = String(selectedEvent.teamSize);
            teamSize.readOnly = true;
        }

        if (!form.checkValidity()) {
            status.textContent = 'Please complete all required registration and team roster fields.';
            status.className = 'mt-4 text-sm text-pink-300';
            form.reportValidity();
            return;
        }

        const roster = selectedEvent?.teamSize ? JSON.stringify({
            leader: {
                name: document.getElementById('team-leader-name').value,
                game_id: document.getElementById('team-leader-game-id').value
            },
            members: Array.from({ length: selectedEvent.teamSize - 1 }, (_, index) => {
                const prefix = `team-member-${index + 1}`;
                return {
                    name: document.getElementById(`${prefix}-name`).value,
                    game_id: document.getElementById(`${prefix}-game-id`).value
                };
            })
        }) : '';
        const ok = await saveRecord({
            participant_name: document.getElementById('reg-name').value,
            email: document.getElementById('reg-email').value,
            phone: document.getElementById('reg-phone').value,
            college: document.getElementById('reg-college').value,
            branch: document.getElementById('reg-branch').value,
            year: document.getElementById('reg-year').value,
            team_name: document.getElementById('reg-team-name').value,
            team_size: teamSize.value,
            selected_event: document.getElementById('reg-event').value,
            consent: document.getElementById('reg-consent').checked,
            submitted_at: new Date().toISOString(),
            form_type: 'registration',
            subject: '',
            message: roster
        }, button, status);
        if (ok) {
            form.classList.add('hidden');
            document.getElementById('registration-success').classList.remove('hidden');
            lucide.createIcons();
        }
    });
    document.getElementById('contact-form').addEventListener('submit', async e => { e.preventDefault(); const form = e.currentTarget, status = document.getElementById('contact-message-state'), button = form.querySelector('button[type="submit"]'); if (!form.checkValidity()) { status.textContent = 'Please complete your name, email, subject, and message.'; status.className = 'mt-4 text-sm text-pink-300'; form.reportValidity(); return } const ok = await saveRecord({ participant_name: document.getElementById('contact-name').value.trim(), email: document.getElementById('contact-email').value.trim(), phone: '', college: '', year: '', team_name: '', team_size: '', selected_event: '', consent: false, submitted_at: new Date().toISOString(), form_type: 'contact', subject: document.getElementById('contact-subject').value.trim(), message: document.getElementById('contact-message').value.trim() }, button, status); if (ok) { form.reset(); status.textContent = 'Message received. The team can respond using the email you provided.'; status.className = 'mt-4 text-sm text-emerald-300' } });
});
