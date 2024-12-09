import React from "react"

interface todoProps {
    todo: string,
    setTodo : React.Dispatch<React.SetStateAction<string>>,
    addItem : (e: React.FormEvent) => void
}
const InputField : React.FC<todoProps> = ({ todo, setTodo, addItem }) => {
  return (
    <form onSubmit={addItem}>
        <input type='input' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit'>Go</button>
    </form>
  ) 
}

export default InputField