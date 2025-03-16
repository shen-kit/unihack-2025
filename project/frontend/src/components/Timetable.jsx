import React, { useState, useEffect, useContext } from "react";
import "../css/Timetable.css";
import { PageContext } from "../contexts/PageContext";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { getAllClasses, getClassInfo } from "../utility/fetchClasses.js";
import { UnitContext } from "../contexts/UnitContext.jsx";
import { FilterContext } from "../contexts/FilterContext.jsx";
import { ScrollArea } from "@mantine/core";

const data = [
  {
    day: "MON",
    duration: 2,
    time: 18,
  },
  {
    day: "WED",
    duration: 2,
    time: 12,
  },
  {
    day: "FRI",
    duration: 2,
    time: 13,
  },
];

// Function to get the dates for the current week
const getCurrentWeekDates = (startDate) => {
  const dates = [];
  for (let i = 0; i < 5; i++) {
    // Only Monday to Friday
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(date);
  }
  return dates;
};

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0"); // Pad day with zero
  const month = date.getMonth() + 1;
  return `${day}/${month}`;
};

// Function to calculate the week number starting from March 3rd
const getWeekNumber = (date) => {
  const startDate = new Date(date.getFullYear(), 2, 3); // March 3rd of the current year
  const timeDiff = date - startDate;
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const weekNumber = Math.floor(daysDiff / 7) + 1;
  if (weekNumber == 8) {
    return "BREAK";
  }
  if (weekNumber > 8) {
    return "Week " + (weekNumber - 1);
  }
  return "Week " + weekNumber;
};

const hours = Array.from({ length: 14 }, (_, i) => 8 + i); // 8AM to 9PM

