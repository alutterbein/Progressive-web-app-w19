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

// logic added to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.log("update db")
const textDb = await openDB('jate', 1,) 

const tx = textDb.transaction('jate','readwrite');

const store = tx.objectStore('jate');

const request = store.put({ id: 1, value: content });

const result = await request;
console.log("saved!", result);

};



// Added logic for a method that gets all the content from the database
export const getDb = async () => {
console.log("Get from db");

const textDb = await openDB('jate', 1);

const tx = textDb.transaction('jate','readonly');

const store = tx.objectStore('jate');

const request = store.get(1);

const result = await request;
console.log("result.value", result);
return result?.value;

}
initdb();
