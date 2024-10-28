function sign(){
	const entry = document.querySelector("#date").value;
	birthday = new Date(entry);
	console.log(birthday);
	let date = birthday.getUTCDate();
	console.log(date);
	let month = birthday.getUTCMonth() + 1;
	console.log(month);
	year = birthday.getFullYear();
	currBirth = year.toString() + "/" + month.toString() + "/" + date.toString();

	let zodiac = new Array(12);
	zodiac[0]=["Aries",3,21,31,4,1,20,"If you refuse to acccept anything but the best, you very often get it!","images/aries.png"];
	zodiac[1]=["Taurus",4,21,30,5,1,21,"Enjoy the good luck a companion brings you","images/taurus.png"];
	zodiac[2]=["Gemini",5,22,31,6,1,21,"A short stranger will soon enter your life with blessings to share!","images/gemini.png"];
	zodiac[3]=["Cancer",6,22,30,7,1,22,"A new voyage will fill your life with untold memories!","images/cancer.png"];
	zodiac[4]=["Leo",7,23,31,8,1,22,"There will be a happy romance for you shortly!","images/leo.png"];
	zodiac[5]=["Virgo",8,23,31,9,1,21,"You will be rewarded for being a good listener next week!","images/virgo.png"];
	zodiac[6]=["Libra",9,22,30,10,1,22,"Wisdom is on her way to you","images/libra.png"];
	zodiac[7]=["Scorpio",10,23,31,11,1,21,"Today is an ideal day to water your personal garden!","images/scorpio.png"];
	zodiac[8]=["Sagittarius",11,22,30,12,1,21,"Ask your friend to join your next voyage!","images/sagittarius.png"];
	zodiac[9]=["Capricorn",12,22,31,1,1,20,"You will soon discover a major truth about the one you love most","images/capricorn.png"];
	zodiac[10]=["Aquarius",1,21,31,2,1,19,"The energy is within you. Money is coming!","images/aquarius.png"];
	zodiac[11]=["Pisces",2,20,29,3,1,20,"You will be given the chance to take part in an exciting adventure!","images/pisces.jpeg"];

	let output = "";
	for (i=0;i<zodiac.length;i++)
	{
		if (month==zodiac[i][1]&&zodiac[i][2]<=date&&date<=zodiac[i][3] || month==zodiac[i][4]&&zodiac[i][5]<=date&&date<=zodiac[i][6])
		{
			fortune = zodiac[i][7];
			output = "Your birthday is: " +currBirth+ "; Your zodiac is: " + zodiac[i][0] + "; and your fortune is: " + fortune;
			source = zodiac[i][8]
		}
	}
	console.log(output);
	document.querySelector("textarea").value = output;
	document.getElementById("signImg").innerHTML = "<img src=" + source + " id='zodiacImg'>";
}