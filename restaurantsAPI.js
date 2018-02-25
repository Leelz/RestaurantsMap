use restaurants_db;

db.restaurants.insert([
{
	name: "Amarone",
	telephone: "0131 523 1171",
	opening: [ "Mon–Fri 8am–10pm", "Sat/Sun 10am–10pm" ],
	pre_theatre: {
		info: "Sun–Fri noon–6.30pm, Sat noon–3pm",
		price: "£15.95 (£18.95 three courses)",
	}
	email: "info@amaronerestaurant.co.uk",
	Website: "www.amaronerestaurant.co.uk"
},
{
	name: "Voodoo Rooms",
	telephone: "0131 556 7060",
	opening: ["Mon–Thu 4pm–1am", "Fri–Sun noon–1am"]
	pre_theatre: { 
		info: "Table back before 7pm",
		price: "20% off the set menu"
	},
	email: "info@thevoodoorooms.com",
	Website: "www.thevoodoorooms.com/"
},
{
	name: "The Dome"
	telephone: "0131 624 8624",
	opening: ["Mon–Fri 8am–10pm", "Sat/Sun 10am–10pm"]
	pre_theatre: { 
		info: "Sun–Fri noon–6.30pm, Sat noon–3pm"
		price: "£15.95 (£18.95 three courses)",
	},
	email: "info@amaronerestaurant.co.uk",
	Website: "www.amaronerestaurant.co.uk"
},
]);


