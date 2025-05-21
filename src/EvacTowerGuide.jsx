import { useState } from "react";
import tanishiImg from "./assets/tanishi.png";
import nakaharaImg from "./assets/nakahara.png";
import hayashiImg from "./assets/Hayashi.png";
import potat0nImg from "./assets/PoTat0N.png";

const routeData = {
  "worlds-edge": [
    { id: 1, label: "ラバシティ → 展望", videoUrl: "" },
    { id: 2, label: "クリマタイザー → エピセンター", videoUrl: "" },
    { id: 3, label: "発射場 → フラグメント", videoUrl: "" },
  ],
  "storm-point": [
    { id: 4, label: "セノーテ洞窟付近蜘蛛の巣前 → セノーテ洞窟中", externalLink: "https://x.com/Privacy_Pleas/status/1821994835022377193" },
    { id: 5, label: "ザ・パイロン → エコーHQ", externalLink: "https://x.com/Privacy_Pleas/status/1831384684422738081/video/1" },
    { id: 6, label: "旧IMC武器庫付近 → プラウラーの巣", externalLink: "https://x.com/nrkm_0n0_/status/1827367234668466536" },
    { id: 7, label: "カスケード下のキャノン付近 → 旧IMC武器庫", externalLink: "https://x.com/74tomobon/status/1826609851856027789" },
    { id: 8, label: "コマンドセンター蜘蛛の巣 → ザ・ウォール", videoUrl: "https://www.youtube.com/embed/1szdsvPJXvY?start=24" },
    { id: 9, label: "チェックポイントの崖付近 → ノースパッドorダウンビースト", videoUrl: "https://clips.twitch.tv/embed?clip=BillowingRespectfulOctopusLeeroyJenkins-oGtmeIIjrwcsRfGl&parent=localhost" },
    { id: 10, label: "立ち入り禁止区域端の岩からザ・パイロン → コースタル側の家", videoUrl: "https://www.youtube.com/embed/9dRbuW7nh8I?start=115" },
    { id: 11, label: "発射台 → 破滅の海岸横プラウラーの巣", videoUrl: "https://www.youtube.com/embed/-PjFUAk3QxQ?start=106" },
    { id: 12, label: "カスケード上のキャノン → CETOステーション付近集落", videoUrl: "https://www.youtube.com/embed/kMolzG1r4qA?start=175" },
    { id: 13, label: "CETOステーション上岩 → ザ・ミル付近プラウラーの巣", videoUrl: "https://www.youtube.com/embed/K6vYhXuoBu8?start=280" },
    { id: 14, label: "ザ・ウォールの外側壁 → プラウラーの巣", videoUrl: "https://www.youtube.com/embed/gvuVjBhAoPA?start=143" },
    { id: 15, label: "エコーHQ → 破滅の海岸上の橋", videoUrl: "https://www.youtube.com/embed/m4Vo43d5LGc?start=1133" },
    { id: 16, label: "CETOステーション付近丸い建物 → CETOステーション奥", videoUrl: "https://www.youtube.com/embed/4wZm6ViSzm8?start=74" },
    { id: 17, label: "立ち入り禁止区域 → 立ち入り禁止区域洞窟外", externalLink: "https://x.com/Privacy_Pleas/status/1851267900847370650" },
  ],
  "broken-moon": [
    { id: 18, label: "アトモステーション → エターナルガーデン", videoUrl: "" },
    { id: 19, label: "プロムナード → エターナルガーデン", videoUrl: "" },
  ],
};

const players = [
  {
    name: "tanishi",
    role: "IGL",
    img: tanishiImg,
    links: ["https://www.twitch.tv/tanishi_o"]
  },
  {
    name: "Νακαχαρα",
    role: "フラッガー",
    img: nakaharaImg,
    links: ["https://www.twitch.tv/zenbuaisiteruyo"]
  },
  {
    name: "Hayashi",
    role: "フレックス",
    img: hayashiImg,
    links: ["https://youtube.com/channel/UCao7xOhNwM50tjLQCixSUtw?si=Qx_3M--zuzF6rodX"]
  },
  {
    name: "PoTat0N",
    role: "コーチ",
    img: potat0nImg,
    links: ["https://www.twitch.tv/potat0n693"]
  },
];

