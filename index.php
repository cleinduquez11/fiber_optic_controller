<!DOCTYPE html>
<html>

<head>
	<title>Fiber Optic</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
	</script>
	<link rel="stylesheet" href="styles.css">
</head>

<body>
	<center>
		<div>
			<h1>Optic Fiber Control Panels</h1>
		</div>
		<div class="container">



			<span>
				<b>Fan Switch</b>
				<br><br>
				<input type="checkbox" id="switch" class="checkbox" />
				<label for="switch" class="toggle">
					<p>OFF ON</p>
				</label>
				<br>
			</span>



			<br>
			<br>
			<span>
				<b>Light Switch</b>
				<br><br>
				<input type="checkbox" id="switch1" class="checkbox1" />
				<label for="switch1" class="toggle">
					<p>OFF ON</p>
				</label>
				<br>
			</span>

			<br>
			<br>
			<span>
				<b>Pump Switch</b>
				<br><br>
				<input type="checkbox" id="switch2" class="checkbox2" />
				<label for="switch2" class="toggle">
					<p>OFF ON</p>
				</label>
				<br>
			</span>
			<span>
				<br>
				<br>
				<b>Mist Switch</b>
				<br><br>
				<input type="checkbox" id="switch3" class="checkbox3" />
				<label for="switch3" class="toggle">
					<p>OFF ON</p>
				</label>
				<br>
			</span>


		</div>

	</center>
	<script>
		setInterval(function() {
			$.ajax({
				url: "get_data.php",
				method: "GET",
				success: function(data) {

					status = data[0]['fan_status'];
					if (status == "ON") {
						$('.checkbox').attr('Checked', 'Checked');
						console.log('True');
						const Http = new XMLHttpRequest();

						const url = 'http://192.168.1.245/cm?cmnd=Power%20On';

						Http.open("GET", url);
						Http.send();

					} else {
						$('.checkbox').removeAttr('Checked');
						console.log('False');
						const Http = new XMLHttpRequest();

						const url = 'http://192.168.1.245/cm?cmnd=Power%20Off';

						Http.open("GET", url);
						Http.send();

					}
					console.log("Fan-Status: " + data[0]['fan_status'])


				}
			});

		}, 2000);

		setInterval(function() {
			$.ajax({
				url: "get_data.php",
				method: "GET",
				success: function(data1) {

					status1 = data1[0]['light_status'];
					if (status1 == "ON") {
						$('.checkbox1').attr('Checked', 'Checked');

						const Http = new XMLHttpRequest();
						const url = 'http://192.168.1.130/cm?cmnd=Power%20On';

						Http.open("GET", url);
						Http.send();

					} else {
						$('.checkbox1').removeAttr('Checked');

						const Http = new XMLHttpRequest();
						const url = 'http://192.168.1.130/cm?cmnd=Power%20Off';

						Http.open("GET", url);
						Http.send();

					}
					console.log("Light-Status: " + data1[0]['light_status'])


				}
			});
		}, 2000);
		setInterval(function() {
			$.ajax({
				url: "get_data.php",
				method: "GET",
				success: function(data) {

					status = data[0]['pump_status'];
					if (status == "ON") {
						$('.checkbox2').attr('Checked', 'Checked');

						const Http = new XMLHttpRequest();

						const url = 'http://192.168.1.188/cm?cmnd=Power%20On';

						Http.open("GET", url);
						Http.send();

					} else {
						$('.checkbox2').removeAttr('Checked');

						const Http = new XMLHttpRequest();
						const url = 'http://192.168.1.188/cm?cmnd=Power%20Off';

						Http.open("GET", url);
						Http.send();

					}
					console.log("Pump-StatusL: " + data[0]['pump_status'])


				}
			});
		}, 2000);
		setInterval(function() {
			$.ajax({
				url: "get_data.php",
				method: "GET",
				success: function(data) {

					status = data[0]['mist_status'];
					if (status == "ON") {
						$('.checkbox3').attr('Checked', 'Checked');

						const Http = new XMLHttpRequest();
						const url = 'http://192.168.1.108/cm?cmnd=Power%20On';

						Http.open("GET", url);
						Http.send();

					} else {
						$('.checkbox3').removeAttr('Checked');

						const Http = new XMLHttpRequest();
						const url = 'http://192.168.1.108/cm?cmnd=Power%20Off';

						Http.open("GET", url);
						Http.send();

					}
					console.log("Mist-Status: " + data[0]['mist_status'])


				}
			});


		}, 2000);

		$('#switch').on('change', function(event, state) {

			var checkStatus = this.checked ? 'ON' : 'OFF';

			$.ajax({
				url: "check.php",
				method: "POST",
				data: {
					"toogle_fan": checkStatus
				},
				success: function(data) {
					status = data[0]['fan_status'];
					if (status == "ON") {
						$('.checkbox').attr('Checked', 'Checked');

						const Http = new XMLHttpRequest();

						Http.open("GET", url);
						Http.send();
						Http.onreadystatechange = (e) => {

						}

					} else {
						$('.checkbox').removeAttr('Checked');

						const Http = new XMLHttpRequest();

						Http.open("GET", url);
						Http.send();
						Http.onreadystatechange = (e) => {

						}


					}

				}
			});



		});

		$('#switch1').on('change', function(event, state) {

			var checkStatus1 = this.checked ? 'ON' : 'OFF';

			$.ajax({
				url: "check.php",
				method: "POST",
				data: {
					"toogle_light": checkStatus1
				},
				success: function(data) {
					status = data[0]['light_status'];
					if (status == "ON") {
						$('.checkbox1').attr('Checked', 'Checked');

						const Http = new XMLHttpRequest();

						Http.open("GET", url);
						Http.send();
						Http.onreadystatechange = (e) => {

						}

					} else {
						$('.checkbox1').removeAttr('Checked');

						const Http = new XMLHttpRequest();

						Http.open("GET", url);
						Http.send();
						Http.onreadystatechange = (e) => {

						}


					}

				}
			});



		});

		$('#switch2').on('change', function(event, state) {

			var checkStatus2 = this.checked ? 'ON' : 'OFF';

			$.ajax({
				url: "check.php",
				method: "POST",
				data: {
					"toogle_pump": checkStatus2
				},
				success: function(data) {
					status = data[0]['pump_status'];
					if (status == "ON") {
						$('.checkbox2').attr('Checked', 'Checked');

						const Http = new XMLHttpRequest();

						Http.open("GET", url);
						Http.send();
						Http.onreadystatechange = (e) => {

						}

					} else {
						$('.checkbox2').removeAttr('Checked');

						const Http = new XMLHttpRequest();

						Http.open("GET", url);
						Http.send();
						Http.onreadystatechange = (e) => {

						}


					}


				}
			});



		});

		$('#switch3').on('change', function(event, state) {

			var checkStatus3 = this.checked ? 'ON' : 'OFF';

			$.ajax({
				url: "check.php",
				method: "POST",
				data: {
					"toogle_mist": checkStatus3
				},
				success: function(data) {
					status = data[0]['mist_status'];
					if (status == "ON") {
						$('.checkbox3').attr('Checked', 'Checked');

						const Http = new XMLHttpRequest();

						Http.open("GET", url);
						Http.send();
						Http.onreadystatechange = (e) => {

						}

					} else {
						$('.checkbox3').removeAttr('Checked');

						const Http = new XMLHttpRequest();

						Http.open("GET", url);
						Http.send();
						Http.onreadystatechange = (e) => {

						}


					}

				}
			});



		});
	</script>

</body>

</html>