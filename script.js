const words = [
  { en: "afraid", uz: "qo'rqqan" },
  { en: "agree", uz: "rozi bo'lmoq" },
  { en: "angry", uz: "jahli chiqqan" },
  { en: "arrive", uz: "yetib kelmoq" },
  { en: "attack", uz: "hujum qilmoq" }
];

function showWord() {
  const w = words[Math.floor(Math.random() * words.length)];
  document.getElementById("word").innerHTML = ${w.en} — ${w.uz};
}
