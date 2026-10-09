// Light/dark theme toggle. The chosen theme is stored in this browser only;
// with no stored choice the page follows the operating system setting.
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  if (!button) return;
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function current() {
    var t = root.getAttribute('data-theme');
    if (t === 'dark' || t === 'light') return t;
    return systemDark.matches ? 'dark' : 'light';
  }
  function describe() {
    var next = current() === 'dark' ? 'light' : 'dark';
    button.setAttribute('aria-label', 'Switch to ' + next + ' mode');
    button.title = 'Switch to ' + next + ' mode';
  }

  button.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    describe();
  });
  if (systemDark.addEventListener) systemDark.addEventListener('change', describe);
  describe();
})();
