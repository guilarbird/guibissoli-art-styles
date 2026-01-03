import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Writings from "./pages/Writings";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleTickSize from "./pages/ArticleTickSize";
import Collections from "./pages/Collections";
import Chapter from "./pages/Chapter";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/writings"} component={Writings} />
      <Route path={"/writings/tick-size-microestrutura"} component={ArticleTickSize} />
      <Route path={"/writings/:slug"} component={Article} />
      <Route path={"/about"} component={About} />
      <Route path={"/collections"} component={Collections} />
      <Route path={"/chapter/:slug"} component={Chapter} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
