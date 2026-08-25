import {
  HistoricalDisaster,
  MapEntity,
  MapMarkerEvent,
  CrossDisasterInsight,
} from '../types';

export const HISTORICAL_DISASTERS: HistoricalDisaster[] = [
  {
    id: 'flood-2018-kerala',
    name: '2018 Kerala Great Monsoon Floods (Periyar & Pamba Basins)',
    type: 'Riverine Inundation',
    date: 'August 15, 2018',
    location: 'Periyar, Pamba & Chalakudy River Basins (Aluva, Kochi, Idukki, Chengannur, Wayanad)',
    coordinates: [10.108, 76.353], // Aluva / Periyar Basin center
    severity: 'Critical',
    description:
      'Unprecedented torrential southwest monsoon rainfall (164% above normal) saturated the Western Ghats catchment. 35 out of 54 major dams were opened simultaneously as reservoirs reached full reservoir level (FRL), releasing massive cascading surges into the Periyar, Pamba, and Chalakudy rivers, submerging urban centers and lowlands.',
    peakRainfallRate: '116 mm/h',
    peakWaterLevel: '+5.2 m above flood stage',
    casualties: 483,
    evacuatedCount: 1450000,
    economicDamage: '₹31,000 Crore ($4.2 Billion)',
    affectedHospitals: [
      'Aluva District Hospital (Ground floor generator & oxygen manifolds flooded; emergency ICU transfer of 68 patients)',
      'Lakeshore & Aster Medcity Arteries (Ambulance approach bridges submerged by 1.6m water)',
      'Chengannur Community Health Center (Completely marooned for 72 hours; medicine stock submerged)',
    ],
    affectedRoads: [
      'National Highway 544 (NH-544) Marthanda Varma Bridge (Submerged by 1.8m river surge; severed North-South transit)',
      'Aluva-Munnar State Highway (Severed by 26 translational landslides across Neriamangalam)',
      'Cochin International Airport (CIAL) Runway (2.1m floodwater from Periyar overflow; 12MW solar farm submerged; airport shut for 14 days)',
      'Chalakudy Town Underpass (Over 2.4m standing water trapping 35 commercial vehicles)',
    ],
    emergencyShelters: [
      'UC College Aluva Relief Camp (Hosted 4,200 evacuees; community kitchens operated with civil society support)',
      'Chengannur Higher Secondary School Pavilion (Safe high-ground shelter for 2,100 rescued villagers)',
      'Kochi Marine Drive Staging Ground (Primary staging base for amphibious Navy & Fishermen rescue teams)',
    ],
    rootCauseFailures: [
      'Reservoirs were maintained near full capacity through early August for hydro-power generation, leaving zero flood cushion when peak precipitation struck.',
      'Simultaneous night-time opening of Cheruthoni (Idukki) and Idamalayar dam spillway gates caused rapid downstream compounding waves in Periyar.',
      'Critical hospital backup generators and medical gas storage tanks were positioned in ground-level and sub-grade utility basements.',
      'Wetland reclamation and construction encroachment along natural Periyar & Chalakudy floodplains restricted runoff discharge into Arabian Sea.',
    ],
    successfulInterventions: [
      'Kerala Fishermen "Coastal Army": Over 4,500 traditional marine fishermen transported 669 wooden and fiberglass trawlers inland on flatbed trucks, rescuing over 65,000 marooned citizens from rooftops and upper floors.',
      'Crowdsourced Disaster Management Portal (keralarescue.in): Volunteer tech community built real-time SOS geolocation matching system handling 1.2M coordination requests.',
      'Indian Armed Forces Operation Madad & NDRF 58 Teams deployed with swiftwater zodiacs and Chetak/Mi-17 helicopter rooftop winches.',
    ],
    lessonsLearned: [
      {
        domain: 'Infrastructure',
        lesson:
          'Dams must strictly follow dynamic "Rule Curves" linked to monsoon rainfall forecasts rather than maintaining fixed reservoir retention targets.',
        actionTaken:
          'Central Water Commission (CWC) and KSEB instituted mandatory dynamic reservoir operation rule curves with real-time inflow telemetry.',
      },
      {
        domain: 'Healthcare',
        lesson:
          'Emergency switchgear, backup DG sets, and liquid medical oxygen plants must be elevated at least +3.5m above historical flood datums.',
        actionTaken:
          'Kerala Health Department issued disaster resilience mandates requiring rooftop backup power in all floodplain medical centers.',
      },
      {
        domain: 'Logistics',
        lesson:
          'Traditional coastal fishing boats are far superior to standard military inflatables in navigating submerged urban fences, barbed wire, and strong river currents.',
        actionTaken:
          'Kerala State Disaster Management Authority (KSDMA) created a permanent formal registry and compensation protocol for civilian marine rescue flotillas.',
      },
    ],
    recommendations: [
      'Enforce mandatory dynamic rule curves across all 54 Kerala reservoirs with automated satellite water inflow modeling.',
      'Elevate runway perimeter bunds and install automatic sluice pump gates at Cochin International Airport (CIAL).',
      'Mandate automated SMS geo-fenced warning triggers linked to Central Water Commission river stage gauges.',
      'Construct elevated flood rescue shelters equipped with rooftop solar microgrids along Periyar and Pamba riverbanks.',
    ],
    tags: ['Dam Cascade', 'Periyar Inundation', 'Fishermen Flotilla', 'Airport Submersion', 'Rule Curve'],
    majorEvents: [
      {
        hourOffset: 0,
        timestampLabel: '00:00 - Monsoon Cloudburst Inception',
        title: 'Torrential Catchment Downpour',
        category: 'Weather',
        description: 'IMD issues Red Alert as monsoon depression dumps >310mm rainfall over high-range catchments in Idukki and Wayanad.',
        severity: 'Medium',
        impactMetric: 'Precipitation: 116 mm/h',
        coordinates: [10.15, 76.90],
      },
      {
        hourOffset: 4,
        timestampLabel: '04:00 - Reservoirs Cross Full Level',
        title: 'Idukki & Idamalayar Dams Approach FRL',
        category: 'Hydrology',
        description: 'Inflow into Idukki Reservoir crosses 1,500 cumecs; Cheruthoni dam 5 radial spillway gates opened to discharge 1,000 cumecs.',
        severity: 'High',
        impactMetric: 'Dam Discharge: 1,450 m³/s',
        coordinates: [9.85, 76.97],
        isCriticalFailurePoint: true,
        lessonLearned: 'Lack of pre-monsoon drawdown left zero reservoir buffer for the sudden cloudburst.',
      },
      {
        hourOffset: 8,
        timestampLabel: '08:00 - Periyar River Bankfull Breach',
        title: 'Aluva & Kalady Townships Inundated',
        category: 'Infrastructure',
        description: 'Periyar river overflows banks by 3.8m. Aluva Shiva Temple completely submerged. Water enters ground floors of 14,000 residences.',
        severity: 'Critical',
        impactMetric: '14,000 Homes Submerged',
        coordinates: [10.11, 76.35],
      },
      {
        hourOffset: 12,
        timestampLabel: '12:00 - Critical Infrastructure Shutdown',
        title: 'Kochi Airport Runway Submerged & NH-544 Cut Off',
        category: 'Infrastructure',
        description: 'Runway at Cochin International Airport submerged under 2.1m of water. NH-544 Marthanda Varma bridge overtopped, severing North-South traffic.',
        severity: 'Critical',
        impactMetric: 'Airport Closed, NH-544 Blocked',
        coordinates: [10.155, 76.398],
        isCriticalFailurePoint: true,
      },
      {
        hourOffset: 16,
        timestampLabel: '16:00 - Aluva District Hospital Evacuation',
        title: 'Hospital Generator Submerged; Emergency ICU Triage',
        category: 'Medical',
        description: 'Basement utility pit floods, knocking out hospital main transformer and backup DG set. 68 critical care patients manually ventilated with bag-valve masks.',
        severity: 'Critical',
        impactMetric: '68 ICU Patients in Crisis',
        coordinates: [10.108, 76.353],
        lessonLearned: 'Medical backup electrical switchgear must never be positioned in sub-grade basements in floodplains.',
      },
      {
        hourOffset: 20,
        timestampLabel: '20:00 - Coastal Army Flotilla Mobilization',
        title: 'Fishermen Mobilize 669 Trawlers Inland',
        category: 'Rescue',
        description: 'Coastal fishermen from Kollam, Vypeen, and Thiruvananthapuram arrive on trucks with traditional marine boats, commencing rooftop rescues.',
        severity: 'Successful Intervention',
        impactMetric: '65,000+ Civilians Rescued',
        coordinates: [10.05, 76.32],
        isSuccessfulIntervention: true,
        lessonLearned: 'Sturdy wooden marine fishing boats could navigate submerged compound walls and turbulent flood rapids far better than inflatable rafts.',
      },
      {
        hourOffset: 24,
        timestampLabel: '24:00 - Peak Flood Crest & Relief Stabilization',
        title: 'Flood Waters Crest at +5.2m; Relief Camps Stabilize',
        category: 'Evacuation',
        description: 'Water levels stabilize across Ernakulam and Thrissur. Over 1.45 million citizens accommodated in 3,874 relief camps with citizen food supply chains.',
        severity: 'Medium',
        impactMetric: '1.45M Evacuees Sheltered',
        coordinates: [10.12, 76.34],
      },
    ],
  },
  {
    id: 'flood-2015-chennai',
    name: '2015 Chennai Mega Inundation (Adyar & Cooum River Surge)',
    type: 'Urban Flood',
    date: 'December 01, 2015',
    location: 'Chennai Metropolitan Area (Adyar Basin, Chembarambakkam, Saidapet, Velachery, Manapakkam)',
    coordinates: [13.023, 80.178], // MIOT Hospital / Adyar corridor
    severity: 'Critical',
    description:
      'A deep depression in the Bay of Bengal dumped 494mm of torrential rainfall within 24 hours onto Chennai. Late-night emergency release of 29,000 cusecs from Chembarambakkam Reservoir into the heavily encroached Adyar River channel caused catastrophic overtopping, submerging bridges, airport runways, and hospital basements.',
    peakRainfallRate: '88 mm/h',
    peakWaterLevel: '+4.8 m above street level',
    casualties: 289,
    evacuatedCount: 1800000,
    economicDamage: '₹50,000 Crore ($6.8 Billion)',
    affectedHospitals: [
      'MIOT International Hospital (Catastrophic basement flood submerged DG sets; 18 ICU patients died when ventilators lost power)',
      'Government General Hospital Rajiv Gandhi (Ground floor triage submerged; emergency medicines ruined)',
      'Fortis Malar Adyar (Surrounded by 1.8m standing water; boat-only patient access)',
    ],
    affectedRoads: [
      'Saidapet Maraimalai Adigal Bridge / GST Road (Submerged by 2.2m raging Adyar torrent)',
      'Chennai Airport Main Runway & Taxiways (Submerged under 1.5m water; 34 aircraft grounded for 5 days)',
      'OMR IT Corridor & Velachery Main Road ( превратился in a 1.5m deep lake; thousands stranded in apartment basements)',
      'Kathipara Grade Separator Underpasses (Completely waterlogged)',
    ],
    emergencyShelters: [
      'Jawaharlal Nehru Indoor Stadium Relief Hub (Hosted 3,500 stranded commuters and residents)',
      'Tambaram Air Force Base Hangar (Staging ground for IAF rescue choppers and food drops)',
      'IIT Madras High-Ground Relief Sanctuary (Safe haven with continuous generator power and student relief kitchens)',
    ],
    rootCauseFailures: [
      'Chembarambakkam reservoir outflow was throttled early in the storm to store water, forcing a sudden panicked midnight release of 29,000 cusecs directly onto high tide.',
      'MIOT Hospital electrical substation and emergency generator banks were located in the basement adjacent to the Adyar floodplain.',
      'Heavy real-estate encroachment and solid waste choking of the Adyar, Cooum, and Buckingham Canal reduced drainage discharge velocity by 70%.',
      'Complete blackout of mobile cellular networks after telecom tower backup batteries failed within 6 hours.',
    ],
    successfulInterventions: [
      'Citizen Social Media & Ham Radio Emergency Mesh: Volunteers used Twitter/Facebook hashtags (#ChennaiRains, #ChennaiMicro) and amateur radio relays to direct boat rescues to trapped families.',
      'Indian Navy INS Airavat & Army amphibious assault teams deployed BAUT boats directly into residential streets of Velachery and Mudichur.',
      'Community Kitchens across temples, mosques, and gurudwaras produced over 200,000 hot meal packets daily.',
    ],
    lessonsLearned: [
      {
        domain: 'Healthcare',
        lesson:
          'Critical care ventilator wards must have independent UPS batteries and rooftop generators isolated from ground-level utility rooms.',
        actionTaken:
          'Tamil Nadu Health Department revised clinical establishment norms making rooftop backup power mandatory for NABH hospital accreditation.',
      },
      {
        domain: 'Infrastructure',
        lesson:
          'Reservoir flood discharge protocols must account for tidal cycles and river carrying capacity with gradual staged releases.',
        actionTaken:
          'Water Resources Department (WRD) instituted computerized early release protocols and widened Adyar river mouth at Thiruvanmiyur.',
      },
      {
        domain: 'Communication',
        lesson:
          'Commercial cellular networks are vulnerable to power loss; emergency services require hardened satellite and Ham radio backups.',
        actionTaken:
          'State Disaster Management Authority established permanent VHF/UHF wireless repeater stations and satellite phone command nodes.',
      },
    ],
    recommendations: [
      'Strictly prohibit critical hospital electrical and life-support plant installations below ground elevation.',
      'Widen and de-silt Adyar, Cooum, and Buckingham Canal channels to restore historical 60,000 cusec discharge capacity.',
      'Install automated water level sensors along Chembarambakkam reservoir linked to public siren alert systems.',
      'Construct stormwater underground holding tanks and interconnected drainage canals across Velachery and Madipakkam basins.',
    ],
    tags: ['Chembarambakkam Release', 'MIOT Hospital Tragedy', 'Adyar River', 'Urban Drainage Choke', 'Chennai Airport'],
    majorEvents: [
      {
        hourOffset: 0,
        timestampLabel: '00:00 - Bay of Bengal Cloudburst',
        title: 'Unprecedented 494mm 24-hr Deluge Begins',
        category: 'Weather',
        description: 'Intense convective rain bands strike Chennai metropolitan coast. Rainfall rates exceed 80mm/h continuously.',
        severity: 'Medium',
        impactMetric: 'Precipitation: 88 mm/h',
        coordinates: [13.08, 80.27],
      },
      {
        hourOffset: 6,
        timestampLabel: '06:00 - Chembarambakkam Tank Surges',
        title: 'Chembarambakkam Reaches Maximum Capacity',
        category: 'Hydrology',
        description: 'Inflow into Chembarambakkam reservoir surges to 32,000 cusecs. Water level hits 23.5 ft (danger mark 24 ft).',
        severity: 'High',
        impactMetric: 'Reservoir Level: 23.5 ft',
        coordinates: [13.011, 80.058],
      },
      {
        hourOffset: 10,
        timestampLabel: '10:00 - Midnight Reservoir Sluice Release',
        title: '29,000 Cusecs Discharged into Adyar River',
        category: 'Hydrology',
        description: 'Sluice gates opened wide during peak midnight hours. A massive wall of water surges down the Adyar river channel towards the sea.',
        severity: 'Critical',
        impactMetric: 'Discharge: 29,000 cusecs',
        coordinates: [13.015, 80.12],
        isCriticalFailurePoint: true,
        lessonLearned: 'Sudden high-volume discharge during the night gave downstream residents zero daylight evacuation window.',
      },
      {
        hourOffset: 14,
        timestampLabel: '14:00 - Saidapet Bridge & GST Road Overtopped',
        title: 'Adyar River Breaches Banks by 3.5m',
        category: 'Infrastructure',
        description: 'Saidapet bridge inundated by 2.2m raging current. GST Road severed. Airport runway flooded under 1.5m water, halting all flights.',
        severity: 'Critical',
        impactMetric: 'Airport & GST Road Severed',
        coordinates: [13.021, 80.222],
      },
      {
        hourOffset: 18,
        timestampLabel: '18:00 - MIOT Hospital Power Blackout',
        title: 'Basement Generators Submerged; 18 Ventilator Failures',
        category: 'Medical',
        description: 'Adyar floodwaters submerge MIOT hospital basement B1/B2. Emergency generators and transformer switchboards short out, cutting power to ICU.',
        severity: 'Critical',
        impactMetric: '18 ICU Fatalities',
        coordinates: [13.023, 80.178],
        isCriticalFailurePoint: true,
        lessonLearned: 'Hospital emergency backup electrical systems must never be located in floodplain basements.',
      },
      {
        hourOffset: 22,
        timestampLabel: '22:00 - Citizen Rescue & Ham Radio Deployment',
        title: 'Crowdsourced Digital Relief & Armed Forces Boats',
        category: 'Rescue',
        description: 'Navy BAUTs, Army amphibious vehicles, and thousands of citizen volunteers coordinate rescues via social media and Ham radio relays.',
        severity: 'Successful Intervention',
        impactMetric: '45,000+ Extracted from Rooftops',
        coordinates: [12.981, 80.218],
        isSuccessfulIntervention: true,
      },
    ],
  },
  {
    id: 'cyclone-2019-fani',
    name: '2019 Cyclone Fani (Odisha Zero-Casualty Preparedness Protocol)',
    type: 'Cyclone / Typhoon',
    date: 'May 03, 2019',
    location: 'Puri, Bhubaneswar, Cuttack, Chilika & Coastal Odisha',
    coordinates: [19.813, 85.831], // Puri Coastal Strike Point
    severity: 'High',
    description:
      'Extremely Severe Cyclonic Storm Fani made landfall near Puri with sustained winds of 215 km/h (gusting to 250 km/h) and a 1.5m storm surge. Building upon institutional memory from the catastrophic 1999 Odisha Super Cyclone, the state executed the largest pre-emptive evacuation in Indian history, moving 1.4 million people to cyclone shelters within 24 hours and keeping fatalities below 64.',
    peakRainfallRate: '95 mm/h',
    peakWaterLevel: '+1.5 m storm surge',
    casualties: 64,
    evacuatedCount: 1400000,
    economicDamage: '₹24,000 Crore ($3.3 Billion)',
    affectedHospitals: [
      'Puri District Headquarters Hospital (Severe roof damage; mobile medical units maintained emergency services)',
      'AIIMS Bhubaneswar (Ground-floor glass blown out; rooftop backup power kept all ICUs functioning seamlessly)',
      'Capital Hospital Bhubaneswar (Trauma ward operated on emergency DG power throughout cyclone landfall)',
    ],
    affectedRoads: [
      'NH-316 Puri-Bhubaneswar Highway (Over 10,000 trees and 500 electric poles uprooted; cleared within 12 hours by NDRF/ODRAF)',
      'Marine Drive Puri-Konark (Sections washed away by storm surge erosion)',
      'Bhubaneswar Biju Patnaik Airport (Terminal glass shattered and ATC radar equipment damaged; restored in 48 hours)',
    ],
    emergencyShelters: [
      'Puri Multi-Purpose Cyclone Shelter Network (893 engineered concrete MPCS shelters accommodated 1.4M evacuees)',
      'Chilika High-Ground Coastal Shelter (Safe haven for 3,400 fishing community members)',
      'Bhubaneswar University Campus Shelters (Provided meals, clean water, and medical triage)',
    ],
    rootCauseFailures: [
      'Massive power transmission grid collapse: 156,000 electric poles and 34 high-voltage towers snapped like matchsticks, causing a 14-day statewide blackout.',
      'Total loss of commercial mobile telecom towers within 2 hours of landfall due to antenna shearing.',
      'Severe treefall blocked 100% of urban arterial roads, temporarily stalling emergency supply trucks.',
    ],
    successfulInterventions: [
      'Pre-Emptive 1.4 Million Evacuation: 893 cyclone shelters pre-stocked with food, water purification tablets, and baby food, saving an estimated 10,000+ lives.',
      'Satellite Phone & Wireless Mesh: Chief Secretary and District Collectors used SAT-phones and VHF police wireless, ensuring zero break in chain of command.',
      'Pre-Positioned Tree-Clearing Teams: ODRAF and NDRF teams pre-staged with hydraulic cutters every 10km along NH-316 cleared arterial routes in under 12 hours.',
    ],
    lessonsLearned: [
      {
        domain: 'Infrastructure',
        lesson:
          'Coastal power transmission lines must be transitioned to underground cabling or cyclone-resilient tubular steel poles.',
        actionTaken:
          'Odisha government initiated ₹1,500 Crore underground cabling project for Puri and Bhubaneswar coastal grid.',
      },
      {
        domain: 'Public Warning',
        lesson:
          'Localized village-level megaphone siren alerts and early SMS broadcasts achieve near 100% evacuation compliance.',
        actionTaken:
          'Early Warning Dissemination System (EWDS) sirens installed in 122 coastal locations along Odisha coastline.',
      },
      {
        domain: 'Logistics',
        lesson:
          'Pre-positioning dry rations and sanitary supplies in engineered shelters 48 hours before landfall prevents supply chaos post-disaster.',
        actionTaken:
          'OSDMA institutionalized 48-hour pre-landfall automated supply staging protocols for all cyclone categories.',
      },
    ],
    recommendations: [
      'Accelerate underground electrical cabling across all urban coastal towns within 50km of shoreline.',
      'Equip all coastal Multi-Purpose Cyclone Shelters with dedicated solar microgrids and satellite phones.',
      'Mandate aerodynamic structural building codes for coastal hospitals and emergency command centers.',
      'Maintain roadside tree pruning programs to minimize storm-induced transmission line shearing.',
    ],
    tags: ['Odisha Evacuation Model', 'Zero Casualty Benchmark', 'Cyclone Fani', 'Power Grid Shearing', 'MPCS Shelters'],
    majorEvents: [
      {
        hourOffset: 0,
        timestampLabel: '00:00 - T-24h Mass Evacuation Trigger',
        title: '1.4 Million Citizens Evacuated to MPCS Shelters',
        category: 'Evacuation',
        description: 'Odisha government mobilizes 25,000 personnel, moving 1.4M people from thatched huts into 893 concrete cyclone shelters in 24 hours.',
        severity: 'Successful Intervention',
        impactMetric: '1.4M People Safely Sheltered',
        coordinates: [19.813, 85.831],
        isSuccessfulIntervention: true,
      },
      {
        hourOffset: 8,
        timestampLabel: '08:00 - Category 5 Landfall at Puri',
        title: 'Eye of Cyclone Fani Hits Puri Coast (215 km/h)',
        category: 'Weather',
        description: 'Violent eyewall winds gusting to 250 km/h strike Puri and Chilika coast. Storm surge of 1.5m floods coastal villages.',
        severity: 'Critical',
        impactMetric: 'Wind: 215 km/h, Surge: 1.5m',
        coordinates: [19.80, 85.82],
      },
      {
        hourOffset: 12,
        timestampLabel: '12:00 - Complete Telecom & Power Grid Failure',
        title: '156,000 Electric Poles Snapped; Cell Towers Down',
        category: 'Infrastructure',
        description: 'High-voltage transmission grid collapses across Puri and Khordha. State Emergency Operations Center switches to satellite phones.',
        severity: 'Critical',
        impactMetric: '100% Power Grid Blackout',
        coordinates: [20.296, 85.824],
        isCriticalFailurePoint: true,
      },
      {
        hourOffset: 16,
        timestampLabel: '16:00 - Rapid Road Clearing Operation',
        title: 'NDRF & ODRAF Clear NH-316 Arterial Route',
        category: 'Rescue',
        description: 'Pre-staged tactical teams with motorized chain-saws clear over 1,200 fallen banyan trees, reopening emergency access to Puri within 12 hours.',
        severity: 'Successful Intervention',
        impactMetric: 'Arterial Highway Cleared in 12h',
        coordinates: [20.05, 75.83],
        isSuccessfulIntervention: true,
      },
    ],
  },
  {
    id: 'flood-2021-chamoli',
    name: '2021 Chamoli Glacial Flash Flood (Rishi Ganga & Dhauliganga)',
    type: 'Flash Flood',
    date: 'February 07, 2021',
    location: 'Rishi Ganga, Dhauliganga & Alaknanda River Valleys (Raini, Tapovan, Joshimath, Uttarakhand)',
    coordinates: [30.492, 79.625], // Tapovan / Rishi Ganga Gorge
    severity: 'Critical',
    description:
      'A massive rock and ice hanging glacier detached from the Ronti peak of Nanda Devi at 5,600m elevation, plunging 3,000m into the Raunthi Gad stream. The resulting catastrophic debris slurry and flash flood tore down the steep Rishi Ganga and Dhauliganga gorges at 60 km/h, completely obliterating the Rishi Ganga hydel plant and trapping over 150 workers inside the Tapovan Vishnugad tunnel.',
    peakRainfallRate: 'Glacial Avalanche Slurry Surge',
    peakWaterLevel: '+18.0 m surge wall in narrow gorge',
    casualties: 204,
    evacuatedCount: 2500,
    economicDamage: '₹1,500 Crore ($200 Million)',
    affectedHospitals: [
      'Joshimath Sub-Divisional Hospital (Triage base for hypothermic tunnel survivors; emergency helicopter transfers to AIIMS Rishikesh)',
      'Raini Village Emergency Field Clinic (Temporary medical post established by ITBP and Army medical corps)',
    ],
    affectedRoads: [
      'Joshimath-Malari Border Road Bridge at Raini (Washed away, severing connectivity to 13 border outposts and tribal villages)',
      'Tapovan Project Approach Road (Submerged under 12m of thick boulder slurry and silt)',
      'Badrinath National Highway (NH-07) (Closed as precautionary measure due to Alaknanda river surge downstream)',
    ],
    emergencyShelters: [
      'ITBP 1st Battalion Base Camp Joshimath (Command, rescue staging, and victim family care center)',
      'Tapovan High-Ground Relief Compound (Emergency shelter and air-drop helipad)',
    ],
    rootCauseFailures: [
      'Total absence of high-altitude Early Warning Systems (EWS), acoustic sensors, or automatic river stage sirens along the upper Rishi Ganga catchment.',
      'Tapovan hydel project subterranean tunnel lacked secondary emergency escape shafts or waterproof shelter chambers.',
      'Delay in detecting the high-altitude glacial detachment due to cloud cover and lack of real-time satellite radar feeds.',
    ],
    successfulInterventions: [
      'ITBP First Response at Tapovan Intake Tunnel: Indo-Tibetan Border Police (ITBP) teams entered the muck-filled auxiliary tunnel within 45 minutes, successfully extracting 12 trapped workers alive.',
      'SDRF & Army Drone Reconnaissance: Unmanned aerial drones mapped blocked tunnel sections and artificial lake formations upstream in Raunthi stream.',
      'Downstream Dam Drawdown: Downstream barrages at Srinagar and Rishikesh opened gates immediately, neutralizing the surge wave before it reached populous plains.',
    ],
    lessonsLearned: [
      {
        domain: 'Infrastructure',
        lesson:
          'High-altitude Himalayan hydropower tunnels must incorporate vertical escape shafts, emergency oxygen shelters, and double-gated debris bulkheads.',
        actionTaken:
          'Ministry of Power mandated independent safety reviews and escape shafts for all under-construction Himalayan tunnel projects.',
      },
      {
        domain: 'Public Warning',
        lesson:
          'Automated acoustic sensors and Doppler radar water-stage gauges in upper glacial catchments can provide 15-20 minutes of vital advance warning downstream.',
        actionTaken:
          'Wadia Institute of Himalayan Geology and NDMA deployed real-time acoustic monitoring stations at 18 vulnerable glacial lakes.',
      },
      {
        domain: 'Logistics',
        lesson:
          'Downstream coordinated flood gate operations can completely prevent surge impacts in major river plains.',
        actionTaken:
          'Instituted an integrated Alaknanda-Ganga automated cascade emergency protocol connecting all 8 hydel dams to State EOC.',
      },
    ],
    recommendations: [
      'Install automated GLOF (Glacial Lake Outburst Flood) and debris flow radar sensors linked to automated sirens along all upper Himalayan river gorges.',
      'Construct reinforced secondary escape shafts and satellite communication pods inside all subterranean hydropower tunnels.',
      'Strictly restrict development and heavy construction in designated high-risk Himalayan paraglacial hazard zones.',
    ],
    tags: ['Glacial Avalanche', 'GLOF', 'Tapovan Tunnel Rescue', 'Rishi Ganga', 'Uttarakhand Flash Flood'],
    majorEvents: [
      {
        hourOffset: 0,
        timestampLabel: '00:00 - High-Altitude Rock-Ice Detachment',
        title: 'Glacial Hanging Wall Collapses at Nanda Devi (5,600m)',
        category: 'Weather',
        description: '27 million cubic meters of rock and hanging ice detach, free-falling into Raunthi Gad and creating a boiling debris slurry.',
        severity: 'Critical',
        impactMetric: '27M m³ Rock & Ice Avalanche',
        coordinates: [30.40, 79.72],
      },
      {
        hourOffset: 1,
        timestampLabel: '01:00 - Flash Flood Tears Down Rishi Ganga',
        title: 'Rishi Ganga Hydel Project Completely Obliterated',
        category: 'Infrastructure',
        description: 'An 18-meter wall of water, boulders, and silt surges at 60 km/h, destroying the 13.2MW Rishi Ganga dam and Raini bridge.',
        severity: 'Critical',
        impactMetric: '18m High Debris Wall',
        coordinates: [30.485, 79.695],
        isCriticalFailurePoint: true,
        lessonLearned: 'Absence of upstream acoustic sensors gave workers zero minutes of evacuation warning.',
      },
      {
        hourOffset: 2,
        timestampLabel: '02:00 - Tapovan Vishnugad Tunnel Inundation',
        title: 'Tapovan Barrage Destroyed; 150 Workers Trapped in Tunnel',
        category: 'Infrastructure',
        description: 'Debris flood submerges Tapovan hydel barrage. Boulders and thick mud pack the 2.5km main headrace tunnel with workers inside.',
        severity: 'Critical',
        impactMetric: '150+ Trapped in Subterranean Tunnel',
        coordinates: [30.492, 79.625],
        isCriticalFailurePoint: true,
      },
      {
        hourOffset: 3,
        timestampLabel: '03:00 - ITBP Heroic Rescue at Auxiliary Tunnel',
        title: 'ITBP Extracts 12 Trapped Workers Alive',
        category: 'Rescue',
        description: 'ITBP personnel dig through waist-deep slurry in the auxiliary tunnel with bare hands and ropes, pulling 12 survivors to safety.',
        severity: 'Successful Intervention',
        impactMetric: '12 Lives Saved',
        coordinates: [30.492, 79.625],
        isSuccessfulIntervention: true,
      },
    ],
  },
  {
    id: 'flood-2005-mumbai',
    name: '2005 Mumbai Urban Deluge (944mm Cloudburst & Mithi River Choke)',
    type: 'Urban Flood',
    date: 'July 26, 2005',
    location: 'Mumbai Metropolitan Region (Mithi River, Santa Cruz, Kurla, Kalina, Mahim Creek)',
    coordinates: [19.076, 72.877], // Mumbai Mithi River Basin
    severity: 'Critical',
    description:
      'A catastrophic cloudburst dumped 944mm of rain in 24 hours over suburban Mumbai, coinciding with a 4.48m high tide. The 15km-long Mithi River, choked with plastic debris and constrained by airport runway expansion and slum encroachments, was unable to discharge into Mahim Creek, submerging 60% of suburban Mumbai.',
    peakRainfallRate: '190 mm/h (Santa Cruz peak)',
    peakWaterLevel: '+4.5 m above street level',
    casualties: 1094,
    evacuatedCount: 2000000,
    economicDamage: '₹35,000 Crore ($4.8 Billion)',
    affectedHospitals: [
      'KEM Hospital Parel & Sion Hospital (Ground floor casualty and pediatric wards submerged; oxygen cylinders floated in water)',
      'Cooper Hospital Vile Parle (Power cut off; doctors performed emergency surgeries under torchlight)',
    ],
    affectedRoads: [
      'Western Express Highway (WEH) & Eastern Express Highway (EEH) (Over 100,000 vehicles submerged and abandoned overnight)',
      'Mumbai Suburban Railway Lifeline (Central, Western & Harbour lines stalled for 48 hours; 150,000 commuters stranded at stations)',
      'Chhatrapati Shivaji Maharaj International Airport (CSMIA) (Runway submerged by 1.2m overflow from Mithi River)',
    ],
    emergencyShelters: [
      'Ganesh Mandals & Community Halls (Over 500 citizen community centers provided shelter and dry food to stranded commuters)',
      'Siddhivinayak & Mahim Dargah Relief Centers (Distributed 100,000 meals to stranded citizens on streets)',
    ],
    rootCauseFailures: [
      'BRIMSTOWAD storm drainage master plan recommendations from 1993 had not been implemented.',
      'Mithi River course had been unnaturally narrowed by 50% and diverted at a 90-degree angle for airport runway expansion.',
      'Drainage outfalls into the Arabian Sea lacked automated flap floodgates, causing seawater backflow into streets during high tide.',
    ],
    successfulInterventions: [
      'Mumbai Citizen Solidarity ("Spirit of Mumbai"): Common citizens formed human chains along flooded railway tracks, took stranded strangers into their homes, and distributed free tea and food along all highway exits.',
      'Navy Diving Teams & INS Shikra deployed dinghies to rescue passengers trapped in double-decker BEST buses in Kurla.',
    ],
    lessonsLearned: [
      {
        domain: 'Infrastructure',
        lesson:
          'Urban rivers like Mithi cannot function as sewage drains; they require deep widening, desilting, and mangrove buffer zones.',
        actionTaken:
          'Established Mithi River Development and Protection Authority (MRDPA) and expedited BRIMSTOWAD project.',
      },
      {
        domain: 'Public Warning',
        lesson:
          'Unified command center with real-time automatic weather stations across municipal wards is critical during hyper-localized cloudbursts.',
        actionTaken:
          'Installed 60 automatic weather stations (AWS) across Mumbai with ward-level digital flood monitoring.',
      },
    ],
    recommendations: [
      'Complete all 8 pumping stations under the BRIMSTOWAD project with automated high-capacity diesel pumps.',
      'Restore natural mangrove buffer floodplains along Mahim Creek and Thane Creek.',
      'Install automatic hydraulic floodgates at all 107 tidal outfalls along Mumbai coast.',
    ],
    tags: ['Mumbai 26 July', '944mm Cloudburst', 'Mithi River', 'BRIMSTOWAD', 'Suburban Railway Stall'],
    majorEvents: [
      {
        hourOffset: 0,
        timestampLabel: '14:00 - 944mm Cloudburst Inception',
        title: 'Severe Convective Cloudburst Strikes Mumbai',
        category: 'Weather',
        description: 'Santa Cruz meteorological observatory records 190mm/h rainfall rate. Suburban roads immediately turn into rushing rivers.',
        severity: 'Critical',
        impactMetric: 'Precipitation: 190 mm/h',
        coordinates: [19.08, 72.88],
      },
      {
        hourOffset: 4,
        timestampLabel: '18:00 - Mithi River & Mahim High Tide Choke',
        title: '4.48m High Tide Locks Mithi River Discharge',
        category: 'Hydrology',
        description: 'Mithi river overflows banks at Kurla, Kalina, and BKC. Floodwater submerges Mumbai airport runway and suburban railway tracks.',
        severity: 'Critical',
        impactMetric: 'Suburban Railway Stalled',
        coordinates: [19.07, 72.86],
        isCriticalFailurePoint: true,
      },
    ],
  },
];

