// !Завдання: Створення Інтерактивної Гри на JavaScript

// todo Опис Завдання
// Створи просту текстову гру на JavaScript, де гравці та об'єкти гри (наприклад, монстри, предмети) представлені
// як об'єкти. Кожен об'єкт має свої властивості та методи для взаємодії в грі.

// ?Структура Об'єктів
// Гравець (Player)
// Властивості: ім'я, здоров'я, сила, ліки
// Методи: атакувати, лікуватися

// Монстр (Monster)
// Властивості: вид, здоров'я, сила
// Методи: атакувати

// Предмет (Item)
// Властивості: назва, тип (наприклад, зброя, ліки), ефект

// ?Логіка Гри
// Гравець може зустрічати різних монстрів та знаходити предмети.
// В бою гравець та монстр по черзі атакують один одного.
// Гравець може використовувати предмети для покращення своїх характеристик або лікування.
// Гра закінчується, коли здоров'я гравця досягає нуля.

// Завдання
// Створи Об'єкти: Визнач об'єкти для гравця, монстрів та предметів з відповідними властивостями та методами.
// Реалізуй Логіку Бою: Створи логіку для бою між гравцем та монстром, включаючи взаємні атаки та використання предметів.
// Інтерфейс Користувача: Реалізуй простий текстовий інтерфейс для взаємодії гравця з грою
// (наприклад, вибір дій, відображення статусу гравця та монстра).
// Логіка Гри: Створи основну логіку гри, яка включає створення гравця, зустрічі з Монстрами, знаходження
// предметів та умови завершення гри.

// Додатково
// Додай систему рівнів для гравця, де з кожним рівнем зростають його характеристики.
// Введи різноманітність монстрів з унікальними властивостями та атаками.
// Реалізуй систему інвентаря, де гравець може зберігати та використовувати знайдені предмети.

const player = {
  name: 'Batman',
  health: 1000,
  power: 10,
  inventory: [],

  attack(monster) {
    monster.health -= this.power;

    if (monster.health <= 0) {
      return `${monster.name} переможений!`;
    }

    return `${monster.name} отримав урон - ${this.power}. Стан здоровя - ${monster.health} hp `;
  },
  heal() {
    if (this.health < 100) {
      this.health += 10;
      return `${this.name} зцілився. Нове здоров'я: ${this.health} hp`;
    }
  },
  useItem(itemName) {
    const item = this.inventory.find(i => i.name === itemName);
    if (!item) {
      return `${itemName} не знайдено в інвентарі.`;
    }

    if (item.type === 'heal') {
      return item.addHealth(this);
    }

    if (item.type === 'power') {
      return item.addPower(this);
    }

    return `Цей предмет не має дії.`;
  },
};

const monster = {
  name: 'Goblin',
  type: 'angry',
  health: 100,
  power: 5,

  attack(player) {
    player.health -= this.power;
    if (player.health <= 0) {
      return `${player.name} переможений!`;
    }
    return `${player.name} отримав урон - ${this.power}. Стан здоровя - ${player.health} hp`;
  },
};

const itemOne = {
  name: 'potion',
  type: 'heal',
  effect: 30,
  addHealth(player) {
    if (player.health < 100) {
      player.health += this.effect;
      return `${player.name} отримав лікування + ${this.effect}. Стан здоровя -${player.health} hp `;
    }
  },
};

const itemTwo = {
  name: 'sword',
  type: 'power',
  effect: 5,
  addPower(player) {
    player.power += this.effect;
    return `${player.name} отримав зброю + ${this.effect}. Стан сили -${player.power} одиниць `;
  },
};

function showStatus() {
  return `
Гравець: ${player.name}
HP: ${player.health}
Power: ${player.power}
Інвентар: ${player.inventory.map(i => i.name).join(', ') || 'порожній'}

Монстр: ${monster.name}
HP: ${monster.health}
Power: ${monster.power}
`;
}

function gameLoop() {
  alert('Гра починається!');
  player.inventory.push(itemOne);

  while (player.health > 0 && monster.health > 0) {
    const choice = prompt(
      `Що хочеш зробити?\n- attack\n- heal\n- useItem\n- status\n- exit`,
    );

    let result = '';

    switch (choice) {
      case 'attack':
        result += player.attack(monster) + '\n';
        if (monster.health > 0) {
          result += monster.attack(player);
        }
        break;

      case 'heal':
        result += player.health() || 'Здоровя повне';
        break;

      case 'useItem':
        const itemName = prompt(
          'Введи назву предмета (наприклад: potion, sword):',
        );
        result += player.useItem(itemName);
        break;

      case 'status':
        result += showStatus();
        break;

      case 'exit':
        alert('Гру завершено вручну.');
        return;

      default:
        result += 'Невідома команда.';
    }

    alert(result);

    if (player.health <= 0) {
      alert('Ти загинув. Гру завершено.');
      return;
    }
    if (monster.health <= 0) {
      alert('Монстр переможений! Перемога!');
      return;
    }

    if (Math.random() < 0.3) {
      player.inventory.push(itemTwo);
      alert('Ти знайшов меч! Додано до інвентаря.');
    }
  }
}

gameLoop();
