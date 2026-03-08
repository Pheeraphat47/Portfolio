"use client";

import { useState } from "react";
import Image from "next/image";
import CaseStudyDetail from "./CaseStudyDetail";

export interface CaseStudyStep {
  title: string;
  content: string;
  evidence?: string;
  keyInsight?: string;
  artifacts?: string[];
  metrics?: { label: string; value: string; description: string }[];
  strategy?: string;
}

export interface CaseStudyProject {
  id: number;
  title: string;
  role: string;
  duration: string;
  thumbnail: string;
  summary: string;
  caseStudy: {
    problem?: CaseStudyStep;
    understanding?: CaseStudyStep;
    solutions?: CaseStudyStep;
    prototype?: CaseStudyStep;
    testing?: CaseStudyStep;
    launch?: CaseStudyStep;
  };
  techStack: string[];
}

const caseStudies: CaseStudyProject[] = [
  {
    id: 1,
    title: "Skooldio BD Process Automation",
    role: "Business Development Intern",
    duration: "Jun – Aug 2025",
    thumbnail: "/experience/skd4.jpg",
    summary:
      "Identified and automated repetitive BD workflows, reducing manual workload by 20% and enabling the team to focus on high-value strategic initiatives.",
    caseStudy: {
      problem: {
        title: "Identify the Problem",
        content:
          "The Business Development team spent significant time on repetitive manual tasks — data entry, lead tracking updates, and report generation — taking away from strategic work like market analysis and partnership outreach.",
        evidence:
          "Time-tracked team activities for 2 weeks and found that 20% of working hours were spent on tasks that could be automated.",
      },
      understanding: {
        title: "Understand the Problem",
        content:
          "Shadowed team members through their daily workflows, documented each step in detail, and identified bottlenecks. Created a process map highlighting 5 high-frequency, low-complexity tasks as automation candidates.",
      },
      solutions: {
        title: "Brainstorm Solutions",
        content:
          "Evaluated automation options: custom scripts, Zapier, n8n (self-hosted), and Make. Chose n8n for its flexibility, self-hosting capability (data privacy), and visual workflow builder that non-technical team members could maintain.",
      },
      prototype: {
        title: "Prototype & Mockup",
        content:
          "Built proof-of-concept automation flows for the 2 highest-impact tasks first: (1) automated lead data enrichment and (2) weekly performance report generation. Demoed to the team for feedback before full implementation.",
      },
      testing: {
        title: "Test & Iterate",
        content:
          "Ran automations in parallel with manual processes for 1 week to validate accuracy. Fixed edge cases with data formatting and added error notifications. Trained team members on monitoring and adjusting workflows.",
        keyInsight:
          "Building in failure notifications was critical — the team needed confidence that automated tasks were completing correctly before fully trusting the system.",
      },
      launch: {
        title: "Launch & Success Metrics",
        content:
          "Fully deployed 5 automation workflows and created documentation for the team to maintain and extend them independently.",
        metrics: [
          {
            label: "Manual Workload",
            value: "-20%",
            description: "Reduction in repetitive manual tasks",
          },
          {
            label: "Report Generation",
            value: "5min → auto",
            description: "From manual compilation to automated delivery",
          },
          {
            label: "Data Accuracy",
            value: "99.5%",
            description: "Automation accuracy vs manual baseline",
          },
        ],
        strategy:
          "Phased automation: start with 2 highest-impact workflows → validate → expand to remaining 3 tasks, with team training throughout.",
      },
    },
    techStack: ["n8n", "Google Sheets API", "REST APIs", "Python"],
  },
  {
    id: 2,
    title: "CU Co-op Store Revamp (Charm Case Competition)",
    role: "Business Analyst / Team Member",
    duration: "",
    thumbnail: "/activities/charmcasecompetition.webp",
    summary:
      "นำเสนอกลยุทธ์เพื่อเพิ่มยอดขายและการมีส่วนร่วมของนิสิตกับสหกรณ์จุฬาฯ ผ่านระบบหุ้น การจัดโปรโมชันชุดสินค้า และโครงการฝึกประสบการณ์ทำงาน",
    caseStudy: {
      problem: {
        title: "Identify the Problem",
        content:
          "สหกรณ์จุฬาฯ เผชิญปัญหารายได้จากการขายลดลง นิสิตขาดการมีส่วนร่วม และมีการแข่งขันสูงจากทั้งในและนอกมหาวิทยาลัย นอกจากนี้สินค้ายังไม่ตอบโจทย์การใช้งานของนิสิต",
        evidence:
          "จากแบบสำรวจนิสิตจำนวน 77 คน พบว่าสาเหตุที่ไม่ซื้อสินค้าสหกรณ์เพราะไม่มีสินค้าหรือแบรนด์ที่ต้องการ และมีนิสิตถึง 76.6% ที่ไม่ทราบว่าสหกรณ์มีเปิดขายหุ้น",
      },
      understanding: {
        title: "Understand the Problem",
        content:
          "วิเคราะห์ข้อมูลงบการเงินปี 2564 พบว่าไม่มีค่าใช้จ่ายด้านการโฆษณาประชาสัมพันธ์เลย (0 บาท) และจำนวนสมาชิกสามัญยังมีจำนวนน้อยมากเมื่อเทียบกับนิสิตทั้งหมด ทำให้นิสิตมีความสัมพันธ์กับสหกรณ์เพียงแค่ในฐานะลูกค้าทั่วไปเท่านั้น",
      },
      solutions: {
        title: "Brainstorm Solutions",
        content:
          "นำเสนอ 3 กลยุทธ์หลัก ได้แก่ 1) ดึงดูดนิสิตด้วยการโปรโมทระบบหุ้นของสหกรณ์ 2) ปรับกลยุทธ์การตลาดออนไลน์และออฟไลน์ รวมถึงการจัดชุด Starter Kit 3) สร้างโครงการอบรมระยะสั้น 2-4 สัปดาห์ ให้นิสิตเข้ามาช่วยงานสหกรณ์",
      },
      prototype: {
        title: "Prototype & Mockup",
        content:
          "ออกแบบภาพจำลอง (Mockup) สำหรับโพสต์โปรโมทบนโซเชียลมีเดีย ป้ายโปรโมชันหน้าร้าน และตัวอย่างการจัดแพ็กเกจชุดสินค้า (Starter Kit) สำหรับนิสิตปี 1 เช่น ชุดนิสิตชายราคา 1,539 บาท ชุดนิสิตหญิงราคา 1,119 บาท และชุดแล็ปคณะวิศวะราคา 2,399 บาท",
      },
      launch: {
        title: "Launch & Success Metrics",
        content:
          "วางแผนงบประมาณจำนวน 37,000 บาท สำหรับการดำเนินงานด้านประชาสัมพันธ์ การทำตลาด และโครงการฝึกประสบการณ์",
        metrics: [
          {
            label: "Serviceable Obtainable Market (SOM)",
            value: "6,000,000 บาท",
            description:
              "มูลค่าตลาดขั้นต่ำที่สหกรณ์ควรจะขายชุดนิสิตได้ (ประมาณ 50%)",
          },
        ],
        strategy:
          "เน้นการสื่อสารด้วย Key Message 'ครบ จบ ถูกระเบียบ Only at CU CO-OP' และใช้ประโยชน์จากทำเลที่ตั้งสหกรณ์ที่อยู่ใกล้สาขาหอพักนิสิต",
      },
    },
    techStack: ["Business Strategy", "Market Analysis", "Survey Design"],
  },

  {
    id: 3,
    title: "Wat to Park: Pocket Park (Bangkok Climathon)",
    role: "Team Member",
    duration: "",
    thumbnail: "/activities/climathon.webp",
    summary:
      "นำเสนอโครงการพัฒนาพื้นที่เขตธรณีสงฆ์ของวัดแก้วแจ่มฟ้าให้เป็นสวนสาธารณะขนาดเล็ก (Pocket Park) เพื่อแก้ไขปัญหาการขาดแคลนพื้นที่สีเขียวในกรุงเทพฯ",
    caseStudy: {
      problem: {
        title: "Identify the Problem",
        content:
          "ประชากรในกรุงเทพฯ สามารถเข้าถึงพื้นที่สีเขียวได้ยาก การเดินทางต้องใช้ยานพาหนะซึ่งก่อให้เกิดคาร์บอนไดออกไซด์ (CO2) และรถติด ซึ่งส่งผลให้เกิดปัญหาเกาะความร้อนเมือง (Urban Heat)",
        evidence:
          "กรุงเทพมหานครมีพื้นที่สาธารณะสีเขียวเพียง 40 แห่ง ซึ่งถือว่าไม่เพียงพอต่อความต้องการของประชาชน",
      },
      understanding: {
        title: "Understand the Problem",
        content:
          "ทำการวิเคราะห์เชิงพื้นที่ผ่าน Spatial Analysis (GIS), Goodwalk Map, Space Syntax Analysis และเก็บข้อมูลแบบสอบถามนำร่อง (Pilot Study) เพื่อศึกษาพฤติกรรมการเดินทางไปสวนสาธารณะ พบว่าพื้นที่วัดทั้ง 488 แห่งในกรุงเทพฯ มีศักยภาพในการดัดแปลงเป็นพื้นที่สาธารณะได้",
      },
      solutions: {
        title: "Brainstorm Solutions",
        content:
          "เสนอให้ใช้พื้นที่ธรณีสงฆ์ของ 'วัดแก้วแจ่มฟ้า' ในเขตบางรัก เป็นพื้นที่นำร่องในการสร้าง Pocket Park เนื่องจากทำเลตั้งอยู่ในแหล่งชุมชน แหล่งเศรษฐกิจ และมีการสัญจรเยอะ เหมาะแก่การสร้างโครงข่ายพื้นที่สีเขียว (Green Space Network)",
      },
      prototype: {
        title: "Prototype & Mockup",
        content:
          "นำเสนอตัวอย่างรูปแบบการทำ Pocket Park และการจัดพื้นที่ของสถาปนิก เพื่อสร้างระบบนิเวศใหม่ให้กับสิ่งมีชีวิตและเป็นพื้นที่สาธารณะที่ดีของชุมชน",
      },
      launch: {
        title: "Launch & Success Metrics",
        content:
          "กำหนดแผนโครงการระยะ 15 ปี (แบ่งเป็นระยะ 0-5, 5-10, 10-15 ปี) ครอบคลุมตั้งแต่การคัดเลือกพื้นที่ จัดหาแหล่งเงินทุน การก่อสร้าง ไปจนถึงแผนการสื่อสารเพื่อเปลี่ยนพฤติกรรมการใช้พื้นที่",
        metrics: [
          {
            label: "Environmental Impact",
            value: "CO2 Reduction",
            description:
              "ช่วยลดสัดส่วนของ CO2 ที่เป็นสาเหตุให้เกิดภาวะโลกร้อน และเพิ่มปริมาณออกซิเจน",
          },
          {
            label: "Community Value",
            value: "Quality of Life",
            description:
              "ยกระดับคุณภาพชีวิตให้คนในชุมชนมีพื้นที่สำหรับพบปะและทำกิจกรรม",
          },
        ],
        strategy:
          "สร้างความร่วมมือระหว่างกลุ่มผู้มีส่วนได้ส่วนเสียอย่างครอบคลุม ทั้ง กทม., สสส., วัด, สถาบันการศึกษา, และชุมชนในพื้นที่",
      },
    },
    techStack: [
      "GIS / Spatial Analysis",
      "Space Syntax Analysis",
      "Urban Planning",
      "Design Thinking",
    ],
  },
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyProject | null>(
    null,
  );

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-black text-dark font-heading mb-4">
          Projects & Case Studies
        </h2>
        <p className="text-muted font-body text-sm mb-2">
          Deep dives into how I identify problems, think through solutions, and
          deliver measurable impact.
        </p>
        <div className="w-full h-px bg-gray-200 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <button
              key={study.id}
              className="group text-left bg-white overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 h-full flex flex-col"
              onClick={() => {
                setSelectedStudy(study);
                document.body.style.overflow = "hidden";
              }}
            >
              <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                <Image
                  src={study.thumbnail}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-[10px] font-body tracking-widest text-sage-dark uppercase mb-2">
                  {study.role}
                </span>
                <h3 className="text-lg font-heading font-bold text-dark mb-2 group-hover:text-sage-dark transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted font-body text-xs leading-relaxed mb-4">
                  {study.summary}
                </p>
                <span className="text-sage-dark font-body text-xs font-bold mt-auto group-hover:underline">
                  Read Case Study →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <CaseStudyDetail
          study={selectedStudy}
          onClose={() => {
            setSelectedStudy(null);
            document.body.style.overflow = "";
          }}
        />
      )}
    </section>
  );
}
