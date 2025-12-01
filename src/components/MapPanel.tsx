import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export default function MapPanel() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // إنشاء WebMap
    const map = new WebMap({
      // basemap: "topo-vector", 
        basemap: "dark-gray-vector"
    });

    // إنشاء MapView
    const view = new MapView({
      container: mapRef.current,
      map: map,
      center: [31.2357, 30.0444], // طول وعرض مصر تقريبا
      zoom: 6,
    });

    // إضافة FeatureLayer من الرابط
    const featureLayer = new FeatureLayer({
      url: "https://services1.arcgis.com/dEWY7aW7h9zHrSP9/arcgis/rest/services/Development_Projects/FeatureServer/0",
    });

    map.add(featureLayer);

    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto bg-[#071e22] rounded-xl overflow-hidden  ">
      <div className="relative h-[420px]">
        <div ref={mapRef} className="w-full h-full" />
        {/* top-left small buttons */}
        <div className="absolute top-4 left-4 flex gap-2">
          <button className="bg-[#0d2e32] p-2 rounded-md border border-teal-700">🗺️</button>
          <button className="bg-[#0d2e32] p-2 rounded-md border border-teal-700">🔍</button>
        </div>

        {/* right toolbar */}
        <div className="absolute right-4 top-28 flex flex-col gap-2">
          <button className="bg-[#0d2e32] p-2 rounded-md border border-teal-700">+</button>
          <button className="bg-[#0d2e32] p-2 rounded-md border border-teal-700">−</button>
          <button className="bg-[#0d2e32] p-2 rounded-md border border-teal-700">3D</button>
        </div>

        {/* risk legend */}
        <div className="absolute right-6 bottom-10 bg-[#07282d] p-3 rounded-md border border-teal-800 text-xs">
          <div className="font-semibold mb-2">Risk Score</div>
          <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 rounded" />
        </div>
      </div>
    </div>
  );
}
