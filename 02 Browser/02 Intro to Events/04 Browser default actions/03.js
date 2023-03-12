thumbs.addEventListener('click', (e) => {
  const tgt = e.target.closest('a[title^="Image"]');
  if (!tgt) return;
  e.preventDefault();

  largeImg.setAttribute('src', tgt.getAttribute('href'));
  largeImg.setAttribute('alt', tgt.getAttribute('title'));
});
