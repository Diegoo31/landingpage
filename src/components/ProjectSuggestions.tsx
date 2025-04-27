import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export default function GitHubRepositories() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Diegoo31/repos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        return response.json();
      })
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load repositories');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="repositories" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a237e] mx-auto"></div>
            <p className="mt-4 text-gray-600">Carregando repositórios...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="repositories" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="repositories" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#1a237e]">
          Meus Repositórios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map(repo => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Github className="w-5 h-5 text-[#1a237e] mr-2" />
                  <h3 className="font-semibold text-lg text-[#1a237e]">{repo.name}</h3>
                </div>
                {repo.language && (
                  <span className="px-3 py-1 bg-blue-100 text-[#1a237e] text-sm rounded-full">
                    {repo.language}
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-4 line-clamp-2 min-h-[3rem]">
                {repo.description || 'No description available'}
              </p>
              
              <div className="flex items-center gap-4 text-gray-500">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center">
                  <GitFork className="w-4 h-4 mr-1" />
                  <span>{repo.forks_count}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}