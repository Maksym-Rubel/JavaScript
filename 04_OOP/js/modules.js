import { Post } from "./post.js";

let post = new Post("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, est, laborum libero animi sapiente fugit perspiciatis odio, molestias cupiditate quae quod deleniti architecto dolorum delectus veritatis quam repudiandae ex consequatur    ")
document.body.innerHTML = post.get();
