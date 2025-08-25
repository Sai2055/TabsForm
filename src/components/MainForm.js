import { useState } from "react";
import Home from "./Home";
import Interests from "./Interests";
import Settings from "./Settings";
export default function MainForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "sai sajja",
    age: 26,
    email: "saisajja7740@gmail.com",
    interests: ["reading", "playing"],
    theme: "Dark",
  });
  const [error, setError] = useState({});
  //   console.log(data);
  const tabs = [
    {
      name: "Home",
      component: Home,
      validate: () => {
        let err = {};
        if (!data.name) {
          err.name = "Name should not be empty";
        }
        if (!data.age) {
          err.age = "age should not be empty";
        }
        if (!data.email) {
          err.email = "email should not be empty";
        }
        setError(err);
        console.log(error);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        let err = {};
        if (data.interests.length < 1) {
          err.interests = "please select atleast one interest";
        }
        setError(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;

  function handlePrevTab() {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  }
  function handleNextTab() {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  }

  return (
    <div className="main-container">
      <div>TabsForm</div>
      <div className="head-container">
        {tabs.map((item, index) => (
          <div
            className="heading"
            key={index}
            onClick={() => {
              if (tabs[activeTab].validate()) {
                setActiveTab(index);
              }
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="body-container">
        <ActiveTabComponent data={data} setData={setData} error={error} />
      </div>

      <div className="buttons">
        {activeTab > 0 && <button onClick={handlePrevTab}>prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextTab}>next</button>
        )}
        {activeTab === tabs.length - 1 && <button>Submit</button>}
      </div>
    </div>
  );
}