export const MAP_ENTITIES: MapEntity[] = [
  // Kerala Periyar / Aluva Basin Infrastructure Matrix
  {
    id: 'hosp-aluva-district',
    name: 'Aluva District / Taluk Hospital',
    type: 'Hospital',
    status: 'Compromised',
    coordinates: [10.108, 76.353],
    elevationMeters: 4.2,
    criticalDetails:
      '180-bed critical care hospital located 200m from Periyar river. Ground-level transformer and oxygen manifold vulnerable to river stage >+3.8m.',
    capacity: '180 Inpatient Beds, 14 ICU Beds',
    vulnerabilityFactor: 'Backup DG power situated at ground grade; flooded during 2018 peak.',
  },
  {
    id: 'road-nh544-aluva',
    name: 'NH-544 Marthanda Varma Causeway & Bridge',
    type: 'Road / Causeway',
    status: 'Flooded / Blocked',
    coordinates: [10.112, 76.348],
    elevationMeters: 3.1,
    criticalDetails:
      'Primary North-South transit arterial bridge on NH-544. Submerged by 1.8m water during 2018 floods, severing Ernakulam from Thrissur.',
    capacity: '4-Lane National Highway Transit (45,000 vehicles/day)',
    vulnerabilityFactor: 'Approaches sit in low-lying river meander floodplain.',
  },
  {
    id: 'airport-cial-kochi',
    name: 'Cochin International Airport (CIAL) & Solar Park',
    type: 'Incident Hotspot',
    status: 'Compromised',
    coordinates: [10.155, 76.398],
    elevationMeters: 5.5,
    criticalDetails:
      'World-first 100% solar-powered international airport. Runway and 12MW solar installation sit adjacent to Chengalthodu canal feeding into Periyar.',
    capacity: '3,400m Runway & 30,000 passengers/day',
    vulnerabilityFactor: 'Chengalthodu canal overflow breaches runway perimeter fence at river stage +4.0m.',
  },
  {
    id: 'dam-idukki-cheruthoni',
    name: 'Idukki Arch Dam & Cheruthoni 5-Radial Spillway',
    type: 'Dam / Floodgate',
    status: 'Operational',
    coordinates: [9.845, 76.975],
    elevationMeters: 732.0,
    criticalDetails:
      'Massive 555-ft concrete double-curvature arch dam holding 2,000M m³ reservoir. Five radial floodgates discharge directly into Cheruthoni/Periyar basin.',
    capacity: '1,996 Million m³ Full Reservoir Capacity',
    vulnerabilityFactor: 'Sudden discharge of all 5 gates creates 4-hour delayed surge wave in Aluva.',
  },
  {
    id: 'grid-kalamassery-substation',
    name: 'Kalamassery 220kV Extra High Voltage Grid Substation',
    type: 'Power Substation',
    status: 'Reinforced',
    coordinates: [10.055, 76.320],
    elevationMeters: 8.5,
    criticalDetails:
      'Critical grid substation powering Kochi metro, hospitals, and water treatment plants. Protected by volunteer sandbag perimeter in 2018.',
    capacity: '220kV / 110kV Regional Power Hub',
    vulnerabilityFactor: 'Switchyard elevation +8.5m; perimeter drainage ditch requires active high-volume pumping.',
  },
  {
    id: 'shelter-uc-college',
    name: 'Union Christian (UC) College Relief Center & Auditorium',
    type: 'Emergency Shelter',
    status: 'Operational',
    coordinates: [10.125, 76.338],
    elevationMeters: 18.0,
    criticalDetails:
      'Elevated historical hilltop campus that served as primary shelter for 4,200 evacuees during 2018 floods. Equipped with community solar and borewells.',
    capacity: '4,500 Evacuees',
    vulnerabilityFactor: 'None; elevated laterite plateau.',
  },
  {
    id: 'base-vypeen-marine',
    name: 'Vypeen Coastal Harbor / Fishermen Rescue Flotilla Staging Base',
    type: 'Incident Hotspot',
    status: 'Operational',
    coordinates: [10.002, 76.241],
    elevationMeters: 1.8,
    criticalDetails:
      'Home port of the civilian marine fishermen rescue flotilla. Pre-staged flatbed truck loading ramps for rapid inland boat deployment.',
    capacity: '200 Marine Trawlers & 800 Master Helmsmen',
    vulnerabilityFactor: 'Tidal surge during coastal cyclone landfall.',
  },

  // Chennai Adyar Corridor Infrastructure
  {
    id: 'hosp-miot-chennai',
    name: 'MIOT International Hospital & Adyar Basin',
    type: 'Hospital',
    status: 'Compromised',
    coordinates: [13.023, 80.178],
    elevationMeters: 6.0,
    criticalDetails:
      '1,000-bed multispecialty tertiary hospital located on Adyar riverbank in Manapakkam. Submerged in 2015 when Chembarambakkam released 29,000 cusecs.',
    capacity: '1,000 Beds, 65 ICU Suites',
    vulnerabilityFactor: 'Basement utility pits house electrical transformers; retrofit required rooftop DG units.',
  },
  {
    id: 'dam-chembarambakkam',
    name: 'Chembarambakkam Reservoir & Flood Sluice Regulators',
    type: 'Dam / Floodgate',
    status: 'Operational',
    coordinates: [13.011, 80.058],
    elevationMeters: 26.0,
    criticalDetails:
      '3,645 million cubic feet rain-fed reservoir supplying Chennai drinking water. Sluice gates control surge discharge directly into the Adyar river course.',
    capacity: '3,645 Mcft Reservoir Capacity',
    vulnerabilityFactor: 'Delayed release forces emergency high-volume midnight discharge directly onto high tide.',
  },
  {
    id: 'road-saidapet-bridge',
    name: 'Saidapet Maraimalai Adigal Bridge & GST Corridor',
    type: 'Road / Causeway',
    status: 'Flooded / Blocked',
    coordinates: [13.021, 80.222],
    elevationMeters: 7.2,
    criticalDetails:
      'Arterial highway bridge over Adyar River connecting Central Chennai to Airport and Tambaram. Overtopped by 2.2m raging floodwater in 2015.',
    capacity: '6-Lane Major Arterial Corridor (80,000 vehicles/day)',
    vulnerabilityFactor: 'Adyar river channel narrowing under bridge piers creates hydraulic backwater.',
  },
  {
    id: 'shelter-puri-mpcs',
    name: 'Puri Multi-Purpose Cyclone Shelter Network (MPCS-04)',
    type: 'Emergency Shelter',
    status: 'Operational',
    coordinates: [19.813, 85.831],
    elevationMeters: 12.0,
    criticalDetails:
      'Reinforced concrete 2-story stilted cyclone shelter engineered to withstand 260 km/h winds and 3.0m storm surges. Equipped with satellite SAT-phone.',
    capacity: '2,500 Evacuees',
    vulnerabilityFactor: 'Window shutter seal maintenance required every pre-monsoon season.',
  },
];

