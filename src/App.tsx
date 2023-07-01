import CardContent from "./assets/components/Card/CardContent";
import UserContent from "./assets/components/UserList/UserContent";
import EventsExample from "./assets/components/EventsExample/EventsExample";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import MyNavLink from "./assets/components/MyNavLink/NavLink";
import UserItemPage from "./assets/components/UserItemPage/UserItemPage";
import TodoItemPage from "./assets/components/TodoItemPage/TodoItemPage";


function App() {
    return (
        <BrowserRouter>
            <MyNavLink/>
            <Routes>
                <Route path="/events" element={<EventsExample />} />
                <Route path="/card" element={<CardContent />} />
                <Route path="/users" element={<UserContent />} />
                <Route path="/users/:id" element={<UserItemPage />} />
                <Route path="/todos/:id" element={<TodoItemPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
