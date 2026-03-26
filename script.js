/* Global style */
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background: #f4f9f4;
  color: #202820;
}
header {
  text-align: center;
  background: #006b3c;
  color: #fff;
  padding: 2rem 1rem;
}
.logo {
  height: 100px;
  margin-bottom: 0.5rem;
}
nav {
  background: #004f2d;
}
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}
nav li { margin: 0; }
nav a {
  color: white;
  text-decoration: none;
  padding: 1rem 1.5rem;
  display: block;
}
nav a:hover {
  background: #007a47;
}
main {
  max-width: 950px;
  margin: 2rem auto;
  padding: 0 1rem;
}
section {
  margin-bottom: 3rem;
}
h2 {
  color: #004f2d;
  border-bottom: 2px solid #006b3c;
  padding-bottom: 0.3rem;
}
.timeline .event {
  margin-bottom: 1.2rem;
  background: #e8f4eb;
  padding: 1rem;
  border-left: 4px solid #007a47;
}
.timeline h3 {
  margin: 0 0 0.3rem 0;
  color: #006b3c;
}
a {
  color: #006b3c;
}
form {
  display: flex;
  flex-direction: column;
}
input, textarea, button {
  margin: 0.5rem 0;
  padding: 0.8rem;
  font-size: 1rem;
}
button {
  background-color: #006b3c;
  color: #fff;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #004f2d;
}
/* --- BUA SECTION --- */
.bua-section {
  background-color: #003d20;
  color: #d5f0da;
  padding: 2rem 1rem;
  border-radius: 8px;
}
.bua-section h2 {
  color: #9fffa8;
  border-bottom: 2px solid #00cc66;
}
.bua-quote {
  font-style: italic;
  margin-top: 1rem;
  border-left: 4px solid #00cc66;
  padding-left: 1rem;
}
footer {
  background: #002b16;
  color: #ccc;
  text-align: center;
  padding: 1.5rem;
}
console.log("NDF site loaded"); // Keep your old line
// Nothing else needed: CSS handles the animation.