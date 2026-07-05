const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');
function activateTab(name){
  tabs.forEach(tab => {
    const active = tab.dataset.tab === name;
    tab.setAttribute('aria-selected', String(active));
  });
  panels.forEach(panel => {
    const active = panel.id === `panel-${name}`;
    panel.hidden = !active;
    panel.classList.toggle('active', active);
  });
}
tabs.forEach(tab => tab.addEventListener('click', () => {
  activateTab(tab.dataset.tab);
  history.replaceState(null, '', `#${tab.dataset.tab}`);
}));
const initial = location.hash.replace('#','');
if(['talking','exam','tests','after'].includes(initial)) activateTab(initial);
window.addEventListener('hashchange', () => {
  const name = location.hash.replace('#','');
  if(['talking','exam','tests','after'].includes(name)) activateTab(name);
});
