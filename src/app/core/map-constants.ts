import {MAP_LOGO_PLACEHOLDER} from './constants';

//active duty
export const MAP_INFERNO = {name: 'Inferno', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_TRAIN = {name: 'Train', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_MIRAGE = {name: 'Mirage', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_NUKE = {name: 'Nuke', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_OVERPASS = {name: 'Overpass', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_DUST_2 = {name: 'Dust II', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_VERTIGO = {name: 'Vertigo', logo: MAP_LOGO_PLACEHOLDER};

//reserve
export const MAP_CACHE = {name: 'Cache', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_COBBLESTONE = {name: 'Cobblestone', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_CANALS = {name: 'Canals', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_ZOO = {name: 'Zoo', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_ABBEY = {name: 'Abbey', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_BIOME = {name: 'Biome', logo: MAP_LOGO_PLACEHOLDER};

//hostages
export const MAP_MILITIA = {name: 'Militia', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_AGENCY= {name: 'Agency', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_OFFICE = {name: 'Office', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_ITALY = {name: 'Italy', logo: MAP_LOGO_PLACEHOLDER};
export const MAP_ASSAULT = {name: 'Assault', logo: MAP_LOGO_PLACEHOLDER};

export const ACTIVE_DUTY_MAP_LIST = [MAP_INFERNO, MAP_TRAIN, MAP_MIRAGE, MAP_NUKE, MAP_OVERPASS, MAP_DUST_2, MAP_VERTIGO];
export const RESERVE_MAP_LIST = [MAP_CACHE, MAP_COBBLESTONE, MAP_CANALS, MAP_ZOO, MAP_ABBEY, MAP_BIOME];
export const HOSTAGES_MAP_LIST = [MAP_MILITIA, MAP_AGENCY, MAP_OFFICE, MAP_ITALY, MAP_ASSAULT];

export const ACTIVE_DUTY_MAP_POOL = 'Active Duty';
export const RESERVE_MAP_POOL = 'Reserve';
export const HOSTAGES_MAP_POOL = 'Hostage Rescue';
export const CUSTOM_MAP_POOL = 'Custom';

export const MAP_POOL_SET = [
  {label: ACTIVE_DUTY_MAP_POOL, value: ACTIVE_DUTY_MAP_POOL},
  {label: RESERVE_MAP_POOL, value: RESERVE_MAP_POOL},
  {label: HOSTAGES_MAP_POOL, value: HOSTAGES_MAP_POOL},
  {label: CUSTOM_MAP_POOL, value: CUSTOM_MAP_POOL},
]
