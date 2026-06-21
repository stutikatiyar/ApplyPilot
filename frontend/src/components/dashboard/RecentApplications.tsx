const jobs = [
  {
    company: "Google",
    role: "SWE Intern",
    status: "Applied",
  },
  {
    company: "Microsoft",
    role: "Software Intern",
    status: "Interview",
  },
  {
    company: "Amazon",
    role: "SDE Intern",
    status: "Saved",
  },
  {
    company: "OpenAI",
    role: "Research Intern",
    status: "Offer",
  },
  {
    company: "Meta",
    role: "Frontend Intern",
    status: "Rejected",
  },
];

const RecentApplications = () => {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 mt-8">
      <h2 className="text-xl font-semibold text-white mb-5">
        Recent Applications
      </h2>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.company}
            className="flex justify-between items-center border-b border-zinc-800 pb-3"
          >
            <div>
              <h3 className="text-white font-medium">
                {job.role}
              </h3>

              <p className="text-zinc-400 text-sm">
                {job.company}
              </p>
            </div>

            <span
  className={`px-3 py-1 rounded-full text-xs font-medium ${
    job.status === "Applied"
      ? "bg-blue-500/10 text-blue-400"
      : job.status === "Interview"
      ? "bg-amber-500/10 text-amber-400"
      : job.status === "Saved"
      ? "bg-cyan-500/10 text-cyan-400"
      : job.status === "Offer"
      ? "bg-green-500/10 text-green-400"
      : "bg-red-500/10 text-red-400"
  }`}
>
  {job.status}
</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentApplications;