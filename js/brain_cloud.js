var words = [
  {text: "ступор", weight: 13},
  {text: "страх", weight: 10.5},
  {text: "боль", weight: 9.4},
  {text: "грусть", weight: 8},
  {text: "сил нет", weight: 6.2},
  {text: "время летит", weight: 15},
  {text: "когда в гроб?", weight: 4},
  {text: "бессмысленность", weight: 7},
  {text: "впечатлений нет", weight: 7},
  {text: "апатия", weight: 7},
  {text: "усталость", weight: 7},
  {text: "заброшенность", weight: 7},

];

$(document).ready(function() {
  $('.brain-cloud').jQCloud(words,{height: 500, width: 700,
  shape: 'circular'
});
});
