/* Reveals the dropdown menu hidden in the hamburger menu. */

function dropdown() {

	var dropdown = document.getElementById("dropdown");

	if (dropdown.checked) {

		document.getElementById("nav").style.visibility = "visible";
		document.getElementById("burger").style.transform = "rotate(90deg)";

	} else {

		document.getElementById("nav").style.visibility = "hidden";
		document.getElementById("burger").style.transform = "rotate(0deg)";

	}

}

/* Toggles the images in the gallery when they are clicked on. */

function gallery1() {

	var gallery1 = document.createElement("div");
	gallery1.id = "gallery1";
	document.body.appendChild(gallery1);

	var galleryImg1 = document.createElement("img");
	document.getElementById("gallery1").appendChild(galleryImg1);
	galleryImg1.src = "images/gallery1.png";

	gallery1.addEventListener("click", function() {
		gallery1.remove();
		galleryImg1.remove();
	});

}

function gallery2() {

	var gallery2 = document.createElement("div");
	gallery2.id = "gallery2";
	document.body.appendChild(gallery2);

	var galleryImg2 = document.createElement("img");
	document.getElementById("gallery2").appendChild(galleryImg2);
	galleryImg2.src = "images/gallery2.png";

	gallery2.addEventListener("click", function() {
		gallery2.remove();
		galleryImg2.remove();
	});

}

function gallery3() {

	var gallery3 = document.createElement("div");
	gallery3.id = "gallery3";
	document.body.appendChild(gallery3);

	var galleryImg3 = document.createElement("img");
	document.getElementById("gallery3").appendChild(galleryImg3);
	galleryImg3.src = "images/gallery3.png";

	gallery3.addEventListener("click", function() {
		gallery3.remove();
		galleryImg3.remove();
	});

}

function gallery4() {

	var gallery4 = document.createElement("div");
	gallery4.id = "gallery4";
	document.body.appendChild(gallery4);

	var galleryImg4 = document.createElement("img");
	document.getElementById("gallery4").appendChild(galleryImg4);
	galleryImg4.src = "images/gallery4.png";

	gallery4.addEventListener("click", function() {
		gallery4.remove();
		galleryImg4.remove();
	});

}

function gallery5() {

	var gallery5 = document.createElement("div");
	gallery5.id = "gallery5";
	document.body.appendChild(gallery5);

	var galleryImg5 = document.createElement("img");
	document.getElementById("gallery5").appendChild(galleryImg5);
	galleryImg5.src = "images/gallery5.png";

	gallery5.addEventListener("click", function() {
		gallery5.remove();
		galleryImg5.remove();
	});

}

function gallery6() {

	var gallery6 = document.createElement("div");
	gallery6.id = "gallery6";
	document.body.appendChild(gallery6);

	var galleryImg6 = document.createElement("img");
	document.getElementById("gallery6").appendChild(galleryImg6);
	galleryImg6.src = "images/gallery6.png";

	gallery6.addEventListener("click", function() {
		gallery6.remove();
		galleryImg6.remove();
	});

}

function gallery7() {

	var gallery7 = document.createElement("div");
	gallery7.id = "gallery7";
	document.body.appendChild(gallery7);

	var galleryImg7 = document.createElement("img");
	document.getElementById("gallery7").appendChild(galleryImg7);
	galleryImg7.src = "images/gallery7.png";

	gallery7.addEventListener("click", function() {
		gallery7.remove();
		galleryImg7.remove();
	});

}

function gallery8() {

	var gallery8 = document.createElement("div");
	gallery8.id = "gallery8";
	document.body.appendChild(gallery8);

	var galleryImg8 = document.createElement("img");
	document.getElementById("gallery8").appendChild(galleryImg8);
	galleryImg8.src = "images/gallery8.png";

	gallery8.addEventListener("click", function() {
		gallery8.remove();
		galleryImg8.remove();
	});

}

function gallery9() {

	var gallery9 = document.createElement("div");
	gallery9.id = "gallery9";
	document.body.appendChild(gallery9);

	var galleryImg9 = document.createElement("img");
	document.getElementById("gallery9").appendChild(galleryImg9);
	galleryImg9.src = "images/gallery9.png";

	gallery9.addEventListener("click", function() {
		gallery9.remove();
		galleryImg9.remove();
	});

}

