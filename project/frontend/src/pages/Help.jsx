import { useState } from "react";
import { Flex, Text, Button, Accordion, AccordionItem } from "@mantine/core";
import Lottie from "lottie-react";
import grassAnimation from "../assets/help-background-animation.json"; // Import the Lottie animation
import "../css/Help.css";

export default function Help() {
  const [faq, setFaq] = useState([
    { question: "How do I reset my password?", answer: "Go to settings and click on 'Reset Password'." },
    { question: "Where can I find my timetable?", answer: "Your timetable is available in the main section." },
    { 
      question: "How do I contact support?", 
      answer: <>You can contact <a href="https://www.monash.edu/students/support/connect" target="_blank" rel="noopener noreferrer">Monash Connect</a> for enquiries.</> 
    }
  ]);

  const handleContactSupport = () => {
    window.location.href = "tel:+61399026011";
  };

  const handleTimetableHelpForm = () => {
    window.open(
      "https://forms.apps.monash.edu/frevvo/web/tn/monash.edu/u/614aac3c-8ab8-4309-9283-375663fa97d8/app/_yAD50H-1Ee-zt6dK4uy2Fw/form/6b427f69-f09a-46ce-86a6-2c2ac0d90f6d?typeId=_b98fQGExEe-XP6L6G_r1GA&locale=en_US,eng_US,eng,en&embed=true",
      "_blank"
    );
  };

  return (
    <div className="help-page">
      <Flex direction="column" align="center" className="help-container">
        <Text className="help-title">Help & FAQ</Text>
        <Accordion className="help-accordion">
          {faq.map((item, index) => (
            <AccordionItem key={index} label={item.question}>
              <Text>{item.answer}</Text>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Timetable Help Form Button */}
        <Button className="help-button" onClick={handleTimetableHelpForm}>
          Timetable Help Form
        </Button>

        <Button className="help-button" onClick={handleContactSupport}>
          Contact Support
        </Button>
      </Flex>

      {/* Grass Animation - Positioned Behind */}
      <div className="help-animation-container">
        <Lottie animationData={grassAnimation} className="help-animation" />
      </div>
    </div>
  );
}
