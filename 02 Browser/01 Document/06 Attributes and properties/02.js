const links = document.querySelectorAll('a').forEach((link) => {
  href = link.getAttribute('href');
  if (href && href.includes('://') && !href.startsWith('http://internal.com')) {
    link.style.color = 'orange';
  }
});
