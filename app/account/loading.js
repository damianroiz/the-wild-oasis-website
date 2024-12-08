import Spinner from '@/app/_components/Spinner';
import { DivideIcon } from '@heroicons/react/24/solid';

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data...</p>
    </div>
  );
}
