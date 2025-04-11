import React, { useEffect, useState } from "react";
import "./style.css"; 
import { jsPDF } from "jspdf";
import chptr1 from "./image/Chptr1.jpeg";
import chptr2 from "./image/Chptr2.jpeg";
import chptr3 from "./image/Chptr3.jpeg";
import chptr4 from "./image/Chptr3.jpeg";
import chptr5 from "./image/Chptr3.jpeg";
import chptr6 from "./image/Chptr3.jpeg";
import chptr7 from "./image/Chptr3.jpeg";
import chptr8 from "./image/Chptr3.jpeg";
import certificateTemplate from "./image/certificate.png"
import img5 from "./image/gita.jpg";
import img6 from "./image/mahabharat.jpg";
import img7 from "./image/ramayana.jpg";
import img8 from "./image/Vedvyasa.jpg";

const videos = [
// Chptr 1
  {
    title: "Bhagavad Gita | Chapter 1 | Observing the Armies on the Battlefield of Kurukṣetra",
    thumbnails: [chptr1], // Multiple thumbnails
    youtubeLink: "https://www.youtube.com/watch?v=WrAeUR5V9k8&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=14",
    description:
      "Arjuna faces a moral dilemma on the battlefield of Kurukṣetra. Lord Krishna prepares to impart divine wisdom to dispel his confusion and guide him on the path of righteousness.",
      quiz: [
        {
          "question": "Who narrated the events of the Kurukshetra war to Dhritarashtra?",
          "options": ["Krishna", "Arjuna", "Sanjaya", "Bhishma"],
          "answer": "Sanjaya"
        },
        {
          "question": "Why did Arjuna refuse to fight in the battle?",
          "options": [
            "He was afraid of losing",
            "He was overwhelmed by compassion for his relatives",
            "He lacked weapons",
            "He wanted to surrender to Duryodhana"
          ],
          "answer": "He was overwhelmed by compassion for his relatives"
        },
        {
          "question": "Which two aspects define the first chapter of the Bhagavad Gita?",
          "options": [
            "Krishna's teachings and Arjuna's enlightenment",
            "Observing the armies and Arjuna's lamentation",
            "The battle strategies and war conclusion",
            "Bhishma's leadership and Duryodhana's ambitions"
          ],
          "answer": "Observing the armies and Arjuna's lamentation"
        },
        {
          "question": "What was Duryodhana’s reaction to the Pandavas’ military formation?",
          "options": [
            "He was confident of victory",
            "He was pleased with their strategy",
            "He was doubtful and worried",
            "He ignored it completely"
          ],
          "answer": "He was doubtful and worried"
        },
        {
          "question": "What does Arjuna’s reluctance to fight indicate about his character?",
          "options": [
            "He is a coward",
            "He is a responsible devotee with a kind heart",
            "He lacks proper military training",
            "He wants to flee the battlefield"
          ],
          "answer": "He is a responsible devotee with a kind heart"
        }
      ],
      
  },
  // Chptr 2
  {
    title: "Bhagavad Gita | Chapter 2 | Contents of the Gita Summarized",
    thumbnails: [chptr2],
    youtubeLink: "https://www.youtube.com/watch?v=c2PZPpc4_eI&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=2",
    description:
      "Krishna begins His teachings by summarizing the essence of the Gita, explaining the eternal nature of the soul, the importance of duty, and the path of self-realization.",
  quiz: [
        {
          "question": "What is the fundamental teaching that Krishna first imparts to Arjuna in Chapter 2?",
          "options": [
            "The importance of material wealth",
            "The concept of karma and reincarnation",
            "The realization that we are the eternal soul, not the material body",
            "The necessity to abandon all worldly duties"
          ],
          "answer": "The realization that we are the eternal soul, not the material body"
        },
        {
          "question": "According to Krishna, why should Arjuna not lament the death of his relatives in battle?",
          "options": [
            "Because death is an illusion",
            "Because the soul is eternal and cannot be destroyed",
            "Because he will get a chance to meet them again in the afterlife",
            "Because Krishna has already decided the outcome"
          ],
          "answer": "Because the soul is eternal and cannot be destroyed"
        },
        {
          "question": "What is the essence of Karma Yoga as explained by Krishna in Chapter 2?",
          "options": [
            "Performing actions with attachment to the results",
            "Avoiding all actions to attain peace",
            "Performing one's duty without attachment to the fruits of work",
            "Engaging in war to fulfill personal ambitions"
          ],
          "answer": "Performing one's duty without attachment to the fruits of work"
        },
        {
          "question": "Why does Krishna encourage Arjuna to fight in the battle?",
          "options": [
            "Because it is his duty as a Kshatriya to uphold righteousness",
            "Because he must avenge his past defeats",
            "Because Krishna wants to test his loyalty",
            "Because fighting will make him wealthy and powerful"
          ],
          "answer": "Because it is his duty as a Kshatriya to uphold righteousness"
        },
        {
          "question": "What happens to the soul after the death of the body, according to Krishna?",
          "options": [
            "It is destroyed along with the body",
            "It merges into the universe and ceases to exist",
            "It changes bodies according to karma and desires",
            "It goes to eternal hell or heaven"
          ],
          "answer": "It changes bodies according to karma and desires"
        }
      ],
      
  },
  // Chptr 3
  {
    title: "Bhagavad Gita | Chapter 3 | Karma-yoga",
    thumbnails: [chptr3],
    youtubeLink: "https://www.youtube.com/watch?v=f1DCEg5EDfI&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=3",
    description:
      "Krishna explains the path of Karma-yoga, the selfless performance of duty without attachment to results, as a means to attain liberation.",
  quiz: [
        {
          "question": "What is the main theme of Chapter 3 of the Bhagavad Gita?",
          "options": [
            "The supremacy of renunciation over action",
            "The importance of Karma Yoga, or selfless action",
            "The need to abandon all duties and meditate",
            "The significance of accumulating wealth"
          ],
          "answer": "The importance of Karma Yoga, or selfless action"
        },
        {
          "question": "Why does Krishna emphasize performing one's prescribed duty?",
          "options": [
            "Because it leads to material success",
            "Because it sets an example for society and purifies the soul",
            "Because failure to do so will result in punishment",
            "Because one should seek personal glory through work"
          ],
          "answer": "Because it sets an example for society and purifies the soul"
        },
        {
          "question": "According to Krishna, what is the greatest enemy of the soul that leads to sinful actions?",
          "options": [
            "Greed",
            "Lust (Kama)",
            "Anger",
            "Pride"
          ],
          "answer": "Lust (Kama)"
        },
        {
          "question": "What is the relationship between sacrifice (Yajna) and cosmic harmony in Chapter 3?",
          "options": [
            "Sacrifices are unnecessary for spiritual progress",
            "Performing sacrifices pleases demigods, ensuring balance in the world",
            "Sacrifices are only meant for priests and Brahmanas",
            "Cosmic harmony is achieved through renunciation, not sacrifice"
          ],
          "answer": "Performing sacrifices pleases demigods, ensuring balance in the world"
        },
        {
          "question": "Why does Krishna tell Arjuna that even a wise person should continue performing their duties?",
          "options": [
            "To set an example for others to follow",
            "Because work is the only way to attain liberation",
            "Because wise people should compete with others",
            "To prove their superiority in society"
          ],
          "answer": "To set an example for others to follow"
        }
      ]
      
  },
  // Chptr 4 left
  {
    title: "Bhagavad Gita | Chapter 4 | Transcendental Knowledge",
    thumbnails: [chptr4],
    youtubeLink: "https://www.youtube.com/watch?v=DeoEf67A8hA&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=13",
    description:
      "Krishna reveals the divine knowledge passed down through the ages, explaining the transcendental nature of His birth and activities.",
      quiz: [
        {
          "question": "Who narrated the events of the Kurukshetra war to Dhritarashtra?",
          "options": ["Krishna", "Arjuna", "Sanjaya", "Bhishma"],
          "answer": "Sanjaya"
        },
        {
          "question": "Why did Arjuna refuse to fight in the battle?",
          "options": [
            "He was afraid of losing",
            "He was overwhelmed by compassion for his relatives",
            "He lacked weapons",
            "He wanted to surrender to Duryodhana"
          ],
          "answer": "He was overwhelmed by compassion for his relatives"
        },
        {
          "question": "Which two aspects define the first chapter of the Bhagavad Gita?",
          "options": [
            "Krishna's teachings and Arjuna's enlightenment",
            "Observing the armies and Arjuna's lamentation",
            "The battle strategies and war conclusion",
            "Bhishma's leadership and Duryodhana's ambitions"
          ],
          "answer": "Observing the armies and Arjuna's lamentation"
        },
        {
          "question": "What was Duryodhana’s reaction to the Pandavas’ military formation?",
          "options": [
            "He was confident of victory",
            "He was pleased with their strategy",
            "He was doubtful and worried",
            "He ignored it completely"
          ],
          "answer": "He was doubtful and worried"
        },
        {
          "question": "What does Arjuna’s reluctance to fight indicate about his character?",
          "options": [
            "He is a coward",
            "He is a responsible devotee with a kind heart",
            "He lacks proper military training",
            "He wants to flee the battlefield"
          ],
          "answer": "He is a responsible devotee with a kind heart"
        }
      ],
      
  },
  // Chptr 5
  {
    title: "Bhagavad Gita | Chapter 5 | Karma-yoga – Action in Kṛṣṇa Consciousness",
    thumbnails: [chptr5],
    youtubeLink: "https://www.youtube.com/watch?v=7lGXQ2SlmpQ&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=1",
    description:
      "Krishna elaborates on Karma-yoga and renunciation, emphasizing that acting in devotion leads to freedom from bondage.",
      quiz: [
        {
          "question": "What is the central theme of Chapter 5 of the Bhagavad Gita?",
          "options": [
            "The superiority of renunciation over action",
            "The equality of renunciation (Sannyasa) and selfless action (Karma Yoga)",
            "The rejection of all duties for meditation",
            "The pursuit of material success for spiritual progress"
          ],
          "answer": "The equality of renunciation (Sannyasa) and selfless action (Karma Yoga)"
        },
        {
          "question": "How does a wise person perform actions according to Chapter 5?",
          "options": [
            "By detaching from the results and dedicating actions to Krishna",
            "By working only for personal gain",
            "By renouncing all action and avoiding responsibilities",
            "By seeking rewards from sacrifices"
          ],
          "answer": "By detaching from the results and dedicating actions to Krishna"
        },
        {
          "question": "What is the ultimate goal of both renunciation and selfless action?",
          "options": [
            "Merging into the cosmic energy",
            "Attaining liberation (Moksha) and divine peace",
            "Gaining wealth and power",
            "Becoming a leader in society"
          ],
          "answer": "Attaining liberation (Moksha) and divine peace"
        },
        {
          "question": "How does a self-realized person perceive the world?",
          "options": [
            "As a place of endless suffering and pain",
            "With equal vision, seeing all beings as part of the Supreme",
            "As an illusion to be ignored",
            "As a battlefield where one must dominate others"
          ],
          "answer": "With equal vision, seeing all beings as part of the Supreme"
        },
        {
          "question": "According to Chapter 5, what brings true peace and happiness?",
          "options": [
            "Accumulation of wealth and luxury",
            "Detachment from sense enjoyment and surrender to Krishna",
            "Engaging in endless philosophical debates",
            "Strict fasting and physical austerities"
          ],
          "answer": "Detachment from sense enjoyment and surrender to Krishna"
        }
      ]
,
      
  },
  // Chptr 6
  {
    title: "Bhagavad Gita | Chapter 6 | Dhyāna-yoga",
    thumbnails: [chptr6],
    youtubeLink: "https://www.youtube.com/watch?v=kyV49nAx5jg&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=4",
    description:
      "The practice of meditation is described as a means to attain spiritual perfection, focusing the mind on Krishna and achieving true inner peace.",
      quiz: [  
{  
"question": "What is the central theme of Chapter 6 of the Bhagavad Gita?",  
"options": [  
"The importance of devotional service (Bhakti Yoga)",  
"The practice of meditation and self-discipline (Dhyana Yoga)",  
"The rejection of all worldly duties",  
"The supremacy of rituals over meditation"  
],  
"answer": "The practice of meditation and self-discipline (Dhyana Yoga)"  
},  
{  
"question": "According to Krishna, who is the greatest yogi?",  
"options": [  
"One who performs severe austerities",  
"One who studies the scriptures extensively",  
"One who meditates on Krishna with devotion",  
"One who renounces all action completely"  
],  
"answer": "One who meditates on Krishna with devotion"  
},  
{  
"question": "What does Krishna compare the mind of a yogi to?",  
"options": [  
"A flame of a lamp in a windless place",  
"A stormy ocean",  
"A fast-moving river",  
"A restless monkey"  
],  
"answer": "A flame of a lamp in a windless place"  
},  
{  
"question": "What is the role of self-discipline in yoga?",  
"options": [  
"It helps regulate one's lifestyle and control desires",  
"It is not necessary for spiritual progress",  
"It only applies to monks and renunciants",  
"It focuses solely on physical postures"  
],  
"answer": "It helps regulate one's lifestyle and control desires"  
},  
{  
"question": "What does Krishna say about a person who fails to complete their yogic practice in one lifetime?",  
"options": [  
"They lose all their spiritual progress",  
"They are reborn in a righteous family to continue their practice",  
"They must start from the beginning in their next life",  
"They will never attain liberation"  
],  
"answer": "They are reborn in a righteous family to continue their practice"  
}  
],
      
  },
  // Chptr 7
  {
    title: "Bhagavad Gita | Chapter 7 | Knowledge of the Absolute",
    thumbnails: [chptr7],
    youtubeLink: "https://www.youtube.com/watch?v=_7qJJrPhI-k&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=5",
    description:
      "Krishna explains both material and spiritual energies, revealing the supreme knowledge that leads to liberation.",

      quiz: [  
  {  
    "question": "What is the central theme of Chapter 7 of the Bhagavad Gita?",  
    "options": [  
      "The supremacy of knowledge and wisdom about Krishna",  
      "The importance of ritualistic sacrifices",  
      "The path of renunciation and isolation",  
      "The rejection of material duties"  
    ],  
    "answer": "The supremacy of knowledge and wisdom about Krishna"  
  },  
  {  
    "question": "According to Chapter 7, what are the two types of Krishna's energies?",  
    "options": [  
      "Material energy and spiritual energy",  
      "The energy of the sun and moon",  
      "The forces of good and evil",  
      "The energy of creation and destruction"  
    ],  
    "answer": "Material energy and spiritual energy"  
  },  
  {  
    "question": "Which four types of people approach Krishna for devotion?",  
    "options": [  
      "The intelligent, the strong, the wealthy, and the famous",  
      "The distressed, the curious, the wealth-seekers, and the wise",  
      "The yogis, the ascetics, the warriors, and the priests",  
      "The renunciates, the householders, the teachers, and the students"  
    ],  
    "answer": "The distressed, the curious, the wealth-seekers, and the wise"  
  },  
  {  
    "question": "Why do some people worship demigods instead of Krishna?",  
    "options": [  
      "Because Krishna grants them the ability to do so",  
      "Because demigod worship leads to ultimate liberation",  
      "Because Krishna is difficult to reach",  
      "Because the demigods are supreme beings"  
    ],  
    "answer": "Because Krishna grants them the ability to do so"  
  },  
  {  
    "question": "What happens to those who worship demigods?",  
    "options": [  
      "They attain the eternal spiritual world",  
      "They go to the planets of the demigods but do not attain liberation",  
      "They become equal to Krishna",  
      "They cease to exist after death"  
    ],  
    "answer": "They go to the planets of the demigods but do not attain liberation"  
  }  
],    
  },
  // Chptr 8
  {
    title: "Bhagavad Gita | Chapter 8 | Attaining the Supreme",
    thumbnails: [chptr8],
    youtubeLink: "https://www.youtube.com/watch?v=yMXejSgZ2OU&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=6",
    description:
      "Krishna describes the process of leaving the material world and attaining the supreme spiritual abode.",
      quiz: [
  {
    "question": "What is the central theme of Chapter 8 of the Bhagavad Gita?",
    "options": [
      "The process of attaining Krishna at the time of death",
      "The importance of performing sacrifices",
      "The superiority of meditation over devotion",
      "The necessity of renouncing all duties"
    ],
    "answer": "The process of attaining Krishna at the time of death"
  },
  {
    "question": "What does Krishna say about a person’s thoughts at the time of death?",
    "options": [
      "They determine the person’s next birth",
      "They have no impact on the soul",
      "They lead to immediate liberation",
      "They only matter for those who practice yoga"
    ],
    "answer": "They determine the person’s next birth"
  },
  {
    "question": "According to Chapter 8, what are the two paths a soul can take after death?",
    "options": [
      "The path of light (Uttarayana) and the path of darkness (Dakshinayana)",
      "The path of truth and the path of illusion",
      "The path of karma and the path of renunciation",
      "The path of meditation and the path of sacrifice"
    ],
    "answer": "The path of light (Uttarayana) and the path of darkness (Dakshinayana)"
  },
  {
    "question": "What is the ultimate destination of one who attains Krishna?",
    "options": [
      "They merge into Brahman",
      "They go to the moon planet",
      "They reach Krishna’s eternal spiritual abode",
      "They are reborn as kings or sages"
    ],
    "answer": "They reach Krishna’s eternal spiritual abode"
  },
  {
    "question": "What does Krishna advise Arjuna to do to ensure liberation?",
    "options": [
      "Always remember Krishna and engage in devotional service",
      "Abandon all worldly activities and live in solitude",
      "Perform severe austerities and rituals",
      "Sacrifice wealth and possessions to the demigods"
    ],
    "answer": "Always remember Krishna and engage in devotional service"
  }
],
      
  },
  // Chptr 9 left
  {
    title: "Bhagavad Gita | Chapter 9 | The Most Confidential Knowledge",
    thumbnails: [chptr1],
    youtubeLink: "https://www.youtube.com/watch?v=EbczwD6PA6c&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=15",
    description:
      "Krishna reveals the most confidential knowledge: the power of devotion and the benefits of surrendering completely to Him.",

      quiz: [
  {
    "question": "What is the central theme of Chapter 9 of the Bhagavad Gita?",
    "options": [
      "The science of war and strategies",
      "Karma yoga and renunciation",
      "The most confidential knowledge of devotion and God’s supreme position",
      "Arjuna’s doubts about family duties"
    ],
    "answer": "The most confidential knowledge of devotion and God’s supreme position"
  },
  {
    "question": "How does Lord Krishna describe Himself in Chapter 9?",
    "options": [
      "As a neutral observer of the universe",
      "As the supreme cause of all creation and the maintainer and destroyer of all",
      "As one among the devas",
      "As a friend and charioteer"
    ],
    "answer": "As the supreme cause of all creation and the maintainer and destroyer of all"
  },
  {
    "question": "What kind of devotion does Krishna emphasize in this chapter?",
    "options": [
      "Devotion mixed with rituals and austerities",
      "Devotion based on scholarly learning",
      "Pure, unmotivated and uninterrupted devotional service",
      "Devotion through meditation only"
    ],
    "answer": "Pure, unmotivated and uninterrupted devotional service"
  },
  {
    "question": "According to Krishna, who can attain Him?",
    "options": [
      "Only sages and scholars",
      "One who performs Vedic sacrifices",
      "Anyone who is devoted to Him with a pure heart",
      "Only those who take sannyasa"
    ],
    "answer": "Anyone who is devoted to Him with a pure heart"
  },
  {
    "question": "What promise does Krishna make in Chapter 9 for His devotees?",
    "options": [
      "He will give them fame and wealth",
      "He will ensure their victory in all battles",
      "He will deliver them from all sinful reactions and protect them",
      "He will grant them mystical powers"
    ],
    "answer": "He will deliver them from all sinful reactions and protect them"
  }
]
      
  },
  // Chptr 10 left
  {
    title: "Bhagavad Gita | Chapter 10 | The Opulence of the Absolute",
    thumbnails: [chptr2],
    youtubeLink: "https://www.youtube.com/watch?v=Oh4k75gXPNw",
    description:
      "Krishna describes His divine manifestations and omnipresence, showing how everything emanates from Him.",
      quiz: [
  {
    "question": "What is the main theme of Chapter 10 of the Bhagavad Gita?",
    "options": [
      "The art of war and strategy",
      "Renunciation of worldly pleasures",
      "The divine opulences of Lord Krishna",
      "Meditation techniques for spiritual growth"
    ],
    "answer": "The divine opulences of Lord Krishna"
  },
  {
    "question": "How does Krishna describe the origin of all beings in Chapter 10?",
    "options": [
      "They evolved from nature",
      "They are independent entities",
      "They all emanate from Him",
      "They were created by Brahma alone"
    ],
    "answer": "They all emanate from Him"
  },
  {
    "question": "What does Krishna declare about those who know Him as the source of all?",
    "options": [
      "They will attain fame and power",
      "They will merge into Brahman",
      "They worship Him with all their hearts",
      "They give up all material duties"
    ],
    "answer": "They worship Him with all their hearts"
  },
  {
    "question": "In this chapter, what does Arjuna say about Krishna’s divinity?",
    "options": [
      "That Krishna is a great sage",
      "That Krishna is an avatar of Indra",
      "That Krishna is the Supreme Personality of Godhead, the source of everything",
      "That Krishna is his friend and charioteer only"
    ],
    "answer": "That Krishna is the Supreme Personality of Godhead, the source of everything"
  },
  {
    "question": "What is Krishna’s vibhuti (divine opulence) among rivers?",
    "options": [
      "Yamuna",
      "Saraswati",
      "Ganga",
      "Ocean"
    ],
    "answer": "Ganga"
  }
]

      
  },
  // Chptr 11 left
  {
    title: "Bhagavad Gita | Chapter 11 | The Universal Form",
    thumbnails: [chptr3],
    youtubeLink: "https://www.youtube.com/watch?v=-E8HjB05V5E&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=16",
    description:
      "Krishna grants Arjuna divine vision, revealing His magnificent universal form, demonstrating His supreme power.",

      quiz: [
  {
    "question": "What does Krishna grant Arjuna in Chapter 11 to see His universal form?",
    "options": [
      "A divine telescope",
      "Special divine eyes",
      "A vision through meditation",
      "A mirror of truth"
    ],
    "answer": "Special divine eyes"
  },
  {
    "question": "What is Arjuna’s initial reaction after seeing Krishna’s universal form?",
    "options": [
      "He is joyful and starts dancing",
      "He is confused and indifferent",
      "He is fearful and overwhelmed",
      "He bows in gratitude"
    ],
    "answer": "He is fearful and overwhelmed"
  },
  {
    "question": "What does Krishna's universal form contain?",
    "options": [
      "Only the Pandavas and Kauravas",
      "All demigods and living beings in creation",
      "Weapons and chariots only",
      "Just a bright light"
    ],
    "answer": "All demigods and living beings in creation"
  },
  {
    "question": "Why does Arjuna ask Krishna to return to His original form?",
    "options": [
      "He cannot understand the universal form",
      "He wants to fight again",
      "He misses Krishna’s friendly and sweet nature",
      "He wants to show it to others"
    ],
    "answer": "He misses Krishna’s friendly and sweet nature"
  },
  {
    "question": "What lesson does Krishna impart at the end of Chapter 11?",
    "options": [
      "Only through sacrifices can one know Him",
      "One can see Him only through yogic powers",
      "Devotion is the only way to understand and attain Him",
      "Fear is necessary for respect"
    ],
    "answer": "Devotion is the only way to understand and attain Him"
  }
]

      
  },
  // Chptr 12 left
  {
    title: "Bhagavad Gita | Chapter 12 | Devotional Service",
    thumbnails: [chptr4],
    youtubeLink: "https://www.youtube.com/watch?v=uxOerQyC2D0&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=17",
    description:
      "Krishna highlights the superiority of Bhakti-yoga, devotion, over other paths and describes the qualities of a true devotee.",
      quiz: [
  {
    "question": "What is the main theme of Chapter 12 of the Bhagavad Gita?",
    "options": [
      "The duties of a warrior",
      "The path of knowledge",
      "The superiority of devotional service (bhakti yoga)",
      "The science of renunciation"
    ],
    "answer": "The superiority of devotional service (bhakti yoga)"
  },
  {
    "question": "What kind of devotee does Krishna say is most dear to Him?",
    "options": [
      "One who performs strict austerities",
      "One who studies the scriptures deeply",
      "One who worships the impersonal Brahman",
      "One who serves Him with love and devotion"
    ],
    "answer": "One who serves Him with love and devotion"
  },
  {
    "question": "According to Krishna, what is easier for the human mind to focus on?",
    "options": [
      "The impersonal aspect of God",
      "The concept of emptiness",
      "The personal form of Krishna",
      "The laws of karma"
    ],
    "answer": "The personal form of Krishna"
  },
  {
    "question": "Which quality is **not** mentioned by Krishna as that of a dear devotee?",
    "options": [
      "Free from envy",
      "Steady in happiness and distress",
      "Proud and boastful",
      "Forgiving"
    ],
    "answer": "Proud and boastful"
  },
  {
    "question": "What does Krishna recommend for those who cannot fix their mind on Him?",
    "options": [
      "Practice severe penances",
      "Worship the demigods instead",
      "Engage in work and offer its results to Him",
      "Renounce everything and go to the forest"
    ],
    "answer": "Engage in work and offer its results to Him"
  }
]

      
  },
  // Chptr 13
  {
    title: "Bhagavad Gita | Chapter 13 | Nature, the Enjoyer and Consciousness",
    thumbnails: [chptr5],
    youtubeLink: "https://www.youtube.com/watch?v=3zTyiSKyryk&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=7",
    description:
      "Krishna explains the distinction between the physical body, the soul, and the Supreme Lord as the ultimate controller.",

      quiz: [
  {
    "question": "What is the central theme of Chapter 13 of the Bhagavad Gita?",
    "options": [
      "The distinction between the body and the soul",
      "The importance of performing Vedic rituals",
      "The supremacy of karma over knowledge",
      "The rejection of all material activities"
    ],
    "answer": "The distinction between the body and the soul"
  },
  {
    "question": "What does 'Kshetra' (field) refer to in Chapter 13?",
    "options": [
      "The material body and the physical world",
      "The supreme spiritual abode",
      "The ultimate destination of the soul",
      "The actions performed in devotion"
    ],
    "answer": "The material body and the physical world"
  },
  {
    "question": "Who is the 'Kshetrajna' (knower of the field) according to Krishna?",
    "options": [
      "The individual soul and the Supersoul",
      "The priests who perform sacrifices",
      "Only those who engage in yoga",
      "The demigods who control nature"
    ],
    "answer": "The individual soul and the Supersoul"
  },
  {
    "question": "What is true knowledge (Jnana) according to Chapter 13?",
    "options": [
      "Understanding the difference between the body and the soul",
      "Mastery of material sciences and rituals",
      "Accumulating wealth and power",
      "Performing sacrifices for material benefits"
    ],
    "answer": "Understanding the difference between the body and the soul"
  },
  {
    "question": "What is the ultimate goal of knowledge (Jnana) in Chapter 13?",
    "options": [
      "Liberation from material bondage and realization of Krishna",
      "Attaining material success through intelligence",
      "Gaining power over the forces of nature",
      "Achieving mystic perfections and supernatural abilities"
    ],
    "answer": "Liberation from material bondage and realization of Krishna"
  }
],
      
  },
  // Chptr 14
  {
    title: "Bhagavad Gita | Chapter 14 | The Three Modes of Material Nature",
    thumbnails: [chptr5],
    youtubeLink: "https://www.youtube.com/watch?v=qZ7ROEY_mpw&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=8",
    description:
      "Krishna describes the three gunas (modes) of material nature—goodness, passion, and ignorance—and how they influence human behavior.",
      quiz: [
  {
    "question": "What is the central theme of Chapter 14 of the Bhagavad Gita?",
    "options": [
      "The three modes of material nature (Gunas)",
      "The supremacy of renunciation",
      "The necessity of Vedic sacrifices",
      "The rejection of all forms of action"
    ],
    "answer": "The three modes of material nature (Gunas)"
  },
  {
    "question": "What are the three modes (Gunas) of material nature described in Chapter 14?",
    "options": [
      "Sattva (goodness), Rajas (passion), and Tamas (ignorance)",
      "Karma, Jnana, and Bhakti",
      "Truth, illusion, and detachment",
      "Creation, preservation, and destruction"
    ],
    "answer": "Sattva (goodness), Rajas (passion), and Tamas (ignorance)"
  },
  {
    "question": "Which mode of nature is characterized by knowledge and harmony?",
    "options": [
      "Sattva (goodness)",
      "Rajas (passion)",
      "Tamas (ignorance)",
      "None of the above"
    ],
    "answer": "Sattva (goodness)"
  },
  {
    "question": "What is the effect of Rajas (passion) on a person?",
    "options": [
      "It binds one through desires and attachments",
      "It leads to deep wisdom and peace",
      "It causes complete detachment from worldly affairs",
      "It results in complete inactivity and darkness"
    ],
    "answer": "It binds one through desires and attachments"
  },
  {
    "question": "How can one transcend the three modes of material nature?",
    "options": [
      "By engaging in unmotivated devotional service to Krishna",
      "By performing severe austerities",
      "By mastering all forms of meditation",
      "By accumulating material knowledge"
    ],
    "answer": "By engaging in unmotivated devotional service to Krishna"
  }
],
      
  },
  // Chptr 15
  {
    title: "Bhagavad Gita | Chapter 15 | The Yoga of the Supreme Person",
    thumbnails: [chptr6],
    youtubeLink: "https://www.youtube.com/watch?v=VVcIHbpkRE0&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=9",
    description:
      "Krishna explains the eternal and imperishable nature of the soul, emphasizing devotion as the highest goal.",
      quiz: [
  {
    "question": "What is the central theme of Chapter 15 of the Bhagavad Gita?",
    "options": [
      "The eternal and perishable aspects of existence",
      "The superiority of Vedic sacrifices",
      "The importance of performing karma yoga",
      "The rejection of all spiritual practices"
    ],
    "answer": "The eternal and perishable aspects of existence"
  },
  {
    "question": "What metaphor does Krishna use to describe the material world in Chapter 15?",
    "options": [
      "An inverted banyan tree",
      "A vast ocean of suffering",
      "A chariot driven by the mind",
      "A battlefield of dualities"
    ],
    "answer": "An inverted banyan tree"
  },
  {
    "question": "According to Chapter 15, who is the ultimate refuge and controller of both the material and spiritual worlds?",
    "options": [
      "Krishna, the Supreme Personality of Godhead",
      "The demigods who rule over different planets",
      "The impersonal Brahman",
      "The yogis who renounce all action"
    ],
    "answer": "Krishna, the Supreme Personality of Godhead"
  },
  {
    "question": "What must one do to cut down the deeply rooted banyan tree of material existence?",
    "options": [
      "Use the weapon of detachment and surrender to Krishna",
      "Perform countless yajnas and rituals",
      "Gain mastery over all the scriptures",
      "Accumulate vast material wealth"
    ],
    "answer": "Use the weapon of detachment and surrender to Krishna"
  },
  {
    "question": "What does Krishna declare Himself to be in Chapter 15?",
    "options": [
      "The source of the Vedas, the Supersoul, and the maintainer of all beings",
      "A mere witness to the actions of all living beings",
      "A messenger of the Supreme Truth",
      "A manifestation of impersonal energy"
    ],
    "answer": "The source of the Vedas, the Supersoul, and the maintainer of all beings"
  }
],
  },
  // Chptr 16
  {
    title: "Bhagavad Gita | Chapter 16 | The Divine and Demoniac Natures",
    thumbnails: [chptr7],
    youtubeLink: "https://www.youtube.com/watch?v=yYIjSSiCJ9Y&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=10",
    description:
      "Krishna differentiates between divine and demoniac qualities, urging Arjuna to cultivate righteousness.",

      quiz: [
        {
          "question": "What are the two types of natures described in Chapter 16 of the Bhagavad Gita?",
          "options": ["Material and Spiritual", "Divine and Demoniac", "Temporary and Eternal", "Knowledgeable and Ignorant"],
          "answer": "Divine and Demoniac"
        },
        {
          "question": "Which of the following is NOT a quality of a person with divine nature?",
          "options": ["Fearlessness", "Truthfulness", "Hypocrisy", "Self-control"],
          "answer": "Hypocrisy"
        },
        {
          "question": "What is the ultimate destination of people with demoniac nature, according to Chapter 16?",
          "options": ["Heavenly planets", "Liberation", "Repeated birth in lower species", "Union with Brahman"],
          "answer": "Repeated birth in lower species"
        },
        {
          "question": "Which scripture does Lord Krishna recommend following to determine what is to be done and what is not to be done?",
          "options": ["Vedas", "Upanishads", "Bhagavatam", "Puranas"],
          "answer": "Vedas"
        },
        {
          "question": "What is the primary cause of demoniac nature, as mentioned in Chapter 16?",
          "options": ["Attachment and love", "Pride, arrogance, and anger", "Selfless service", "Compassion and humility"],
          "answer": "Pride, arrogance, and anger"
        }
      ],      
      
  },
  // Chptr 17
  {
    title: "Bhagavad Gita | Chapter 17 | The Divisions of Faith",
    thumbnails: [chptr8],
    youtubeLink: "https://www.youtube.com/watch?v=HgH_jk9hUvI&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=11",
    description:
      "Krishna categorizes faith based on the modes of nature and explains their influence on worship, food, and sacrifice.",

      quiz: [
        {
          "question": "According to Chapter 17, what determines the nature of a person's faith?",
          "options": ["Their birth", "Their karma", "Their food habits", "Their modes of nature (guna)"],
          "answer": "Their modes of nature (guna)"
        },
        {
          "question": "Which of the following is associated with people in the mode of goodness (sattva)?",
          "options": ["Worship of demigods", "Worship of ghosts and spirits", "Worship of wealth and power", "Worship of themselves"],
          "answer": "Worship of demigods"
        },
        {
          "question": "What type of food is preferred by those in the mode of passion (rajas)?",
          "options": ["Sweet, juicy, and nourishing food", "Spicy, bitter, and excessively salty food", "Stale and impure food", "Sacrificial food"],
          "answer": "Spicy, bitter, and excessively salty food"
        },
        {
          "question": "People in the mode of ignorance (tamas) perform sacrifices in what manner?",
          "options": ["With proper faith and scriptural guidance", "Without following any scriptural injunctions", "For the welfare of all beings", "With selfless devotion"],
          "answer": "Without following any scriptural injunctions"
        },
        {
          "question": "What three words are recommended in Chapter 17 for purifying acts of sacrifice, charity, and austerity?",
          "options": ["Hare Krishna Rama", "Aum Tat Sat", "Om Namah Shivaya", "Sat Chit Ananda"],
          "answer": "Aum Tat Sat"
        }
      ],      
  },
  // Chptr 18
  {
    title: "Bhagavad Gita | Chapter 18 | Conclusion – The Perfection of Renunciation",
    thumbnails: [chptr1],
    youtubeLink: "https://www.youtube.com/watch?v=RLGzoFNw6z0&list=PLR-fuKFgHArBfgAifzvbELlqA8qmuyeOp&index=12",
    description:
      "Krishna concludes His teachings, summarizing all paths and emphasizing surrender to Him as the ultimate goal of life.",
      quiz: [
        {
          "question": "What are the three types of renunciation (tyaga) mentioned in Chapter 18?",
          "options": ["Sattvic, Rajasic, and Tamasic", "Material, Spiritual, and Mixed", "Karmic, Bhaktic, and Jnanic", "Personal, Universal, and Transcendental"],
          "answer": "Sattvic, Rajasic, and Tamasic"
        },
        {
          "question": "Which type of renunciation is considered the purest according to Lord Krishna?",
          "options": ["Renouncing all actions", "Renouncing only selfish desires while performing duty", "Renouncing knowledge", "Renouncing food and shelter"],
          "answer": "Renouncing only selfish desires while performing duty"
        },
        {
          "question": "What are the five factors responsible for any action, as mentioned in Chapter 18?",
          "options": [
            "Mind, body, soul, destiny, and action",
            "Desire, intention, effort, result, and time",
            "Place, performer, senses, endeavor, and Supersoul",
            "Food, intelligence, prayer, faith, and blessings"
          ],
          "answer": "Place, performer, senses, endeavor, and Supersoul"
        },
        {
          "question": "Which type of work is performed without attachment and selfish desires?",
          "options": ["Work in the mode of goodness (sattva)", "Work in the mode of passion (rajas)", "Work in the mode of ignorance (tamas)", "Forbidden work (vikarma)"],
          "answer": "Work in the mode of goodness (sattva)"
        },
        {
          "question": "What does Krishna declare as the highest duty in Chapter 18?",
          "options": [
            "Engaging in rituals and sacrifices",
            "Worshiping many demigods",
            "Surrendering fully to Him",
            "Meditating in solitude"
          ],
          "answer": "Surrendering fully to Him"
        }
      ],
      },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoThumbnailIndexes, setVideoThumbnailIndexes] = useState(
    videos.map(() => 0)
  );
  const [quizScores, setQuizScores] = useState({});
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  
  const handleQuizOpen = (video, event) => {
    event.stopPropagation();
    setSelectedQuiz(video);
    setShowQuiz(true);
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setUserAnswer(null);
  };
  
  const handleQuizSubmit = () => {
    const isCorrect = userAnswer === selectedQuiz.quiz[currentQuestionIndex].answer;
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
    }
    if (currentQuestionIndex < selectedQuiz.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer(null);
    } else {
      setQuizScores((prevScores) => ({
        ...prevScores,
        [selectedQuiz.title]: correctCount + (isCorrect ? 1 : 0),
      }));
      setShowQuiz(false);
      setUserAnswer(null);
    }
  };

  const generateCertificate = async () => {
    const userName = prompt("Enter your name for the certificate:");
    if (!userName) return;

    const doc = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: "a4",
    });

    // Load Image
    const img = new Image();
    img.src = certificateTemplate;
    img.onload = () => {
      doc.addImage(img, "JPEG", 0, 0, 297, 210); // A4 landscape size

      // Adding Name (Centered)
      doc.setFont("helvetica","normal");
      doc.setFontSize(25);
      doc.text(userName, 148, 90, { align: "center" });

      // Adding Date (Bottom Right)
      const today = new Date().toLocaleDateString("en-GB");
      doc.setFontSize(16);
      doc.text(today, 215, 185);

      // Save PDF
      doc.save(`Certificate_${userName}.pdf`);
    };
  };

  const handleCertificateClick = () => {
    if (Object.keys(quizScores).length < 14) {
        alert("⚠️ Please complete all quizzes and lectures before generating the certificate!");
    } else {
        generateCertificate();
        setCertificateGenerated(true);
    }
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">Spiritual Movie</h1>
      </header>

      {/* Mission Section */}
      <section className="mission-section">
        <h2 className="mission-title">Our Spiritual Mission</h2>
        <p className="mission-text">
        At Spiritual Movie, we are dedicated to bringing uplifting and enlightening content to young audiences. 
    Our platform aims to spark curiosity, inspire spiritual growth, and nurture positive values through engaging movie experiences.

        </p>
      </section>

      <section className="videos-section">
        <h2 className="videos-title">Featured Videos</h2>
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.title} className="video-card">
              <img
                src={video.thumbnails[0]}
                alt={video.title}
                className="video-thumbnail"
                onClick={() => window.open(video.youtubeLink, "_blank")}
              />
              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.description}</p>
              <button className=" btn-quiz " onClick={(e) => handleQuizOpen(video, e)}>Take Quiz</button>
              {quizScores[video.title] && <p className="quiz-feedback">Correct Answer!</p>}
            </div>
          ))}
        </div>
        </section>

