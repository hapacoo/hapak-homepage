import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface InstagramPost {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  username: string;
  caption?: string;
}

export const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get<{ data: InstagramPost[] }>(
          `https://graph.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_HAPACOO_USER_ID}/media`,
          {
            params: {
              fields:
                'id,media_type,media_url,permalink,thumbnail_url,username,caption',
              access_token:
                process.env.NEXT_PUBLIC_INSTAGRAM_HAPACOO_ACCESS_TOKEN,
            },
          },
        );
        setPosts(response.data.data);
      } catch (err) {
        setError('Failed to fetch Instagram posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>HAPACOO Instagram Feed</h1>
      {posts.map((post) => (
        <div key={post.id}>
          {post.media_type === 'IMAGE' && (
            <img src={post.media_url} alt={post.caption || 'Instagram post'} />
          )}
          {post.media_type === 'VIDEO' && (
            <video src={post.media_url} controls />
          )}
          <p>{post.caption}</p>
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">
            View on Instagram
          </a>
        </div>
      ))}
    </div>
  );
};
