/*
 * A space goes after "if"
 */

var traveler_count = 1; 
//For add/remove traveler functions 
var trans_count = 1; 
//For keeping track of transportation by leg 
var lodg_count = 1; 
//for keeping track of lodging by leg

function elevated_risk()
{
	//Pre: Elevated risk section hidden, corresponding dropdown menu showing empty value
	//Post: Elevated risk section showing 

	var ers_check = document.getElementById("elevated_risk_check");
	var ers_text = document.getElementById("elevated_risk_situation");  

	if (ers_check.checked)
	{
		ers_text.style.display = "block"; 
	}
	else
	{
		ers_text.style.display = "none"; 
	}
}//function elevated_risk

function transportation_choice()
{
	//Pre: Transportation type fields are hidden, corresponding dropdown menu showing empty value 
	//Post: Transportation type fields are showing according to value of corresponding dropdown menus 

	var mode = document.getElementById("mode_of_travel"); 
	var plane_mode = document.getElementById("plane_mode_of_travel");
	var vehicle_mode = document.getElementById("vehicle_mode_of_travel"); 
	var train_mode = document.getElementById("train_mode_of_travel");
	var other_mode = document.getElementById("other_mode_of_travel"); 


	if (mode.value == "Plane")
	{
		
		plane_mode.style.display = "block";
		vehicle_mode.style.display = "none";
		train_mode.style.display = "none";
		other_mode.style.display = "none";
	}
	else if (mode.value == "Vehicle")
	{
		//overall options 
		vehicle_mode.style.display = "block";
		plane_mode.style.display = "none";
		train_mode.style.display = "none";
		other_mode.style.display = "none";
	}
	else if (mode.value == "Train")
	{
		train_mode.style.display = "block";
		plane_mode.style.display = "none";
		vehicle_mode.style.display = "none";
		other_mode.style.display = "none";
	}
	else if (mode.value == "Other")
	{
		other_mode.style.display = "block";
		plane_mode.style.display = "none";
		vehicle_mode.style.display = "none";
		train_mode.style.display = "none";
	}
	else
	{
		other_mode.style.display = "none";
		plane_mode.style.display = "none";
		vehicle_mode.style.display = "none";
		train_mode.style.display = "none";
	}
}//function transportation_choice

function vehicle_type_choice()
{
	//Pre: Mode_of_travel = vehicle, all fields hidden besides corresponding dropdown menus 
	//Post: Information fields showing based on corresponding dropdown menus 

	//car options 
	var vehicle_type = document.getElementById("type_of_vehicle"); 
	var public_vehicle = document.getElementById("vehicle_type_public");
	var private_vehicle = document.getElementById("vehicle_type_private");
	var rental_vehicle = document.getElementById("vehicle_type_rental"); 

	if (vehicle_type.value == "Rental")
	{
		public_vehicle.style.display = "none";
		private_vehicle.style.display = "none"; 
		rental_vehicle.style.display = "block";
	}
	else if (vehicle_type.value == "Private")
	{
		public_vehicle.style.display = "none";
		private_vehicle.style.display = "block"; 
		rental_vehicle.style.display = "none";
	}
	else if (vehicle_type.value == "Public")
	{
		public_vehicle.style.display = "block";
		private_vehicle.style.display = "none"; 
		rental_vehicle.style.display = "none";
	}
	else
	{
		public_vehicle.style.display = "none";
		private_vehicle.style.display = "none"; 
		rental_vehicle.style.display = "none";
	}
}//function vehicle_type_choice

function plane_type_choice()
{
	//Pre: mode_of_travel = plane, all fields hidden besides corresponding dropdown menus 
	//Post: Information fields showing based on corresponding dropdown menus 

	var plane_type = document.getElementById("type_of_plane"); 
	var commercial_plane = document.getElementById("plane_type_commercial");
	var private_plane = document.getElementById("plane_type_private"); 

	if (plane_type.value == "Commercial")
	{
		commercial_plane.style.display = "block"; 
		private_plane.style.display = "none"; 
	}
	else if (plane_type.value == "Private")
	{
		commercial_plane.style.display = "none"; 
		private_plane.style.display = "block"; 
	}
	else
	{
		commercial_plane.style.display = "none"; 
		private_plane.style.display = "none"; 
	}
}//function plane_type_choice

