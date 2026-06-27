# Strictly-typed Storage Adapter (stsa).

Strictly-typed Storage Adapter (STSA) - Strictly-typed [Local](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and [Session](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) Storage Adapter for Typescript

[![Current Release](https://img.shields.io/npm/v/stsa.svg)](https://www.npmjs.com/package/stsa)
[![Licence](https://img.shields.io/github/license/takawitter/stsa)](https://github.com/takawitter/stsa/blob/master/LICENSE)

## Quick start

```bash
npm i stsa
```

Define the schema of entities you want to store to local or session storage.
Create an instance of `TypedStorageAdapter` with the schema as type parameter, and storage instance (`localStorage` or `sessionStorage`) and prefix of key name as constructor parameters.
Then, you can load and store entities using typed `getItem`, `getOrCreateItem` and `setItem` methods. `removeItem`, `keys`, `length`, `clear` methods are also available.

```ts
// TypedStorageAdapter needs a type parameter as the schmema of the stored items, and storage instance and key prefix as constructor parameters.
// Actual key to access the storage is "myapp.key". If key prefix is not provided, the actual key is just "key".
const storage = new TypedStorageAdapter<{id: string; name: string}>(localStorage, "myapp");

// getOrCreateItem() returns the stored value if it exists, otherwise it creates a new item with the default value and returns that.
// 1st parameter is "id" or "name".
// 2nd parameter is the default value or a function that returns the default value.
storage.getOrCreateItem("id", "000");  // returns the stored value or "000" with storing if "id" is not stored
storage.getOrCreateItem("id", (_key)=>"000");

// getItem() returns the stored value if it exists, otherwise it returns the default value or null if no default value is provided.
storage.getItem("id", "000");  // returns the stored value or "000" if "id" is not stored
storage.getItem("id");  // returns the stored value or null if "id" is not stored
```
