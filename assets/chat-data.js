const chatData = [
  {
    id: 1,
    agent: ["Hi, do you need any assistance with your personal injury case?"],
    user: [
      "Yes. I was in an accident about 2 months ago. My car was totaled. According to the police report, the other party was at fault. I have no physical injuries. Just headaches for a month.",
    ],
    infoTitle: "Greeting",
    infoMsg: "A welcome message to initiate the chat. It’s Customizable.",
  },
  {
    id: 2,
    agent: [
      "I am sorry to hear this happened. May I have your first and last name, please?",
    ],
    user: ["Kevin Johnson."],
    infoTitle: "Assistance Needed",
    infoMsg:
      "Visitor shares basic details of what the assistance is required for.",
  },
  {
    id: 3,
    agent: [
      "Thanks, Kevin.",
      "May I know when and what city/state did this take place in?",
    ],
    user: [
      "June 24. Sunnyvale, CA. I was driving straight ahead. No stop sign, no traffic light. Car in opposite direction made a left turn, and I hit the car. 2 air bags were deployed. My arms were numb for a few hours. Unable to release seat belt. Went to ER.",
    ],
    infoTitle: "Name of Visitor",
    infoMsg: "Agent gets visitor’s first and last name.",
  },
  {
    id: 4,
    agent: [
      "Thank you for the details, Kevin. I recommend you speak with one of our Attorneys who can review your case details and provide you with options moving forward. In order to assist you better may I have your phone number and email address, please?",
    ],
    user: ["Sure. 408-***-****, k********@*****l.com"],
    infoTitle: "Location/Region",
    infoMsg:
      "Confirmation of location in order to determine if it falls within the actual service area.",
  },
  {
    id: 5,
    agent: [
      "Thanks. May I know what is the best time during the day when our staff can call you to discuss this further?",
    ],
    user: ["Now is a good time."],
    infoTitle: "Lead Information",
    infoMsg: "The most important part, contact information is taken.",
  },
  {
    id: 6,
    agent: [
      "Sure thing! I can connect you with our office right away for further assistance. May I connect you using the number you just provided?",
    ],
    user: ["Yes, that would be great!"],
    infoTitle: "Scheduling/Appointment Preference",
    infoMsg:
      "The agent confirms the best time slot for either a visit or a call from the office.",
  },
  {
    id: 7,
    agent: [
      "Alright. Just a moment while I am attempting to connect you with our office.",
    ],
    user: ["I am connected. Thanks for all your help today."],
    infoTitle: "Attempt Live Call Connect",
    infoMsg:
      "Ensuring visitor's convenience, a call is placed to connect them with the office then and there.",
  },
  {
    id: 8,
    agent: ["You're welcome. Thank you for contacting us."],
    user: [],
    infoTitle: "Ending/Closing",
    infoMsg: "The statement taking the chat session towards end.",
  },
];
