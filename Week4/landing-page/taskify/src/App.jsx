import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./assets/css/main.css";

let features = [
  {
    title: "Task Tracking",
    description:
      "Monitor dan atur semua tugas proyekmu dengan mudah. Tetapkan tenggat waktu, prioritas, dan status hanya dalam beberapa klik.",
  },
  {
    title: "Collaboration",
    description:
      "Bekerja sama dalam tim jadi lebih mudah. Komentar langsung di tugas, bagikan file, dan beri update secara real-time.",
  },
  {
    title: "Analytics",
    description:
      "Dapatkan wawasan tentang performa tim dengan grafik dan laporan yang mudah dipahami untuk pengambilan keputusan yang lebih baik.",
  },
];

function App() {
  return (
    <div className="page-container">
      <Header />
      <Navbar />
      <HeroSection />
      <main className="main-content">
        <MainContent data={features} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
