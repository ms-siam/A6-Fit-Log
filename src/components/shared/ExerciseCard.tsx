import Image from "next/image";
import { RxTimer } from "react-icons/rx";
import { AiOutlineFire } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { ExerciseCardType } from "@/types/exercise.type";
import Link from "next/link";

interface ExerciseCardProps {
  exerciseCard: ExerciseCardType;
}

export default function ExerciseCard({ exerciseCard }: ExerciseCardProps) {
  return (
    <Link href={`exercise/${exerciseCard.id}`} className="block">
      <div className="overflow-hidden rounded-3xl border border-gray-800 bg-[#1a1a1c] transition-colors duration-100 hover:border-[#C4F000]">
        <div className="relative aspect-video w-full">
          <Image
            src={exerciseCard.image}
            alt={exerciseCard.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            {exerciseCard.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[#C4F000] px-3 py-1 text-sm font-medium text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold uppercase text-white">
            {exerciseCard.name}
          </h3>
          <p className="mt-3 text-gray-400">{exerciseCard.equipment}</p>

          <div className="mt-5 flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-1.5">
              <RxTimer className="text-[#C4F000]" />
              <span>{exerciseCard.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <AiOutlineFire className="text-[#C4F000]" />
              <span>{exerciseCard.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <CiStar className="text-[#C4F000]" />
              <span>{exerciseCard.rating}</span>
            </div>
          </div>
        </div>
      </div>

    </Link>

  );
}