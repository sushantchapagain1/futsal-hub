'use client';

import { Avatar } from './ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Skeleton } from './ui/skeleton';

function AvatarCustom({ src, username }: { src: string; username: string }) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={`${username}'s profile page`} />
      <AvatarFallback>
        <Skeleton className="h-10 w-10 rounded-full" />
      </AvatarFallback>
    </Avatar>
  );
}

export default AvatarCustom;