const Timetable = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date()); // Start of the current week (Monday)
  const [days, setDays] = useState([]); // Dynamically generated days array
  // const [clickedCells, setClickedCells] = useState({}); // State to track clicked cells
  const { clickedCells, setClickedCells } = useContext(FilterContext);
  const [isDragging, setIsDragging] = useState(false); // State to track if mouse is being dragged
  const [dragStartState, setDragStartState] = useState(null); // State to track the initial state of the starting cell
  const { editUnit, unitInfo: classInfo } = useContext(PageContext);
  const { units } = useContext(UnitContext);

  // Update the days array whenever the current week changes
  useEffect(() => {
    const startOfWeek = new Date(currentWeekStart);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1); // Set to Monday of the current week
    const weekDates = getCurrentWeekDates(startOfWeek);
    const updatedDays = weekDates.map((date, index) => ({
      name: ["MON", "TUE", "WED", "THU", "FRI"][index],
      date: formatDate(date),
    }));
    setDays(updatedDays);
  }, [currentWeekStart]);

  // Function to handle cell clicks
  const handleCellClick = (day, hour, isSelecting, event) => {
    const cellKey = `${day.name}-${hour}`;
    if (clickedCells[cellKey] !== "class") {
      setClickedCells((prev) => ({
        ...prev,
        [cellKey]: isSelecting,
      }));
    } else if (clickedCells[cellKey] === "class") {
      const cell = getCellById(cellKey);
      const classId = cell.getAttribute("class-id");
      setTextOnCellById(classId);
    }
  };

  async function setTextOnCellById(classId) {
    const classInfo = await getClassInfo(classId)

    const text = `${classInfo.unitcode} ${classInfo.classType}`;
    for (
      let i = classInfo.time / 100;
      i < parseInt(classInfo.time / 100 + classInfo.duration);
      i++
    ) {
      const cellKey = `${classInfo.day}-${i}`;
      const cell = getCellById(cellKey);
      cell.innerText = text;
    }
  }

  useEffect(() => {
    if (units.length === 0) {
      return;
    }
    if (editUnit !== -1) {
      const c = units
        .filter((element) => {
          return element.unitcode === classInfo.unitcode;
        })[0]
        .classTypes.filter((type) => type.name === classInfo.classType)[0];

      const duration = c.duration;
      const classes = c.classes;

      setClickedCells((prev) => {
        const updatedCells = { ...prev };

        classes.forEach((classItem) => {
          for (
            let hour = parseInt(classItem.time / 100);
            hour < classItem.time / 100 + duration;
            hour++
          ) {
            const cellKey = `${classItem.day}-${hour}`;
            updatedCells[cellKey] = "class";

            const cellId = getCellById(cellKey);
            cellId.setAttribute("class-id", classItem.class_id);
          }
        });

        return updatedCells;
      });
    } else {
      setClickedCells({});
    }
  }, [editUnit]);

  const getCellById = (cellKey) => {
    const cell = document.getElementById(cellKey);
    console.log(cell); // Logs the <td> element
    return cell;
  };

  // Function to handle mouse down event
  const handleMouseDown = (day, hour) => {
    const cellKey = `${day.name}-${hour}`;
    const isClicked = clickedCells[cellKey];
    setDragStartState(!isClicked); // Set the initial state (true for selecting, false for deselecting)
    setIsDragging(true);
    handleCellClick(day, hour, !isClicked); // Toggle the state of the starting cell
  };

  // Function to handle mouse over event
  const handleMouseOver = (day, hour) => {
    if (isDragging) {
      handleCellClick(day, hour, dragStartState); // Set the state based on the initial drag state
    }
  };

  // Function to handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStartState(null); // Reset the drag start state
  };

  // Function to navigate to the previous week
  const goToPreviousWeek = () => {
    if (getWeekNumber(currentWeekStart) == "Week 1") {
      return;
    }
    const newStartDate = new Date(currentWeekStart);
    newStartDate.setDate(newStartDate.getDate() - 7);
    setCurrentWeekStart(newStartDate);
  };

  // Function to navigate to the next week
  const goToNextWeek = () => {
    if (getWeekNumber(currentWeekStart) == "Week 12") {
      return;
    }
    const newStartDate = new Date(currentWeekStart);
    newStartDate.setDate(newStartDate.getDate() + 7);
    setCurrentWeekStart(newStartDate);
  };

  // Add a global mousemove listener to handle the dragging behavior
  const handleMouseMove = (e) => {
    if (isDragging) {
      // Track mouse movement and handle cell click accordingly
      const targetElement = e.target;
      if (
        targetElement &&
        targetElement.dataset.day &&
        targetElement.dataset.hour
      ) {
        handleCellClick(
          { name: targetElement.dataset.day },
          parseInt(targetElement.dataset.hour, 10),
          dragStartState,
        );
      }
    }
  };

  const handleMouseUpGlobal = () => {
    setIsDragging(false);
    setDragStartState(null);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUpGlobal);
  };

  // Attach the global mousemove event listener and mouseup event listener
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUpGlobal);

  // Calculate the week number
  const weekNumber = getWeekNumber(currentWeekStart);

  return (
    <ScrollArea w="100%" h="100vh">
      <div className="timetable-container" onMouseLeave={handleMouseUp}>
        <div className="week-header">
          <p onClick={goToPreviousWeek}>
            <IconArrowNarrowLeft />
          </p>
          <span>{weekNumber} </span>
          <p onClick={goToNextWeek}>
            <IconArrowNarrowRight />
          </p>
        </div>

        <table className="timetable">
          <thead>
            <tr>
              <th style={{ width: "9%" }}></th>
              {days.map((day) => (
                <th key={day.name} style={{ width: "18%" }}>
                  {day.name} <br /> {day.date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour) => (
              <tr key={hour}>
                <td>
                  {hour <= 11
                    ? `${hour} AM`
                    : hour === 12
                      ? "12 PM"
                      : `${hour - 12} PM`}
                </td>
                {days.map((day) => {
                  const cellKey = `${day.name}-${hour}`;
                  const isClicked = clickedCells[cellKey];

                  return (
                    <td
                      key={cellKey}
                      id={cellKey}
                      className={`empty-slot ${isClicked && isClicked !== "class" ? "clicked" : ""
                        } ${isClicked === "class" ? "class-time" : ""}`}
                      onMouseDown={(e) => handleMouseDown(day, hour, e)}
                      onMouseOver={() => handleMouseOver(day, hour, cellKey)}
                      onMouseUp={handleMouseUp}
                    ></td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollArea>
  );
};

export default Timetable;
