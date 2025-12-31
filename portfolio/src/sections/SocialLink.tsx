import { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { SectionBackground } from "../components/SectionBackground";
import { Github } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { SiBlogger, SiGithub, SiLeetcode } from "react-icons/si";
import { useHashCode } from "@/hooks/useHashCode";
import { HashCard } from "../components/HashCard";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { SOCIAL_LINKS, USER_NAMES } from "@/lib/data";

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

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number;
  recentSubmissions?: {
    title: string;
    statusDisplay: string;
    timestamp: string | number;
  }[];
}

const fetchLeetCodeStats = async (
  username: string
): Promise<LeetCodeStats | null> => {
  try {
    const response = await fetch(`https://leetscan.vercel.app/${username}`);
    return await response.json();
  } catch {
    throw new Error("Failed to load LeetCode stats");
  }
};

const formatDate = (timestamp: string | number): string => {
  const date = new Date(Number(timestamp) * 1000);
  return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getFullYear().toString().slice(-2)}`;
};

const StatCard = ({
  label,
  value,
  color = "text-foreground",
}: {
  label: string;
  value: string;
  color?: string;
}) => (
  <div className="box bg-background border border-border flex flex-col items-center justify-center p-2">
    <span className={`font-bold text-sm ${color}`}>{label}</span>
    <span className="text-sm text-foreground font-mono font-bold">{value}</span>
  </div>
);

export function SocialLinkSection() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loadings, setLoadings] = useState(true);
  const [error, setError] = useState("");
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

  useEffect(() => {
    fetchLeetCodeStats(USER_NAMES.leetcodeUsername)
      .then(setStats)
      .catch((err) => setError(err.message))
      .finally(() => setLoadings(false));
  }, []);

  if (
    !USER_NAMES.leetcodeUsername ||
    USER_NAMES.leetcodeUsername.trim() === ""
  ) {
    return null;
  }

  if (loadings) {
    return (
      <div className="text-center py-8 text-lg text-gray-500 animate-pulse">
        Loading LeetCode stats...
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="text-red-500 text-center py-8">
        {error || "No data found."}
      </div>
    );
  }

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

        <div className="mt-6 mb-6">
          <div className="w-[95%] mx-auto border-t-2 border-dashed border-gray-300"></div>
        </div>

        <div className="container">
          <section className="py-5" id="leetcode">
            <h2 className="text-xl font-semibold mb-4">leetcode.</h2>

            {/* LeetCode Profile Link */}
            <div className="mb-4 flex items-center gap-2">
              <Link
                href={SOCIAL_LINKS.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-sm font-mono font-medium text-muted-foreground transition-colors flex items-center gap-1"
              >
                <SiLeetcode
                  className="inline-block align-middle mr-1 text-yellow-500"
                  size={16}
                />
                {USER_NAMES.leetcodeUsername}
                <MdOutlineArrowOutward className="inline-block w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* LeetCode Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-5xl w-full">
              {/* Stats Overview */}
              <div className="lg:col-span-3 w-full flex flex-col gap-4 pl-0 lg:pl-2">
                <div className="grid grid-cols-2 gap-3 w-full ">
                  <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-950/30 border border-yellow-500/30">
                    <StatCard
                      label="Solved"
                      value={`${stats.totalSolved} / ${stats.totalQuestions}`}
                    />
                  </div>
                  <div className="bg-gradient-to-br from-green-900/20 to-green-950/30 border border-green-500/30">
                    <StatCard label="Rank" value={`# ${stats.ranking}`} />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 w-full">
                  <div className="bg-gradient-to-br from-green-900/20 to-green-950/30 border border-green-500/30">
                    <StatCard
                      label="Easy"
                      value={`${stats.easySolved} / ${stats.totalEasy}`}
                      color="text-green-600"
                    />
                  </div>

                  <div className="bg-gradient-to-br from-red-900/20 to-red-950/30 border border-red-500/30">
                    <StatCard
                      label="Medium"
                      value={`${stats.mediumSolved} / ${stats.totalMedium}`}
                      color="text-yellow-500"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-950/30 border border-yellow-500/30">
                    <StatCard
                      label="Hard"
                      value={`${stats.hardSolved} / ${stats.totalHard}`}
                      color="text-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Recent Submissions */}
              <div className="lg:col-span-2 w-full flex flex-col h-full pr-0 lg:pr-2">
                <div className="bg-gradient-to-br from-green-900/20 to-green-950/30 border border-green-500/30 box bg-background  border-border rounded-lg px-4 py-2 flex flex-col h-full justify-start">
                  <span className="text-foreground font-semibold text-sm mb-2 block">
                    Recent Submissions
                  </span>
                  <div className="flex flex-col gap-2">
                    {stats.recentSubmissions &&
                    stats.recentSubmissions.length > 0 ? (
                      stats.recentSubmissions.slice(0, 4).map((sub, idx) => (
                        <div
                          key={idx}
                          className="flex flex-row items-center justify-between w-full gap-2 min-w-0"
                        >
                          <span className="font-mono text-xs text-foreground truncate whitespace-nowrap flex-1">
                            {sub.title}
                          </span>
                          <span className="text-xs text-muted-foreground flex-shrink-0">
                            {sub.statusDisplay}
                          </span>
                          <span className="text-xs text-muted-foreground flex-shrink-0">
                            {formatDate(sub.timestamp)}
                          </span>
                        </div>
                      ))
                    ) : (
                      <span className="text-xs text-muted-foreground">
                        No recent submissions
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-6 mb-6">
          <div className="w-[95%] mx-auto border-t-2 border-dashed border-gray-300"></div>
        </div>

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
