import { Golfer, GolferBucket } from '@/types/database';

// === GOLFERS FROM U.S. OPEN 2026 FIELD (auto-generated from Entrants.csv + ESPN field) ===
// Top 12 (Bucket 1: Pick 2)
const top12: Golfer[] = [
  { id: 1, name: "Rory McIlroy", world_rank: 4, bucket: 'top12', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 2, name: "Ludvig Åberg", world_rank: 5, bucket: 'top12', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 3, name: "Tommy Fleetwood", world_rank: 19, bucket: 'top12', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 4, name: "Bryson DeChambeau", world_rank: 33, bucket: 'top12', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 5, name: "Russell Henley", world_rank: 36, bucket: 'top12', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 6, name: "Xander Schauffele", world_rank: 39, bucket: 'top12', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 7, name: "Matt Fitzpatrick", world_rank: 58, bucket: 'top12', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 8, name: "Cameron Young", world_rank: 66, bucket: 'top12', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 9, name: "Scottie Scheffler", world_rank: 71, bucket: 'top12', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 10, name: "Brooks Koepka", world_rank: 77, bucket: 'top12', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 11, name: "Jon Rahm", world_rank: 137, bucket: 'top12', live_score: null, thru_hole: null, today_score: null, status: 'active' },
];

// Top 50 / Mid bucket (Pick 3)
const midGolfers: Golfer[] = [
  { id: 12, name: "Wyndham Clark", world_rank: 3, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 13, name: "Aaron Rai", world_rank: 12, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 14, name: "Shane Lowry", world_rank: 15, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 15, name: "Collin Morikawa", world_rank: 30, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 16, name: "Viktor Hovland", world_rank: 34, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 17, name: "Justin Thomas", world_rank: 37, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 18, name: "Sam Burns", world_rank: 45, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 19, name: "Alex Fitzpatrick", world_rank: 46, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 20, name: "Hideki Matsuyama", world_rank: 62, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 21, name: "Patrick Reed", world_rank: 67, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 22, name: "Harris English", world_rank: 68, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 23, name: "Maverick McNealy", world_rank: 70, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 24, name: "Tyrrell Hatton", world_rank: 93, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 25, name: "Chris Gotterup", world_rank: 104, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 26, name: "J.J. Spaun", world_rank: 116, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 27, name: "Robert MacIntyre", world_rank: 129, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 28, name: "Min Woo Lee", world_rank: 131, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 29, name: "Justin Rose", world_rank: 133, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 30, name: "Jordan Spieth", world_rank: 135, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 31, name: "Patrick Cantlay", world_rank: 136, bucket: 'mid', live_score: null, thru_hole: null, today_score: null, status: 'active' },
];

// Wildcard bucket (Pick 2)
const wildcardGolfers: Golfer[] = [
  { id: 32, name: "Brian Harman", world_rank: 6, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 33, name: "Ryan Fox", world_rank: 14, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 34, name: "Keith Mitchell", world_rank: 16, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 35, name: "Keegan Bradley", world_rank: 18, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 36, name: "Tom Kim", world_rank: 20, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 37, name: "Sahith Theegala", world_rank: 21, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 38, name: "Dustin Johnson", world_rank: 32, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 39, name: "Rickie Fowler", world_rank: 44, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 40, name: "Michael Kim", world_rank: 47, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 41, name: "Jackson Koivun", world_rank: 48, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 42, name: "Sudarshan Yellamaraju", world_rank: 50, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 43, name: "Harry Hall", world_rank: 53, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 44, name: "Jason Day", world_rank: 55, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 45, name: "Corey Conners", world_rank: 59, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 46, name: "Matthew Jordan", world_rank: 63, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 47, name: "Patrick Rodgers", world_rank: 64, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 48, name: "Sungjae Im", world_rank: 92, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 49, name: "Nick Taylor", world_rank: 95, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 50, name: "Jayden Schaper", world_rank: 100, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 51, name: "Padraig Harrington", world_rank: 113, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 52, name: "Daniel Berger", world_rank: 115, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
  { id: 53, name: "Billy Horschel", world_rank: 134, bucket: 'wildcard', live_score: null, thru_hole: null, today_score: null, status: 'active' },
];

export const allGolfers: Golfer[] = [...top12, ...midGolfers, ...wildcardGolfers];

export function getGolfersByBucket(bucket: GolferBucket): Golfer[] {
  return allGolfers.filter(g => g.bucket === bucket);
}
