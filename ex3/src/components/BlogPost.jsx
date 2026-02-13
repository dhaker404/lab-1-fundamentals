import UserCard from "./UserCard";
import "./BlogPost.css";

function BlogPost(props) {
  return (
    <div className="blog-post">

      <h1>{props.title}</h1>

      <UserCard 
        name={props.author.name}
        email={props.author.email}
        role={props.author.role}
      />

      <p className="content">
        {props.content}
      </p>

      <footer className="d  ate">
        Published on: {props.date}
      </footer>

    </div>
  );
}

export default BlogPost;
