function diffText(text1, text2) {
  var dmp = new diff_match_patch();
  var d = dmp.diff_main(text1, text2);
  dmp.diff_cleanupSemantic(d);
  return dmp.diff_prettyHtml(d);
}

document.getElementById("diff-btn").addEventListener("click", function () {
  const text1 = document.getElementById("text1").value;
  const text2 = document.getElementById("text2").value;
  const diffHtml = diffText(text1, text2);
  document.getElementById("result").innerHTML = diffHtml;
});