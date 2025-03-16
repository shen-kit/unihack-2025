export const getGeneratedTimetable = async (
  stuid,
  year,
  sem,
  disallowedTimes,
  maxDailyHours,
) => {
  const body = {
    disallowedTimes,
    maxDailyHours,
  };
  try {
    const response = await fetch(
      `http://localhost:3000/api/timetable/${stuid}/${year}/${sem}/generate`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    if (!response.ok) {
      throw new Erorr(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.success) {
      return data.data;
    }
  } catch (err) {
    console.error("Failed to get generated timetable: ", err);
  }
};
