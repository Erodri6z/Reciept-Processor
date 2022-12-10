// Base URl for the api should go here for this to work
// const baseUrl = "api base url here"

import './api.yml'

export async function getItem() {
  const res = await fetch(`${baseUrl}/item`)
  return res.json()
}