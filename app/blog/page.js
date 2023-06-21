"use client";
import { useCallback, useState } from "react";

import styles from "./page.module.css";

function Page() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const create = useCallback(async () => {
    console.log(
      JSON.stringify({
        author,
        title,
        content,
      })
    );
    const res = await fetch("http://localhost:3000/api/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        author,
        title,
        content,
      }),
    });
    const data = await res.json();
    console.log(data);
  }, [author, title, content]);
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