function lodging_choice()
{
	//Pre: all corresponding input fields hidden except corresponding dropdown menus
	//Post: Lodging section visible for information entry post type selection 

	var lodging = document.getElementById("lodging_check");
	var lodging_show = document.getElementById("lodging_section");

	if (lodging.value == "Yes")
	{
		lodging_show.style.display = "block";
	}
	else
	{
		lodging_show.style.display = "none"; 
	}

}//function lodging_choice

function lodging_type()
{
	//Pre: lodging_check = yes, all input fields for this section hidden except corresponding dropdown menus
	//Post: Lodging input sections shown based on dropdown choice

	var stay = document.getElementById("type_of_lodging"); 
	var hotel = document.getElementById("lodging_type_hotel"); 
	var private_res =  document.getElementById("lodging_type_private_residence"); 
	var other_res = document.getElementById("lodging_type_other"); 

	if (stay.value == "Hotel")
	{
		hotel.style.display = "block"; 
		private_res.style.display = "none"; 
		other_res.style.display = "none"; 
	}
	else if (stay.value == "Private_residence")
	{
		hotel.style.display = "none"; 
		private_res.style.display = "block"; 
		other_res.style.display = "none"; 
	}
	else if (stay.value == "Other")
	{
		hotel.style.display = "none"; 
		private_res.style.display = "none"; 
		other_res.style.display = "block"; 
	}
	else
	{
		hotel.style.display = "none"; 
		private_res.style.display = "none"; 
		other_res.style.display = "none"; 
	}
}//function lodging_type

function add_traveler()
{
	
	
	var fname = document.getElementById("trip_member_first_name").value; 
	var lname = document.getElementById("trip_member_last_name").value; 
	var number = document.getElementById("trip_member_contact_number").value; 
	//Get the values from the fields 

	var trav_lbl = document.createElement("h3"); 
	var fname_lbl = document.createElement("label"); 
	var lname_lbl = document.createElement("label"); 
	var number_lbl = document.createElement("label"); 
	//Create the labels to hold the information/display it 

	var remove_btn = document.createElement("input"); 
	remove_btn.type = "button"; 
	remove_btn.class = "ui-btn ui-corner-all ui-btn-inline"; 
	remove_btn.onClick = "remove_traveler(traveler_count)"; 
	remove_btn.value = "Remove Traveler"; 
	remove_btn.id = "remove_btn_" + traveler_count; 

	trav_lbl.id = "trav_lbl_" + traveler_count; 
	trav_lbl.innerHTML = "Traveler " + traveler_count; 
	fname_lbl.id = "fname_lbl_" + traveler_count; 
	fname_lbl.value = fname; 
	fname_lbl.innerHTML = "First Name: " + fname; 
	lname_lbl.id = "lname_lbl_" + traveler_count; 
	lname_lbl.value = lname; 
	lname_lbl.innerHTML = "Last Name: " + lname; 
	number_lbl.id = "number_lbl_" + traveler_count; 
	number_lbl.value = number; 
	number_lbl.innerHTML = "Phone Number: " + number; 
	//Give each label an ID, assign the input field values to the field values, and show what the value is along with a label (innerHTML)

	var in_div = document.getElementById("new_traveler"); 
	//Grab the div element to display the labels 

	in_div.appendChild(trav_lbl); 
	in_div.appendChild(fname_lbl);
	in_div.appendChild(lname_lbl); 
	in_div.appendChild(number_lbl); 
	in_div.appendChild(remove_btn); 
	//Add the labels to the div element

	document.getElementById("trip_member_first_name").value = " "; 
	document.getElementById("trip_member_last_name").value = " "; 
	document.getElementById("trip_member_contact_number").value = " "; 
	//Clear the fields for new input 

	traveler_count = traveler_count + 1; 
	//Update the traveler count


}//add traveler()

