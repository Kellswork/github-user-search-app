import './index.scss';

interface UserStatsProp {
  label?: string;
  value?: number;
}
export default function UserStats({ label, value }: UserStatsProp) {
  return (
    <div className="user-stats-details">
      <h4>{label}</h4>
      <h2>{value}</h2>
    </div>
  );
}
