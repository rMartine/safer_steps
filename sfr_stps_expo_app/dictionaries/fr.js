const messages = {
  /* Language */
  welcome: "Bienvenue",
  chooseLanguage: "Choisissez la langue",

  back: "BACKfr",
  next: "NEXTfr",

  /* Introduction disclaimer */
  disclaimer: `A large portion of falls occur on stairs?\n\nDid you also know that we have very little information on stair-related falls and what may have caused them?\n\nFor these reasons, we have built the “Safer Steps” app for users to identify stairs and stair features in their environment and report on any falls that may have occurred.\n\nIn this pilot study, we are looking for people who would be willing to try our “Safer Steps” app and participate in a focus group session about the app goals and features in order to improve the app for future users. App use will take a maximum of 15 minutes and focus groups will range in time from 40-60 minutes. For a total of approximately one hour and fifteen minutes of your time.\n\nIf you are 18 years or older and have no medical condition that would be a barrier to the use of a cellphone based app (i.e., severe visual impairment) then we would like to hear from you. At this time, the app is only available for Android phones. With WiFi access, you will not need to use any of your mobile data. If you do not have WiFi access, we estimate that only 1MB of data usage would be needed to participate. You can contact the lab via phone to ask about the Safer Steps study 613-562-5800 ext 3458 (please leave a message and we will call you back) or you can email us at dtlab@uottawa.ca.'`,
  agree: "Agree",
  disagree: "Disagree",

  /* Main / home */
  saferSteps: "Safer Steps",
  staircase: "ADD STAIRCASE",
  stairNameOutdoors: "Outdoors-Main",
  edit: "Edit",
  upload: "Upload",
  delete: "Delete",

  /* Modal confirmation */
  uploadConfirmation:
    "If you press 'Upload' your answers for this staircase will be uploaded to the cloud consuming data. Do you agree?",
  deleteConfirmation:
    "If you press 'OK' your answers for this staircase will be deleted locally and from the server. Do you agree?",
  delete: "Delete",
  cancel: "Cancel",

  /* Questions */
  question: "Questionfr",

  q0: "Please set a name to identify this staircase.",
  q1: "I am filling this in for myself in french",
  q2:
    "I am filling this out for someone else (the person who lives at this residence).",
  q3:
    "Notice: Please confirm that the individual completing the survey is over 18 or completing the survey on behalf of a person over 18.",
  q4:
    "Is there someone over the age of 18 available to use the app at this time? If not, please try again at another time with someone over the age of 18.",
  q5:
    "We’d like to know about all the staircases in your home. By staircase, we mean 2 or more steps. You will be asked to take photos of each staircase from different angles and answer some questions about the stairs. If your staircase has two or more flights (steps with a landing that breaks up the staircase), each flight will be treated as a separate staircase.",
  q6: "Where are these stairs located? Please choose one of the options below:",
  q7: "This is a flight of stairs.",
  q8:
    "How many flights are on this staircase? If more than 1, please answer the questions for the top flight.  We’ll get to the remaining flight(s) in a minute",
  q9: "How often do you use this staircase?",
  q10: "How many steps do you have to go up or down in a flight of stairs.",
  q11: "Do you have lights that illuminate this staircase?",
  q12: "Do you have a light switch for those lights at the top of your stairs?",
  q13:
    "Do you have a light switch for those lights at the bottom of your stairs?",
  q14:
    "In the last 12 months, has anyone experienced a slip, trip or fall on any of the steps in this staircase?",
  q15: "Did the fall result in an injury?",
  q16:
    "Did you seek medical treatment (visit a doctor, a clinic, a hospital) after the fall?",
  q17: "How confident are you that you can use these stairs without falling?",
  q18:
    "What is the postal code for the address where a fall occurred on the stairs:",
  q19:
    "The following questions will ask you to take pictures of the TOP and from the BOTTOM and HANDRAIL, of the staircase. To begin, please fold the paper in half so that each half gets a QR (black square) code in it. Place the folded paper sheet on the second stair from the top so that one QR code is visible on top of the stair and the other is visible in front of the stair (the height).",
  q20:
    "Place yourself at the top of the flight/staircase and open the camera from the safer stairs app, then point the camera of your smartphone directly towards the QR at about a 45 degree angle and capture the photo. The entire QR code (black square) must be visible in the picture.",
  q21:
    "FOR TOP: Place yourself at the top of the flight/staircase and open the camera from the safer stairs app, then point the camera of your smartphone directly towards the QR at about a 45 degree angle and capture the photo. The entire QR code (black square) must be visible in the picture.",
  q22:
    "FOR BOTTOM: Place yourself at the bottom of the staircase/flight, and point the camera so that the QR code is in front of the step to take the photo. Again position yourself at the angle needed to get the entire QR code (black square) into the picture.",
  q23:
    "FOR BOTTOM: Place yourself at the bottom of the staircase/flight, and point the camera so that the QR code is in front of the step to take the photo. Again position yourself at the angle needed to get the entire QR code (black square) into the picture.",
  q24: "Railing diagram. Continuous vs Discontinuous.",
  q25: "Do you have a handrail on this staircase?",
  q26:
    "FOR HANDRAIL: Please place the folded paper sheet under the handrail on top of one of the steps of the staircase (at the top or bottom) so that it sits up straight. Please take a picture that includes both the QR code (black square) and the railing.  If possible, show the full railing in the picture.",
  q27:
    "FOR HANDRAIL: Please place the folded paper sheet under the handrail on top of one of the steps of the staircase (at the top or bottom) so that it sits up straight. Please take a picture that includes both the QR code (black square) and the railing.  If possible, show the full railing in the picture.",
  q28:
    "FOR HANDRAIL: Please indicate where the bottom of the handrail ends. Please take a picture to show the bottom step and the end of the handrail.",
  q29:
    "FOR HANDRAIL: Please indicate where the bottom of the handrail ends. Please take a picture to show the bottom step and the end of the handrail.",
  q30:
    "Which of the handrail shapes shown here is closest to your railing? Please choose from the shapes down below?",
  q31:
    "How easy is it for you to grasp the handrail? On scale from VERY EASY to VERY DIFFICULT",
  q32:
    "Is your railing continuous for an entire flight or does it have breaks?",
  q33: "What is your gender?",
  q34: "How far did you go to school?",
  q35: "Which of the following age groups do you fall into?",
  q36: "Do you use stairs to be more physically active?",
  q37: "In your community are there stairs that limit your activity?",
  q38: "How?",
  q39:
    "Would you be willing to participate in a focus group about this app and your experiences?",

  /* Placeholders */
  q0placeholder: "Basement stairs",
  q10placeholder: "Type-in a number",
  q18placeholder: "Type-in your postal code",
  q38placeholder: "Explain how",

  /* Answers */
  yes: "Yes",
  no: "No",

  q5a1: "I understand",
  q6a1: "Outdoors - Stairs at the main entrance",
  q6a2:
    "Outdoors - Stairs at the back or side entrance (e.g. stairs to a back deck or patio)",
  q6a3: "Outdoors - Fire escape stairs",
  q6a4: "Indoors - Stairs from ground or entry-level to 2nd or 3rd story",
  q6a5: "Indoors - Stairs to a garage or carport",
  q6a6: "Indoors - Stairs to the basement",
  q6a7: "Indoors - Stairs to a sunken room on the same floor",
  q6a8: "Indoors - Stairs to a loft",
  q6a9: "Indoors - Stairs to an attic",

  q9a1: "Never",
  q9a2: "Rarely",
  q9a3: "Sometimes",
  q9a4: "Always",

  q17a1: "Not all confident",
  q17a2: "Fairly confident",
  q17a3: "Totally confident",

  q31a1: "Very Easy",
  q31a2: "Easy",
  q31a3: "Neither Difficult or Easy",
  q31a4: "Difficult",
  q31a5: "Very Difficult",

  q32a1: "Continuous",
  q32a2: "With breaks",

  q33a1: "Female",
  q33a2: "Male",
  q33a3:
    "You don’t have an option that applies to me. I identify as (please specify)",

  q34a1: "No formal education",
  q34a2: "Some elementary",
  q34a3: "Some secondary",
  q34a4: "Completed secondary",
  q34a5: "Some post-secondary",
  q34a6: "University degree or higher",
  q34a7: "Other (please specify",

  q36a2: "Sometimes",
  q36a3: "Frequently",
  q36a4: "Never",
};

export default messages;
