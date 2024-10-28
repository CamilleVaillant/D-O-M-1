function afficherMessage() {
    const input = document.getElementById("userInput").value.trim();
    const messageElement = document.getElementById("message");
  
    if (input === "Bonjour") {
      messageElement.textContent = "Bonne journée !";
      messageElement.style.color = "green";
    } else if (input === "Au revoir") {
      messageElement.textContent = "À la prochaine !";
      messageElement.style.color = "green";
    } else {
      messageElement.textContent = "Je ne comprends pas";
      messageElement.style.color = "red";
    }
  }