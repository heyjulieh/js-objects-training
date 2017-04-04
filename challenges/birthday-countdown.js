/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

// function takes in dates (of birthday) and returns number of days (integer) between today (Date.now) until that date (date.parse);
// function = daysUntilDate (input date string)
// parameters/variables: dateString, bDay, currentDay, one_day (milliseconds in day), bDayMs, TodayMs (dates in milliseconds), result
// store string date as useable date
// Result = function calculating days between today and bday

function daysUntilDate(dateString){
  var bDay = new Date(dateString);
  console.log(bDay);
  var currentDay = new Date();
  console.log(currentDay);
    //Get 1 day in milliseconds
  var one_day=1000*60*60*24;
  console.log(one_day);

  // Convert both dates to milliseconds
  var bDayMs = bDay.getTime();
  console.log(bDayMs);
  var todayMs = currentDay.getTime();
  console.log(todayMs);

  // Calculate the difference in milliseconds
  var result = bDayMs - todayMs;
    console.log(result);
      // Convert back to days and return
    return Math.round(result/one_day) + " days until your birthday!";
  }

  // function takes in array of objects containing name and dob
  // function = birthdayReminder (input bDayArray)
  // parameters/variables: bDayArray[], name, dob
  // use previous function for this
  // Result = alert of arrays containing reminder of days until birthday


    function daysUntilDate(dob){
      var bDay = new Date(dob);
      console.log(bDay);
      var currentDay = new Date();
      console.log(currentDay);
        //Get 1 day in milliseconds
      var one_day=1000*60*60*24;
      console.log(one_day);
      // Convert both dates to milliseconds
      var bDayMs = bDay.getTime();
      console.log(bDayMs);
      var todayMs = currentDay.getTime();
      console.log(todayMs);
      // Calculate the difference in milliseconds
      var result = bDayMs - todayMs;
        console.log(result);
          // Convert back to days and return
        return Math.round(result/one_day);
      }
        function birthdayReminder(birthdays){
          var output = [];
          birthdays.forEach(function(el) {
          var birthdayString = daysUntilDate(el.dob);
          output.push(el.name + "'s birthday is in " + daysUntilDate(dob) + " days!");
      });
  return output;
}
