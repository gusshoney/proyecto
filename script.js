// Navegación entre secciones
const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sectionId = button.dataset.section;

    sections.forEach((section) => {
      section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Ley de Snell
document.getElementById("snellButton").addEventListener("click", () => {
  const n1 = Number(document.getElementById("n1").value);
  const theta1 = Number(document.getElementById("theta1").value);
  const n2 = Number(document.getElementById("n2").value);
  const result = document.getElementById("snellResult");

  if (n1 <= 0 || n2 <= 0 || theta1 < 0 || theta1 >= 90) {
    result.textContent = "Escribe valores válidos.";
    return;
  }

  const senoTheta2 = (n1 * Math.sin(theta1 * Math.PI / 180)) / n2;

  if (senoTheta2 > 1) {
    result.textContent = "No hay refracción: ocurre reflexión interna total.";
    return;
  }

  const theta2 = Math.asin(senoTheta2) * 180 / Math.PI;
  result.textContent = "Ángulo de refracción: " + theta2.toFixed(2) + "°";
});

// Ángulo crítico
document.getElementById("criticalButton").addEventListener("click", () => {
  const n1 = Number(document.getElementById("core").value);
  const n2 = Number(document.getElementById("cladding").value);
  const result = document.getElementById("criticalResult");

  if (n1 <= n2 || n1 <= 0 || n2 <= 0) {
    result.textContent = "n₁ debe ser mayor que n₂ y ambos deben ser positivos.";
    return;
  }

  const angle = Math.asin(n2 / n1) * 180 / Math.PI;
  result.textContent = "Ángulo crítico: " + angle.toFixed(2) + "°";
});

// Sensor ToF
document.getElementById("tofButton").addEventListener("click", () => {
  const timeNs = Number(document.getElementById("time").value);
  const result = document.getElementById("tofResult");
  const speedOfLight = 299792458;

  if (timeNs <= 0) {
    result.textContent = "El tiempo debe ser mayor que cero.";
    return;
  }

  const timeSeconds = timeNs * 1e-9;
  const distance = (speedOfLight * timeSeconds) / 2;

  result.textContent = "Distancia aproximada: " + distance.toFixed(3) + " metros";
});
