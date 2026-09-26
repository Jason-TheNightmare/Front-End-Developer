function StudentCard(){
    const name = "សុខា";
    const age = 20;
    const studentClass = "ឆ្នាំទី៣";

    return (
        <div className = "student-card">
            <h3>{name}</h3>
            <p>អាយុ: {age}</p>
            <p>ថ្នាក់: {studentClass}</p>
        </div>
    )

}

export default StudentCard;