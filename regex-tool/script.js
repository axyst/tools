document
  .getElementById("regex-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var regexInput = document.getElementById("regex-input").value;
    var testString = document.getElementById("test-string").value;
    var result = document.getElementById("result");
    var matchesList = document.getElementById("matches-list");

    result.innerHTML = "";
    matchesList.innerHTML = "";
    matchesList.style.display = "none";

    try {
      var regex = new RegExp(regexInput, "g");
      var match = testString.match(regex);
      if (match) {
        var highlighted = testString.replace(
          regex,
          '<span class="bg-success">$&</span>'
        );
        result.innerHTML = highlighted;

        match.forEach(function (matchedItem) {
          var li = document.createElement("li");
          li.textContent = matchedItem;
          li.classList.add("list-group-item");
          matchesList.appendChild(li);
        });
      } else {
        result.textContent = "没有匹配的结果";
      }
    } catch (e) {
      result.textContent = "正则表达式无效: " + e.message;
    }
  });

document.getElementById("show-list").addEventListener("click", function () {
  alert("clicked");
  var matchesList = document.getElementById("matches-list");
  matchesList.style.display =
    matchesList.style.display === "none" ? "" : "none";
});

document.getElementById("copy-list").addEventListener("click", function () {
  var matchesList = document.getElementById("matches-list");
  var matchesText = Array.from(matchesList.querySelectorAll("li"))
    .map(function (li) {
      return li.textContent;
    })
    .join("\n");

  if (matchesText.length > 0) {
    navigator.clipboard.writeText(matchesText).then(
      function () {
        const copyNotification = document.getElementById("copy-notification");
        copyNotification.style.display = "inline";
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  } else {
    const copyNotification = document.getElementById("copy-notification");
    copyNotification.textContent = "没有可复制的结果";
    copyNotification.style.color = "red";
    copyNotification.style.display = "inline";
  }
});
