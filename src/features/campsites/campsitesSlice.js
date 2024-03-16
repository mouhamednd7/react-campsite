import { CAMPSITES } from "../shared/data/CAMPSITES";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectRandomCampsite = () => {
  return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
};
