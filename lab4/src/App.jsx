import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Calculator from "./labs/lab5/calculator";
import Hello from "./labs/lab4/Hello";
import Counter from "./labs/lab6/Counter";
import Products from "./labs/lab7/Products";
import CardProducts from "./labs/lab8/Products";
import Website from "./labs/lab15/App";
import App16 from "./labs/lab16/App";
import App17 from "./labs/lab17/App";
import App18 from "./labs/lab18/App";
import App19 from "./labs/lab19/App";
import App20 from "./labs/lab20/App";
import App21 from "./labs/lab21/App";

// import more labs...

const labs = [
  { path: "/lab5", name: "Lab 5 - Calculator", component: <Calculator /> },
  { path: "/lab4", name: "Lab 4 - Simple React App", component: <Hello /> },
  { path: "/lab6", name: "Lab 6 - Simple Counter", component: <Counter /> },
  { path: "/lab7", name: "Lab 7 - Product List", component: <Products /> },
  {
    path: "/lab8",
    name: "Lab 8 - Product List (Card View)",
    component: <CardProducts />,
  },
  {
    path: "/lab15",
    name: "Lab 15 - React Components",
    component: <Website />,
  },
  {
    path: "/lab16",
    name: "Lab 16 - Props Drilling",
    component: <App16 />,
  },
  {
    path: "/lab17",
    name: "Lab 17 - Fetch API Data with useEffect",
    component: <App17 />,
  },
  {
    path: "/lab18",
    name: "Lab 18 - React Form Validation",
    component: <App18 />,
  },
  {
    path: "/lab19/*",
    name: "Lab 19 - React Router Basics",
    component: <App19 />,
  },
  {
    path: "/lab20",
    name: "Lab 20 - Fetch API Data with Axios",
    component: <App20 />,
  },
  {
    path: "/lab21",
    name: "Lab 21 - Fetch API Data with Axios (Improved)",
    component: <App21 />,
  },
];

function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Internet and Web Programming Labs</h1>
      <ul className="labs">
        {labs.map((lab) => (
          <li key={lab.path}>
            <Link to={lab.path}>{lab.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {labs.map((lab) => (
          <Route key={lab.path} path={lab.path} element={lab.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
