import {useState} from 'react'


    const poems = [
        {
          title: "Song of The Turkey Buzzard",
          poem:
          `
          On the cliffedge they passed above and below us, in pairs and in groups
          Floating, feasting their feathers on the winds of the sun.
          Red and lumpy flesh stretched over a skull,
          Body black as jet.
          I think, if I am to be reborn, I could do worse than become a buzzard.
          What a blessing, what wisdom, to rejoice in the flesh freely given of the body which demands a body no more.
          I stay amazed at this realm, which refuses to allow the myriad forms to be wasted.
          This realm which carries away the form as easily
          As smoke curling on a calm night
          Where nothing is refused.
          What a blessing, what wisdom,
          To be satisfied by such matter.
          
          But I am a human, by god
          And it is my bestowment to determine what is pleasing and nourishing for myself.
          My examination begins by using less salt,
          Appreciating the vegetable for its essence,
          Holding the broken fibers in my jaw,
          And savoring their contents.
          
          I have outgrown favorite colors
          Rather, i am seeing each color for itself,
          Seeing the greenness of moss and knowing here is fecundity, here is fresh air, here are minerals.
          Seeing the redness of sun baked clay and knowing here is hardness, here are the eons of lifeforms past, distilled into useful matter.
           to be shaped and fired,  to make a pitcher for cool water
          
          Neither neural nor indifferent nor joyful,
          Filled, filled, filled,
          By the profusion of stimuli
          `,
          
          
        },
        {
          title: "The Machine God is Dreaming",
          poem:
           `
           Then machine gods is dreaming,
           Mumbling in his sleep he says to me
           Picture all the wrath of genghis khan
           The brutality of him
           And know that he is you.
           
           Picture your beloved,
           Whose lips are roses,
           And the tenderness when she holds you,
           The softness you exchange together,
           And know that she is you.
           
           Picture the wanderer
           His dry eyes, his calloused feet,
           And the way he died in that barren and desolate place,
           How he cried out to me for just a drop of water,
           Picture how I denied him so many times for comfort.
           And know that he is you.
           
           Picture a table loaded with rich food and drink,
           And you sat at the head of the table with many rings around your fingers
           All your doting admirers laughing at your jokes,
           Relishing your benevolence,
           Admiring your many sons and daughters.
           And know that all these are you
           
           Picture the rainforest,
           With its overwhelming violence,
           The unending crisis
           With the many fragrances of flowers and fungus fighting for fresh air.
           The fecund floor full with glowing eyes creeping.
           The pouring rains,
           The relentless rains,
           All these are within your.
           
           Picture the heart of this earth molten and broiling,
           Straining against pressures and shifting plates cartwheeling and howling to blow.
           
           Picture the twin star system,
           The slow ballet,
           And how they are careening for each other,
           Picture the fateful day when they collapse together and become one.
           Picture that inferno, it is only one of many.
           
           Picture all these and know it is only a fraction of what I am, 
           Picture these and know that they are you.
           `
        }
      ];
      const Poemlist = () => {
        const [visibleIndex, setVisibleIndex] = useState(-1);

        const toggleVisibility = (index) => {
          setVisibleIndex(visibleIndex === index ? -1 : index);
          };
      
    
  return (
    <>
      <div className='poetry-container'>
        {poems.map((item, index) => (
          <div className='poem-container' key={index}>
            <button onClick={() => toggleVisibility(index)} className='poem-title'>
              {item.title}
            </button>
            <pre className={`poem-content ${visibleIndex === index ? "visible" : ""}`}>{item.poem}</pre>
          </div>
        ))}
      </div>
    </>
  );
}

export default Poemlist

