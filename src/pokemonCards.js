// Local Pokemon TCG card database
export const pokemonCards = [
  { id: 'base1-25', name: 'Pikachu', cardNumber: '25', setName: 'Base Set', setNumber: '1', rarity: 'Uncommon', types: ['Electric'], image: 'https://images.pokemontcg.io/base1/25.png' },
  { id: 'base1-4', name: 'Charizard', cardNumber: '4', setName: 'Base Set', setNumber: '1', rarity: 'Holographic Rare', types: ['Fire', 'Flying'], image: 'https://images.pokemontcg.io/base1/4.png' },
  { id: 'base1-102', name: 'Mewtwo', cardNumber: '102', setName: 'Base Set', setNumber: '1', rarity: 'Holographic Rare', types: ['Psychic'], image: 'https://images.pokemontcg.io/base1/102.png' },
  { id: 'base1-10', name: 'Blastoise', cardNumber: '10', setName: 'Base Set', setNumber: '1', rarity: 'Holographic Rare', types: ['Water'], image: 'https://images.pokemontcg.io/base1/10.png' },
  { id: 'base1-3', name: 'Venusaur', cardNumber: '3', setName: 'Base Set', setNumber: '1', rarity: 'Holographic Rare', types: ['Grass', 'Poison'], image: 'https://images.pokemontcg.io/base1/3.png' },
  { id: 'base1-1', name: 'Alakazam', cardNumber: '1', setName: 'Base Set', setNumber: '1', rarity: 'Holographic Rare', types: ['Psychic'], image: 'https://images.pokemontcg.io/base1/1.png' },
  { id: 'base2-2', name: 'Arcanine', cardNumber: '2', setName: 'Jungle', setNumber: '2', rarity: 'Holographic Rare', types: ['Fire'], image: 'https://images.pokemontcg.io/base2/2.png' },
  { id: 'base3-1', name: 'Blastoise', cardNumber: '1', setName: 'Fossil', setNumber: '3', rarity: 'Holographic Rare', types: ['Water'], image: 'https://images.pokemontcg.io/base3/1.png' },
  { id: 'neo1-111', name: 'Pikachu', cardNumber: '111', setName: 'Neo Genesis', setNumber: '4', rarity: 'Uncommon', types: ['Electric'], image: 'https://images.pokemontcg.io/neo1/111.png' },
  { id: 'base1-94', name: 'Gengar', cardNumber: '94', setName: 'Base Set', setNumber: '1', rarity: 'Holographic Rare', types: ['Psychic', 'Poison'], image: 'https://images.pokemontcg.io/base1/94.png' },
  { id: 'base1-25-shadowless', name: 'Pikachu', cardNumber: '25', setName: 'Base Set Shadowless', setNumber: '1', rarity: 'Uncommon', types: ['Electric'], image: 'https://images.pokemontcg.io/base1/25.png' },
  { id: 'sv04-244', name: 'Pecharunt', cardNumber: '244', setName: 'Scarlet & Violet', setNumber: 'sv04', rarity: 'Holographic Rare', types: ['Poison', 'Ghost'], image: 'https://images.pokemontcg.io/sv04/244.png' }
];

export function searchCards(query) {
  if (!query) return [];
  
  const q = query.toLowerCase().trim();
  
  return pokemonCards.filter(card => 
    card.name.toLowerCase().includes(q) ||
    card.cardNumber.includes(q) ||
    card.setName.toLowerCase().includes(q)
  );
}
