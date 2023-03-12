function showNotification({ top = 0, right = 0, className, html }) {
  const notification = document.createElement('div');

  notification.innerHTML = html;
  notification.classList.add(className, 'notification');
  notification.style.cssText = `
		top: ${top}px;
		right: ${right}px;
	`;

  document.body.append(notification);
  setTimeout(() => {
    notification.remove();
  }, 1500);
}
