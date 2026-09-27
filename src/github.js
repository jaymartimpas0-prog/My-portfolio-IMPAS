const GITHUB_USERNAME = 'jaymartimpas0-prog'

export async function getRepositories() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories')
  }

  return response.json()
}
