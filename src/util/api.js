export function battle(players) {
  return Promise.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
}

function getProfile(username) {
  const encodedURI = window.encodeURI(
    `https://api.github.com/users/${username}`,
  );
  return fetchJSON(encodedURI);
}

function getRepos(username) {
  const encodedURI = window.encodeURI(
    `https://api.github.com/users/${username}/repos?per_page=100`,
  );
  return fetchJSON(encodedURI);
}

function getStartCount(repos) {
  return repos.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0);
}

function calculateScore(profile, repos) {
  const followers = profile.followers;
  const totalStars = getStartCount(repos);
  return followers * 3 + totalStars;
}

function handleError(error) {
  console.warn(error);
  return null;
}

async function getUserData(player) {
  const [profile, repos] = await Promise.all([
    getProfile(player),
    getRepos(player),
  ]);
  try {
    return {
      profile,
      score: calculateScore(profile, repos),
    };
  } catch (error) {
    return handleError(error);
  }

  /*return Axios.all([getProfile(player), getRepos(player)]).then(data => {
    const profile = data[0];
    const repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    };
  });*/
}

function sortPlayers(players) {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
}

async function fetchJSON(url) {
  const init = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  };
  try {
    return await (await fetch(url, init)).json();
  } catch (error) {
    handleError(error);
  }
}

export async function fetchPopularRepos(language) {
  const encodedURI = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`,
  );
  const data = await fetchJSON(encodedURI);
  return data.items;
}
