(function (root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.ALSTutorLayered = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const CARDS = {
    foundation: {
      title: "Algebra foundations",
      patterns: [/order of operations/i, /fraction/i, /negative number/i, /like terms?/i, /distribut/i, /simplif/i],
      concrete: "Think of each expression as an instruction. Grouping symbols are sealed packages; handle those first, then powers, multiplication or division, and addition or subtraction.",
      model: "Write one legal change per line and mark the part that changed.",
      feature: "Ask: which terms are alike, which operation has priority, and what sign belongs to each number?",
      symbolic: "Only combine terms with the same variable part. Distribute to every term inside parentheses.",
      misconception: "A common error is combining unlike terms or ignoring a negative sign. Circle signs and underline like terms before calculating."
    },
    real: {
      title: "Exponents and radicals",
      patterns: [/exponent/i, /radical/i, /square root/i, /cube root/i, /power/i],
      concrete: "An exponent records repeated multiplication; a radical asks which repeated factor produced a number.",
      model: "Expand a small example, such as 2³ = 2·2·2, before applying a rule.",
      feature: "Check whether the bases match and whether the operation is multiplication, division, or a power of a power.",
      symbolic: "For like bases: multiply → add exponents; divide → subtract exponents; power of a power → multiply exponents.",
      misconception: "Exponent rules do not transfer unchanged to addition. x² + x³ cannot be combined as x⁵."
    },
    polynomials: {
      title: "Polynomials and factoring",
      patterns: [/polynomial/i, /factor/i, /trinomial/i, /zero product/i],
      concrete: "Factoring is packing an expanded expression back into multiplication—like finding the side lengths from an area.",
      model: "Use an area box or multiplication grid to connect factors with the expanded polynomial.",
      feature: "For x²+bx+c, seek two numbers whose product is c and sum is b.",
      symbolic: "x²+bx+c=(x+m)(x+n) when mn=c and m+n=b.",
      misconception: "Do not choose a pair using only the product; both the product and the sum must match."
    },
    rational: {
      title: "Rational expressions",
      patterns: [/rational expression/i, /algebraic fraction/i, /denominator/i, /excluded value/i],
      concrete: "A rational expression is a fraction whose pieces may be polynomials. The denominator can never be zero.",
      model: "Factor numerator and denominator completely, then cross out common factors—not terms.",
      feature: "Record excluded values from the original denominator before simplifying.",
      symbolic: "(ab)/(ac)=b/c when a≠0. Cancellation is division by the same nonzero factor.",
      misconception: "Terms joined by addition cannot be canceled. Factor the sum first if possible."
    },
    linear: {
      title: "Linear equations and inequalities",
      patterns: [/linear/i, /solve.*x/i, /equation/i, /inequal/i, /slope/i],
      concrete: "Treat an equation like a balanced scale: whatever changes on one side must also change on the other.",
      model: "Show one inverse operation on both sides per line and keep the equals signs aligned.",
      feature: "Undo addition or subtraction before multiplication or division; collect variable terms when they appear on both sides.",
      symbolic: "For ax+b=c, subtract b from both sides, then divide both sides by a.",
      misconception: "A term does not simply 'move and change sign.' The sign changes because the same inverse operation was applied to both sides."
    },
    equations: {
      title: "Rational, radical, exponential and logarithmic equations",
      patterns: [/radical equation/i, /logarith/i, /exponential equation/i, /extraneous/i],
      concrete: "Different equation families require different inverse operations, but every candidate must survive a check in the original equation.",
      model: "Name the equation family, state its restrictions, transform it, solve, then check.",
      feature: "Watch for zero denominators, negative radicands for even roots, and positive logarithm arguments.",
      symbolic: "Squaring and clearing denominators can create extraneous candidates; substitution decides which candidates are solutions.",
      misconception: "A value obtained after transforming an equation is only a candidate until it is checked in the original."
    },
    functions: {
      title: "Functions and graphs",
      patterns: [/function/i, /domain/i, /range/i, /f\s*\(/i, /graph/i],
      concrete: "A function is a dependable input-output rule: each allowed input receives exactly one output.",
      model: "Use an input-output table, then plot the ordered pairs and connect only when the context allows it.",
      feature: "Identify input, output, domain, range, intercepts, intervals of change, and any maximum or minimum.",
      symbolic: "f(3) means substitute 3 for every x in the rule; it does not mean f times 3.",
      misconception: "Keep parentheses around negative inputs before applying an exponent."
    },
    systems: {
      title: "Systems of equations",
      patterns: [/system of equations/i, /substitution/i, /elimination/i, /intersection/i],
      concrete: "A system asks where two conditions are true at the same time.",
      model: "Graph both relationships or organize substitution/elimination in aligned rows.",
      feature: "Choose substitution when a variable is isolated; choose elimination when coefficients cancel easily.",
      symbolic: "The solution is an ordered pair that makes every original equation true.",
      misconception: "Solving one equation is not enough. Check the ordered pair in both equations."
    },
    quadratics: {
      title: "Quadratic equations and functions",
      patterns: [/quadratic/i, /parabola/i, /vertex/i, /quadratic formula/i],
      concrete: "A quadratic models change whose rate also changes; its graph bends into a parabola.",
      model: "Connect standard, factored, and vertex forms to intercepts, zeros, axis of symmetry, and vertex.",
      feature: "First set the equation equal to zero, then choose factoring, square roots, completing the square, or the quadratic formula.",
      symbolic: "For ax²+bx+c=0, x=(-b±√(b²-4ac))/(2a).",
      misconception: "The ± creates two candidates. Keep the entire numerator over 2a."
    },
    inequalities: {
      title: "Inequalities and absolute value",
      patterns: [/inequal/i, /absolute value/i, /interval/i],
      concrete: "An inequality describes a region or range rather than a single balance point; absolute value measures distance from zero.",
      model: "Solve the boundary first, then test and shade the correct side on a number line.",
      feature: "Reverse the inequality only when multiplying or dividing both sides by a negative number.",
      symbolic: "|x-a|<r means x is within r units of a; |x-a|>r means x is farther than r units from a.",
      misconception: "Adding or subtracting a negative does not reverse the inequality; only multiplying or dividing by one does."
    },
    exponential: {
      title: "Exponential and logarithmic functions",
      patterns: [/exponential/i, /logarith/i, /growth/i, /decay/i, /doubl/i],
      concrete: "Linear change adds the same amount; exponential change multiplies by the same factor.",
      model: "Build a table of successive inputs and compare differences with ratios.",
      feature: "In a·bˣ, a is the starting value and b is the repeated factor.",
      symbolic: "bᵖ=a and log_b(a)=p express the same relationship.",
      misconception: "A percent increase uses factor 1+r; a percent decrease uses 1-r."
    },
    modeling: {
      title: "Function models and piecewise functions",
      patterns: [/model/i, /piecewise/i, /word problem/i, /real.?world/i],
      concrete: "A model translates a situation into inputs, outputs, units, assumptions, and a rule.",
      model: "Organize what changes in a labeled table before choosing a function family.",
      feature: "Constant differences suggest linear; constant second differences quadratic; constant ratios exponential.",
      symbolic: "For a piecewise function, use the input condition to choose the rule before substituting.",
      misconception: "A correct calculation without units or context is not a complete interpretation."
    },
    composition: {
      title: "Composite and inverse functions",
      patterns: [/composite/i, /composition/i, /inverse function/i, /f\s*of\s*g/i],
      concrete: "Composition chains two machines; an inverse runs a reversible machine backward.",
      model: "Draw arrows from the first input to its output and then into the next function.",
      feature: "For f(g(x)), evaluate g first. For an inverse, switch input and output and solve for the new output.",
      symbolic: "A valid inverse satisfies f(f⁻¹(x))=x and f⁻¹(f(x))=x on the allowed domains.",
      misconception: "f⁻¹(x) means inverse function, not 1/f(x)."
    }
  };

  function asNumber(raw) {
    const n = Number(String(raw).replace(/−/g, "-"));
    return Number.isFinite(n) ? n : null;
  }

  function format(n) {
    return Number.isInteger(n) ? String(n) : String(Math.round(n * 1000000) / 1000000);
  }

  function solveLinear(text, attempts, requested) {
    const clean = text.replace(/−/g, "-").replace(/\s+/g, "");
    const match = clean.match(/(?:solve(?::|forx:?)?)?([+-]?\d*)x([+-]\d+)?=([+-]?\d+(?:\.\d+)?)/i);
    if (!match) return null;
    const a = match[1] === "" || match[1] === "+" ? 1 : match[1] === "-" ? -1 : asNumber(match[1]);
    const b = match[2] ? asNumber(match[2]) : 0;
    const c = asNumber(match[3]);
    if (a === null || b === null || c === null || a === 0) return null;
    const rhs = c - b;
    const x = rhs / a;
    if (!requested && attempts < 2) {
      const operation = b > 0 ? `subtract ${format(b)}` : b < 0 ? `add ${format(-b)}` : `divide by ${format(a)}`;
      return response("hint", `Let’s use the balance idea. The first move is to ${operation} on both sides. Write the new equation after that one move.`, "What equation do you get?", "linear", false);
    }
    const first = b === 0 ? `${format(a)}x = ${format(c)}` : `${format(a)}x ${b < 0 ? "−" : "+"} ${format(Math.abs(b))} = ${format(c)}`;
    return response("worked_solution", `${first}\n1. Undo the constant on both sides: ${format(a)}x = ${format(rhs)}.\n2. Divide both sides by ${format(a)}: x = ${format(x)}.\n3. Check: ${format(a)}(${format(x)}) ${b < 0 ? "−" : "+"} ${format(Math.abs(b))} = ${format(c)}.`, "Now explain why the same operation had to be used on both sides.", "linear", false);
  }

  function factorMonic(text, attempts, requested) {
    const clean = text.replace(/−/g, "-").replace(/\s+/g, "");
    const m = clean.match(/x(?:\^?2|²)([+-]\d+)x([+-]\d+)/i);
    if (!m) return null;
    const b = asNumber(m[1]);
    const c = asNumber(m[2]);
    let pair = null;
    for (let n = -Math.abs(c) - 1; n <= Math.abs(c) + 1; n++) {
      if (n !== 0 && c % n === 0 && n + c / n === b) { pair = [n, c / n]; break; }
    }
    if (!pair) return response("redirect", "This trinomial may not factor over the integers. Use the quadratic formula lesson or ask the AI layer to examine the exact expression.", "Is the expression set equal to zero?", "quadratics", true);
    if (!requested && attempts < 2) return response("hint", `Find two integers whose product is ${c} and whose sum is ${b}.`, "Which pair meets both conditions?", "polynomials", false);
    const sign = n => n >= 0 ? `+ ${n}` : `− ${Math.abs(n)}`;
    return response("worked_solution", `We need two numbers with product ${c} and sum ${b}. Those numbers are ${pair[0]} and ${pair[1]}. Therefore the factorization is (x ${sign(pair[0])})(x ${sign(pair[1])}). Multiply the factors to check the middle and constant terms.`, "What middle term appears when you multiply to check?", "polynomials", false);
  }

  function response(kind, message, nextPrompt, lessonRef, escalate) {
    return { kind, message, next_prompt: nextPrompt || null, lesson_ref: lessonRef || null, source: escalate ? "ai_needed" : "layered_local", escalate: Boolean(escalate) };
  }

  function selectCard(text, currentUnit) {
    const entries = Object.entries(CARDS);
    const found = entries.find(([, card]) => card.patterns.some(pattern => pattern.test(text)));
    return found || [CARDS[currentUnit] ? currentUnit : "foundation", CARDS[currentUnit] || CARDS.foundation];
  }

  function respond(input) {
    const text = String(input && input.text || "").trim();
    const attempts = Number(input && input.attempts || 0);
    const requested = Boolean(input && input.solutionRequested);
    const currentUnit = input && input.currentUnit || "foundation";
    if (!text) return null;

    const linear = solveLinear(text, attempts, requested);
    if (linear) return linear;
    if (/factor|trinomial|x(?:\^?2|²)/i.test(text)) {
      const factored = factorMonic(text, attempts, requested);
      if (factored) return factored;
    }

    const [id, card] = selectCard(text, currentUnit);
    const specific = /\b(?:this exact|my homework|my teacher|compare (?:each|every)|line by line|attached|photo|screenshot)\b/i.test(text);
    const broad = /^(?:help|explain|teach|what is|how do|i(?:'| a)?m stuck|give me a hint)|\b(?:concept|rule|method|lesson)\b/i.test(text);
    if (!specific && (broad || text.length < 90)) {
      const message = `${card.concrete}\n\nPicture or model: ${card.model}\n\nWhat to notice: ${card.feature}\n\nMath language: ${card.symbolic}\n\nWatch for this: ${card.misconception}`;
      return response("teach_step", message, "Show me the exact problem and the first step you tried.", id, false);
    }

    return response("redirect", "This question needs a personalized reading of the exact problem. I’ll use the bounded AI explanation layer while keeping scoring and mastery decisions in the deterministic tutor.", null, id, true);
  }

  return { version: "1200710-layered-v1", cards: CARDS, respond };
});
