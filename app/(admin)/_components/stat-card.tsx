import { Card } from '@/components/ui/card';

function StatCard({
  label,
  data,
  icon,
  color,
}: {
  label: string;
  data: string | number;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <Card className="flex gap-3 px-4 py-6">
      <div
        className={`h-fit rounded-full p-3`}
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold">{label}</div>
        <span className="text-2xl font-bold">{data}</span>
      </div>
    </Card>
  );
}

export default StatCard;
