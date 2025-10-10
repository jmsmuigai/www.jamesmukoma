import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'

interface MapboxConfig {
  accessToken: string
  style?: string
  center?: [number, number]
  zoom?: number
  pitch?: number
  bearing?: number
}

interface UseMapboxReturn {
  map: mapboxgl.Map | null
  container: React.RefObject<HTMLDivElement>
  isLoaded: boolean
  addLayer: (layer: any) => void
  removeLayer: (layerId: string) => void
  addSource: (sourceId: string, source: any) => void
  removeSource: (sourceId: string) => void
  flyTo: (options: any) => void
  fitBounds: (bounds: [[number, number], [number, number]], options?: any) => void
}

function useMapbox(config: MapboxConfig): UseMapboxReturn {
  const container = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  const {
    accessToken,
    style = 'mapbox://styles/mapbox/dark-v11',
    center = [-1.2921, 36.8219], // Nairobi coordinates
    zoom = 6,
    pitch = 0,
    bearing = 0,
  } = config

  useEffect(() => {
    if (!container.current || !accessToken) return

    // Set access token
    mapboxgl.accessToken = accessToken

    // Initialize map
    const map = new mapboxgl.Map({
      container: container.current,
      style,
      center,
      zoom,
      pitch,
      bearing,
      antialias: true,
    })

    mapRef.current = map

    // Map load event
    map.on('load', () => {
      setIsLoaded(true)
    })

    // Map error event
    map.on('error', (e) => {
      console.error('Mapbox error:', e)
    })

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [accessToken, style, center, zoom, pitch, bearing])

  const addLayer = (layer: any) => {
    if (mapRef.current && isLoaded) {
      mapRef.current.addLayer(layer)
    }
  }

  const removeLayer = (layerId: string) => {
    if (mapRef.current && isLoaded && mapRef.current.getLayer(layerId)) {
      mapRef.current.removeLayer(layerId)
    }
  }

  const addSource = (sourceId: string, source: any) => {
    if (mapRef.current && isLoaded) {
      mapRef.current.addSource(sourceId, source)
    }
  }

  const removeSource = (sourceId: string) => {
    if (mapRef.current && isLoaded && mapRef.current.getSource(sourceId)) {
      mapRef.current.removeSource(sourceId)
    }
  }

  const flyTo = (options: any) => {
    if (mapRef.current && isLoaded) {
      mapRef.current.flyTo(options)
    }
  }

  const fitBounds = (bounds: [[number, number], [number, number]], options?: any) => {
    if (mapRef.current && isLoaded) {
      mapRef.current.fitBounds(bounds, options)
    }
  }

  return {
    map: mapRef.current,
    container,
    isLoaded,
    addLayer,
    removeLayer,
    addSource,
    removeSource,
    flyTo,
    fitBounds,
  }
}

export default useMapbox
