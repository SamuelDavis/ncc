import gearUpBikeShopSrc from "../images/program-icons/bicycle.png"
import homeworkSrc from "../images/program-icons/homework.png"
import mentorSrc from "../images/program-icons/mentor.png"
import spanishSrc from "../images/program-icons/spanish.png"
import schoolBreakSrc from "../images/program-icons/school-break.jpg"
import eslSrc from "../images/program-icons/esl.jpg"
import workshopSrc from "../images/program-icons/workshop.png"
import { FaChild, FaMusic } from "react-icons/all"
import React from "react"
export default [
  {
    name: "Gear Up Bike Shop",
    desc:
      "We invite kids to learn and earn bikes through completing tasks and community service. The bike shop is a place where kids develop healthy relationships with positive role models while learning basic mechanical skills and the value of hard work. We teach them how to keep their bikes functioning and safe, while also pointing them to the importance of a Christ-centered life. The Gear Up Bike Shop is open Tuesdays and Thursdays 5:00pm – 7:00pm and Saturdays 10:00am – 12:00pm.",
    icon: gearUpBikeShopSrc,
  },
  {
    name: "Learning Zone",
    desc:
      "We offer elementary children who don’t have WiFi at home, a safe place to do their homework. Supervised use of laptops and printers are available for kids to complete their school assignments. Learning Zone will be off for school break and will start back up on Sept 2nd resuming the same time and days, Mondays & Wednesdays 4:00 pm – 6:30pm.",
    icon: homeworkSrc,
  },
  {
    name: "iCARE Mentors",
    desc:
      "We provide encouragement and hope to people facing challenging times. We listen to each neighbor’s story, consider the situation objectively and offer prayer, wise perceptive, next step options and connection to local resources. iCARE mentors are available Mondays and Wednesdays from 10am – noon and 2:30pm – 5:30pm and Saturdays 10am – noon.",
    icon: mentorSrc,
  },
  {
    name: "Spanish Partners",
    desc:
      "We provide Spanish translation or interpretation services for our neighbors who are limited in the English language. Spanish partners are available on Saturdays 10am – noon.",
    icon: spanishSrc,
  },
  {
    name: "School Break Activities",
    desc:
      "We want kids in the neighborhood to have fun together during school breaks. During Spring Break, Christmas Break and other times of the year, we will organize one and two hour activities. Look for upcoming events on our calendar. Children ages 6 – 12 are welcome.",
    icon: schoolBreakSrc,
  },
  {
    name: "English As A Second Language",
    desc:
      "ESL (English as a Second Language) classes will be off starting June 10th and will start back on September 7th. They will be offered on Mondays for beginning adults from 9:45 am to 11:45 am. Babysitting for ages 3-4 years old.",
    icon: eslSrc,
  },
  {
    name: "Workshops",
    desc:
      "We offer life-skill workshops each month that will enhance our neighbors’ lives. Check the Neighborhood C.A.R.E. workshop calendar to see what workshop is scheduled next.",
    icon: workshopSrc,
  },
  {
    name: "Little Tree of Knowledge",
    desc:
      "Classes will be in session on Monday’s and Wednesday’s from 9:45 am to 11:45 am starting on September 2nd.",
    icon: <FaChild size={"56px"} />,
  },
  {
    name: "Música Guitar Classes",
    desc:
      "Beginning November 5th, Guitars are not required, however, willingness to learn and have fun is! Join us on Wednesday’s from 5:00p.m. to 6:00p.m. Classes will be off from 6/10/2019 back in session on 9/2/2019.",
    icon: <FaMusic size={"56px"} />,
  },
]