{showQuiz && selectedQuiz && (
  <div className={`quiz-modal ${showQuiz ? "show" : ""}`}>
          <div className="quiz-content">
            <button className="close-button" onClick={() => setShowQuiz(false)}>×</button>
            <h4>{selectedQuiz.quiz[currentQuestionIndex].question}</h4>
            {selectedQuiz.quiz[currentQuestionIndex].options.map((option) => (
              <button 
                key={option} 
                onClick={() => setUserAnswer(option)} 
                className={userAnswer === option ? "selected" : ""}
              >
                {option}
              </button>
            ))}
            <button onClick={handleQuizSubmit} disabled={!userAnswer}>
              {currentQuestionIndex < selectedQuiz.quiz.length - 1 ? "Next" : "Submit Quiz"}
            </button>
          </div>
        </div>
      )}

      <section className="scriptures">
      
  <div className="certificate-section">
    <button 
                className="generate-certificate" 
        onClick={handleCertificateClick} 
        disabled={certificateGenerated }

    >
        Generate Certificate
    </button>
    {certificateGenerated && <p>🎉 Certificate has been generated! Check your downloads. 📜</p>}
  </div>
      
  <h2 className="scriptures-title">
    Scriptures are embedded with Lord Hari's pastimes in His various forms.
  </h2>
  <p className="scriptures-text">
    These sacred scriptures narrate the divine pastimes of Lord Hari, guiding us through transcendental knowledge and devotion.
  </p>
  
  <div className="scriptures-container">
    <div className="scripture-card">
      <img src= {img8} alt="Srimad Bhagavatam" className="scripture-img"/>
      <h3>Srimad Bhagavatam</h3>
      <p className="scripture-author">Shrila Krishna Dvaipayana Vedavyasa</p>
      <p className="scripture-verses">Verses: 18,000</p>
      <p className="scripture-description">
        This Bhāgavata Purāṇa is as brilliant as the sun, and it has arisen just after the departure of Lord Kṛṣṇa...
      </p>
    </div>

    <div className="scripture-card">
      <img src={img7} alt="Ramayana" className="scripture-img"/>
      <h3>Ramayana</h3>
      <p className="scripture-author">Maharishi Valmiki Muni</p>
      <p className="scripture-verses">Verses: 24,000</p>
      <p className="scripture-description">
        He who listens every day to this oldest epic, composed by the sage Vālmīki, is completely freed of sin...
      </p>
    </div>

    <div className="scripture-card">
      <img src={img6} alt="Bhagavad Gita" className="scripture-img"/>
      <h3>Srimad Bhagavad Gita</h3>
      <p className="scripture-author">Shrila Krishna Dvaipayana Vedavyasa</p>
      <p className="scripture-verses">Verses: 700</p>
      <p className="scripture-description">
        The Mahābhārata tells of events leading up to the present Age of Kali. Lord Krishna spoke Bhagavad-gītā to Arjuna...
      </p>
    </div>

    <div className="scripture-card">
      <img src={img5} alt="Mahabharat" className="scripture-img"/>
      <h3>Mahabharat</h3>
      <p className="scripture-author">Shrila Krishna Dvaipayana Vedavyasa</p>
      <p className="scripture-verses">Verses: 110,000</p>
      <p className="scripture-description">
        It narrates the struggle between cousins in the Kurukshetra War and contains philosophical and devotional material...
      </p>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Spiritual Movie. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
