# A. L. S. Tutor User Guide

**Course:** Florida Mathematics for College Algebra, Course 1200710  
**Designed for:** Student and family use  
**Website:** https://alstutor.com

## 1. What A. L. S. Tutor does

A. L. S. Tutor is a supplemental learning system for a high-school student taking Florida Mathematics for College Algebra, Course 1200710. It provides guided lessons, step-by-step practice, spoken support, progress evidence, and a governed tutor for questions that require another explanation.

It does not replace the classroom teacher. The current assignment, teacher's notes, and classroom sequence should decide what topic to study first.

## 2. First-time setup

No student account is required.

1. Open `https://alstutor.com` on the device the student will normally use.
2. Select **Start here**.
3. Complete the short readiness check.
4. Review the suggested starting topic.
5. Open **Family dashboard** and set a realistic daily study goal.
6. Keep using the same browser and device when possible because progress is stored locally on that device.

Do not enter the student's full name, school, address, password, contact information, or other private details into the tutor.

## 3. Recommended daily routine

A focused session can follow this pattern:

1. **Start the study timer** in Family dashboard.
2. **Choose today's topic** from the teacher's assignment or the review recommendation.
3. **Open Lessons** and read the concept explanation.
4. **Reveal one worked step at a time** and explain aloud why it is valid.
5. **Open Practice** and work each problem on paper before entering an answer.
6. Use **Give me a hint** before requesting a complete solution.
7. Use **Study coach** for a short built-in reminder.
8. Use **AI tutor** when the exact problem or confusion is not resolved by the lesson and practice layers.
9. Finish the session and review the evidence in Family dashboard.

Thirty to sixty focused minutes is usually more useful than a long unfocused session. The student may stop earlier when concentration drops and resume later.

## 4. Navigation tabs

### Start here

Introduces the course, the five course emphasis areas, and the readiness check. Use it again whenever the student needs to restart or locate a foundation gap.

### My learning

Shows course topics, progress, the next suggested activity, and spaced-review items. The recommendation is guidance, not a grade.

### Lessons

Provides reviewed explanations and worked examples. Lessons teach one mathematical move at a time. The student should reveal a step, explain it in her own words, and reproduce the step on paper.

### Practice

Provides continuously available topic practice. It checks supported answers deterministically. A practice goal indicates sufficient evidence for that practice target; it is not a guarantee of total course mastery.

### Voice tutor

Reads built-in questions aloud and accepts spoken or typed responses where the browser supports speech recognition. Microphone use begins only when the student presses the talk button. Typing always remains available.

### Study coach

Provides built-in guidance for common questions such as choosing a first step, factoring, understanding function notation, and checking an answer. It works without consuming the limited conversational-AI allowance.

### AI tutor

Accepts a specific problem or question and explains the next step. The system first uses its local course-intelligence layer. Routine concept explanations and supported algebra patterns do not consume the Cloudflare AI allowance.

The bounded AI layer is used only when the question requires personalized interpretation that the local course engine cannot supply. The AI tutor does not grade work or record mastery.

### Family dashboard

Displays study time, recent practice, and topic activity recorded in the current browser. It helps a family see effort and learning without turning every session into a test.

### User guide

Provides the essential instructions from this document inside the application.

## 5. How the tutor teaches

The teaching cycle moves from understanding to symbols:

1. Connect the idea to a recognizable situation.
2. Draw or display a model, table, graph, or number line.
3. Let the student describe the relationship in ordinary language.
4. Identify the mathematical features and relationships.
5. Translate the reasoning into conventional symbols.
6. Ask the student to perform the next step.
7. Check the result and explain any error without shame.
8. Practice a similar problem independently.

The tutor maintains high expectations while giving the student enough support to reach them.

## 6. How to ask for help

A useful question includes:

- the complete problem;
- the step already attempted;
- the point where the student became confused.

Example:

> Solve `3(x - 2) + 4 = 16`. I distributed the 3 and got `3x - 6 + 4 = 16`. I do not know what to combine next.

