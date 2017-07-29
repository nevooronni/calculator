//My javascript

//This is the backend code

var add = function(number1, number2) {
        return number1 + number2;
      };

var subtract = function(number1, number2) {
	return number1 - number2;};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2)	{
	return number1/number2;
};


//This is the font-end/user interface code

 $(document).ready(function() {
 		$("form#add").submit(function(event) {
 			event.preventDefault();
 			var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());

      var result = add(number1, number2);

      $("#output").text(result);
 		});

 		//subtract front end fucntion  
 		$("form#subtract").submit(function(event) {
 			event.preventDefault();
 			var number1 = parseInt($("#sub1").val());
      var number2 = parseInt($("#sub2").val());

      var result = subtract(number1, number2);

      $("#output2").text(result);
 		});

    //multiply front end function
 		$("form#multiply").submit(function(event) {
 			event.preventDefault();
 			var number1 = parseInt($("#multi1").val());
      var number2 = parseInt($("#multi2").val());

      var result = multiply(number1, number2);

      $("#output3").text(result);
 		});

 		//division front end function	
 		$("form#divide").submit(function(event) {
 			event.preventDefault();
 			var number1 = parseInt($("#div1").val());
      var number2 = parseInt($("#div2").val());

      var result = divide(number1, number2);

      $("#output4").text(result);
 		});
 });   