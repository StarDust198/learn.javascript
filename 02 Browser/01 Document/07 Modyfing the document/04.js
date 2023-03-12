let newElText
const newList = document.createElement('ul')

white(true) {
	newElText = prompt('Input text for the new element')

	if (!newElText) break;

	const newListItem = document.createElement('li');
	newListItem.textContent = newElText;
	newList.append(newListItem);
}