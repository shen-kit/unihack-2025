export const getAllClasses = async (stuid, year, sem) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/timetable/${stuid}/${year}/${sem}/all`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.error("Failed to fetch classes:", error);
    return { message: "Failed to fetch classes", error: error.message };
  }
};

export const getClassInfo = async (classId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/class/${classId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.success) {
      return data.data;
    }
  } catch (error) {
    console.error("Failed to fetch classes:", error);
    return { message: "Failed to fetch classes", error: error.message };
  }
};
