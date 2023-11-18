export type CloudTranscriptionResponse = {
  results: Result[];
};

type Result = {
  alternatives: Alternative[];
  languageCode: string;
  resultEndTime: string;
};

type Alternative = {
  confidence: number;
  words: Word[];
  transcript: string;
};

type Word = {
  word: string;
  confidence: number;
  startTime: string;
  endTime: string;
};

export const PREPROCESSED_TRANSCRIPTION_RESPONSE = {
  results: [
    {
      alternatives: [
        {
          confidence: 0.96654344,
          transcript:
            "I'm sorry to hear that you're feeling this way it's not uncommon for people to struggle with confidence and a sense of direction at times let's break down these feelings morning action self-reflection takes some time in the morning to reflect on your strengths and past achievements identify the skills and qualities that make you proud acknowledge the positive aspects of yourself afternoon evening action goal setting set achievable goals for the day or week break them into smaller tasks to make progress more manageable celebrate small victories and use them as building blocks for your confidence night action positive affirmations before bedtime a firm your worth and capabilities challenge negative thoughts by focusing on positive aspects of your day remind yourself that personal growth is a gradual process remember gaining confidence is a journey and it's okay to seek support from friends family or professional if needed you're not alone in this and small steps can lead to significant progress",
          words: [
            {
              confidence: 0.97219545,
              endTime: "0.200s",
              startTime: "0s",
              word: "I'm",
            },
            {
              confidence: 0.97219545,
              endTime: "0.300s",
              startTime: "0.200s",
              word: "sorry",
            },
            {
              confidence: 0.97219545,
              endTime: "0.500s",
              startTime: "0.300s",
              word: "to",
            },
            {
              confidence: 0.97219545,
              endTime: "0.700s",
              startTime: "0.500s",
              word: "hear",
            },
            {
              confidence: 0.97219545,
              endTime: "0.900s",
              startTime: "0.700s",
              word: "that",
            },
            {
              confidence: 0.97219545,
              endTime: "1.300s",
              startTime: "0.900s",
              word: "you're",
            },
            {
              confidence: 0.97219545,
              endTime: "1.600s",
              startTime: "1.300s",
              word: "feeling",
            },
            {
              confidence: 0.97219545,
              endTime: "1.600s",
              startTime: "1.600s",
              word: "this",
            },
            {
              confidence: 0.97219545,
              endTime: "1.800s",
              startTime: "1.600s",
              word: "way",
            },
            {
              confidence: 0.97219545,
              endTime: "2.500s",
              startTime: "1.800s",
              word: "it's",
            },
            {
              confidence: 0.97219545,
              endTime: "2.700s",
              startTime: "2.500s",
              word: "not",
            },
            {
              confidence: 0.97219545,
              endTime: "3.300s",
              startTime: "2.700s",
              word: "uncommon",
            },
            {
              confidence: 0.97219545,
              endTime: "3.400s",
              startTime: "3.300s",
              word: "for",
            },
            {
              confidence: 0.97219545,
              endTime: "3.500s",
              startTime: "3.400s",
              word: "people",
            },
            {
              confidence: 0.97219545,
              endTime: "3.700s",
              startTime: "3.500s",
              word: "to",
            },
            {
              confidence: 0.97219545,
              endTime: "4.100s",
              startTime: "3.700s",
              word: "struggle",
            },
            {
              confidence: 0.97219545,
              endTime: "4.200s",
              startTime: "4.100s",
              word: "with",
            },
            {
              confidence: 0.97219545,
              endTime: "4.800s",
              startTime: "4.200s",
              word: "confidence",
            },
            {
              confidence: 0.97219545,
              endTime: "5s",
              startTime: "4.800s",
              word: "and",
            },
            {
              confidence: 0.97219545,
              endTime: "5.400s",
              startTime: "5s",
              word: "a",
            },
            {
              confidence: 0.97219545,
              endTime: "5.500s",
              startTime: "5.400s",
              word: "sense",
            },
            {
              confidence: 0.97219545,
              endTime: "5.600s",
              startTime: "5.500s",
              word: "of",
            },
            {
              confidence: 0.97219545,
              endTime: "5.900s",
              startTime: "5.600s",
              word: "direction",
            },
            {
              confidence: 0.97219545,
              endTime: "6.200s",
              startTime: "5.900s",
              word: "at",
            },
            {
              confidence: 0.97219545,
              endTime: "6.500s",
              startTime: "6.200s",
              word: "times",
            },
            {
              confidence: 0.97219545,
              endTime: "7.200s",
              startTime: "6.500s",
              word: "let's",
            },
            {
              confidence: 0.97219545,
              endTime: "7.500s",
              startTime: "7.200s",
              word: "break",
            },
            {
              confidence: 0.97219545,
              endTime: "7.700s",
              startTime: "7.500s",
              word: "down",
            },
            {
              confidence: 0.97219545,
              endTime: "7.900s",
              startTime: "7.700s",
              word: "these",
            },
            {
              confidence: 0.97219545,
              endTime: "8.300s",
              startTime: "7.900s",
              word: "feelings",
            },
            {
              confidence: 0.97219545,
              endTime: "9.200s",
              startTime: "8.300s",
              word: "morning",
            },
            {
              confidence: 0.97219545,
              endTime: "9.600s",
              startTime: "9.200s",
              word: "action",
            },
            {
              confidence: 0.97219545,
              endTime: "10.600s",
              startTime: "9.600s",
              word: "self-reflection",
            },
            {
              confidence: 0.97219545,
              endTime: "10.900s",
              startTime: "10.600s",
              word: "takes",
            },
            {
              confidence: 0.97219545,
              endTime: "11.200s",
              startTime: "10.900s",
              word: "some",
            },
            {
              confidence: 0.97219545,
              endTime: "11.300s",
              startTime: "11.200s",
              word: "time",
            },
            {
              confidence: 0.97219545,
              endTime: "11.500s",
              startTime: "11.300s",
              word: "in",
            },
            {
              confidence: 0.97219545,
              endTime: "11.600s",
              startTime: "11.500s",
              word: "the",
            },
            {
              confidence: 0.97219545,
              endTime: "11.800s",
              startTime: "11.600s",
              word: "morning",
            },
            {
              confidence: 0.97219545,
              endTime: "12s",
              startTime: "11.800s",
              word: "to",
            },
            {
              confidence: 0.97219545,
              endTime: "12.400s",
              startTime: "12s",
              word: "reflect",
            },
            {
              confidence: 0.97219545,
              endTime: "12.500s",
              startTime: "12.400s",
              word: "on",
            },
            {
              confidence: 0.97219545,
              endTime: "12.700s",
              startTime: "12.500s",
              word: "your",
            },
            {
              confidence: 0.97219545,
              endTime: "13.200s",
              startTime: "12.700s",
              word: "strengths",
            },
            {
              confidence: 0.97219545,
              endTime: "13.300s",
              startTime: "13.200s",
              word: "and",
            },
            {
              confidence: 0.97219545,
              endTime: "13.800s",
              startTime: "13.300s",
              word: "past",
            },
            {
              confidence: 0.97219545,
              endTime: "14.100s",
              startTime: "13.800s",
              word: "achievements",
            },
            {
              confidence: 0.97219545,
              endTime: "15.200s",
              startTime: "14.100s",
              word: "identify",
            },
            {
              confidence: 0.97219545,
              endTime: "15.500s",
              startTime: "15.200s",
              word: "the",
            },
            {
              confidence: 0.97219545,
              endTime: "15.700s",
              startTime: "15.500s",
              word: "skills",
            },
            {
              confidence: 0.97219545,
              endTime: "15.900s",
              startTime: "15.700s",
              word: "and",
            },
            {
              confidence: 0.97219545,
              endTime: "16.300s",
              startTime: "15.900s",
              word: "qualities",
            },
            {
              confidence: 0.97219545,
              endTime: "16.400s",
              startTime: "16.300s",
              word: "that",
            },
            {
              confidence: 0.97219545,
              endTime: "16.700s",
              startTime: "16.400s",
              word: "make",
            },
            {
              confidence: 0.97219545,
              endTime: "16.900s",
              startTime: "16.700s",
              word: "you",
            },
            {
              confidence: 0.97219545,
              endTime: "17.200s",
              startTime: "16.900s",
              word: "proud",
            },
            {
              confidence: 0.97219545,
              endTime: "18.200s",
              startTime: "17.200s",
              word: "acknowledge",
            },
            {
              confidence: 0.97219545,
              endTime: "18.300s",
              startTime: "18.200s",
              word: "the",
            },
            {
              confidence: 0.97219545,
              endTime: "18.600s",
              startTime: "18.300s",
              word: "positive",
            },
            {
              confidence: 0.97219545,
              endTime: "19.100s",
              startTime: "18.600s",
              word: "aspects",
            },
            {
              confidence: 0.97219545,
              endTime: "19.300s",
              startTime: "19.100s",
              word: "of",
            },
            {
              confidence: 0.97219545,
              endTime: "19.600s",
              startTime: "19.300s",
              word: "yourself",
            },
            {
              confidence: 0.97219545,
              endTime: "20.600s",
              startTime: "19.600s",
              word: "afternoon",
            },
            {
              confidence: 0.97219545,
              endTime: "21.100s",
              startTime: "20.600s",
              word: "evening",
            },
            {
              confidence: 0.97219545,
              endTime: "21.400s",
              startTime: "21.100s",
              word: "action",
            },
            {
              confidence: 0.97219545,
              endTime: "22.300s",
              startTime: "21.400s",
              word: "goal",
            },
            {
              confidence: 0.97219545,
              endTime: "22.700s",
              startTime: "22.300s",
              word: "setting",
            },
            {
              confidence: 0.97219545,
              endTime: "22.900s",
              startTime: "22.700s",
              word: "set",
            },
            {
              confidence: 0.97219545,
              endTime: "23.300s",
              startTime: "22.900s",
              word: "achievable",
            },
            {
              confidence: 0.97219545,
              endTime: "23.600s",
              startTime: "23.300s",
              word: "goals",
            },
            {
              confidence: 0.97219545,
              endTime: "23.800s",
              startTime: "23.600s",
              word: "for",
            },
            {
              confidence: 0.97219545,
              endTime: "24s",
              startTime: "23.800s",
              word: "the",
            },
            {
              confidence: 0.97219545,
              endTime: "24.100s",
              startTime: "24s",
              word: "day",
            },
            {
              confidence: 0.97219545,
              endTime: "24.300s",
              startTime: "24.100s",
              word: "or",
            },
            {
              confidence: 0.97219545,
              endTime: "24.600s",
              startTime: "24.300s",
              word: "week",
            },
            {
              confidence: 0.97219545,
              endTime: "25.300s",
              startTime: "24.600s",
              word: "break",
            },
            {
              confidence: 0.97219545,
              endTime: "25.600s",
              startTime: "25.300s",
              word: "them",
            },
            {
              confidence: 0.97219545,
              endTime: "25.700s",
              startTime: "25.600s",
              word: "into",
            },
            {
              confidence: 0.97219545,
              endTime: "26s",
              startTime: "25.700s",
              word: "smaller",
            },
            {
              confidence: 0.97219545,
              endTime: "26.500s",
              startTime: "26s",
              word: "tasks",
            },
            {
              confidence: 0.97219545,
              endTime: "26.800s",
              startTime: "26.500s",
              word: "to",
            },
            {
              confidence: 0.97219545,
              endTime: "26.900s",
              startTime: "26.800s",
              word: "make",
            },
            {
              confidence: 0.97219545,
              endTime: "27.300s",
              startTime: "26.900s",
              word: "progress",
            },
            {
              confidence: 0.97219545,
              endTime: "27.700s",
              startTime: "27.300s",
              word: "more",
            },
            {
              confidence: 0.97219545,
              endTime: "28.200s",
              startTime: "27.700s",
              word: "manageable",
            },
            {
              confidence: 0.97219545,
              endTime: "29.400s",
              startTime: "28.200s",
              word: "celebrate",
            },
            {
              confidence: 0.97219545,
              endTime: "29.600s",
              startTime: "29.400s",
              word: "small",
            },
            {
              confidence: 0.97219545,
              endTime: "30.300s",
              startTime: "29.600s",
              word: "victories",
            },
            {
              confidence: 0.97219545,
              endTime: "30.300s",
              startTime: "30.300s",
              word: "and",
            },
            {
              confidence: 0.97219545,
              endTime: "30.600s",
              startTime: "30.300s",
              word: "use",
            },
            {
              confidence: 0.97219545,
              endTime: "30.700s",
              startTime: "30.600s",
              word: "them",
            },
            {
              confidence: 0.97219545,
              endTime: "30.800s",
              startTime: "30.700s",
              word: "as",
            },
            {
              confidence: 0.97219545,
              endTime: "31.100s",
              startTime: "30.800s",
              word: "building",
            },
            {
              confidence: 0.97219545,
              endTime: "31.400s",
              startTime: "31.100s",
              word: "blocks",
            },
            {
              confidence: 0.97219545,
              endTime: "31.700s",
              startTime: "31.400s",
              word: "for",
            },
            {
              confidence: 0.97219545,
              endTime: "31.800s",
              startTime: "31.700s",
              word: "your",
            },
            {
              confidence: 0.97219545,
              endTime: "32.300s",
              startTime: "31.800s",
              word: "confidence",
            },
            {
              confidence: 0.97219545,
              endTime: "33.400s",
              startTime: "32.300s",
              word: "night",
            },
            {
              confidence: 0.97219545,
              endTime: "33.500s",
              startTime: "33.400s",
              word: "action",
            },
            {
              confidence: 0.97219545,
              endTime: "34.400s",
              startTime: "33.500s",
              word: "positive",
            },
            {
              confidence: 0.97219545,
              endTime: "35.100s",
              startTime: "34.400s",
              word: "affirmations",
            },
            {
              confidence: 0.97219545,
              endTime: "35.300s",
              startTime: "35.100s",
              word: "before",
            },
            {
              confidence: 0.97219545,
              endTime: "35.700s",
              startTime: "35.300s",
              word: "bedtime",
            },
            {
              confidence: 0.97219545,
              endTime: "36.500s",
              startTime: "35.700s",
              word: "a",
            },
            {
              confidence: 0.97219545,
              endTime: "36.800s",
              startTime: "36.500s",
              word: "firm",
            },
            {
              confidence: 0.80539346,
              endTime: "36.800s",
              startTime: "36.800s",
              word: "your",
            },
            {
              confidence: 0.90583068,
              endTime: "37.100s",
              startTime: "36.800s",
              word: "worth",
            },
            {
              confidence: 0.97219545,
              endTime: "37.100s",
              startTime: "37.100s",
              word: "and",
            },
            {
              confidence: 0.90936673,
              endTime: "38s",
              startTime: "37.100s",
              word: "capabilities",
            },
            {
              confidence: 0.97219545,
              endTime: "38.900s",
              startTime: "38s",
              word: "challenge",
            },
            {
              confidence: 0.97219545,
              endTime: "39.300s",
              startTime: "38.900s",
              word: "negative",
            },
            {
              confidence: 0.97219545,
              endTime: "39.500s",
              startTime: "39.300s",
              word: "thoughts",
            },
            {
              confidence: 0.97219545,
              endTime: "39.700s",
              startTime: "39.500s",
              word: "by",
            },
            {
              confidence: 0.96604562,
              endTime: "40.200s",
              startTime: "39.700s",
              word: "focusing",
            },
            {
              confidence: 0.97219545,
              endTime: "40.300s",
              startTime: "40.200s",
              word: "on",
            },
            {
              confidence: 0.96570534,
              endTime: "40.800s",
              startTime: "40.300s",
              word: "positive",
            },
            {
              confidence: 0.96923769,
              endTime: "41.300s",
              startTime: "40.800s",
              word: "aspects",
            },
            {
              confidence: 0.97219545,
              endTime: "41.400s",
              startTime: "41.300s",
              word: "of",
            },
            {
              confidence: 0.94130248,
              endTime: "41.600s",
              startTime: "41.400s",
              word: "your",
            },
            {
              confidence: 0.97219545,
              endTime: "41.800s",
              startTime: "41.600s",
              word: "day",
            },
            {
              confidence: 0.97219545,
              endTime: "42.600s",
              startTime: "41.800s",
              word: "remind",
            },
            {
              confidence: 0.96332216,
              endTime: "43s",
              startTime: "42.600s",
              word: "yourself",
            },
            {
              confidence: 0.97219545,
              endTime: "43.300s",
              startTime: "43s",
              word: "that",
            },
            {
              confidence: 0.97219545,
              endTime: "43.700s",
              startTime: "43.300s",
              word: "personal",
            },
            {
              confidence: 0.97219545,
              endTime: "44s",
              startTime: "43.700s",
              word: "growth",
            },
            {
              confidence: 0.97219545,
              endTime: "44.200s",
              startTime: "44s",
              word: "is",
            },
            {
              confidence: 0.97219545,
              endTime: "44.500s",
              startTime: "44.200s",
              word: "a",
            },
            {
              confidence: 0.97219545,
              endTime: "44.800s",
              startTime: "44.500s",
              word: "gradual",
            },
            {
              confidence: 0.97219545,
              endTime: "45.100s",
              startTime: "44.800s",
              word: "process",
            },
            {
              confidence: 0.97219545,
              endTime: "46.100s",
              startTime: "45.100s",
              word: "remember",
            },
            {
              confidence: 0.88879442,
              endTime: "46.800s",
              startTime: "46.100s",
              word: "gaining",
            },
            {
              confidence: 0.97219545,
              endTime: "47.300s",
              startTime: "46.800s",
              word: "confidence",
            },
            {
              confidence: 0.97219545,
              endTime: "47.500s",
              startTime: "47.300s",
              word: "is",
            },
            {
              confidence: 0.97219545,
              endTime: "47.700s",
              startTime: "47.500s",
              word: "a",
            },
            {
              confidence: 0.8266083,
              endTime: "48s",
              startTime: "47.700s",
              word: "journey",
            },
            {
              confidence: 0.97219545,
              endTime: "48.400s",
              startTime: "48s",
              word: "and",
            },
            {
              confidence: 0.97219545,
              endTime: "48.500s",
              startTime: "48.400s",
              word: "it's",
            },
            {
              confidence: 0.95458007,
              endTime: "48.800s",
              startTime: "48.500s",
              word: "okay",
            },
            {
              confidence: 0.97219545,
              endTime: "49s",
              startTime: "48.800s",
              word: "to",
            },
            {
              confidence: 0.97219545,
              endTime: "49.300s",
              startTime: "49s",
              word: "seek",
            },
            {
              confidence: 0.95458007,
              endTime: "49.600s",
              startTime: "49.300s",
              word: "support",
            },
            {
              confidence: 0.94946718,
              endTime: "49.900s",
              startTime: "49.600s",
              word: "from",
            },
            {
              confidence: 0.97219545,
              endTime: "50.200s",
              startTime: "49.900s",
              word: "friends",
            },
            {
              confidence: 0.96332216,
              endTime: "50.600s",
              startTime: "50.200s",
              word: "family",
            },
            {
              confidence: 0.97219545,
              endTime: "51s",
              startTime: "50.600s",
              word: "or",
            },
            {
              confidence: 0.97219545,
              endTime: "51.600s",
              startTime: "51s",
              word: "professional",
            },
            {
              confidence: 0.97219545,
              endTime: "52s",
              startTime: "51.600s",
              word: "if",
            },
            {
              confidence: 0.93901306,
              endTime: "52.100s",
              startTime: "52s",
              word: "needed",
            },
            {
              confidence: 0.97219545,
              endTime: "52.600s",
              startTime: "52.100s",
              word: "you're",
            },
            {
              confidence: 0.85503107,
              endTime: "52.800s",
              startTime: "52.600s",
              word: "not",
            },
            {
              confidence: 0.97219545,
              endTime: "53s",
              startTime: "52.800s",
              word: "alone",
            },
            {
              confidence: 0.94946718,
              endTime: "53.300s",
              startTime: "53s",
              word: "in",
            },
            {
              confidence: 0.97219545,
              endTime: "53.400s",
              startTime: "53.300s",
              word: "this",
            },
            {
              confidence: 0.96570534,
              endTime: "53.900s",
              startTime: "53.400s",
              word: "and",
            },
            {
              confidence: 0.97219545,
              endTime: "54.200s",
              startTime: "53.900s",
              word: "small",
            },
            {
              confidence: 0.88879442,
              endTime: "54.600s",
              startTime: "54.200s",
              word: "steps",
            },
            {
              confidence: 0.97219545,
              endTime: "54.800s",
              startTime: "54.600s",
              word: "can",
            },
            {
              confidence: 0.97219545,
              endTime: "55.100s",
              startTime: "54.800s",
              word: "lead",
            },
            {
              confidence: 0.97219545,
              endTime: "55.100s",
              startTime: "55.100s",
              word: "to",
            },
            {
              confidence: 0.97219545,
              endTime: "55.600s",
              startTime: "55.100s",
              word: "significant",
            },
            {
              confidence: 0.97219545,
              endTime: "56.200s",
              startTime: "55.600s",
              word: "progress",
            },
          ],
        },
      ],
      languageCode: "en-us",
      resultEndTime: "56.520s",
    },
  ],
};