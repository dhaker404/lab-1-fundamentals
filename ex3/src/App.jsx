import React from "react";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <div>

      <BlogPost
        title="Learning React"
        content="YOU WANT JOB ???? LEARN REACT NOW !!!! only for 1800$ a month 😎 "
        author={{
          name: "Alice",
          email: "alice@example.com",
          role: "Developer"
        }}
        date="Jan 15"
      />

      <BlogPost
        title="React Tips"
        content="YOU WANT BE GOOD AT REACT FOR JOB ????? LEARN TIPS !!!! only for 1700$ a month (⌐■_■)"
        author={{
          name: "Bob",
          email: "bob@example.com",
          role: "Designer"
        }}
        date="Jan 20"
      />

    </div>
  );
}

export default App;
