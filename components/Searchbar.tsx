import React from 'react';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from './ui/button';

function Searchbar() {
  return (
    <form className="flex items-center justify-center md:-my-8">
      <div className="flex flex-col gap-3 rounded bg-slate-200 p-1 shadow-lg md:flex-row">
        <Input placeholder="Kathmandu" />
        <Input type="date" placeholder="Booking Date" color="red" />

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Side" className="" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="five-a-side">5 a side</SelectItem>
            <SelectItem value="seven-a-side">7 a side</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" variant="default" className="rounded-md">
          Search
        </Button>
      </div>
    </form>
  );
}

export default Searchbar;
