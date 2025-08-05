// Objects	Менеджер контактів: Реалізуй об’єкт contacts із методами add(name, phone), remove(id), find(term), list().
//Ідентифікатор – UUID.інкапсуляція даних через замикання / приватні поля; генерація UUID(Date.now() + Math.random())

// const contacts = {
//   add(name) {
//     return (this.name = name);
//   },
//   add(phone) {
//     this.phone = phone;
//   },
//   remove(id) {
//     this.id = '';
//   },
// };

// contacts.add('ihor', 7667345347);
// console.log(contacts);

function createContacts() {
  const arr = [];
  let i = 0;
  return {
    add(name, phone) {
      arr.push({ id: i++, name, phone });
    },
    list() {
      return arr;
    },
    remove(id) {
      return arr.filter(item => item.id !== id);
    },
    find(term) {
      return arr.find(item => item.name === term);
    },
  };
}

const contacts = createContacts();
console.log(contacts);

contacts.add('Іван', '123-456');
contacts.add('Alice', '123-416');
contacts.add('Pen', '123-426');
contacts.add('Bob', '123-436');
console.log(contacts.list());
// console.log(contacts.remove(0));
console.log(contacts.find('Іван'));
