# FitLog - Workout Library
 
FitLog is a workout library website built with Next.js. You can browse a list of exercises, open any exercise to see its details and instructions, and add it to today's plan or save it for later. The My Plan page shows the total minutes and calories of your lifts and lets you sort them, finish them, or remove them.
 
## Technologies Used
 
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- daisyUI
- React Context API
- React Toastify
- React Icons
- Vercel for deployment
The exercise data comes from a REST API hosted on Cloudflare Workers.
 
## Key Features
 
1. **Workout library:** all exercises are shown as cards with muscle groups, equipment, duration, calories and rating. The "Browse Workouts" button in the banner scrolls down to the library.
2. **Exercise details page:** each exercise has its own page with a specs table and step by step instructions. If the id does not exist, a custom 404 page is shown.
3. **Today's plan:** you can add up to five lifts to today's plan. A toast message tells you when a lift is added, already in the plan, or when the plan is full.
4. **Save for later:** you can save any exercise and remove it again from the details page. The Plan and Saved counters in the navbar update right away and link to the My Plan page.
5. **My Plan page:** switch between Today's Plan and Saved, see the totals for exercises, minutes and calories, sort the list by duration, calories or rating, and mark lifts as done or remove them.
## Getting Started
 
You need Node.js 20.9 or newer.
 
```bash
git clone https://github.com/your-username/a6-fit-log.git
cd a6-fit-log
npm install
npm run dev
```
 
Then open http://localhost:3000 in your browser.
 
Other commands:
 
- `npm run build` creates a production build
- `npm run start` runs the production build
- `npm run lint` checks the code with ESLint
## Project Structure
 
```
src/
  app/
    exercise/[id]/page.tsx    exercise details page
    my-plan/page.tsx          plan and saved lifts
    layout.tsx                navbar, footer and providers
    not-found.tsx             404 page
    page.tsx                  home page
  components/
    homepage/                 Banner, Library
    shared/                   Navbar, Footer, ExerciseCard, ExerciseActions
    PlanView.tsx              My Plan tabs, totals and list
    SortDropdown.tsx          sort dropdown
  context/
    PlanContext.tsx           plan and saved state
  types/
    exercise.type.ts          TypeScript types
```