const videoLinks = [
  {
    title: "脱出タワーの使い方（10:13〜）",
    url: "https://www.youtube.com/embed/3W4McYsiPoM?start=613"
  },
  {
    title: "プロがエバックタワーを使っているシーン",
    url: "https://www.youtube.com/embed/GM23jL8Wmlc"
  },
  {
    title: "移動のタイミングと使い方",
    url: "https://www.youtube.com/embed/yb4OSBxcVWg"
  },
];

export default function EvacTowerGuide() {
  const [activeTab, setActiveTab] = useState("basic");
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const tabs = [
    { key: "basic", label: "エバック基礎" },
    { key: "worlds-edge", label: "ワールズエッジ" },
    { key: "storm-point", label: "ストームポイント" },
    { key: "broken-moon", label: "ブロークンムーン" },
    { key: "videos", label: "参考動画" },
    { key: "streams", label: "メンバー" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 bg-black text-white shadow-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold tracking-wide text-white">EVAC</div>
          <nav className="flex gap-8 text-sm font-semibold">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setSelectedRoute(null);
                  setSelectedVideo(null);
                }}
                className={`transition ${
                  activeTab === tab.key ? "text-cyan-300" : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {tab.label.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section className="relative text-white overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Evac Tower Guide</h2>
          <p className="text-sm text-cyan-300">全マップ対応：ルート・活用法・参考動画</p>
        </div>
      </section>

      {activeTab === "basic" && (
        <section className="relative bg-black py-16">
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">エバックタワーとは？</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              脱出タワーとは、サバイバルスロットに装備できる新アイテム。使用することでジャンプタワーを設置することができ、いつでもヴァルキリーのような快適マップ移動が可能となる。
            </p>
            <div className="mt-10 flex justify-center">
              <iframe
                className="rounded-lg shadow-lg w-full md:w-2/3 h-72 md:h-96"
                src="https://www.youtube.com/embed/3W4McYsiPoM?start=613"
                title="Evac Tower 基礎動画"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      )}

      {["worlds-edge", "storm-point", "broken-moon"].includes(activeTab) && (
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <aside className="bg-gray-900 p-6 rounded-lg shadow col-span-1">
            <h4 className="text-xl font-semibold mb-4">エバックポイント</h4>
            <div className="space-y-2">
              {(routeData[activeTab] || []).map((route) => (
                <button
                  key={route.id}
                  onClick={() => setSelectedRoute(route)}
                  className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700"
                >
                  {route.label}
                </button>
              ))}
            </div>
          </aside>
          <section className="col-span-2 bg-gray-900 p-6 rounded-lg shadow flex items-center justify-center">
            {selectedRoute?.videoUrl ? (
              <iframe
                className="rounded-lg shadow-lg w-full h-64 md:h-96"
                src={selectedRoute.videoUrl}
                title={selectedRoute.label}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : selectedRoute?.externalLink ? (
              <a
                href={selectedRoute.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                外部サイトで動画を見る
              </a>
            ) : (
              <p className="text-gray-400">ルートを選択すると、ここに動画が表示されます。</p>
            )}
          </section>
        </section>
      )}

      {activeTab === "videos" && (
        <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <aside className="bg-gray-900 p-6 rounded-lg shadow col-span-1">
            <h4 className="text-xl font-semibold mb-4">動画カテゴリ</h4>
            <div className="space-y-2">
              {videoLinks.map((video, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVideo(video)}
                  className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700"
                >
                  {video.title}
                </button>
              ))}
            </div>
          </aside>
          <section className="col-span-2 bg-gray-900 p-6 rounded-lg shadow flex items-center justify-center">
            {selectedVideo ? (
              <iframe
                className="rounded-lg shadow-lg w-full h-64 md:h-96"
                src={selectedVideo.url}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p className="text-gray-400">動画を選択すると、ここに表示されます。</p>
            )}
          </section>
        </section>
      )}

      {activeTab === "streams" && (
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-bold mb-6">メンバー紹介</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {players.map((player, index) => (
              <div key={index} className="flex items-center gap-6 bg-gray-800 p-4 rounded-lg">
                <img src={player.img} alt={player.name} className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <p className="text-white font-semibold">{player.name}</p>
                  <p className="text-gray-400 text-sm">{player.role}</p>
                  <div className="mt-2 space-x-2">
                    {player.links.map((link, i) => (
                      <a
                        key={i}
                        href={link}
                        className="text-cyan-400 text-sm hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        配信を見る
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
