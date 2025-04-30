import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log('Немає контактів для видалення');
      return;
    }
    const newContacts = contacts.slice(0, -1);
    await writeContacts(newContacts);
  } catch (error) {
    console.error('Eroror:', error);
  }
};

removeLastContact();