function gallery10() {

	var gallery10 = document.createElement("div");
	gallery10.id = "gallery10";
	document.body.appendChild(gallery10);

	var galleryImg10 = document.createElement("img");
	document.getElementById("gallery10").appendChild(galleryImg10);
	galleryImg10.src = "images/gallery10.png";

	gallery10.addEventListener("click", function() {
		gallery10.remove();
		galleryImg10.remove();
	});

}

function gallery11() {

	var gallery11 = document.createElement("div");
	gallery11.id = "gallery11";
	document.body.appendChild(gallery11);

	var galleryImg11 = document.createElement("img");
	document.getElementById("gallery11").appendChild(galleryImg11);
	galleryImg11.src = "images/gallery11.png";

	gallery11.addEventListener("click", function() {
		gallery11.remove();
		galleryImg11.remove();
	});

}

function gallery12() {

	var gallery12 = document.createElement("div");
	gallery12.id = "gallery12";
	document.body.appendChild(gallery12);

	var galleryImg12 = document.createElement("img");
	document.getElementById("gallery12").appendChild(galleryImg12);
	galleryImg12.src = "images/gallery12.png";

	gallery12.addEventListener("click", function() {
		gallery12.remove();
		galleryImg12.remove();
	});

}

function gallery13() {

	var gallery13 = document.createElement("div");
	gallery13.id = "gallery13";
	document.body.appendChild(gallery13);

	var galleryImg13 = document.createElement("img");
	document.getElementById("gallery13").appendChild(galleryImg13);
	galleryImg13.src = "images/gallery13.png";

	gallery13.addEventListener("click", function() {
		gallery13.remove();
		galleryImg13.remove();
	});

}

function gallery14() {

	var gallery14 = document.createElement("div");
	gallery14.id = "gallery14";
	document.body.appendChild(gallery14);

	var galleryImg14 = document.createElement("img");
	document.getElementById("gallery14").appendChild(galleryImg14);
	galleryImg14.src = "images/gallery14.png";

	gallery14.addEventListener("click", function() {
		gallery14.remove();
		galleryImg14.remove();
	});

}

function gallery15() {

	var gallery15 = document.createElement("div");
	gallery15.id = "gallery15";
	document.body.appendChild(gallery15);

	var galleryImg15 = document.createElement("img");
	document.getElementById("gallery15").appendChild(galleryImg15);
	galleryImg15.src = "images/gallery15.png";

	gallery15.addEventListener("click", function() {
		gallery15.remove();
		galleryImg15.remove();
	});

}

/* Transitions from the 'start' page to the 'size' page. */

var startButton = document.querySelector("#startbutton");

startButton.addEventListener("click", function() {

	document.body.style.backgroundImage = "url('images/create2.png')";
	document.body.style.backgroundPosition = "-700px -700px";
	document.getElementById("customstart").style.opacity = "0";
	document.getElementById("customstart").style.visibility = "hidden";
	document.getElementById("startbutton").style.opacity = "0";
	document.getElementById("startbutton").style.visibility = "hidden";
	document.getElementById("startbutton").style.transition = "all 1s ease";
	document.getElementById("disclaimer").style.opacity = "0";
	document.getElementById("disclaimer").style.visibility = "hidden";
	document.getElementById("disclaimer").style.transition = "all 1s ease";
	document.getElementById("customsize").style.opacity = "1";
	document.getElementById("customsize").style.visibility = "visible";
	document.getElementById("sizebutton").style.pointerEvents = "none";
	document.getElementById("sizebutton").style.opacity = "0.5";

});

/* Defines and sets the 'size' and 'flavour' variables. */

var customSize;
var customFlavour;
var customCake;

customSize = "custom1A";
customFlavour = "custom2A";
customCake = "1";

/* Updates the 'size' variable when clicked on. */

