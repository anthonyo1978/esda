"use client";
import { useEffect, useState } from "react";
type Item = { id: string; title: string; createdAt: string };

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState("");

  async function load() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, { cache: "no-store" });
    setItems(await res.json());
  }
  useEffect(() => { load(); }, []);

  async function create() {
    if (!title.trim()) return;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (res.ok) { setTitle(""); load(); } else { alert("Validation failed"); }
  }

  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: 16 }}>
      <h1>Items</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          placeholder="New item title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1, padding: 8, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <button onClick={create} style={{ padding: "8px 12px" }}>Add</button>
      </div>
      <ul style={{ display: "grid", gap: 8 }}>
        {items.map(i => (
          <li key={i.id} style={{ border: "1px solid #eee", borderRadius: 8, padding: 12 }}>
            <div style={{ fontSize: 12, color: "#666" }}>{new Date(i.createdAt).toLocaleString()}</div>
            <div style={{ fontWeight: 600 }}>{i.title}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
