var words = [
  {text: "ступор", weight: 13},
  {text: "страх", weight: 10.5},
  {text: "боль", weight: 9.4},
  {text: "грусть", weight: 8},
  {text: "сил нет", weight: 6.2},
  {text: "время летит", weight: 15},
  {text: "разлаженность", weight: 4},
  {text: "бессмысленность", weight: 7},
  {text: "впечатлений нет", weight: 7},
  {text: "апатия", weight: 7},
  {text: "усталость", weight: 7},
  {text: "заброшенность", weight: 7},
  {text: "отвращение", weight: 7},
  {text: "страдание", weight: 7},
  {text: "напряжение", weight: 7},
  {text: "нервозность", weight: 14},
  {text: "бесполезность", weight: 14},
  {text: "заторможенность", weight: 14},

];

$(document).ready(function() {
  $('.brain-cloud').jQCloud(words,{height: 600, width: 768,
  shape: 'circular'
});
});

$(document).ready(function() {
  $('.brain-cloud').jQCloud(words,{autoResize: true
});
});
