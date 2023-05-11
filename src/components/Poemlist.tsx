
const Poemlist = () => {
    const poems = [
        {
          title: "Tim",
          age: 27
        },
        {
          title: "Bob",
          age: 32
        }
      ];

    
  return (
    <>
    {poems.map((item, index) => (
      <div key={index}>
        <div>Name: {item.title}</div>
        <div>Age: {item.age}</div>
      </div>
    ))}
  </>
  )
}

export default Poemlist

