// Dependencies
import { Accordion, AccordionItem } from "@nextui-org/react";

type SyllabusAccordionProps = {
  syllabus: { week: number; topic: string; content: string }[];
};

const SyllabusAccordion = (props: SyllabusAccordionProps) => {
  return (
    <Accordion variant="bordered">
      <AccordionItem aria-label="syllabus" title="Syllabus" className="dark font-bold" key="1">
        <Accordion>
          {props.syllabus.map((data, index) => {
            return (
              <AccordionItem aria-label="syllabus" title={`Week ${data.week}`} className="dark font-bold" key={index}>
                <div className="flex flex-col gap-[0.7rem] px-[2rem] pb-[2rem]">
                  <h1 className="text-lg font-bold text-default-500">{data.topic}</h1>
                  <p className="text-default-500 font-normal text-sm">{data.content}</p>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </AccordionItem>
    </Accordion>
  );
};

export default SyllabusAccordion;
