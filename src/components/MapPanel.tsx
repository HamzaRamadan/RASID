import  { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export default function MapPanel() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // إنشاء WebMap
    const map = new WebMap({
        basemap: "dark-gray"

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
<div className="w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] bg-[#071e22] overflow-hidden">
  <div className="relative w-screen h-[420px]">
    <div ref={mapRef} className="w-full h-full " />

        {/* top-left small buttons */}
        <div className="absolute top-4 left-4 flex gap-2">
                      <img src="/images/layer1.png" alt="layer1" className="w-20 sm:w-20" />
        </div>

        {/* right toolbar/ */}
        <div className="absolute right-4 top-5 flex flex-col gap-2">
                      <img src="/images/layer2.png" alt="layer2" className="w-8 sm:w-8" />
          
          <button className="bg-[#fff] p-2 rounded-md text-[#0D212C]">3D</button>
        </div>

        {/* risk legend */}
        <div className="absolute right-6 bottom-2 bg-[#0D212CE5] p-3 rounded-md text-sm flex flex-col items-center w-28 sm:w-28">
  <div className="font-semibold mb-2">Risk Score :</div>
  <img src="/images/Risk Score.png" alt="Risk Score" className="w-14 sm:w-14" />
</div>

      </div>
    </div>
  );
}
