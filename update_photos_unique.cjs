const fs = require('fs');

const destinationDB = {
  'thailand': {
    title: 'Thailand Awaits',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2000&q=80',
    description: '3N Phuket | 2N Krabi | 2N Bangkok. Ex Mumbai Flight Ticket (20+7 kg). 04 Star Properties with 07 Continental Buffet Breakfast, 05 Lunch & 03 Dinner included.',
    itinerary: [
      { day: 1, title: 'Arrival & Indian Buffet Lunch', desc: 'Delicious Indian Buffet Lunch on Arrival Day 01.' },
      { day: 2, title: 'Phi Phi Island Tour', desc: 'Speedboat tour (Incl. NPF & Lunch). Includes Enroute Siam Premium Outlet Shopping Mall Visit.' },
      { day: 3, title: 'Phuket City Tour', desc: 'Full Day Phuket City Tour exploring landmarks and culture.' },
      { day: 4, title: 'Adventure Day & Thai Veg Lunch', desc: 'River Rafting, ATV Ride, Elephant Ride & Waterfall Visit with Thai Veg Lunch.' },
      { day: 5, title: '07 Island Tour', desc: 'Long Tail Boat Tour (Incl. NPF, Fruits & Dinner).' },
      { day: 6, title: 'Amusement & Water Park', desc: 'Amusement Park + Water Park (20+ Rides) incl. Lunch.' },
      { day: 7, title: 'Safari World & Cruise Party', desc: 'Safari World with Marine Park (Incl. Lunch). Evening Bangkok Cruise Party with Unlimited Beer, Mocktails & Buffet Dinner.' },
      { day: 8, title: 'Departure', desc: 'Packed Food Packet on Departure. Major Transportation by AC VIP Coach/Van.' }
    ],
    reviews: [
      { rating: 5, text: 'Amazing inclusions! The Bangkok Cruise Party and Safari World were absolute highlights.' },
      { rating: 5, text: 'Great value for money, everything was handled perfectly with our English Speaking Tour Guide.' }
    ],
    groupPhotos: [
      'https://loremflickr.com/800/600/indian,tourists?lock=11',
      'https://loremflickr.com/800/600/indian,tourists?lock=12'
    ],
    photos: [
      'https://loremflickr.com/1200/800/thailand,beach?lock=11',
      'https://loremflickr.com/1200/800/bangkok,temple?lock=12',
      'https://loremflickr.com/1200/800/phuket,island?lock=13',
      'https://loremflickr.com/1200/800/thailand,travel?lock=14'
    ]
  },
  'chardham-yatra': {
    title: 'CharDham Yatra Package',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Yamuna_at_Yamunotri.JPG',
    description: '10 Nights / 11 Days journey covering Haridwar, Yamunotri, Gangotri, Kedarnath, Badrinath, and Rishikesh.',
    itinerary: [
      { day: 1, title: 'Arrival in Haridwar/Delhi', desc: 'Pick-Up from Delhi / Haridwar. Proceed to your hotel.' },
      { day: 2, title: 'Proceed to Yamunotri', desc: '10 Nights Hotel Accommodation (Double/Triple Sharing) with Daily Breakfast & Dinner (MAPAI Plan).' },
      { day: 3, title: 'Yamunotri Darshan', desc: 'All Transfers & Sightseeing By Tempo Traveler with a Tour Manager & Experienced Driver.' },
      { day: 4, title: 'Travel to Gangotri', desc: 'Scenic drive to Uttarkashi.' },
      { day: 5, title: 'Gangotri Darshan', desc: 'Visit the holy shrine of Gangotri.' },
      { day: 6, title: 'Travel to Kedarnath Base', desc: 'Drive towards Guptkashi/Phata.' },
      { day: 7, title: 'Kedarnath Darshan', desc: 'Trek or fly to Kedarnath Temple for divine blessings.' },
      { day: 8, title: 'Travel to Badrinath', desc: 'Drive through beautiful valleys to Badrinath.' },
      { day: 9, title: 'Badrinath Darshan', desc: 'Morning darshan at Badrinath temple.' },
      { day: 10, title: 'Rishikesh Sightseeing', desc: 'Visit Rishikesh for local temples and Ganga Aarti.' },
      { day: 11, title: 'Drop Off', desc: 'Drop From Delhi / Haridwar. Parking, Toll, Taxes & Fuel Charges Included.' }
    ],
    reviews: [
      { rating: 5, text: 'Yatra Assistance & 24x7 Support was extremely helpful. Great tempo traveler!' },
      { rating: 5, text: 'The MAPAI plan food was comforting and the driver was highly experienced.' }
    ],
    groupPhotos: [
      'https://loremflickr.com/800/600/indian,tourists?lock=21',
      'https://loremflickr.com/800/600/indian,tourists?lock=22'
    ],
    photos: [
      'https://loremflickr.com/1200/800/himalayas,mountains?lock=21',
      'https://loremflickr.com/1200/800/uttarakhand,temple?lock=22',
      'https://loremflickr.com/1200/800/kedarnath,temple?lock=23',
      'https://loremflickr.com/1200/800/india,pilgrimage?lock=24'
    ]
  },
  'goa': {
    title: 'Goa',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=80',
    description: '3 Night / 4 Days Summer Special Goa Package with all transfers and sightseeing.',
    itinerary: [
      { day: 1, title: 'Arrival in Goa', desc: 'Train/Flight arrival. Pick up and transfer to your hotel. Dinner included.' },
      { day: 2, title: 'North Goa', desc: 'All Sightseeing with Gujarati Tour Guide. Visit Baga, Calangute, and Aguada Fort.' },
      { day: 3, title: 'South Goa', desc: 'Explore historic churches and relaxing beaches.' },
      { day: 4, title: 'Departure', desc: 'Breakfast and drop off at the station/airport.' }
    ],
    reviews: [
      { rating: 4, text: 'Great 4-day escape. The Gujarati tour guide was very friendly and helpful.' }
    ],
    groupPhotos: [
      'https://loremflickr.com/800/600/indian,tourists?lock=31',
      'https://loremflickr.com/800/600/indian,tourists?lock=32'
    ],
    photos: [
      'https://loremflickr.com/1200/800/goa,beach?lock=31',
      'https://loremflickr.com/1200/800/goa,ocean?lock=32',
      'https://loremflickr.com/1200/800/goa,sunset?lock=33',
      'https://loremflickr.com/1200/800/goa,palm?lock=34'
    ]
  },
  'manali-kasol': {
    title: 'Manali - Kasol',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Kasol_mountain_view.jpg',
    description: '7 Night / 8 Days Summer Special Manali-Kasol Package.',
    itinerary: [
      { day: 1, title: 'Journey Begins', desc: 'Overnight travel towards the beautiful Himachal valleys.' },
      { day: 2, title: 'Arrival in Manali', desc: 'Check in, relax, and explore the local mall road.' },
      { day: 3, title: 'Solang Valley', desc: 'Full day sightseeing including adventure snow activities.' },
      { day: 4, title: 'Kullu Sightseeing', desc: 'Explore Kullu valley and river rafting.' },
      { day: 5, title: 'Transfer to Kasol', desc: 'Travel to Kasol. Relax by the Parvati river.' },
      { day: 6, title: 'Manikaran Visit', desc: 'Visit the hot springs at Manikaran Sahib.' },
      { day: 7, title: 'Return Journey', desc: 'Start your overnight return journey.' },
      { day: 8, title: 'Arrival', desc: 'Reach your home destination with beautiful memories.' }
    ],
    reviews: [
      { rating: 5, text: 'Perfect 8-day trip. The sightseeing and transfers were flawless.' }
    ],
    groupPhotos: [
      'https://loremflickr.com/800/600/indian,tourists?lock=41',
      'https://loremflickr.com/800/600/indian,tourists?lock=42'
    ],
    photos: [
      'https://loremflickr.com/1200/800/manali,snow?lock=41',
      'https://loremflickr.com/1200/800/kasol,river?lock=42',
      'https://loremflickr.com/1200/800/himachal,mountains?lock=43',
      'https://loremflickr.com/1200/800/himalayas,valley?lock=44'
    ]
  },
  'kedarnath': {
    title: 'Kedarnath',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/1280px-Kedarnath_Temple_in_Rainy_season.jpg',
    description: '7 Night / 8 Days Summer Special Kedarnath Package with breakfast & dinner.',
    itinerary: [
      { day: 1, title: 'Arrival in Haridwar', desc: 'Start your spiritual journey from Haridwar.' },
      { day: 2, title: 'Travel to Guptkashi', desc: 'Scenic mountain drive to the base camp town.' },
      { day: 3, title: 'Trek to Kedarnath', desc: 'Trek up to the holy Kedarnath shrine.' },
      { day: 4, title: 'Kedarnath Darshan', desc: 'Morning aarti and descend back to Guptkashi.' },
      { day: 5, title: 'Rishikesh Travel', desc: 'Travel to Rishikesh and rest.' },
      { day: 6, title: 'Rishikesh Sightseeing', desc: 'Visit Ram Jhula and Lakshman Jhula.' },
      { day: 7, title: 'Return to Base', desc: 'Start the return journey.' },
      { day: 8, title: 'Departure', desc: 'Tour concludes.' }
    ],
    reviews: [
      { rating: 5, text: 'The arrangements made the difficult Kedarnath trek much easier for us.' }
    ],
    groupPhotos: [
      'https://loremflickr.com/800/600/indian,tourists?lock=51',
      'https://loremflickr.com/800/600/indian,tourists?lock=52'
    ],
    photos: [
      'https://loremflickr.com/1200/800/kedarnath,temple?lock=51',
      'https://loremflickr.com/1200/800/himalayas,snow?lock=52',
      'https://loremflickr.com/1200/800/uttarakhand,mountains?lock=53',
      'https://loremflickr.com/1200/800/india,pilgrim?lock=54'
    ]
  },
  'ayodhya-nepal': {
    title: 'Ayodhya - Nepal',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg/1280px-Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg',
    description: '10 Night / 11 Days comprehensive spiritual tour covering Ram Janmabhoomi and key Nepal destinations.',
    itinerary: [
      { day: 1, title: 'Ayodhya Arrival', desc: 'Visit Ram Janmabhoomi and local temples.' },
      { day: 2, title: 'Ayodhya to Gorakhpur', desc: 'Explore Gorakhnath Temple.' },
      { day: 3, title: 'Cross into Nepal (Lumbini)', desc: 'Visit the birthplace of Lord Buddha.' },
      { day: 4, title: 'Travel to Pokhara', desc: 'Arrive in the lake city.' },
      { day: 5, title: 'Pokhara Sightseeing', desc: 'Davis falls, Fewa lake.' },
      { day: 6, title: 'Travel to Kathmandu', desc: 'Scenic mountain drive.' },
      { day: 7, title: 'Kathmandu Tour', desc: 'Pashupatinath Temple and Swayambhunath.' },
      { day: 8, title: 'Kathmandu Local', desc: 'Explore Thamel and local markets.' },
      { day: 9, title: 'Return to Border', desc: 'Drive back towards the Indian border.' },
      { day: 10, title: 'Transit', desc: 'Train/Flight journey back.' },
      { day: 11, title: 'Home Arrival', desc: 'Tour ends.' }
    ],
    reviews: [
      { rating: 5, text: 'Fantastic combination of India and Nepal. Very well organized 11-day trip.' }
    ],
    groupPhotos: [
      'https://loremflickr.com/800/600/indian,tourists?lock=61',
      'https://loremflickr.com/800/600/indian,tourists?lock=62'
    ],
    photos: [
      'https://loremflickr.com/1200/800/ayodhya,temple?lock=61',
      'https://loremflickr.com/1200/800/nepal,mountains?lock=62',
      'https://loremflickr.com/1200/800/kathmandu,temple?lock=63',
      'https://loremflickr.com/1200/800/pokhara,lake?lock=64'
    ]
  },
  'himachal': {
    title: 'Himachal',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg/1280px-Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg',
    description: '09 Night / 10 Days Summer Special Himachal Tour covering all major hill stations.',
    itinerary: [
      { day: 1, title: 'Shimla Arrival', desc: 'Check in and explore Mall road.' },
      { day: 2, title: 'Kufri & Shimla', desc: 'Local sightseeing.' },
      { day: 3, title: 'Drive to Manali', desc: 'Enroute Kullu Valley.' },
      { day: 4, title: 'Manali Sightseeing', desc: 'Hadimba temple and Vashisht.' },
      { day: 5, title: 'Solang Valley', desc: 'Snow point and adventure activities.' },
      { day: 6, title: 'Drive to Dharamshala', desc: 'Scenic transfer.' },
      { day: 7, title: 'McLeod Ganj Tour', desc: 'Visit Dalai Lama temple.' },
      { day: 8, title: 'Dalhousie', desc: 'Drive to Dalhousie and relax.' },
      { day: 9, title: 'Khajjiar Visit', desc: 'Mini Switzerland of India.' },
      { day: 10, title: 'Departure', desc: 'Return journey begins.' }
    ],
    reviews: [
      { rating: 5, text: 'A completely immersive 10-day experience in Himachal. Loved it!' }
    ],
    groupPhotos: [
      'https://loremflickr.com/800/600/indian,tourists?lock=71',
      'https://loremflickr.com/800/600/indian,tourists?lock=72'
    ],
    photos: [
      'https://loremflickr.com/1200/800/himachal,snow?lock=71',
      'https://loremflickr.com/1200/800/dharamshala,mountains?lock=72',
      'https://loremflickr.com/1200/800/shimla,valley?lock=73',
      'https://loremflickr.com/1200/800/dalhousie,nature?lock=74'
    ]
  },
  'haridwar': {
    title: 'Haridwar',
    heroImage: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=2000&q=80',
    description: 'Special Tour Package to experience spiritual awakening at the holy ghats.',
    itinerary: [
      { day: 1, title: 'Arrival & Ganga Aarti', desc: 'Check in and witness the mesmerizing evening Ganga Aarti at Har Ki Pauri.' },
      { day: 2, title: 'Temple Tour', desc: 'Visit Mansa Devi and Chandi Devi temples via cable car.' },
      { day: 3, title: 'Departure', desc: 'Morning holy dip in the Ganges before departure.' }
    ],
    reviews: [
      { rating: 4, text: 'A deeply spiritual and well-managed experience.' }
    ],
    groupPhotos: [
      'https://loremflickr.com/800/600/indian,tourists?lock=81',
      'https://loremflickr.com/800/600/indian,tourists?lock=82'
    ],
    photos: [
      'https://loremflickr.com/1200/800/haridwar,ganges?lock=81',
      'https://loremflickr.com/1200/800/india,aarti?lock=82',
      'https://loremflickr.com/1200/800/uttarakhand,river?lock=83',
      'https://loremflickr.com/1200/800/haridwar,temple?lock=84'
    ]
  },
  'shimla-manali': {
    title: 'Shimla - Manali',
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg/1280px-Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg',
    description: 'Special Tour Package combining the best of Shimla and Manali.',
    itinerary: [
      { day: 1, title: 'Arrival in Shimla', desc: 'Explore Mall Road and The Ridge.' },
      { day: 2, title: 'Kufri Sightseeing', desc: 'Visit Kufri for horse riding and panoramic views.' },
      { day: 3, title: 'Transfer to Manali', desc: 'Scenic drive to Manali.' },
      { day: 4, title: 'Manali Tour', desc: 'Visit Solang Valley and Hadimba Temple.' },
      { day: 5, title: 'Departure', desc: 'Depart for your onward journey.' }
    ],
    reviews: [
      { rating: 5, text: 'Beautiful locations and comfortable stays throughout the trip.' }
    ],
    groupPhotos: [
      'https://loremflickr.com/800/600/indian,tourists?lock=91',
      'https://loremflickr.com/800/600/indian,tourists?lock=92'
    ],
    photos: [
      'https://loremflickr.com/1200/800/shimla,snow?lock=91',
      'https://loremflickr.com/1200/800/manali,mountains?lock=92',
      'https://loremflickr.com/1200/800/kufri,nature?lock=93',
      'https://loremflickr.com/1200/800/himachal,trees?lock=94'
    ]
  }
};

const file = './src/pages/DestinationDetails.jsx';
let content = fs.readFileSync(file, 'utf8');

const startStr = 'const destinationDB = {';
const endStr = '};\n\nconst DestinationDetails = () => {';
const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = content.slice(0, startIndex) + 'const destinationDB = ' + JSON.stringify(destinationDB, null, 2) + content.slice(endIndex);
  fs.writeFileSync(file, newContent);
  console.log('Successfully updated DestinationDetails.jsx with unique photos!');
} else {
  console.log('Could not find destinationDB boundaries.');
}
