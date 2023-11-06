import Flights from "@features/flights";
import Layout from "@features/layout";
import Search from "@features/search";
import { StateProvider } from "./State";
import "./app.css";

function App() {
  return (
    <StateProvider>
      <Layout>
        <Search />
        <Flights />
      </Layout>
    </StateProvider>
  );
}

export default App;