function custom1A() {

	customSize = "custom1A";
	document.getElementById("custom1A").style.opacity = "1";
	document.getElementById("custom1B").style.opacity = "0.6";
	document.getElementById("custom1C").style.opacity = "0.6";
	document.getElementById("sizebutton").style.pointerEvents = "auto";
	document.getElementById("sizebutton").style.opacity = "1";

}

function custom1B() {

	customSize = "custom1B";
	document.getElementById("custom1A").style.opacity = "0.6";
	document.getElementById("custom1B").style.opacity = "1";
	document.getElementById("custom1C").style.opacity = "0.6";
	document.getElementById("sizebutton").style.pointerEvents = "auto";
	document.getElementById("sizebutton").style.opacity = "1";

}

function custom1C() {

	customSize = "custom1C";
	document.getElementById("custom1A").style.opacity = "0.6";
	document.getElementById("custom1B").style.opacity = "0.6";
	document.getElementById("custom1C").style.opacity = "1";
	document.getElementById("sizebutton").style.pointerEvents = "auto";
	document.getElementById("sizebutton").style.opacity = "1";

}

/* Transitions from the 'size' page to the 'flavour' page. */

var sizeButton = document.querySelector("#sizebutton");

sizeButton.addEventListener("click", function() {

	document.getElementById("customsize").style.opacity = "0";
	document.getElementById("customsize").style.visibility = "hidden";
	document.getElementById("sizebutton").style.opacity = "0";
	document.getElementById("sizebutton").style.visibility = "hidden";
	document.getElementById("sizebutton").style.transition = "all 1s ease";
	document.getElementById("customflavour").style.opacity = "1";
	document.getElementById("customflavour").style.visibility = "visible";
	document.getElementById("flavourbutton").style.pointerEvents = "none";
	document.getElementById("flavourbutton").style.opacity = "0.5";

	switch (customSize) {

		case "custom1A":

			document.getElementById("custom2A").src = "images/custom2A.png";
			document.getElementById("custom2B").src = "images/custom2B.png";
			document.getElementById("custom2C").src = "images/custom2C.png";

			break;

		case "custom1B":

			document.getElementById("custom2A").id = "custom2D";
			document.getElementById("custom2B").id = "custom2E";
			document.getElementById("custom2C").id = "custom2F";

			document.getElementById("custom2D").src = "images/custom2D.png";
			document.getElementById("custom2E").src = "images/custom2E.png";
			document.getElementById("custom2F").src = "images/custom2F.png";

			document.getElementById("custom2D").onclick = custom2D;
			document.getElementById("custom2E").onclick = custom2E;
			document.getElementById("custom2F").onclick = custom2F;

			break;

		case "custom1C":

			document.getElementById("custom2A").id = "custom2G";
			document.getElementById("custom2B").id = "custom2H";
			document.getElementById("custom2C").id = "custom2I";

			document.getElementById("custom2G").src = "images/custom2G.png";
			document.getElementById("custom2H").src = "images/custom2H.png";
			document.getElementById("custom2I").src = "images/custom2I.png";

			document.getElementById("custom2G").onclick = custom2G;
			document.getElementById("custom2H").onclick = custom2H;
			document.getElementById("custom2I").onclick = custom2I;

			break;

	}

});

/* Updates the 'flavour' variable when clicked on. */

function custom2A() {

	customFlavour = "custom2A";
	document.getElementById("custom2A").style.opacity = "1";
	document.getElementById("custom2B").style.opacity = "0.6";
	document.getElementById("custom2C").style.opacity = "0.6";
	document.getElementById("flavourbutton").style.pointerEvents = "auto";
	document.getElementById("flavourbutton").style.opacity = "1";

}

function custom2B() {

	customFlavour = "custom2B";
	document.getElementById("custom2A").style.opacity = "0.6";
	document.getElementById("custom2B").style.opacity = "1";
	document.getElementById("custom2C").style.opacity = "0.6";
	document.getElementById("flavourbutton").style.pointerEvents = "auto";
	document.getElementById("flavourbutton").style.opacity = "1";

}

function custom2C() {

	customFlavour = "custom2C";
	document.getElementById("custom2A").style.opacity = "0.6";
	document.getElementById("custom2B").style.opacity = "0.6";
	document.getElementById("custom2C").style.opacity = "1";
	document.getElementById("flavourbutton").style.pointerEvents = "auto";
	document.getElementById("flavourbutton").style.opacity = "1";

}

