(() => {
  'use strict';
  const config = window.ALS_SUPABASE_CONFIG || {};
  const status = document.getElementById('status');
  const emailSection = document.getElementById('emailSection');
  const learnerSection = document.getElementById('learnerSection');
  const emailForm = document.getElementById('emailForm');
  const addForm = document.getElementById('addLearnerForm');
  const sendButton = document.getElementById('sendLink');
  const list = document.getElementById('learnerList');
  let client;
  let currentUser;

  function say(message, error = false) {
    status.textContent = message;
    status.classList.toggle('error', error);
  }

  function routeForGrade(grade) {
    return window.ALSGradeRouting.destinationFor(grade, config.destinations);
  }

  function routeLearner(learner) {
    const destination = routeForGrade(Number(learner.grade_level));
    if (!destination) {
      say(window.ALSGradeRouting.systemFor(learner.grade_level) === 'ale'
        ? 'Angela Learning Engine has no confirmed web address yet. Your grade is saved; the Grade 3 route is waiting for its app URL.'
        : 'A learning path is not configured for this grade yet.', true);
      return;
    }
    sessionStorage.setItem('als.currentLearnerId', learner.id);
    sessionStorage.setItem('als.currentGrade', String(learner.grade_level));
    const target = new URL(destination, window.location.href);
    window.location.assign(target.href);
  }

  function addLearnerButton(learner, index) {
    const row = document.createElement('div');
    row.className = 'learner';
    const label = document.createElement('span');
    const grade = Number(learner.grade_level);
    label.textContent = `Learner ${index + 1} · Grade ${grade}`;
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = grade === 3 ? 'Open ALE' : 'Open ALS Tutor';
    button.addEventListener('click', () => routeLearner(learner));
    row.append(label, button);
    return row;
  }

  async function loadLearners(user) {
    currentUser = user;
    emailSection.classList.add('hidden');
    learnerSection.classList.remove('hidden');
    document.getElementById('signedInAs').textContent = `Signed in as parent/guardian: ${user.email}`;
    const { data, error } = await client.from('als_learner_profiles')
      .select('id, grade_level, created_at')
      .order('created_at', { ascending: true });
    if (error) {
      say('Family profiles are not ready yet. The Supabase project must be restored and its login setup completed.', true);
      return;
    }
    list.replaceChildren(...data.map(addLearnerButton));
    say(data.length ? 'Select a learner, or add another grade profile.' : 'Add a grade profile to choose the learner’s system.');
  }

  async function start() {
    if (!window.supabase?.createClient || !config.projectUrl || !config.publishableKey) {
      emailSection.classList.remove('hidden');
      sendButton.disabled = true;
      say('Family login is not connected yet. The ALE Supabase project is inactive; the tutor continues to work on this device.', true);
      return;
    }
    client = window.supabase.createClient(config.projectUrl, config.publishableKey);
    const { data, error } = await client.auth.getSession();
    if (error) say('Could not check the sign-in session. Try again later.', true);
    if (data?.session?.user) await loadLearners(data.session.user);
    client.auth.onAuthStateChange((event, session) => {
      window.setTimeout(() => {
        if (session?.user) loadLearners(session.user);
        else {
          currentUser = null;
          learnerSection.classList.add('hidden');
          emailSection.classList.remove('hidden');
          say('Signed out. Enter a parent or guardian email to continue.');
        }
      }, 0);
    });
  }

  emailForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!client) {
      say('Family login is not connected yet. The tutor continues to work on this device.', true);
      return;
    }
    const email = document.getElementById('parentEmail').value.trim();
    sendButton.disabled = true;
    say('Sending the sign-in link…');
    const { error } = await client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}${window.location.pathname}`, shouldCreateUser: true }
    });
    sendButton.disabled = false;
    say(error ? 'The sign-in email could not be sent. Check the address or try again later.' : 'Check the parent/guardian inbox for the sign-in link. Use the same email on each device.', Boolean(error));
  });

  addForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!currentUser) return;
    const grade = Number(document.getElementById('gradeLevel').value);
    if (![3, 9, 10, 11, 12].includes(grade)) return;
    const { data, error } = await client.from('als_learner_profiles')
      .insert({ guardian_id: currentUser.id, grade_level: grade })
      .select('id, grade_level, created_at')
      .single();
    if (error) {
      say('Could not save the grade profile. Check the Supabase setup and try again.', true);
      return;
    }
    await loadLearners(currentUser);
    routeLearner(data);
  });

  document.getElementById('signOut').addEventListener('click', async () => {
    const { error } = await client.auth.signOut();
    if (error) say('Sign out did not complete. Try again.', true);
    else say('Signed out.');
  });

  start().catch(() => say('Family login could not start. The tutor continues to work on this device.', true));
})();
