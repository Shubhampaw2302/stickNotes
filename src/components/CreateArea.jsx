import React from "react";
//import Note from "./Note";

function CreateArea(props) {
  const [change, setChange] = React.useState({
    title: "",
    content: ""
  });


  function handleChange(event) {
    const { name, value } = event.target;
    setChange(prevVal => {
      if (name === "title") {
        return {
          title: value,
          content: prevVal.content }
        
      } else if (name === "content") {
        return {
          title: prevVal.title,
          content: value
        }
      }
    })
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={change.title} autoComplete="off" />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={change.content} />
        <button onClick={(event) => {
          event.preventDefault();
          props.add(change);
          setChange({title: "", content: ""});
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;










// import React from "react";
// //import Note from "./Note";

// function CreateArea() {
//   const [change, setChange] = React.useState({
//     title: "",
//     content: ""
//   });

//   const [note, setNote] = React.useState([])

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setChange(prevVal => {
//       if (name === "title") {
//         return {
//           title: value,
//           content: prevVal.content }
        
//       } else if (name === "content") {
//         return {
//           title: prevVal.title,
//           content: value
//         }
//       }
//     })
//   }

//   function handleClick(event) {
//     event.preventDefault();
//     setNote(prevVal => {
//       return [...prevVal, {title: change.title, content: change.content}]
//     })
//     console.log(note)
//     setChange({title: "", content: ""})
//   }

//   return (
//     <div>
//       <form>
//         <input onChange={handleChange} name="title" placeholder="Title" value={change.title} autoComplete="off" />
//         <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={change.content} />
//         <button onClick={handleClick}>Add</button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;