export const MAP_MARKER_EVENTS: MapMarkerEvent[] = [
  {
    id: 'evt-kerala-01',
    disasterId: 'flood-2018-kerala',
    disasterName: '2018 Kerala Monsoon Floods',
    title: 'Hospital Generator Room Flooded (Ground Utility Pit)',
    location: 'Aluva District / Taluk Hospital',
    coordinates: [10.108, 76.353],
    date: 'Aug 16, 2018 - 08:00',
    severity: 'Critical',
    category: 'Critical Healthcare Infrastructure Failure',
    impact: 'ICU lost power when Periyar surge submerged ground-level transformer. 68 critical patients manually ventilated with bag-valve masks during emergency boat extraction.',
    lesson: 'Emergency backup power in floodplain hospitals must never be placed at ground or sub-grade elevation.',
    recommendation: 'Mandate rooftop placement (+4.0m minimum above 100-yr flood level) for all critical care hospital generators and oxygen manifolds.',
    entityType: 'Hospital',
  },
  {
    id: 'evt-kerala-02',
    disasterId: 'flood-2018-kerala',
    disasterName: '2018 Kerala Monsoon Floods',
    title: 'NH-544 Marthanda Varma Bridge Overtopping',
    location: 'NH-544 / Periyar River Crossing, Aluva',
    coordinates: [10.112, 76.348],
    date: 'Aug 16, 2018 - 04:00',
    severity: 'High',
    category: 'Transportation Lifeline Severance',
    impact: '1.8m deep river current severed main north-south highway connecting Ernakulam and Thrissur for 48 hours, blocking ambulance convoys.',
    lesson: 'Lack of automated hydraulic barrier arms allowed 12 civilian cars to get trapped in rising approach waters.',
    recommendation: 'Install automated drop-arm warning barriers triggered when Periyar stage crosses +3.0m threshold.',
    entityType: 'Road',
  },
  {
    id: 'evt-kerala-03',
    disasterId: 'flood-2018-kerala',
    disasterName: '2018 Kerala Monsoon Floods',
    title: 'Fishermen "Coastal Army" Marine Flotilla Rescue',
    location: 'Aluva & Chalakudy Urban Inundation Zones',
    coordinates: [10.05, 76.32],
    date: 'Aug 16, 2018 - 12:00',
    severity: 'Successful Intervention',
    category: 'Civic Community Rescue Success',
    impact: '4,500 traditional marine fishermen deployed 669 wooden and fiberglass boats overland, rescuing over 65,000 stranded citizens from rooftops.',
    lesson: 'Sturdy wooden marine fishing boats could navigate turbulent flood rapids and submerged barbed-wire walls far better than military rubber inflatables.',
    recommendation: 'Institutionalize a permanent state registry, automated insurance, and satellite navigation radios for civilian marine rescue flotillas.',
    entityType: 'Basin',
  },
  {
    id: 'evt-chennai-01',
    disasterId: 'flood-2015-chennai',
    disasterName: '2015 Chennai Mega Inundation',
    title: 'MIOT Hospital Basement Generator Submersion Tragedy',
    location: 'MIOT Hospital, Manapakkam, Adyar Basin',
    coordinates: [13.023, 80.178],
    date: 'Dec 01, 2015 - 18:00',
    severity: 'Critical',
    category: 'Institutional Memory Tragedy',
    impact: 'Adyar floodwaters submerged basement generator room B1/B2; 18 ventilator patients lost life support when auxiliary power failed.',
    lesson: 'Critical care hospitals in coastal river basins must have independent rooftop power islands with dedicated 72-hour fuel buffers.',
    recommendation: 'National building codes must legally prohibit life-safety switchgear and generator installations in sub-grade basements.',
    entityType: 'Hospital',
  },
  {
    id: 'evt-chennai-02',
    disasterId: 'flood-2015-chennai',
    disasterName: '2015 Chennai Mega Inundation',
    title: 'Chembarambakkam Midnight Sluice Discharge Surge',
    location: 'Chembarambakkam Sluice Gates & Adyar Channel',
    coordinates: [13.011, 80.058],
    date: 'Dec 01, 2015 - 22:00',
    severity: 'High',
    category: 'Dam Operation Protocol Failure',
    impact: 'Sudden release of 29,000 cusecs during midnight hours directly onto high tide caused catastrophic downstream flooding of 1.8M homes.',
    lesson: 'Reservoirs must be operated with dynamic rule curves, releasing water gradually during early rain phases rather than sudden midnight dumpings.',
    recommendation: 'Implement CWC automated rule curves and computerized predictive runoff models across all coastal reservoirs.',
    entityType: 'Dam',
  },
  {
    id: 'evt-odisha-01',
    disasterId: 'cyclone-2019-fani',
    disasterName: '2019 Cyclone Fani (Odisha)',
    title: 'Pre-Emptive 1.4 Million Citizen Evacuation Benchmark',
    location: 'Puri & Coastal Odisha Multi-Purpose Cyclone Shelters',
    coordinates: [19.813, 85.831],
    date: 'May 02, 2019 - 14:00',
    severity: 'Successful Intervention',
    category: 'Institutional Preparedness Success',
    impact: 'Odisha government safely evacuated 1.4 million vulnerable residents into 893 concrete cyclone shelters in under 24 hours, keeping fatalities under 64.',
    lesson: 'Institutional memory from the 1999 Super Cyclone led to engineered cyclone shelters, community volunteer networks, and zero-casualty SOPs.',
    recommendation: 'Replicate the Odisha Multi-Purpose Cyclone Shelter and Early Warning Dissemination System (EWDS) across all Indian coastal states.',
    entityType: 'Shelter',
  },
];

