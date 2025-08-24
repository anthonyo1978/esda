"use client";
import { useEffect, useState } from "react";

type Item = { id: string; title: string; createdAt: string };

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, { cache: "no-store" });
      if (res.ok) {
        setItems(await res.json());
      }
    } catch (error) {
      console.error("Failed to load items:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { 
    load(); 
  }, []);

  async function create() {
    if (!title.trim()) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });
      if (res.ok) { 
        setTitle(""); 
        load(); 
      } else { 
        alert("Validation failed"); 
      }
    } catch (error) {
      console.error("Failed to create item:", error);
      alert("Failed to create item");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <div className="text-lg text-gray-600">Loading...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">ESDA Items</h1>
          <p className="text-gray-600">Manage your items with our beautiful interface</p>
          <a href="/" className="inline-block mt-4 text-blue-600 hover:text-blue-800">← Back to Home</a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter item title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && create()}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            <button 
              onClick={create} 
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-colors"
            >
              Add Item
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {items.length === 0 ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <p className="text-gray-500">No items yet. Create your first item above!</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Created: {new Date(item.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    ID: {item.id}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Built with Next.js, TailwindCSS, and Express.js
          </p>
        </div>
      </div>
    </div>
  );
}