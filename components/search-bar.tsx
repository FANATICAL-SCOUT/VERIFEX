"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps {
  placeholder?: string
  buttonText?: string
  onSearch?: (query: string) => void
  className?: string
}

const SearchBar = ({
  placeholder = "Enter URL or paste news article...",
  buttonText = "Analyze",
  onSearch,
  className = "",
}: SearchBarProps) => {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    if (onSearch && query.trim()) {
      onSearch(query)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className={`flex w-full max-w-3xl ${className}`}>
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full py-6 pl-4 pr-10 bg-gray-800 border-gray-700 text-white rounded-l-md focus:ring-violet-500 focus:border-violet-500"
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>
      <Button
        onClick={handleSearch}
        className="bg-violet-600 hover:bg-violet-700 text-white font-medium py-6 px-6 rounded-r-md"
      >
        {buttonText}
      </Button>
    </div>
  )
}

export default SearchBar

