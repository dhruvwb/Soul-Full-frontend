import goldenTriangle from "../assets/Golden Triangle.jpg";
import rajasthanHeritage from "../assets/Rajasthan Heritage.jpg";
import keralaBackwaters from "../assets/Kerala Backwaters.jpg";
import kashmir from "../assets/Kashmir.jpg";
import darjeeling from "../assets/darjeeling.webp";
import uttarakhand from "../assets/Uttarakhand.jpg";
import goa from "../assets/Goa.jpg";
import himachal from "../assets/Himachal.jpg";

const popularPackageTours = {
  /* ───────────────────── 1. Golden Triangle Classic ───────────────────── */
  "golden-triangle-classic": {
    title: "Golden Triangle Classic",
    slug: "golden-triangle-classic",
    bannerImage: goldenTriangle,
    duration: "6 Nights / 7 Days",
    price: "₹79,999",
    location: "Delhi – Agra – Jaipur",
    shortDescription:
      "Delhi, Agra, and Jaipur in one seamless luxury circuit — the ultimate introduction to India's heritage.",
    description: `
      <p>The <strong>Golden Triangle Classic</strong> is India's most beloved travel route, connecting three legendary cities — <strong>Delhi</strong>, <strong>Agra</strong>, and <strong>Jaipur</strong>. This journey traces a triangle on the map and unfolds centuries of Mughal grandeur, Rajput royalty, and vibrant modern culture.</p>
      <p>Begin in <strong>Delhi</strong>, where the narrow lanes of Old Delhi contrast with the wide boulevards of Lutyens' New Delhi. Explore the Red Fort, Jama Masjid, India Gate, Qutub Minar, and Humayun's Tomb.</p>
      <p>Next, travel to <strong>Agra</strong> to witness the breathtaking <strong>Taj Mahal</strong> at sunrise, visit Agra Fort, and explore the ghost city of Fatehpur Sikri.</p>
      <p>End in <strong>Jaipur</strong>, the Pink City, where massive forts, ornate palaces, and colourful bazaars transport you to the age of maharajas. Visit Amber Fort, Hawa Mahal, City Palace, and Jantar Mantar.</p>
      <p>With Soulful India Tours, enjoy expert local guides, luxury accommodation, and seamless private transfers throughout.</p>
    `,
    highlights: `
      <ul>
        <li>Sunrise visit to the Taj Mahal in Agra</li>
        <li>Heritage rickshaw ride through Old Delhi's Chandni Chowk</li>
        <li>Jeep ride up to the majestic Amber Fort in Jaipur</li>
        <li>Explore Fatehpur Sikri — the abandoned Mughal capital</li>
        <li>Shop for traditional handicrafts and gemstones in Jaipur's bazaars</li>
        <li>Visit three UNESCO World Heritage Sites</li>
        <li>Rajasthani dinner with live folk dance performance</li>
        <li>Private 4-star boutique stays throughout</li>
      </ul>
    `,
    itinerary: `
      <h3>Day 1 – Arrival in Delhi</h3>
      <p>Arrive at Indira Gandhi International Airport. Private transfer to your hotel. Evening at leisure to explore Connaught Place. Overnight in Delhi.</p>

      <h3>Day 2 – Delhi Sightseeing</h3>
      <p><strong>Morning:</strong> Red Fort, Jama Masjid, rickshaw ride through Chandni Chowk, street food at Paranthe Wali Gali.</p>
      <p><strong>Afternoon:</strong> India Gate, Humayun's Tomb, Qutub Minar. Evening at leisure. Overnight in Delhi.</p>

      <h3>Day 3 – Delhi to Agra (230 km, ~4 hrs)</h3>
      <p><strong>Morning:</strong> Drive to Agra via the Yamuna Expressway.</p>
      <p><strong>Afternoon:</strong> Visit Agra Fort. Sunset views of Taj Mahal from Mehtab Bagh. Overnight in Agra.</p>

      <h3>Day 4 – Agra to Jaipur via Fatehpur Sikri (240 km, ~5 hrs)</h3>
      <p><strong>Early Morning:</strong> Sunrise at the Taj Mahal.</p>
      <p><strong>Late Morning:</strong> Drive to Jaipur stopping at Fatehpur Sikri — Buland Darwaza, Panch Mahal, Tomb of Salim Chishti.</p>
      <p><strong>Evening:</strong> Arrive in Jaipur. Overnight.</p>

      <h3>Day 5 – Jaipur Sightseeing</h3>
      <p><strong>Morning:</strong> Amber Fort (jeep ride). Jal Mahal photo stop.</p>
      <p><strong>Afternoon:</strong> City Palace, Jantar Mantar, Hawa Mahal. Evening bazaar shopping at Johari Bazaar.</p>
      <p><strong>Night:</strong> Rajasthani cultural dinner with folk music and dance. Overnight in Jaipur.</p>

      <h3>Day 6 – Jaipur at Leisure</h3>
      <p>Optional visit to Nahargarh Fort for panoramic views. Shopping for block-printed textiles, blue pottery, and gemstones. Overnight in Jaipur.</p>

      <h3>Day 7 – Departure</h3>
      <p>Transfer to Jaipur Airport or drive back to Delhi (270 km, ~5 hrs). Tour concludes.</p>
    `,
    inclusions: `
      <ul>
        <li>6 nights in handpicked boutique / 4-star hotels</li>
        <li>Daily breakfast</li>
        <li>Private AC vehicle for all transfers and sightseeing</li>
        <li>English-speaking local guides in each city</li>
        <li>All monument entrance fees</li>
        <li>Sunrise Taj Mahal visit</li>
        <li>Amber Fort jeep ride</li>
        <li>Rajasthani cultural dinner</li>
        <li>All applicable taxes</li>
      </ul>
    `,
    exclusions: `
      <ul>
        <li>Airfare</li>
        <li>Lunch and dinner (except cultural dinner)</li>
        <li>Personal expenses, tips, and laundry</li>
        <li>Travel insurance</li>
        <li>Camera fees at monuments</li>
      </ul>
    `,
    metaTitle: "Golden Triangle Classic Tour | Delhi Agra Jaipur | Soulful India Tours",
    metaDescription:
      "Book the Golden Triangle Classic — Delhi, Agra & Jaipur. Sunrise Taj Mahal, Amber Fort, heritage walks & luxury stays with Soulful India Tours."
  },

  /* ───────────────────── 2. Royal Rajasthan Heritage ───────────────────── */
  "royal-rajasthan-heritage": {
    title: "Royal Rajasthan Heritage",
    slug: "royal-rajasthan-heritage",
    bannerImage: rajasthanHeritage,
    duration: "7 Nights / 8 Days",
    price: "₹89,999",
    location: "Jaipur – Jodhpur – Udaipur",
    shortDescription:
      "Palaces, forts, and desert sunsets across royal Rajasthan — a journey through the land of kings.",
    description: `
      <p>The <strong>Royal Rajasthan Heritage</strong> tour takes you through three of Rajasthan's most magnificent cities — <strong>Jaipur</strong>, <strong>Jodhpur</strong>, and <strong>Udaipur</strong>. Experience the regal grandeur of palace hotels, mighty desert forts, shimmering lakes, and vibrant bazaars.</p>
      <p>Start in <strong>Jaipur</strong>, the Pink City, where Amber Fort, City Palace, and Hawa Mahal tell tales of Rajput glory. Drive through the Thar Desert to <strong>Jodhpur</strong>, the Blue City, dominated by the towering Mehrangarh Fort — one of India's most impressive.</p>
      <p>End in <strong>Udaipur</strong>, the City of Lakes, where marble palaces float on shimmering waters and narrow alleys hide artisan workshops. Enjoy a sunset boat cruise on Lake Pichola and explore the massive City Palace.</p>
      <p>Stay in heritage properties that were once royal residences, dine under the stars in desert camps, and witness colourful folk performances that bring Rajasthan's living traditions to life.</p>
    `,
    highlights: `
      <ul>
        <li>Stay in converted heritage palaces and havelis</li>
        <li>Explore the magnificent Mehrangarh Fort in Jodhpur</li>
        <li>Sunset boat cruise on Lake Pichola, Udaipur</li>
        <li>Camel safari and dinner under the stars near Jodhpur</li>
        <li>Amber Fort — jeep ascent with panoramic views</li>
        <li>Shop for Rajasthani textiles, miniature paintings, and silver jewellery</li>
        <li>Evening folk music and dance performances</li>
        <li>Explore the blue-washed lanes of Jodhpur's old city</li>
      </ul>
    `,
    itinerary: `
      <h3>Day 1 – Arrival in Jaipur</h3>
      <p>Arrive at Jaipur Airport. Transfer to your heritage hotel. Evening walk through the colourful markets near Hawa Mahal. Overnight in Jaipur.</p>

      <h3>Day 2 – Jaipur Sightseeing</h3>
      <p><strong>Morning:</strong> Amber Fort (jeep ride), Jal Mahal photo stop.</p>
      <p><strong>Afternoon:</strong> City Palace, Jantar Mantar, Hawa Mahal. Evening visit to Nahargarh Fort for sunset panoramic views. Overnight in Jaipur.</p>

      <h3>Day 3 – Jaipur to Jodhpur (335 km, ~6 hrs)</h3>
      <p>Drive through the semi-arid landscape to Jodhpur. En route, stop at the stunning Ajmer Sharif Dargah or Pushkar (optional).</p>
      <p><strong>Evening:</strong> Arrive in Jodhpur. Walk around the Clock Tower market. Overnight in Jodhpur.</p>

      <h3>Day 4 – Jodhpur Sightseeing</h3>
      <p><strong>Morning:</strong> Explore the majestic Mehrangarh Fort — museum, ramparts, and panoramic city views. Visit Jaswant Thada.</p>
      <p><strong>Afternoon:</strong> Walk through the blue lanes of the old city. Visit Umaid Bhawan Palace Museum.</p>
      <p><strong>Evening:</strong> Camel safari followed by dinner under the stars at a desert camp. Overnight in Jodhpur.</p>

      <h3>Day 5 – Jodhpur to Udaipur via Ranakpur (275 km, ~5 hrs)</h3>
      <p>Drive to Udaipur. Stop at the exquisite Ranakpur Jain Temples — 1,444 intricately carved marble pillars, each unique.</p>
      <p><strong>Evening:</strong> Arrive in Udaipur. Evening at leisure along Lake Pichola. Overnight in Udaipur.</p>

      <h3>Day 6 – Udaipur Sightseeing</h3>
      <p><strong>Morning:</strong> City Palace — Rajasthan's largest palace complex with museums, courtyards, and lake views.</p>
      <p><strong>Afternoon:</strong> Saheliyon-ki-Bari, Jagdish Temple, and Bagore ki Haveli (evening cultural dance show).</p>
      <p><strong>Sunset:</strong> Boat cruise on Lake Pichola with views of Lake Palace and Jag Mandir. Overnight in Udaipur.</p>

      <h3>Day 7 – Udaipur at Leisure</h3>
      <p>Free day for shopping — miniature paintings, silver jewellery, and handloom textiles. Optional visit to Sajjangarh (Monsoon Palace) for hilltop views. Farewell dinner at a lakeside restaurant. Overnight in Udaipur.</p>

      <h3>Day 8 – Departure</h3>
      <p>Transfer to Udaipur Airport. Tour ends with royal memories of Rajasthan.</p>
    `,
    inclusions: `
      <ul>
        <li>7 nights in heritage palace hotels and havelis</li>
        <li>Daily breakfast + dinner</li>
        <li>Private AC vehicle for all transfers</li>
        <li>English-speaking guides in each city</li>
        <li>All monument and fort entrance fees</li>
        <li>Amber Fort jeep ride</li>
        <li>Camel safari with desert dinner</li>
        <li>Lake Pichola boat cruise</li>
        <li>Cultural folk performances</li>
        <li>All applicable taxes</li>
      </ul>
    `,
    exclusions: `
      <ul>
        <li>Airfare</li>
        <li>Lunch</li>
        <li>Personal expenses, tips</li>
        <li>Travel insurance</li>
        <li>Shopping expenses</li>
      </ul>
    `,
    metaTitle: "Royal Rajasthan Heritage Tour | Jaipur Jodhpur Udaipur | Soulful India Tours",
    metaDescription:
      "Experience the Royal Rajasthan Heritage tour — Jaipur, Jodhpur & Udaipur. Palace stays, Mehrangarh Fort, desert safari & Lake Pichola with Soulful India Tours."
  },

  /* ───────────────────── 3. Serene Kerala Backwaters ───────────────────── */
  "serene-kerala-backwaters": {
    title: "Serene Kerala Backwaters",
    slug: "serene-kerala-backwaters",
    bannerImage: keralaBackwaters,
    duration: "5 Nights / 6 Days",
    price: "₹69,999",
    location: "Cochin – Munnar – Alleppey",
    shortDescription:
      "Houseboats, spice trails, and lush greenery in God's Own Country — Kerala at its finest.",
    description: `
      <p>The <strong>Serene Kerala Backwaters</strong> tour immerses you in the tropical paradise of <strong>Kerala</strong> — palm-fringed canals, misty tea plantations, aromatic spice gardens, and one of the world's most relaxing houseboat experiences.</p>
      <p>Begin in <strong>Cochin</strong> (Kochi), a historic port city where Chinese fishing nets, colonial churches, and spice warehouses line the harbour. Experience a traditional Kathakali performance.</p>
      <p>Travel to <strong>Munnar</strong>, nestled in the Western Ghats at 1,600 m altitude. Walk through endless carpets of tea plantations, visit spice gardens, and spot exotic wildlife at Eravikulam National Park.</p>
      <p>Conclude in <strong>Alleppey</strong> (Alappuzha) aboard a private houseboat, drifting through Kerala's famous backwater canals while savouring freshly prepared Kerala cuisine. Add an Ayurvedic massage for the ultimate relaxation.</p>
    `,
    highlights: `
      <ul>
        <li>Private houseboat cruise through Kerala's backwater canals</li>
        <li>Tea plantation walk and tasting in Munnar</li>
        <li>Spice garden tour — cardamom, pepper, cinnamon, vanilla</li>
        <li>Kathakali classical dance performance in Kochi</li>
        <li>Chinese fishing nets and Fort Kochi heritage walk</li>
        <li>Eravikulam National Park — home of the Nilgiri Tahr</li>
        <li>Freshly prepared Kerala meals on the houseboat</li>
        <li>Optional Ayurvedic wellness session</li>
      </ul>
    `,
    itinerary: `
      <h3>Day 1 – Arrival in Cochin</h3>
      <p>Arrive at Cochin International Airport. Transfer to your hotel in Fort Kochi.</p>
      <p><strong>Evening:</strong> Walk along the harbour to see the Chinese fishing nets at sunset. Visit St. Francis Church and Mattancherry Palace. Attend a Kathakali dance performance. Overnight in Kochi.</p>

      <h3>Day 2 – Cochin to Munnar (130 km, ~4 hrs)</h3>
      <p>Drive to Munnar through the Western Ghats. Stop at Cheeyappara and Valara waterfalls en route.</p>
      <p><strong>Afternoon:</strong> Visit a spice plantation — learn about cardamom, pepper, cinnamon, and vanilla cultivation. Overnight in Munnar.</p>

      <h3>Day 3 – Munnar Sightseeing</h3>
      <p><strong>Morning:</strong> Explore the Tea Museum. Walk through the rolling tea plantations with a guide. Tea tasting session.</p>
      <p><strong>Afternoon:</strong> Visit Eravikulam National Park (home of the endangered Nilgiri Tahr). Drive to Top Station or Echo Point for panoramic views. Overnight in Munnar.</p>

      <h3>Day 4 – Munnar to Alleppey (175 km, ~5 hrs)</h3>
      <p>Scenic drive down from the hills to Alleppey (Alappuzha). Board your private houseboat.</p>
      <p><strong>Afternoon onwards:</strong> Cruise through palm-fringed canals, rice paddies, and tiny villages. Freshly cooked Kerala lunch and dinner served on board. Overnight on the houseboat.</p>

      <h3>Day 5 – Alleppey to Cochin (55 km, ~1.5 hrs)</h3>
      <p><strong>Morning:</strong> Watch the sunrise over the backwaters. Disembark after breakfast.</p>
      <p>Drive back to Cochin. Afternoon at leisure for shopping — spices, handloom textiles, and handicrafts at MG Road and Jew Town.</p>
      <p><strong>Optional:</strong> Ayurvedic massage and wellness session. Overnight in Kochi.</p>

      <h3>Day 6 – Departure from Cochin</h3>
      <p>Transfer to Cochin International Airport. Tour ends with the gentle rhythm of Kerala lingering in your heart.</p>
    `,
    inclusions: `
      <ul>
        <li>5 nights accommodation — hotels + 1 night private houseboat</li>
        <li>Daily breakfast; full board on houseboat day</li>
        <li>Private AC vehicle for all transfers</li>
        <li>English-speaking guide</li>
        <li>Spice plantation guided tour</li>
        <li>Tea estate visit with tasting</li>
        <li>Eravikulam National Park entry</li>
        <li>Kathakali performance tickets</li>
        <li>Private houseboat with all meals</li>
        <li>All applicable taxes</li>
      </ul>
    `,
    exclusions: `
      <ul>
        <li>Airfare</li>
        <li>Lunch and dinner (except houseboat)</li>
        <li>Ayurvedic spa (optional, payable directly)</li>
        <li>Personal expenses and tips</li>
        <li>Travel insurance</li>
      </ul>
    `,
    metaTitle: "Serene Kerala Backwaters Tour | Cochin Munnar Alleppey | Soulful India Tours",
    metaDescription:
      "Book the Kerala Backwaters tour — Cochin, Munnar & Alleppey. Houseboat cruise, tea plantations, spice gardens & Kathakali with Soulful India Tours."
  },

  /* ───────────────────── 4. Kashmir Winter Escape ───────────────────── */
  "kashmir-winter-escape": {
    title: "Kashmir Winter Escape",
    slug: "kashmir-winter-escape",
    bannerImage: kashmir,
    duration: "4 Nights / 5 Days",
    price: "₹64,999",
    location: "Srinagar – Gulmarg",
    shortDescription:
      "Snowy valleys, shikara rides, and cozy alpine stays — experience the magic of Kashmir in winter.",
    description: `
      <p>The <strong>Kashmir Winter Escape</strong> invites you to experience India's crown jewel draped in snow. <strong>Srinagar</strong> and <strong>Gulmarg</strong> transform into a winter wonderland — frozen lakes, snow-covered gardens, and the world-class Gulmarg ski slopes create an unforgettable getaway.</p>
      <p>In <strong>Srinagar</strong>, glide on a traditional shikara across Dal Lake, explore the stunning Mughal Gardens beneath a blanket of snow, and warm yourself with authentic Kashmiri Wazwan cuisine in a cozy houseboat.</p>
      <p>Drive to <strong>Gulmarg</strong>, one of Asia's premier ski destinations. Ride the Gulmarg Gondola — one of the highest cable cars in the world — for breathtaking views of the snow-covered Himalayas. Try skiing, snowboarding, or simply revel in the pristine snow.</p>
      <p>With Soulful India Tours, enjoy curated boutique stays, private transfers, and local guides who know every secret of the valley.</p>
    `,
    highlights: `
      <ul>
        <li>Shikara ride on Dal Lake with snow-covered mountains as backdrop</li>
        <li>Stay in a traditional Kashmiri houseboat</li>
        <li>Gulmarg Gondola ride — world's second highest cable car</li>
        <li>Skiing and snowboarding at Gulmarg slopes (optional)</li>
        <li>Visit snow-covered Mughal Gardens — Nishat Bagh, Shalimar Bagh</li>
        <li>Authentic Kashmiri Wazwan multi-course dinner</li>
        <li>Explore the old city — Jama Masjid, Shankaracharya Temple</li>
        <li>Shopping for Pashmina shawls, carpets, and walnut wood crafts</li>
      </ul>
    `,
    itinerary: `
      <h3>Day 1 – Arrival in Srinagar</h3>
      <p>Arrive at Sheikh ul-Alam International Airport, Srinagar. Transfer to your houseboat on Dal Lake.</p>
      <p><strong>Afternoon:</strong> Enjoy a shikara ride on Dal Lake — visit the floating vegetable market and Char Chinar island. Hot kahwa (Kashmiri tea) served on the shikara.</p>
      <p><strong>Evening:</strong> Wazwan welcome dinner. Overnight on the houseboat.</p>

      <h3>Day 2 – Srinagar Sightseeing</h3>
      <p><strong>Morning:</strong> Visit Mughal Gardens — Nishat Bagh (Garden of Pleasure) and Shalimar Bagh (Garden of Love), beautifully dusted with snow.</p>
      <p><strong>Afternoon:</strong> Explore the old city — Jama Masjid, Shankaracharya Temple (panoramic city views). Visit a Pashmina shawl workshop.</p>
      <p><strong>Evening:</strong> Shopping at the Lal Chowk market — Pashmina, saffron, dry fruits, and walnut wood crafts. Overnight at hotel in Srinagar.</p>

      <h3>Day 3 – Srinagar to Gulmarg (50 km, ~2 hrs)</h3>
      <p>Drive to Gulmarg through pine forests and snow-covered meadows.</p>
      <p><strong>Afternoon:</strong> Ride the Gulmarg Gondola (Phase 1 to Kongdori or Phase 2 to Apharwat Peak at 4,200 m). Enjoy snowball fights, sledding, and photography.</p>
      <p><strong>Evening:</strong> Relax at your resort with hot chocolate by the fireplace. Overnight in Gulmarg.</p>

      <h3>Day 4 – Gulmarg Activities</h3>
      <p><strong>Full Day:</strong> Skiing / snowboarding lessons (optional), snow trekking, or a relaxed day at the resort spa. Explore the frozen Alpather Lake (trekking, seasonal).</p>
      <p><strong>Evening:</strong> Drive back to Srinagar. Farewell dinner at a local restaurant. Overnight in Srinagar.</p>

      <h3>Day 5 – Departure from Srinagar</h3>
      <p>Morning at leisure for last-minute shopping. Transfer to Srinagar Airport. Tour ends with snow-kissed memories of Kashmir.</p>
    `,
    inclusions: `
      <ul>
        <li>4 nights accommodation — 1 night houseboat + 3 nights hotel/resort</li>
        <li>Daily breakfast</li>
        <li>Wazwan welcome dinner</li>
        <li>Private vehicle for all transfers and sightseeing</li>
        <li>English-speaking local guide</li>
        <li>Shikara ride on Dal Lake</li>
        <li>Gulmarg Gondola Phase 1 ticket</li>
        <li>Mughal Gardens entrance fees</li>
        <li>All applicable taxes</li>
      </ul>
    `,
    exclusions: `
      <ul>
        <li>Airfare</li>
        <li>Lunch and dinner (except welcome dinner)</li>
        <li>Skiing / snowboarding equipment and lessons</li>
        <li>Gondola Phase 2 (additional cost)</li>
        <li>Personal expenses, tips</li>
        <li>Travel insurance</li>
      </ul>
    `,
    metaTitle: "Kashmir Winter Escape Tour | Srinagar Gulmarg | Soulful India Tours",
    metaDescription:
      "Book the Kashmir Winter Escape — Srinagar & Gulmarg. Shikara rides, Gulmarg Gondola, snow activities & Wazwan cuisine with Soulful India Tours."
  },

  /* ───────────────────── 5. Darjeeling Tea Trails ───────────────────── */
  "darjeeling-tea-trails": {
    title: "Darjeeling Tea Trails",
    slug: "darjeeling-tea-trails",
    bannerImage: darjeeling,
    duration: "3 Nights / 4 Days",
    price: "₹45,999",
    location: "Darjeeling",
    shortDescription:
      "Tea estates, heritage rail rides, and crisp mountain air — discover the Queen of the Hills.",
    description: `
      <p>The <strong>Darjeeling Tea Trails</strong> tour is a compact yet immersive escape to one of India's most charming hill stations. Perched at 2,042 metres, <strong>Darjeeling</strong> offers sweeping views of the Kanchenjunga range, world-famous tea estates, and the iconic UNESCO Toy Train.</p>
      <p>Walk through rolling tea gardens, learn the art of plucking and processing, and savour the "champagne of teas" freshly brewed. Watch the sunrise paint Kanchenjunga in hues of gold from Tiger Hill. Ride the <strong>Darjeeling Himalayan Railway</strong> — a UNESCO World Heritage line that winds through misty mountains.</p>
      <p>Explore Buddhist monasteries, the Himalayan Mountaineering Institute, and the vibrant Mall Road. This getaway is perfect for a quick, rejuvenating break from city life.</p>
    `,
    highlights: `
      <ul>
        <li>Sunrise over Kanchenjunga from Tiger Hill</li>
        <li>Ride the UNESCO Darjeeling Himalayan Railway (Toy Train)</li>
        <li>Guided tea estate tour with tasting at Happy Valley Tea Estate</li>
        <li>Visit Ghoom Monastery — one of the oldest in the region</li>
        <li>Explore the Himalayan Mountaineering Institute & Zoo</li>
        <li>Stroll along Mall Road and Chowrasta</li>
        <li>Mountain views from Observatory Hill</li>
        <li>Taste authentic Tibetan momos and thukpa</li>
      </ul>
    `,
    itinerary: `
      <h3>Day 1 – Arrival in Darjeeling</h3>
      <p>Arrive at Bagdogra Airport (IXB). Scenic drive to Darjeeling (80 km, ~3 hrs) through tea gardens and winding mountain roads.</p>
      <p><strong>Afternoon:</strong> Check into your mountain lodge. Walk along Mall Road and Chowrasta — Darjeeling's central promenade with mountain views.</p>
      <p><strong>Evening:</strong> Enjoy a warm dinner with views of twinkling lights across the valley. Overnight in Darjeeling.</p>

      <h3>Day 2 – Tiger Hill & Sightseeing</h3>
      <p><strong>Early Morning (4:00 AM):</strong> Drive to Tiger Hill for a spectacular sunrise over Kanchenjunga (8,586 m) and the eastern Himalayan range. On clear days, even Mount Everest is visible.</p>
      <p><strong>Morning:</strong> Stop at Ghoom Monastery (Samten Choling) — home to a 15-ft statue of Maitreya Buddha. Board the Toy Train from Ghoom to Darjeeling station.</p>
      <p><strong>Afternoon:</strong> Visit the Himalayan Mountaineering Institute, Padmaja Naidu Zoological Park (Red Panda, Snow Leopard), and Peace Pagoda. Overnight in Darjeeling.</p>

      <h3>Day 3 – Tea Estate & Exploration</h3>
      <p><strong>Morning:</strong> Guided tour of the Happy Valley Tea Estate — walk through the tea bushes, see the factory processing, and enjoy a tasting session of premium first-flush and second-flush teas.</p>
      <p><strong>Afternoon:</strong> Visit Observatory Hill and Mahakal Temple. Explore the Tibetan Refugee Self-Help Centre. Free time for shopping — Darjeeling tea, woollen handicrafts, and Tibetan souvenirs.</p>
      <p><strong>Evening:</strong> Farewell dinner featuring Tibetan momos, thukpa, and Darjeeling tea. Overnight in Darjeeling.</p>

      <h3>Day 4 – Departure</h3>
      <p>Morning at leisure. Drive to Bagdogra Airport (80 km, ~3 hrs). Tour ends with the lingering aroma of Darjeeling tea.</p>
    `,
    inclusions: `
      <ul>
        <li>3 nights accommodation in a mountain lodge / boutique hotel</li>
        <li>Daily breakfast</li>
        <li>Private vehicle for all transfers (airport–Darjeeling–airport)</li>
        <li>English-speaking local guide</li>
        <li>Tiger Hill sunrise excursion</li>
        <li>Toy Train joy ride (Ghoom – Darjeeling)</li>
        <li>Tea estate guided tour with tasting</li>
        <li>Zoo and HMI entrance fees</li>
        <li>All applicable taxes</li>
      </ul>
    `,
    exclusions: `
      <ul>
        <li>Airfare to/from Bagdogra</li>
        <li>Lunch and dinner</li>
        <li>Personal expenses and tips</li>
        <li>Travel insurance</li>
        <li>Additional activities not mentioned</li>
      </ul>
    `,
    metaTitle: "Darjeeling Tea Trails Tour | 3N/4D | Soulful India Tours",
    metaDescription:
      "Book the Darjeeling Tea Trails tour — Tiger Hill sunrise, Toy Train, tea estate visits & mountain views. 3 Nights / 4 Days with Soulful India Tours."
  },

  /* ───────────────────── 6. Himalayan Adventure Uttarakhand ───────────────────── */
  "himalayan-adventure-uttarakhand": {
    title: "Himalayan Adventure Uttarakhand",
    slug: "himalayan-adventure-uttarakhand",
    bannerImage: uttarakhand,
    duration: "6 Nights / 7 Days",
    price: "₹74,999",
    location: "Rishikesh – Auli",
    shortDescription:
      "Riverside camps, scenic trails, and alpine adventures — the ultimate Uttarakhand experience.",
    description: `
      <p>The <strong>Himalayan Adventure Uttarakhand</strong> tour is designed for adventure seekers and nature lovers. Travel from the spiritual river town of <strong>Rishikesh</strong> to the snow-capped ski slopes of <strong>Auli</strong>, with trekking, rafting, and breathtaking Himalayan vistas along the way.</p>
      <p>In <strong>Rishikesh</strong>, the Yoga Capital of the World, experience white-water rafting on the Ganges, bungee jumping, attend the legendary Ganga Aarti at Triveni Ghat, and visit ashrams where The Beatles once meditated.</p>
      <p>Journey deeper into the mountains to <strong>Joshimath</strong> and then <strong>Auli</strong>, a premier Himalayan ski resort at 2,800 m. Ride Asia's longest cable car for 360° views of Nanda Devi (7,816 m), Kamet, and the entire Garhwal Himalayan range. Trek through oak and deodar forests, visit the ancient Badrinath temple region, and breathe the purest mountain air.</p>
    `,
    highlights: `
      <ul>
        <li>White-water rafting on the Ganges at Rishikesh (16 km stretch)</li>
        <li>Ganga Aarti ceremony at Triveni Ghat</li>
        <li>Visit the Beatles Ashram (Maharishi Mahesh Yogi Ashram)</li>
        <li>Auli cable car — Asia's longest gondola with Himalayan panorama</li>
        <li>Skiing / snowboarding on Auli's slopes (seasonal)</li>
        <li>Trek through oak and deodar forests near Auli</li>
        <li>Views of Nanda Devi, Kamet, and Dunagiri peaks</li>
        <li>Camping under the stars at a riverside camp in Rishikesh</li>
      </ul>
    `,
    itinerary: `
      <h3>Day 1 – Arrival in Rishikesh</h3>
      <p>Arrive at Dehradun Airport (DED) or Haridwar station. Transfer to Rishikesh (~45 min).</p>
      <p><strong>Afternoon:</strong> Explore the Laxman Jhula and Ram Jhula suspension bridges. Walk through the ashram-lined banks.</p>
      <p><strong>Evening:</strong> Attend the mesmerising Ganga Aarti at Triveni Ghat. Overnight at a riverside camp / resort.</p>

      <h3>Day 2 – Rishikesh Adventure Day</h3>
      <p><strong>Morning:</strong> White-water rafting on the Ganges — 16 km of Grade III–IV rapids through stunning river gorges. Cliff jumping at designated points.</p>
      <p><strong>Afternoon:</strong> Visit the Beatles Ashram (Chaurasi Kutia). Explore the cafes and yoga studios of Tapovan.</p>
      <p><strong>Evening:</strong> Campfire dinner by the river. Overnight in Rishikesh.</p>

      <h3>Day 3 – Rishikesh to Joshimath (250 km, ~8 hrs)</h3>
      <p>Scenic mountain drive along the Alaknanda River valley, passing through Devprayag (confluence of Alaknanda and Bhagirathi rivers), Rudraprayag, and Karnaprayag.</p>
      <p><strong>Evening:</strong> Arrive in Joshimath. Rest and acclimatize. Walk to Shankaracharya Math. Overnight in Joshimath.</p>

      <h3>Day 4 – Joshimath to Auli (16 km by road or cable car)</h3>
      <p><strong>Morning:</strong> Ride the Auli cable car (gondola) from Joshimath to Auli — 4 km journey with spectacular views of the Himalayan peaks.</p>
      <p><strong>Afternoon:</strong> Explore Auli's meadows. Visit the artificial lake and Gorson Bugyal (alpine meadow). Photography opportunities abound.</p>
      <p><strong>Evening:</strong> Hot chocolate at your ski resort. Overnight in Auli.</p>

      <h3>Day 5 – Auli Adventure Day</h3>
      <p><strong>Full Day:</strong> Skiing or snowboarding lessons (winter season), or guided trek through oak and deodar forests to Gorson Bugyal and Chattrakund Lake. 360° views of Nanda Devi, Kamet, Dunagiri, Bethartoli, and Mana Peak.</p>
      <p><strong>Evening:</strong> Bonfire and stargazing — the clear mountain sky is extraordinary. Overnight in Auli.</p>

      <h3>Day 6 – Auli to Rishikesh (270 km, ~9 hrs)</h3>
      <p>Morning at leisure. Drive back to Rishikesh through the scenic valleys.</p>
      <p><strong>Evening:</strong> Farewell dinner at a riverside restaurant. Overnight in Rishikesh.</p>

      <h3>Day 7 – Departure</h3>
      <p>Morning yoga session (optional). Transfer to Dehradun Airport or Haridwar station. Tour ends with mountain air still in your lungs.</p>
    `,
    inclusions: `
      <ul>
        <li>6 nights accommodation — riverside camps/resort + mountain hotel/resort</li>
        <li>Daily breakfast</li>
        <li>Private vehicle for all transfers</li>
        <li>English-speaking guide / trek leader</li>
        <li>White-water rafting (16 km) with safety gear</li>
        <li>Auli cable car tickets</li>
        <li>Guided mountain trek</li>
        <li>Campfire and evening activities</li>
        <li>All applicable taxes</li>
      </ul>
    `,
    exclusions: `
      <ul>
        <li>Airfare</li>
        <li>Lunch and dinner</li>
        <li>Skiing / snowboarding equipment rental</li>
        <li>Bungee jumping, cliff jumping (optional, payable locally)</li>
        <li>Personal expenses, tips</li>
        <li>Travel insurance</li>
      </ul>
    `,
    metaTitle: "Himalayan Adventure Uttarakhand Tour | Rishikesh Auli | Soulful India Tours",
    metaDescription:
      "Book the Himalayan Adventure tour — Rishikesh rafting, Ganga Aarti, Auli skiing & mountain treks. 6N/7D with Soulful India Tours."
  },

  /* ───────────────────── 7. Spiritual Varanasi ───────────────────── */
  "spiritual-varanasi": {
    title: "Spiritual Varanasi",
    slug: "spiritual-varanasi",
    bannerImage: himachal,
    duration: "3 Nights / 4 Days",
    price: "₹39,999",
    location: "Varanasi",
    shortDescription:
      "Ganga aarti, heritage ghats, and soulful rituals — immerse yourself in India's spiritual heart.",
    description: `
      <p><strong>Varanasi</strong> (Kashi / Banaras) is the oldest continuously inhabited city in the world and India's ultimate spiritual destination. This tour takes you deep into the mystical labyrinth of ancient ghats, sacred temples, and living rituals that have continued unbroken for over 3,000 years.</p>
      <p>Witness the spectacular <strong>Ganga Aarti</strong> at Dashashwamedh Ghat, where priests perform a choreographed fire ceremony as thousands of oil lamps float down the river. Take a dawn boat ride along the 84 ghats, watch the city awaken with yoga, prayers, and cremation rituals.</p>
      <p>Explore the narrow lanes of the old city, visiting the Kashi Vishwanath Temple, Durga Temple, and the campus of Banaras Hindu University. Taste Varanasi's legendary street food — kachori-sabzi, chaat, thandai, and the famous Banarasi paan.</p>
      <p>Optional excursion to <strong>Sarnath</strong>, where Lord Buddha delivered his first sermon after enlightenment — a UNESCO-worthy archaeological site with ancient stupas and monasteries.</p>
    `,
    highlights: `
      <ul>
        <li>Evening Ganga Aarti ceremony at Dashashwamedh Ghat</li>
        <li>Dawn boat ride along the 84 ghats of Varanasi</li>
        <li>Visit the sacred Kashi Vishwanath Temple</li>
        <li>Heritage walk through the narrow lanes of the old city</li>
        <li>Excursion to Sarnath — Buddha's first sermon site</li>
        <li>Taste Varanasi's legendary street food — kachori, chaat, thandai</li>
        <li>Watch silk weavers create Banarasi saris</li>
        <li>Spiritual conversation with a local pandit at the ghats</li>
      </ul>
    `,
    itinerary: `
      <h3>Day 1 – Arrival in Varanasi</h3>
      <p>Arrive at Lal Bahadur Shastri International Airport. Transfer to your heritage hotel near the ghats.</p>
      <p><strong>Evening:</strong> Walk to Dashashwamedh Ghat for the grand Ganga Aarti ceremony — the highlight of any Varanasi visit. Watch the priests perform with giant brass lamps as bells and mantras fill the air. Overnight in Varanasi.</p>

      <h3>Day 2 – Varanasi Heritage Day</h3>
      <p><strong>Early Morning (5:00 AM):</strong> Boat ride along the Ganges — witness the sunrise, morning bathers, yoga practitioners, and the cremation rituals at Manikarnika Ghat. Visit Assi Ghat.</p>
      <p><strong>Morning:</strong> Heritage walk through the ancient lanes — Kashi Vishwanath Temple, Annapurna Temple, and the silk weaving workshops where Banarasi saris are crafted by hand.</p>
      <p><strong>Afternoon:</strong> Visit Banaras Hindu University (BHU) campus and Bharat Kala Bhavan Museum. Walk through Lanka Market.</p>
      <p><strong>Evening:</strong> Street food trail — kachori-sabzi at Ram Bhandar, chaat, thandai at Blue Lassi, and Banarasi paan. Overnight in Varanasi.</p>

      <h3>Day 3 – Sarnath Excursion & Varanasi</h3>
      <p><strong>Morning:</strong> Drive to Sarnath (10 km). Visit the Dhamek Stupa, Chaukhandi Stupa, Ashoka Pillar, Sarnath Museum, and the Tibetan Monastery. This is where Lord Buddha first taught the Dharma.</p>
      <p><strong>Afternoon:</strong> Return to Varanasi. Visit Durga Temple (Monkey Temple) and Tulsi Manas Mandir.</p>
      <p><strong>Evening:</strong> Free time for shopping — Banarasi silk, brass artefacts, wooden toys. Farewell dinner. Overnight in Varanasi.</p>

      <h3>Day 4 – Departure</h3>
      <p>Optional early morning yoga session at the ghats. Transfer to Varanasi Airport. Tour ends with the eternal rhythm of Varanasi staying in your soul.</p>
    `,
    inclusions: `
      <ul>
        <li>3 nights in a heritage hotel near the ghats</li>
        <li>Daily breakfast</li>
        <li>Private vehicle for airport transfers and Sarnath excursion</li>
        <li>English-speaking guide</li>
        <li>Dawn boat ride on the Ganges</li>
        <li>Guided heritage walk</li>
        <li>Sarnath museum entrance fees</li>
        <li>All applicable taxes</li>
      </ul>
    `,
    exclusions: `
      <ul>
        <li>Airfare</li>
        <li>Lunch and dinner</li>
        <li>Temple donations and personal offerings</li>
        <li>Personal expenses, tips</li>
        <li>Travel insurance</li>
      </ul>
    `,
    metaTitle: "Spiritual Varanasi Tour | 3N/4D | Soulful India Tours",
    metaDescription:
      "Book the Spiritual Varanasi tour — Ganga Aarti, dawn boat ride, Kashi Vishwanath, Sarnath & street food. 3N/4D with Soulful India Tours."
  },

  /* ───────────────────── 8. Goa Coastal Escape ───────────────────── */
  "goa-coastal-escape": {
    title: "Goa Coastal Escape",
    slug: "goa-coastal-escape",
    bannerImage: goa,
    duration: "4 Nights / 5 Days",
    price: "Price on Request",
    location: "North Goa – South Goa",
    shortDescription:
      "Beach resorts, sunset cruises, and coastal cafes — the perfect Goan holiday awaits.",
    description: `
      <p>The <strong>Goa Coastal Escape</strong> is the ultimate beach holiday, blending golden sands, Portuguese heritage, vibrant nightlife, and serene South Goa tranquility into one perfect trip.</p>
      <p>Explore <strong>North Goa's</strong> lively beaches — Calangute, Baga, Anjuna, and the legendary Saturday Night Market. Try water sports, dance the night away, and enjoy fresh seafood at beach shacks.</p>
      <p>Discover <strong>Old Goa's</strong> UNESCO World Heritage churches — the Basilica of Bom Jesus and Se Cathedral — remnants of Portuguese colonial rule. Walk through the charming Latin Quarter of <strong>Fontainhas</strong> in Panjim with its pastel-coloured villas.</p>
      <p>Retreat to <strong>South Goa's</strong> pristine and peaceful beaches — Palolem, Agonda, and Colva — where hammocks hang between coconut palms and the pace of life slows down.</p>
      <p>Enjoy a sunset cruise on the Mandovi River, visit spice plantations, and dine at Goa's finest beach restaurants.</p>
    `,
    highlights: `
      <ul>
        <li>Sunset cruise on the Mandovi River</li>
        <li>Visit UNESCO-listed Basilica of Bom Jesus and Se Cathedral</li>
        <li>Water sports at Calangute / Baga — parasailing, jet skiing, banana boat</li>
        <li>Walk through the Latin Quarter of Fontainhas in Panjim</li>
        <li>Relax on the pristine beaches of Palolem and Agonda (South Goa)</li>
        <li>Spice plantation visit with traditional Goan lunch</li>
        <li>Saturday Night Market at Arpora (seasonal)</li>
        <li>Fresh seafood dinner at a beachside shack under the stars</li>
      </ul>
    `,
    itinerary: `
      <h3>Day 1 – Arrival in Goa</h3>
      <p>Arrive at Goa (Dabolim / Mopa) Airport. Transfer to your beach resort in North Goa.</p>
      <p><strong>Afternoon:</strong> Settle in and relax at the beach or the resort pool.</p>
      <p><strong>Evening:</strong> Sunset at Baga Beach or Vagator Beach. Dinner at a popular beach shack — fresh fish, prawns, and Goan vindaloo. Overnight in North Goa.</p>

      <h3>Day 2 – North Goa Exploration</h3>
      <p><strong>Morning:</strong> Visit Fort Aguada — a 17th-century Portuguese fort with panoramic views. Explore Calangute and Sinquerim beaches.</p>
      <p><strong>Afternoon:</strong> Water sports at Baga Beach — parasailing, jet skiing, banana boat ride, or kayaking (payable locally).</p>
      <p><strong>Evening:</strong> Visit the Anjuna Flea Market or Saturday Night Market at Arpora (seasonal). Live music at a beachside bar. Overnight in North Goa.</p>

      <h3>Day 3 – Old Goa & Heritage</h3>
      <p><strong>Morning:</strong> Drive to Old Goa. Visit the Basilica of Bom Jesus (UNESCO — houses the remains of St. Francis Xavier), Se Cathedral, and Church of St. Francis of Assisi.</p>
      <p><strong>Afternoon:</strong> Walking tour of Fontainhas — Panjim's Latin Quarter with pastel-coloured Portuguese-era villas, art cafes, and bakeries.</p>
      <p><strong>Evening:</strong> Sunset cruise on the Mandovi River with music and snacks. Overnight in North Goa or transfer to South Goa resort.</p>

      <h3>Day 4 – South Goa</h3>
      <p><strong>Morning:</strong> Visit a spice plantation — guided tour with a traditional Goan lunch (fish curry rice, sorpotel, and feni tasting).</p>
      <p><strong>Afternoon:</strong> Relax at Palolem Beach or Agonda Beach — pristine crescents of sand with fewer crowds. Optional dolphin spotting boat trip.</p>
      <p><strong>Evening:</strong> Farewell seafood dinner at a South Goa beach restaurant under the stars. Overnight in Goa.</p>

      <h3>Day 5 – Departure</h3>
      <p>Morning at leisure for last-minute shopping — cashew nuts, feni, azulejos tiles, and Goan souvenirs. Transfer to Goa Airport. Tour ends with sandy, sun-kissed memories.</p>
    `,
    inclusions: `
      <ul>
        <li>4 nights in beachfront resort / boutique hotel</li>
        <li>Daily breakfast</li>
        <li>Private AC vehicle for all transfers and sightseeing</li>
        <li>English-speaking guide for heritage tours</li>
        <li>Mandovi River sunset cruise</li>
        <li>Spice plantation visit with Goan lunch</li>
        <li>All church and fort entrance fees</li>
        <li>All applicable taxes</li>
      </ul>
    `,
    exclusions: `
      <ul>
        <li>Airfare</li>
        <li>Lunch and dinner (except spice plantation lunch)</li>
        <li>Water sports (payable locally)</li>
        <li>Nightlife and bar expenses</li>
        <li>Personal expenses, tips</li>
        <li>Travel insurance</li>
      </ul>
    `,
    metaTitle: "Goa Coastal Escape Tour | North & South Goa | Soulful India Tours",
    metaDescription:
      "Book the Goa Coastal Escape — beach resorts, water sports, Old Goa heritage, sunset cruise & South Goa serenity. 4N/5D with Soulful India Tours."
  },

  /* ───────────────────── 9. Himachal Hill Retreat ───────────────────── */
  "himachal-hill-retreat": {
    title: "Himachal Hill Retreat",
    slug: "himachal-hill-retreat",
    bannerImage: himachal,
    duration: "5 Nights / 6 Days",
    price: "₹58,999",
    location: "Shimla – Manali",
    shortDescription:
      "Charming hill stations, pine forests, and slow travel escapes in the Himalayan foothills.",
    description: `
      <p>The <strong>Himachal Hill Retreat</strong> is a refreshing escape through two of India's most beloved hill stations — <strong>Shimla</strong> and <strong>Manali</strong>. Drive through pine forests, cross the stunning Kullu Valley, and soak in the crisp mountain air of the Himalayan foothills.</p>
      <p>In <strong>Shimla</strong>, the former summer capital of British India, walk along the Ridge and Mall Road, visit the Vice-Regal Lodge, Christ Church, and Jakhu Temple. Take the heritage Shimla Toy Train for a scenic ride through tunnels and gorges.</p>
      <p>Continue to <strong>Manali</strong>, a vibrant mountain town at the head of the Kullu Valley. Explore Old Manali, Hadimba Devi Temple, Solang Valley (adventure sports), and the hot springs at Vashisht. The drive from Shimla to Manali through the Kullu Valley is one of India's most scenic road journeys.</p>
      <p>This tour is ideal for couples, families, and anyone seeking a peaceful mountain getaway with the perfect mix of sightseeing, nature, and relaxation.</p>
    `,
    highlights: `
      <ul>
        <li>Walk along Shimla's colonial-era Ridge and Mall Road</li>
        <li>Heritage Shimla Toy Train ride (UNESCO)</li>
        <li>Visit the Vice-Regal Lodge — Shimla's most iconic building</li>
        <li>Scenic drive through the Kullu Valley</li>
        <li>Explore Old Manali and Hadimba Devi Temple</li>
        <li>Solang Valley — paragliding, zorbing, and skiing (seasonal)</li>
        <li>Hot springs at Vashisht</li>
        <li>Rohtang Pass excursion (seasonal, permit required)</li>
      </ul>
    `,
    itinerary: `
      <h3>Day 1 – Arrival in Shimla</h3>
      <p>Arrive at Chandigarh Airport or Kalka station. Drive to Shimla (110 km, ~4 hrs) through pine-scented mountain roads. Alternatively, take the heritage Toy Train from Kalka to Shimla.</p>
      <p><strong>Evening:</strong> Walk along the Ridge and Mall Road. Visit Christ Church — one of North India's oldest churches. Overnight in Shimla.</p>

      <h3>Day 2 – Shimla Sightseeing</h3>
      <p><strong>Morning:</strong> Visit the Vice-Regal Lodge (Indian Institute of Advanced Study) — a stunning Gothic-Revival mansion set in manicured gardens. Walk to Jakhu Temple for panoramic views of the city.</p>
      <p><strong>Afternoon:</strong> Explore Kufri — a small hill station above Shimla with horse riding and nature walks. Visit the Shimla Heritage Museum.</p>
      <p><strong>Evening:</strong> Shopping on Mall Road — Himachali shawls, woolens, and local jams. Overnight in Shimla.</p>

      <h3>Day 3 – Shimla to Manali (260 km, ~7 hrs)</h3>
      <p>One of India's most beautiful road journeys — drive through the Kullu Valley alongside the Beas River, passing through Sundernagar, Mandi, and the fruit orchards of Kullu.</p>
      <p><strong>Evening:</strong> Arrive in Manali. Explore the cafes and shops of Old Manali. Overnight in Manali.</p>

      <h3>Day 4 – Manali Sightseeing</h3>
      <p><strong>Morning:</strong> Visit Hadimba Devi Temple — a unique pagoda-style wooden temple in a cedar forest. Explore the Tibetan Monastery and Manu Temple.</p>
      <p><strong>Afternoon:</strong> Walk to the Vashisht hot springs — natural sulphur springs with healing properties. Visit the Vashisht Temple. Explore the Club House and Van Vihar park.</p>
      <p><strong>Evening:</strong> Stroll through Old Manali's bohemian lane — cafes, bakeries, and handicraft shops. Overnight in Manali.</p>

      <h3>Day 5 – Solang Valley / Rohtang (Seasonal)</h3>
      <p><strong>Full Day:</strong> Excursion to Solang Valley (14 km) — adventure activities including paragliding, zorbing, zip-lining, and skiing/snowboarding (winter). In summer/autumn, optional excursion to Rohtang Pass (permit required) at 3,978 m for incredible snow views.</p>
      <p><strong>Evening:</strong> Farewell dinner at a riverside restaurant. Overnight in Manali.</p>

      <h3>Day 6 – Departure</h3>
      <p>Morning at leisure. Transfer to Bhuntar Airport (50 km, ~1.5 hrs) for your onward flight, or drive to Chandigarh. Tour ends with pine-scented mountain memories.</p>
    `,
    inclusions: `
      <ul>
        <li>5 nights accommodation in comfortable hotels / mountain resorts</li>
        <li>Daily breakfast</li>
        <li>Private vehicle for all transfers and sightseeing</li>
        <li>English-speaking guide</li>
        <li>Shimla Toy Train ticket (if opted)</li>
        <li>Solang Valley excursion with transport</li>
        <li>All monument entrance fees</li>
        <li>All applicable taxes</li>
      </ul>
    `,
    exclusions: `
      <ul>
        <li>Airfare</li>
        <li>Lunch and dinner</li>
        <li>Adventure activities (paragliding, zorbing — payable locally)</li>
        <li>Rohtang Pass permit (seasonal, additional cost)</li>
        <li>Personal expenses, tips</li>
        <li>Travel insurance</li>
      </ul>
    `,
    metaTitle: "Himachal Hill Retreat Tour | Shimla Manali | Soulful India Tours",
    metaDescription:
      "Book the Himachal Hill Retreat — Shimla, Manali, Solang Valley & Kullu. Toy Train, mountain views, hot springs & adventure. 5N/6D with Soulful India Tours."
  }
};

export default popularPackageTours;
