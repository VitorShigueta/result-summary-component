let data = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];

var reaction = document.querySelector("#reaction-value");
reaction.textContent = data[0].score;

var reaction = document.querySelector("#memory-value");
reaction.textContent = data[1].score;

var reaction = document.querySelector("#verbal-value");
reaction.textContent = data[2].score;

var reaction = document.querySelector("#visual-value");
reaction.textContent = data[3].score;

var reaction = document.querySelector(".circle-percentage");
reaction.textContent = parseInt((data[0].score + data[1].score + data[2].score + data[3].score) / 4);