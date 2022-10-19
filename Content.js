var mypages = ["https://www.fiverr.com/inbox", "https://www.fiverr.com/earnings?source=header_nav"];

var currentPage = 0;
setInterval(()=>{
	if(currentPage >= mypages.length) currentPage = 0;
	window.location = mypages[currentPage];
	currentPage += 1;
},240000); // reload every 4minutes 240000