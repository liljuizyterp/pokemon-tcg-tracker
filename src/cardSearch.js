// Pokemon TCG API integration
const API_BASE = 'https://api.pokemontcg.io/v2';

/**
 * Search for cards by name, card number, or set
 * @param {string} query - Search query (card name, number, or set)
 * @param {object} filters - Additional filters {setName, cardNumber}
 * @returns {Promise<Array>} Array of card objects
 */
export async function searchCards(query, filters = {}) {
  try {
    let url = `${API_BASE}/cards?q=`;
    const conditions = [];

    // Build query conditions
    if (query) {
      // Search by card name
      conditions.push(`name:"${query}"*`);
    }

    if (filters.cardNumber) {
      conditions.push(`number:${filters.cardNumber}`);
    }

    if (filters.setName) {
      conditions.push(`q:set.name:"${filters.setName}"*`);
    }

    // If no query provided but filters exist
    if (!query && Object.keys(filters).length > 0) {
      url += encodeURIComponent(conditions.join(' OR '));
    } else if (query) {
      url += encodeURIComponent(conditions[0]);
    } else {
      return [];
    }

    // Add pagination
    url += '&pageSize=20';

    const response = await fetch(url);
    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Card search error:', error);
    return [];
  }
}

/**
 * Get all sets
 * @returns {Promise<Array>} Array of set objects
 */
export async function getSets() {
  try {
    const response = await fetch(`${API_BASE}/sets?pageSize=100`);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Get sets error:', error);
    return [];
  }
}

/**
 * Get card by ID
 * @param {string} cardId - Card ID from Pokemon TCG API
 * @returns {Promise<object>} Card object
 */
export async function getCard(cardId) {
  try {
    const response = await fetch(`${API_BASE}/cards/${cardId}`);
    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error('Get card error:', error);
    return null;
  }
}
