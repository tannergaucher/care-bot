export type CareProgramResponse = {
  // set current user sentiment based on user input
  currentUserSentiment: "positive" | "negative" | "neutral";
  // create a self care program for each day of the week, based on the current user sentiment
  program: {
    monday: Monday;
    tuesday: Tuesday;
    wednesday: Wednesday;
    thursday: Thursday;
    friday: Friday;
    saturday: Saturday;
    sunday: Sunday;
  };
};

type CareProgram = {
  // populate the care program with care steps. CareStep suggestions are based on the current user sentiment and that day's theme
  morning: CareStep;
  afternoonEvening: CareStep;
  night: CareStep;
};

export type Day =
  | Monday
  | Tuesday
  | Wednesday
  | Thursday
  | Friday
  | Saturday
  | Sunday;

type Monday = CareProgram & {
  day: "Monday";
  theme: "Mindful Monday" | "Meditation Monday" | "Motivation Monday";
};

type Tuesday = CareProgram & {
  day: "Tuesday";
  theme:
    | "Tech Free Tuesday"
    | "Take a Break Tuesday"
    | "Try Something New Tuesday"
    | "Treat Yourself Tuesday"
    | "Take a Break Tuesday";
};

type Wednesday = CareProgram & {
  day: "Wednesday";
  theme: "Wellness Wednesday" | "Walk it Out Wednesday" | "Workout Wednesday";
};

type Thursday = CareProgram & {
  day: "Thursday";
  theme: "Thoughtful Thursday" | "Thankful Thursday";
};

type Friday = CareProgram & {
  day: "Friday";
  theme:
    | "Feel Good Friday"
    | "Fun Filled Friday"
    | "Fitness Friday"
    | "Foodie Friday";
};

type Saturday = CareProgram & {
  day: "Saturday";
  theme:
    | "Social Saturday"
    | "Self Care Saturday"
    | "Soulful Saturday"
    | "Spa Saturday"
    | "Sabbath Saturday";
};

type Sunday = CareProgram & {
  day: "Sunday";
  theme:
    | "Serene Sunday"
    | "Self Care Sunday"
    | "Soulful Sunday"
    | "Spa Sunday"
    | "Social Sunday"
    | "Sabbath Sunday";
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
  careType: "breathwork";
  text: string;
  /* example text:
     Do 10 minutes of guided breathwork
     Do 10 minutes of box breathing
     */
};

type GratitudeStep = {
  careType: "gratitude";
  text: string;
  /* example text: 
     Write down 3 things you are grateful for 
     */
};

type MeditationStep = {
  careType: "meditation";
  text: string;
  /* text examples: 
     Do 10 minutes of mindfulness meditation 
     Do 10 minutes of guided meditation
     */
};

type JournalingStep = {
  careType: "journaling";
  text: string;
  /* text examples: 
     Journal about positive experiences from the day
     Journal about your dreams and aspirations
     */
};

type YogaStep = {
  careType: "yoga";
  text: string;
  /* text examples:
     Do 10 minutes of yoga
     Do 10 minutes of stretching
     */
};

type ReadingStep = {
  careType: "reading";
  text: string;
  /* text examples:
     Read a book for 10 minutes
     Read an article about one of your current interests
     */
};

type AffirmationsStep = {
  careType: "affirmations";
  text: string;
  /* text examples:
     Repeat the following positive affirmations to yourself: 
     I am strong and resilient.
     I am capable of achieving my goals.
     I am worthy of love and success.
     */
};

type ExerciseStep = {
  careType: "exercise";
  /*
     example:
     Do 20 pushups
     Do 30 jumping jacks
     */
  text: string;
};

type BeUnpluggedStep = {
  careType: "beUnplugged";
  /* 
     Unplug from screens an hour before bedtime
     Take a walk in nature without your phone
     Spend some time in nature or a quiet outdoor space
     Unplug from electronics at least 30 minutes before bed
     */
  text: string;
};

type TakeAWalkStep = {
  careType: "takeAWalk";
  text: string;
  /*
     Take a short walk during your lunch break
     */
};

type HobbyStep = {
  careType: "hobby";
  text: string;
  /*
     Engage in a hobby you enjoy for 30 minutes
     */
};

type OrganizeStep = {
  careType: "organize";
  text: string;
  /* text example:
     Take a moment to organize your workspace.
     */
};

type PositivityStep = {
  careType: "positivity";
  text: string;
  /* text example:
     Set a positive affirmation for the day.
     Reflect on the positive choices you made today.
     */
};

type MindNourishmentStep = {
  careType: "mindNourishment";
  text: string;
  /* text example:
     Listen to an inspirational podcast or audiobook.
     Read a calming book or listen to soothing music.
     */
};

type BodyNourishmentStep = {
  careType: "bodyNourishment";
  text: string;
  /* text example:
     Drink a kombucha
     Drink a mushroom coffee.
     Wind down with a cup of herbal tea.
     Make a nutritious and colorful breakfast.
     */
};

type GoalStep = {
  careType: "goal";
  text: string;
  /* text example:
     Set a goal for the day.
     Plan one small goal for tomorrow.
     */
};

type BePresentStep = {
  careType: "bePresent";
  text: string;
  /* text example:
     Enjoy a peaceful breakfast without distractions.
     */
};

type SelfLoveStep = {
  careType: "selfLove";
  text: string;
  /* text example:
     Do something nice for yourself.
     Write down three things you love about yourself.
     */
};
