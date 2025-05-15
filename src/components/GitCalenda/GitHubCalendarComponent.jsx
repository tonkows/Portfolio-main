import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import "./gitHubCalendarComponent.css";

function Github() {
  const [blockSize, setBlockSize] = useState(15);
  const [blockMargin, setBlockMargin] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setBlockSize(6); // ขนาดบล็อกเล็กสุด
        setBlockMargin(2);
      } else if (window.innerWidth <= 768) {
        setBlockSize(8); // ขนาดบล็อกเมื่อหน้าจอขนาดกลาง
        setBlockMargin(3);
      } else {
        setBlockSize(12); // ขนาดบล็อกเมื่อหน้าจอขนาดใหญ่
        setBlockMargin(4);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call the function on initial render
    handleResize();

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div className="calendar-container">
        <GitHubCalendar
          username="tonkows"
          blockSize={blockSize}
          blockMargin={blockMargin}
          color="#c084f5"
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
