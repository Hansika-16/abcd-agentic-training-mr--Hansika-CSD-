/**
 * Career Matching Service
 * Matches user analysis to appropriate career paths
 */

// Career database with skills, interests, and requirements
const careerDatabase = [
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    description: 'Build server-side applications, APIs, and databases. Work with server logic, databases, and system architecture.',
    requiredSkills: ['programming'],
    preferredSkills: ['programming', 'testing'],
    matchingInterests: ['technology', 'problemSolving'],
    experienceLevel: ['beginner', 'intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$60,000 - $150,000',
    growth: 'High',
    learningPath: [
      'Learn a backend language (Node.js, Python, Java)',
      'Understand databases (SQL, NoSQL)',
      'Learn API development (REST, GraphQL)',
      'Study system design and architecture',
      'Build projects and contribute to open source'
    ]
  },
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'Create user interfaces and user experiences. Build responsive, interactive web applications.',
    requiredSkills: ['programming', 'design'],
    preferredSkills: ['programming', 'design'],
    matchingInterests: ['technology', 'creative'],
    experienceLevel: ['beginner', 'intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$55,000 - $140,000',
    growth: 'High',
    learningPath: [
      'Master HTML, CSS, and JavaScript',
      'Learn a framework (React, Vue, Angular)',
      'Understand responsive design',
      'Study UI/UX principles',
      'Build portfolio projects'
    ]
  },
  {
    id: 'fullstack-developer',
    title: 'Full Stack Developer',
    description: 'Work on both frontend and backend. Handle everything from database to user interface.',
    requiredSkills: ['programming'],
    preferredSkills: ['programming', 'design', 'testing'],
    matchingInterests: ['technology', 'problemSolving', 'creative'],
    experienceLevel: ['intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$70,000 - $160,000',
    growth: 'Very High',
    learningPath: [
      'Master frontend technologies',
      'Learn backend development',
      'Understand databases and APIs',
      'Study DevOps and deployment',
      'Build full-stack applications'
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Analyze complex data to extract insights. Use machine learning and statistics to solve business problems.',
    requiredSkills: ['data', 'programming'],
    preferredSkills: ['data', 'programming', 'research'],
    matchingInterests: ['research', 'problemSolving', 'technology'],
    experienceLevel: ['intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$80,000 - $180,000',
    growth: 'Very High',
    learningPath: [
      'Learn Python and data libraries (Pandas, NumPy)',
      'Study statistics and mathematics',
      'Master machine learning algorithms',
      'Learn data visualization tools',
      'Work on real-world data projects'
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    description: 'Collect, process, and analyze data to help organizations make data-driven decisions.',
    requiredSkills: ['data'],
    preferredSkills: ['data', 'programming'],
    matchingInterests: ['research', 'problemSolving'],
    experienceLevel: ['beginner', 'intermediate'],
    matchScore: 0,
    salaryRange: '$50,000 - $100,000',
    growth: 'High',
    learningPath: [
      'Learn Excel and SQL',
      'Study data visualization (Tableau, Power BI)',
      'Learn Python or R basics',
      'Understand statistical analysis',
      'Practice with real datasets'
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    description: 'Design user interfaces and experiences. Create intuitive, beautiful, and functional designs.',
    requiredSkills: ['design'],
    preferredSkills: ['design', 'programming'],
    matchingInterests: ['creative', 'technology', 'people'],
    experienceLevel: ['beginner', 'intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$55,000 - $130,000',
    growth: 'High',
    learningPath: [
      'Learn design principles and theory',
      'Master design tools (Figma, Sketch, Adobe XD)',
      'Study user research methods',
      'Learn prototyping and wireframing',
      'Build a design portfolio'
    ]
  },
  {
    id: 'cybersecurity-specialist',
    title: 'Cybersecurity Specialist',
    description: 'Protect systems and networks from cyber threats. Ensure data security and privacy.',
    requiredSkills: ['cybersecurity', 'programming'],
    preferredSkills: ['cybersecurity', 'programming', 'research'],
    matchingInterests: ['technology', 'problemSolving'],
    experienceLevel: ['intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$70,000 - $150,000',
    growth: 'Very High',
    learningPath: [
      'Learn networking fundamentals',
      'Study security protocols and encryption',
      'Get certified (CEH, CISSP)',
      'Practice ethical hacking',
      'Stay updated with security trends'
    ]
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    description: 'Design, develop, and maintain software systems. Solve complex technical problems.',
    requiredSkills: ['programming'],
    preferredSkills: ['programming', 'testing', 'data'],
    matchingInterests: ['technology', 'problemSolving'],
    experienceLevel: ['beginner', 'intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$65,000 - $160,000',
    growth: 'Very High',
    learningPath: [
      'Master programming fundamentals',
      'Learn data structures and algorithms',
      'Study software engineering principles',
      'Understand system design',
      'Build scalable applications'
    ]
  },
  {
    id: 'qa-engineer',
    title: 'QA Engineer',
    description: 'Test software to ensure quality. Find bugs and ensure applications work correctly.',
    requiredSkills: ['testing'],
    preferredSkills: ['testing', 'programming'],
    matchingInterests: ['problemSolving', 'technology'],
    experienceLevel: ['beginner', 'intermediate'],
    matchScore: 0,
    salaryRange: '$45,000 - $100,000',
    growth: 'High',
    learningPath: [
      'Learn testing methodologies',
      'Study automation tools (Selenium, Cypress)',
      'Understand test case design',
      'Learn programming basics',
      'Practice testing real applications'
    ]
  },
  {
    id: 'digital-marketer',
    title: 'Digital Marketer',
    description: 'Promote products and services online. Use SEO, social media, and content marketing.',
    requiredSkills: ['marketing'],
    preferredSkills: ['marketing', 'writing', 'data'],
    matchingInterests: ['creative', 'people', 'technology'],
    experienceLevel: ['beginner', 'intermediate'],
    matchScore: 0,
    salaryRange: '$40,000 - $90,000',
    growth: 'High',
    learningPath: [
      'Learn SEO and SEM fundamentals',
      'Master social media marketing',
      'Study content creation',
      'Understand analytics tools',
      'Build marketing campaigns'
    ]
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Guide product development from concept to launch. Coordinate between teams and stakeholders.',
    requiredSkills: ['business'],
    preferredSkills: ['business', 'programming', 'design'],
    matchingInterests: ['leadership', 'people', 'technology'],
    experienceLevel: ['intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$80,000 - $180,000',
    growth: 'High',
    learningPath: [
      'Learn product management fundamentals',
      'Study user research and analytics',
      'Understand business strategy',
      'Learn agile methodologies',
      'Build product portfolio'
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Bridge development and operations. Automate deployment and infrastructure management.',
    requiredSkills: ['programming'],
    preferredSkills: ['programming', 'testing'],
    matchingInterests: ['technology', 'problemSolving'],
    experienceLevel: ['intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$75,000 - $160,000',
    growth: 'Very High',
    learningPath: [
      'Learn Linux and command line',
      'Master cloud platforms (AWS, Azure, GCP)',
      'Study containerization (Docker, Kubernetes)',
      'Learn CI/CD pipelines',
      'Understand infrastructure as code'
    ]
  }
];

/**
 * Calculate match score for a career based on user analysis
 */
function calculateMatchScore(career, analysis) {
  let score = 0;

  // Check required skills (high weight)
  const hasRequiredSkills = career.requiredSkills.some(skill => 
    analysis.skills.includes(skill)
  );
  if (hasRequiredSkills) {
    score += 40;
  }

  // Check preferred skills (medium weight)
  const preferredSkillsMatch = career.preferredSkills.filter(skill => 
    analysis.skills.includes(skill)
  ).length;
  score += preferredSkillsMatch * 15;

  // Check matching interests (medium weight)
  const interestsMatch = career.matchingInterests.filter(interest => 
    analysis.interests.includes(interest)
  ).length;
  score += interestsMatch * 10;

  // Check experience level match (low weight)
  if (career.experienceLevel.includes(analysis.experienceLevel)) {
    score += 10;
  }

  // Bonus for multiple skill matches
  if (analysis.skills.length > 1 && preferredSkillsMatch > 1) {
    score += 5;
  }

  return Math.min(score, 100); // Cap at 100
}

/**
 * Find career paths based on user analysis
 */
function findCareerPaths(analysis) {
  // Calculate match scores for all careers
  const careersWithScores = careerDatabase.map(career => {
    const matchScore = calculateMatchScore(career, analysis);
    return {
      ...career,
      matchScore: matchScore
    };
  });

  // Sort by match score (descending)
  careersWithScores.sort((a, b) => b.matchScore - a.matchScore);

  // Return top 5 matches with match percentage
  const topMatches = careersWithScores
    .filter(career => career.matchScore > 0) // Only include careers with some match
    .slice(0, 5)
    .map(career => ({
      id: career.id,
      title: career.title,
      description: career.description,
      matchPercentage: career.matchScore,
      salaryRange: career.salaryRange,
      growth: career.growth,
      learningPath: career.learningPath,
      whyMatch: generateWhyMatch(career, analysis)
    }));

  return topMatches.length > 0 ? topMatches : [{
    id: 'general-software',
    title: 'Software Development',
    description: 'Based on your message, we recommend exploring software development careers. Start with learning programming fundamentals.',
    matchPercentage: 50,
    salaryRange: '$50,000 - $150,000',
    growth: 'High',
    learningPath: [
      'Learn programming basics (Python or JavaScript)',
      'Build small projects',
      'Explore different specializations',
      'Join developer communities',
      'Continue learning and building'
    ],
    whyMatch: 'Your message suggests interest in technology and problem-solving.'
  }];
}

/**
 * Generate explanation for why a career matches
 */
function generateWhyMatch(career, analysis) {
  const reasons = [];

  const matchingSkills = career.requiredSkills.filter(skill => 
    analysis.skills.includes(skill)
  );
  if (matchingSkills.length > 0) {
    reasons.push(`Your skills in ${matchingSkills.join(', ')} align with this role.`);
  }

  const matchingInterests = career.matchingInterests.filter(interest => 
    analysis.interests.includes(interest)
  );
  if (matchingInterests.length > 0) {
    reasons.push(`Your interests in ${matchingInterests.join(', ')} match this career.`);
  }

  if (career.experienceLevel.includes(analysis.experienceLevel)) {
    reasons.push(`This role is suitable for your ${analysis.experienceLevel} experience level.`);
  }

  return reasons.length > 0 ? reasons.join(' ') : 'This career path offers good growth opportunities.';
}

/**
 * Get all available careers
 */
function getAllCareers() {
  return careerDatabase.map(career => ({
    id: career.id,
    title: career.title,
    description: career.description,
    requiredSkills: career.requiredSkills,
    salaryRange: career.salaryRange,
    growth: career.growth
  }));
}

module.exports = {
  findCareerPaths,
  getAllCareers,
  calculateMatchScore
};