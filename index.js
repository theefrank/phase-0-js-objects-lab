//Write your code here
//Write your code here
// Task 2: Create the attendee object
let attendee = {
    attendeeId: "T001",
    name: "Alice Smith",
    event: "JavaScript Conference",
    ticketType: "VIP",
    ticketPrice: 150.00
};


// Task 3: Log attendee name
function logAttendeeName(attendee) {
    console.log(attendee.name);
}


// Task 4: Log ticket price
function logTicketPrice(attendee) {
    console.log(attendee.ticketPrice);
}


// Task 5: Update ticket type
function updateTicketType(attendee, newType) {
    attendee.ticketType = newType;
}


// Task 6: Update ticket price
function updateTicketPrice(attendee, newPrice) {
    attendee.ticketPrice = newPrice;
}


// Task 7: Remove event property
function removeEventProperty(attendee) {
    delete attendee.event;
}


// Task 8: Add checkedIn property
function addCheckedInProperty(attendee) {
    attendee.checkedIn = true;
}


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};



logAttendeeName(attendee); // Alice Smith
logTicketPrice(attendee); // 150

updateTicketType(attendee, "Regular");
updateTicketPrice(attendee, 100);

removeEventProperty(attendee);
addCheckedInProperty(attendee);

console.log(attendee);