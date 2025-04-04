# study-suggest

## Overview
study-suggest is a React-based web application designed to recommend Udemy courses for various certifications. The application aims to generate revenue through affiliate links and Google AdMob advertisements.

## Features
- **Course List**: Displays a categorized list of courses for different certifications, including:
  - Certified Solutions Architect - Professional
  - Certified DevOps Engineer
  - React
  - Node.js
  - FastAPI
- **Study Tips**: Provides structured study tips for each certification to help users in their learning journey.
- **FAQ Section**: Offers information about the site and its purpose.

## Project Structure
```
study-suggest
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── CourseList.tsx
│   │   ├── StudyTips.tsx
│   │   └── FAQ.tsx
│   ├── data
│   │   └── courses.json
│   ├── pages
│   │   ├── HomePage.tsx
│   │   ├── StudyTipsPage.tsx
│   │   └── FAQPage.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles
│       └── App.css
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/study-suggest.git
   ```
2. Navigate to the project directory:
   ```
   cd study-suggest
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Future Enhancements
- Implement the study tips and FAQ content.
- Integrate affiliate links for the courses.
- Add Google AdMob for advertisements.

## License
This project is licensed under the MIT License.