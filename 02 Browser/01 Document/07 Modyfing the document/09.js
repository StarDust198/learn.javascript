// Write the code to insert <li>2</li><li>3</li> between two <li> here:

// <ul id="ul">
//   <li id="one">1</li>
//   <li id="two">4</li>
// </ul>

let fragment = new DocumentFragment();
fragment.innerHTML = '<li>2</li><li>3</li>';
one.after(fragment);