function custom2D() {

	customFlavour = "custom2D";
	document.getElementById("custom2D").style.opacity = "1";
	document.getElementById("custom2E").style.opacity = "0.6";
	document.getElementById("custom2F").style.opacity = "0.6";
	document.getElementById("flavourbutton").style.pointerEvents = "auto";
	document.getElementById("flavourbutton").style.opacity = "1";

}

function custom2E() {

	customFlavour = "custom2E";
	document.getElementById("custom2D").style.opacity = "0.6";
	document.getElementById("custom2E").style.opacity = "1";
	document.getElementById("custom2F").style.opacity = "0.6";
	document.getElementById("flavourbutton").style.pointerEvents = "auto";
	document.getElementById("flavourbutton").style.opacity = "1";

}

function custom2F() {

	customFlavour = "custom2F";
	document.getElementById("custom2D").style.opacity = "0.6";
	document.getElementById("custom2E").style.opacity = "0.6";
	document.getElementById("custom2F").style.opacity = "1";
	document.getElementById("flavourbutton").style.pointerEvents = "auto";
	document.getElementById("flavourbutton").style.opacity = "1";

}

function custom2G() {

	customFlavour = "custom2G";
	document.getElementById("custom2G").style.opacity = "1";
	document.getElementById("custom2H").style.opacity = "0.6";
	document.getElementById("custom2I").style.opacity = "0.6";
	document.getElementById("flavourbutton").style.pointerEvents = "auto";
	document.getElementById("flavourbutton").style.opacity = "1";

}

function custom2H() {

	customFlavour = "custom2H";
	document.getElementById("custom2G").style.opacity = "0.6";
	document.getElementById("custom2H").style.opacity = "1";
	document.getElementById("custom2I").style.opacity = "0.6";
	document.getElementById("flavourbutton").style.pointerEvents = "auto";
	document.getElementById("flavourbutton").style.opacity = "1";

}

function custom2I() {

	customFlavour = "custom2I";
	document.getElementById("custom2G").style.opacity = "0.6";
	document.getElementById("custom2H").style.opacity = "0.6";
	document.getElementById("custom2I").style.opacity = "1";
	document.getElementById("flavourbutton").style.pointerEvents = "auto";
	document.getElementById("flavourbutton").style.opacity = "1";

}

/* Transitions from the 'flavour' page to the 'confirm' page. */

var flavourButton = document.querySelector("#flavourbutton");

flavourButton.addEventListener("click", function() {

	document.getElementById("customflavour").style.opacity = "0";
	document.getElementById("customflavour").style.visibility = "hidden";
	document.getElementById("flavourbutton").style.opacity = "0";
	document.getElementById("flavourbutton").style.visibility = "hidden";
	document.getElementById("flavourbutton").style.transition = "all 1s ease";
	document.getElementById("customconfirm").style.opacity = "1";
	document.getElementById("customconfirm").style.visibility = "visible";

	if (customSize == "custom1A") {

		switch (customFlavour) {

			case "custom2A":

				customCake = "1";
				document.getElementById("confirm").src = "images/custom2A.png";
				document.getElementById("confirmcaptioninner").innerHTML = "Small Chocolate Cake ($10.00)";

				break;

			case "custom2B":

				customCake = "2";
				document.getElementById("confirm").src = "images/custom2B.png";
				document.getElementById("confirmcaptioninner").innerHTML = "Small Strawberry Cake ($10.00)";

				break;

			case "custom2C":

				customCake = "3";
				document.getElementById("confirm").src = "images/custom2C.png";
				document.getElementById("confirmcaptioninner").innerHTML = "Small Red Velvet Cake ($10.00)";

				break;

		}

	} else if (customSize == "custom1B") {

		switch (customFlavour) {

			case "custom2D":

				customCake = "4";
				document.getElementById("confirm").src = "images/custom2D.png";
				document.getElementById("confirmcaptioninner").innerHTML = "Medium Chocolate Cake ($20.00)";

				break;

			case "custom2E":

				customCake = "5";
				document.getElementById("confirm").src = "images/custom2E.png";
				document.getElementById("confirmcaptioninner").innerHTML = "Medium Strawberry Cake ($20.00)";

				break;

			case "custom2F":

				customCake = "6";
				document.getElementById("confirm").src = "images/custom2F.png";
				document.getElementById("confirmcaptioninner").innerHTML = "Medium Red Velvet Cake ($20.00)";

				break;

		}

	} else if (customSize == "custom1C") {

		switch (customFlavour) {

			case "custom2G":

				customCake = "7";
				document.getElementById("confirm").src = "images/custom2G.png";
				document.getElementById("confirmcaptioninner").innerHTML = "Large Chocolate Cake ($30.00)";

				break;

			case "custom2H":

				customCake = "8";
				document.getElementById("confirm").src = "images/custom2H.png";
				document.getElementById("confirmcaptioninner").innerHTML = "Large Strawberry Cake ($30.00)";

				break;

			case "custom2I":

				customCake = "9";
				document.getElementById("confirm").src = "images/custom2I.png";
				document.getElementById("confirmcaptioninner").innerHTML = "Large Red Velvet Cake ($30.00)";

				break;

		}

	}

});

