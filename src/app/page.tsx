export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-4xl font-bold">Hi, I'm Azure 👋</h1>
      <p className="mt-4 text-lg">Front-End Developer · React/Next.js · TypeScript</p>
      <div className="mt-6 flex gap-4">
        <a className="underline" href="/projects">Projects</a>
        <a className="underline" href="mailto:gaosy8@gmail.com">Contact</a>
      </div>
    </main>
  );
}
