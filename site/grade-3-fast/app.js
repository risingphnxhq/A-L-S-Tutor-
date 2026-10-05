(() => {
  'use strict';

  const SKILLS = [
    {
      id: 'stories-poems', subject: 'reading', icon: '📚', category: 'Reading Prose and Poetry',
      title: 'Stories, poems & clues',
      goal: 'Use details to understand characters, theme, point of view, and poetry.',
      standards: 'ELA.3.R.1.1–1.4',
      model: { prompt: 'Nia looked at the dark clouds and packed the picnic blanket away.', text: 'What can we figure out? The author does not say “Nia expects rain.” We use the clue—dark clouds—and Nia’s action—putting the blanket away—to make a careful inference.' },
      steps: [
        ['Notice a detail', 'Find an important word or action in the story.'],
        ['Connect the clue', 'Ask what that detail suggests. Use what the text says.'],
        ['Explain your thinking', 'Say, “I think ___ because the text says ___.”']
      ],
      tip: 'A theme is a lesson the story teaches. It is more than one word like “friendship.”',
      questions: [
        { id:'r1-1', passage:'Jamal practiced his flute each afternoon. The first song sounded squeaky. He kept trying. At the school concert, Jamal played the whole song smoothly.', prompt:'What lesson does this story mostly teach?', choices:['Practice can help us improve.','Music is always easy.','Concerts should be outside.','Flutes are made of wood.'], answer:0, hint:'Look at what Jamal did after the song sounded squeaky.', why:'Jamal kept practicing and improved. That supports the lesson that effort can help us get better.' },
        { id:'r1-2', passage:'“I tucked the tiny seed in the ground,\nThen waited for green to appear.\nA little rain, a little sun,\nAnd a sprout was finally here.”', prompt:'Which detail shows that the speaker waited for the seed to grow?', choices:['“A little rain”','“Then waited for green to appear”','“in the ground”','“a little sun”'], answer:1, hint:'Find the line that uses the word “waited.”', why:'The line “Then waited for green to appear” directly tells us the speaker waited.' },
        { id:'r1-3', passage:'Milo carried the heavy box up the stairs. “I can do it,” he said, even though he stopped twice to rest.', prompt:'What can you infer about Milo?', choices:['He is trying hard.','He does not like boxes.','He is going downstairs.','He finished before he began.'], answer:0, hint:'What does Milo do even when the box is difficult?', why:'He continues carrying the box and says he can do it, so we can infer that he is trying hard.' },
        { id:'r1-4', passage:'“The moon was a silver coin above the quiet town.”', prompt:'What does “a silver coin” help the reader picture?', choices:['The moon looks round and shiny.','The moon is money.','The town is made of silver.','The moon is small enough to hold.'], answer:0, hint:'This is a comparison that helps you imagine how the moon looks.', why:'The author compares the moon to a shiny, round coin so we can picture its appearance.' },
        { id:'r1-5', passage:'Lena told the story: “I opened the garden gate and saw a tiny orange kitten.”', prompt:'Who is telling this part of the story?', choices:['Lena, who is in the story','A scientist outside the story','The kitten','A reader who was not there'], answer:0, hint:'Look for the word “I.” Who would say “I opened the gate”?', why:'The narrator uses “I” and describes an event she experienced, so Lena is telling the story.' }
      ]
    },
    {
      id: 'informational-text', subject: 'reading', icon: '🔎', category: 'Reading Informational Text',
      title: 'Facts, main idea & text clues',
      goal: 'Find the central idea, use text features, and notice why an author wrote a text.',
      standards: 'ELA.3.R.2.1–2.4',
      model: { prompt: 'A heading says “How Bees Help Plants.” The paragraph explains that bees move pollen as they visit flowers.', text: 'The heading tells the topic. The paragraph explains what bees do and why it matters. Together, these clues help us state the central idea in our own words.' },
      steps: [
        ['Name the topic', 'Ask, “Who or what is this part mostly about?”'],
        ['Gather key details', 'Choose details that explain the topic. Skip small details that do not support it.'],
        ['Say the big idea', 'Put the details together in one clear sentence.']
      ],
      tip: 'A heading tells what a section is about. A caption explains a picture or diagram.',
      questions: [
        { id:'r2-1', passage:'Sea turtles travel long distances through the ocean. Female sea turtles return to sandy beaches to lay eggs. After the eggs hatch, the tiny turtles move toward the water.', prompt:'What is the central idea?', choices:['Sea turtles have a life cycle connected to the ocean and beaches.','All beaches have the same sand.','Tiny turtles can fly.','Sea turtles only live in one small pond.'], answer:0, hint:'Which answer brings together the turtle’s travel, eggs, and hatchlings?', why:'The details explain how sea turtles travel, lay eggs on beaches, and begin life near the water.' },
        { id:'r2-2', passage:'A passage explains how to plant a bean seed. The steps are numbered: 1. Fill a cup with soil. 2. Place the seed in the soil. 3. Add water.', prompt:'Why did the author number the steps?', choices:['To show the order for planting','To tell how many cups are blue','To describe a character','To compare two seeds'], answer:0, hint:'What do readers need to know to follow directions?', why:'Numbering makes the order clear so readers know what to do first, next, and last.' },
        { id:'r2-3', passage:'“Our park needs more trees. Trees give shade and homes to birds. Please help us plant three trees this Saturday!”', prompt:'What is the author mostly trying to do?', choices:['Persuade readers to help plant trees','Explain how birds fly','Tell a make-believe story','Describe how to build a house'], answer:0, hint:'The author says “Please help us.” What action do they want?', why:'The author gives reasons and asks readers to help, so the purpose is to persuade.' },
        { id:'r2-4', passage:'A diagram shows a butterfly changing from egg to caterpillar to chrysalis to adult butterfly.', prompt:'Which text feature would help explain the order in the diagram?', choices:['Arrows between each stage','A list of unrelated jokes','A title about ocean waves','A map of the school'], answer:0, hint:'What can show which stage comes next?', why:'Arrows connect the stages and show the order of the butterfly life cycle.' },
        { id:'r2-5', passage:'A writer says, “Bring a reusable bottle. It keeps drinks cool and makes less trash.”', prompt:'Which detail supports the writer’s opinion that reusable bottles are helpful?', choices:['They make less trash.','Bottles can have many colors.','Some drinks are sweet.','The writer went outside.'], answer:0, hint:'Choose a reason that supports the opinion.', why:'Making less trash is a reason the writer gives for why reusable bottles are helpful.' }
      ]
    },
    {
      id: 'vocabulary-summary', subject: 'reading', icon: '💡', category: 'Reading Across Genres & Vocabulary',
      title: 'Word meaning & text connections',
      goal: 'Use context, word parts, summaries, and details from two texts.',
      standards: 'ELA.3.R.3.1–3.3 · ELA.3.V.1.2–1.3',
      model: { prompt: 'The trail was slippery, so Rosa stepped carefully around the muddy puddle.', text: 'We may not know “slippery.” The words “carefully” and “muddy puddle” are nearby clues. They suggest the trail could be slick and easy to slide on.' },
      steps: [
        ['Read around the word', 'Look at the whole sentence and the sentence before or after it.'],
        ['Try a word part', 'A prefix or suffix can change a word. “Re-” can mean again; “-ful” can mean full of.'],
        ['Check the meaning', 'Swap in your meaning. Does the sentence still make sense?']
      ],
      tip: 'A summary tells the most important ideas briefly. It does not retell every little detail.',
      questions: [
        { id:'r3-1', passage:'The puppy was timid. It hid behind the chair when visitors came inside.', prompt:'What does “timid” most likely mean?', choices:['Shy or easily frightened','Very hungry','Loud and noisy','Ready to swim'], answer:0, hint:'What does the puppy do when visitors arrive?', why:'Hiding when visitors arrive is a clue that timid means shy or easily frightened.' },
        { id:'r3-2', passage:'The word “replay” begins with the prefix “re-.”', prompt:'What does “re-” usually mean in “replay”?', choices:['Again','Before','Not','Under'], answer:0, hint:'If you replay a song, what do you do to it?', why:'The prefix “re-” means again. To replay a song is to play it again.' },
        { id:'r3-3', passage:'Text A says butterflies drink nectar from flowers. Text B says bees carry pollen between flowers.', prompt:'What do both texts have in common?', choices:['They explain how animals interact with flowers.','They say all insects live underwater.','They describe how to grow a tree.','They tell the same story about a garden.'], answer:0, hint:'Look for the topic that appears in both texts.', why:'Both texts describe an animal and its connection to flowers.' },
        { id:'r3-4', passage:'Rain tapped on the roof all night. In the morning, puddles covered the path, and the grass sparkled with drops.', prompt:'Which is the best short summary?', choices:['Rain fell overnight and left water around in the morning.','The roof was made of metal.','The grass was cut in the morning.','Someone walked on the path.'], answer:0, hint:'Choose the answer that includes the main events without adding a new idea.', why:'The best summary gives the important idea—rain fell, leaving puddles and water—briefly.' },
        { id:'r3-5', passage:'“The classroom was a beehive of activity,” the author writes as students work on projects.', prompt:'What does “a beehive of activity” mean here?', choices:['The room is busy with people working.','There are real bees in the classroom.','The students are outdoors.','The classroom is quiet and empty.'], answer:0, hint:'Think about what students doing projects might make the room feel like.', why:'The phrase is figurative. It means the classroom is very busy, like a buzzing beehive.' }
      ]
    },
    {
      id: 'number-sense', subject: 'math', icon: '🔢', category: 'Number Sense and Additive Reasoning',
      title: 'Place value, add & subtract',
      goal: 'Read numbers, compare place values, round, and add or subtract carefully.',
      standards: 'MA.3.NSO.1 · MA.3.NSO.2.1 · MA.3.AR.1.2',
      model: { prompt: 'Find 368 + 257.', text: 'Line up the ones, tens, and hundreds. Add one place at a time. If a place makes 10 or more, regroup 10 of those units into the next place.' },
      steps: [
        ['Ones', '8 + 7 = 15 ones. Write 5 ones and regroup 1 ten.'],
        ['Tens', '6 tens + 5 tens + 1 regrouped ten = 12 tens. Write 2 tens and regroup 1 hundred.'],
        ['Hundreds', '3 hundreds + 2 hundreds + 1 regrouped hundred = 6 hundreds. The sum is 625.']
      ],
      tip: 'Estimate first. 368 is about 400 and 257 is about 300, so a sum near 700 makes sense.',
      questions: [
        { id:'m1-1', prompt:'In 4,582, what is the value of the digit 5?', choices:['5','50','500','5,000'], answer:2, hint:'The 5 is in the hundreds place.', why:'The 5 is in the hundreds place, so its value is 5 hundreds, or 500.' },
        { id:'m1-2', prompt:'Round 6,347 to the nearest hundred.', choices:['6,300','6,400','6,000','6,350'], answer:0, hint:'Look at the tens digit. Is it 5 or greater?', why:'The tens digit is 4, so keep the hundreds digit the same. 6,347 rounds to 6,300.' },
        { id:'m1-3', prompt:'What is 425 + 189?', choices:['514','604','614','624'], answer:2, hint:'Add the ones first: 5 + 9. Regroup if needed.', why:'425 + 189 = 614. One way: 425 + 100 = 525, +80 = 605, +9 = 614.' },
        { id:'m1-4', prompt:'What is 702 − 368?', choices:['334','344','434','366'], answer:0, hint:'Subtract place by place. You will need to regroup across the zero.', why:'702 − 368 = 334. Check: 368 + 334 = 702.' },
        { id:'m1-5', prompt:'Which number is greater?', choices:['5,091','5,109','They are equal','There is not enough information'], answer:1, hint:'Compare from left to right. Thousands are the same; compare hundreds next.', why:'Both have 5 thousands. 5,109 has 1 hundred while 5,091 has 0 hundreds, so 5,109 is greater.' }
      ]
    },
    {
      id: 'multiplication-division', subject: 'math', icon: '✖️', category: 'Number Sense and Multiplicative Reasoning',
      title: 'Multiplication & division',
      goal: 'Think in equal groups, arrays, multiplication facts, and related division facts.',
      standards: 'MA.3.AR.1.1 · MA.3.AR.2 · MA.3.NSO.2',
      model: { prompt: 'There are 4 bags with 6 apples in each bag. How many apples?', text: 'Equal groups can be shown as addition or multiplication. Four groups of six means 6 + 6 + 6 + 6, which is the same as 4 × 6.' },
      steps: [
        ['Find the groups', 'There are 4 bags, so there are 4 equal groups.'],
        ['Find how many in each', 'Each group has 6 apples.'],
        ['Multiply', '4 groups × 6 in each group = 24 apples.']
      ],
      tip: 'Multiplication and division are related. If 4 × 6 = 24, then 24 ÷ 6 = 4.',
      questions: [
        { id:'m2-1', prompt:'There are 7 rows with 5 chairs in each row. How many chairs are there?', choices:['12','30','35','75'], answer:2, hint:'This is 7 equal groups of 5. Use 7 × 5.', why:'7 × 5 = 35, so there are 35 chairs.' },
        { id:'m2-2', prompt:'What is 48 ÷ 6?', choices:['6','7','8','9'], answer:2, hint:'What number times 6 equals 48?', why:'8 × 6 = 48, so 48 ÷ 6 = 8.' },
        { id:'m2-3', prompt:'Ava has 27 stickers. She shares them equally among 3 friends. How many stickers does each friend get?', choices:['8','9','24','30'], answer:1, hint:'Share 27 into 3 equal groups: 27 ÷ 3.', why:'27 ÷ 3 = 9. Each friend gets 9 stickers.' },
        { id:'m2-4', prompt:'Which equation matches 6 groups of 4?', choices:['6 + 4','6 × 4','6 − 4','6 ÷ 4'], answer:1, hint:'Equal groups can be represented with multiplication.', why:'Six equal groups of four are written as 6 × 4.' },
        { id:'m2-5', prompt:'A baker puts 8 muffins on each tray. How many muffins are on 4 trays?', choices:['12','24','32','48'], answer:2, hint:'There are 4 equal groups of 8 muffins.', why:'4 × 8 = 32 muffins.' }
      ]
    },
    {
      id: 'fractions', subject: 'math', icon: '🍕', category: 'Fractional Reasoning',
      title: 'Fractions & number lines',
      goal: 'Name equal parts, locate fractions, and compare fractions using a model.',
      standards: 'MA.3.FR.1 · MA.3.FR.2',
      model: { prompt: 'Which is greater: 3/8 or 5/8?', text: 'Imagine two same-sized sandwiches, each cut into 8 equal pieces. The pieces have the same size, so compare how many pieces you have: 5 pieces is more than 3.' },
      steps: [
        ['Check the whole', 'Both fractions describe same-size wholes.'],
        ['Check the parts', 'Both denominators are 8, so the pieces are the same size.'],
        ['Compare the number of pieces', '5 eighths is greater than 3 eighths, so 5/8 > 3/8.']
      ],
      tip: 'A fraction names equal parts. On a number line, fractions farther to the right are greater.',
      questions: [
        { id:'m3-1', prompt:'A shape is split into 4 equal parts. Three parts are shaded. What fraction is shaded?', choices:['1/4','3/4','4/3','1/3'], answer:1, hint:'The bottom number tells the total equal parts. The top number tells shaded parts.', why:'3 of the 4 equal parts are shaded, so the fraction is 3/4.' },
        { id:'m3-2', prompt:'Which fraction is greater?', choices:['2/6','5/6','They are equal','Not enough information'], answer:1, hint:'The denominators match. Compare the numerators.', why:'Both are sixths. Five sixths is greater than two sixths.' },
        { id:'m3-3', prompt:'Which fraction is equal to one half?', choices:['1/3','2/4','3/4','4/6'], answer:1, hint:'Picture a whole split into 4 equal pieces. Half would be how many pieces?', why:'Two out of four equal parts is one half, so 2/4 = 1/2.' },
        { id:'m3-4', prompt:'On a number line from 0 to 1 split into 4 equal jumps, what is the second mark after 0?', choices:['1/4','2/4','3/4','4/4'], answer:1, hint:'Each jump is one fourth. Count two jumps from zero.', why:'Two jumps of 1/4 land at 2/4.' },
        { id:'m3-5', prompt:'A pizza is cut into 8 equal slices. Eli eats 3. What fraction is left?', choices:['3/8','5/8','8/3','1/8'], answer:1, hint:'Start with 8 slices. If 3 are eaten, how many remain?', why:'8 − 3 = 5 slices remain, so 5/8 of the pizza is left.' }
      ]
    },
    {
      id: 'geometry-measure-data', subject: 'math', icon: '📐', category: 'Geometry, Measurement & Data',
      title: 'Shapes, measuring & data',
      goal: 'Use shape attributes, measure or solve simple problems, and read data displays.',
      standards: 'MA.3.GR · MA.3.M · MA.3.DP',
      model: { prompt: 'A rectangle is 5 units long and 3 units wide. What is its area?', text: 'Area counts the square units covering the inside. Picture 5 columns of 3 squares each. The rows make 5 × 3 = 15 square units.' },
      steps: [
        ['Choose what to measure', 'Area covers the inside. Perimeter measures the distance around.'],
        ['Use the side lengths', 'For a rectangle, multiply length by width to find area.'],
        ['Add the correct unit', '5 × 3 = 15 square units. “Square units” tells us this is area.']
      ],
      tip: 'For perimeter, add the lengths around the shape. For area, count square units inside.',
      questions: [
        { id:'m4-1', prompt:'A rectangle is 7 units long and 2 units wide. What is its area?', choices:['9 square units','14 square units','18 units','14 units around'], answer:1, hint:'Area is length × width.', why:'7 × 2 = 14, so the area is 14 square units.' },
        { id:'m4-2', prompt:'A square has sides that are each 4 inches long. What is its perimeter?', choices:['8 inches','12 inches','16 inches','16 square inches'], answer:2, hint:'Perimeter is the distance around. Add all 4 sides.', why:'4 + 4 + 4 + 4 = 16 inches.' },
        { id:'m4-3', prompt:'Practice starts at 2:15 and ends at 2:45. How long is the practice?', choices:['15 minutes','30 minutes','45 minutes','1 hour'], answer:1, hint:'Count forward from 2:15 to 2:45.', why:'From :15 to :45 is 30 minutes.' },
        { id:'m4-4', passage:'Books read: Monday 3 · Tuesday 5 · Wednesday 2', prompt:'How many books were read on Monday and Tuesday together?', choices:['5','7','8','10'], answer:2, hint:'Add the Monday amount and the Tuesday amount.', why:'3 + 5 = 8 books.' },
        { id:'m4-5', prompt:'Which shape has 3 sides?', choices:['Triangle','Rectangle','Pentagon','Hexagon'], answer:0, hint:'“Tri” means three.', why:'A triangle has 3 sides.' }
      ]
    }
  ];

  const STORAGE_KEY = 'rpe.ale.grade3.practice.v1';
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const state = loadState();
  let currentSubject = 'reading';
  let currentSkill = null;
  let quiz = null;
  let lastWeakSkill = null;

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return { checks: Array.isArray(saved.checks) ? saved.checks : [], questions: saved.questions || {} };
    } catch { return { checks: [], questions: {} }; }
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* Private browsing may block storage; tutoring still works. */ }
  }
  function show(id) {
    $$('.screen').forEach(screen => screen.classList.toggle('active', screen.id === id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function skillsFor(subject) { return SKILLS.filter(skill => skill.subject === subject); }
  function getSkill(id) { return SKILLS.find(skill => skill.id === id); }
  function questionById(id) { return SKILLS.flatMap(skill => skill.questions).find(question => question.id === id); }
  function skillRecord(skillId) {
    return Object.values(state.questions).filter(item => item.skillId === skillId);
  }

  function renderSubject(subject) {
    currentSubject = subject;
    const isReading = subject === 'reading';
    $('#subject-eyebrow').textContent = isReading ? 'READING SKILLS' : 'MATH SKILLS';
    $('#subject-title').textContent = isReading ? 'Choose a Reading skill' : 'Choose a Math skill';
    $('#subject-intro').textContent = isReading
      ? 'Start with a tiny lesson. Then try three questions with hints whenever you need them.'
      : 'See one worked example, follow each step, then try three questions.';
    $('#skill-grid').replaceChildren(...skillsFor(subject).map(skill => {
      const card = document.createElement('article');
      card.className = 'skill-card';
      const icon = document.createElement('span'); icon.className = 'skill-icon'; icon.textContent = skill.icon; icon.setAttribute('aria-hidden','true');
      const copy = document.createElement('div');
      const title = document.createElement('h2'); title.textContent = skill.title;
      const description = document.createElement('p'); description.textContent = skill.goal;
      const tags = document.createElement('small'); tags.textContent = `${skill.category} · ${skill.standards}`;
      copy.append(title, description, tags);
      const start = document.createElement('button'); start.className = 'button primary'; start.dataset.action = 'open-skill'; start.dataset.skill = skill.id; start.textContent = 'Learn this skill →';
      const record = skillRecord(skill.id);
      let status = null;
      if (record.length) { status = document.createElement('span'); status.className = 'skill-status'; status.textContent = `Practiced ${record.length} ${record.length === 1 ? 'question' : 'questions'} · ${record.filter(item => item.solved).length} solved`; }
      card.append(icon, copy, start);
      if (status) card.append(status);
      return card;
    }));
    show('subject');
  }

  function renderLesson(skill) {
    currentSkill = skill.id;
    $('#lesson-subject').textContent = `${skill.subject === 'reading' ? 'READING' : 'MATH'} · ${skill.category}`;
    $('#lesson-title').textContent = skill.title;
    $('#lesson-goal').textContent = skill.goal;
    const model = $('#lesson-model');
    model.replaceChildren();
    const label = document.createElement('h2'); label.textContent = skill.subject === 'reading' ? 'Let’s think it through' : 'Let’s work it out';
    const prompt = document.createElement('p'); prompt.className = 'model-prompt'; prompt.textContent = skill.model.prompt;
    const explanation = document.createElement('p'); explanation.className = 'model-text'; explanation.textContent = skill.model.text;
    model.append(label, prompt, explanation);
    const steps = $('#lesson-steps');
    steps.replaceChildren(...skill.steps.map(([heading, body], index) => {
      const row = document.createElement('div'); row.className = 'step-row';
      const number = document.createElement('span'); number.className = 'step-number'; number.textContent = String(index + 1);
      const text = document.createElement('p');
      const strong = document.createElement('strong'); strong.textContent = `${heading}. `;
      text.append(strong, document.createTextNode(body)); row.append(number, text); return row;
    }));
    $('#lesson-tip').textContent = `Remember: ${skill.tip}`;
    show('lesson');
  }

  function selectQuestions(mode, subject, skillId) {
    if (mode === 'skill') {
      const skill = getSkill(skillId);
      return [skill.questions[0], skill.questions[2], skill.questions[4]];
    }
    if (mode === 'subject') {
      const subjectSkills = skillsFor(subject);
      if (subject === 'reading') return [subjectSkills[0].questions[0], subjectSkills[1].questions[0], subjectSkills[2].questions[0], subjectSkills[2].questions[1], subjectSkills[2].questions[3]];
      return [...subjectSkills.map(skill => skill.questions[0]), subjectSkills[0].questions[3]];
    }
    const reading = skillsFor('reading');
    const math = skillsFor('math');
    if (mode === 'diagnostic') return [...reading.map(skill => skill.questions[0]), ...math.map(skill => skill.questions[0])];
    return [reading[0].questions[0], reading[0].questions[1], reading[1].questions[0], reading[1].questions[1], reading[2].questions[0], math[0].questions[0], math[0].questions[1], math[1].questions[0], math[2].questions[0], math[3].questions[0]];
  }

  function beginQuiz(mode, subject = null, skillId = null) {
    const questions = selectQuestions(mode, subject, skillId);
    quiz = { mode, subject, skillId, questions, index: 0, attempts: {}, solved: 0, firstTry: 0, misses: {}, usedHint: false };
    $('#quiz-label').textContent = mode === 'skill' ? '3-QUESTION SKILL PRACTICE' : mode === 'subject' ? `${subject === 'reading' ? 'READING' : 'MATH'} · SHORT CHECK` : mode === 'diagnostic' ? 'GENTLE STARTING CHECK' : 'SHORT MIXED CHECK';
    $('#quiz-title').textContent = mode === 'skill' ? getSkill(skillId).title : 'One question at a time';
    $('#quiz-feedback').className = 'feedback';
    show('quiz');
    renderQuestion();
  }

  function renderQuestion() {
    const q = quiz.questions[quiz.index];
    $('#quiz-count').textContent = `${quiz.index + 1} of ${quiz.questions.length}`;
    $('#quiz-progress').style.width = `${(quiz.index / quiz.questions.length) * 100}%`;
    const content = $('#quiz-content'); content.replaceChildren();
    if (q.passage) { const passage = document.createElement('div'); passage.className = 'passage'; passage.textContent = q.passage; content.append(passage); }
    const prompt = document.createElement('div'); prompt.className = 'quiz-question'; prompt.textContent = q.prompt; content.append(prompt);
    const choices = document.createElement('div'); choices.className = 'choices'; choices.setAttribute('role','group'); choices.setAttribute('aria-label','Answer choices');
    q.choices.forEach((choice, index) => {
      const button = document.createElement('button'); button.className = 'choice'; button.dataset.choice = String(index); button.textContent = `${String.fromCharCode(65 + index)}. ${choice}`;
      choices.append(button);
    });
    content.append(choices);
    $('#quiz-feedback').textContent = 'Choose the answer that makes the most sense. You can change your mind.';
    $('#quiz-feedback').className = 'feedback';
    $('#quiz-actions').replaceChildren();
    const hint = document.createElement('button'); hint.className = 'button light'; hint.dataset.action = 'hint'; hint.textContent = 'Give me a hint';
    const next = document.createElement('button'); next.className = 'button primary hidden'; next.dataset.action = 'next-question'; next.textContent = quiz.index === quiz.questions.length - 1 ? 'See what I learned' : 'Next question →';
    $('#quiz-actions').append(hint, next);
  }

  function recordAttempt(question, solved, wasFirstTry) {
    const skill = SKILLS.find(s => s.questions.some(q => q.id === question.id));
    const existing = state.questions[question.id] || { skillId: skill.id, attempts: 0, solved: false, firstTry: false };
    existing.attempts += 1;
    existing.solved = existing.solved || solved;
    existing.firstTry = existing.firstTry || wasFirstTry;
    existing.skillId = skill.id;
    state.questions[question.id] = existing;
    saveState();
  }

  function chooseAnswer(choice) {
    if (!quiz) return;
    const question = quiz.questions[quiz.index];
    const attempts = quiz.attempts[question.id] || 0;
    if (quiz.answered) return;
    const right = choice === question.answer;
    quiz.attempts[question.id] = attempts + 1;
    const buttons = $$('.choice');
    buttons.forEach((button, index) => {
      if (index === question.answer) button.classList.add('correct');
      if (index === choice && !right) button.classList.add('incorrect');
    });
    if (right) {
      quiz.answered = true;
      quiz.solved += 1;
      if (attempts === 0) quiz.firstTry += 1;
      quiz.misses[question.id] = false;
      recordAttempt(question, true, attempts === 0);
      $('#quiz-feedback').textContent = `That’s right. ${question.why}`;
      $('#quiz-feedback').className = 'feedback good';
      buttons.forEach(button => { button.disabled = true; });
      $$('.quiz-actions [data-action="next-question"]')[0].classList.remove('hidden');
      return;
    }
    quiz.misses[question.id] = true;
    quiz.usedHint = true;
    recordAttempt(question, false, false);
    if (attempts === 0) {
      $('#quiz-feedback').textContent = `Not quite. That’s okay. Here’s a clue: ${question.hint} Try another answer.`;
      $('#quiz-feedback').className = 'feedback hint';
      buttons.forEach((button, index) => { if (index === choice) button.disabled = true; });
      return;
    }
    quiz.answered = true;
    $('#quiz-feedback').textContent = `Let’s learn from it. ${question.why}`;
    $('#quiz-feedback').className = 'feedback try';
    buttons.forEach(button => { button.disabled = true; });
    $$('.quiz-actions [data-action="next-question"]')[0].classList.remove('hidden');
  }

  function finishQuiz() {
    if (!quiz) return;
    $('#quiz-progress').style.width = '100%';
    state.checks.push({ mode: quiz.mode, subject: quiz.subject || 'mixed', count: quiz.questions.length, solved: quiz.solved, firstTry: quiz.firstTry, at: new Date().toISOString() });
    saveState();
    const missed = quiz.questions.filter(question => quiz.misses[question.id]);
    lastWeakSkill = missed.length ? SKILLS.find(skill => skill.questions.some(question => question.id === missed[0].id)) : null;
    $('#results-title').textContent = quiz.mode === 'diagnostic' ? 'You found a good starting point!' : 'You kept going!';
    $('#results-message').textContent = `You answered ${quiz.solved} of ${quiz.questions.length} correctly, with ${quiz.firstTry} on the first try. Every question gave us a clue about what to practice next.`;
    const subjects = quiz.mode === 'mixed' || quiz.mode === 'diagnostic'
      ? [{ name: 'Reading', questions: quiz.questions.filter(q => SKILLS.find(s => s.questions.includes(q)).subject === 'reading') }, { name: 'Math', questions: quiz.questions.filter(q => SKILLS.find(s => s.questions.includes(q)).subject === 'math') }]
      : [{ name: quiz.subject === 'reading' ? 'Reading' : 'Math', questions: quiz.questions }];
    const breakdown = $('#result-breakdown');
    breakdown.replaceChildren(...subjects.map(subject => {
      const solved = subject.questions.filter(q => !quiz.misses[q.id]).length;
      const chip = document.createElement('div'); chip.className = 'result-chip';
      const small = document.createElement('small'); small.textContent = subject.name;
      const strong = document.createElement('strong'); strong.textContent = `${solved} of ${subject.questions.length} worked out`;
      chip.append(small, strong); return chip;
    }));
    const next = $('#result-next'); next.replaceChildren();
    if (lastWeakSkill) {
      const lead = document.createElement('strong'); lead.textContent = `A helpful next step: ${lastWeakSkill.title}.`;
      const copy = document.createTextNode(' Let’s review its example, then try a few similar questions.');
      next.append(lead, copy);
    } else {
      next.textContent = 'You worked through these questions. Choose another skill to keep your learning growing.';
    }
    quiz = null;
    show('results');
  }

  function renderProgress() {
    const answered = Object.values(state.questions);
    const practiced = SKILLS.filter(skill => skillRecord(skill.id).length);
    $('#progress-sessions').textContent = String(state.checks.length);
    $('#progress-answers').textContent = String(answered.length);
    $('#progress-skills').textContent = String(practiced.length);
    const list = $('#progress-list');
    if (!practiced.length) {
      const empty = document.createElement('p'); empty.className = 'empty-progress'; empty.textContent = 'Your practice will show up here after you try a lesson or check.';
      list.replaceChildren(empty); show('progress'); return;
    }
    list.replaceChildren(...practiced.map(skill => {
      const rows = skillRecord(skill.id); const solved = rows.filter(row => row.solved).length; const percent = Math.round(solved / skill.questions.length * 100);
      const row = document.createElement('div'); row.className = 'progress-row';
      const title = document.createElement('div'); const strong = document.createElement('strong'); strong.textContent = skill.title; const small = document.createElement('small'); small.textContent = skill.subject === 'reading' ? 'Reading' : 'Math'; title.append(strong, small);
      const bar = document.createElement('div'); bar.className = 'progress-bar'; const fill = document.createElement('span'); fill.style.width = `${percent}%`; bar.append(fill);
      const score = document.createElement('span'); score.className = 'progress-score'; score.textContent = `${solved}/${rows.length}`;
      row.append(title, bar, score); return row;
    }));
    show('progress');
  }

  document.addEventListener('click', event => {
    const choice = event.target.closest('[data-choice]');
    if (choice) { chooseAnswer(Number(choice.dataset.choice)); return; }
    const button = event.target.closest('[data-action]');
    if (!button) return;
    const action = button.dataset.action;
    if (action === 'home') show('home');
    if (action === 'browse') renderSubject('reading');
    if (action === 'subject') renderSubject(button.dataset.subject);
    if (action === 'back-subject') renderSubject(currentSubject);
    if (action === 'open-skill') renderLesson(getSkill(button.dataset.skill));
    if (action === 'start-check') beginQuiz('diagnostic');
    if (action === 'mixed-check') beginQuiz('mixed');
    if (action === 'subject-check') beginQuiz('subject', currentSubject);
    if (action === 'lesson-practice') beginQuiz('skill', currentSubject, currentSkill);
    if (action === 'hint' && quiz) {
      const q = quiz.questions[quiz.index]; quiz.usedHint = true;
      $('#quiz-feedback').textContent = `Hint: ${q.hint}`;
      $('#quiz-feedback').className = 'feedback hint';
    }
    if (action === 'next-question' && quiz) {
      if (quiz.index + 1 < quiz.questions.length) { quiz.index += 1; quiz.answered = false; renderQuestion(); }
      else finishQuiz();
    }
    if (action === 'quiz-exit') {
      if (window.confirm('Leave this check? Your questions will not be counted as a finished check.')) show('home');
    }
    if (action === 'review-next') {
      if (lastWeakSkill) { currentSubject = lastWeakSkill.subject; renderLesson(lastWeakSkill); }
      else renderSubject('reading');
    }
    if (action === 'progress') renderProgress();
    if (action === 'clear-progress') {
      if (window.confirm('Clear the practice saved in this browser on this device?')) {
        state.checks = []; state.questions = {}; saveState(); renderProgress();
      }
    }
  });

  window.ALEGrade3 = Object.freeze({ skills: SKILLS, beginQuiz, renderProgress, get progress() { return state; } });
})();
