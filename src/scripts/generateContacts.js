import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Помилка додавання данних до файлу:', error);
  }
};

generateContacts(5);
