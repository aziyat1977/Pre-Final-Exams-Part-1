
import { Subject, Verb, Context } from '../types';

// --- VERB DATABASE (REGULAR & IRREGULAR) ---
export const VERBS: Verb[] = [
  { base: 'play', past: 'played', pastPart: 'played', ing: 'playing', s: 'plays' },
  { base: 'win', past: 'won', pastPart: 'won', ing: 'winning', s: 'wins' },
  { base: 'lose', past: 'lost', pastPart: 'lost', ing: 'losing', s: 'loses' },
  { base: 'buy', past: 'bought', pastPart: 'bought', ing: 'buying', s: 'buys' },
  { base: 'sell', past: 'sold', pastPart: 'sold', ing: 'selling', s: 'sells' },
  { base: 'drive', past: 'drove', pastPart: 'driven', ing: 'driving', s: 'drives' },
  { base: 'eat', past: 'ate', pastPart: 'eaten', ing: 'eating', s: 'eats' },
  { base: 'steal', past: 'stole', pastPart: 'stolen', ing: 'stealing', s: 'steals' },
  { base: 'write', past: 'wrote', pastPart: 'written', ing: 'writing', s: 'writes' },
  { base: 'sing', past: 'sang', pastPart: 'sung', ing: 'singing', s: 'sings' },
  { base: 'hack', past: 'hacked', pastPart: 'hacked', ing: 'hacking', s: 'hacks' },
  { base: 'build', past: 'built', pastPart: 'built', ing: 'building', s: 'builds' },
  { base: 'stream', past: 'streamed', pastPart: 'streamed', ing: 'streaming', s: 'streams' },
  { base: 'fight', past: 'fought', pastPart: 'fought', ing: 'fighting', s: 'fights' },
  { base: 'watch', past: 'watched', pastPart: 'watched', ing: 'watching', s: 'watches' },
  { base: 'create', past: 'created', pastPart: 'created', ing: 'creating', s: 'creates' },
  { base: 'destroy', past: 'destroyed', pastPart: 'destroyed', ing: 'destroying', s: 'destroys' },
  { base: 'ban', past: 'banned', pastPart: 'banned', ing: 'banning', s: 'bans' },
  { base: 'travel', past: 'traveled', pastPart: 'traveled', ing: 'traveling', s: 'travels' },
  { base: 'fix', past: 'fixed', pastPart: 'fixed', ing: 'fixing', s: 'fixes' },
];

// --- SUBJECTS BY THEME ---
export const SUBJECTS: Subject[] = [
  // Gaming
  { text: 'Steve from Minecraft', isPlural: false, theme: 'Gaming' },
  { text: 'The Imposter', isPlural: false, theme: 'Gaming' },
  { text: 'Michael De Santa', isPlural: false, theme: 'Gaming' },
  { text: 'The Counter-Terrorists', isPlural: true, theme: 'Gaming' },
  { text: 'My Roblox avatar', isPlural: false, theme: 'Gaming' },
  { text: 'The creeper', isPlural: false, theme: 'Gaming' },
  { text: 'Leon from Brawl Stars', isPlural: false, theme: 'Gaming' },
  { text: 'The FIFA referee', isPlural: false, theme: 'Gaming' },
  { text: 'A toxic teammate', isPlural: false, theme: 'Gaming' },
  { text: 'The enemy squad', isPlural: false, theme: 'Gaming' },
  
  // Pop Culture
  { text: 'Billie Eilish', isPlural: false, theme: 'Music' },
  { text: 'Eminem', isPlural: false, theme: 'Music' },
  { text: 'Lady Gaga', isPlural: false, theme: 'Music' },
  { text: 'Harry Potter', isPlural: false, theme: 'Movies' },
  { text: 'Eleven from Stranger Things', isPlural: false, theme: 'Movies' },
  { text: 'Spider-Man', isPlural: false, theme: 'Movies' },
  { text: 'The Avengers', isPlural: true, theme: 'Movies' },
  
  // Tech & Teens
  { text: 'My iPhone', isPlural: false, theme: 'Tech' },
  { text: 'The algorithm', isPlural: false, theme: 'Tech' },
  { text: 'My best friends', isPlural: true, theme: 'Friends' },
  { text: 'Our school teacher', isPlural: false, theme: 'School' },
  { text: 'A time traveler', isPlural: false, theme: 'Time Travel' },
  { text: 'The delicious pizza', isPlural: false, theme: 'Food' },
];

// --- CONTEXTS (Direct Objects / Prepositional Phrases) ---
export const CONTEXTS: Context[] = [
  { text: 'a diamond sword', theme: 'Gaming' },
  { text: 'the match in Mobile Legends', theme: 'Gaming' },
  { text: 'a legendary skin', theme: 'Gaming' },
  { text: 'the fast car in Los Santos', theme: 'Gaming' },
  { text: 'the final boss', theme: 'Gaming' },
  { text: 'a new viral song', theme: 'Music' },
  { text: 'the magical wand', theme: 'Movies' },
  { text: 'the Demogorgon', theme: 'Movies' },
  { text: 'a million dollars', theme: 'Money' },
  { text: 'the time machine', theme: 'Time Travel' },
  { text: 'the homework', theme: 'School' },
  { text: 'a tasty burger', theme: 'Food' },
  { text: 'the latest iPhone', theme: 'Gadgets' },
  { text: 'a funny TikTok video', theme: 'Tech' },
  { text: 'the football match', theme: 'Sports' },
  { text: 'the red card', theme: 'Sports' },
];
