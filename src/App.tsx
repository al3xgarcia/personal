import { useEffect } from "react";
import { introParagraph, onlineParagraph } from "./data/copy";
import { ProseParagraph } from "./components/ProseParagraph";
import { trackPageView } from "./lib/analytics/mixpanel";

function App() {
  useEffect(() => {
    trackPageView({ page: "home" });
  }, []);

  return (
    <main className="mx-auto min-h-svh max-w-prose px-6 py-16 sm:py-24">
      <h1 className="mb-8 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        Hello
      </h1>
      <div className="space-y-6">
        <ProseParagraph segments={introParagraph} />
        <ProseParagraph segments={onlineParagraph} />
      </div>
    </main>
  );
}

export default App;
