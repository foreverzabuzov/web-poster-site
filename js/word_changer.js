$(function () {
  count = 0;
  wordsArray = ["боль", "страдание", "страх", "тоска", "отвращение", "грусть", "нету сил", "время летит", "апатия", "усталость", "скука", "зависть", "напряжение", "нервозность", "бесполезность", "ужас", "ущерб"];
  setInterval(function () {
    count++;
    $("#word").fadeOut(800, function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(800);
    });
  }, 3000);
});
