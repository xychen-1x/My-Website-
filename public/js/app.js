async function checkSystem() {
  const status = document.getElementById("systemStatus");
  const dot = document.getElementById("statusDot");

  status.textContent = "Checking...";

  try {
    const response = await fetch("/api/health");

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();

    status.textContent = data.status === "ok"
      ? "Operational"
      : "Unavailable";

    dot.classList.add("online");
  } catch {
    status.textContent = "Unavailable";
    dot.classList.remove("online");
  }
}

document
  .getElementById("statusButton")
  .addEventListener("click", checkSystem);

checkSystem();
