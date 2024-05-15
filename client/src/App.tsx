
import AuthProvider from "./providers/auth.provider";
import { ListProvider } from "./providers/list.provider";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <ListProvider>
        <Routes />
      </ListProvider>
    </AuthProvider>
  );
}

export default App;
