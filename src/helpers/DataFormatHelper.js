export const formatSqsData = (data) => {
  return {
    genres: data.genres,
    id: data.id,
    revenue: data.revenue,
    status: data.status,
    averageVote: data.vote_average,
    productionCompanies: data.production_companies,
    productionCountries: data.production_countries,
    spokenLanguages: data.spoken_languages,
    originalTitle: data.original_title,
    title: data.title,
  };
};
