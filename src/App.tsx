import {
  contactParagraph,
  introParagraph,
  onlineParagraph,
} from "./data/copy";
import { ProseParagraph } from "./components/ProseParagraph";

function App() {
  return (
    <main className="mx-auto min-h-svh w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
      <h1 className="mb-8 text-6xl font-medium leading-snug tracking-tight text-foreground sm:text-7xl">
        Hi, my name is Alex Garcia{" "}
        <img
          src="/alex_garcia.png"
          alt=""
          decoding="async"
          className="-mt-0.5 ml-1 inline-block h-[0.92em] w-[0.92em] rounded-[var(--radius-icon-tile)] object-cover align-middle"
        />
      </h1>
      <div className="flex flex-col gap-8">
        <ProseParagraph segments={introParagraph} />
        <ProseParagraph segments={onlineParagraph} />
        <ProseParagraph segments={contactParagraph} />
      </div>
    </main>
  );
}

export default App;
