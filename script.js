let completedChallenges = 0;
const totalChallenges = 2;

function startJourney() {
  const name = document.getElementById('nameInput').value.trim();
  const age = document.getElementById('ageInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const password = document.getElementById('passwordInput').value.trim();

  if (!name || !age || !email || !password) {
    alert("Please fill in all fields");
    return;
  }

  document.getElementById('login-section').style.display = "none";
  document.getElementById('main-section').style.display = "block";
}

function completeChallenge(day) {
  const challenge = document.getElementById(`day${day}`);
  if (!challenge.classList.contains('locked')) {
    challenge.querySelector('button').disabled = true;
    challenge.querySelector('button').innerText = "✅ Completed";
    challenge.style.opacity = 0.7;

    completedChallenges++;
    updateProgress();

    // Unlock next challenge
    const nextDay = document.getElementById(`day${day + 1}`);
    if (nextDay) {
      nextDay.classList.remove('locked');
      nextDay.querySelector('button').disabled = false;
      nextDay.querySelector('button').innerText = "✅ Done";
      nextDay.querySelector('img').src = "https://via.placeholder.com/150?text=Day+" + (day + 1);
    }
  }
}

function updateProgress() {
  const percentage = (completedChallenges / totalChallenges) * 100;
  document.getElementById("progressBar").style.width = percentage + "%";
}