import './App.css';
import React from 'react';

const TextExpander = ({title, subtitle, link}) => {
  const [isActive, setIsActive] = React.useState(false);
  console.log(title)
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
        {/* <span onClick={}>Two Pages Double Spaced</span><span></span> ·  */}
        {/* Love in the form of Taiwanese dinner · 
        Read Alibi · 
        Only Observations · 
        The Making of Nature · 
        Cacophany ·
        Go Figure ·  
        Lux et Veritas · 
        Dance Exercise · 
        The Yale Politic · 
        Alone in Beijing ·  */}
    </div>
  );
}

export default App;
