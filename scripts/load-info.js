window.onload = loadInfoFromPrevPage;

function loadInfoFromPrevPage() {
  console.log();
  info = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  }).info;

  console.log(info);

  document.getElementById("info").innerHTML = info;
}
