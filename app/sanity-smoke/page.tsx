import { client } from "../../lib/sanity/client";
import { COURSES_QUERY } from "../../lib/sanity/queries";
import type { COURSES_QUERY_RESULT } from "../../sanity.types";

export default async function SanitySmokePage() {
  let courses: COURSES_QUERY_RESULT = [];
  let error: string | null = null;

  try {
    courses = await client.fetch(COURSES_QUERY);
  } catch (err) {
    error = err instanceof Error ? err.message : String(err);
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-14">
      <h1 className="text-2xl font-bold text-zinc-900">Sanity smoke test</h1>
      <p className="mt-2 text-sm text-zinc-500">
        Reading courses from Sanity dataset <code>{process.env.NEXT_PUBLIC_SANITY_DATASET}</code> on{" "}
        <code>{process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}</code>.
      </p>

      {error ? (
        <pre className="mt-8 overflow-auto rounded-lg border border-red-200 bg-red-50 p-4 text-xs text-red-700">
          {error}
        </pre>
      ) : (
        <ul className="mt-8 divide-y divide-zinc-200 rounded-lg border border-zinc-200">
          {courses.length === 0 && (
            <li className="p-4 text-sm text-zinc-500">No courses found. Add one in the Studio.</li>
          )}
          {courses.map((course) => (
            <li key={course._id} className="flex items-center justify-between gap-4 p-4">
              <div>
                <p className="font-medium text-zinc-900">{course.title}</p>
                <p className="text-sm text-zinc-500">{course.summary}</p>
              </div>
              <div className="shrink-0 text-right text-sm text-zinc-500">
                <p>{course.level ?? "No level"}</p>
                <p>{course.studentCount ? `${course.studentCount} students` : "No students"}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}