function remove_traveler(count)
{
	//<a class="ui-btn ui-corner-all ui-btn-inline" onclick = "add_traveler()" >Add Traveler</a>
	var rem_ct = count; 
	var input_divide = document.getElementById("new_traveler"); 
	var first_nm = document.getElementById("fname_lbl_" + rem_ct); 
	var last_nm = document.getElementById("lname_lbl_" + rem_ct); 
	var phone_nbr = document.getElementById("number_lbl_" + rem_ct); 
	var lbl = document.getElementById("trav_lbl_" + rem_ct); 

	input_divide.remove(first_nm);
	input_divide.remove(last_nm); 
	input_divide.remove(phone_nbr);  
	input_divide.remove(lbl); 

}//remove_traveler()

function add_trans()
{
	 
	var input_divide = document.getElementById("new_transportation_div"); 
	var trans_header = document.createElement("h2"); 
	//Grab divide for new labels and create header for new transportation
	
	var trans_choice = document.getElementById("mode_of_travel").value; 
	var dept_day = document.getElementById("day_of_departure").value; 
	var dest_leg = document.getElementById("destination_of_leg").value; 
	var fin_dest = document.getElementById("final_dest_indicator").value; 
	//Grab input field values and value of mode of travel selector 

	var dept_day_lbl = document.createElement("label");
	var dest_leg_lbl = document.createElement("label");
	var fin_dest_lbl = document.createElement("label");
	//Create labels for information 

	trans_header.id = "trans_header_" + trans_count; 
	trans_header.innerHTML = "Transportation for Leg " + trans_count; 
	dept_day_lbl.id = "dept_day_lbl_" + trans_count; 
	dept_day_lbl.value = dept_day; 
	dept_day_lbl.innerHTML = "Departure Day: " + dept_day;
	dest_leg_lbl.id = "dest_leg_lbl_" + trans_count; 
	dest_leg_lbl.value = dest_leg; 
	dest_leg_lbl.innerHTML = "Leg Destination: " + dest_leg; 
	fin_dest_lbl.id = "fin_dest_lbl_" + trans_count;
	fin_dest_lbl.value = fin_dest;  
	fin_dest_lbl.innerHTML = "Final Destination?" + fin_dest; 
	//Give each label an ID, the field's value, and a label with current infomation (innerHTML)

	input_divide.appendChild(trans_header); 
	input_divide.appendChild(dept_day_lbl); 
	input_divide.appendChild(dest_leg_lbl); 
	input_divide.appendChild(fin_dest_lbl); 
	//Append labels to new transportation fields 

	document.getElementById("day_of_departure").value = " "; 
	document.getElementById("destination_of_leg").value = " "; 
	//document.getElementById("final_dest_indicator").value = " "; 
	//Clear the fields for new inputs 


	if(trans_choice == "Vehicle")
	{
		//if they chose vehicle 

		var veh_choice = document.getElementById("type_of_vehicle").value; 
		//Grab the value of the vehicle type selector 

		if(veh_choice == "Rental")
		{
			//if using a rental car 
			var rent_co = document.getElementById("rental_car_company").value; 
			var rent_pu = document.getElementById("rental_car_pickup_date").value; 
			var rent_do = document.getElementById("rental_car_dropoff_date").value; 
			var rent_desc = document.getElementById("rental_car_description").value; 
			//Grab field values 

			var rent_lbl = document.createElement("h3"); 
			var rent_co_lbl = document.createElement("label"); 
			var rent_pu_lbl = document.createElement("label"); 
			var rent_do_lbl = document.createElement("label"); 
			var rent_desc_lbl = document.createElement("label"); 
			//Create labels for field values 


			rent_lbl.id = "rent_lbl_" + trans_count; 
			rent_lbl.innerHTML = "Rental Car"; 
			rent_co_lbl.id = "rent_co_lbl_" + trans_count; 
			rent_co_lbl.value = rent_co; 
			rent_co_lbl.innerHTML = "Rental Company: " + rent_co; 
			rent_pu_lbl.id = "rent_pu_lbl_" + trans_count; 
			rent_pu_lbl.value = rent_pu; 
			rent_pu_lbl.innerHTML = "Rental Pickup Date: " + rent_pu; 
			rent_do_lbl.id = "rent_do_lbl_" + trans_count; 
			rent_do_lbl.value = rent_do; 
			rent_do_lbl.innerHTML = "Rental Dropoff Date: " + rent_do; 
			rent_desc_lbl.id = "rent_desc_lbl_"  + trans_count; 
			rent_desc_lbl.value = rent_desc; 
			rent_desc_lbl.innerHTML = "Rental Description: " + rent_desc; 
			//Assign values, ID's, and label content (innerHTML)

			input_divide.appendChild(rent_lbl); 
			input_divide.appendChild(rent_co_lbl); 
			input_divide.appendChild(rent_pu_lbl); 
			input_divide.appendChild(rent_do_lbl); 
			input_divide.appendChild(rent_desc_lbl); 
			//Append labels to divide

			document.getElementById("rental_car_company").value = " "; 
			document.getElementById("rental_car_pickup_date").value = " ";
			document.getElementById("rental_car_dropoff_date").value = " ";
			document.getElementById("rental_car_description").value = " ";
			//Clear the input fields for next round of information 

		}
		else if(veh_choice == "Public")
		{
			//if using public transportation 

			var pub_desc = document.getElementById("public_vehicle_desc").value; 
			//Grab input field value

			var pub_lbl = document.createElement("h3"); 
			var pub_desc_lbl = document.createElement("label");
			//Create labels for information 

			pub_lbl.id = "pub_lbl_" + trans_count; 
			pub_lbl.innerHTML = "Public Transportation"; 
			pub_desc_lbl.id = "pub_desc_lbl_" + trans_count; 
			pub_desc_lbl.value = pub_desc; 
			pub_desc_lbl.innerHTML = "Pertinent Information: " + pub_desc; 
			//Assign values, ID's, label content (innerHTML)

			input_divide.appendChild(pub_lbl); 
			input_divide.appendChild(pub_desc_lbl); 
			//Append labels to div 

			document.getElementById("public_vehicle_desc").value = " ";  
			//Clear input fields 

		}
		else if(veh_choice == "Private")
		{
			//if using private vehicle 

			var priv_desc = document.getElementById("private_vehicle_desc").value; 
			//Grab value of input field

			var priv_lbl = document.createElement("h3"); 
			var priv_desc_lbl = document.createElement("label");
			//Create labels 

			priv_lbl.id = "priv_lbl_" + trans_count; 
			priv_lbl.innerHTML = "Private Transportation"; 
			priv_desc_lbl.id = "priv_desc_lbl_" + trans_count; 
			priv_desc_lbl.value = priv_desc; 
			priv_desc_lbl.innerHTML = "Pertinent Information: " + priv_desc; 
			//Assign values, ID's, label content (innerHTML)

			input_divide.appendChild(priv_lbl); 
			input_divide.appendChild(priv_desc_lbl); 
			//Append labels to div 

			document.getElementById("private_vehicle_desc").value = " ";
			//Clear input fields 
		}
		else
		{

		}
	}
	else if(trans_choice == "Plane")
	{
		//if plane transportation 

		var pln_choice = document.getElementById("type_of_plane").value; 
		//Grab value of plane type selector 

		if(pln_choice == "Commercial")
		{	
			//if flying commercial flight 

			var flight_num = document.getElementById("commercial_flight_number").value; 
			var flight_car = document.getElementById("commercial_flight_carrier").value; 
			var apt_dept = document.getElementById("commercial_flight_airport_departed").value; 
			var dept_tm = document.getElementById("commercial_flight_departure_time").value; 
			var arr_apt = document.getElementById("commercial_flight_arrival_airport").value; 
			var arr_tm = document.getElementById("commercial_flight_arrival_time").value; 
			//Grab values of input fields 

			var flight_num_lbl = document.createElement("label"); 
			var flight_car_lbl = document.createElement("label"); 
			var apt_dept_lbl = document.createElement("label"); 
			var dept_tm_lbl = document.createElement("label"); 
			var arr_apt_lbl = document.createElement("label"); 
			var arr_tm_lbl = document.createElement("label"); 
			var com_flt_lbl = document.createElement("h3");
			//Create labels 

			flight_num_lbl.id = "flight_num_lbl_" + trans_count; 
			flight_num_lbl.value = flight_num; 
			flight_num_lbl.innerHTML = "Flight Number: " + flight_num; 
			flight_car_lbl.id = "flight_car_lbl_" + trans_count; 
			flight_car_lbl.value = flight_car; 
			flight_car_lbl.innerHTML = "Flight Carrier: " + flight_car; 
			apt_dept_lbl.id = "apt_dept_lbl_" + trans_count; 
			apt_dept_lbl.value = apt_dept; 
			apt_dept_lbl.innerHTML = "Airport Departed: " + apt_dept; 
			dept_tm_lbl.id = "dept_tm_lbl_" + trans_count; 
			dept_tm_lbl.value = dept_tm; 
			dept_tm_lbl.innerHTML = "Departure Time: " + dept_tm; 
			arr_apt_lbl.id = "arr_apt_lbl_" + trans_count; 
			arr_apt_lbl.value = arr_apt; 
			arr_apt_lbl.innerHTML = "Airport Arrived At: " + arr_apt; 
			arr_tm_lbl.id = "arr_tm_lbl_" + trans_count; 
			arr_tm_lbl.value = arr_tm; 
			arr_tm_lbl.innerHTML = "Arrival Time: " + arr_tm; 
			com_flt_lbl.id = "com_flt_lbl_" + trans_count; 
			com_flt_lbl.innerHTML = "Commercial Flight"; 
			//Assign values, ID's and label content (innerHTML)

			input_divide.appendChild(com_flt_lbl); 
			input_divide.appendChild(flight_num_lbl);
			input_divide.appendChild(flight_car_lbl);
			input_divide.appendChild(apt_dept_lbl);
			input_divide.appendChild(dept_tm_lbl);
			input_divide.appendChild(arr_apt_lbl);
			input_divide.appendChild(arr_tm_lbl);
			//Append labels to div 

			document.getElementById("commercial_flight_number").value = " ";
			document.getElementById("commercial_flight_carrier").value = " ";
			document.getElementById("commercial_flight_airport_departed").value = " ";
			document.getElementById("commercial_flight_departure_time").value = " ";
			document.getElementById("commercial_flight_arrival_airport").value = " ";
			document.getElementById("commercial_flight_arrival_time").value = " ";
			//Clear input fields 
			


		}
		else if(pln_choice == "Private")
		{
			//if using private plane 

			var priv_pln_desc = document.getElementById("private_plane_desc").value; 
			//Grab input field values

			var priv_pln_lbl = document.createElement("h3"); 
			var priv_pln_desc_lbl = document.createElement("label"); 
			//Create labels 

			priv_pln_lbl.id = "priv_pln_lbl_" + trans_count; 
			priv_pln_lbl.innerHTML = "Private Plane"; 
			priv_pln_desc_lbl.id = "priv_pln_desc_lbl_" + trans_count; 
			priv_pln_desc_lbl.value = priv_pln_desc; 
			priv_pln_desc_lbl.innerHTML = "Pertinent Information: " + priv_pln_desc; 
			//Assign ID's, values, and label content (innerHTML)

			input_divide.appendChild(priv_pln_lbl); 
			input_divide.appendChild(priv_pln_desc_lbl);
			//Append labels to div 

			document.getElementById("private_plane_desc").value = " "; 
			//Clear input fields

		}
		else
		{

		}
	}
	else if(trans_choice == "Train")
	{
		//if train transportation

		var train_desc = document.getElementById("train_transport_desc").value; 
		//Grab input field value

		var train_desc_lbl = document.createElement("label"); 
		var train_lbl = document.createElement("h3"); 
		//Create labels 

		train_desc_lbl.id = "train_desc_lbl_" + trans_count; 
		train_desc_lbl.value = train_desc; 
		train_desc_lbl.innerHTML = "Pertinent Information: " + train_desc; 
		train_lbl.id = "train_lbl_" + trans_count; 
		train_lbl.innerHTML = "Train Information"; 
		//Assign ID, value, label content (innerHTML)

		input_divide.appendChild(train_lbl);
		input_divide.appendChild(train_desc_lbl);
		//Append labels to div

		document.getElementById("train_transport_desc").value = " "; 
		//clear input fields 

	}
	else if(trans_choice == "Other")
	{
		//other transportation used 

		var other_desc = document.getElementById("other_transport_desc").value; 
		//Grab input value

		var other_desc_lbl = document.createElement("label"); 
		var other_lbl = document.createElement("h3"); 
		//Create Labels 

		other_desc_lbl.id = "other_desc_lbl_" + trans_count; 
		other_desc_lbl.value = other_desc; 
		other_desc_lbl.innerHTML = "Pertinent Information: " + other_desc; 
		other_lbl.id = "other_lbl_" + trans_count; 
		other_lbl.innerHTML = "Other Information"; 
		//Assign id, values, and label content (innerHTML )

		input_divide.appendChild(other_lbl);
		input_divide.appendChild(other_desc_lbl);
		//Append labels to div 

		document.getElementById("other_transport_desc").value = " "; 
		//Clear input fields 
	}
	else
	{

	}

	trans_count = trans_count + 1; 
	//update hte trans_count 
}//add_trans()

