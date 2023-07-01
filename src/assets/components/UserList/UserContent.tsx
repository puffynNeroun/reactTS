import { useEffect, useState } from "react";
import { IUser, ITodo } from "../../types/types";
import axios from "axios";
import List from "./List/List";
import UserItem from "./UserItem";
import TodoItem from "./Todo/TodoItem";
import { useNavigate } from 'react-router';

const UserContent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
        fetchTodos();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e) {
            alert(e);
        }
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <List
                items={users}
                renderItem={(user: IUser) =>
                    <UserItem
                        onClick={() => navigate('/users/' + user.id)}
                        user={user}
                        key={user.id}
                    />
                }
            />
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
            />
        </div>
    );
};

export default UserContent;
