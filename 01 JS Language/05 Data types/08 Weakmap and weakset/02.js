let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

// WeakMap
const messagesMap = new WeakMap();
weakMap.set(messages[0], { read: true, date: new Date() });
