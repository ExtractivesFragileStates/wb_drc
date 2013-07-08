@land: #fffbf2;

//Map{ background-color: white; }


#terrain {
  raster-opacity:0.3;
  raster-scaling:lanczos;
  raster-colorizer-default-mode: linear;
  raster-colorizer-default-color: transparent;
  raster-colorizer-stops: 
    stop(0, #000)
    stop(160, #999)
    stop(180, #fff);
  }


/*
                                               type count  pct
1                     Degenerate Forest/High Shrubs    96  0.4
2                                       Fruit Trees   332  1.5
3                                           Gardens    13  0.1
4   Irrigated: Intensively Cultivated (1 Crop/Year)  5288 23.2
5  Irrigated: Intensively Cultivated (2 Crops/year)   144  0.6
6              Irrigated: Intermittently Cultivated  8790 38.6
7                   Marshland Permanently inundated  1060  4.7
8                                Marshland Seasonal   272  1.2
9                     Natural Forest (closed cover)   216  0.9
10                      Natural Forest (open cover)   485  2.1
11                                   Permanent Snow   435  1.9
12                                 Pistachio Forest    26  0.1
13                 Rainfed Crops (flat lying areas)   831  3.6
14                    Rainfed Crops (sloping areas)  1699  7.5
15           Rangeland (grassland/forbs/low shrubs)  1530  6.7
16                         Rock Outcrop / Bare Soil  1130  5.0
17                               Sand Covered Areas    59  0.3
18                                       Sand Dunes    58  0.3
19                                      Settlements    86  0.4
20                                        Vineyards   111  0.5
21                                     Water Bodies   131  0.6
*/



#landcover {
  line-width:0;
  polygon-opacity:0.3;
  polygon-fill: rgba(0,0,0,0);
  [LANDCOVER = 'Irrigated: Intensively Cultivated (1 Crop/Year)'],
  [LANDCOVER = 'Irrigated: Intensively Cultivated (2 Crops/year)'],
  [LANDCOVER = 'Irrigated: Intermittently Cultivated']
    { polygon-fill: #c4fd56; }
  [LANDCOVER = 'Rangeland (grassland/forbs/low shrubs)']
    { polygon-fill: #fff65e; }
  [LANDCOVER = 'Rock Outcrop / Bare Soil'],
  [LANDCOVER = 'Sand Dunes'],
  [LANDCOVER = 'Sand Covered Areas']
    { polygon-fill: #f7ce94; }
}


