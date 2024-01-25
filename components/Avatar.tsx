'use client';
import React, { useEffect } from 'react';
import { Avatar } from './ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Skeleton } from './ui/skeleton';

function AvatarCustom({ src, username }: { src: string; username: string }) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={`${username}'s profile page`} />
      <AvatarFallback>
        <Skeleton className="h-16 w-16 rounded-full" />
      </AvatarFallback>
    </Avatar>
  );
}

export default AvatarCustom;
