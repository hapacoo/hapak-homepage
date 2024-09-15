import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './InstagramFeedStyle';
import { InstagramPost } from '../../../commons/types';

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
                'id,media_type,media_url,permalink,thumbnail_url,username,caption,children{media_type,media_url}',
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
    <S.Grid>
      {posts.map((post) => (
        <S.PostWrapper key={post.id}>
          <S.PostContent>
            {post.media_type === 'IMAGE' && (
              <S.PostImage
                src={post.media_url}
                alt={post.caption || 'Instagram post'}
              />
            )}
            {post.media_type === 'VIDEO' && (
              <S.PostVideo src={post.media_url} controls />
            )}
            {post.media_type === 'CAROUSEL_ALBUM' && post.children && (
              <S.CarouselWrapper>
                <S.PostImage
                  src={post.children.data[0].media_url}
                  alt={post.caption || 'Instagram post'}
                />
                <S.CarouselIndicator>
                  {post.children.data.length} items
                </S.CarouselIndicator>
              </S.CarouselWrapper>
            )}
          </S.PostContent>
          <S.PostOverlay>
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              {post.caption
                ? post.caption.slice(0, 50) + '...'
                : 'View on Instagram'}
            </a>
          </S.PostOverlay>
        </S.PostWrapper>
      ))}
    </S.Grid>
  );
};
