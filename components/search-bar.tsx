import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from './ui/button';
import BookingDatePicker from './booking-date-picker';

function Searchbar() {
  return (
    <form className="mt-3 flex items-center justify-center md:-my-6">
      <div className="flex w-full flex-col gap-3 rounded p-1 shadow-lg md:flex-row md:bg-[#b3c4df]">
        <Input placeholder="Kathmandu" />
        <BookingDatePicker />

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
