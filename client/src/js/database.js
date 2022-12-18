import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  console.log('PUT to the database');
  const progressiveDB = await openDB('jate', 1);
  const text = progressiveDB.transaction('jate', 'readwrite');
  const storeObject = text.objectStore('jate');
  const request = storeObject.put({ id: 1, value: content });
  const result = await request;
  console.log('Data saved to the database', result);
};

export const getDb = async () => {
  const progerssiveDB = await openDB('jate', 1);
  const text = progerssiveDB.transaction('jate', 'readonly');
  const getObject = text.objectStore('jate');
  const request = getObject.get(1);
  const result = await request;
  return result?.value;
};

initdb();
