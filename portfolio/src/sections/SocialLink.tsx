import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { SectionBackground } from "../components/SectionBackground";
import { Github } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { SiBlogger, SiGithub, SiLeetcode } from "react-icons/si";
import { useHashCode } from "@/hooks/useHashCode";
import { HashCard } from "../components/HashCard";

interface Repo {
  name: string;
  description?: string;
  stars: number;
  forks: number;
  language?: string;
  html_url: string;
}

interface UserProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

export function SocialLinkSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user, setUser] = useState<UserProfile | null>(null);
  const { blogs, loading } = useHashCode();

  useEffect(() => {
    fetch("https://api.github.com/users/taniya23y")
      .then((response) => response.json())
      .then((data: UserProfile) => setUser(data));

    fetch(
      "https://api.github.com/users/taniya23y/repos?sort=pushed&direction=desc&per_page=3"
    )
      .then((response) => response.json())
      .then((data) =>
        setRepos(
          data.map((repo: any) => ({
            name: repo.name,
            description: repo.description || "No description available",
            stars: repo.stargazers_count,
            forks: repo.forks,
            language: repo.language || "Unknown",
            html_url: repo.html_url,
          }))
        )
      );
  }, []);
  return (
    <div className="container flex flex-col pt-[5rem]" id="social-links">
      <SectionHeader
        tagIcon="solar:link-bold"
        tagText="Social & Coding Profiles"
        showUnderline={true}
        centered={true}
        eyebrow="Connect & Explore"
        title="My Social links"
        description="Find me on coding platforms, explore my projects, and read my blogs."
      />
      {/* Github  */}
      <SectionBackground>
        <section id="github">
          <div className="mx-auto max-w-6xl px-8">
            <div className="mb-3 flex gap-4">
              <div className="mt-6 flex gap-2 justify-center">
                <SiGithub className="text-[#5f5d5d] w-5 h-5" />
                <h2>GitHub.</h2>
              </div>
            </div>

            {/* Contribution Graph */}
            <div className="mt-3 mb-2 flex flex-col items-center">
              <div className="w-full p-1  bg-black/40 backdrop-blur-xl rounded-lg ">
                <GitHubCalendar
                  username="taniya23y"
                  blockSize={11.8}
                  blockMargin={5}
                  theme={{
                    dark: [
                      "#161B22",
                      "#0E4429",
                      "#006D32",
                      "#26A641",
                      "#39D353",
                    ],
                  }}
                />
              </div>
            </div>

            {/* GitHub Profile Widget */}
            {user && (
              <div className="flex flex-col md:flex-row items-center justify-between bg-black backdrop-blur-xl border border-green-500/30 rounded-lg p-6 shadow-lg shadow-green-500/20">
                {/* Avatar & Name */}
                <div className="flex items-center flex-col space-x-4">
                  <img
                    src={user.avatar_url}
                    alt="GitHub Avatar"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-green-500"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {user.name}
                    </h3>
                    <p className="text-green-400">@{user.login}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="hidden md:block text-gray-300 flex-1 text-center md:text-left mx-6">
                  {user.bio}
                </p>

                {/* Stats & Button */}
                <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6 text-gray-300 mt-4 md:mt-0">
                  <div className="flex flex-col gap-4">
                    <span className="flex items-center gap-1 text-sm">
                      👥 {user.followers} Followers
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      📦 {user.public_repos} Repos
                    </span>
                  </div>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto text-center flex items-center justify-center gap-2 bg-green-600/80 text-black font-semibold px-4 py-2 rounded-lg hover:bg-green-500 hover:scale-105 transition-all mt-3 md:mt-0 shadow-lg shadow-green-500/30"
                  >
                    <Github className="w-5 h-5" /> View Profile
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* dash line  */}
        <div className="mt-6 mb-6">
          <div className="w-[95%] mx-auto border-t-2 border-dashed border-gray-300"></div>
        </div>

        {/* Leetcode  */}
        <section id="leetcode">
          <div className="container mx-auto max-w-6xl px-8">
            <div className="mb-3 flex gap-4">
              <div className="mt-6 flex gap-2 justify-center">
                <SiLeetcode className="text-yellow-500 w-5 h-5" />
                <h2>Leetcode.</h2>
              </div>
            </div>

            {/* LEFT SIDE ONLY IN A ROW */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Solved */}
              <div className="col-span-1 bg-gradient-to-br from-yellow-900/20 to-yellow-950/30 border border-yellow-500/30 rounded-xl p-6 text-center text-white shadow-lg">
                <h3 className="text-lg font-semibold">Solved</h3>
                <p className="text-2xl font-bold">245</p>
              </div>

              {/* Rank */}
              <div className="col-span-1 bg-gradient-to-br from-green-900/20 to-green-950/30 border border-green-500/30 rounded-xl p-6 text-center text-white shadow-lg">
                <h3 className="text-lg font-semibold">Rank</h3>
                <p className="text-2xl font-bold">4,99,102</p>
              </div>

              {/* Easy */}
              <div className="col-span-1 bg-gradient-to-br from-green-900/20 to-green-950/30 border border-green-500/30 rounded-xl p-4 text-center text-white shadow-lg">
                <h4 className="text-lg font-semibold">Easy</h4>
                <p className="text-2xl font-bold">111 / 890</p>
              </div>

              {/* Medium */}
              <div className="col-span-1 bg-gradient-to-br from-yellow-900/20 to-yellow-950/30 border border-yellow-500/30 rounded-xl p-4 text-center text-white shadow-lg">
                <h4 className="text-lg font-semibold">Medium</h4>
                <p className="text-2xl font-bold">113 / 1897</p>
              </div>

              {/* Hard */}
              <div className="col-span-1 bg-gradient-to-br from-red-900/20 to-red-950/30 border border-red-500/30 rounded-xl p-4 text-center text-white shadow-lg">
                <h4 className="text-lg font-semibold">Hard</h4>
                <p className="text-2xl font-bold">21 / 860</p>
              </div>
            </div>
          </div>
        </section>

        {/* dash line  */}
        <div className="mt-6 mb-6">
          <div className="w-[95%] mx-auto border-t-2 border-dashed border-gray-300"></div>
        </div>

        {/* HashCode  */}
        <section id="blogs">
          <div className="container mx-auto px-8">
            <div className="mb-3 flex gap-4">
              <div className="mt-6 flex gap-2 justify-center">
                <SiBlogger className="text-[#07abf1] w-5 h-5" />
                <h2>HashCode Blog.</h2>
              </div>
            </div>
            {loading ? (
              <p className="text-center text-gray-400">Loading blogs...</p>
            ) : (
              <>
                <div className="max-w-6xl mx-auto flex flex-col gap-6">
                  {blogs.map((blog) => (
                    <HashCard key={blog.slug} {...blog} />
                  ))}
                </div>

                {/* "See All Blogs" Button */}
                <div className="mt-10 text-center">
                  <a
                    href="https://taniya23y.hashnode.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-lg font-semibold text-white bg-[#1d1d1d]  border border-gray-700 hover:border-blue-400 hover:shadow-md  rounded-full shadow-md hover:text-white transition-all"
                  >
                    View More Articles →
                  </a>
                </div>
              </>
            )}
          </div>
        </section>
      </SectionBackground>
    </div>
  );
}
