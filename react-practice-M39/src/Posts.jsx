import { use } from 'react';

export default function Posts({ postsPromise }) {

    const posts = use(postsPromise);
    console.log(posts);

    return (
        <div>
            <h1>Post</h1>
            {
              posts.map(post => <div><h2>title:{post.title}</h2>
              <p>body:{post.body}</p>
              </div>)

            }
        </div >
    )
}