export const AI_SYNTHESIS_INSIGHTS = {
  recurringVulnerabilities: [
    {
      category: 'Healthcare & Critical Infrastructure Power',
      pattern: 'Sub-Grade & Ground-Level Electrical Generator / Switchgear Placement',
      repeatCount: 4,
      underlyingRootCause:
        'Emergency diesel generators, Automatic Transfer Switches (ATS), and medical oxygen manifolds are historically installed in ground-level or basement utility vaults for architectural convenience, rendering them 100% vulnerable to initial flood water entry.',
      historicalIncidents: [
        '2018 Kerala Floods (Aluva District Hospital)',
        '2015 Chennai Deluge (MIOT Hospital 18 Fatalities)',
        '2005 Mumbai Deluge (KEM & Sion Hospitals)',
      ],
      mitigationStrategy:
        'Enact statutory NDMA hospital building safety guidelines mandating rooftop (+4.0m above 100-year flood datum) placement of primary emergency generators and 72-hour diesel fuel buffers.',
    },
    {
      category: 'Hydrology & Dam Cascade Management',
      pattern: 'Delayed Reservoir Discharge & Sudden High-Volume Night Releases',
      repeatCount: 3,
      underlyingRootCause:
        'Dam operators retain water near Full Reservoir Level (FRL) to maximize hydropower and municipal storage, forcing panicked massive spillway releases during late-monsoon cloudbursts directly onto downstream populated floodplains during high tide.',
      historicalIncidents: [
        '2018 Kerala Floods (Idukki & Idamalayar Simultaneous Release)',
        '2015 Chennai Deluge (Chembarambakkam 29,000 Cusec Midnight Release)',
      ],
      mitigationStrategy:
        'Implement Central Water Commission (CWC) mandatory dynamic monsoon Rule Curves integrated with automated satellite rainfall forecasting to enforce pre-emptive gradual drawdown.',
    },
    {
      category: 'Transportation & Lifeline Severance',
      pattern: 'Low-Lying Bridge Approaches & Unprotected Arterial Underpasses',
      repeatCount: 4,
      underlyingRootCause:
        'Highway and railway underpasses lack automated submersible pumps with elevated power controls, and low-lying river bridges lack automated barrier closures, stranding motorists within 90 minutes of river crest.',
      historicalIncidents: [
        '2018 Kerala Floods (NH-544 Marthanda Varma Bridge & Chalakudy Underpass)',
        '2015 Chennai Deluge (Saidapet Maraimalai Adigal Bridge & GST Road)',
        '2005 Mumbai Deluge (Western & Eastern Express Highways)',
      ],
      mitigationStrategy:
        'Install IoT-connected automated hydraulic flood drop-arms tied to river stage telemetry sensors at all high-risk river crossings.',
    },
  ],
  crossDisasterLessons: [
    {
      title: 'Decouple Critical Healthcare Lifelines from Ground-Level Flood Risks',
      synthesis:
        'During mega-floods in Chennai (2015) and Kerala (2018), ground-level power systems collapsed, crippling intensive care ventilators. When hospitals are architected as self-contained resilient islands with rooftop power, zero lives are lost.',
      concreteAction:
        'Mandate rooftop generator switchgear and 72-hour on-site fuel reservoirs across all district and tertiary care hospitals.',
    },
    {
      title: 'Institutional Memory & Pre-Emptive Evacuation Saves Thousands of Lives',
      synthesis:
        'Odisha transformed from 10,000+ casualties in the 1999 Super Cyclone to under 64 in Cyclone Fani (2019) by institutionalizing 893 Multi-Purpose Cyclone Shelters, village-level early warning sirens, and 24-hour mass evacuation drills.',
      concreteAction:
        'Codify automated village-level early warning dissemination protocols and pre-stocked multi-purpose disaster shelters nationwide.',
    },
    {
      title: 'Integrate Civilian Auxiliary Flotillas into Formal Disaster Frameworks',
      synthesis:
        'Kerala fishermen ("Coastal Army") rescued over 65,000 people in 2018 because their shallow-draft wooden boats could navigate residential fences and turbulent currents where military inflatables tore or lacked horsepower.',
      concreteAction:
        'Create a permanent State Disaster Management Authority registry with automated fuel stipends, GPS radios, and life-jackets for civilian marine boat operators.',
    },
  ],
  strategicRecommendations: [
    {
      area: 'Hospital & Healthcare Infrastructure',
      timeHorizon: 'Immediate (Year 1)',
      recommendation:
        'Mandate rooftop backup power systems, elevated liquid oxygen tanks, and 72-hour fuel buffers for all hospitals in river and coastal floodplains.',
      expectedImpact: '100% elimination of ventilator power blackouts during urban inundation.',
      responsibleEntity: 'National Disaster Management Authority (NDMA) & State Health Departments',
    },
    {
      area: 'Reservoir & Dam Cascade Modernization',
      timeHorizon: 'Short-Term (Year 1-2)',
      recommendation:
        'Implement dynamic satellite-linked monsoon rule curves across all 5,300+ Indian large dams with automated early gradual release schedules.',
      expectedImpact: 'Prevents man-made compounding flood peaks in downstream river valleys.',
      responsibleEntity: 'Central Water Commission (CWC) & State Irrigation / Power Boards',
    },
    {
      area: 'Automated Transport & Public Warning',
      timeHorizon: 'Medium-Term (Year 2-3)',
      recommendation:
        'Deploy IoT-enabled automated road barrier drop-arms on floodable causeways and EWDS sirens along vulnerable coastal and river corridors.',
      expectedImpact: 'Eliminates civilian vehicle strandings and provides 4-6 hours advance warning.',
      responsibleEntity: 'Ministry of Road Transport & Highways (MoRTH) & SDMAs',
    },
    {
      area: 'Institutional Memory & AI Knowledge Base',
      timeHorizon: 'Continuous Policy',
      recommendation:
        'Deploy RE:MEMBER platform across State Emergency Operations Centers (SEOCs) to standardize after-action review ingestion and real-time similarity matching.',
      expectedImpact: 'Prevents institutional amnesia across administrative leadership changes.',
      responsibleEntity: 'National Institute of Disaster Management (NIDM) & SDMAs',
    },
  ],
};

