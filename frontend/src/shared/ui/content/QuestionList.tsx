interface IQuestionListProps {
  items: readonly string[];
}

export const QuestionList = ({ items }: IQuestionListProps) => (
  <ul className="mt-5 space-y-3">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="text-accent" aria-hidden="true">?</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
