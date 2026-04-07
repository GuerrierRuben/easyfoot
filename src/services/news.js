const NEWS_API_BASE_URL = '/api/news';

function normalizeArticle(article, index) {
  return {
    id: article.url || `${article.source?.name || 'news'}-${index}`,
    cat: article.source?.name || 'Football',
    date: article.publishedAt
      ? new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
      : 'Latest update',
    img: article.urlToImage || '/news_lineup.png',
    title: article.title || 'Untitled article',
    excerpt: article.description || article.content || 'No preview available yet.',
    url: article.url || '',
  };
}

export async function getLatestNews(limit = 12) {
  const response = await fetch(`${NEWS_API_BASE_URL}?pageSize=${limit}`);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Unable to load football news.');
  }

  return (data.articles || []).map(normalizeArticle);
}
