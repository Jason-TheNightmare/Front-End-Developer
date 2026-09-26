import StudentManagementApp from './basic.jsx';
import Footer from './footer.jsx';
import WelcomeMessage from './WelcomeMessage.jsx';
import StudentCard from './StudentCard.jsx';
import GradeCalculator from './GradeCalculator.jsx';

function App() {
  return (
    <div className="App">
      <StudentManagementApp />
      <Footer />
      <WelcomeMessage />
      <StudentCard />
      <GradeCalculator />
    </div>
  );
}

export default App;