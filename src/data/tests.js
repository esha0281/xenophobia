// Possible test (each with compatible targets to category data)

const tests = [
  {
    id: 'power-happiness',
    name: 'Power happiness bias test',
    description: 'Find bias between power and happiness level.',
    targetType: 'power',
    categoryType: 'happiness',
    compatible: {
      'south_african': 'good_person',
      'african': 'bad_person'
    },
    
  }
]

export default tests;