/* Transitions from the 'confirm' page to the 'flavour' page. */

var confirmNo = document.querySelector("#confirmno");

confirmNo.addEventListener("click", function() {

	document.getElementById("customconfirm").style.opacity = "0";
	document.getElementById("customconfirm").style.visibility = "hidden";
	document.getElementById("customflavour").style.opacity = "1";
	document.getElementById("customflavour").style.visibility = "visible";
	document.getElementById("flavourbutton").style.opacity = "1";
	document.getElementById("flavourbutton").style.visibility = "visible";

});

/* Transitions from the 'confirm' page to the 'checkout' page. */

var confirmYes = document.querySelector("#confirmyes");

confirmYes.addEventListener("click", function() {

	document.getElementById("customconfirm").style.opacity = "0";
	document.getElementById("customconfirm").style.visibility = "hidden";
	document.getElementById("customcheckout").style.opacity = "1";
	document.getElementById("customcheckout").style.visibility = "visible";
	document.getElementById("checkoutbutton").style.visibility = "visible";

	switch (customCake) {

		case "1":

			document.getElementById("checkoutconfirminner").innerHTML = "1x Small Chocolate Cake ($10.00)";
			document.getElementById("checkout").src = "images/custom2A.png";

			break;

		case "2":

			document.getElementById("checkoutconfirminner").innerHTML = "1x Small Strawberry Cake ($10.00)";
			document.getElementById("checkout").src = "images/custom2B.png";

			break;

		case "3":

			document.getElementById("checkoutconfirminner").innerHTML = "1x Small Red Velvet Cake ($10.00)";
			document.getElementById("checkout").src = "images/custom2C.png";

			break;

		case "4":

			document.getElementById("checkoutconfirminner").innerHTML = "1x Medium Chocolate Cake ($20.00)";
			document.getElementById("checkout").src = "images/custom2D.png";

			break;

		case "5":

			document.getElementById("checkoutconfirminner").innerHTML = "1x Medium Strawberry Cake ($20.00)";
			document.getElementById("checkout").src = "images/custom2E.png";

			break;

		case "6":

			document.getElementById("checkoutconfirminner").innerHTML = "1x Medium Red Velvet Cake ($20.00)";
			document.getElementById("checkout").src = "images/custom2F.png";

			break;

		case "7":

			document.getElementById("checkoutconfirminner").innerHTML = "1x Large Chocolate Cake ($30.00)";
			document.getElementById("checkout").src = "images/custom2G.png";

			break;

		case "8":

			document.getElementById("checkoutconfirminner").innerHTML = "1x Large Strawberry Cake ($30.00)";
			document.getElementById("checkout").src = "images/custom2H.png";

			break;

		case "9":

			document.getElementById("checkoutconfirminner").innerHTML = "1x Large Red Velvet Cake ($30.00)";
			document.getElementById("checkout").src = "images/custom2I.png";

			break;

	}

});