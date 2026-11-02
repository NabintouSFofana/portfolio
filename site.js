(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let stored = null;
  try { stored = localStorage.getItem('theme'); } catch (_) {}
  let explicit = stored === 'dark' || stored === 'light';
  function apply(theme) {
    root.dataset.theme = theme;
    if (button) {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    }
  }
  apply(explicit ? stored : (system.matches ? 'dark' : 'light'));
  if (button) {
    button.hidden = false;
    button.addEventListener('click', () => {
      const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      explicit = true;
      apply(theme);
      try { localStorage.setItem('theme', theme); } catch (_) {}
    });
  }
  system.addEventListener('change', e => { if (!explicit) apply(e.matches ? 'dark' : 'light'); });
})();
