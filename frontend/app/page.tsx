export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">ESDA</h1>
        <p className="text-xl text-gray-600 mb-8">Enterprise Software Development Application</p>
        <div className="space-y-4">
          <a 
            href="/items" 
            className="block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            View Items
          </a>
          <a 
            href="/admin" 
            className="block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Admin Panel
          </a>
        </div>
      </div>
    </main>
  );
}