const candidates = [
  {
    id: 1,
    name: "Proposal A",
    votes: 0
  },
  {
    id: 2,
    name: "Proposal B",
    votes: 0
  },
  {
    id: 3,
    name: "Proposal C",
    votes: 0
  }
];

const candidateList = document.getElementById("candidateList");

function renderCandidates() {
  // Sort candidates by votes (highest first)
  candidates.sort((a, b) => b.votes - a.votes);

  candidateList.innerHTML = "";

  candidates.forEach((candidate, index) => {
    const div = document.createElement("div");

    div.className = index === 0 ? "candidate leader" : "candidate";

    div.innerHTML = `
      <div class="info">
        <h3>${candidate.name}</h3>
        <p class="votes">Votes: ${candidate.votes}</p>
      </div>

      <button onclick="vote(${candidate.id})">
        Vote
      </button>
    `;

    candidateList.appendChild(div);
  });
}

function vote(id) {
  const candidate = candidates.find(c => c.id === id);

  if (candidate) {
    candidate.votes++;
    renderCandidates();
  }
}

renderCandidates();