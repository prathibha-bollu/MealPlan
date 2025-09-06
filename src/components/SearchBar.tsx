import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <input
        type="text"
        placeholder="Search meals..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input pl-12 pr-4 text-base"
      />
    </div>
  );
}