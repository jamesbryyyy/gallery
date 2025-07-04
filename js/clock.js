  // Set your relationship start date here
  const startDate = new Date("2024-12-05T00:07:20"); // example: Dec 24, 2023

  function updateClock() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("relationship-clock").innerHTML =
      `<strong>${days}</strong> days <strong>${hours}</strong> hrs <strong>${minutes}</strong> min <strong>${seconds}</strong> sec`;
  }

  setInterval(updateClock, 1000);
  updateClock();
