/* 共通：ハンバーガーメニュー（開閉） */
(function () {
  var btn = document.getElementById('nav-btn');
  var panel = document.getElementById('nav-panel');
  var close = document.getElementById('nav-close');
  if (!btn || !panel) return;

  function open() {
    panel.classList.add('open');
    document.body.classList.add('nav-open');
    btn.setAttribute('aria-expanded', 'true');
    if (close) close.focus();
  }
  function shut(returnFocus) {
    panel.classList.remove('open');
    document.body.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
    if (returnFocus) btn.focus();
  }

  btn.addEventListener('click', open);
  if (close) close.addEventListener('click', function () { shut(true); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('open')) shut(true);
  });
  // メニュー内のリンクを押したら閉じる（同じページ内の移動に対応）
  [].forEach.call(panel.querySelectorAll('a'), function (a) {
    a.addEventListener('click', function () { shut(false); });
  });
})();
