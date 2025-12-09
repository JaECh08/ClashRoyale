let playerCount = 3;
const minPlayers = 3;
const maxPlayers = 5;

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const players = document.querySelectorAll(".player");

const userLabel = document.getElementById("userLabel");
const nextBtn = document.getElementById("nextBtn");
const card = document.getElementById("card");
const cardImg = document.getElementById("cardImg");
const imposterText = document.getElementById("imposterText");

const cards = [
  { name: "Archer Queen", img: "Archer Queen.png" },
  { name: "Archers", img: "Archers.png" },
  { name: "Arrows", img: "Arrows.png" },
  { name: "Baby Dragon", img: "Baby Dragon.png" },
  { name: "Balloon", img: "Balloon.png" },
  { name: "Bandit", img: "Bandit.png" },
  { name: "Barbarian Barrel", img: "Barbarian Barrel.png" },
  { name: "Barbarian Hut", img: "Barbarian Hut.png" },
  // { name: "Barbarians", img: "Barbarians.png" },
  { name: "Bats", img: "Bats.png" },
  // { name: "Battle Healer", img: "Battle Healer.png" },
  // { name: "Battle Ram", img: "Battle Ram.png" },
  { name: "Berserker", img: "Berserker.png" },
  // { name: "Bomber", img: "Bomber.png" },
  { name: "Boss Bandit", img: "Boss Bandit.png" },
  { name: "Bowler", img: "Bowler.png" },
  { name: "Cannon", img: "Cannon.png" },
  // { name: "Cannon Cart", img: "Cannon Cart.png" },
  // { name: "Clone", img: "Clone.png" },
  // { name: "Dark Prince", img: "Dark Prince.png" },
  { name: "Dart Goblin", img: "Dart Goblin.png" },
  // { name: "Earthquake", img: "Earthquake.png" },
  // { name: "Electro Dragon", img: "Electro Dragon.png" },
  // { name: "Electro Giant", img: "Electro Giant.png" },
  { name: "Electro Spirit", img: "Electro Spirit.png" },
  { name: "Electro Wizard", img: "Electro Wizard.png" },
  // { name: "Elite Barbarians", img: "Elite Barbarians.png" },
  { name: "Elixir Collector", img: "Elixir Collector.png" },
  // { name: "Elixir Golem", img: "Elixir Golem.png" },
  // { name: "Executioner", img: "Executioner.png" },
  // { name: "Fire Spirit", img: "Fire Spirit.png" },
  { name: "Fireball", img: "Fireball.png" },
  { name: "Firecracker", img: "Firecracker.png" },
  // { name: "Fisherman", img: "Fisherman.png" },
  // { name: "Flying Machine", img: "Flying Machine.png" },
  // { name: "Freeze", img: "Freeze.png" },
  // { name: "Furnace", img: "Furnace.png" },
  // { name: "Giant", img: "Giant.png" },
  { name: "Giant Skeleton", img: "Giant Skeleton.png" },
  // { name: "Giant Snowball", img: "Giant Snowball.png" },
  { name: "Goblin Barrel", img: "Goblin Barrel.png" },
  // { name: "Goblin Cage", img: "Goblin Cage.png" },
  // { name: "Goblin Curse", img: "Goblin Curse.png" },
  // { name: "Goblin Demolisher", img: "Goblin Demolisher.png" },
  // { name: "Goblin Drill", img: "Goblin Drill.png" },
  // { name: "Goblin Gang", img: "Goblin Gang.png" },
  // { name: "Goblin Giant", img: "Goblin Giant.png" },
  // { name: "Goblin Hut", img: "Goblin Hut.png" },
  // { name: "Goblin Machine", img: "Goblin Machine.png" },
  // { name: "Goblins", img: "Goblins.png" },
  { name: "Goblinstein", img: "Goblinstein.png" },
  { name: "Golden Knight", img: "Golden Knight.png" },
  // { name: "Golem", img: "Golem.png" },
  // { name: "Graveyard", img: "Graveyard.png" },
  // { name: "Guards", img: "Guards.png" },
  // { name: "Heal Spirit", img: "Heal Spirit.png" },
  { name: "Hog Rider", img: "Hog Rider.png" },
  // { name: "Hunter", img: "Hunter.png" },
  // { name: "Ice Golem", img: "Ice Golem.png" },
  { name: "Ice Spirit", img: "Ice Spirit.png" },
  // { name: "Ice Wizard", img: "Ice Wizard.png" },
  // { name: "Inferno Dragon", img: "Inferno Dragon.png" },
  // { name: "Inferno Tower", img: "Inferno Tower.png" },
  { name: "Knight", img: "Knight.png" },
  { name: "Lava Hound", img: "Lava Hound.png" },
  // { name: "Little Prince", img: "Little Prince.png" },
  // { name: "Lumberjack", img: "Lumberjack.png" },
  // { name: "Magic Archer", img: "Magic Archer.png" },
  { name: "Mega Knight", img: "Mega Knight.png" },
  // { name: "Mega Minion", img: "Mega Minion.png" },
  // { name: "Mighty Miner", img: "Mighty Miner.png" },
  { name: "Miner", img: "Miner.png" },
  // { name: "Mini P.E.K.K.A.", img: "Mini Pekka.png" },
  // { name: "Minion Horde", img: "Minion Horde.png" },
  // { name: "Minions", img: "Minions.png" },
  { name: "Monk", img: "Monk.png" },
  // { name: "Mother Witch", img: "Mother Witch.png" },
  // { name: "Mortar", img: "Mortar.png" },
  // { name: "Musketeer", img: "Musketeer.png" },
  // { name: "Night Witch", img: "Night Witch.png" },
  { name: "P.E.K.K.A.", img: "Pekka.png" },
  // { name: "Phoenix", img: "Phoenix.png" },
  { name: "Poison", img: "Poison.png" },
  { name: "Prince", img: "Prince.png" },
  // { name: "Princess", img: "Princess.png" },
  // { name: "Ram Rider", img: "Ram Rider.png" },
  // { name: "Rage", img: "Rage.png" },
  // { name: "Rascals", img: "Rascals.png" },
  { name: "Royal Delivery", img: "Royal Delivery.png" },
  // { name: "Royal Ghost", img: "Royal Ghost.png" },
  // { name: "Royal Giant", img: "Royal Giant.png" },
  // { name: "Royal Hogs", img: "Royal Hogs.png" },
  // { name: "Royal Recruits", img: "Royal Recruits.png" },
  // { name: "Rune Giant", img: "Rune Giant.png" },
  { name: "Skeleton Army", img: "Skeleton Army.png" },
  // { name: "Skeleton Barrel", img: "Skeleton Barrel.png" },
  // { name: "Skeleton Dragons", img: "Skeleton Dragons.png" },
  // { name: "Skeleton King", img: "Skeleton King.png" },
  { name: "Skeletons", img: "Skeletons.png" },
  { name: "Sparky", img: "Sparky.png" },
  // { name: "Spear Goblins", img: "Spear Goblins.png" },
  // { name: "Spirit Empress", img: "Spirit Empress.png" },
  // { name: "Suspicious Bush", img: "Suspicious Bush.png" },
  { name: "The Log", img: "The Log.png" },
  // { name: "Three Musketeers", img: "Three Musketeers.png" },
  // { name: "Tornado", img: "Tornado.png" },
  { name: "Valkyrie", img: "Valkyrie.png" },
  // { name: "Vines", img: "Vines.png" },
  // { name: "Void", img: "Void.png" },
  // { name: "Wall Breakers", img: "Wall Breakers.png" },
  { name: "Witch", img: "Witch.png" },
  // { name: "Wizard", img: "Wizard.png" },
  // { name: "X-Bow", img: "X-Bow.png" },
  { name: "Zap", img: "Zap.png" },
  // { name: "Zappies", img: "Zappies.png" }
];



