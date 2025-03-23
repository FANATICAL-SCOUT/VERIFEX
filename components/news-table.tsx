"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  Search,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface NewsItem {
  id: string
  headline: string
  source: string
  date: string
  status: "real" | "fake" | "unverified"
  confidenceScore: number
}

interface NewsTableProps {
  data: NewsItem[]
}

const NewsTable = ({ data }: NewsTableProps) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortField, setSortField] = useState<keyof NewsItem>("date")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")
  const itemsPerPage = 10

  // Filter data based on search query
  const filteredData = data.filter(
    (item) =>
      item.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.source.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortField === "date") {
      const dateA = new Date(a.date).getTime()
      const dateB = new Date(b.date).getTime()
      return sortDirection === "asc" ? dateA - dateB : dateB - dateA
    } else if (sortField === "confidenceScore") {
      return sortDirection === "asc" ? a.confidenceScore - b.confidenceScore : b.confidenceScore - a.confidenceScore
    } else {
      const valueA = a[sortField].toString().toLowerCase()
      const valueB = b[sortField].toString().toLowerCase()
      return sortDirection === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
    }
  })

  // Paginate data
  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const paginatedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleSort = (field: keyof NewsItem) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const getSortIcon = (field: keyof NewsItem) => {
    if (field !== sortField) {
      return <ArrowUpDown size={16} className="ml-1" />
    }
    return sortDirection === "asc" ? <ArrowUp size={16} className="ml-1" /> : <ArrowDown size={16} className="ml-1" />
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "real":
        return <CheckCircle size={16} className="mr-1 text-[#00C853]" />
      case "fake":
        return <AlertTriangle size={16} className="mr-1 text-[#FF5252]" />
      default:
        return <Clock size={16} className="mr-1 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "real":
        return "bg-[#00C853] text-white"
      case "fake":
        return "bg-[#FF5252] text-white"
      default:
        return "bg-gray-600 text-white"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search headlines or sources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-700 border-gray-600 text-white"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>
      </div>

      <div className="rounded-md border border-gray-700 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-900">
            <TableRow>
              <TableHead
                className="text-white cursor-pointer hover:text-[#00C853]"
                onClick={() => handleSort("headline")}
              >
                <div className="flex items-center">
                  Headline
                  {getSortIcon("headline")}
                  <span className="sr-only">
                    {sortField === "headline"
                      ? sortDirection === "asc"
                        ? "sorted ascending"
                        : "sorted descending"
                      : "sort"}
                  </span>
                </div>
              </TableHead>
              <TableHead
                className="text-white cursor-pointer hover:text-[#00C853]"
                onClick={() => handleSort("source")}
              >
                <div className="flex items-center">
                  Source
                  {getSortIcon("source")}
                  <span className="sr-only">
                    {sortField === "source"
                      ? sortDirection === "asc"
                        ? "sorted ascending"
                        : "sorted descending"
                      : "sort"}
                  </span>
                </div>
              </TableHead>
              <TableHead className="text-white cursor-pointer hover:text-[#00C853]" onClick={() => handleSort("date")}>
                <div className="flex items-center">
                  Date
                  {getSortIcon("date")}
                  <span className="sr-only">
                    {sortField === "date"
                      ? sortDirection === "asc"
                        ? "sorted ascending"
                        : "sorted descending"
                      : "sort"}
                  </span>
                </div>
              </TableHead>
              <TableHead
                className="text-white cursor-pointer hover:text-[#00C853]"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center">
                  Status
                  {getSortIcon("status")}
                  <span className="sr-only">
                    {sortField === "status"
                      ? sortDirection === "asc"
                        ? "sorted ascending"
                        : "sorted descending"
                      : "sort"}
                  </span>
                </div>
              </TableHead>
              <TableHead
                className="text-white cursor-pointer hover:text-[#00C853]"
                onClick={() => handleSort("confidenceScore")}
              >
                <div className="flex items-center">
                  AI Confidence
                  {getSortIcon("confidenceScore")}
                  <span className="sr-only">
                    {sortField === "confidenceScore"
                      ? sortDirection === "asc"
                        ? "sorted ascending"
                        : "sorted descending"
                      : "sort"}
                  </span>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <TableRow key={item.id} className="hover:bg-gray-700">
                  <TableCell className="font-medium text-white">{item.headline}</TableCell>
                  <TableCell className="text-gray-300">{item.source}</TableCell>
                  <TableCell className="text-gray-300">{item.date}</TableCell>
                  <TableCell>
                    <Badge className={`flex items-center w-fit ${getStatusColor(item.status)}`}>
                      {getStatusIcon(item.status)}
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="w-full max-w-[100px] bg-gray-700 rounded-full h-2 mr-2">
                        <div
                          className={`h-2 rounded-full ${item.status === "fake" ? "bg-[#FF5252]" : "bg-[#00C853]"}`}
                          style={{ width: `${item.confidenceScore}%` }}
                        ></div>
                      </div>
                      <span className="text-white">{item.confidenceScore}%</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-gray-400">
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} results
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <ChevronLeft size={16} />
            </Button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNumber = i + 1
              return (
                <Button
                  key={i}
                  variant={pageNumber === currentPage ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNumber)}
                  className={
                    pageNumber === currentPage
                      ? "bg-[#00C853] hover:bg-[#00C853]/90 text-white"
                      : "border-gray-600 text-gray-300 hover:bg-gray-700"
                  }
                >
                  {pageNumber}
                </Button>
              )
            })}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewsTable

