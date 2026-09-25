


interface HistoryButtonProps {
  title: string;
  onSelect: () => void;
}

export const HistoryButton = ({ title, onSelect }: HistoryButtonProps) => {
return (
    
      <button type="button" className="search-chip" onClick={onSelect}>
        {title}
      </button>
  )
}
