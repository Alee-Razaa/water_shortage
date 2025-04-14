export const sindhWaterData = {
  regions: [
    {
      id: 1,
      name: "Tharparkar",
      waterStatus: "critical", // critical, high, moderate, low
      annualRainfall: 150, // in mm
      groundwaterLevel: 50, // meters below surface
      populationAffected: 1500000,
      rainfallData: [
        { year: 2018, rainfall: 120 },
        { year: 2019, rainfall: 90 },
        { year: 2020, rainfall: 110 },
        { year: 2021, rainfall: 140 },
        { year: 2022, rainfall: 100 },
      ],
      solutions: [
        {
          title: "Rainwater harvesting",
          description: "Install rooftop collection systems",
          cost: "Medium",
          impact: "High",
        },
        {
          title: "Check dams",
          description: "Construct small dams to retain rainwater",
          cost: "High",
          impact: "Very High",
        },
      ],
      ngos: [
        {
          name: "Thar Foundation",
          contact: "info@tharfoundation.org",
          focus: "Water and food security",
        },
        {
          name: "HANDS Pakistan",
          contact: "water@hands.org.pk",
          focus: "Community water solutions",
        },
      ],
      coordinates: [24.8, 70.2], // Latitude, Longitude for map
    },
    {
      id: 2,
      name: "Badin",
      waterStatus: "high",
      annualRainfall: 250,
      groundwaterLevel: 25,
      populationAffected: 800000,
      rainfallData: [
        { year: 2018, rainfall: 220 },
        { year: 2019, rainfall: 240 },
        { year: 2020, rainfall: 180 },
        { year: 2021, rainfall: 260 },
        { year: 2022, rainfall: 230 },
      ],
      solutions: [
        {
          title: "Canal maintenance",
          description: "Improve irrigation canal efficiency",
          cost: "Medium",
          impact: "High",
        },
      ],
      ngos: [
        {
          name: "WWF Pakistan",
          contact: "indus@wwf.org.pk",
          focus: "Water conservation",
        },
      ],
      coordinates: [24.6, 68.8],
    },
    // Additional regions can be added here
  ],
};
