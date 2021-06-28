import React from "react";
import { useState } from "react";
import { Card, Accordion } from "react-bootstrap";
import "../Styles/Accordian.scss";

const ClickCard = ({ Name, onClick }) => {
  return (
    <div onClick={onClick} className="ClickCard">
      {Name}
    </div>
  );
};
const NotesCard = ({ Name, onClick, ImageSource }) => {
  return (
    <div onClick={onClick} className="NotesCard">
      <img src={ImageSource} alt="Notes-Img" />
      {Name}
    </div>
  );
};

function AccordianCompo() {
  const [course, setCourse] = useState(null);
  const [semester, setSemester] = useState(null);
  const [subject, setSubject] = useState(null);
  const [notes, setNotes] = useState(null);
  return (
    <Accordion className="Accordian">
      <h2>Select Notes Here</h2>
      <Card>
        <Accordion.Toggle
          className="Accordian__Title"
          as={Card.Header}
          eventKey="0"
        >
          Course {course != null && course}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="CardBody">
            <ClickCard Name="CSE" onClick={() => setCourse("CSE")} />
            <ClickCard Name="ISE" onClick={() => setCourse("ISE")} />
            <ClickCard Name="CIVIL" onClick={() => setCourse("CIVIL")} />
            <ClickCard Name="ME" onClick={() => setCourse("ME")} />
            <ClickCard Name="EEE" onClick={() => setCourse("EEE")} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle
          className="Accordian__Title"
          as={Card.Header}
          eventKey="1"
        >
          Semester {semester != null && semester}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="CardBody">
            <ClickCard Name="1st" onClick={() => setSemester("1st")} />
            <ClickCard Name="2nd" onClick={() => setSemester("2nd")} />
            <ClickCard Name="3rd" onClick={() => setSemester("3rd")} />
            <ClickCard Name="4th" onClick={() => setSemester("4th")} />
            <ClickCard Name="5th" onClick={() => setSemester("5th")} />
            <ClickCard Name="6th" onClick={() => setSemester("6th")} />
            <ClickCard Name="7th" onClick={() => setSemester("7th")} />
            <ClickCard Name="8th" onClick={() => setSemester("8th")} />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle
          className="Accordian__Title"
          as={Card.Header}
          eventKey="2"
        >
          Subject {subject != null && subject}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body className="CardBody">
            <ClickCard
              Name="Subject 1st"
              onClick={() => setSubject("Subject 1st")}
            />
            <ClickCard
              Name="Subject 2nd"
              onClick={() => setSubject("Subject 1st")}
            />
            <ClickCard
              Name="Subject 3rd"
              onClick={() => setSubject("Subject 1st")}
            />
            <ClickCard
              Name="Subject 4th"
              onClick={() => setSubject("Subject 1st")}
            />
            <ClickCard
              Name="Subject 5th"
              onClick={() => setSubject("Subject 1st")}
            />
            <ClickCard
              Name="Subject 6th"
              onClick={() => setSubject("Subject 1st")}
            />
            <ClickCard
              Name="Subject 7th"
              onClick={() => setSubject("Subject 1st")}
            />
            <ClickCard
              Name="Subject 8th"
              onClick={() => setSubject("Subject 1st")}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle
          className="Accordian__Title"
          as={Card.Header}
          eventKey="3"
        >
          Notes {notes != null && notes}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body className="CardBody">
            <NotesCard
              Name="Note 1st"
              ImageSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpZexI5OlzB3fB49NN0soFDUZCVDmq1uP7A&usqp=CAU"
              onClick={() => setNotes("Note 1st")}
            />
            <NotesCard
              Name="Note 2nd"
              ImageSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpZexI5OlzB3fB49NN0soFDUZCVDmq1uP7A&usqp=CAU"
              onClick={() => setNotes("Note 1st")}
            />
            <NotesCard
              Name="Note 3rd"
              ImageSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpZexI5OlzB3fB49NN0soFDUZCVDmq1uP7A&usqp=CAU"
              onClick={() => setNotes("Note 1st")}
            />
            <NotesCard
              Name="Note 4th"
              ImageSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpZexI5OlzB3fB49NN0soFDUZCVDmq1uP7A&usqp=CAU"
              onClick={() => setNotes("Note 1st")}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default AccordianCompo;
