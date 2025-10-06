import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ThoiTiet from "./components/ThoiTiet";
import DanhSachSinhVien from "./components/DanhSachSinhVien";
import TinTuc from "./components/TinTuc";
import "./App.css";

function UngDung() {
  return (
    <BrowserRouter>
      <div className="ung-dung">
        <nav className="thanh-dieu-huong">
          <div className="logo">B24DCC059</div>
          <div className="lien-ket">
            <Link to="/thoitiet">Thời tiết</Link>
            <Link to="/sinhvien">Sinh viên</Link>
            <Link to="/tintuc">Tin tức</Link>
          </div>
        </nav>

        <div className="noi-dung">
          <Routes>
            <Route path="/thoitiet" element={<ThoiTiet />} />
            <Route path="/sinhvien" element={<DanhSachSinhVien />} />
            <Route path="/tintuc" element={<TinTuc />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default UngDung;

