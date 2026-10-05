(() => {
  'use strict';
  const state = window.alsTutorState;
  if (!state || typeof window.save !== 'function') return;
  const STUDY_VIEWS = new Set(['start','home','lessons','practice','voice','coach','ai']);
  const IDLE_LIMIT_MS = 3 * 60 * 1000;
  let lastActivityAt = 0;
  let lastSavedAt = Date.now();
  function localDay(date = new Date()) { return date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0'); }
  function dayActivity(day) {
    state.dailyActivity = state.dailyActivity || {};
    return state.dailyActivity[day] || (state.dailyActivity[day] = {seconds:0,attempts:0,correct:0,topics:{},sessions:[],work:[]});
  }
  function context() {
    const view = document.querySelector('.view.active')?.id;
    if (!STUDY_VIEWS.has(view)) return null;
    const topicId = window.currentUnit || document.getElementById('focusTopic')?.value || 'foundation';
    const unit = (window.alsTutorUnits || []).find(item => item.id === topicId);
    const topicTitle = unit?.title || document.getElementById('focusTopic')?.selectedOptions?.[0]?.textContent || topicId;
    return {topicId,topicTitle};
  }
  function finishSession(at = new Date()) {
    const session = state.autoSession;
    if (!session) return;
    const day = localDay(new Date(session.startedAt));
    const activity = dayActivity(day);
    activity.sessions = activity.sessions || [];
    activity.sessions.push({startedAt:session.startedAt,endedAt:at.toISOString(),seconds:session.seconds||0,topic:session.topicTitle||'Tutor practice',automatic:true});
    activity.sessions = activity.sessions.slice(-30);
    state.autoSession = null;
  }
  function closeStaleSession() {
    if (!state.autoSession) return;
    const ended = new Date(state.autoSession.lastActiveAt || state.autoSession.startedAt);
    finishSession(ended); window.save();
  }
  function beginSession(topic) {
    if (!state.autoSession || state.autoSession.topicId !== topic.topicId) {
      finishSession();
      state.autoSession = {startedAt:new Date().toISOString(),lastActiveAt:new Date().toISOString(),seconds:0,topicId:topic.topicId,topicTitle:topic.topicTitle};
    }
  }
  function markActivity() { if (context()) lastActivityAt = Date.now(); }
  function saveIfNeeded(force = false) {
    if (force || Date.now() - lastSavedAt >= 15000) { window.save(); lastSavedAt = Date.now(); }
  }
  closeStaleSession();
  for (const eventName of ['pointerdown','keydown','input','touchstart','scroll']) document.addEventListener(eventName,markActivity,{capture:true,passive:true});
  document.addEventListener('visibilitychange',() => { if(document.hidden){lastActivityAt=0;finishSession();saveIfNeeded(true);} });
  window.addEventListener('pagehide',() => { finishSession();saveIfNeeded(true); });
  window.setInterval(() => {
    const now=Date.now(),topic=context(),active=topic&&!document.hidden&&document.hasFocus()&&lastActivityAt&&now-lastActivityAt<=IDLE_LIMIT_MS;
    if(!active||state.activeSession){if(state.autoSession){finishSession();saveIfNeeded(true);}return;}
    beginSession(topic);
    const activity=dayActivity(localDay());activity.seconds=(activity.seconds||0)+1;
    activity.topics=activity.topics||{};activity.topics[topic.topicId]=true;
    state.autoSession.seconds=(state.autoSession.seconds||0)+1;state.autoSession.lastActiveAt=new Date(now).toISOString();
    saveIfNeeded();
  },1000);
})();