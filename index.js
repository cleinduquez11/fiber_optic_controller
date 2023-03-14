
//This Script is for Realtime Controlling the Actuators such as the Fan, LightSource, Water Pump and Mist'



//Realtime controller for fan(temperature)
setInterval(function() {
    $.ajax({
        url: "get_data.php",
        method: "GET",
        success: function(data) {

           var status = data[0]['fan_status'];
           var temp=data[0]['temperature'];
            if (status == "ON" && temp > 26) {
                $('.checkbox').attr('Checked', 'Checked');
                console.log('True');
                const Http = new XMLHttpRequest();

                const url = 'http://192.168.1.245/cm?cmnd=Power%20On';

                Http.open("GET", url);
                Http.send();vvvvvvvvvvvvvvvvvvvvv

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


//Realtime controller for light(sunlight)
setInterval(function() {
    $.ajax({
        url: "get_data.php",
        method: "GET",
        success: function(data1) {

           setInterval(function() {
			$.ajax({
				url: "get_data.php",
				method: "GET",
				success: function(data) {

					var status = data[0]['fan_status'];
					var temp=data[0]['temperature'];
					if (status == "ON" && temp > 26) {
						$('.checkbox').attr('Checked', 'Checked');
						console.log('True');
						const Http = new XMLHttpRequest();

						const url = 'http://192.168.1.245/cm?cmnd=Power%20On';

						Http.open("GET", url);
						Http.send();vvvvvvvvvvvvvvvvvvvvv

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

					var status1 = data1[0]['light_status'];
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


    //Realtime controller for water pump    
		setInterval(function() {
			$.ajax({
				url: "get_data.php",
				method: "GET",
				success: function(data) {

					var status = data[0]['pump_status'];
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

        //Realtime Controller for mist(humidity)
		setInterval(function() {
			$.ajax({
				url: "get_data.php",
				method: "GET",
				success: function(data) {

					var status = data[0]['mist_status'];
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


        //Toggle Switch for FAN
		$('#switch').on('change', function(event, state) {

			var checkStatus = this.checked ? 'ON' : 'OFF';

			$.ajax({
				url: "check.php",
				method: "POST",
				data: {
					"toogle_fan": checkStatus
				},
				success: function(data) {
					var status = data[0]['fan_status'];
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

        //Toggle Switch for LIGHT
		$('#switch1').on('change', function(event, state) {

			var checkStatus1 = this.checked ? 'ON' : 'OFF';

			$.ajax({
				url: "check.php",
				method: "POST",
				data: {
					"toogle_light": checkStatus1
				},
				success: function(data) {
					var status = data[0]['light_status'];
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

        //Toggle Switch for WATERPUMP
		$('#switch2').on('change', function(event, state) {

			var checkStatus2 = this.checked ? 'ON' : 'OFF';

			$.ajax({
				url: "check.php",
				method: "POST",
				data: {
					"toogle_pump": checkStatus2
				},
				success: function(data) {
					var status = data[0]['pump_status'];
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

        //Toggle Switch for MIST
		$('#switch3').on('change', function(event, state) {

			var checkStatus3 = this.checked ? 'ON' : 'OFF';

			$.ajax({
				url: "check.php",
				method: "POST",
				data: {
					"toogle_mist": checkStatus3
				},
				success: function(data) {
					var status = data[0]['mist_status'];
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



		}); status1 = data1[0]['light_status'];
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

            var status = data[0]['pump_status'];
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

            var status = data[0]['mist_status'];
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
            var status = data[0]['fan_status'];
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
            var status = data[0]['light_status'];
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
            var status = data[0]['pump_status'];
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
            var status = data[0]['mist_status'];
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