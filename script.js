// Function to set a cookie
function setCookie(name, value, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(cname) === 0) return c.substring(cname.length, c.length);
  }
  return "";
}

// Function to apply font preferences
function applyPreferences() {
  const fontsize = getCookie("fontsize");
  const fontcolor = getCookie("fontcolor");

  if (fontsize) {
    document.documentElement.style.setProperty("--fontsize", fontsize + "px");
    document.getElementById("fontsize").value = fontsize;
  }

  if (fontcolor) {
    document.documentElement.style.setProperty("--fontcolor", fontcolor);
    document.getElementById("fontcolor").value = fontcolor;
  }
}

// Apply preferences when the page loads
window.onload = applyPreferences;

// Handle form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const fontsize = document.getElementById("fontsize").value;
  const fontcolor = document.getElementById("fontcolor").value;

  // Save to cookies
  setCookie("fontsize", fontsize);
  setCookie("fontcolor", fontcolor);

  // Apply immediately
  applyPreferences();

  alert("Preferences saved!");
});
