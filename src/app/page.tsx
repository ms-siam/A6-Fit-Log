import Banner from "@/components/homepage/Banner";
import Library from "@/components/homepage/Library";
import LoadingSpinner from '@/components/shared/LoadingSpinner';
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<LoadingSpinner label="Loading workouts…" />}>
        <Library />
      </Suspense>
    </div>
  );
}
