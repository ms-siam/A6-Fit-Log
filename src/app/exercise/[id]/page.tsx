import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExerciseCardType } from "@/types/exercise.type";
import ExerciseActions from "@/components/shared/ExerciseActions";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

const getExercises = async () => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog/", {
      cache: "force-cache"
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching exercise data:", error);
    return [];
  }
};

async function ExerciseDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exercises = await getExercises();
  const exercise = exercises.find((item: ExerciseCardType) => String(item.id) === id);

  if (!exercise) notFound();
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 lg:grid-cols-2">
      <div className="relative min-h-96 w-full overflow-hidden rounded-3xl border border-gray-800">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold uppercase text-white">
          {exercise.name}
        </h1>

        <p className="text-lg text-gray-400">{exercise.description}</p>

        <div className="flex flex-wrap gap-2">
          {exercise.muscleGroups.map((group: string) => (
            <span
              key={group}
              className="rounded-full bg-[#C4F000] px-3 py-1 text-sm font-medium text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#1a1a1c]">
          <div className="flex flex-col gap-1 border-b border-gray-800 px-5 py-4 md:flex-row md:gap-0">
            <span className="font-bold uppercase text-white md:w-1/2">Equipment</span>
            <span className="text-gray-300 md:w-1/2">{exercise.equipment}</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-gray-800 px-5 py-4 md:flex-row md:gap-0">
            <span className="font-bold uppercase text-white md:w-1/2">Difficulty</span>
            <span className="text-gray-300 md:w-1/2">{exercise.difficulty}</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-gray-800 px-5 py-4 md:flex-row md:gap-0">
            <span className="font-bold uppercase text-white md:w-1/2">Sets</span>
            <span className="text-gray-300 md:w-1/2">{exercise.sets}</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-gray-800 px-5 py-4 md:flex-row md:gap-0">
            <span className="font-bold uppercase text-white md:w-1/2">Reps</span>
            <span className="text-gray-300 md:w-1/2">{exercise.reps}</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-gray-800 px-5 py-4 md:flex-row md:gap-0">
            <span className="font-bold uppercase text-white md:w-1/2">Duration</span>
            <span className="text-gray-300 md:w-1/2">{exercise.duration} min</span>
          </div>
          <div className="flex flex-col gap-1 border-b border-gray-800 px-5 py-4 md:flex-row md:gap-0">
            <span className="font-bold uppercase text-white md:w-1/2">Calories</span>
            <span className="text-gray-300 md:w-1/2">{exercise.caloriesBurned} kcal</span>
          </div>
          <div className="flex flex-col gap-1 px-5 py-4 md:flex-row md:gap-0">
            <span className="font-bold uppercase text-white md:w-1/2">Rating</span>
            <span className="text-gray-300 md:w-1/2">{exercise.rating}</span>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-3xl font-bold uppercase text-white">
            Instructions
          </h2>
          <div className="flex flex-col gap-3 text-lg text-gray-300">
            {exercise.instructions.map((step: string, index: number) => (
              <p key={index}>
                {index + 1}. {step}
              </p>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <ExerciseActions id={exercise.id}></ExerciseActions>
        </div>
      </div>
    </div>
  );
};

export default function ExercisePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<LoadingSpinner label="Loading workouts…"></LoadingSpinner>}>
      <ExerciseDetails params={params} />
    </Suspense>
  );
}