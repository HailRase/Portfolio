import React from 'react';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Pojects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div>
            <Header/>
            <Content/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