export const CROSS_DISASTER_INSIGHTS: CrossDisasterInsight[] = [
  {
    id: 'ins-01',
    category: 'Recurring Vulnerability',
    title: 'Sub-Grade & Basement Electrical Switchgear Placement',
    frequencyAcrossDisasters: 'Identified in 4 out of 5 major Indian flood disasters (Chennai 2015, Kerala 2018, Mumbai 2005)',
    description:
      'Historical analysis reveals that placing emergency diesel generators, transformer switchboards, and fuel pumps in basements or ground-level vaults is the single leading cause of hospital power failures and ventilator blackouts during flood crises.',
    affectedSectors: ['Hospitals & Healthcare Facilities', 'Emergency Dispatch Hubs', 'Data Centers & Communications'],
    historicalCaseStudies: [
      '2015 Chennai Deluge: MIOT Hospital lost all power when basement flooded, leading to 18 ICU ventilator patient deaths.',
      '2018 Kerala Floods: Aluva Taluk Hospital generator submerged; required emergency manual bag-valve ventilation for 68 patients.',
    ],
    standardOperatingProcedureUpdate:
      'Mandate that all hospital emergency power infrastructure in flood hazard zones be located on rooftops (+4.0m minimum above 100-year flood line) with 72-hour dedicated diesel fuel buffers.',
    priorityLevel: 'Critical Directive',
  },
  {
    id: 'ins-02',
    category: 'Repeated Failure Mode',
    title: 'Delayed Dam Water Release Leading to Compounding Midnight Spills',
    frequencyAcrossDisasters: 'Identified in Kerala 2018 and Chennai 2015',
    description:
      'Reservoirs held water until reaching 100% capacity to maximize storage, forcing sudden massive late-night spillway releases directly into encroached downstream river channels during peak rainfall and high tide.',
    affectedSectors: ['Water Resources & Irrigation', 'Hydropower Authorities', 'Downstream Municipalities'],
    historicalCaseStudies: [
      '2018 Kerala: Simultaneous release of 35 dams flooded Periyar and Pamba river basins.',
      '2015 Chennai: Chembarambakkam late-night release of 29,000 cusecs submerged Adyar river corridor.',
    ],
    standardOperatingProcedureUpdate:
      'Mandate dynamic Rule Curves linked to IMD Doppler radar forecasts, requiring pre-emptive staged drawdown to maintain a minimum 15% flood absorption cushion.',
    priorityLevel: 'Critical Directive',
  },
  {
    id: 'ins-03',
    category: 'Proven Intervention',
    title: 'Odisha Mass Pre-Emptive Evacuation & Concrete Shelter Model',
    frequencyAcrossDisasters: 'Saved thousands of lives in Cyclone Phailin (2013), Fani (2019), and Yaas (2021)',
    description:
      'Constructing engineered Multi-Purpose Cyclone Shelters (MPCS), training community disaster volunteers (Apada Mitra), and conducting mass 24-hour pre-emptive evacuations has established a global gold standard for cyclone resilience.',
    affectedSectors: ['Civil Defense & SDMA', 'Coastal Communities', 'Emergency Logistics'],
    historicalCaseStudies: [
      '2019 Cyclone Fani: 1.4 million citizens safely evacuated in 24 hours into 893 cyclone shelters with under 64 casualties.',
    ],
    standardOperatingProcedureUpdate:
      'Institutionalize automated 48-hour pre-landfall supply staging and multi-purpose stilted shelter networks across all 7,516 km of Indian coastline.',
    priorityLevel: 'High Priority',
  },
  {
    id: 'ins-04',
    category: 'Institutional Lesson',
    title: 'Integration of Civilian Fishermen Flotillas in Swiftwater Rescue',
    frequencyAcrossDisasters: 'Rescued 65,000+ in Kerala 2018; replicated in Chennai and Assam',
    description:
      'Traditional marine fishing trawlers and local seafaring helmsmen possess superior hull durability and engine power to navigate submerged fences, turbulent currents, and urban alleys compared to standard military inflatables.',
    affectedSectors: ['Emergency Rescue & Logistics', 'Fisheries Department', 'Civil Society Networks'],
    historicalCaseStudies: [
      '2018 Kerala Floods: 4,500 fishermen with 669 boats rescued over 65,000 trapped citizens within 72 hours.',
    ],
    standardOperatingProcedureUpdate:
      'Formally integrate coastal and inland boatmen into State Disaster Response plans with pre-arranged truck transport logistics, satellite radios, and direct insurance compensation.',
    priorityLevel: 'Operational Guideline',
  },
];

