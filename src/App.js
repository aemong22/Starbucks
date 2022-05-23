import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Banner from "./components/main/Banner";
function App() {
    return (
        <Router>
            <Header />
            <Banner />
        </Router>
    );
}

export default App;
