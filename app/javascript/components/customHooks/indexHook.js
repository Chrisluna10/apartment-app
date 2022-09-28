import React, { useEffect, useState } from "react"
import { localhost, heroku } from "../../fetch-urls"

export default function indexHook() {
  const [items, setItems] = useState([])

  useEffect(() => {
    async function itemIndex() {
      const response = await fetch(`${heroku}/items`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      setItems(await response.json())
    }
    itemIndex()
  }, [])

  return [items, setItems]
}
