function generateQuote() {
  let quotes = [
    "Success comes from hard work.",
    "Never stop learning.",
    "Believe in yourself.",
    "Dream big and work hard.",
    "Stay positive.",
    "Every day is a new opportunity.",
  ];

  let randomIndex = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").innerHTML = quotes[randomIndex];
}
