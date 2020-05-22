function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

  Mapping:if (cityName == "Map") {
    map = new L.Map('map');
    var cartocdn = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
    cartoAttrib = 'Carto geodatabase is good for this application';
    carto = new L.TileLayer(cartocdn);
    map.setView([51.5, 0.12],2); // centered on London lat, long
    map.addLayer(carto);

    L.circle([18.2206,-63.0686],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:150}).addTo(map).bindPopup('Anguilla,United Kingdom : 3')
    L.circle([31.8257,117.2264],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:49250}).addTo(map).bindPopup('Anhui,China : 985')
    L.circle([12.5211,-69.9683],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4450}).addTo(map).bindPopup('Aruba,Netherlands : 89')
    L.circle([-35.4735,149.0124],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5200}).addTo(map).bindPopup('Australian Capital Territory,Australia : 104')
    L.circle([40.1824,116.4142],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:28650}).addTo(map).bindPopup('Beijing,China : 573')
    L.circle([32.3078,-64.7505],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3300}).addTo(map).bindPopup('Bermuda,United Kingdom : 66')
    L.circle([18.4207,-64.64],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:200}).addTo(map).bindPopup('British Virgin Islands,United Kingdom : 4')
    L.circle([19.3133,-81.2546],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2500}).addTo(map).bindPopup('Cayman Islands,United Kingdom : 50')
    L.circle([49.3723,-2.3644],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:22750}).addTo(map).bindPopup('Channel Islands,United Kingdom : 455')
    L.circle([30.0572,107.874],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:28650}).addTo(map).bindPopup('Chongqing,China : 573')
    L.circle([12.1696,-68.99],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:700}).addTo(map).bindPopup('Curacao,Netherlands : 14')
    L.circle([-51.7963,-59.5236],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:650}).addTo(map).bindPopup('Falkland Islands (Malvinas),United Kingdom : 13')
    L.circle([61.8926,-6.9118],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:9350}).addTo(map).bindPopup('Faroe Islands,Denmark : 187')
    L.circle([4,-53],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6200}).addTo(map).bindPopup('French Guiana,France : 124')
    L.circle([-17.6797,-149.4068],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2900}).addTo(map).bindPopup('French Polynesia,France : 58')
    L.circle([26.0789,117.9874],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:17700}).addTo(map).bindPopup('Fujian,China : 354')
    L.circle([37.8099,101.0583],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6850}).addTo(map).bindPopup('Gansu,China : 137')
    L.circle([36.1408,-5.3536],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7200}).addTo(map).bindPopup('Gibraltar,United Kingdom : 144')
    L.circle([71.7069,-42.6043],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:550}).addTo(map).bindPopup('Greenland,Denmark : 11')
    L.circle([16.265,-61.551],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5450}).addTo(map).bindPopup('Guadeloupe,France : 109')
    L.circle([23.3417,113.4244],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:78900}).addTo(map).bindPopup('Guangdong,China : 1578')
    L.circle([23.8298,108.7881],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:12600}).addTo(map).bindPopup('Guangxi,China : 252')
    L.circle([26.8154,106.8748],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7250}).addTo(map).bindPopup('Guizhou,China : 145')
    L.circle([19.1959,109.7453],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:8100}).addTo(map).bindPopup('Hainan,China : 162')
    L.circle([39.549,116.1306],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:16050}).addTo(map).bindPopup('Hebei,China : 321')
    L.circle([47.862,127.7615],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:46450}).addTo(map).bindPopup('Heilongjiang,China : 929')
    L.circle([33.882,113.614],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:62700}).addTo(map).bindPopup('Henan,China : 1254')
    L.circle([22.3,114.2],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:49550}).addTo(map).bindPopup('Hong Kong,China : 991')
    L.circle([30.9756,112.2707],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3180800}).addTo(map).bindPopup('Hubei,China : 63616')
    L.circle([27.6104,111.7088],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:50750}).addTo(map).bindPopup('Hunan,China : 1015')
    L.circle([44.0935,113.9448],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:9500}).addTo(map).bindPopup('Inner Mongolia,China : 190')
    L.circle([54.2361,-4.5481],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:13600}).addTo(map).bindPopup('Isle of Man,United Kingdom : 272')
    L.circle([32.9711,119.455],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:32650}).addTo(map).bindPopup('Jiangsu,China : 653')
    L.circle([27.614,115.7221],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:46800}).addTo(map).bindPopup('Jiangxi,China : 936')
    L.circle([43.6661,126.1923],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5400}).addTo(map).bindPopup('Jilin,China : 108')
    L.circle([41.2956,122.6085],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7200}).addTo(map).bindPopup('Liaoning,China : 144')
    L.circle([22.1667,113.55],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2100}).addTo(map).bindPopup('Macau,China : 42')
    L.circle([14.6415,-61.0242],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4550}).addTo(map).bindPopup('Martinique,France : 91')
    L.circle([-12.8275,45.166244],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:24600}).addTo(map).bindPopup('Mayotte,France : 492')
    L.circle([16.742498,-62.187366],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:400}).addTo(map).bindPopup('Montserrat,United Kingdom : 8')
    L.circle([-20.904305,165.618042],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:900}).addTo(map).bindPopup('New Caledonia,France : 18')
    L.circle([-33.8688,151.2093],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:128550}).addTo(map).bindPopup('New South Wales,Australia : 2571')
    L.circle([37.2692,106.1655],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3750}).addTo(map).bindPopup('Ningxia,China : 75')
    L.circle([-12.4634,130.8456],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1350}).addTo(map).bindPopup('Northern Territory,Australia : 27')
    L.circle([35.7452,95.9956],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:900}).addTo(map).bindPopup('Qinghai,China : 18')
    L.circle([-27.4698,153.0251],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:51400}).addTo(map).bindPopup('Queensland,Australia : 1028')
    L.circle([-21.1151,55.5364],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:17700}).addTo(map).bindPopup('Reunion,France : 354')
    L.circle([17.9,-62.8333],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:300}).addTo(map).bindPopup('Saint Barthelemy,France : 6')
    L.circle([46.8852,-56.3159],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:50}).addTo(map).bindPopup('Saint Pierre and Miquelon,France : 1')
    L.circle([35.1917,108.8701],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:14850}).addTo(map).bindPopup('Shaanxi,China : 297')
    L.circle([36.3427,118.1498],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:38850}).addTo(map).bindPopup('Shandong,China : 777')
    L.circle([31.202,121.4491],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:31550}).addTo(map).bindPopup('Shanghai,China : 631')
    L.circle([37.5777,112.2922],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:9900}).addTo(map).bindPopup('Shanxi,China : 198')
    L.circle([30.6171,102.7103],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:27900}).addTo(map).bindPopup('Sichuan,China : 558')
    L.circle([18.0425,-63.0548],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2300}).addTo(map).bindPopup('Sint Maarten,Netherlands : 46')
    L.circle([-34.9285,138.6007],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:21700}).addTo(map).bindPopup('South Australia,Australia : 434')
    L.circle([18.0708,-63.0501],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1500}).addTo(map).bindPopup('St Martin,France : 30')
    L.circle([-42.8821,147.3272],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:9200}).addTo(map).bindPopup('Tasmania,Australia : 184')
    L.circle([39.3054,117.323],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:9300}).addTo(map).bindPopup('Tianjin,China : 186')
    L.circle([31.6927,88.0924],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:50}).addTo(map).bindPopup('Tibet,China : 1')
    L.circle([21.694,-71.7979],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:400}).addTo(map).bindPopup('Turks and Caicos Islands,United Kingdom : 8')
    L.circle([-37.8136,144.9631],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:69250}).addTo(map).bindPopup('Victoria,Australia : 1385')
    L.circle([-31.9505,115.8605],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:26850}).addTo(map).bindPopup('Western Australia,Australia : 537')
    L.circle([41.1129,85.2401],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3650}).addTo(map).bindPopup('Xinjiang,China : 73')
    L.circle([24.974,101.487],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:9150}).addTo(map).bindPopup('Yunnan,China : 183')
    L.circle([29.1832,120.0934],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:63350}).addTo(map).bindPopup('Zhejiang,China : 1267')
    L.circle([33.93911,67.709953],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:30500}).addTo(map).bindPopup('Afghanistan : 610')
    L.circle([41.1533,20.1683],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:34100}).addTo(map).bindPopup('Albania : 682')
    L.circle([28.0339,1.6596],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:149900}).addTo(map).bindPopup('Algeria : 2998')
    L.circle([42.5063,1.5218],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:28400}).addTo(map).bindPopup('Andorra : 568')
    L.circle([-11.2027,17.8739],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:650}).addTo(map).bindPopup('Angola : 13')
    L.circle([17.0608,-61.7964],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:950}).addTo(map).bindPopup('Antigua and Barbuda : 19')
    L.circle([-38.4161,-63.6167],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:93100}).addTo(map).bindPopup('Argentina : 1862')
    L.circle([40.0691,45.0382],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:71500}).addTo(map).bindPopup('Armenia : 1430')
    L.circle([47.5162,14.5501],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:707400}).addTo(map).bindPopup('Austria : 14148')
    L.circle([40.1431,47.5769],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:84000}).addTo(map).bindPopup('Azerbaijan : 1680')
    L.circle([25.025885,-78.035889],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1950}).addTo(map).bindPopup('Bahamas : 39')
    L.circle([26.0275,50.55],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:109600}).addTo(map).bindPopup('Bahrain : 2192')
    L.circle([23.685,90.3563],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:157350}).addTo(map).bindPopup('Bangladesh : 3147')
    L.circle([13.1939,-59.5432],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2850}).addTo(map).bindPopup('Barbados : 57')
    L.circle([53.7098,27.9534],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:348700}).addTo(map).bindPopup('Belarus : 6974')
    L.circle([50.8333,4.469936],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:686600}).addTo(map).bindPopup('Belgium : 13732')
    L.circle([17.1899,-88.4976],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:800}).addTo(map).bindPopup('Belize : 16')
    L.circle([9.3077,2.3158],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3800}).addTo(map).bindPopup('Benin : 76')
    L.circle([27.5142,90.4336],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:250}).addTo(map).bindPopup('Bhutan : 5')
    L.circle([-16.2902,-63.5887],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:15650}).addTo(map).bindPopup('Bolivia : 313')
    L.circle([43.9159,17.6791],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:58400}).addTo(map).bindPopup('Bosnia and Herzegovina : 1168')
    L.circle([-22.3285,24.6849],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:850}).addTo(map).bindPopup('Botswana : 17')
    L.circle([-14.235,-51.9253],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3629850}).addTo(map).bindPopup('Brazil : 72597')
    L.circle([4.5353,114.7277],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6700}).addTo(map).bindPopup('Brunei : 134')
    L.circle([42.7339,25.4858],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:23800}).addTo(map).bindPopup('Bulgaria : 476')
    L.circle([12.2383,-1.5616],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:29400}).addTo(map).bindPopup('Burkina Faso : 588')
    L.circle([21.9162,95.956],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3800}).addTo(map).bindPopup('Burma : 76')
    L.circle([-3.3731,29.9189],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:350}).addTo(map).bindPopup('Burundi : 7')
    L.circle([16.5388,-23.0418],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2900}).addTo(map).bindPopup('Cabo Verde : 58')
    L.circle([11.55,104.9167],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6050}).addTo(map).bindPopup('Cambodia : 121')
    L.circle([3.848,11.5021],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:76200}).addTo(map).bindPopup('Cameroon : 1524')
    L.circle([6.6111,20.9394],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:500}).addTo(map).bindPopup('Central African Republic : 10')
    L.circle([15.4542,18.7322],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3800}).addTo(map).bindPopup('Chad : 76')
    L.circle([-35.6751,-71.543],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:706250}).addTo(map).bindPopup('Chile : 14125')
    L.circle([4.5709,-74.2973],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:148550}).addTo(map).bindPopup('Colombia : 2971')
    L.circle([-4.2634,15.2832],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2650}).addTo(map).bindPopup('Congo (Brazzaville) : 53')
    L.circle([-4.322447,15.307045],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7300}).addTo(map).bindPopup('Congo (Kinshasa) : 146')
    L.circle([9.7489,-83.7534],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:26000}).addTo(map).bindPopup('Costa Rica : 520')
    L.circle([7.54,-5.5471],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:41000}).addTo(map).bindPopup('Cote dIvoire : 820')
    L.circle([45.1,15.2],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:90400}).addTo(map).bindPopup('Croatia : 1808')
    L.circle([21.521757,-77.781167],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:63850}).addTo(map).bindPopup('Cuba : 1277')
    L.circle([35.1264,33.4299],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:22450}).addTo(map).bindPopup('Cyprus : 449')
    L.circle([49.8175,15.473],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:244450}).addTo(map).bindPopup('Czechia : 4889')
    L.circle([56.2639,9.5018],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:429000}).addTo(map).bindPopup('Denmark : 8580')
    L.circle([11.8251,42.5903],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:44300}).addTo(map).bindPopup('Djibouti : 886')
    L.circle([15.415,-61.371],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:750}).addTo(map).bindPopup('Dominica : 15')
    L.circle([18.7357,-70.1627],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:161050}).addTo(map).bindPopup('Dominican Republic : 3221')
    L.circle([-1.8312,-78.1834],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:171650}).addTo(map).bindPopup('Ecuador : 3433')
    L.circle([26.820553,30.802498],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:116300}).addTo(map).bindPopup('Egypt : 2326')
    L.circle([13.7942,-88.8965],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:17450}).addTo(map).bindPopup('El Salvador : 349')
    L.circle([1.6508,10.2679],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:650}).addTo(map).bindPopup('Equatorial Guinea : 13')
    L.circle([15.1794,39.7823],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1900}).addTo(map).bindPopup('Eritrea : 38')
    L.circle([58.5953,25.0136],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:38850}).addTo(map).bindPopup('Estonia : 777')
    L.circle([-26.5225,31.4659],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1400}).addTo(map).bindPopup('Eswatini : 28')
    L.circle([9.145,40.4897],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5300}).addTo(map).bindPopup('Ethiopia : 106')
    L.circle([-17.7134,178.065],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:700}).addTo(map).bindPopup('Fiji : 14')
    L.circle([61.92411,25.748151],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:215000}).addTo(map).bindPopup('Finland : 4300')
    L.circle([46.2276,2.2137],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2830750}).addTo(map).bindPopup('France : 56615')
    L.circle([-0.8037,11.6094],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6850}).addTo(map).bindPopup('Gabon : 137')
    L.circle([13.4432,-15.3101],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:500}).addTo(map).bindPopup('Gambia : 10')
    L.circle([42.3154,43.3569],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:17450}).addTo(map).bindPopup('Georgia : 349')
    L.circle([51.165691,10.451526],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7360000}).addTo(map).bindPopup('Germany : 147200')
    L.circle([7.9465,-1.0232],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:24700}).addTo(map).bindPopup('Ghana : 494')
    L.circle([39.0742,21.8243],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:68700}).addTo(map).bindPopup('Greece : 1374')
    L.circle([12.1165,-61.679],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:650}).addTo(map).bindPopup('Grenada : 13')
    L.circle([15.7835,-90.2308],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6000}).addTo(map).bindPopup('Guatemala : 120')
    L.circle([9.9456,-9.6966],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:40800}).addTo(map).bindPopup('Guinea : 816')
    L.circle([11.8037,-15.1804],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1300}).addTo(map).bindPopup('Guinea-Bissau : 26')
    L.circle([4.860416,-58.93018],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1800}).addTo(map).bindPopup('Guyana : 36')
    L.circle([18.9712,-72.2852],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:850}).addTo(map).bindPopup('Haiti : 17')
    L.circle([41.9029,12.4534],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:100}).addTo(map).bindPopup('Holy See : 2')
    L.circle([15.2,-86.2419],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:10550}).addTo(map).bindPopup('Honduras : 211')
    L.circle([47.1625,19.5033],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:50350}).addTo(map).bindPopup('Hungary : 1007')
    L.circle([64.9631,-19.0208],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:88800}).addTo(map).bindPopup('Iceland : 1776')
    L.circle([20.593684,78.96288],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1221000}).addTo(map).bindPopup('India : 24420')
    L.circle([-0.7893,113.9213],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:153150}).addTo(map).bindPopup('Indonesia : 3063')
    L.circle([32.427908,53.688046],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4417850}).addTo(map).bindPopup('Iran : 88357')
    L.circle([33.223191,43.679291],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:95150}).addTo(map).bindPopup('Iraq : 1903')
    L.circle([53.1424,-7.6921],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:855500}).addTo(map).bindPopup('Ireland : 17110')
    L.circle([31.046051,34.851612],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:604150}).addTo(map).bindPopup('Israel : 12083')
    L.circle([41.87194,12.56738],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5451950}).addTo(map).bindPopup('Italy : 109039')
    L.circle([18.1096,-77.2975],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5000}).addTo(map).bindPopup('Jamaica : 100')
    L.circle([36.204824,138.252924],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:426550}).addTo(map).bindPopup('Japan : 8531')
    L.circle([31.24,36.51],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:19500}).addTo(map).bindPopup('Jordan : 390')
    L.circle([48.0196,66.9237],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:111150}).addTo(map).bindPopup('Kazakhstan : 2223')
    L.circle([-0.0236,37.9062],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:12950}).addTo(map).bindPopup('Kenya : 259')
    L.circle([35.907757,127.766922],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:484750}).addTo(map).bindPopup('South Korea : 9695')
    L.circle([42.602636,20.902977],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:33550}).addTo(map).bindPopup('Kosovo : 671')
    L.circle([29.31166,47.481766],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:155050}).addTo(map).bindPopup('Kuwait : 3101')
    L.circle([41.20438,74.766098],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:35450}).addTo(map).bindPopup('Kyrgyzstan : 709')
    L.circle([19.85627,102.495496],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:650}).addTo(map).bindPopup('Laos : 13')
    L.circle([56.8796,24.6032],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:31350}).addTo(map).bindPopup('Latvia : 627')
    L.circle([33.8547,35.8623],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:11700}).addTo(map).bindPopup('Lebanon : 234')
    L.circle([6.428055,-9.429499],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4250}).addTo(map).bindPopup('Liberia : 85')
    L.circle([26.3351,17.228331],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1400}).addTo(map).bindPopup('Libya : 28')
    L.circle([47.14,9.55],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2750}).addTo(map).bindPopup('Liechtenstein : 55')
    L.circle([55.1694,23.8813],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:42500}).addTo(map).bindPopup('Lithuania : 850')
    L.circle([49.8153,6.1296],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:180500}).addTo(map).bindPopup('Luxembourg : 3610')
    L.circle([-18.766947,46.869107],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5050}).addTo(map).bindPopup('Madagascar : 101')
    L.circle([-13.254308,34.301525],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1200}).addTo(map).bindPopup('Malawi : 24')
    L.circle([4.210484,101.975766],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:261150}).addTo(map).bindPopup('Malaysia : 5223')
    L.circle([3.2028,73.2207],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1450}).addTo(map).bindPopup('Maldives : 29')
    L.circle([17.570692,-3.996166],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:19900}).addTo(map).bindPopup('Mali : 398')
    L.circle([35.9375,14.3754],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:21700}).addTo(map).bindPopup('Malta : 434')
    L.circle([21.0079,-10.9408],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:300}).addTo(map).bindPopup('Mauritania : 6')
    L.circle([-20.348404,57.552152],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:16100}).addTo(map).bindPopup('Mauritius : 322')
    L.circle([23.6345,-102.5528],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1296750}).addTo(map).bindPopup('Mexico : 25935')
    L.circle([47.4116,28.3699],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:103450}).addTo(map).bindPopup('Moldova : 2069')
    L.circle([43.7333,7.4167],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4250}).addTo(map).bindPopup('Monaco : 85')
    L.circle([46.8625,103.8467],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:750}).addTo(map).bindPopup('Mongolia : 15')
    L.circle([42.708678,19.37439],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:14900}).addTo(map).bindPopup('Montenegro : 298')
    L.circle([31.7917,-7.0926],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:149550}).addTo(map).bindPopup('Morocco : 2991')
    L.circle([-18.665695,35.529562],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1700}).addTo(map).bindPopup('Mozambique : 34')
    L.circle([-22.9576,18.4904],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:550}).addTo(map).bindPopup('Namibia : 11')
    L.circle([28.1667,84.25],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1650}).addTo(map).bindPopup('Nepal : 33')
    L.circle([-40.9006,174.886],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:70100}).addTo(map).bindPopup('New Zealand : 1402')
    L.circle([12.865416,-85.207229],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:350}).addTo(map).bindPopup('Nicaragua : 7')
    L.circle([17.607789,8.081666],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:32400}).addTo(map).bindPopup('Niger : 648')
    L.circle([9.082,8.6753],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:47950}).addTo(map).bindPopup('Nigeria : 959')
    L.circle([41.6086,21.7453],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:60250}).addTo(map).bindPopup('North Macedonia : 1205')
    L.circle([60.472,8.4689],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1600}).addTo(map).bindPopup('Norway : 32')
    L.circle([21.512583,55.923255],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:62500}).addTo(map).bindPopup('Oman : 1250')
    L.circle([30.3753,69.3451],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:440600}).addTo(map).bindPopup('Pakistan : 8812')
    L.circle([8.538,-80.7821],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:301050}).addTo(map).bindPopup('Panama : 6021')
    L.circle([-6.314993,143.95555],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:400}).addTo(map).bindPopup('Papua New Guinea : 8')
    L.circle([-23.4425,-58.4438],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:8650}).addTo(map).bindPopup('Paraguay : 173')
    L.circle([-9.19,-75.0152],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1166200}).addTo(map).bindPopup('Peru : 23324')
    L.circle([12.879721,121.774017],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:105300}).addTo(map).bindPopup('Philippines : 2106')
    L.circle([51.9194,19.1451],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:306550}).addTo(map).bindPopup('Poland : 6131')
    L.circle([39.3999,-8.2245],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:150650}).addTo(map).bindPopup('Portugal : 3013')
    L.circle([25.3548,51.1839],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:150950}).addTo(map).bindPopup('Qatar : 3019')
    L.circle([45.9432,24.9668],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:384250}).addTo(map).bindPopup('Romania : 7685')
    L.circle([61.52401,105.318756],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2175600}).addTo(map).bindPopup('Russia : 43512')
    L.circle([-1.9403,29.8739],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:7650}).addTo(map).bindPopup('Rwanda : 153')
    L.circle([17.357822,-62.782998],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:700}).addTo(map).bindPopup('Saint Kitts and Nevis : 14')
    L.circle([13.9094,-60.9789],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:850}).addTo(map).bindPopup('Saint Lucia : 17')
    L.circle([12.9843,-61.2872],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:600}).addTo(map).bindPopup('Saint Vincent and the Grenadines : 12')
    L.circle([43.9424,12.4578],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:8050}).addTo(map).bindPopup('San Marino : 161')
    L.circle([0.18636,6.613081],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:200}).addTo(map).bindPopup('Sao Tome and Principe : 4')
    L.circle([23.885942,45.079162],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:762850}).addTo(map).bindPopup('Saudi Arabia : 15257')
    L.circle([14.4974,-14.4524],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:37100}).addTo(map).bindPopup('Senegal : 742')
    L.circle([44.0165,21.0059],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:180000}).addTo(map).bindPopup('Serbia : 3600')
    L.circle([-4.6796,55.492],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:500}).addTo(map).bindPopup('Seychelles : 10')
    L.circle([8.460555,-11.779889],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:3600}).addTo(map).bindPopup('Sierra Leone : 72')
    L.circle([1.2833,103.8333],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:192550}).addTo(map).bindPopup('Singapore : 3851')
    L.circle([48.669,19.699],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:49150}).addTo(map).bindPopup('Slovakia : 983')
    L.circle([46.1512,14.9955],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:12950}).addTo(map).bindPopup('Slovenia : 259')
    L.circle([5.152149,46.199616],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6300}).addTo(map).bindPopup('Somalia : 126')
    L.circle([-30.5595,22.9375],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:217850}).addTo(map).bindPopup('South Africa : 4357')
    L.circle([6.877,31.307],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:100}).addTo(map).bindPopup('South Sudan : 2')
    L.circle([40.463667,-3.74922],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:6949000}).addTo(map).bindPopup('Spain : 138980')
    L.circle([7.873054,80.771797],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:18300}).addTo(map).bindPopup('Sri Lanka : 366')
    L.circle([12.8628,30.2176],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:8650}).addTo(map).bindPopup('Sudan : 173')
    L.circle([3.9193,-56.0278],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:450}).addTo(map).bindPopup('Suriname : 9')
    L.circle([60.128161,18.643501],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:248550}).addTo(map).bindPopup('Sweden : 4971')
    L.circle([46.8182,8.2275],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1340000}).addTo(map).bindPopup('Switzerland : 26800')
    L.circle([34.802075,38.996815],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1450}).addTo(map).bindPopup('Syria : 29')
    L.circle([23.7,121],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:18600}).addTo(map).bindPopup('Taiwan* : 372')
    L.circle([-6.369028,34.888822],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:9150}).addTo(map).bindPopup('Tanzania : 183')
    L.circle([15.870032,100.992541],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:139900}).addTo(map).bindPopup('Thailand : 2798')
    L.circle([-8.874217,125.727539],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:1050}).addTo(map).bindPopup('Timor-Leste : 21')
    L.circle([8.6195,0.8248],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4600}).addTo(map).bindPopup('Togo : 92')
    L.circle([10.6918,-61.2225],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5350}).addTo(map).bindPopup('Trinidad and Tobago : 107')
    L.circle([33.886917,9.537499],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:37000}).addTo(map).bindPopup('Tunisia : 740')
    L.circle([38.9637,35.2433],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:4944450}).addTo(map).bindPopup('Turkey : 98889')
    L.circle([1.373333,32.290275],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:2750}).addTo(map).bindPopup('Uganda : 55')
    L.circle([48.3794,31.1656],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:168650}).addTo(map).bindPopup('Ukraine : 3373')
    L.circle([23.424076,53.847818],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:300600}).addTo(map).bindPopup('United Arab Emirates : 6012')
    L.circle([-32.5228,-55.7658],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:26600}).addTo(map).bindPopup('Uruguay : 532')
    L.circle([41.377491,64.585262],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:100500}).addTo(map).bindPopup('Uzbekistan : 2010')
    L.circle([6.4238,-66.5897],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:11000}).addTo(map).bindPopup('Venezuela : 220')
    L.circle([14.058324,108.277199],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:12600}).addTo(map).bindPopup('Vietnam : 252')
    L.circle([31.9522,35.2332],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:15400}).addTo(map).bindPopup('West Bank and Gaza : 308')
    L.circle([24.2155,-12.8858],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:300}).addTo(map).bindPopup('Western Sahara : 6')
    L.circle([15.552727,48.516388],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:50}).addTo(map).bindPopup('Yemen : 1')
    L.circle([-13.133897,27.849332],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:5850}).addTo(map).bindPopup('Zambia : 117')
    L.circle([-19.015438,29.154857],{color:'red',fillColor:'#f03',fillOpacity:0.5,radius:450}).addTo(map).bindPopup('Zimbabwe : 9')
  }
  else if (cityName == "Cloropleth") {
    fetch("https://raw.githubusercontent.com/Covid19Dashboard/Dashboard/master/cloropleth.geojson")
    .then(response => response.json())
    .then(data => console.log('do something with data. Eg: update the map', data))
    .catch(e => console.log(e))
    cmap = new L.Map('cloro');
    var clorocdn = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
    cloroAttrib = 'Carto geodatabase is good for this application';
    cloro = new L.TileLayer(clorocdn);
    cmap.setView([51.5, 0.12],2); // centered on London lat, long
    cmap.addLayer(cloro);

    function getColor(d) {
      if (d > 9) {
        return '#800026'; 
      } else if (d == 5) {
        return '#FC4E2A';
      } else if (d > 0 && d < 5) {
        return '#FED976';
      } else {
        return '#FFEDA0' 
      }
    }
   
   // GEOJSON STYLE
   function style(feature) {
      return {
        fillColor: getColor(feature.properties.deaths),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      };
    }

    L.geoJson(data, {style: style, onEachFeature: function (feature, layer) {
      layer.bindPopup('<h3>Deaths</h3><h1>'+feature.properties.deaths+'</h1>');
      }}).addTo(cmap);
    }
  else {
    break Mapping;
  }
}