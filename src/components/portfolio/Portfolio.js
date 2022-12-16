import { useEffect, useMemo, useState } from 'react';
import Project from './Projects';

const Portfolio = () => {
  const Projects = [
    {
      id: 1,
      image: '/mreeport.png',
      name: 'Portfolio',
      category: 'react',
      link: '',
    },
    {
      id: 2,
      image: '/clothing.png',
      category: 'figma',
      name: 'Clothing',
      link: 'https://www.figma.com/file/nfcLaQaa25NMAr2CSlvFRy/Untitled?node-id=0%3A1&t=zyd7YOWPdLbGnnsj-1',
    },
    {
      id: 3,
      image: '/metaverse.png',
      name: 'metaverse',
      category: 'nextjs',
      link: 'https://metaverse-website-b1ed8psso-mridulgelal.vercel.app/',
    },
    {
      id: 4,
      image: '/expense.png',
      category: 'react',
      name: 'expense',
      link: 'https://mree-expense-tracker.netlify.app',
    },
    {
      id: 5,
      image: '/todo.png',
      category: 'react',
      name: 'todo',
      link: 'https://mree-todo-app.netlify.app',
    },
    {
      id: 6,
      image: '/blendo.png',
      category: 'figma',
      name: 'blendo',
      link: 'https://www.figma.com/file/GXotOID8HY8rTfaOU2i5Cc/Untitled?node-id=0%3A1&t=f7yY4ac9bq1Ol00G-1',
    },
    {
      id: 7,
      image: '/weather.png',
      category: 'react',
      name: 'weatherapp',
      link: 'https://github.com/mridulgelal/weather-app/tree/main/react-weather-app',
    },
  ];

  const [projectList, setProjectList] = useState([]);
  const [selectedCategory, SetSelectedCategory] = useState('');

  useEffect(() => {
    setProjectList(Projects);
  }, []);

  function getFilteredList() {
    if (!selectedCategory || selectedCategory === 'all') {
      return projectList;
    }
    return projectList.filter((item) => item.category === selectedCategory);
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, projectList]);

  function handleCategoryChange(event) {
    SetSelectedCategory(event.target.value);
  }
  console.log(selectedCategory);
  console.log(filteredList);
  return (
    <div id="portfolio">
      <div className="  w-full right-0  p-10 rounded-xl min-h-[90vh] text-center shadow-2xl pt-32">
        <h2 className="text-2xl mb-10 uppercase underline underline-offset-8  ">
          Projects
        </h2>
        <div className=" flex gap-10 justify-center text-s">
          <button onClick={handleCategoryChange} value="all">
            All
          </button>
          <button onClick={handleCategoryChange} value="react">
            ReactJs
          </button>
          <button onClick={handleCategoryChange} value="nextjs">
            NextJs
          </button>
          <button onClick={handleCategoryChange} value="figma">
            Figma
          </button>
        </div>
        <div className="flex justify-around items-center  flex-wrap">
          {filteredList.map((element, index) => (
            <Project {...element} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
