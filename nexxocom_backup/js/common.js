!function(e){e(document).ready(function(){var a,i=navigator.userAgent,o=i.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))/i)||[],n="",t="";switch(/trident/i.test(o[0])?n="ie":"Chrome"===o[0]&&null!==(a=i.match(/\b(OPR|Edge)/))&&(n=a[0].replace("OPR","opera")),""===n&&(n="standalone"in window.navigator&&!window.navigator.standalone?"uiwebview":o[0]&&""!==o[0]?o[0]:navigator.appName),n=n.toLowerCase()){case"msie":t="ie";break;case"firefox":t="gecko";break;default:t=n}i.match(/iPhone/)&&(t+=" iphone"),e("body").addClass(t)})}(jQuery);