Avoid sending only “I don't get it.” When the student is unsure how to explain the difficulty, she can say:

> Ask me one question at a time to find where I am stuck.

## 7. Hints and complete solutions

The normal sequence is:

1. Reminder of the governing rule.
2. Small hint about the next operation.
3. More specific hint or representation.
4. Another student attempt.
5. Complete worked solution after two supported attempts or when explicitly requested.
6. A check in the original problem.
7. A similar problem for independent practice.

Seeing a solution is not the same as learning it. After viewing a complete solution, the student should close or cover it and reproduce the reasoning independently.

## 8. The 36-week course plan

The course contains 36 instructional weeks, approximately 8.3 months of instruction and normally about nine calendar months after school breaks.

- **Weeks 1–9:** foundations, exponents, polynomials, and rational expressions.
- **Weeks 10–18:** equations, inequalities, and function foundations.
- **Weeks 19–27:** linear models, systems, piecewise functions, and quadratics.
- **Weeks 28–36:** exponential and logarithmic functions, composition, inverses, modeling, and cumulative review.

The plan is flexible. A student may spend longer on a prerequisite or follow the teacher's sequence instead.

## 9. Progress and mastery

The system records evidence such as:

- topics practiced;
- attempts and correct answers;
- hints used;
- study time;
- completed checkpoints;
- spaced-review dates.

One correct answer does not prove mastery. Strong evidence develops through supported success, independent success, transfer to a changed problem, and later retention.

## 10. AI allowance and cost protection

Most instruction is local and does not use generative AI. Lessons, practice, diagnostics, progress, reviewed explanations, and supported deterministic problem patterns continue without AI.

The conversational layer uses Cloudflare Workers AI under a bounded free configuration. It has:

- a hard shared daily model-request ceiling;
- a per-device/network rate limit;
- short message and response limits;
- no paid OpenAI API key;
- no paid fallback;
- fail-closed behavior when free capacity is unavailable.

The current hard model ceiling is shared across users; it is not a limit on local lessons, practice problems, or local course-intelligence questions.

## 11. Privacy

- Progress is stored in the current browser on the current device.
- Tutor chat remains in temporary browser memory and clears when the page refreshes.
- The application does not intentionally store AI chat transcripts.
- A recent conversation window is transmitted to Cloudflare only when the bounded AI layer is needed.
- Browser speech recognition may use the browser provider's speech service.
- Never include identifying or sensitive information in a math question.

## 12. Family support

Helpful family questions include:

- “What rule did you use?”
- “Why is that step allowed?”
- “How did you check the answer?”
- “Can you show the idea using a table, graph, or picture?”
- “Which earlier skill would make this easier?”

Avoid labeling the student as “bad at math.” Treat errors as information about the next skill to teach.

## 13. Troubleshooting

### Progress is missing

Confirm that the student is using the same device, browser, and browser profile. Clearing browser storage, using private browsing, or switching devices can remove or hide local progress.

### AI tutor says it is not connected

Continue with Lessons, Practice, Voice tutor, and Study coach. The essential curriculum remains available. The AI connection can be restored separately.

### AI allowance is exhausted

Use the local course-intelligence explanations, lessons, practice, and study coach. Do not purchase credits or enable a paid fallback merely to continue the session.

### Microphone does not work

Use a secure `https://` connection, check browser microphone permission, and confirm that speech recognition is supported. Type the response when voice input is unavailable.

### An explanation appears incorrect

Use deterministic Practice when the problem type is supported, check the result in the original problem, compare with the teacher's material, and report the confusing explanation to the family or system maintainer.

### The student is repeatedly stuck

Return to the readiness check or the prerequisite topic. Use a smaller-number example, a visual representation, and one operation at a time before returning to the original problem.

## 14. Safety boundary

A. L. S. Tutor is a supplemental mathematics tutor. It does not issue official grades, guarantee course passage, replace a licensed teacher, or make school placement decisions. Questions outside Mathematics for College Algebra and its prerequisites should be redirected to an appropriate source.
