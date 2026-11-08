import Banner from "@/components/homepage/Banner";
import Library from "@/components/homepage/Library";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<div>Loading exercises...</div>}>
        <Library />
      </Suspense>
    </div>
  );
}
