import { Box, Typography } from "@mui/material";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  parse,
} from "date-fns";
import { ko, enUS } from "date-fns/locale";

export default function CustomCalendar({
  date,
  cellWidth = 35,
  cellHeight = 32,
}: {
  date: string;
  cellWidth?: number;
  cellHeight?: number;
}) {
  // date: "2025-07-05 12:00:00" 형식 가정
  const selected = parse(date, "yyyy-MM-dd HH:mm:ss", new Date());
  const monthStart = startOfMonth(selected);
  const monthEnd = endOfMonth(selected);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  // 한글 날짜/시간
  const koreanDate = format(selected, "yyyy년 M월 d일 EEEE", { locale: ko });
  const koreanTime = format(selected, "a h시", { locale: ko });
  // 영문 날짜/시간
  const englishDate = format(selected, "EEEE, MMMM d, yyyy", { locale: enUS });
  const englishTime = format(selected, "a hh:mm", { locale: enUS });

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(day);
      day = addDays(day, 1);
    }
    rows.push(days);
    days = [];
  }

  return (
    <>
      {/* 상단 날짜/시간 */}
      <Box sx={{ mb: 6, display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography fontSize={16} align="center">
          {koreanDate} | {koreanTime}
        </Typography>
        <Typography
          fontSize={14}
          fontWeight={400}
          align="center"
          color="#b6b6b6"
        >
          {englishDate} | {englishTime.replace("AM", "AM").replace("PM", "PM")}
        </Typography>
      </Box>
      <Box
        sx={{
          width: 320,
          borderTop: "1px solid #ddd",
          borderBottom: "1px solid #ddd",
          py: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
            <Typography
              key={d}
              fontSize={14}
              color={d === "일" ? "#F87171" : "#020817"}
              width={cellWidth}
              align="center"
            >
              {d}
            </Typography>
          ))}
        </Box>
        {rows.map((week, i) => (
          <Box
            key={i}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {week.map((d, idx) => {
              // 이번 달이 아니면 빈 칸
              if (format(d, "M") !== format(selected, "M")) {
                return (
                  <Box
                    key={idx}
                    sx={{ width: cellWidth, height: cellHeight }}
                  />
                );
              }
              const isSunday = idx === 0;
              return (
                <Box
                  key={idx}
                  sx={{
                    width: cellWidth,
                    height: cellHeight,
                    borderRadius: "50%",
                    bgcolor: isSameDay(d, selected) ? "#F87171" : "transparent",
                    color: isSameDay(d, selected)
                      ? "#fff"
                      : isSunday
                      ? "#F87171"
                      : "#222",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                  }}
                >
                  {format(d, "d")}
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
    </>
  );
}
