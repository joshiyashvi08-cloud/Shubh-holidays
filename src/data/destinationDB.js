// Reusable reliable group photos
const groups = [
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80'
];

// Reusable verified destination photos
const mountains = [
  'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80',
  'https://upload.wikimedia.org/wikipedia/commons/a/a2/Kasol_mountain_view.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg/1280px-Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg/1280px-Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg',
  'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80' // Generic scenic
];

const temples = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/1280px-Kedarnath_Temple_in_Rainy_season.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/98/Yamuna_at_Yamunotri.JPG',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg/1280px-Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg',
  'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80'
];

const tropical = [
  'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581362072978-14998d01fdaa?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80'
];

export const destinationDB = {
  "thailand": {
    "title": "Thailand",
    "heroImage": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=2000&q=80",
    "description": "3N Phuket | 2N Krabi | 2N Bangkok. Ex Mumbai Flight Ticket (20+7 kg). 04 Star Properties with 07 Continental Buffet Breakfast, 05 Lunch & 03 Dinner included.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Indian Buffet Lunch",
        "desc": "Delicious Indian Buffet Lunch on Arrival Day 01."
      },
      {
        "day": 2,
        "title": "Phi Phi Island Tour",
        "desc": "Speedboat tour (Incl. NPF & Lunch). Includes Enroute Siam Premium Outlet Shopping Mall Visit."
      },
      {
        "day": 3,
        "title": "Phuket City Tour",
        "desc": "Full Day Phuket City Tour exploring landmarks and culture."
      },
      {
        "day": 4,
        "title": "Adventure Day & Thai Veg Lunch",
        "desc": "River Rafting, ATV Ride, Elephant Ride & Waterfall Visit with Thai Veg Lunch."
      },
      {
        "day": 5,
        "title": "07 Island Tour",
        "desc": "Long Tail Boat Tour (Incl. NPF, Fruits & Dinner)."
      },
      {
        "day": 6,
        "title": "Amusement & Water Park",
        "desc": "Amusement Park + Water Park (20+ Rides) incl. Lunch."
      },
      {
        "day": 7,
        "title": "Safari World & Cruise Party",
        "desc": "Safari World with Marine Park (Incl. Lunch). Evening Bangkok Cruise Party with Unlimited Beer, Mocktails & Buffet Dinner."
      },
      {
        "day": 8,
        "title": "Departure",
        "desc": "Packed Food Packet on Departure. Major Transportation by AC VIP Coach/Van."
      }
    ],
    "reviews": [
      {
        "rating": 5,
        "text": "Amazing inclusions! The Bangkok Cruise Party and Safari World were absolute highlights."
      },
      {
        "rating": 5,
        "text": "Great value for money, everything was handled perfectly with our English Speaking Tour Guide."
      }
    ],
    "groupPhotos": [
      "https://upload.wikimedia.org/wikipedia/commons/d/dd/Bangkok%2C_panor%C3%A1micas_%281998%29_10.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Wat_Benchamabophit.jpg"
    ],
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/8/81/20160220_111856_Phuket_beach_-_35782167805.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b0/Kata_beach_2.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Temple_of_the_Emerald_Buddha.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/SuperStar_Virgo_at_Phuket.jpg"
    ]
  },
  "bali": {
    "title": "Bali Getaway",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Brantan_Bali_Pura-Ulun-Danu-Bratan-01.jpg",
    "description": "7 Nights Accommodation | Daily Breakfast | Return Airfare (Singapore Airlines) | Private Transfers & Tours | Sightseeing and entry fees",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Bali",
        "desc": "Garland Welcome & Private Transfer to Hotel."
      },
      {
        "day": 2,
        "title": "Ubud & Kintamani Tour",
        "desc": "Visit beautiful rice terraces and active volcano views."
      },
      {
        "day": 3,
        "title": "Water Sports",
        "desc": "Enjoy thrilling water sports at Tanjung Benoa."
      },
      {
        "day": 4,
        "title": "Uluwatu Temple Sunset",
        "desc": "Cliff-top temple visit with stunning sunset views."
      },
      {
        "day": 5,
        "title": "Nusa Penida Island",
        "desc": "Full day tour to the pristine Nusa Penida island."
      },
      {
        "day": 6,
        "title": "Leisure Day",
        "desc": "Relax at the resort or explore local markets."
      },
      {
        "day": 7,
        "title": "Tanah Lot Temple",
        "desc": "Visit the iconic offshore temple."
      },
      {
        "day": 8,
        "title": "Departure",
        "desc": "Transfer to airport for return flight via Singapore Airlines."
      }
    ],
    "reviews": [
      {
        "rating": 5,
        "text": "The garland welcome was such a sweet touch! Perfect 7-night getaway."
      }
    ],
    "groupPhotos": [
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80"
    ],
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/0/02/Mother_Temple_of_Besakih.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Bali_Uluwatu_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Bali_banner_Rice_terraces.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Rice_terraces_on_Bali_-_Tegalalang_Rice_Terrace_-_Indonesia_06.jpg"
    ]
  },
  "chardham-yatra": {
    "title": "CharDham Yatra Package",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/9/98/Yamuna_at_Yamunotri.JPG",
    "description": "10 Nights / 11 Days journey covering Haridwar, Yamunotri, Gangotri, Kedarnath, Badrinath, and Rishikesh.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Haridwar/Delhi",
        "desc": "Pick-Up from Delhi / Haridwar. Proceed to your hotel."
      },
      {
        "day": 2,
        "title": "Proceed to Yamunotri",
        "desc": "10 Nights Hotel Accommodation (Double/Triple Sharing) with Daily Breakfast & Dinner (MAPAI Plan)."
      },
      {
        "day": 3,
        "title": "Yamunotri Darshan",
        "desc": "All Transfers & Sightseeing By Tempo Traveler with a Tour Manager & Experienced Driver."
      },
      {
        "day": 4,
        "title": "Travel to Gangotri",
        "desc": "Scenic drive to Uttarkashi."
      },
      {
        "day": 5,
        "title": "Gangotri Darshan",
        "desc": "Visit the holy shrine of Gangotri."
      },
      {
        "day": 6,
        "title": "Travel to Kedarnath Base",
        "desc": "Drive towards Guptkashi/Phata."
      },
      {
        "day": 7,
        "title": "Kedarnath Darshan",
        "desc": "Trek or fly to Kedarnath Temple for divine blessings."
      },
      {
        "day": 8,
        "title": "Travel to Badrinath",
        "desc": "Drive through beautiful valleys to Badrinath."
      },
      {
        "day": 9,
        "title": "Badrinath Darshan",
        "desc": "Morning darshan at Badrinath temple."
      },
      {
        "day": 10,
        "title": "Rishikesh Sightseeing",
        "desc": "Visit Rishikesh for local temples and Ganga Aarti."
      },
      {
        "day": 11,
        "title": "Drop Off",
        "desc": "Drop From Delhi / Haridwar. Parking, Toll, Taxes & Fuel Charges Included."
      }
    ],
    "reviews": [
      {
        "rating": 5,
        "text": "Yatra Assistance & 24x7 Support was extremely helpful. Great tempo traveler!"
      },
      {
        "rating": 5,
        "text": "The MAPAI plan food was comforting and the driver was highly experienced."
      }
    ],
    "groupPhotos": [
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Pilgrims_rescued_from_Gangotri_arrive_at_Dharasu%2C_Uttarakhand.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Haridwar%2C_pilgrims_1850s.jpg"
    ],
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Sitoli_Temple%2C_Uttarakhand.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Pari_temple_-_Moila_Bugyal_Uttarakhand.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Katarmal_Sun_Temple_in_Almora_Uttarakhand_India.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Decorated_Kedarnath_Temple_During_Chardham_Yatra.jpg"
    ]
  },
  "goa": {
    "title": "Goa",
    "heroImage": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=80",
    "description": "3 Night / 4 Days Summer Special Goa Package with all transfers and sightseeing.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Goa",
        "desc": "Train/Flight arrival. Pick up and transfer to your hotel. Dinner included."
      },
      {
        "day": 2,
        "title": "North Goa",
        "desc": "All Sightseeing with Gujarati Tour Guide. Visit Baga, Calangute, and Aguada Fort."
      },
      {
        "day": 3,
        "title": "South Goa",
        "desc": "Explore historic churches and relaxing beaches."
      },
      {
        "day": 4,
        "title": "Departure",
        "desc": "Breakfast and drop off at the station/airport."
      }
    ],
    "reviews": [
      {
        "rating": 4,
        "text": "Great 4-day escape. The Gujarati tour guide was very friendly and helpful."
      }
    ],
    "groupPhotos": [
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Goa%2C_India_--_Calangute_beach%2C_one_evening_..._before_the_tourist_deluge.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Boys_and_girls_at_Goa_beach.jpg"
    ],
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mandrem_Beach_and_Mandrem_River%2C_Mandrem%2C_Goa%2C_India_%28edit%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Goa_beach_--_Anjuna_51.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Goa_beach_--_Anjuna_4.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Goa_beach_view.jpg"
    ]
  },
  "manali-kasol": {
    "title": "Manali - Kasol",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Kasol_mountain_view.jpg",
    "description": "7 Night / 8 Days Summer Special Manali-Kasol Package.",
    "itinerary": [
      {
        "day": 1,
        "title": "Journey Begins",
        "desc": "Overnight travel towards the beautiful Himachal valleys."
      },
      {
        "day": 2,
        "title": "Arrival in Manali",
        "desc": "Check in, relax, and explore the local mall road."
      },
      {
        "day": 3,
        "title": "Solang Valley",
        "desc": "Full day sightseeing including adventure snow activities."
      },
      {
        "day": 4,
        "title": "Kullu Sightseeing",
        "desc": "Explore Kullu valley and river rafting."
      },
      {
        "day": 5,
        "title": "Transfer to Kasol",
        "desc": "Travel to Kasol. Relax by the Parvati river."
      },
      {
        "day": 6,
        "title": "Manikaran Visit",
        "desc": "Visit the hot springs at Manikaran Sahib."
      },
      {
        "day": 7,
        "title": "Return Journey",
        "desc": "Start your overnight return journey."
      },
      {
        "day": 8,
        "title": "Arrival",
        "desc": "Reach your home destination with beautiful memories."
      }
    ],
    "reviews": [
      {
        "rating": 5,
        "text": "Perfect 8-day trip. The sightseeing and transfers were flawless."
      }
    ],
    "groupPhotos": [
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Manali-Hidimba-Devi-Tempel-50-Maedchen-2016-gje.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Yaks_on_Manali%2C_Himachal_Pradesh.jpg"
    ],
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Kasol_mountain_view.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/da/Beas_River_in_Manali-_Serene_Waters_and_Majestic_Himalayan_Views.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Paragliding_in_Solang_valley.jpg"
    ]
  },
  "kedarnath": {
    "title": "Kedarnath",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/1280px-Kedarnath_Temple_in_Rainy_season.jpg",
    "description": "7 Night / 8 Days Summer Special Kedarnath Package with breakfast & dinner.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Haridwar",
        "desc": "Start your spiritual journey from Haridwar."
      },
      {
        "day": 2,
        "title": "Travel to Guptkashi",
        "desc": "Scenic mountain drive to the base camp town."
      },
      {
        "day": 3,
        "title": "Trek to Kedarnath",
        "desc": "Trek up to the holy Kedarnath shrine."
      },
      {
        "day": 4,
        "title": "Kedarnath Darshan",
        "desc": "Morning aarti and descend back to Guptkashi."
      },
      {
        "day": 5,
        "title": "Rishikesh Travel",
        "desc": "Travel to Rishikesh and rest."
      },
      {
        "day": 6,
        "title": "Rishikesh Sightseeing",
        "desc": "Visit Ram Jhula and Lakshman Jhula."
      },
      {
        "day": 7,
        "title": "Return to Base",
        "desc": "Start the return journey."
      },
      {
        "day": 8,
        "title": "Departure",
        "desc": "Tour concludes."
      }
    ],
    "reviews": [
      {
        "rating": 5,
        "text": "The arrangements made the difficult Kedarnath trek much easier for us."
      }
    ],
    "groupPhotos": [
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/A_breathtaking_view_of_the_Kedarnath_Temple_during_the_2026_pilgrimage_season.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/98/A_helicopter_taking_pilgrims_to_kedarnath.jpg"
    ],
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Kedarnath_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Kedarnath_Temple_Tour.png",
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Kedarnath_Statue_Temple_Pachali_Teku_Kathmandu_Nepal_Rajesh_Dhungana.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Kedarnath_temple_1880%27s.jpg"
    ]
  },
  "ayodhya-nepal": {
    "title": "Ayodhya - Nepal",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg/1280px-Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg",
    "description": "10 Night / 11 Days comprehensive spiritual tour covering Ram Janmabhoomi and key Nepal destinations.",
    "itinerary": [
      {
        "day": 1,
        "title": "Ayodhya Arrival",
        "desc": "Visit Ram Janmabhoomi and local temples."
      },
      {
        "day": 2,
        "title": "Ayodhya to Gorakhpur",
        "desc": "Explore Gorakhnath Temple."
      },
      {
        "day": 3,
        "title": "Cross into Nepal (Lumbini)",
        "desc": "Visit the birthplace of Lord Buddha."
      },
      {
        "day": 4,
        "title": "Travel to Pokhara",
        "desc": "Arrive in the lake city."
      },
      {
        "day": 5,
        "title": "Pokhara Sightseeing",
        "desc": "Davis falls, Fewa lake."
      },
      {
        "day": 6,
        "title": "Travel to Kathmandu",
        "desc": "Scenic mountain drive."
      },
      {
        "day": 7,
        "title": "Kathmandu Tour",
        "desc": "Pashupatinath Temple and Swayambhunath."
      },
      {
        "day": 8,
        "title": "Kathmandu Local",
        "desc": "Explore Thamel and local markets."
      },
      {
        "day": 9,
        "title": "Return to Border",
        "desc": "Drive back towards the Indian border."
      },
      {
        "day": 10,
        "title": "Transit",
        "desc": "Train/Flight journey back."
      },
      {
        "day": 11,
        "title": "Home Arrival",
        "desc": "Tour ends."
      }
    ],
    "reviews": [
      {
        "rating": 5,
        "text": "Fantastic combination of India and Nepal. Very well organized 11-day trip."
      }
    ],
    "groupPhotos": [
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Glimpses_of_Pran_Pratishtha_ceremony_of_Shree_Ram_Janmaboomi_Temple_in_Ayodhya%2C_Uttar_Pradesh_on_January_22%2C_2024.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Saryu_River_Bank%2C_Ayodhya%2C_Faizabad%2C_%28U.P.%29%2C_India..JPG"
    ],
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/6/62/Ayodhya_unknown_temple_in_ruins%2C_ayodhya%2C_joykrishnapur_bankura.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Pran_Pratishtha_ceremony_of_Shree_Ram_Janmaboomi_Temple_in_Ayodhya%2C_Uttar_Pradesh_on_January_22%2C_2024.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/df/Ayodhya_city_at_night.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/PM_at_the_Pran_Pratishtha_ceremony_of_Shree_Ram_Janmaboomi_Temple_in_Ayodhya%2C_Uttar_Pradesh_on_January_22%2C_2024_20240122150990.jpg"
    ]
  },
  "himachal": {
    "title": "Himachal",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg/1280px-Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg",
    "description": "09 Night / 10 Days Summer Special Himachal Tour covering all major hill stations.",
    "itinerary": [
      {
        "day": 1,
        "title": "Shimla Arrival",
        "desc": "Check in and explore Mall road."
      },
      {
        "day": 2,
        "title": "Kufri & Shimla",
        "desc": "Local sightseeing."
      },
      {
        "day": 3,
        "title": "Drive to Manali",
        "desc": "Enroute Kullu Valley."
      },
      {
        "day": 4,
        "title": "Manali Sightseeing",
        "desc": "Hadimba temple and Vashisht."
      },
      {
        "day": 5,
        "title": "Solang Valley",
        "desc": "Snow point and adventure activities."
      },
      {
        "day": 6,
        "title": "Drive to Dharamshala",
        "desc": "Scenic transfer."
      },
      {
        "day": 7,
        "title": "McLeod Ganj Tour",
        "desc": "Visit Dalai Lama temple."
      },
      {
        "day": 8,
        "title": "Dalhousie",
        "desc": "Drive to Dalhousie and relax."
      },
      {
        "day": 9,
        "title": "Khajjiar Visit",
        "desc": "Mini Switzerland of India."
      },
      {
        "day": 10,
        "title": "Departure",
        "desc": "Return journey begins."
      }
    ],
    "reviews": [
      {
        "rating": 5,
        "text": "A completely immersive 10-day experience in Himachal. Loved it!"
      }
    ],
    "groupPhotos": [
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Tourists_at_the_Christ_Church_in_Shimla%2C_in_Himachal_Pradesh%2C_photographed_by_Yogabrata_Chakraborty%2C_on_May_28%2C_2023.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Rohtang_pass_-_Manali_-_80%2C000%2B_views._%282536920618%29.jpg"
    ],
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Spiti_River_Kaza_Himachal_Jun18_D72_7232.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Darcha_Padum_Road_Below_Shinku_La_Lahaul_Oct22_A7C_03533.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Keylong_West_Lahaul_Himachal_Oct22_A7C_03375_panorama.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Orchards_in_snow%2C_Sangla%2C_Himachal_Pradesh%2C_India.jpg"
    ]
  },
  "haridwar": {
    "title": "Haridwar",
    "heroImage": "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=2000&q=80",
    "description": "Special Tour Package to experience spiritual awakening at the holy ghats.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival & Ganga Aarti",
        "desc": "Check in and witness the mesmerizing evening Ganga Aarti at Har Ki Pauri."
      },
      {
        "day": 2,
        "title": "Temple Tour",
        "desc": "Visit Mansa Devi and Chandi Devi temples via cable car."
      },
      {
        "day": 3,
        "title": "Departure",
        "desc": "Morning holy dip in the Ganges before departure."
      }
    ],
    "reviews": [
      {
        "rating": 4,
        "text": "A deeply spiritual and well-managed experience."
      }
    ],
    "groupPhotos": [
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Ganga_Aarti_in_Haridwar.png",
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Ganga_arathi.jpg"
    ],
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Head_of_Ganges_Canal%2C_Haridwar%2C_1894-1898.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/38/Haridwar_india_ganges_leaving_mountains2008.jjpg.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Haridwar.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/River_Ganges_near_Haridwar.jpg"
    ]
  },
  "shimla-manali": {
    "title": "Shimla - Manali",
    "heroImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg/1280px-Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg",
    "description": "Special Tour Package combining the best of Shimla and Manali.",
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Shimla",
        "desc": "Explore Mall Road and The Ridge."
      },
      {
        "day": 2,
        "title": "Kufri Sightseeing",
        "desc": "Visit Kufri for horse riding and panoramic views."
      },
      {
        "day": 3,
        "title": "Transfer to Manali",
        "desc": "Scenic drive to Manali."
      },
      {
        "day": 4,
        "title": "Manali Tour",
        "desc": "Visit Solang Valley and Hadimba Temple."
      },
      {
        "day": 5,
        "title": "Departure",
        "desc": "Depart for your onward journey."
      }
    ],
    "reviews": [
      {
        "rating": 5,
        "text": "Beautiful locations and comfortable stays throughout the trip."
      }
    ],
    "groupPhotos": [
      "https://upload.wikimedia.org/wikipedia/commons/d/df/Tourists_-_Mall_Road_-_Shimla_2014-05-07_1241.JPG",
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Tourist_on_Horse_-_Kufri_2014-05-08_1716.JPG"
    ],
    "photos": [
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Shimla_snow.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Shimla_during_snow.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Shivaliks_Himalayas_Aerial_Dehaze_Himachal_Feb20_R16_02827.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Shimla_in_snow.jpg"
    ]
  }
};
