#!/usr/bin/env node

import { createClient } from "next-sanity"

export const client = createClient({
  projectId:"projectId",
  dataset:"production",
  apiVersion: "2026-02-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false, 
})


async function batchDelete() {
  
  const type = "desiredType";

  const ids = await client.fetch(`*[_type == "${type}"]._id`);
  
  
  const batchSize = 100
  for (let i = 0; i < ids.length; i += batchSize) {
    const batch = ids.slice(i, i + batchSize)
    const transaction = client.transaction()
    batch.forEach(id => transaction.delete(id))
    await transaction.commit()
    console.log(`Deleted ${Math.min(i + batchSize, ids.length)} of ${ids.length}`)
  }
}

batchDelete()
