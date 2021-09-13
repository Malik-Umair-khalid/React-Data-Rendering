const name = "Hello World";
const obj = { name: "Hello World Object" };
const data = ["We", "are", "United"];
//Show these in seperate tags
const list = [
  { name: "Hello World 1" },
  { name: "Hello World 2" },
  { name: "Hello World 3" },
]; //Show these in seperate tags
const complex = [
  { company: "XYZ", jobs: ["Javascript", "React"] },
  { company: "ABC", jobs: ["AngularJs", "Ionic"] },
];

function Question1() {
  return (
    <>
    <h1>Q1) Render these into component:</h1>
      <h1>My Name is <span className = "task">{name}</span></h1>
      <h1>My Object Name is <span className = "task">{obj.name}</span></h1>
      <h1>This Is Array <span className ="task"> {data.map((v) => v + " ")}</span></h1>
    {
      list.map((value) => 
        <h1>My Name is <span className = "task">{value.name}</span></h1>
      )
    }
    {
    complex.map((v) => 
    <>
     <h1>My Company is <span className = "task">{v.company}</span></h1>
     <h2><span className = "task">{v.company}</span> Has <span className = "task">{v.jobs}</span> Jobs</h2>
     </>
    )
    }
    </>
  );
} 

export default Question1;
