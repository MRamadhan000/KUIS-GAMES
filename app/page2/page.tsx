
"use client";

import Link from "next/link";
import { useState } from "react";

const initialTasks = [
  { id: 1, title: "Redesign landing page", category: "Design", done: true },
  { id: 2, title: "Prepare project presentation", category: "Marketing", done: false },
  { id: 3, title: "Review user feedback", category: "Research", done: false },
  { id: 4, title: "Update design system", category: "Development", done: true },
];

const projects = [
  { name: "Website Redesign", category: "Design", progress: 85, color: "bg-violet-500" },
  { name: "Mobile Application", category: "Development", progress: 62, color: "bg-emerald-500" },
  { name: "Brand Identity", category: "Branding", progress: 40, color: "bg-orange-400" },
];

export default function Dashboard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeMenu, setActiveMenu] = useState("Overview");

  const completed = tasks.filter((task) => task.done).length;

  const menuItems = [
    { name: "Overview", icon: "◫" },
    { name: "My Projects", icon: "▧" },
    { name: "My Tasks", icon: "✓" },
    { name: "Settings", icon: "⚙" },
  ];

  return (
    <main className="min-h-screen bg-[#f7f7fb] text-gray-900 md:flex">
      <aside className="flex w-full flex-col border-r border-gray-100 bg-white p-5 md:min-h-screen md:w-64 md:p-6">
        <Link href="/" className="text-2xl font-black tracking-tight">
          nova<span className="text-violet-600">.</span>
        </Link>

        <p className="mb-3 mt-10 text-xs font-semibold uppercase tracking-widest text-gray-400">
          Workspace
        </p>

        <nav className="flex gap-2 overflow-x-auto md:flex-col">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition ${
                activeMenu === item.name
                  ? "bg-violet-600 font-semibold text-white shadow-lg shadow-violet-200"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="mt-auto hidden rounded-2xl bg-[#f2edff] p-5 md:mt-12 md:block">
          <span className="text-2xl">✦</span>
          <p className="mt-3 font-semibold">Keep it creative!</p>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Great things take time. Keep moving forward.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-semibold text-violet-600"
          >
            Back to home ↗
          </Link>
        </div>
      </aside>

      <section className="min-w-0 flex-1 p-5 md:p-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Sunday, October 18, 2026</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              {activeMenu === "Overview"
                ? "Good evening! ✨"
                : activeMenu}
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Here's what's happening in your workspace today.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium transition hover:border-violet-400"
          >
            ← Back to home
          </Link>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Total Projects", value: "12", change: "+2 this month", icon: "▧", color: "text-violet-600", bg: "bg-violet-50" },
            { title: "Completed Tasks", value: String(completed), change: "From your task list", icon: "✓", color: "text-emerald-600", bg: "bg-emerald-50" },
            { title: "In Progress", value: "08", change: "Across all projects", icon: "◷", color: "text-orange-500", bg: "bg-orange-50" },
            { title: "Productivity", value: "92%", change: "+8% this week", icon: "↗", color: "text-pink-600", bg: "bg-pink-50" },
          ].map((stat) => (
            <article
              key={stat.title}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm shadow-gray-100/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{stat.title}</span>
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl ${stat.color} ${stat.bg}`}>
                  {stat.icon}
                </span>
              </div>
              <p className="mt-5 text-3xl font-bold">{stat.value}</p>
              <p className="mt-2 text-xs text-gray-400">{stat.change}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid items-start gap-6 xl:grid-cols-[1.5fr_1fr]">
          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm shadow-gray-100/50">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold">Project Progress</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Keep track of your current work.
                </p>
              </div>
              <span className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600">
                3 projects
              </span>
            </div>

            <div className="mt-7 space-y-7">
              {projects.map((project) => (
                <div key={project.name}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold">{project.name}</p>
                      <p className="mt-1 text-xs text-gray-400">
                        {project.category}
                      </p>
                    </div>
                    <span className="text-sm font-semibold">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full ${project.color} transition-all duration-500`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#f6f2ff] p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl">
                  🎯
                </div>
                <div>
                  <h3 className="font-semibold">Weekly goal</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    You are making great progress this week!
                  </p>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-gray-500">Goal completion</span>
                <span className="font-semibold">78 / 100%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[78%] rounded-full bg-violet-500" />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm shadow-gray-100/50">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold">Today's Tasks</h2>
                <p className="mt-1 text-sm text-gray-500">
                  Check things off as you go.
                </p>
              </div>
              <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold">
                {completed}/{tasks.length}
              </span>
            </div>

            <div className="mt-6 space-y-2">
              {tasks.map((task) => (
                <label
                  key={task.id}
                  className="flex cursor-pointer items-start gap-3 rounded-xl p-3 transition hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() =>
                      setTasks((current) =>
                        current.map((item) =>
                          item.id === task.id
                            ? { ...item, done: !item.done }
                            : item
                        )
                      )
                    }
                    className="mt-1 h-4 w-4 accent-violet-600"
                  />
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-sm font-medium ${
                        task.done
                          ? "text-gray-400 line-through"
                          : "text-gray-800"
                      }`}
                    >
                      {task.title}
                    </span>
                    <span className="mt-1 block text-xs text-gray-400">
                      {task.category}
                    </span>
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-dashed border-gray-200 p-4 text-center">
              <p className="text-sm text-gray-500">
                {completed === tasks.length
                  ? "Amazing! All tasks are complete 🎉"
                  : `${tasks.length - completed} tasks left. You got this!`}
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
          <p>© 2026 Nova Studio</p>
          <p>Made for your next big idea ✳</p>
        </footer>
      </section>
    </main>
  );
}
