'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { LogOut, Sun, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AvatarCustom from '@/components/Avatar';

function HeaderItems() {
  return (
    <>
      <Input
        className="mr-2 w-fit"
        placeholder="Search..."
        type="search"
        aria-label="Search"
      />

      <AvatarCustom src="https://github.com/shadcn.png" username="sushant" />
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {}}
        aria-label="user account"
      >
        <User />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {}}
        aria-label="theme button"
      >
        <Sun />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {}}
        aria-label="logout button"
      >
        <LogOut />
      </Button>
    </>
  );
}
export default HeaderItems;
