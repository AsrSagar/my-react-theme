import React, { useEffect, useState } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${WP_DATA.apiUrl}wp/v2/posts`)
      .then(res => res.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      <h2>Latest Posts dfdsf edd fsdf</h2>
      {posts.map(post => (
        <article key={post.id}>
          <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </article>
      ))}
    </div>
  );
}
