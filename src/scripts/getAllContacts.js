import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contacts = await readContacts();
  console.log('Усі контакти:', contacts);
};

console.log(await getAllContacts());
