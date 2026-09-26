function GradeCalculator(){
    const grade = {
        math: 90,
        khmer: 85,
        english: 100,
        chemistry: 50,
    };

    const total = grade.math + grade.khmer + grade.english + grade.chemistry;
    const average = total / 4;

    return (
        <div className = "grade-calculator">
            <h3>លទ្ធផលការសិក្សា</h3>
      <p>គណិតវិទ្យា: {grade.math}</p>
      <p>ភាសាខ្មែរ: {grade.khmer}</p>
      <p>ភាសាអង់គ្លេស: {grade.english}</p>
      <p>វិទ្យាសាស្ត្រ: {grade.chemistry}</p>
      <hr />
      <p>មធ្យមភាគ: {average}</p>
        </div>
    )
}

export default GradeCalculator;