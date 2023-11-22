export type CareResponse = {
  currentUserMood: "positive" | "negative" | "neutral";
  // set current user sentiment based on user input
  // create a self care program for each day of the week, based on the current user sentiment
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  intro: string;
  // Intro is a therapist like response to the user's current mood and ends with a motivational quote and a positive affirmation about starting the day. If the user is in a bad mood, tell a funny joke instead. And with "Here's your self care program for today:"
  morning: {
    period: "Morning";
    step: CareStep;
  };
  afternoonEvening: {
    period: "Afternoon or Evening";
    step: CareStep;
  };
  night: {
    period: "Before Bed";
    step: CareStep;
  };
  outro: string;
  // Outro: "I hope you enjoy the self care program I made for you for today. I'll see you tomorrow for another one. Have a great day!"
};

type CareStep =
  | BreathWorkStep
  | GratitudeStep
  | MeditationStep
  | JournalingStep
  | YogaStep
  | ReadingStep
  | AffirmationsStep
  | ExerciseStep
  | BeUnpluggedStep
  | TakeAWalkStep
  | HobbyStep
  | OrganizeStep
  | PositivityStep
  | MindNourishmentStep
  | BodyNourishmentStep
  | GoalStep
  | BePresentStep
  | SelfLoveStep;

type BreathWorkStep = {
  careType: "Breathwork";
  text: string;
  /* example text:
  Do 10 minutes of guided breathwork
  Do 10 minutes of box breathing
  */
};

type GratitudeStep = {
  careType: "Gratitude";
  text: string;
  /* example text: 
  Write down 3 things you are grateful for 
  */
};

type MeditationStep = {
  careType: "Meditation";
  text: string;
  /* text examples: 
  Do 10 minutes of mindfulness meditation 
  Do 10 minutes of guided meditation
  */
};

type JournalingStep = {
  careType: "Journaling";
  text: string;
  /* text examples: 
  Journal about positive experiences from the day
  Journal about your dreams and aspirations
  */
};

type YogaStep = {
  careType: "Yoga";
  text: string;
  /* text examples:
  Do 10 minutes of yoga
  Do 10 minutes of stretching
  */
};

type ReadingStep = {
  careType: "Reading";
  text: string;
  /* text examples:
  Read a book for 10 minutes
  Read an article about one of your current interests
  */
};

type AffirmationsStep = {
  careType: "Affirmations";
  text: string;
  /* text examples:
  Repeat the following positive affirmations to yourself: 
  I am strong and resilient.
  I am capable of achieving my goals.
  I am worthy of love and success.
  */
};

type ExerciseStep = {
  careType: "Exercise";
  /*
  example:
  Do 20 pushups
  Do 30 jumping jacks
  */
  text: string;
};

type BeUnpluggedStep = {
  careType: "Be Unplugged";
  /* 
  Unplug from screens an hour before bedtime
  Take a walk in nature without your phone
  Spend some time in nature or a quiet outdoor space
  Unplug from electronics at least 30 minutes before bed
  */
  text: string;
};

type TakeAWalkStep = {
  careType: "Take A Walk";
  text: string;
  /*
  Take a short walk during your lunch break
  */
};

type HobbyStep = {
  careType: "Hobby";
  text: string;
  /*
  Engage in a hobby you enjoy for 30 minutes
  */
};

type OrganizeStep = {
  careType: "Organize";
  text: string;
  /* text example:
  Take a moment to organize your workspace.
  */
};

type PositivityStep = {
  careType: "Positivity";
  text: string;
  /* text example:
  Set a positive affirmation for the day.
  Reflect on the positive choices you made today.
  */
};

type MindNourishmentStep = {
  careType: "Mind Nourishment";
  text: string;
  /* text example:
  Listen to an inspirational podcast or audiobook.
  Read a calming book or listen to soothing music.
  */
};

type BodyNourishmentStep = {
  careType: "Body Nourishment";
  text: string;
  /* text example:
  Drink a kombucha
  Drink a mushroom coffee.
  Wind down with a cup of herbal tea.
  Make a nutritious and colorful breakfast.
  */
};

type GoalStep = {
  careType: "Goal";
  text: string;
  /* text example:
  Set a goal for the day.
  Plan one small goal for tomorrow.
  */
};

type BePresentStep = {
  careType: "Be Present";
  text: string;
  /* text example:
  Enjoy a peaceful breakfast without distractions.
  */
};

type SelfLoveStep = {
  careType: "Self Love";
  text: string;
  /* text example:
  Do something nice for yourself.
  Write down three things you love about yourself.
  */
};
