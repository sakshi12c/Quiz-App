Features

Clean, modern user interface with smooth transitions
Progress bar showing quiz completion
Real-time answer selection feedback
Score calculation and performance rating
Comprehensive answer review after completion
Responsive design that works on all devices
10 pre-loaded general knowledge questions

Files
AppWithScore.html
Main HTML structure containing:

Start screen with quiz introduction
Quiz screen with question display and options
Result screen with score and answer review
Screen management system for navigation

AppWithScore.js
Core application logic including:

Quiz data with 10 questions covering various topics
Question navigation and state management
Answer selection and validation
Score tracking and calculation
Performance message generation based on score percentage
Answer review compilation
Quiz restart functionality

AppWithScore.css
Complete styling including:

Responsive container with centered layout
Three distinct screen states (start, quiz, result)
Progress bar animation
Option selection states (default, selected, correct, incorrect)
Color-coded answer review items
Score display with circular badge
Mobile-friendly responsive design

How to Use

Open AppWithScore.html in a web browser
Click "Start Quiz" to begin
Read each question and click on your chosen answer
Click "Next" to proceed to the next question
After completing all questions, view your score and performance message
Review all answers with correct/incorrect indicators
Click "Restart Quiz" to try again

Quiz Structure
The quiz contains 10 multiple-choice questions covering:

Geography (capitals, oceans, rivers)
Science (planets, chemistry)
Mathematics (basic arithmetic, prime numbers)
History (World War II)
Literature (Shakespeare)
Demographics (population)

Each question has four options with one correct answer.
Scoring System
Performance messages based on percentage:

100%: "Perfect score! Outstanding!"
80-99%: "Excellent! You did great!"
60-79%: "Good job! Keep practicing!"
40-59%: "Not bad! Try again to improve!"
Below 40%: "Keep learning! Try again!"

Answer Review
After completing the quiz, users can review:

All questions with their selected answers
Correct answers for any incorrect responses
Color-coded indicators (green for correct, red for incorrect)

Installation

Download all three files (AppWithScore.html, AppWithScore.js, AppWithScore.css)
Place them in the same directory
Open AppWithScore.html in any modern web browser

Customization
Adding or Modifying Questions
Edit the quizData array in AppWithScore.js:
javascript{
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correct: 0  // Index of correct answer (0-3)
}
Styling
Modify AppWithScore.css to change:

Color scheme (primary: #3498db, success: #27ae60, error: #e74c3c)
Font sizes and families
Container dimensions
Animation speeds

Technical Details

No external dependencies or libraries required
Pure vanilla JavaScript with ES6 features
CSS Flexbox for responsive layouts
Event-driven architecture
State management using JavaScript variables
Dynamic DOM manipulation

Browser Compatibility
Works on all modern browsers:

Chrome
Firefox
Safari
Edge
Opera

Features Breakdown
Progress Tracking

Visual progress bar updates after each question
Question counter (e.g., "3 / 10")
Smooth width transition animation

User Experience

One-time answer selection per question
Next button disabled until answer is selected
Visual feedback on selection
Pointer events disabled after selection to prevent changes

Result Display

Large circular score badge
Percentage-based performance message
Scrollable answer review section
Color-coded answer items for quick scanning
