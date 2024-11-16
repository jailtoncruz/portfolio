import enCV from "../../assets/en-cv-jailton-cruz.pdf";

export function CurriculumVitae() {
  return (
    <div className="flex flex-1 flex-col items-center py-4 px-8">
      <h1 className="font-bold text-2xl mb-12">Curriculum Vitae</h1>
      <embed
        src={enCV}
        type="application/pdf"
        className="h-full w-full max-w-[900px]"
      ></embed>
    </div>
  );
}
