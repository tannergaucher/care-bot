/* 

Hello, I need you help! Pretend you are a therapist. You are going to help me. It's best if you respond in a very structured way. I need you to respond with a plan for today that will help me based on how I am currently feeling, like the examples below.

/* 

{
  currentUserMood: "negative",
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

{
  currentUserMood: "positive",
  theme: "Empowerment",
  intro:
    "I'm glad to hear that you're in a positive mood, but I understand that gaining confidence and a sense of direction can still be challenging. Let's explore ways to build on this positive momentum.",
  morningTitle: "Morning Boost: Gratitude Practice",
  morningText:
    "Start your day by acknowledging the things you're grateful for. Reflect on positive aspects of your life, fostering a mindset of appreciation and setting a positive tone for the day.",
  afternoonEveningTitle: "Afternoon/Evening Growth: Learning",
  afternoonEveningText:
    "Engage in activities that promote personal growth. Whether it's learning a new skill, pursuing a hobby, or gaining knowledge, continuous learning can contribute to a sense of achievement and confidence.",
  nightTitle: "Night Reflection: Success Acknowledgment",
  nightText:
    "Before bedtime, reflect on the successes of your day. Recognize the positive steps you took, no matter how small. This practice reinforces your achievements and reinforces a positive self-image.",
  outro:
    "Remember, building confidence is a continuous journey. Embrace your successes, no matter how minor, and continue to nurture the positive aspects of yourself. If you ever need support, don't hesitate to reach out to those around you."
}


{
  currentUserMood: "negative",
  theme: "Resilience",
  intro:
    "I'm sorry to hear that you're feeling this way. It's completely normal to face challenges that impact our mood negatively. Let's explore strategies to enhance resilience during tough times.",
  morningTitle: "Morning Reset: Mindfulness",
  morningText:
    "Begin your day with mindfulness exercises to center yourself. Focus on the present moment, acknowledge your emotions without judgment, and cultivate a sense of inner calm to face the day.",
  afternoonEveningTitle: "Afternoon/Evening Renewal: Physical Activity",
  afternoonEveningText:
    "Incorporate physical activity into your day. Whether it's a walk, jog, or a workout, exercise has the potential to elevate mood, reduce stress, and enhance overall well-being.",
  nightTitle: "Night Reflection: Journaling",
  nightText:
    "Take some time before bed to journal your thoughts and feelings. Writing can provide a therapeutic outlet, helping you gain clarity, process negative emotions, and set intentions for the next day.",
  outro:
    "Remember, resilience is about navigating challenges and bouncing back. It's okay to seek support from others or professional help when needed. By incorporating these practices, you're actively building resilience and strength."
}


*/

export type ProgramResponse = {
  currentUserMood: "positive" | "negative" | "neutral";
  // theme: Exploration | Confidence | Direction
  theme: string;
  //intro:I'm sorry to hear that you're feeling this way. It's not uncommon for people to struggle with confidence and a sense of direction at times. Let's break down these feelings.
  intro: string;
  // morningTitle: Morning Action: Self-Reflection
  morningTitle: string;
  // morningText: Take some time in the morning to reflect on your strengths and past achievements. Identify the skills and qualities that make you proud. Acknowledge the positive aspects of yourself.
  morningText: string;
  // afternoonEveningTitle: Afternoon/Evening Action: Goal Setting
  afternoonEveningTitle: string;
  // afternoonEveningText: Set achievable goals for the day or week. Break them into smaller tasks to make progress more manageable. Celebrate small victories, and use them as building blocks for your confidence.
  afternoonEveningText: string;
  // nightTitle: Night Action: Positive Affirmations
  nightTitle: string;
  // nightText: Before bedtime, affirm your worth and capabilities. Challenge negative thoughts by focusing on positive aspects of your day. Remind yourself that personal growth is a gradual process.
  nightText: string;
  // outro: Remember, gaining confidence is a journey, and it's okay to seek support from friends, family, or a professional if needed. You're not alone in this, and small steps can lead to significant progress.
  outro: string;
};
