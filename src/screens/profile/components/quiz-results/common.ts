import { QuizCategoryName } from 'src/common/enums';

const QUIZ_TEXT = {
  [QuizCategoryName.ANALYTICAl]: {
    type: 'Analytical',
    general:
      'Analyticals are task-oriented and unassertive. They are concerned with analytical processes and are persistent,systematic problem solvers. They can also be seen as aloof, picky, and critical. Analyticals are very securityconscious and have a high need to be right, leading them to an over reliance on data collection. In their questfor data, they tend to ask many questions about specifics. Their actions and decisions tend to be slow andextremely cautious, but they will rarely miss a deadline. Although they are great problem solvers, Analyticalscould be better decision-makers. Analyticals tend to be perfectionists, serious, and orderly. They focus on the details and the process of work,and become irritated by surprises and “glitches.” Their theme is, “Notice my efficiency” and their emphasis is oncompliance and working within existing guidelines to promote quality in products or service. Analyticals like organization and structure, and dislike too much involvement with other people. They workslowly and precisely by themselves, are time-disciplined, and prefer an intellectual work environment.Analyticals tend to be critical of their own performance. They tend to be skeptical and like to see things inwriting. Analyticals’ primary strengths are their accuracy, dependability, independence, follow-through, andorganization. Their primary weaknesses are their procrastination and conservative natures, which promote theirtendency to be picky and over-cautious. Occupations that they tend to gravitate toward are accounting,engineering, computer programming, the hard sciences (chemistry, physics, and math) systems analysis, andarchitecture.',
    relationship: {
      text1: '• Support their organized, thoughtful approach',
      text2: '• Demonstrate through actions rather than words',
      text3: '• List advantages and disadvantages of any plan',
      text4: '• Provide solid, tangible, factual evidence',
      text5: '• Provide guarantees that actions won’t backfire',
    },
    managing: {
      text1:
        '• Motivate: Appeal to their need to be accurate and to their logical approach to things.',
      text2:
        '• Correct: Specify the exact behavior and outline how you would like to see the behavior changed. Establish checkpoints and timelines.',
      text3:
        '• Compliment: Praise their efficiency, though processes, organization, persistence, and accuracy.',
      text4:
        '• Delegate: Take time to answer all their questions about structure and guidance. The more they understand the details, the more likely they will be to complete the task properly. Be sure to establish deadlines.',
      text5:
        '• Counsel: Describe the process that you plan to follow. Outline how that process will produce the results they seek. Ask questions to help them give the right information. Let them show how much they know.',
    },
  },
  [QuizCategoryName.AMIABLE]: {
    type: 'Amiable',
    general:
      'Amiables are people-oriented, relatively unassertive, warm, and reliable. Amiables are sometimes seen byothers as compliant, softhearted, and acquiescent. Amiables seek security. They take action and make decisions slowly. This pace stems from their desire to avoidrisky or unknown situations. Before they take action or make a decision, they have to know how other peoplefeel about their decision. Amiables tend to be the most people-oriented of all the four styles. Having close, friendly, personal, first –namerelationships with others is one of their most important objectives. They dislike interpersonal conflict so muchthat they sometimes say what they think other people want to hear. They have natural counseling skills and aresupportive. Their theme is, “Notice how well-liked I am. Amiables tend to be good, active listeners and generally develop relationships with people who are also goodlisteners. As a result, Amiables have strong networks of people who are willing to be mutually supportive. Youoften feel good just being with an Amiable. Amiables focus on getting acquainted and building trust. They are irritated by pushy, aggressive behavior. Theyquestion, “How will it affect my personal circumstances and the camaraderie of the group?” They arecooperative, steady workers, and excellent team players.',
    relationship: {
      text1: '• Support their feelings by showing personal interest',
      text2: '• Assume that they’ll take everything personally',
      text3: '• When you disagree, discuss personal feelings',
      text4: '• Allow them time to trust you',
      text5: '• Move along in an informal, slow manner',
    },
    managing: {
      text1:
        '• Motivate: Appeal to their need to be accurate and to their logical approach to things.',
      text2:
        '• Correct: Specify the exact behavior and outline how you would like to see the behavior changed. Establish checkpoints and timelines.',
      text3:
        '• Compliment: Praise their efficiency, though processes, organization, persistence, and accuracy.',
      text4:
        '• Delegate: Take time to answer all their questions about structure and guidance. The more they understand the details, the more likely they will be to complete the task properly. Be sure to establish deadlines.',
      text5:
        '• Counsel: Describe the process that you plan to follow. Outline how that process will produce the results they seek. Ask questions to help them give the right information. Let them show how much they know.',
    },
  },
  [QuizCategoryName.DRIVER]: {
    type: 'Driver',
    general:
      'Dominant Drivers are task-oriented and assertive. They exhibit firmness in their relationships with others, areoriented toward productivity and goals, and are concerned with bottom line results. Drivers accept challenges, take authority, and go head first into solving problems. They tend to exhibit greatadministrative and operational skills and work quickly and impressively on their own. They tend to be cool,independent, and competitive with others, especially in a business environment. Drivers try to shape theirenvironment to overcome obstacle en route to their accomplishments. They demand maximum freedom tomanage themselves and others, and use their leadership skills to become winners. Their weak traits include stubbornness, impatience, and toughness. Drivers tend to take control of others andhave a low tolerance for their feelings, attitudes, and inadequacies. They are fast-paced and are impatient withdelays. It is not unusual for a Driver to call you and, without saying hello, launch right into the conversation:“You’ve got to be kidding; the shipment from Hong Kong will kill us…, by the way, this is Jack.” When otherpeople cannot keep up with their speed, they view them as incompetent. The Driver’s motto might be, “I want it done right and I want it done now,” or, “I want it done yesterday!” Theylike to juggle three things at once, and when they feel comfortable with those three things, they pick up afourth.',
    relationship: {
      text1: '• Support their goals and objectives',
      text2: '• Keep your relationship business-like',
      text3: '• If you disagree, argue facts-not personal feelings',
      text4: '• Recognize their ideas-not them personally',
      text5:
        '• To influence decisions, provide alternative actions with brief supporting analysis',
    },
    managing: {
      text1:
        '• Motivate: Provide options and clearly describe the probabilities of success in achieving goals.',
      text2:
        '• Correct: Describe what results are desired. Show them the gap between actual and desired. Suggest the improvement that is needed and establish a time when they will get back to you.',
      text3:
        '• Compliment: Praise their achievements, upward mobility, and leadership potential.',
      text4:
        '• Delegate: Give them the bottom line and then get out of their way. To improve efficiency give parameters, guidelines, and deadlines.',
      text5:
        '• Counsel: Stick to the facts. Engage them by talking about the desired results, and then discuss their concerns. Focus on tasks more than feelings and ask them how they would solve the problem.Support their goals and objectives Keep your relationship business-like If you disagree, argue facts-not personal feelings Recognize their ideas-not them personally To influence decisions, provide alternative actions with brief supporting analysis Be precise, efficient, and well-organized.',
    },
  },
  [QuizCategoryName.EXPRESSIVE]: {
    type: 'Expressive',
    general:
      'Expressives are people-oriented and assertive exhibiting characteristics such as animation, intuitiveness, andliveliness. However, they can also be viewed as manipulative, impetuous, and excitable when displayingbehavior inappropriate to the situation. Expressives are fast-paced. Their actions and decisions are spontaneous, and are seldom concerned about factsand details, which they try to avoid as much as possible. Their motto is “Don’t confuse me with the facts.” Thisdisregard for details sometimes prompts them to exaggerate and generalize facts and figures. It also gives thema built-in excuse when they are wrong: “I didn’t have all the facts!” They are more comfortable with “bestguesstimates” than with exact data. Expressives’ primary strengths are their enthusiasm, persuasiveness, and delightful sociability. Their primaryweaknesses are getting involved in too many things, impatience, and their short attention spans, which causethem to become bored easily. Expressives are idea persons. They have the ability to get others caught up in their dreams because of theirgood persuasive skills. They influence others and shape their environment by bringing others into alliance toaccomplish results. They seek approval and recognition for their accomplishments and achievements, and havea dynamic ability to think quickly on their feet.',
    relationship: {
      text1: '• Support their opinions, ideas, and dreams',
      text2: '• Don’t hurry the discussion',
      text3: '• Try not to argue-you seldom can win',
      text4: '• Agree on the specifics',
      text5: '• Summarize in writing who is to do what, where, when',
    },
    managing: {
      text1:
        '• Motivate: Offer them incentives and testimonials. Show them how they can look good in the eyes of others',
      text2:
        '• Compliment: Praise their appearance, creative ideas, persuasiveness, and charisma.',
      text3:
        '• Counsel: Allow them plenty of opportunity to talk about things that are bothering them. Listen for facts and feelings. Many times Expressives merely need to “get something off their chest” and talking may solve the problem.',
      text4:
        '• Correct: Specify exactly what the problem happens to be and what behavior is required to eliminate the problem. Be sure you confirm in writing the agreed upon behavior changes.',
      text5:
        '• Delegate: Make sure you get clear agreement. Establish checkpoints so that there is not a long period between progress reports.',
    },
  },
};

export { QUIZ_TEXT };
