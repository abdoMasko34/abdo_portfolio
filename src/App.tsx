import HomePage from "./features/home/index";
import AboutPage from "./features/about/index";
import SkillPage from "./features/skills/index";
import ContactPage from "./features/contact/index";

const pages = [
  {
    name: "home",
    content: <HomePage />,
  },
  {
    name: "about",
    content: <AboutPage />,
  },
  {
    name: "skill",
    content: <SkillPage />,
  },
  {
    name: "contact",
    content: <ContactPage />,
  },
];

function App() {
  return (
    <>
      {pages.map(({ name, content }) => {
        return <div key={name}>{content}</div>;
      })}
    </>
  );
}

export default App;
