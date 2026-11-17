// Quiz Nova Application Logic - Single Page Architecture

const questionsData = {
    Mathematics: [
        { q: "What is the derivative of sin(x)?", options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], answer: 0, exp: "The derivative of sin(x) with respect to x is cos(x)." },
        { q: "What is the value of ∫ e^x dx?", options: ["e^x + C", "ln(x) + C", "x*e^x + C", "1/e^x + C"], answer: 0, exp: "The exponential function e^x is its own antiderivative." },
        { q: "What is the sum of angles in a triangle?", options: ["90°", "180°", "270°", "360°"], answer: 1, exp: "The interior angles of a triangle always sum up to 180°." },
        { q: "What is the value of log₁₀(1000)?", options: ["2", "3", "4", "10"], answer: 1, exp: "10^3 = 1000, so log₁₀(1000) = 3." },
        { q: "What is the quadratic formula roots discriminant condition for real roots?", options: ["D < 0", "D = 0", "D ≥ 0", "D > 0 only"], answer: 2, exp: "Real roots exist when discriminant D = b² - 4ac ≥ 0." },
        { q: "If matrix A is square, det(A^T) equals:", options: ["-det(A)", "1/det(A)", "det(A)", "0"], answer: 2, exp: "The determinant of a matrix is equal to the determinant of its transpose." },
        { q: "What is the limit as x→0 of sin(x)/x?", options: ["0", "1", "Infinity", "Undefined"], answer: 1, exp: "By L'Hopital's rule or standard limits, lim (sin x)/x = 1 as x→0." },
        { q: "What is the slope of the line y = 3x - 5?", options: ["-5", "3", "-3", "5"], answer: 1, exp: "In slope-intercept form y = mx + c, m is the slope (3)." },
        { q: "What is the area of a circle with radius r?", options: ["2πr", "πr²", "4πr²", "πr"], answer: 1, exp: "Area of a circle formula is A = πr²." },
        { q: "What is 0! (Factorial of 0)?", options: ["0", "1", "Undefined", "Infinity"], answer: 1, exp: "By definition, the empty product 0! equals 1." },
        { q: "What is the value of sin²(θ) + cos²(θ)?", options: ["0", "1", "-1", "2"], answer: 1, exp: "This is the fundamental Pythagorean trigonometric identity." },
        { q: "What is the derivative of x²?", options: ["x", "2x", "x²", "2"], answer: 1, exp: "Using the power rule d/dx(x^n) = n*x^(n-1), derivative of x² is 2x." },
        { q: "What is the sum of arithmetic progression 1, 2, 3, ..., n?", options: ["n(n+1)/2", "n²", "n(n-1)/2", "n(n+1)"], answer: 0, exp: "Standard sum formula for first n natural numbers is n(n+1)/2." },
        { q: "What is the value of i² (where i is imaginary unit)?", options: ["1", "-1", "i", "-i"], answer: 1, exp: "By definition, i = √(-1), so i² = -1." },
        { q: "What is the volume of a sphere with radius r?", options: ["4/3 πr³", "4πr²", "2/3 πr³", "πr³"], answer: 0, exp: "Volume of sphere formula is V = (4/3)πr³." },
        { q: "If log₂(x) = 4, what is x?", options: ["8", "16", "32", "4"], answer: 1, exp: "2^4 = 16, so x = 16." },
        { q: "What is the nth term of a geometric progression with first term a and common ratio r?", options: ["a + (n-1)r", "a * r^(n-1)", "a * r^n", "a + r^n"], answer: 1, exp: "GP nth term formula is T_n = a * r^(n-1)." },
        { q: "What is the derivative of ln(x)?", options: ["1/x", "e^x", "x", "ln(x)"], answer: 0, exp: "The derivative of natural logarithm ln(x) is 1/x." },
        { q: "How many diagonals does a regular hexagon have?", options: ["6", "9", "12", "15"], answer: 1, exp: "Number of diagonals = n(n-3)/2 = 6(3)/2 = 9." },
        { q: "What is the value of tan(45°)?", options: ["0", "1/2", "1", "√3"], answer: 2, exp: "tan(45°) = sin(45°)/cos(45°) = 1." }
    ],
    Physics: [
        { q: "What is the SI unit of Force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 1, exp: "Force is measured in Newtons (N)." },
        { q: "Which of the following is a scalar quantity?", options: ["Velocity", "Force", "Speed", "Acceleration"], answer: 2, exp: "Speed has magnitude only, while others are vectors." },
        { q: "What is the acceleration due to gravity (approx) on Earth?", options: ["9.8 m/s²", "8.9 m/s²", "10.8 m/s²", "3.14 m/s²"], answer: 0, exp: "Standard g is approximately 9.8 m/s²." },
        { q: "Ohm's Law is expressed as:", options: ["V = IR", "P = VI", "F = ma", "E = mc²"], answer: 0, exp: "Ohm's law relates Voltage, Current, and Resistance as V = IR." },
        { q: "What is the energy stored in a capacitor given by?", options: ["1/2 CV²", "CV", "IR²", "1/2 LI²"], answer: 0, exp: "Capacitor potential energy formula is U = 1/2 CV²." },
        { q: "Light year is a unit of:", options: ["Time", "Distance", "Speed", "Intensity"], answer: 1, exp: "A light-year is the distance light travels in one Earth year." },
        { q: "What is Newton's First Law also known as?", options: ["Law of Momentum", "Law of Inertia", "Law of Action-Reaction", "Law of Gravitation"], answer: 1, exp: "Newton's first law defines inertia." },
        { q: "What type of mirror is used as a rear-view mirror in vehicles?", options: ["Concave", "Convex", "Plane", "Parabolic"], answer: 1, exp: "Convex mirrors provide a wider virtual erect field of view." },
        { q: "What is the frequency of standard household AC supply in India?", options: ["50 Hz", "60 Hz", "100 Hz", "25 Hz"], answer: 0, exp: "Standard Indian electrical grid frequency is 50 Hz." },
        { q: "What principle does hydraulic lift operate on?", options: ["Archimedes' Principle", "Pascal's Law", "Bernoulli's Principle", "Stokes' Law"], answer: 1, exp: "Pascal's law states pressure applied to enclosed liquid is transmitted undiminished." },
        { q: "Work done is equal to dot product of Force and:", options: ["Velocity", "Acceleration", "Displacement", "Momentum"], answer: 2, exp: "W = F · s (Force dot displacement)." },
        { q: "What is the dimensional formula of Planck's constant (h)?", options: ["[MLT⁻¹]", "[ML²T⁻¹]", "[ML²T⁻²]", "[ML⁻¹T⁻²]"], answer: 1, exp: "E = hν => h = E/ν has dimensions [ML²T⁻¹]." },
        { q: "Which wave cannot travel through vacuum?", options: ["Light waves", "X-rays", "Sound waves", "Radio waves"], answer: 2, exp: "Sound waves are mechanical waves requiring a material medium." },
        { q: "Escape velocity from Earth's surface is approximately:", options: ["5.2 km/s", "11.2 km/s", "21.5 km/s", "3.0 km/s"], answer: 1, exp: "Earth's escape velocity is ~11.2 km/s." },
        { q: "Power is defined as rate of doing:", options: ["Work", "Force", "Energy", "Momentum"], answer: 0, exp: "Power P = W / t (Work per unit time)." },
        { q: "What color scatters the least in atmosphere?", options: ["Violet", "Blue", "Red", "Green"], answer: 2, exp: "Red has the longest wavelength and scatters the least." },
        { q: "In an elastic collision, what is conserved?", options: ["Only Momentum", "Only Kinetic Energy", "Both Momentum and Kinetic Energy", "Neither"], answer: 2, exp: "Both momentum and kinetic energy are conserved in elastic collisions." },
        { q: "What is the unit of magnetic flux?", options: ["Tesla", "Weber", "Henry", "Ampere"], answer: 1, exp: "Magnetic flux is measured in Weber (Wb)." },
        { q: "Moment of inertia of a solid sphere about its diameter is:", options: ["2/5 MR²", "2/3 MR²", "1/2 MR²", "MR²"], answer: 0, exp: "I = 2/5 MR² for solid sphere." },
        { q: "The resistance of an ideal ammeter is:", options: ["Infinite", "Zero", "Very High", "100 ohms"], answer: 1, exp: "An ideal ammeter has zero internal resistance so it doesn't affect circuit current." }
    ],
    Chemistry: [
        { q: "What is the chemical symbol for Gold?", options: ["Ag", "Au", "Gd", "Pb"], answer: 1, exp: "Au stands for Aurum (Gold)." },
        { q: "Which gas is most abundant in Earth's atmosphere?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"], answer: 2, exp: "Nitrogen constitutes ~78% of Earth's atmosphere." },
        { q: "What is the pH of a neutral solution at 25°C?", options: ["0", "7", "14", "5"], answer: 1, exp: "pH 7 represents neutrality on the aqueous pH scale." },
        { q: "Which subatomic particle has a negative charge?", options: ["Proton", "Neutron", "Electron", "Positron"], answer: 2, exp: "Electrons carry a negative elementary charge." },
        { q: "What is heavy water chemically known as?", options: ["Hydrogen oxide", "Deuterium oxide", "Tritium oxide", "Dihydrogen peroxide"], answer: 1, exp: "Heavy water is D₂O (Deuterium oxide)." },
        { q: "Which element is liquid at room temperature?", options: ["Sodium", "Mercury", "Iron", "Gold"], answer: 1, exp: "Mercury (Hg) is a metallic liquid at standard ambient conditions." },
        { q: "What is the IUPAC name of acetic acid?", options: ["Methanoic acid", "Ethanoic acid", "Propanoic acid", "Formaldehyde"], answer: 1, exp: "Acetic acid CH₃COOH is ethanoic acid." },
        { q: "Which gas turns lime water milky?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 1, exp: "CO₂ reacts with Ca(OH)₂ to form insoluble white CaCO₃ precipitate." },
        { q: "What is the hardest natural substance on Earth?", options: ["Graphite", "Quartz", "Diamond", "Corundum"], answer: 2, exp: "Diamond is an allotrope of carbon with extreme hardness." },
        { q: "What is the common name for sodium bicarbonate?", options: ["Washing soda", "Baking soda", "Caustic soda", "Bleaching powder"], answer: 1, exp: "NaHCO₃ is baking soda." },
        { q: "What type of chemical bond is formed by transfer of electrons?", options: ["Covalent bond", "Ionic bond", "Hydrogen bond", "Metallic bond"], answer: 1, exp: "Ionic bonds form via complete electron transfer between atoms." },
        { q: "What is the oxidation state of Mn in KMnO₄?", options: ["+5", "+6", "+7", "+2"], answer: 2, exp: "K(+1) + Mn(x) + 4(-2) = 0 => x = +7." },
        { q: "Which halogen is a solid at room temperature?", options: ["Fluorine", "Chlorine", "Bromine", "Iodine"], answer: 3, exp: "Iodine is a lustrous dark purple solid at room temperature." },
        { q: "What is the main component of natural gas?", options: ["Ethane", "Propane", "Methane", "Butane"], answer: 2, exp: "Natural gas is predominantly methane (CH₄)." },
        { q: "Which catalyst is used in Haber process for ammonia synthesis?", options: ["Nickel", "Iron", "Platinum", "Palladium"], answer: 1, exp: "Finely divided iron with molybdenum promoter is used in Haber process." },
        { q: "What color is copper sulfate pentahydrate crystals?", options: ["White", "Blue", "Green", "Yellow"], answer: 1, exp: "CuSO₄·5H₂O forms striking blue crystals." },
        { q: "Which acid is present in tamarind?", options: ["Citric acid", "Tartaric acid", "Acetic acid", "Lactic acid"], answer: 1, exp: "Tartaric acid is abundantly found in tamarind." },
        { q: "What is the atomic number of Carbon?", options: ["5", "6", "7", "8"], answer: 1, exp: "Carbon has 6 protons, atomic number 6." },
        { q: "Which gas is evolved when zinc reacts with dilute sulfuric acid?", options: ["Oxygen", "Chlorine", "Hydrogen", "Nitrogen"], answer: 2, exp: "Zn + H₂SO₄ → ZnSO₄ + H₂↑ releases hydrogen gas." },
        { q: "What is the number of moles in 9g of water (H₂O)?", options: ["0.25 mol", "0.5 mol", "1 mol", "2 mol"], answer: 1, exp: "Molar mass of H₂O is 18 g/mol; 9 / 18 = 0.5 moles." }
    ],
    Biology: [
        { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"], answer: 1, exp: "Mitochondria produce ATP cellular energy." },
        { q: "Which blood group is known as the universal donor?", options: ["A", "B", "AB", "O negative"], answer: 3, exp: "O negative red blood cells lack A, B, and Rh antigens." },
        { q: "What is the primary pigment responsible for photosynthesis?", options: ["Carotene", "Chlorophyll", "Xanthophyll", "Anthocyanin"], answer: 1, exp: "Chlorophyll absorbs light energy for photosynthesis." },
        { q: "Where is bile produced in the human body?", options: ["Pancreas", "Liver", "Gallbladder", "Stomach"], answer: 1, exp: "Bile is synthesized in the liver and stored in the gallbladder." },
        { q: "What is the double-helix structure of DNA discovered by?", options: ["Darwin and Wallace", "Watson and Crick", "Mendel and Morgan", "Pasteur and Fleming"], answer: 1, exp: "James Watson and Francis Crick proposed the DNA double helix in 1953." },
        { q: "Which vitamin is synthesized in skin upon sun exposure?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], answer: 3, exp: "UV rays trigger cholecalciferol (Vitamin D) synthesis in skin." },
        { q: "What are the building blocks of proteins?", options: ["Fatty acids", "Amino acids", "Nucleotides", "Monosaccharides"], answer: 1, exp: "Proteins are polymers composed of amino acid chains." },
        { q: "Which plant hormone promotes cell elongation and fruit ripening?",options: ["Auxin", "Ethylene", "Cytokinin", "Abscisic acid"], answer: 1, exp: "Ethylene is the gaseous plant hormone responsible for fruit ripening." },
        { q: "What is the functional unit of the human kidney?",options: ["Neuron", "Nephron", "Alveoli", "Villus"], answer: 1, exp: "Nephrons filter blood and form urine in kidneys." },
        { q: "Which organelle is responsible for protein synthesis?",options: ["Ribosome", "Lysosome", "Centrosome", "Vacuole"], answer: 0, exp: "Ribosomes translate mRNA into polypeptide chains." },
        { q: "What type of blood vessels carry oxygenated blood away from the heart?",options: ["Veins", "Capillaries", "Arteries", "Vena Cava"], answer: 2, exp: "Arteries transport oxygenated blood (except pulmonary artery) away from heart." },
        { q: "What is the normal resting human heart rate?",options: ["60-100 bpm", "40-60 bpm", "120-140 bpm", "100-140 bpm"], answer: 0, exp: "Normal adult resting heart rate ranges from 60 to 100 beats per minute." },
        { q: "Which white blood cells produce antibodies?",options: ["T-cells", "B-cells", "Monocytes", "Eosinophils"], answer: 1, exp: "B lymphocytes mature into plasma cells producing antibodies." },
        { q: "What is the hardest substance in the human body?",options: ["Bone", "Dentin", "Enamel", "Cementum"], answer: 2, exp: "Tooth enamel is the highly mineralized hard tissue covering teeth." },
        { q: "In which plant organelle does the light-independent dark reaction occur?",options: ["Thylakoid", "Stroma", "Grana", "Cristae"], answer: 1, exp: "Calvin cycle (dark reaction) takes place in the chloroplast stroma." },
        { q: "What is the main excretory product in humans?",options: ["Ammonia", "Urea", "Uric acid", "Creatinine"], answer: 1, exp: "Humans convert toxic ammonia into urea in the liver for excretion." },
        { q: "Which disease is caused by deficiency of Insulin?",options: ["Scurvy", "Rickets", "Diabetes Mellitus", "Beriberi"], answer: 2, exp: "Type 1 / Type 2 diabetes involves insulin deficiency or resistance." },
        { q: "What is the study of fungi called?",options: ["Phycology", "Mycology", "Virology", "Bacteriology"], answer: 1, exp: "Mycology is the scientific study of fungi." },
        { q: "How many chambers are in the human heart?",options: ["2", "3", "4", "5"], answer: 2, exp: "Human heart has 4 chambers: two atria and two ventricles." },
        { q: "What is the primary gas released during photosynthesis?",options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Water vapor"], answer: 1, exp: "Oxygen is released as a byproduct of water photolysis in photosynthesis." }
    ]
};

// Application State
let state = {
    screen: 'home', // 'home', 'setup', 'instructions', 'quiz', 'result', 'solutions', 'leaderboard'
    standard: '',
    exam: '',
    subject: '',
    currentQuestionIndex: 0,
    userAnswers: {},
    score: 0,
    timer: 600, // 10 minutes timer
    timerInterval: null
};

// Render Engine
function render() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    switch (state.screen) {
        case 'home':
            app.innerHTML = `
                <h1>QUIZ NOVA</h1>
                <h2>Think • Choose • Grow</h2>
                <p>Test your knowledge with fun, challenging quizzes designed for academic excellence.</p>
                <ul class="features-list">
                    <li>Learn</li>
                    <li>Think</li>
                    <li>Challenge</li>
                    <li>Win</li>
                </ul>
                <button class="btn" onclick="navigateTo('setup')">Start Quiz</button>
            `;
            break;

        case 'setup':
            app.innerHTML = `
                <h1>Quiz Nova</h1>
                <h2>Select Your Preferences</h2>
                <div class="form-group">
                    <label>Standard</label>
                    <select id="sel-standard">
                        <option value="">Select your standard</option>
                        <option value="11th Standard">11th Standard</option>
                        <option value="12th Standard">12th Standard</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Exam Goal</label>
                    <select id="sel-exam">
                        <option value="">Select your exam</option>
                        <option value="JEE">JEE</option>
                        <option value="NEET">NEET</option>
                        <option value="Board Exam">Board Exam</option>
                        <option value="CUET">CUET</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Subject (20 Questions)</label>
                    <select id="sel-subject">
                        <option value="">Select Subject</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Biology">Biology</option>
                    </select>
                </div>
                <button class="btn" onclick="handleSetupContinue()">Continue</button>
            `;
            break;

        case 'instructions':
            app.innerHTML = `
                <h1>QUIZ NOVA</h1>
                <h2>QUIZ RULES (${state.subject})</h2>
                <ol style="text-align: left; margin: 20px auto 30px 40px; line-height: 1.8; color: #57606f;">
                    <li>Total 20 multiple-choice questions.</li>
                    <li>Each correct answer awards +4 Marks.</li>
                    <li>Read every question carefully before answering.</li>
                    <li>You can navigate back and forth between questions.</li>
                    <li>Timer is set for 10 minutes. Good luck!</li>
                </ol>
                <button class="btn btn-secondary" onclick="startQuiz()">I am Ready!</button>
            `;
            break;

        case 'quiz':
            const questions = questionsData[state.subject];
            const q = questions[state.currentQuestionIndex];
            const selectedOpt = state.userAnswers[state.currentQuestionIndex];

            app.innerHTML = `
                <div class="quiz-header">
                    <h2>Question ${state.currentQuestionIndex + 1} of ${questions.length}</h2>
                    <div>
                        <span class="badge">+4 Marks</span>
                        <span class="timer" id="timer-display">10:00</span>
                    </div>
                </div>

                <p class="question-text">${q.q}</p>

                <div class="options-list">
                    ${q.options.map((opt, idx) => `
                        <label class="option-label" style="border-color: ${selectedOpt === idx ? 'var(--primary)' : '#dfe4ea'}; background: ${selectedOpt === idx ? '#fff5f5' : 'var(--light)'}">
                            <input type="radio" name="quiz_opt" value="${idx}" ${selectedOpt === idx ? 'checked' : ''} onclick="selectOption(${idx})">
                            ${opt}
                        </label>
                    `).join('')}
                </div>

                <div class="quiz-footer">
                    <button class="btn" style="background: #a4b0be; padding: 10px 25px; margin: 0;" ${state.currentQuestionIndex === 0 ? 'disabled style="opacity: 0.5;"' : ''} onclick="prevQuestion()">Previous</button>
                    ${state.currentQuestionIndex < questions.length - 1 ?
                        `<button class="btn" style="padding: 10px 25px; margin: 0;" onclick="nextQuestion()">Next</button>` :
                        `<button class="btn btn-secondary" style="padding: 10px 25px; margin: 0;" onclick="submitQuiz()">Submit Quiz</button>`
                    }
                </div>
            `;
            startTimerIfNeeded();
            break;

        case 'result':
            const totalQ = questionsData[state.subject].length;
            let correctCount = 0;
            let attemptedCount = 0;
            const qs = questionsData[state.subject];

            Object.keys(state.userAnswers).forEach(idx => {
                attemptedCount++;
                if (state.userAnswers[idx] === qs[idx].answer) {
                    correctCount++;
                }
            });
            const finalMarks = correctCount * 4;
            const maxMarks = totalQ * 4;
            const percentage = Math.round((correctCount / totalQ) * 100);

            app.innerHTML = `
                <h1>Quiz Completed!</h1>
                <h2>Fantastic Job! 🎉</h2>
                <div class="score-card">
                    <p>Your Total Score</p>
                    <div class="score-value">${finalMarks} / ${maxMarks}</div>
                    <p style="margin-top: 10px; color: var(--secondary); font-weight: bold;">${percentage}% Accuracy (${correctCount} Correct out of ${totalQ})</p>
                </div>
                <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn-secondary" onclick="navigateTo('solutions')">View Solutions</button>
                    <button class="btn" onclick="navigateTo('leaderboard')">Leaderboard</button>
                    <button class="btn" style="background: #70a1ff;" onclick="navigateTo('setup')">New Quiz</button>
                </div>
            `;
            break;

        case 'solutions':
            const subjectQuestions = questionsData[state.subject];
            app.innerHTML = `
                <h1>Detailed Solutions</h1>
                <div class="solution-box">
                    ${subjectQuestions.map((q, idx) => {
                        const userAns = state.userAnswers[idx];
                        const isCorrect = userAns === q.answer;
                        return `
                            <div class="solution-item ${isCorrect ? 'correct' : ''}">
                                <h4>Q${idx + 1}: ${q.q}</h4>
                                <p>Your Answer: <b>${userAns !== undefined ? q.options[userAns] : 'Not Answered'}</b></p>
                                <p>Correct Answer: <span style="color: var(--secondary); font-weight: bold;">${q.options[q.answer]}</span></p>
                                <p style="margin-top: 6px; font-size: 0.95rem; color: #57606f;"><b>Explanation:</b> ${q.exp}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
                <button class="btn" onclick="navigateTo('result')">Back to Results</button>
            `;
            break;

        case 'leaderboard':
            app.innerHTML = `
                <h1>🏆 Leaderboard (${state.subject})</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Student Name</th>
                            <th>Accuracy</th>
                            <th>Nova Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="rank-1">1</td><td>Alex Morgan</td><td>100%</td><td>240 pts</td></tr>
                        <tr><td class="rank-2">2</td><td>You (Quiz Star)</td><td>${Math.round((Object.keys(state.userAnswers).filter(k => state.userAnswers[k] === questionsData[state.subject][k].answer).length / 20)*100)}%</td><td>${Object.keys(state.userAnswers).filter(k => state.userAnswers[k] === questionsData[state.subject][k].answer).length * 4} pts</td></tr>
                        <tr><td class="rank-3">3</td><td>Sarah Connor</td><td>95%</td><td>190 pts</td></tr>
                        <tr><td>4</td><td>David Miller</td><td>90%</td><td>175 pts</td></tr>
                        <tr><td>5</td><td>Emma Watson</td><td>85%</td><td>160 pts</td></tr>
                    </tbody>
                </table>
                <button class="btn" onclick="navigateTo('home')">Back to Home</button>
            `;
            break;
    }
}

// Navigation & Actions
function navigateTo(screenName) {
    if (screenName === 'quiz' && state.screen !== 'quiz') {
        state.currentQuestionIndex = 0;
        state.userAnswers = {};
        state.timer = 600;
    }
    state.screen = screenName;
    render();
}

function handleSetupContinue() {
    const std = document.getElementById('sel-standard').value;
    const exam = document.getElementById('sel-exam').value;
    const subj = document.getElementById('sel-subject').value;

    if (!std || !exam || !subj) {
        alert('Please select Standard, Exam Goal, and Subject before continuing.');
        return;
    }

    state.standard = std;
    state.exam = exam;
    state.subject = subj;
    navigateTo('instructions');
}

function startQuiz() {
    navigateTo('quiz');
}

function selectOption(optionIndex) {
    state.userAnswers[state.currentQuestionIndex] = optionIndex;
    render();
}

function nextQuestion() {
    if (state.currentQuestionIndex < questionsData[state.subject].length - 1) {
        state.currentQuestionIndex++;
        render();
    }
}

function prevQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        render();
    }
}

function submitQuiz() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    navigateTo('result');
}

function startTimerIfNeeded() {
    if (state.timerInterval) return;
    state.timerInterval = setInterval(() => {
        state.timer--;
        const display = document.getElementById('timer-display');
        if (display) {
            const mins = Math.floor(state.timer / 60);
            const secs = state.timer % 60;
            display.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }
        if (state.timer <= 0) {
            clearInterval(state.timerInterval);
            state.timerInterval = null;
            submitQuiz();
        }
    }, 1000);
}

// Initial Render
window.onload = () => {
    render();
};
