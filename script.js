const students = [
  { 
    name:"João Lira", 
    note1: 5,
    note2: 6,
  
  },

  { 
    name:"Márcia Nunes", 
    note1: 8,
    note2: 9,
  
  },

  { 
    name:"Ricardo Dest", 
    note1: 7,
    note2: 5,
  
  },

  { 
    name:"Júlia Fatur", 
    note1: 5,
    note2: 9,
  
  },
]

function calculateAverage (note1, note2) {
  return (note1 + note2) / 2;
}

function validation (note1, note2) {
  if (note1 < 0 || note1 > 10 || note2 < 0 || note2 > 10) {
    return false;
  }
    return true;
}

function approvalCheck (students, minAverage =7){
  students.forEach(student => {
    if (!validation(student.note1,student.note2)) {
      alert(`Notas invalidas para o estudante ${student.name}`);
      return;
    }

    const average = calculateAverage(student.note1,student.note2);
    if (average >= minAverage) {

      alert(`Parabéns, ${student.name}! Você foi aprovado com nota ${average}.`);
    } else {
      alert(`Que pena, ${student.name}! Você foi reprovado com nota ${average}.`);
    }
  });
}

approvalCheck(students);