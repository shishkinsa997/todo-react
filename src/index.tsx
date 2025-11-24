import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.scss";
import "./styles/style.scss";
import "./custom.d.ts";
import { TodoListPage } from "./pages/TodoListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header/Header";
import { Todo } from "./models/todo-item";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ItemDescription } from "./pages/ItemDescription";

const todos: Todo[] = [
  {
    id: 0,
    text: "Первая задача",
    isDone: false,
  },
  {
    id: 1,
    text: "Вторая задача",
    isDone: true,
  },
  {
    id: 2,
    text: "Третья задача",
    isDone: true,
  },
  {
    id: 3,
    text: "Четвертая задача",
    isDone: false,
  },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* basename={process.env.PUBLIC_URL} */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage todos={todos} />}></Route>
        <Route path="/list/:id" element={<ItemDescription todos={todos} />}></Route>
        <Route path="/todo" element={<TodoListPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
