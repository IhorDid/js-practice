// Objects	Менеджер контактів: Реалізуй об’єкт contacts із методами add(name, phone), remove(id), find(term), list().
//Ідентифікатор – UUID.інкапсуляція даних через замикання / приватні поля; генерація UUID(Date.now() + Math.random())

const contacts = {
  add(name) {
    return (this.name = name);
  },
  add(phone) {
    this.phone = phone;
  },
  remove(id) {
    this.id = '';
  },
};

contacts.add('ihor', 7667345347);
console.log(contacts);
