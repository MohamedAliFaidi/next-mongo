"use client"
import { useCallback } from "react";
import styles from "./blog.module.css";
function Add() {
  const blog = [inputs, setInputs] = useState({
    author : "",
     title : "",
      content : ""
  }) 

  const create = useCallback(async () => {
    const res = await fetch("/api/blog/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
    const data = await res.json();
    console.log(data);
  },[])




  return (
    <div className={styles.div}>
      This is the blog page
      <input type="text" className={styles.input} placeholder="author"
       onChange={(e) => setInputs({...inputs, author: e.target.value})}
      />
      <input type="text" className={styles.input} placeholder="title" 
      onChange={(e) => setInputs({...inputs, title: e.target.value})}
      />
      <textarea type="text" className={styles.input} placeholder="content" 
      onChange={(e) => setInputs({...inputs, content: e.target.value})}
      />
      <button className={styles.button} onClick={create}>Create</button>
    </div>
  );
}

export default Add;