function add_lodging()
{	
	var type = document.getElementById("type_of_lodging").value; 
	var input_divide = document.getElementById("new_lodging_div"); 

	if(type == "Hotel")
	{
		var name = document.getElementById("hotel_name").value;
		var address = document.getElementById("hotel_address").value; 
		var phone = document.getElementById("hotel_phone").value;
		var nights = document.getElementById("nights_at_hotel").value; 

		var name_lbl = document.createElement("label"); 
		var addr_lbl = document.createElement("label"); 
		var phone_lbl = document.createElement("label"); 
		var nights_lbl = document.createElement("label"); 
		var lodg_lbl =  document.createElement("h3"); 

		lodg_lbl.id = "lodg_lbl_" + lodg_count; 
		lodg_lbl.innerHTML = "Hotel Lodging"; 
		name_lbl.id = "name_lbl_" + lodg_count; 
		name_lbl.value = name; 
		name_lbl.innerHTML = "Hotel Name: " + name; 
		addr_lbl.id = "addr_lbl_" + lodg_count; 
		addr_lbl.value = address; 
		addr_lbl.innerHTML = "Hotel Address: " + address; 
		phone_lbl.id = "phone_lbl_" + lodg_count; 
		phone_lbl.value = phone; 
		phone_lbl.innerHTML = "Hotel Phone: " + phone; 
		nights_lbl.id = "nights_lbl_" + lodg_count; 
		nights_lbl.value = nights; 
		nights_lbl.innerHTML = "Nights at Location: " + nights; 

		input_divide.appendChild(lodg_lbl); 
		input_divide.appendChild(name_lbl); 
		input_divide.appendChild(addr_lbl); 
		input_divide.appendChild(phone_lbl); 
		input_divide.appendChild(nights_lbl); 

		document.getElementById("hotel_name").value = " "; 
		document.getElementById("hotel_address").value = " "; 
		document.getElementById("hotel_phone").value = " "; 
		document.getElementById("nights_at_hotel").value = " ";  


	}
	else if(type == "Private_residence")
	{
		//fname, lname, addr, phone, nights there

		var first = document.getElementById("priv_res_first_name").value; 
		var last = document.getElementById("priv_res_last_name").value; 
		var addr = document.getElementById("priv_res_address").value; 
		var ph = document.getElementById("priv_res_phone_number").value; 
		var nights_there = document.getElementById("priv_res_nights_there").value; 

		var first_lbl = document.createElement("label"); 
		var last_lbl = document.createElement("label"); 
		var addr_lbl = document.createElement("label"); 
		var ph_lbl = document.createElement("label"); 
		var nights_there_lbl = document.createElement("label"); 
		var priv_res_lbl = document.createElement("h3"); 

		priv_res_lbl.id = "priv_res_lbl_" + lodg_count; 
		priv_res_lbl.innerHTML = "Private Residence"; 
		first_lbl.id = "first_lbl_" + lodg_count; 
		first_lbl.value = first; 
		first_lbl.innerHTML = "Owner First Name: " + first; 
		last_lbl.id = "last_lbl_" + lodg_count; 
		last_lbl.value = last; 
		last_lbl.innerHTML = "Owner Last Name: " + last; 
		addr_lbl.id = "addr_lbl_" + lodg_count; 
		addr_lbl.value = addr; 
		addr_lbl.innerHTML = "Residence Address: " + addr; 
		ph_lbl.id = "ph_lbl_" + lodg_count; 
		ph_lbl.value = ph; 
		ph_lbl.innerHTML = "Residence Phone Number: " + ph; 
		nights_there_lbl.id = "nights_there_lbl_" + lodg_count; 
		nights_there_lbl.value = nights_there; 
		nights_there_lbl.innerHTML = "Nights At Location: " + nights_there; 

		input_divide.appendChild(priv_res_lbl); 
		input_divide.appendChild(first_lbl);
		input_divide.appendChild(last_lbl);
		input_divide.appendChild(addr_lbl);
		input_divide.appendChild(ph_lbl);
		input_divide.appendChild(nights_there_lbl);

		document.getElementById("priv_res_first_name").value = " "; 
		document.getElementById("priv_res_last_name").value = " ";
		document.getElementById("priv_res_address").value = " ";
		document.getElementById("priv_res_phone_number").value = " ";
		document.getElementById("priv_res_nights_there").value = " ";

	}
	else if(type == "Other")
	{
		//nights, desc, contact first, contact last 

		var nght_thr = document.getElementById("other_nights_there").value; 
		var o_desc = document.getElementById("other_lodging_desc").value; 
		var cont_fst = document.getElementById("other_contact_first_name").value; 
		var cont_lst = document.getElementById("other_contact_last_name").value; 

		var nght_thr_lbl = document.createElement("label"); 
		var o_desc_lbl = document.createElement("label"); 
		var cont_fst_lbl = document.createElement("label"); 
		var cont_lst_lbl = document.createElement("label"); 
		var other_lodg_lbl = document.createElement("h3"); 

		other_lodg_lbl.id = "other_lodg_lbl_" + lodg_count; 
		other_lodg_lbl.innerHTML = "Other Lodging"; 
		nght_thr_lbl.id = "nght_thr_lbl_" + lodg_count; 
		nght_thr_lbl.value = nght_thr; 
		nght_thr_lbl.innerHTML = "Nights At Location: " + nght_thr; 
		o_desc_lbl.id = "o_desc_lbl_" + lodg_count; 
		o_desc_lbl.value = o_desc; 
		o_desc_lbl.innerHTML = "Lodging Description: " + o_desc; 
		cont_fst_lbl.id = "cont_fst_lbl_" + lodg_count; 
		cont_fst_lbl.value = cont_fst; 
		cont_fst_lbl.innerHTML = "Location Owner First Name: " + cont_fst; 
		cont_lst_lbl.id = "cont_lst_lbl_" + lodg_count; 
		cont_lst_lbl.value = cont_lst; 
		cont_lst_lbl.innerHTML = "Location Owner Last Name: " + cont_lst; 

		input_divide.appendChild(other_lodg_lbl);  
		input_divide.appendChild(o_desc_lbl);
		input_divide.appendChild(cont_fst_lbl);
		input_divide.appendChild(cont_lst_lbl);
		input_divide.appendChild(nght_thr_lbl);

		document.getElementById("other_nights_there").value = " "; 
		document.getElementById("other_lodging_desc").value = " ";
		document.getElementById("other_contact_last_name").value = " ";
		document.getElementById("other_contact_first_name").value = " ";

	}
	else
	{

	}
	
}//function add_lodging()

