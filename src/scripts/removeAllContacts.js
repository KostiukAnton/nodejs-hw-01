import { writeContacts } from '../utils/writeContacts.js';
import { countContacts } from './countContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Контакти видаленні. Усього контактів:', await countContacts());
  } catch (error) {
    console.error('Помилка:', error);
  }
};

removeAllContacts();
