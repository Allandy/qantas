import qantasLogo from "./assets/qantas-logo.png";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <img src={qantasLogo} alt="Qantas Logo" className="h-8" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8"></main>
    </div>
  );
}

export default App;
