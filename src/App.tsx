import { introParagraph, onlineParagraph } from "./data/copy";
import { ProseParagraph } from "./components/ProseParagraph";

function App() {
  return (
    <main className="mx-auto min-h-svh max-w-prose px-6 py-16 sm:py-24">
      <h1 className="mb-8 text-6xl font-medium tracking-tight text-foreground sm:text-7xl">
        Hi, my name is Alex Garcia
      </h1>
      <div className="space-y-6">
        <ProseParagraph segments={introParagraph} />
        <ProseParagraph segments={onlineParagraph} />
      </div>
    </main>
  );
}

export default App;
