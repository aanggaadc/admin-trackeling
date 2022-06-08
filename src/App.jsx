import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CreateTrip from "./pages/create-trip/CreateTrip";
import UserList from "./pages/user-list/UserList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="create-trip" element={<CreateTrip />} />
          <Route path="user-list" element={<UserList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
