import { CareProgramResponse } from "./create-program/careProgramSchema";

export const MOCK_CARE_PROGRAM_RESPONSE: CareProgramResponse = {
  currentUserSentiment: "positive",
  program: {
    monday: {
      day: "Monday",
      theme: "Motivation Monday",
      morning: {
        careType: "affirmations",
        text: "Repeat the following positive affirmations to yourself:\nI am strong and resilient.\nI am capable of achieving my goals.\nI am worthy of love and success.",
      },
      afternoonEvening: {
        careType: "goal",
        text: "Set a goal for the day.",
      },
      night: {
        careType: "selfLove",
        text: "Do something nice for yourself.\nWrite down three things you love about yourself.",
      },
    },
    tuesday: {
      day: "Tuesday",
      theme: "Take a Break Tuesday",
      morning: {
        careType: "beUnplugged",
        text: "Unplug from screens an hour before bedtime",
      },
      afternoonEvening: {
        careType: "takeAWalk",
        text: "Take a short walk during your lunch break",
      },
      night: {
        careType: "hobby",
        text: "Engage in a hobby you enjoy for 30 minutes",
      },
    },
    wednesday: {
      day: "Wednesday",
      theme: "Wellness Wednesday",
      morning: {
        careType: "mindNourishment",
        text: "Listen to an inspirational podcast or audiobook.",
      },
      afternoonEvening: {
        careType: "bodyNourishment",
        text: "Drink a kombucha",
      },
      night: {
        careType: "bePresent",
        text: "Enjoy a peaceful breakfast without distractions.",
      },
    },
    thursday: {
      day: "Thursday",
      theme: "Thoughtful Thursday",
      morning: {
        careType: "gratitude",
        text: "Write down 3 things you are grateful for",
      },
      afternoonEvening: {
        careType: "journaling",
        text: "Journal about positive experiences from the day",
      },
      night: {
        careType: "meditation",
        text: "Do 10 minutes of mindfulness meditation",
      },
    },
    friday: {
      day: "Friday",
      theme: "Feel Good Friday",
      morning: {
        careType: "exercise",
        text: "Do 20 pushups",
      },
      afternoonEvening: {
        careType: "reading",
        text: "Read a book for 10 minutes",
      },
      night: {
        careType: "yoga",
        text: "Do 10 minutes of yoga",
      },
    },
    saturday: {
      day: "Saturday",
      theme: "Self Care Saturday",
      morning: {
        careType: "breathwork",
        text: "Do 10 minutes of guided breathwork",
      },
      afternoonEvening: {
        careType: "organize",
        text: "Take a moment to organize your workspace.",
      },
      night: {
        careType: "positivity",
        text: "Set a positive affirmation for the day.",
      },
    },
    sunday: {
      day: "Sunday",
      theme: "Self Care Sunday",
      morning: {
        careType: "affirmations",
        text: "Repeat the following positive affirmations to yourself:\nI am strong and resilient.\nI am capable of achieving my goals.\nI am worthy of love and success.",
      },
      afternoonEvening: {
        careType: "goal",
        text: "Plan one small goal for tomorrow.",
      },
      night: {
        careType: "selfLove",
        text: "Do something nice for yourself.\nWrite down three things you love about yourself.",
      },
    },
  },
};
