"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface HeatmapProps {
  data: {
    country: string
    count: number
    lat: number
    lng: number
  }[]
}

const Heatmap = ({ data }: HeatmapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [timeRange, setTimeRange] = useState("week")
  const [mapLoaded, setMapLoaded] = useState(false)

  // Mock function to filter data based on time range
  const getFilteredData = () => {
    // In a real app, this would filter based on the selected time range
    return data
  }

  useEffect(() => {
    if (!mapContainerRef.current) return

    // Create a map div
    const mapDiv = document.createElement("div")
    mapDiv.style.width = "100%"
    mapDiv.style.height = "100%"
    mapDiv.style.borderRadius = "0.5rem"
    mapContainerRef.current.innerHTML = ""
    mapContainerRef.current.appendChild(mapDiv)

    // Load the map script
    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU&callback=initMap&libraries=visualization`
    script.async = true
    script.defer = true

    // Define the callback function
    window.initMap = () => {
      const map = new google.maps.Map(mapDiv, {
        center: { lat: 20, lng: 0 },
        zoom: 2,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
      })

      // Create heatmap layer
      const heatmapData = getFilteredData().map((point) => {
        return {
          location: new google.maps.LatLng(point.lat, point.lng),
          weight: point.count / 10,
        }
      })

      const heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        map: map,
        radius: 20,
        gradient: [
          "rgba(0, 0, 0, 0)",
          "rgba(255, 82, 82, 0.3)",
          "rgba(255, 82, 82, 0.5)",
          "rgba(255, 82, 82, 0.7)",
          "rgba(255, 82, 82, 0.9)",
          "rgba(255, 82, 82, 1)",
        ],
      })

      setMapLoaded(true)
    }

    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      delete window.initMap
    }
  }, [])

  useEffect(() => {
    if (mapLoaded && window.google) {
      // Update heatmap data when timeRange changes
      // In a real app, you would update the heatmap with new data
    }
  }, [timeRange, mapLoaded])

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold text-white">Global Fake News Heatmap</CardTitle>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px] bg-gray-700 border-gray-600">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent className="bg-gray-700 border-gray-600">
            <SelectItem value="day">Last 24 Hours</SelectItem>
            <SelectItem value="week">Last 7 Days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
          <div ref={mapContainerRef} className="w-full h-full" />
          <div className="absolute bottom-4 right-4 bg-gray-900/80 p-3 rounded-md">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-4 h-4 rounded-full bg-[#FF5252]"></div>
              <span className="text-sm text-white">High Concentration</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-[#FF5252]/30"></div>
              <span className="text-sm text-white">Low Concentration</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Add this to make TypeScript happy with the global initMap function
declare global {
  interface Window {
    initMap: () => void
    google: any
  }
}

export default Heatmap

