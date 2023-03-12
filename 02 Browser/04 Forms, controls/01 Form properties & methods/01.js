// There’s a <select>:

// <select id="genres">
//   <option value="rock">Rock</option>
//   <option value="blues" selected>Blues</option>
// </select>
// Use JavaScript to:

// Show the value and the text of the selected option.
// Add an option: <option value="classic">Classic</option>.
// Make it selected.
// Note, if you’ve done everything right, your alert should show blues.

// 1
const selectedOption = genres.options[genres.selectedIndex];
alert(`Value: ${selectedOption.value}, text: ${selectedOption.text}`);

// 2
let newOption = new Option('Classic', 'classic');
genres.append(newOption);

// 3
genres.value = 'classic';
