import { Accordion, AccordionItem } from "@nextui-org/react";

const data = [1, 2, 3, 4, 5];

const SyllabusAccordion = () => {
  return (
    <Accordion variant="bordered">
      <AccordionItem aria-label="syllabus" title="Syllabus" className="dark font-bold" key="1">
        <Accordion>
          {data.map((ele) => {
            return (
              <AccordionItem aria-label="syllabus" title={`Week ${ele}`} className="dark font-bold" key={ele}>
                <div className="flex flex-col gap-[0.7rem] px-[2rem] pb-[2rem]">
                  <h1 className="text-lg font-bold text-default-500">Introduction to HTML</h1>
                  <p className="text-default-500 font-normal text-sm">HTML tags and structure.</p>
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