let currentUser = 1;
let imposterIndex = 0;
let chosenCard = null;
let revealed = false;

function updatePlayers() {
  players.forEach((p, i) => {
    p.classList.toggle("active", i < playerCount);
  });
}

document.getElementById("plusBtn").onclick = () => {
  if (playerCount < maxPlayers) {
    playerCount++;
    updatePlayers();
  }
};

document.getElementById("minusBtn").onclick = () => {
  if (playerCount > minPlayers) {
    playerCount--;
    updatePlayers();
  }
};

document.getElementById("startBtn").onclick = () => {
  startScreen.classList.remove("active");
  gameScreen.classList.add("active");

  currentUser = 1;
  imposterIndex = Math.floor(Math.random() * playerCount) + 1;
  chosenCard = cards[Math.floor(Math.random() * cards.length)];

  showUser();
};

function showUser() {
  userLabel.textContent = "User " + currentUser;
  revealed = false;

  card.classList.remove("flip");
  cardImg.style.display = "none";
  imposterText.style.display = "none";

  // Jika user terakhir, tombol jadi "FINISH", bukan "NEXT"
  if (currentUser === playerCount) {
    nextBtn.textContent = "FINISH";
  } else {
    nextBtn.textContent = "NEXT";
  }
}


card.onclick = () => {
  if (revealed) return;

  revealed = true;
  card.classList.add("flip");

  setTimeout(() => {
    if (currentUser === imposterIndex) {
      imposterText.style.display = "block";
    } else {
      cardImg.src = chosenCard.img;
      cardImg.style.display = "block";
    }
  }, 300);
};

nextBtn.onclick = () => {
  if (!revealed) return;

  if (currentUser < playerCount) {
    currentUser++;
    showUser();
  } else {
    gameScreen.classList.remove("active");
    startScreen.classList.add("active");
  }
};
