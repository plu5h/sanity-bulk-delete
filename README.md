## Sanity bulk delete

 A simple function to delete every entity of a single type off sanity.

 Since there is no native way in sanity to bulk delete all the elements of a type, here is a function I use t oachieve it.

> [!NOTE]
> The function delete by batches of 100 elements to avoid limit rate. You can modify the value of `batchSize` if you want
> 

## Prerequisites

You must have an API token from your sanity project with Read/Write access, and add it to env:


```js
//.env.local
SANITY_API_TOKEN="..."
   ```
Modify client with your sanity project ID and dataset name :

```js
export const client = createClient({
  projectId:"projectId",
  dataset:"production",
  apiVersion: "2026-02-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false, 
})
   ```
Install Sanity CLI if not already done :
```sh
npm install --global sanity@latest
```

## Usage

Run :
```sh
sanity exec bulk_delete_script.js --with-user-token
```

You can alternatively run the script with node but I sometimes had fails due to Insufficient permissions; permission "update" required.
Running the script through sanity CLI with `--with-user-token` as above fix this issue.

Anyway if you want you can still run it with:
```sh
node delete_script.js
```
Or
```sh
chmod u+x bulk_delete_script.js
```
```sh
./bulk_delete_script.js
```
Make sure you have the shebang line `#!/usr/bin/env node` at the top of your script