export const SAMPLE_DISASTER_REPORTS = [
  {
    title: 'Sample 1: Kerala State Disaster Management Authority (KSDMA) - Periyar River Basin After-Action Review (2018)',
    text: `AFTER-ACTION INCIDENT REVIEW REPORT: KERALA MEGA MONSOON INUNDATION
COMMANDING AGENCY: Kerala State Disaster Management Authority (KSDMA) & State EOC
INCIDENT: Periyar & Pamba River Basin Cascading Inundation
DATES: August 14 - 19, 2018
LOCATION: Ernakulam (Aluva), Thrissur (Chalakudy), Idukki & Pathanamthitta (Chengannur)

1. EXECUTIVE SUMMARY:
Between August 14 and 18, 2018, the state of Kerala experienced extreme torrential monsoon rainfall (164% above normal). Continuous cloudbursts in high-range catchments forced the simultaneous opening of 35 of 54 major reservoirs. Peak discharge into the Periyar river exceeded 4,500 cumecs, submerging urban townships, highways, and medical infrastructure.

2. IMPACT & CASUALTIES:
- Fatalities: 483 across the state; over 140 reported in landslides in Idukki and Wayanad.
- Evacuated population: 1,450,000 citizens accommodated across 3,874 relief camps.
- Agricultural & Infrastructure Loss: ₹31,000 Crore ($4.2 Billion).

3. INFRASTRUCTURE & CRITICAL HEALTHCARE ASSETS:
- Aluva Taluk Hospital: Ground-level electrical transformers and backup diesel generator room were submerged under 1.4m of water on August 16. Power failed to ICU and neonatal care units; 68 critical patients required emergency evacuation via boat and manual bag-valve mask ventilation.
- Cochin International Airport (CIAL): Runways, taxiways, and the 12MW solar farm were submerged by up to 2.1m of floodwater from the overflowing Chengalthodu canal. Airport was completely non-operational for 14 days.
- NH-544 Marthanda Varma Bridge: Submerged under 1.8m raging torrent; severed North-South transit lifeline between Ernakulam and Thrissur.
- Kalamassery 220kV Extra High Voltage Substation: Threatened by rising floodwaters; successfully protected by volunteer sandbag perimeter erected by KSEB engineers and local youth.

4. KEY FAILURES & BOTTLENECKS:
- Reservoir Rule Curve Failure: Reservoirs were maintained near full capacity through early August, leaving zero flood buffer when peak rainfall struck. Cheruthoni (Idukki) and Idamalayar opened spillway gates simultaneously.
- Floodplain Encroachment: Commercial developments along Periyar natural flood buffers restricted runoff discharge velocity into the Arabian Sea.
- Telecommunications Blackout: Cellular base stations lost backup battery power after 6 hours of grid disruption, stalling emergency dispatch.

5. SUCCESSFUL INTERVENTIONS:
- Civilian Marine Flotilla ("Coastal Army"): Over 4,500 traditional marine fishermen transported 669 trawlers inland on trucks, rescuing over 65,000 citizens from rooftops.
- Crowdsourced Portal (keralarescue.in): Volunteer tech community built real-time SOS geolocation tracking system.
- Operation Madad: Indian Armed Forces & NDRF deployed 58 rescue teams with helicopters and diving units.

6. INSTITUTIONAL LESSONS & MANDATES:
- Mandate dynamic Rule Curves for all 54 Kerala reservoirs with real-time automated satellite inflow telemetry.
- Mandate rooftop backup generators and elevated oxygen manifolds for all hospitals located in designated 100-year floodplains.
- Formally integrate civilian fishermen and marine boat owners into the state disaster response master plan with guaranteed equipment insurance and GPS radios.`,
  },
  {
    title: 'Sample 2: Chennai Metropolitan Development Authority (CMDA) - Adyar River Inundation & MIOT Case Study (2015)',
    text: `INCIDENT DEBRIEF & INVESTIGATION REPORT: ADYAR RIVER FLOOD & HOSPITAL POWER FAILURE
REPORTING AUTHORITY: Chennai Metropolitan Development Authority & Department of Public Health
INCIDENT: December 2015 Chennai Urban Inundation & Chembarambakkam Reservoir Discharge
LOCATION: Chennai Metropolitan Area (Adyar River Basin, Manapakkam, Saidapet, Velachery)

1. OVERVIEW:
On December 1, 2015, a stationary low-pressure system in the Bay of Bengal dumped 494mm of rain in 24 hours over Chennai. Chembarambakkam reservoir reached full capacity, necessitating an emergency late-night discharge of 29,000 cusecs into the encroached Adyar river.

2. CRITICAL ASSET LOSS & TRAGEDY AT MIOT HOSPITAL:
- MIOT International Hospital (Manapakkam): Floodwaters breached the boundary wall from the Adyar river, submerging basement levels B1 and B2 where emergency diesel generators, power switchboards, and central oxygen pumps were situated.
- Power was completely knocked out to the Intensive Care Unit (ICU). Despite heroic efforts by medical staff using manual ventilation, 18 ventilator-dependent patients tragically lost their lives due to lack of electricity and oxygen pressure.
- Ground access roads were submerged under 2.5m of water, preventing delivery of mobile backup generator trucks for 36 hours.

3. TRANSPORTATION & URBAN IMPACT:
- Saidapet Maraimalai Adigal Bridge: Submerged under 2.2m of water; GST Road transit severed.
- Chennai Airport: Runway submerged by 1.5m water; 34 passenger aircraft grounded for 5 days.
- Over 1.8 million residents displaced across Velachery, Tambaram, and Mudichur.

4. ROOT CAUSES IDENTIFIED:
- Hospital building codes permitted critical life-safety electrical switchgear to be placed in sub-grade basements in flood-prone riverbanks.
- Chembarambakkam reservoir release was delayed until night-time, coinciding with high tide and giving downstream residents zero daylight evacuation window.
- Severe urban encroachment along the Adyar river channel narrowed discharge capacity from 60,000 cusecs to under 25,000 cusecs.

5. STATUTORY POLICY RECOMMENDATIONS:
- Legally prohibit placement of emergency generators, life-support switchgear, and medical gas storage in basements across all healthcare facilities in Tamil Nadu.
- Require all tier-1 hospitals to maintain isolated rooftop power islands with minimum 72-hour fuel buffers.
- Institute automated CWC rule curves for Chembarambakkam reservoir with pre-monsoon gradual releases.`,
  },
  {
    title: 'Sample 3: Odisha State Disaster Management Authority (OSDMA) - Cyclone Fani Zero-Casualty Protocol (2019)',
    text: `AFTER-ACTION PERFORMANCE REPORT: CYCLONE FANI EMERGENCY MANAGEMENT
REPORTING AGENCY: Odisha State Disaster Management Authority (OSDMA)
INCIDENT: Extremely Severe Cyclonic Storm Fani (Category 5 Equivalent)
DATES: May 02 - 04, 2019
LOCATION: Puri, Khordha (Bhubaneswar), Cuttack, Jagatsinghpur, Odisha

1. EXECUTIVE SUMMARY:
Cyclone Fani made landfall near Puri on May 3, 2019, with sustained winds of 215 km/h and a 1.5m storm surge. Executing institutional protocols developed following the 1999 Super Cyclone, Odisha completed the evacuation of 1.4 million vulnerable citizens within 24 hours into 893 Multi-Purpose Cyclone Shelters (MPCS), keeping fatalities under 64.

2. KEY PREPAREDNESS ACHIEVEMENTS:
- 1.4 million people evacuated across 14 coastal districts in 24 hours prior to landfall.
- 893 engineered concrete MPCS shelters pre-stocked with 48 hours of food, drinking water, generators, and baby rations.
- Satellite SAT-phones and VHF police wireless networks deployed at all District Collectorates, ensuring 100% command continuity when mobile towers snapped.

3. INFRASTRUCTURE DAMAGE:
- 156,000 electric poles and 34 high-voltage transmission towers collapsed.
- Puri District Hospital suffered extensive roof damage, but mobile medical units maintained emergency triage.
- NH-316 arterial highway blocked by 10,000 fallen trees; reopened in 12 hours by pre-staged NDRF/ODRAF teams with motorized chain saws.

4. POLICY DIRECTIVES:
- Accelerate underground electrical cabling in coastal tourist and hospital zones (Puri and Bhubaneswar).
- Equip all Multi-Purpose Cyclone Shelters with dedicated rooftop solar microgrids and satellite radios.`,
  },
];
