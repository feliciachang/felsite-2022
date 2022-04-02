import "./App.css";
import React from "react";

const TextExpander = ({ title, subtitle, link }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <span>
      <span className="title" onClick={() => setIsActive(!isActive)}>
        {title} {isActive ? " : " : " · "}{" "}
      </span>
      {isActive && (
        <span onClick={() => window.open(link)}>
          <span className="subtitle">{`${subtitle} ${
            isActive ? "  " : " · "
          }`}</span>
          <span>{isActive ? " · " : "  "}</span>
        </span>
      )}
    </span>
  );
};

function App() {
  return (
    <div className="App">
      <div className="bio">
        writing words, while loops and wandering wectors...
      </div>
      <TextExpander
        title="Two Pages Double Spaced"
        subtitle="an experiment in feeling too much"
        link="https://twopagesdoublespaced.substack.com/"
      />
      <TextExpander
        title="Love in the form of Taiwanese dinner"
        subtitle="an essay on grief and family and the power of a good dinner"
        link="https://audacity.substack.com/p/love-in-the-form-of-taiwanese-dinner?s=r"
      />
      <TextExpander
        title="Neeva"
        subtitle="reimagining search with the product innovation group colloquially known as PIG"
        link="https://neeva.com/about"
      />
      <TextExpander
        title="Read Alibi"
        subtitle="a website made with interactive poetry and friends"
        link="https://readalibi.org/invitation"
      />
      <TextExpander
        title="Only Observations"
        subtitle="part one of my senior thesis in computing in the arts challenging the ethics and politics of making"
        link="https://docs.google.com/presentation/d/1udt4abrDLhs7Gn5PICJdox2cRSzfU4_5ClgvWRL238U/edit?usp=sharing"
      />
      <TextExpander
        title="In Graphical Translation"
        subtitle="part two of my senior thesis playing with image as type and type as image"
        link=""
      />
      <TextExpander
        title="Lux et Veritas"
        subtitle="a typographic installation at the becton cafe at yale"
        link="https://www.youtube.com/watch?v=C1u5e_T_vbo"
      />
      <TextExpander
        title="Dance Exercise"
        subtitle="a practice in responding to sound with shape and color"
        link="https://youtube.com/playlist?list=PLdso2CHmTwiyyGUasf1pLgsYokBWSkOkr"
      />
      <TextExpander
        title="The Yale Politic"
        subtitle="giving 75 years of stories a new outfit"
        link="https://thepolitic.org/"
      />
      <TextExpander
        title="Alone in Beijing"
        subtitle="a collision of one woman's poem and another woman's daily commute"
        link="https://www.youtube.com/watch?v=UFUqwYtCa44"
      />
      <div className="bio">
        <div className="socials">
          <a href="https://twitter.com/felchang">twitter</a>
          <a href="https://twopagesdoublespaced.substack.com/">substack</a>
          <a href="https://www.instagram.com/felsdelivery/">instagram</a>
        </div>
      </div>
    </div>
  );
}

export default App;
