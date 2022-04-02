import './App.css';
import React from 'react';

const TextExpander = ({title, subtitle, link}) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <span>
      <span className="title" onClick={() => setIsActive(!isActive)}>{title} · </span>
      {isActive && (<span className="subtitle">{`${subtitle} ${link}  · `}</span>)}
    </span>
  )
}

function App() {
  return (
    <div className="App">
      <div className="bio">
          writing words, while loops and wandering wectors...
        </div>
        <TextExpander 
          title="Two Pages Double Spaced" 
          subtitle="an experiment in feeling too much"
          link=""
        />
        <TextExpander 
          title="Love in the form of Taiwanese dinner" 
          subtitle="an essay on grief and family and the power of a good dinner"
          link=""
        />
        <TextExpander 
          title="Read Alibi" 
          subtitle="a website celebrati interactive poetry"
          link=""
        />
        <TextExpander 
          title="Only Observations" 
          subtitle="senior thesis in computing in the arts challenging the ethics and politics of making"
          link=""
        />
        <TextExpander 
          title="In Graphical Translation" 
          subtitle="senior thesis in computing in the arts playing with image as text"
          link=""
        />
        <TextExpander 
          title="Lux et Veritas" 
          subtitle="a typographic installation at the becton cafe at yale"
          link=""
        />
        <TextExpander 
          title="Dance Exercises" 
          subtitle="a practice in responding to sound with shape and color"
          link=""
        />
        <TextExpander 
          title="The Yale Politic" 
          subtitle="giving 75 years of stories a new outfit"
          link=""
        />
        <TextExpander 
          title="Alone in Beijing" 
          subtitle="a collision of one woman's poem and another woman's daily commute"
          link=""
        />
        <div className="bio">
          <div className="socials">
            <div>twitter</div>
            <div>email</div>
            <div>instagram</div>
            </div>
        </div>
    </div>
  );
}

export default App;
