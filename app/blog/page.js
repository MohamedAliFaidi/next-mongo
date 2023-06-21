"use client";
import { useCallback, useState } from "react";

import styles from "./page.module.css";

function Page() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //TOOD: create a function to create a blog with a http post request to api route that we already created
  // use absolute path for the api route (hint: http://localhost:3000/api/blog) 
  // handle the ui depending on the response


  return (
    <div className={styles.div}>
      This is the blog page
      <input
        value={author}
        type="text"
        className={styles.input}
        placeholder="author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        value={title}
        type="text"
        className={styles.input}
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        type="text"
        className={styles.input}
        placeholder="content"
        onChange={(e) => setContent(e.target.value)}
      />
      <button className={styles.button} onClick={create}>
        Create
      </button>
    </div>
  );
}

export default Page;
