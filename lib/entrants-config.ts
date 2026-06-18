import { Entrant } from '@/types/database';

export const TOURNAMENT_CONFIG = {
  name: "U.S. Open 2026",
  year: 2026,
  startDate: "2026-06-18T11:00:00Z",  // 7am EDT first tee
  endDate: "2026-06-21T23:00:00Z",
  espn_event_id: "401811952",
  entry_fee: 10,  // £10 per entrant
};

// Real entrants with their team selections (auto-generated from Entrants.csv)
export const ENTRANTS: Entrant[] = [
  { id: 'ent-1', name: "Rory Lindsay Brown", team: { top12: [6, 1], mid: [15, 21, 23], wildcard: [44, 39] } },
  { id: 'ent-2', name: "Harry Blake", team: { top12: [1, 9], mid: [19, 29, 17], wildcard: [48, 45] } },
  { id: 'ent-3', name: "Jack Bingham", team: { top12: [7, 10], mid: [12, 27, 19], wildcard: [43, 51] } },
  { id: 'ent-4', name: "Omeid Naraghi-Shah", team: { top12: [3, 7], mid: [12, 24, 21], wildcard: [41, 32] } },
  { id: 'ent-5', name: "Lewys Anderson", team: { top12: [9, 1], mid: [19, 29, 27], wildcard: [38, 52] } },
  { id: 'ent-6', name: "Craig Copp", team: { top12: [9, 6], mid: [18, 29, 13], wildcard: [32, 35] } },
  { id: 'ent-7', name: "James Grant", team: { top12: [9, 8], mid: [12, 17, 21], wildcard: [44, 40] } },
  { id: 'ent-8', name: "Jake Carty", team: { top12: [9, 11], mid: [14, 24, 12], wildcard: [48, 35] } },
  { id: 'ent-9', name: "Elliot Innes", team: { top12: [9, 7], mid: [29, 23, 21], wildcard: [39, 41] } },
  { id: 'ent-10', name: "Oli Hedger", team: { top12: [9, 7], mid: [18, 25, 12], wildcard: [48, 42] } },
  { id: 'ent-11', name: "Janine Manning", team: { top12: [9, 4], mid: [16, 15, 14], wildcard: [44, 33] } },
  { id: 'ent-12', name: "Chris Kulukundis", team: { top12: [9, 11], mid: [12, 24, 31], wildcard: [41, 39] } },
  { id: 'ent-13', name: "Jack Ireson", team: { top12: [1, 7], mid: [12, 24, 25], wildcard: [44, 39] } },
  { id: 'ent-14', name: "Rob Barron Jnr", team: { top12: [9, 7], mid: [24, 16, 13], wildcard: [33, 37] } },
  { id: 'ent-15', name: "Alex Coker", team: { top12: [9, 6], mid: [16, 21, 25], wildcard: [41, 33] } },
  { id: 'ent-16', name: "George St Quinton", team: { top12: [9, 11], mid: [24, 15, 28], wildcard: [48, 37] } },
  { id: 'ent-17', name: "Toby Edwards", team: { top12: [8, 11], mid: [29, 20, 28], wildcard: [36, 45] } },
  { id: 'ent-18', name: "Debbie Belyea", team: { top12: [1, 9], mid: [16, 14, 17], wildcard: [44, 39] } },
  { id: 'ent-19', name: "Tom Dias", team: { top12: [7, 9], mid: [18, 21, 30], wildcard: [41, 39] } },
  { id: 'ent-20', name: "Caroline McElroy", team: { top12: [9, 1], mid: [24, 18, 15], wildcard: [39, 44] } },
  { id: 'ent-21', name: "Rob Barron Snr", team: { top12: [1, 4], mid: [18, 26, 12], wildcard: [41, 34] } },
  { id: 'ent-22', name: "Ben Dixon", team: { top12: [9, 11], mid: [20, 17, 26], wildcard: [47, 52] } },
  { id: 'ent-23', name: "Brody Patience", team: { top12: [9, 6], mid: [15, 17, 31], wildcard: [44, 45] } },
  { id: 'ent-24', name: "Charlie Robinson", team: { top12: [9, 11], mid: [12, 31, 22], wildcard: [44, 32] } },
  { id: 'ent-25', name: "Simon Robinson", team: { top12: [11, 7], mid: [21, 17, 14], wildcard: [43, 36] } },
  { id: 'ent-26', name: "Katie Lawrence", team: { top12: [6, 9], mid: [17, 31, 24], wildcard: [44, 43] } },
  { id: 'ent-27', name: "Max Alexander", team: { top12: [11, 7], mid: [12, 18, 21], wildcard: [41, 32] } },
  { id: 'ent-28', name: "Andy Parke", team: { top12: [9, 7], mid: [24, 18, 21], wildcard: [41, 35] } },
  { id: 'ent-29', name: "Josh Hillier", team: { top12: [9, 1], mid: [15, 14, 24], wildcard: [45, 35] } },
  { id: 'ent-30', name: "Brandon Carty", team: { top12: [9, 1], mid: [12, 26, 24], wildcard: [45, 37] } },
  { id: 'ent-31', name: "James Kidd", team: { top12: [9, 5], mid: [12, 21, 13], wildcard: [35, 43] } },
  { id: 'ent-32', name: "Robert McNutt", team: { top12: [9, 8], mid: [17, 24, 21], wildcard: [41, 36] } },
  { id: 'ent-33', name: "Claudia Bowman", team: { top12: [9, 7], mid: [29, 14, 24], wildcard: [32, 50] } },
  { id: 'ent-34', name: "Craig Manning", team: { top12: [9, 3], mid: [24, 25, 29], wildcard: [33, 37] } },
  { id: 'ent-35', name: "Tom Cochrane", team: { top12: [9, 1], mid: [15, 17, 20], wildcard: [44, 48] } },
  { id: 'ent-36', name: "Ben Turner", team: { top12: [3, 7], mid: [16, 29, 24], wildcard: [32, 33] } },
  { id: 'ent-37', name: "Jason Belyea", team: { top12: [9, 1], mid: [12, 15, 18], wildcard: [44, 39] } },
  { id: 'ent-38', name: "Michelle Vero", team: { top12: [9, 3], mid: [18, 16, 13], wildcard: [52, 32] } },
  { id: 'ent-39', name: "Jack Turner", team: { top12: [3, 2], mid: [27, 24, 14], wildcard: [48, 44] } },
  { id: 'ent-40', name: "Jack Manning", team: { top12: [9, 4], mid: [15, 17, 31], wildcard: [36, 37] } },
  { id: 'ent-41', name: "Andrew Perry", team: { top12: [9, 1], mid: [21, 25, 27], wildcard: [44, 33] } },
  { id: 'ent-42', name: "Addie Christianson", team: { top12: [3, 1], mid: [27, 25, 13], wildcard: [44, 43] } },
  { id: 'ent-43', name: "George Apel", team: { top12: [3, 1], mid: [17, 27, 23], wildcard: [33, 46] } },
  { id: 'ent-44', name: "Harry Martin", team: { top12: [9, 2], mid: [29, 15, 17], wildcard: [33, 37] } },
  { id: 'ent-45', name: "Luke Gray", team: { top12: [9, 1], mid: [21, 29, 18], wildcard: [45, 44] } },
  { id: 'ent-46', name: "Lucas King", team: { top12: [9, 11], mid: [18, 24, 27], wildcard: [45, 48] } },
  { id: 'ent-47', name: "Sam Evans", team: { top12: [11, 3], mid: [24, 14, 27], wildcard: [44, 32] } },
  { id: 'ent-48', name: "Greg Whitelaw", team: { top12: [9, 11], mid: [25, 29, 15], wildcard: [39, 37] } },
  { id: 'ent-49', name: "David Canavan", team: { top12: [9, 1], mid: [15, 27, 30], wildcard: [44, 37] } },
  { id: 'ent-50', name: "Mark Nelson", team: { top12: [9, 11], mid: [21, 26, 20], wildcard: [44, 35] } },
  { id: 'ent-51', name: "Tom Kelland", team: { top12: [9, 7], mid: [12, 21, 25], wildcard: [39, 32] } },
  { id: 'ent-52', name: "Dan Pritchard", team: { top12: [9, 1], mid: [24, 29, 21], wildcard: [45, 52] } },
  { id: 'ent-53', name: "Ed Wootton", team: { top12: [9, 1], mid: [24, 12, 13], wildcard: [49, 32] } },
  { id: 'ent-54', name: "Ian Wootton", team: { top12: [7, 3], mid: [12, 29, 25], wildcard: [45, 53] } },
  { id: 'ent-55', name: "Bradley Neil", team: { top12: [1, 6], mid: [24, 14, 12], wildcard: [33, 34] } },
]

// Helper to validate entrant teams
export function validateEntrant(entrant: Entrant): boolean {
  return (
    entrant.team.top12.length === 2 &&
    entrant.team.mid.length === 3 &&
    entrant.team.wildcard.length === 2
  );
}

// Calculate total pot
export function getTotalPot(): number {
  return ENTRANTS.length * TOURNAMENT_CONFIG.entry_fee;
}

// Calculate prize amounts (70%, 20%, 10%)
export function getPrizes() {
  const total = getTotalPot();
  return {
    first: Math.floor(total * 0.70),
    second: Math.floor(total * 0.20),
    third: Math.floor(total * 0.10),
  };
}

// Get entrant by ID
export function getEntrantById(id: string): Entrant | undefined {
  return ENTRANTS.find((e) => e.id === id);
}
