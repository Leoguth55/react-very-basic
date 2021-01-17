import React, { useState, useEffect } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import api from '../../services/api';

function Home() {
  const [projects, setProjects] = useState([]);

  async function handleAddProject() {
    const response = await api.post('/', {
      title: `${Date.now()}`,
      owner: 'Leo',
    });

    const project = response.data;
    setProjects([...projects, project]);
  }

  async function handleRemoveProject(id) {
    await api.delete(`/${id}`);
    setProjects(projects.filter((project) => project.id !== id));
    // console.log(projects.filter((project) => project.id !== id))
  }



  useEffect(() => {
    api.get('/').then((response) => {
      setProjects(response.data);
      // console.log(response);
    });
  }, []);

  return (
    <>
      <ul>
        {projects.map((project) => (
          <li class='itens' key={project.id}>{project.title}
            <button class='button' onClick={() => handleRemoveProject(project.id)}><BsFillTrashFill /></button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProject}>clique para adivionar</button>
    </>
  );
}

export default Home;
