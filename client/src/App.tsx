/* FarmQuiz clone: faithfully preserves the reference's single-screen quiz flow and blue/coral/olive visual language. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import Quiz from "./pages/Home";

export default function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        <Quiz />
      </TooltipProvider>
    </ErrorBoundary>
  );
}
