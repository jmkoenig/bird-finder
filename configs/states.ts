export interface IState {
  name: string,
  prettyName: string,
  abbreviation: string
}

export type StateKey =
  'alabama' |
  'alaska' |
  'arizona' |
  'arkansas' |
  'california' |
  'colorado' |
  'connecticut' |
  'delaware' |
  'district-of-columbia' |
  'florida' |
  'georgia' |
  'hawaii' |
  'idaho' |
  'illinois' |
  'indiana' |
  'iowa' |
  'kansas' |
  'kentucky' |
  'louisiana' |
  'maine' |
  'maryland' |
  'massachusetts' |
  'michigan' |
  'minnesota' |
  'mississippi' |
  'missouri' |
  'montana' |
  'nebraska' |
  'nevada' |
  'new-hampshire' |
  'new-jersey' |
  'new-mexico' |
  'new-york' |
  'north-carolina' |
  'north-dakota' |
  'ohio' |
  'oklahoma' |
  'oregon' |
  'pennsylvania' |
  'rhode-island' |
  'south-carolina' |
  'south-dakota' |
  'tennessee' |
  'texas' |
  'utah' |
  'vermont' |
  'virginia' |
  'washington' |
  'west-virginia' |
  'wisconsin' |
  'wyoming';

export const states: Record<StateKey, IState> = {
  alabama: {
    name: 'alabama',
    prettyName: 'Alabama',
    abbreviation: 'AL'
  },
  alaska: {
    name: 'alaska',
    prettyName: 'Alaska',
    abbreviation: 'AK'
  },
  arizona: {
    name: 'arizona',
    prettyName: 'Arizona',
    abbreviation: 'AZ'
  },
  arkansas: {
    name: 'arkansas',
    prettyName: 'Arkansas',
    abbreviation: 'AR'
  },
  california: {
    name: 'california',
    prettyName: 'California',
    abbreviation: 'CA'
  },
  colorado: {
    name: 'colorado',
    prettyName: 'Colorado',
    abbreviation: 'CO'
  },
  connecticut: {
    name: 'connecticut',
    prettyName: 'Connecticut',
    abbreviation: 'CT'
  },
  delaware: {
    name: 'delaware',
    prettyName: 'Delaware',
    abbreviation: 'DE'
  },
  'district-of-columbia': {
    name: 'district-of-columbia',
    prettyName: 'District of Columbia',
    abbreviation: 'DC'
  },
  florida: {
    name: 'florida',
    prettyName: 'Florida',
    abbreviation: 'FL'
  },
  georgia: {
    name: 'georgia',
    prettyName: 'Georgia',
    abbreviation: 'GA'
  },
  hawaii: {
    name: 'hawaii',
    prettyName: 'Hawaii',
    abbreviation: 'HI'
  },
  idaho: {
    name: 'idaho',
    prettyName: 'Idaho',
    abbreviation: 'ID'
  },
  illinois: {
    name: 'illinois',
    prettyName: 'Illinois',
    abbreviation: 'IL'
  },
  indiana: {
    name: 'indiana',
    prettyName: 'Indiana',
    abbreviation: 'IN'
  },
  iowa: {
    name: 'iowa',
    prettyName: 'Iowa',
    abbreviation: 'IA'
  },
  kansas: {
    name: 'kansas',
    prettyName: 'Kansas',
    abbreviation: 'KS'
  },
  kentucky: {
    name: 'kentucky',
    prettyName: 'Kentucky',
    abbreviation: 'KY'
  },
  louisiana: {
    name: 'louisiana',
    prettyName: 'Louisiana',
    abbreviation: 'LA'
  },
  maine: {
    name: 'maine',
    prettyName: 'Maine',
    abbreviation: 'ME'
  },
  maryland: {
    name: 'maryland',
    prettyName: 'Maryland',
    abbreviation: 'MD'
  },
  massachusetts: {
    name: 'massachusetts',
    prettyName: 'Massachusetts',
    abbreviation: 'MA'
  },
  michigan: {
    name: 'michigan',
    prettyName: 'Michigan',
    abbreviation: 'MI'
  },
  minnesota: {
    name: 'minnesota',
    prettyName: 'Minnesota',
    abbreviation: 'MN'
  },
  mississippi: {
    name: 'mississippi',
    prettyName: 'Mississippi',
    abbreviation: 'MS'
  },
  missouri: {
    name: 'missouri',
    prettyName: 'Missouri',
    abbreviation: 'MO'
  },
  montana: {
    name: 'montana',
    prettyName: 'Montana',
    abbreviation: 'MT'
  },
  nebraska: {
    name: 'nebraska',
    prettyName: 'Nebraska',
    abbreviation: 'NE'
  },
  nevada: {
    name: 'nevada',
    prettyName: 'Nevada',
    abbreviation: 'NV'
  },
  'new-hampshire': {
    name: 'new-hampshire',
    prettyName: 'New Hampshire',
    abbreviation: 'NH'
  },
  'new-jersey': {
    name: 'new-jersey',
    prettyName: 'New Jersey',
    abbreviation: 'NJ'
  },
  'new-mexico': {
    name: 'new-mexico',
    prettyName: 'New Mexico',
    abbreviation: 'NM'
  },
  'new-york': {
    name: 'new-york',
    prettyName: 'New York',
    abbreviation: 'NY'
  },
  'north-carolina': {
    name: 'north-carolina',
    prettyName: 'North Carolina',
    abbreviation: 'NC'
  },
  'north-dakota': {
    name: 'north-dakota',
    prettyName: 'North Dakota',
    abbreviation: 'ND'
  },
  ohio: {
    name: 'ohio',
    prettyName: 'Ohio',
    abbreviation: 'OH'
  },
  oklahoma: {
    name: 'oklahoma',
    prettyName: 'Oklahoma',
    abbreviation: 'OK'
  },
  oregon: {
    name: 'oregon',
    prettyName: 'Oregon',
    abbreviation: 'OR'
  },
  pennsylvania: {
    name: 'pennsylvania',
    prettyName: 'Pennsylvania',
    abbreviation: 'PA'
  },
  'rhode-island': {
    name: 'rhode-island',
    prettyName: 'Rhode Island',
    abbreviation: 'RI'
  },
  'south-carolina': {
    name: 'south-carolina',
    prettyName: 'South Carolina',
    abbreviation: 'SC'
  },
  'south-dakota': {
    name: 'south-dakota',
    prettyName: 'South Dakota',
    abbreviation: 'SD'
  },
  tennessee: {
    name: 'tennessee',
    prettyName: 'Tennessee',
    abbreviation: 'TN'
  },
  texas: {
    name: 'texas',
    prettyName: 'Texas',
    abbreviation: 'TX'
  },
  utah: {
    name: 'utah',
    prettyName: 'Utah',
    abbreviation: 'UT'
  },
  vermont: {
    name: 'vermont',
    prettyName: 'Vermont',
    abbreviation: 'VE'
  },
  virginia: {
    name: 'virginia',
    prettyName: 'Virginia',
    abbreviation: 'VA'
  },
  washington: {
    name: 'washington',
    prettyName: 'Washington',
    abbreviation: 'WA'
  },
  'west-virginia': {
    name: 'west-virginia',
    prettyName: 'West Virginia',
    abbreviation: 'WV'
  },
  wisconsin: {
    name: 'wisconsin',
    prettyName: 'Wisconsin',
    abbreviation: 'WI'
  },
  wyoming: {
    name: 'wyoming',
    prettyName: 'Wyoming',
    abbreviation: 'WY'
  }
};
