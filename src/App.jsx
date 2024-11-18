import DataProvider from "./contexts/DataContext";
import LanguageProvider from "./contexts/languageContext";
import AppRoutes from "./routes/AppRoutes";
import "./App.css"


function App() {
  return (
    <LanguageProvider>
      <DataProvider>
        <AppRoutes />
      </DataProvider>
    </LanguageProvider>
  );
}

export default App;
