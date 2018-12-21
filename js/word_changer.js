$(function () {
  count = 0;
  wordsArray = ["боль", "страдание", "страх", "тоска", "отвращение", "грусть", "сил нет", "время летит", "апатия", "усталость", "отвращение", "страдание", "напряжение", "нервозность", "бесполезность", "ужас"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(800, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(800);
    });
  }, 3000);
});
