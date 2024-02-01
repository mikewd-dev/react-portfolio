// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import projectsData from "./components/projects.json";
import skillsData from "./components/skills.json";
import Layout from "./components/Background/Layout";
import Skills from "./components/Skills/Skills";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <Router>
      <Layout>
        <div className="container-for-cards">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <h1 className="WrapperTitle">My Projects</h1>
                  <Wrapper>
                    {projectsData.map((project) => (
                      <Projects
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        url={project.url}
                      />
                    ))}
                  </Wrapper>

                  <Wrapper>
                    <h1 className="WrapperSkills">Skills</h1>
                    {skillsData.map((skill) => (
                      <Skills
                        key={skill.id}
                        skill={skill.name}
                        image={skill.image}
                      />
                    ))}
                  </Wrapper>
                </>
              }
            />
          </Routes>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
