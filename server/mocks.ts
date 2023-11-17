import { ProgramResponse } from "../server/create-program/programSchema";

export const MOCK_PROGRAM_RESPONSE: ProgramResponse = {
  currentUserMood: "positive",
  theme: "Confidence",
  intro:
    "I'm sorry to hear that you're feeling this way. It's not uncommon for people to struggle with confidence and a sense of direction at times. Let's break down these feelings.",
  morningTitle: "Morning Action: Self-Reflection",
  morningText:
    "Take some time in the morning to reflect on your strengths and past achievements. Identify the skills and qualities that make you proud. Acknowledge the positive aspects of yourself.",
  afternoonEveningTitle: "Afternoon/Evening Action: Goal Setting",
  afternoonEveningText:
    "Set achievable goals for the day or week. Break them into smaller tasks to make progress more manageable. Celebrate small victories, and use them as building blocks for your confidence.",
  nightTitle: "Night Action: Positive Affirmations",
  nightText:
    "Before bedtime, affirm your worth and capabilities. Challenge negative thoughts by focusing on positive aspects of your day. Remind yourself that personal growth is a gradual process.",
  outro:
    "Remember, gaining confidence is a journey, and it's okay to seek support from friends, family, or a professional if needed. You're not alone in this, and small steps can lead to significant progress.",
};
