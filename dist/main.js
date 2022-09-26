(()=>{"use strict";var n={179:(n,e,t)=>{t.d(e,{Z:()=>y});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),s=t(667),c=t.n(s),w=new URL(t(404),t.b),f=new URL(t(172),t.b),d=new URL(t(194),t.b),m=new URL(t(839),t.b),g=a()(r()),l=c()(w),u=c()(w,{hash:"?#iefix"}),b=c()(f),h=c()(d),p=c()(m,{hash:"#weathericons-regular-webfontRg"});g.push([n.id,"/*!\n *  Weather Icons 1.3\n *  Updated November 30th, 2014\n *  Weather themed icons for Bootstrap\n *  ------------------------------------------------------------------------------\n* Maintained at http://erikflowers.github.io/weather-icons\n *  http://twitter.com/Erik_UX\n *\n *  License\n *  ------------------------------------------------------------------------------\n *  - Fpmt licensed under SIL OFL 1.1 -\n *    http://scripts.sil.org/OFL\n *  - CSS and LESS are licensed under MIT License -\n *    http://opensource.org/licenses/mit-license.html\n *  - Documentation licensed under CC BY 3.0 -\n *    http://creativecommons.org/licenses/by/3.0/\n *  - Inspired by and works great as a companion with Font Awesome\n *    \"Font Awesome by Dave Gandy - http://fontawesome.io\"\n *\n *  Weather Icons Bootstrap Package Author - Erik Flowers - erik@helloerik.com\n *  ------------------------------------------------------------------------------\n *  Email: erik@helloerik.com\n *  Twitter: http://twitter.com/Erik_UX\n */\n@font-face {\n  font-family: 'weathericons';\n  src: url("+l+");\n  src: url("+u+") format('embedded-opentype'), url("+b+") format('woff'), url("+h+") format('truetype'), url("+p+') format(\'svg\');\n  font-weight: normal;\n  font-style: normal;\n}\n.wi {\n  display: inline-block;\n  font-family: \'weathericons\';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.wi-day-cloudy-gusts:before {\n  content: "\\f000";\n}\n.wi-day-cloudy-windy:before {\n  content: "\\f001";\n}\n.wi-day-cloudy:before {\n  content: "\\f002";\n}\n.wi-day-fog:before {\n  content: "\\f003";\n}\n.wi-day-hail:before {\n  content: "\\f004";\n}\n.wi-day-lightning:before {\n  content: "\\f005";\n}\n.wi-day-rain-mix:before {\n  content: "\\f006";\n}\n.wi-day-rain-wind:before {\n  content: "\\f007";\n}\n.wi-day-rain:before {\n  content: "\\f008";\n}\n.wi-day-showers:before {\n  content: "\\f009";\n}\n.wi-day-snow:before {\n  content: "\\f00a";\n}\n.wi-day-sprinkle:before {\n  content: "\\f00b";\n}\n.wi-day-sunny-overcast:before {\n  content: "\\f00c";\n}\n.wi-day-sunny:before {\n  content: "\\f00d";\n}\n.wi-day-storm-showers:before {\n  content: "\\f00e";\n}\n.wi-day-thunderstorm:before {\n  content: "\\f010";\n}\n.wi-cloudy-gusts:before {\n  content: "\\f011";\n}\n.wi-cloudy-windy:before {\n  content: "\\f012";\n}\n.wi-cloudy:before {\n  content: "\\f013";\n}\n.wi-fog:before {\n  content: "\\f014";\n}\n.wi-hail:before {\n  content: "\\f015";\n}\n.wi-lightning:before {\n  content: "\\f016";\n}\n.wi-rain-mix:before {\n  content: "\\f017";\n}\n.wi-rain-wind:before {\n  content: "\\f018";\n}\n.wi-rain:before {\n  content: "\\f019";\n}\n.wi-showers:before {\n  content: "\\f01a";\n}\n.wi-snow:before {\n  content: "\\f01b";\n}\n.wi-sprinkle:before {\n  content: "\\f01c";\n}\n.wi-storm-showers:before {\n  content: "\\f01d";\n}\n.wi-thunderstorm:before {\n  content: "\\f01e";\n}\n.wi-windy:before {\n  content: "\\f021";\n}\n.wi-night-alt-cloudy-gusts:before {\n  content: "\\f022";\n}\n.wi-night-alt-cloudy-windy:before {\n  content: "\\f023";\n}\n.wi-night-alt-hail:before {\n  content: "\\f024";\n}\n.wi-night-alt-lightning:before {\n  content: "\\f025";\n}\n.wi-night-alt-rain-mix:before {\n  content: "\\f026";\n}\n.wi-night-alt-rain-wind:before {\n  content: "\\f027";\n}\n.wi-night-alt-rain:before {\n  content: "\\f028";\n}\n.wi-night-alt-showers:before {\n  content: "\\f029";\n}\n.wi-night-alt-snow:before {\n  content: "\\f02a";\n}\n.wi-night-alt-sprinkle:before {\n  content: "\\f02b";\n}\n.wi-night-alt-storm-showers:before {\n  content: "\\f02c";\n}\n.wi-night-alt-thunderstorm:before {\n  content: "\\f02d";\n}\n.wi-night-clear:before {\n  content: "\\f02e";\n}\n.wi-night-cloudy-gusts:before {\n  content: "\\f02f";\n}\n.wi-night-cloudy-windy:before {\n  content: "\\f030";\n}\n.wi-night-cloudy:before {\n  content: "\\f031";\n}\n.wi-night-hail:before {\n  content: "\\f032";\n}\n.wi-night-lightning:before {\n  content: "\\f033";\n}\n.wi-night-rain-mix:before {\n  content: "\\f034";\n}\n.wi-night-rain-wind:before {\n  content: "\\f035";\n}\n.wi-night-rain:before {\n  content: "\\f036";\n}\n.wi-night-showers:before {\n  content: "\\f037";\n}\n.wi-night-snow:before {\n  content: "\\f038";\n}\n.wi-night-sprinkle:before {\n  content: "\\f039";\n}\n.wi-night-storm-showers:before {\n  content: "\\f03a";\n}\n.wi-night-thunderstorm:before {\n  content: "\\f03b";\n}\n.wi-celsius:before {\n  content: "\\f03c";\n}\n.wi-cloud-down:before {\n  content: "\\f03d";\n}\n.wi-cloud-refresh:before {\n  content: "\\f03e";\n}\n.wi-cloud-up:before {\n  content: "\\f040";\n}\n.wi-cloud:before {\n  content: "\\f041";\n}\n.wi-degrees:before {\n  content: "\\f042";\n}\n.wi-down-left:before {\n  content: "\\f043";\n}\n.wi-down:before {\n  content: "\\f044";\n}\n.wi-fahrenheit:before {\n  content: "\\f045";\n}\n.wi-horizon-alt:before {\n  content: "\\f046";\n}\n.wi-horizon:before {\n  content: "\\f047";\n}\n.wi-left:before {\n  content: "\\f048";\n}\n.wi-lightning:before {\n  content: "\\f016";\n}\n.wi-night-fog:before {\n  content: "\\f04a";\n}\n.wi-refresh-alt:before {\n  content: "\\f04b";\n}\n.wi-refresh:before {\n  content: "\\f04c";\n}\n.wi-right:before {\n  content: "\\f04d";\n}\n.wi-sprinkles:before {\n  content: "\\f04e";\n}\n.wi-strong-wind:before {\n  content: "\\f050";\n}\n.wi-sunrise:before {\n  content: "\\f051";\n}\n.wi-sunset:before {\n  content: "\\f052";\n}\n.wi-thermometer-exterior:before {\n  content: "\\f053";\n}\n.wi-thermometer-internal:before {\n  content: "\\f054";\n}\n.wi-thermometer:before {\n  content: "\\f055";\n}\n.wi-tornado:before {\n  content: "\\f056";\n}\n.wi-up-right:before {\n  content: "\\f057";\n}\n.wi-up:before {\n  content: "\\f058";\n}\n.wi-wind-west:before {\n  content: "\\f059";\n}\n.wi-wind-south-west:before {\n  content: "\\f05a";\n}\n.wi-wind-south-east:before {\n  content: "\\f05b";\n}\n.wi-wind-south:before {\n  content: "\\f05c";\n}\n.wi-wind-north-west:before {\n  content: "\\f05d";\n}\n.wi-wind-north-east:before {\n  content: "\\f05e";\n}\n.wi-wind-north:before {\n  content: "\\f060";\n}\n.wi-wind-east:before {\n  content: "\\f061";\n}\n.wi-smoke:before {\n  content: "\\f062";\n}\n.wi-dust:before {\n  content: "\\f063";\n}\n.wi-snow-wind:before {\n  content: "\\f064";\n}\n.wi-day-snow-wind:before {\n  content: "\\f065";\n}\n.wi-night-snow-wind:before {\n  content: "\\f066";\n}\n.wi-night-alt-snow-wind:before {\n  content: "\\f067";\n}\n.wi-day-sleet-storm:before {\n  content: "\\f068";\n}\n.wi-night-sleet-storm:before {\n  content: "\\f069";\n}\n.wi-night-alt-sleet-storm:before {\n  content: "\\f06a";\n}\n.wi-day-snow-thunderstorm:before {\n  content: "\\f06b";\n}\n.wi-night-snow-thunderstorm:before {\n  content: "\\f06c";\n}\n.wi-night-alt-snow-thunderstorm:before {\n  content: "\\f06d";\n}\n.wi-solar-eclipse:before {\n  content: "\\f06e";\n}\n.wi-lunar-eclipse:before {\n  content: "\\f070";\n}\n.wi-meteor:before {\n  content: "\\f071";\n}\n.wi-hot:before {\n  content: "\\f072";\n}\n.wi-hurricane:before {\n  content: "\\f073";\n}\n.wi-smog:before {\n  content: "\\f074";\n}\n.wi-alien:before {\n  content: "\\f075";\n}\n.wi-snowflake-cold:before {\n  content: "\\f076";\n}\n.wi-stars:before {\n  content: "\\f077";\n}\n.wi-night-partly-cloudy:before {\n  content: "\\f083";\n}\n.wi-umbrella:before {\n  content: "\\f084";\n}\n.wi-day-windy:before {\n  content: "\\f085";\n}\n.wi-night-alt-cloudy:before {\n  content: "\\f086";\n}\n.wi-up-left:before {\n  content: "\\f087";\n}\n.wi-down-right:before {\n  content: "\\f088";\n}\n.wi-time-12:before {\n  content: "\\f089";\n}\n.wi-time-1:before {\n  content: "\\f08a";\n}\n.wi-time-2:before {\n  content: "\\f08b";\n}\n.wi-time-3:before {\n  content: "\\f08c";\n}\n.wi-time-4:before {\n  content: "\\f08d";\n}\n.wi-time-5:before {\n  content: "\\f08e";\n}\n.wi-time-6:before {\n  content: "\\f08f";\n}\n.wi-time-7:before {\n  content: "\\f090";\n}\n.wi-time-8:before {\n  content: "\\f091";\n}\n.wi-time-9:before {\n  content: "\\f092";\n}\n.wi-time-10:before {\n  content: "\\f093";\n}\n.wi-time-11:before {\n  content: "\\f094";\n}\n.wi-day-sleet:before {\n  content: "\\f0b2";\n}\n.wi-night-sleet:before {\n  content: "\\f0b3";\n}\n.wi-night-alt-sleet:before {\n  content: "\\f0b4";\n}\n.wi-sleet:before {\n  content: "\\f0b5";\n}\n.wi-day-haze:before {\n  content: "\\f0b6";\n}\n.wi-beafort-0:before {\n  content: "\\f0b7";\n}\n.wi-beafort-1:before {\n  content: "\\f0b8";\n}\n.wi-beafort-2:before {\n  content: "\\f0b9";\n}\n.wi-beafort-3:before {\n  content: "\\f0ba";\n}\n.wi-beafort-4:before {\n  content: "\\f0bb";\n}\n.wi-beafort-5:before {\n  content: "\\f0bc";\n}\n.wi-beafort-6:before {\n  content: "\\f0bd";\n}\n.wi-beafort-7:before {\n  content: "\\f0be";\n}\n.wi-beafort-8:before {\n  content: "\\f0bf";\n}\n.wi-beafort-9:before {\n  content: "\\f0c0";\n}\n.wi-beafort-10:before {\n  content: "\\f0c1";\n}\n.wi-beafort-11:before {\n  content: "\\f0c2";\n}\n.wi-beafort-12:before {\n  content: "\\f0c3";\n}\n.wi-wind-default:before {\n  content: "\\f0b1";\n}\nwi-wind-default._0-deg {\n  -webkit-transform: rotate(0deg);\n  -moz-transform: rotate(0deg);\n  -ms-transform: rotate(0deg);\n  -o-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\nwi-wind-default._15-deg {\n  -webkit-transform: rotate(15deg);\n  -moz-transform: rotate(15deg);\n  -ms-transform: rotate(15deg);\n  -o-transform: rotate(15deg);\n  transform: rotate(15deg);\n}\nwi-wind-default._30-deg {\n  -webkit-transform: rotate(30deg);\n  -moz-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  -o-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\nwi-wind-default._45-deg {\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\nwi-wind-default._60-deg {\n  -webkit-transform: rotate(60deg);\n  -moz-transform: rotate(60deg);\n  -ms-transform: rotate(60deg);\n  -o-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\nwi-wind-default._75-deg {\n  -webkit-transform: rotate(75deg);\n  -moz-transform: rotate(75deg);\n  -ms-transform: rotate(75deg);\n  -o-transform: rotate(75deg);\n  transform: rotate(75deg);\n}\nwi-wind-default._90-deg {\n  -webkit-transform: rotate(90deg);\n  -moz-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  -o-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\nwi-wind-default._105-deg {\n  -webkit-transform: rotate(105deg);\n  -moz-transform: rotate(105deg);\n  -ms-transform: rotate(105deg);\n  -o-transform: rotate(105deg);\n  transform: rotate(105deg);\n}\nwi-wind-default._120-deg {\n  -webkit-transform: rotate(120deg);\n  -moz-transform: rotate(120deg);\n  -ms-transform: rotate(120deg);\n  -o-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\nwi-wind-default._135-deg {\n  -webkit-transform: rotate(135deg);\n  -moz-transform: rotate(135deg);\n  -ms-transform: rotate(135deg);\n  -o-transform: rotate(135deg);\n  transform: rotate(135deg);\n}\nwi-wind-default._150-deg {\n  -webkit-transform: rotate(150deg);\n  -moz-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  -o-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\nwi-wind-default._165-deg {\n  -webkit-transform: rotate(165deg);\n  -moz-transform: rotate(165deg);\n  -ms-transform: rotate(165deg);\n  -o-transform: rotate(165deg);\n  transform: rotate(165deg);\n}\nwi-wind-default._180-deg {\n  -webkit-transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  -o-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\nwi-wind-default._195-deg {\n  -webkit-transform: rotate(195deg);\n  -moz-transform: rotate(195deg);\n  -ms-transform: rotate(195deg);\n  -o-transform: rotate(195deg);\n  transform: rotate(195deg);\n}\nwi-wind-default._210-deg {\n  -webkit-transform: rotate(210deg);\n  -moz-transform: rotate(210deg);\n  -ms-transform: rotate(210deg);\n  -o-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\nwi-wind-default._225-deg {\n  -webkit-transform: rotate(225deg);\n  -moz-transform: rotate(225deg);\n  -ms-transform: rotate(225deg);\n  -o-transform: rotate(225deg);\n  transform: rotate(225deg);\n}\nwi-wind-default._240-deg {\n  -webkit-transform: rotate(240deg);\n  -moz-transform: rotate(240deg);\n  -ms-transform: rotate(240deg);\n  -o-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\nwi-wind-default._255-deg {\n  -webkit-transform: rotate(255deg);\n  -moz-transform: rotate(255deg);\n  -ms-transform: rotate(255deg);\n  -o-transform: rotate(255deg);\n  transform: rotate(255deg);\n}\nwi-wind-default._270-deg {\n  -webkit-transform: rotate(270deg);\n  -moz-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  -o-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\nwi-wind-default._285-deg {\n  -webkit-transform: rotate(295deg);\n  -moz-transform: rotate(295deg);\n  -ms-transform: rotate(295deg);\n  -o-transform: rotate(295deg);\n  transform: rotate(295deg);\n}\nwi-wind-default._300-deg {\n  -webkit-transform: rotate(300deg);\n  -moz-transform: rotate(300deg);\n  -ms-transform: rotate(300deg);\n  -o-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\nwi-wind-default._315-deg {\n  -webkit-transform: rotate(315deg);\n  -moz-transform: rotate(315deg);\n  -ms-transform: rotate(315deg);\n  -o-transform: rotate(315deg);\n  transform: rotate(315deg);\n}\nwi-wind-default._330-deg {\n  -webkit-transform: rotate(330deg);\n  -moz-transform: rotate(330deg);\n  -ms-transform: rotate(330deg);\n  -o-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\nwi-wind-default._345-deg {\n  -webkit-transform: rotate(345deg);\n  -moz-transform: rotate(345deg);\n  -ms-transform: rotate(345deg);\n  -o-transform: rotate(345deg);\n  transform: rotate(345deg);\n}\n.wi-moon-new:before {\n  content: "\\f095";\n}\n.wi-moon-waxing-cresent-1:before {\n  content: "\\f096";\n}\n.wi-moon-waxing-cresent-2:before {\n  content: "\\f097";\n}\n.wi-moon-waxing-cresent-3:before {\n  content: "\\f098";\n}\n.wi-moon-waxing-cresent-4:before {\n  content: "\\f099";\n}\n.wi-moon-waxing-cresent-5:before {\n  content: "\\f09a";\n}\n.wi-moon-waxing-cresent-6:before {\n  content: "\\f09b";\n}\n.wi-moon-first-quarter:before {\n  content: "\\f09c";\n}\n.wi-moon-waxing-gibbous-1:before {\n  content: "\\f09d";\n}\n.wi-moon-waxing-gibbous-2:before {\n  content: "\\f09e";\n}\n.wi-moon-waxing-gibbous-3:before {\n  content: "\\f09f";\n}\n.wi-moon-waxing-gibbous-4:before {\n  content: "\\f0a0";\n}\n.wi-moon-waxing-gibbous-5:before {\n  content: "\\f0a1";\n}\n.wi-moon-waxing-gibbous-6:before {\n  content: "\\f0a2";\n}\n.wi-moon-full:before {\n  content: "\\f0a3";\n}\n.wi-moon-waning-gibbous-1:before {\n  content: "\\f0a4";\n}\n.wi-moon-waning-gibbous-2:before {\n  content: "\\f0a5";\n}\n.wi-moon-waning-gibbous-3:before {\n  content: "\\f0a6";\n}\n.wi-moon-waning-gibbous-4:before {\n  content: "\\f0a7";\n}\n.wi-moon-waning-gibbous-5:before {\n  content: "\\f0a8";\n}\n.wi-moon-waning-gibbous-6:before {\n  content: "\\f0a9";\n}\n.wi-moon-3rd-quarter:before {\n  content: "\\f0aa";\n}\n.wi-moon-waning-crescent-1:before {\n  content: "\\f0ab";\n}\n.wi-moon-waning-crescent-2:before {\n  content: "\\f0ac";\n}\n.wi-moon-waning-crescent-3:before {\n  content: "\\f0ad";\n}\n.wi-moon-waning-crescent-4:before {\n  content: "\\f0ae";\n}\n.wi-moon-waning-crescent-5:before {\n  content: "\\f0af";\n}\n.wi-moon-waning-crescent-6:before {\n  content: "\\f0b0";\n}\n',""]);const y=g},28:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap);"]),a.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: #607B88;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.header {\r\n  padding-top: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.5em;\r\n}\r\n\r\n.content {\r\n  padding: 20px;\r\n  outline: 2px solid black;\r\n  width: 200px;\r\n  border-radius: 5px;\r\n\r\n  display: grid;\r\n\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: repeat(5, auto);\r\n\r\n  gap: 5px;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\nh2, i, .temp {\r\n  text-align: center;\r\n}\r\n\r\n.content h2, .content p + p {\r\n  grid-column: 1 / 3;\r\n}\r\n\r\ni, .temp {\r\n  padding-top: 20px;\r\n  padding-bottom: 10px;\r\n  font-size: 40px;\r\n}\r\n\r\n#location {\r\n  background-color: #ffffff00;\r\n  border: 1px solid white;\r\n  color: white;\r\n  padding: 5px 10px;\r\n  font-weight: 500;\r\n}\r\n\r\n#submit {\r\n  background-color: #ffffff00;\r\n  border: 1px solid white;\r\n  color: white;\r\n  border-radius: 5px;\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n  font-weight: 500;\r\n}\r\n\r\n.temp-scale-chooser {\r\n  text-align: center;\r\n  border: 1px solid white;\r\n  width: 20px;\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  margin-top: 5px;\r\n  grid-column: 1 / 3;\r\n}\r\n\r\n.temp-scale-chooser:hover {\r\n  cursor: pointer;\r\n  user-select: none;\r\n}",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var w=0;w<n.length;w++){var f=[].concat(n[w]);o&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),r&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=r):f[4]="".concat(r)),e.push(f))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],w=o.base?c[0]+o.base:c[0],f=i[w]||0,d="".concat(w," ").concat(f);i[w]=f+1;var m=t(d),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(g);else{var l=r(g,o);o.byIndex=s,e.splice(s,0,{identifier:d,updater:l,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),w=0;w<i.length;w++){var f=t(i[w]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},404:(n,e,t)=>{n.exports=t.p+"db8e6bec2adb2a3e2779.eot"},839:(n,e,t)=>{n.exports=t.p+"3726e04a389324097351.svg"},194:(n,e,t)=>{n.exports=t.p+"520c26b13fefaeef5c94.ttf"},172:(n,e,t)=>{n.exports=t.p+"e4d2c00ed56824803ce0.woff"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n="8e20cde8b73e6563b97fcaaa362b62ff";var e=t(379),o=t.n(e),r=t(795),i=t.n(r),a=t(569),s=t.n(a),c=t(565),w=t.n(c),f=t(216),d=t.n(f),m=t(589),g=t.n(m),l=t(28),u={};u.styleTagTransform=g(),u.setAttributes=w(),u.insert=s().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=d(),o()(l.Z,u),l.Z&&l.Z.locals&&l.Z.locals;var b=t(179),h={};function p(n){return(1.8*(n-273.15)+32).toFixed(0)}function y(n){return(n-273.15).toFixed(0)}function x(n){return(2.237*n).toFixed(0)}function v(n){return n>=337.5||n<=22.5?"N":n>22.5&&n<=67.5?"NE":n>67.5&&n<=112.5?"E":n>112.5&&n<=157.5?"SE":n>157.5&&n<=202.5?"S":n>202.5&&n<=247.5?"SW":n>247.5&&n<=292.5?"W":n>292.5&&n<=337.5?"NW":""}h.styleTagTransform=g(),h.setAttributes=w(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),o()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;const k=document.querySelector("#location"),C=document.querySelector("#submit"),S=document.querySelector(".content");async function _(e){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${n}`);return await t.json()}function z(n){S.textContent="";const e=document.createElement("h2");n.sys.country?e.textContent=`${n.name}, ${n.sys.country}`:e.textContent=n.name,S.appendChild(e);const t=document.createElement("i");t.classList.add("wi");const o=function(n,e,t){const o=n/1e3;return o>=e&&o<=t?(document.querySelector("body").style.backgroundColor="#B0E6E8",document.querySelector("body").style.transition="background-color 1000ms linear",document.querySelector("body").style.color="black",document.querySelector(".content").style.outline="2px solid black",document.querySelector("#location").style.border="1px solid black",document.querySelector("#location").style.color="black",document.querySelector("#submit").style.border="1px solid black",document.querySelector("#submit").style.color="black","day"):(document.querySelector("body").style.backgroundColor="#101028",document.querySelector("body").style.transition="background-color 1000ms linear",document.querySelector("body").style.color="white",document.querySelector(".content").style.outline="2px solid white",document.querySelector("#location").style.border="1px solid white",document.querySelector("#location").style.color="white",document.querySelector("#submit").style.border="1px solid white",document.querySelector("#submit").style.color="white","night")}(Date.now(),n.sys.sunrise,n.sys.sunset),r=n.weather[0].id;t.classList.add(function(n,e){switch(`wi-owm-${e}-${n}`){case"wi-owm-day-200":case"wi-owm-day-201":case"wi-owm-day-202":case"wi-owm-day-230":case"wi-owm-day-231":case"wi-owm-day-232":return"wi-day-thunderstorm";case"wi-owm-day-210":case"wi-owm-day-211":case"wi-owm-day-212":case"wi-owm-day-221":return"wi-day-lightning";case"wi-owm-day-300":case"wi-owm-day-301":case"wi-owm-day-321":case"wi-owm-day-500":return"wi-day-sprinkle";case"wi-owm-day-302":case"wi-owm-day-310":case"wi-owm-day-311":case"wi-owm-day-312":case"wi-owm-day-313":case"wi-owm-day-314":case"wi-owm-day-501":case"wi-owm-day-502":case"wi-owm-day-503":case"wi-owm-day-504":return"wi-day-rain";case"wi-owm-day-511":case"wi-owm-day-611":case"wi-owm-day-612":case"wi-owm-day-615":case"wi-owm-day-616":case"wi-owm-day-620":return"wi-day-rain-mix";case"wi-owm-day-520":case"wi-owm-day-521":case"wi-owm-day-522":case"wi-owm-day-701":return"wi-day-showers";case"wi-owm-day-531":return"wi-day-storm-showers";case"wi-owm-day-600":case"wi-owm-day-602":case"wi-owm-day-621":case"wi-owm-day-622":return"wi-day-snow";case"wi-owm-day-601":return"wi-day-sleet";case"wi-owm-day-711":case"wi-owm-night-711":return"wi-smoke";case"wi-owm-day-721":case"wi-owm-night-721":return"wi-day-haze";case"wi-owm-day-731":case"wi-owm-day-761":case"wi-owm-day-762":case"wi-owm-night-731":case"wi-owm-night-761":case"wi-owm-night-762":return"wi-dust";case"wi-owm-day-741":return"wi-day-fog";case"wi-owm-day-781":case"wi-owm-day-900":case"wi-owm-night-781":case"wi-owm-night-900":return"wi-tornado";case"wi-owm-day-800":return"wi-day-sunny";case"wi-owm-day-801":case"wi-owm-day-802":case"wi-owm-day-803":return"wi-day-cloudy-gusts";case"wi-owm-day-804":return"wi-day-sunny-overcast";case"wi-owm-day-902":case"wi-owm-night-902":return"wi-hurricane";case"wi-owm-day-903":case"wi-owm-night-903":return"wi-snowflake-cold";case"wi-owm-day-904":case"wi-owm-night-904":return"wi-hot";case"wi-owm-day-906":return"wi-day-hail";case"wi-owm-day-957":case"wi-owm-night-957":return"wi-strong-wind";case"wi-owm-night-200":case"wi-owm-night-201":case"wi-owm-night-202":case"wi-owm-night-230":case"wi-owm-night-231":case"wi-owm-night-232":return"wi-night-alt-thunderstorm";case"wi-owm-night-210":case"wi-owm-night-211":case"wi-owm-night-212":case"wi-owm-night-221":return"wi-night-alt-lightning";case"wi-owm-night-300":case"wi-owm-night-301":case"wi-owm-night-321":case"wi-owm-night-500":return"wi-night-alt-sprinkle";case"wi-owm-night-302":case"wi-owm-night-310":case"wi-owm-night-311":case"wi-owm-night-312":case"wi-owm-night-313":case"wi-owm-night-314":case"wi-owm-night-501":case"wi-owm-night-502":case"wi-owm-night-503":case"wi-owm-night-504":return"wi-night-alt-rain";case"wi-owm-night-511":case"wi-owm-night-611":case"wi-owm-night-612":case"wi-owm-night-615":case"wi-owm-night-616":case"wi-owm-night-620":return"wi-night-alt-rain-mix";case"wi-owm-night-520":case"wi-owm-night-521":case"wi-owm-night-522":case"wi-owm-night-701":return"wi-night-alt-showers";case"wi-owm-night-531":return"wi-night-alt-storm-showers";case"wi-owm-night-600":case"wi-owm-night-602":case"wi-owm-night-621":case"wi-owm-night-622":return"wi-night-alt-snow";case"wi-owm-night-601":return"wi-night-alt-sleet";case"wi-owm-night-741":return"wi-night-fog";case"wi-owm-night-800":return"wi-night-clear";case"wi-owm-night-801":case"wi-owm-night-802":case"wi-owm-night-803":return"wi-night-alt-cloudy-gusts";case"wi-owm-night-804":return"wi-night-alt-cloudy";case"wi-owm-night-906":return"wi-night-alt-hail";default:return"day"===e?"wi-day-sunny":"wi-night-clear"}}(r,o)),S.appendChild(t);const i=document.createElement("p");i.className="temp",i.textContent=`${p(n.main.temp)}°`,S.appendChild(i);const a=document.createElement("p"),s=[];n.weather.forEach((n=>{s.push(`${n.main} (${n.description})`)})),a.textContent=s.join("; "),S.appendChild(a);const c=document.createElement("p");c.textContent=`High: ${p(n.main.temp_max)}° | Low: ${p(n.main.temp_min)}°`,S.appendChild(c);const w=document.createElement("p");w.textContent=`Humidity: ${n.main.humidity}%`,S.appendChild(w);const f=document.createElement("p");f.textContent=`Wind: ${v(n.wind.deg)} ${x(n.wind.speed)} mph`,S.appendChild(f);const d=document.createElement("div");d.className="temp-scale-chooser",d.innerHTML="°F",d.style.border="day"===o?"1px solid black":"1px solid white",S.appendChild(d),d.addEventListener("click",(()=>{var e;"°F"===d.textContent?(d.textContent="°C",i.textContent=`${y(n.main.temp)}°`,c.textContent=`High: ${y(n.main.temp_max)}° | Low: ${y(n.main.temp_min)}°`,f.textContent=`Wind: ${v(n.wind.deg)} ${e=n.wind.speed,(3.6*e).toFixed(0)} km/h`):(d.textContent="°F",i.textContent=`${p(n.main.temp)}°`,c.textContent=`High: ${p(n.main.temp_max)}° | Low: ${p(n.main.temp_min)}°`,f.textContent=`Wind: ${v(n.wind.deg)} ${x(n.wind.speed)} mph`)}))}navigator.geolocation.getCurrentPosition((e=>{(async function(e){const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e.lat}&lon=${e.lon}&appid=${n}`);return await t.json()})({lat:e.coords.latitude,lon:e.coords.longitude}).then((n=>{z(n)}))}),(()=>{_("Detroit").then((n=>{z(n)}))})),C.addEventListener("click",(()=>{_(k.value).then((n=>{z(n)})).catch((()=>{const n=document.createElement("h2");n.textContent="Location not found",S.appendChild(n)})),k.value=""}))})()})();