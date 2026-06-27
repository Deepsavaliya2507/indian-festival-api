import festivalsData from '../data/festivals.json';

export function getAllFestivals() {
  return festivalsData;
}

export function getFestivalById(id) {
  return festivalsData.find((f) => f.id === parseInt(id)) || null;
}

export function filterFestivals(params = {}) {
  let results = [...festivalsData];

  const { month, religion, state, type, national_holiday, date, upcoming, tag } = params;

  if (month) {
    const m = parseInt(month);
    if (m >= 1 && m <= 12) {
      results = results.filter((f) => f.month === m);
    }
  }

  if (religion) {
    results = results.filter(
      (f) => f.religion.toLowerCase() === religion.toLowerCase()
    );
  }

  if (type) {
    results = results.filter(
      (f) => f.type.toLowerCase() === type.toLowerCase()
    );
  }

  if (national_holiday !== undefined && national_holiday !== null) {
    const isHoliday = national_holiday === 'true' || national_holiday === true;
    results = results.filter((f) => f.national_holiday === isHoliday);
  }

  if (state) {
    results = results.filter(
      (f) =>
        f.states.includes('all') ||
        f.states.some((s) => s.toLowerCase() === state.toLowerCase())
    );
  }

  if (tag) {
    results = results.filter((f) =>
      f.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    );
  }

  if (date) {
    const parsed = new Date(date);
    if (!isNaN(parsed)) {
      const m = parsed.getMonth() + 1;
      const d = parsed.getDate();
      results = results.filter((f) => f.month === m && f.day === d);
    }
  }

  if (upcoming === 'true') {
    const today = new Date();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();
    results = results.filter((f) => {
      if (f.month > todayMonth) return true;
      if (f.month === todayMonth && f.day >= todayDay) return true;
      return false;
    });
    results.sort((a, b) => {
      if (a.month !== b.month) return a.month - b.month;
      return a.day - b.day;
    });
    results = results.slice(0, 10);
  }

  return results;
}

export function searchFestivals(query) {
  if (!query || query.trim() === '') return [];
  const q = query.toLowerCase().trim();

  return festivalsData.filter((f) => {
    if (f.name.toLowerCase().includes(q)) return true;
    if (f.description.toLowerCase().includes(q)) return true;
    if (f.religion.toLowerCase().includes(q)) return true;
    if (f.also_known_as.some((a) => a.toLowerCase().includes(q))) return true;
    if (f.tags.some((t) => t.toLowerCase().includes(q))) return true;
    const localNames = Object.values(f.local_names || {});
    if (localNames.some((n) => n.toLowerCase().includes(q))) return true;
    return false;
  });
}

export function getMeta() {
  const religions = [...new Set(festivalsData.map((f) => f.religion))];
  const types = [...new Set(festivalsData.map((f) => f.type))];
  const allStates = festivalsData.flatMap((f) => f.states);
  const states = [...new Set(allStates)].filter((s) => s !== 'all').sort();
  const allTags = festivalsData.flatMap((f) => f.tags);
  const tags = [...new Set(allTags)].sort();

  return {
    total_festivals: festivalsData.length,
    religions,
    types,
    states,
    tags,
  };
}