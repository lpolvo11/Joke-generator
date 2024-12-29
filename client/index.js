const button = document.querySelector(".btn");
const joke = document.querySelector(".joke");

button.addEventListener("click", async () => {
  joke.textContent = "";
  const response = await fetch("http://localhost:8080/api/joke");
  const data = await response.json();
  const jokeId = document.createElement("h1");
  const jokeType = document.createElement("h3");
  const jokeSetup = document.createElement("h3");
  const jokePunchLine = document.createElement("h3");
  jokeType.innerHTML = `Type: ${data.type}`;
  jokeSetup.innerHTML = `Setup: ${data.setup};`;
  jokePunchLine.innerHTML = `Punchline: ${data.punchline}`;
  jokeId.innerHTML = `ID: ${data.id}`;
  joke.appendChild(jokeId);
  joke.appendChild(jokeType);
  joke.appendChild(jokeSetup);
  joke.appendChild(jokePunchLine);
});
